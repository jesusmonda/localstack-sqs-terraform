LocalStack is a cloud service emulator, you can apply through Terraform. You have a example here using Terraform, API NodeJS to send message on the queue and an nodejs app to receive message from the queue, in addition to this, there is a docker-compose file to deploy LocalStack and NodeJS app on local.

```sh
aws configure set region eu-west-1 --profile jesusmonda-localstack
aws configure set aws_access_key_id test --profile jesusmonda-localstack
aws configure set aws_secret_access_key test --profile jesusmonda-localstack

cd infrastructure/local
terraform init
terraform apply

cd ../../microservices
docker-compose up
curl http://localhost:8080 -> You will look received message from the queue on the terminal
```
