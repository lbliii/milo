---
title: Resource Limits
description: Learn about pipeline specifications.
author:
tags:
categories:
series: 
seriesPart: 
date:
weight: 
---

## Resource Limits Spec 

```json
 "resource_limits": {
    "memory": "string",
    "cpu": 0,
    "gpu": {
      "type": "string",
      "number": 0
    },
    "disk": "string"
  },
```

### About Resource Limits

`resource_limits` describes the upper threshold of allowed resources a given worker can consume. If a worker exceeds this value, it will be evicted.

## Attributes 

### memory 

### cpu 

### gpu 

The `gpu` field is a number that describes how many GPUs each worker needs. Only whole number are supported; Kubernetes does not allow multiplexing of GPUs. 

Unlike the other resource fields, GPUs only have meaning in Limits, by requesting a GPU the worker will have sole access to that GPU while it is running. It's recommended to enable autoscaling if you are using GPUs so other processes in the cluster will have access to the GPUs while the pipeline has nothing to process. For more information about scheduling GPUs see the Kubernetes docs on the subject.

### disk

