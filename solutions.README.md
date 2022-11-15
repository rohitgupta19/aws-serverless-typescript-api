Problem: 

https://gist.github.com/TimKregerIflix/ce2e29deaaeba6469824a2c1dfe13d78

if this was a real service in production which will grow in popularity and complexity (let’s say it will query a database), and you are given time and budget to do it, how would you ensure this service’s success and reliability? (you don’t have to include this in your stack, you can write it down in the README)

Solution :

There are few options to build this api. 

1. Create an api using nodejs/nestjs framework with typescript. Build and docker image and deploy using ECS/EKS containers. Scaling in future will be adjusted based on traffic (minimum and max replica)

2. Create a serverless project, create a lambda function with api gateway attached to it. Do a DNS mapping using any CDN provide for api gateway url.

I have made an assumption that this api is not required to be running always and can served on demand so to save complexity on building it out and cost of running it on the cloud I have choose developing and deploying this service as a serverless project since its quick to build and maintain it and also due to the low complexity of the business logic.

With Lambda as a function deploying, scaling is also taken care by the cloud provider and we can adjust the concurrent execution in future based on the traffic.

For Database we can also choose any serverless Aurora RDS or Dynomo or any other Cache layer which will scale as well if needed.
