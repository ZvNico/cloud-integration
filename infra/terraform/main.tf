provider "digitalocean" {
  token = var.do_token
}

resource "digitalocean_kubernetes_cluster" "cluster" {
  name   = var.cluster_name
  region = var.region

  version = var.kubernetes_version

  node_pool {
    name       = var.node_pool_name
    size       = var.node_size
    node_count = var.node_count
  }
}

variable "do_token" {
  description = "DigitalOcean API token"
  type        = string
}

variable "cluster_name" {
  description = "Name of the Kubernetes cluster"
  type        = string
  default     = "cluster-0"
}

variable "region" {
  description = "DigitalOcean region for the cluster"
  type        = string
  default     = "fra1"
}

variable "kubernetes_version" {
  description = "Kubernetes version for the cluster"
  type        = string
  default     = "1.29.1-do.0"
}

variable "node_pool_name" {
  description = "Name of the node pool"
  type        = string
  default     = "node-pool-0"
}

variable "node_size" {
  description = "Size of the nodes"
  type        = string
  default     = "s-2vcpu-4gb"
}

variable "node_count" {
  description = "Number of nodes in the pool"
  type        = number
  default     = 2
}