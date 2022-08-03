---
title: Troubleshooting
description:
author:
tags:
categories:
products:
date:
weight: 8
---

This section describe troubleshooting guidelines that should
help you in troubleshooting your deployment and pipelines.

Pachyderm has a built-in logging system that collects
information about events in your Pachyderm environment at
pipeline, datum, and job level. See [pachctl logs](../reference/pachctl/pachctl_logs.md).

To troubleshoot the cluster itself, use the `kubectl` tool
troubleshooting tips. A few basic commands that you can use
include the following:

* Get the list of all Kubernetes objects:

  ```shell
  kubectl get all
  ```

* Get the information about a pod:

  ```shell
  kubectl describe pod <podname>
  ```
