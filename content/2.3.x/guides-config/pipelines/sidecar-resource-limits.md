---
title: Sidecar Resource Limits
description: Learn about pipeline specifications.
author:
tags:
categories:
series: 
seriesPart: 
date:
weight: 
---


## Spec

```json
 "sidecar_resource_limits": {
    "memory": "string",
    "cpu": 0
  },
```

## About 

`sidecar_resource_limits` determines the upper threshold of resources allocated to the sidecar containers.

This field can be useful in deployments where Kubernetes automatically applies resource limits to containers, which might conflict with Pachyderm pipelines' resource requests. Such a deployment might fail if Pachyderm requests more than the default Kubernetes limit. `sidecar_resource_limits` enables you to explicitly specify these resources to fix the issue.

## Attributes 

### memory

### cpu