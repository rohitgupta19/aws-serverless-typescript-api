#!/bin/env node
const fs = require('fs');
const state = require('../.serverless/serverless-state.json');
const AWS = require('aws-sdk');

async function main() {
    const cf = new AWS.CloudFormation();

    const stack = await cf.describeStacks({
        StackName: state.service.service + '-' + state.service.provider.stage,
    }).promise();

    const stackParams = {};
    if (!state.service.provider.stackParameters) {
        fs.writeFileSync('./.serverless/cloudformation-template-config.json', JSON.stringify({}));
        return; 
    }

    state.service.provider.stackParameters.map(param => {
        let val;
        if (param.UsePreviousValue) {
            const existingParam = stack.Stacks[0].Parameters.find(p => p.ParameterKey === param.ParameterKey)
            if (existingParam)
                val = existingParam.ParameterValue
            else{
                console.log('Parameter', param.ParameterKey,'not found on current stack. Using default')
                if (param.DefaultValue !== undefined)
                    val = param.DefaultValue
                else 
                    throw new Error("No default value specified for " + param.ParameterKey + " and no existing value found")
            }
        }
        else val = param.ParameterValue;

        stackParams[param.ParameterKey] = val;
    })
    const config = {
        Parameters: stackParams,
        Tags: Object.assign({STAGE: state.service.provider.stage}, state.service.provider.stackTags)
    }

    fs.writeFileSync('./.serverless/cloudformation-template-config.json', JSON.stringify(config));
};

main().then(() => console.log('Cloudformation Template Config output to: ./.serverless/cloudformation-template-config.json'))
      .catch((err)=> {console.log("Exception:", err); process.exit(1)});