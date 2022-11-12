aws-serverless-typescript-api
This is a serverless app in typescript to deploy a lambda function and return api response through api gateway

## Installation

Run the below command to install the npm packages

```bash
$ nvm use
$ npm install
```

## Build the code

```bash
$ npm run build
```

## Linting and Formatting the code

```bash
$ npm run lint
$ npm run prettier
```

# Deployment

There is a CI/CD Pipeline going to set up to continue deploy to AWS Environment once you push changes to Github Repo.
`Details will be updated soon`

But In order to deploy lambdas from your local environment to any AWS Stage, you need to have AWS CLI configured locally (aws configure) and can execute below command

`npx sls deploy -s ${stageName}` or `serverless deploy -s dev`

# Testing

copy the url below and open in the browser and it should return the aws_region and date time in ISO format.

https://x1qig3dtci.execute-api.us-east-1.amazonaws.com/dev/time

or curl the below command from the command line
curl https://x1qig3dtci.execute-api.us-east-1.amazonaws.com/dev/time
