aws-serverless-typescript-api
This is a serverless app in typescript to deploy a lambda function and return api response through api gateway

# Deployment

There is a CI/CD Pipeline already set up to continue deploy to AWS Environment once you push changes to Github Repo.

But In order to deploy lambdas from your local environment to any AWS Stage, you need to have AWS CLI configured locally and can execute below command

`npx sls deploy -s ${stageName}`

# test

copy the url below and open in the browser
https://x1qig3dtci.execute-api.us-east-1.amazonaws.com/dev/time
