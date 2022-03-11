# ECS-ALB-ASG-TF-api-

# Deploy
```
aws configure set region eu-west-1 --profile jesusmonda-localstack
aws configure set aws_access_key_id test --profile jesusmonda-localstack
aws configure set aws_secret_access_key test --profile jesusmonda-localstack
cd infrastructure/local
terraform init
terraform apply

cd ../../microservices
docker-compose up
curl http://localhost:8080
```