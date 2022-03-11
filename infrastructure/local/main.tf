module "sqs" {
  source = "../modules/sqs"

  environment  = "local"
  project_name = "jesusmonda"
}
