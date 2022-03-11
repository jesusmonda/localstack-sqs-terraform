resource "aws_sqs_queue" "queue" {
  name                      = "${var.project_name}-${var.environment}.fifo"
  delay_seconds             = 0
  message_retention_seconds = 1209600
  receive_wait_time_seconds = 0
  visibility_timeout_seconds = 1800
  fifo_queue                  = true
  content_based_deduplication = true
  deduplication_scope   = "messageGroup"

  tags = {
    Environment = "${var.project_name}-${var.environment}"
  }
}