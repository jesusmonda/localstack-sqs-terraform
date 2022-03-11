module "sqs" {
  source = "../modules/sqs"

  environment  = "dev"
  project_name = "jesusmonda"
}
