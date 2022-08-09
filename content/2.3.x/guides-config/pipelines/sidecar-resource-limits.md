---
title: Sidecar Resource Limits
description: Learn about pipeline specifications.
author:
tags:
categories:
series: ["pipeline spec"]
seriesPart: 6
date:
weight: 6
label: "optional" 
---


## Sidecar Resource Limits Spec

```json
 "sidecar_resource_limits": {
    "memory": "string",
    "cpu": 0
  },
```

### About Sidecar Resource Limits

`sidecar_resource_limits` determines the upper threshold of resources allocated to the sidecar containers.

This field can be useful in deployments where Kubernetes automatically applies resource limits to containers, which might conflict with Pachyderm pipelines' resource requests. Such a deployment might fail if Pachyderm requests more than the default Kubernetes limit. `sidecar_resource_limits` enables you to explicitly specify these resources to fix the issue.

## Sidecar Resource Limits Attributes 

### memory

### cpu