---
title: Metadata
description: Learn about pipeline specifications.
author:
tags:  ["guides-config", "pipelines"]
categories:
series: ["pipeline spec"]
seriesPart: 2
date:
weight: 2
label: "optional" 
---

## Metadata Spec

```json
"metadata": {
"annotations": {
    "annotation": "string"
    },
"labels": {
    "label": "string"
    }
}
```

### About Metadata

This parameter enables you to add metadata to your pipeline pods by using Kubernetes' **labels** and **annotations**. 

## Metadata Attributes

### labels
`labels` help you to organize and keep track of your cluster objects by creating groups of pods based on the application they run, resources they use, or other parameters. Labels simplify the querying of Kubernetes objects and are handy in operations.

### annotations

Similarly to `labels`, you can add metadata through `annotations`. The difference is that you can specify any arbitrary metadata through `annotations`.

{{% notice warning %}}

Both parameters require a key-value pair. Do not confuse this parameter with `pod_patch` which adds metadata to the user container of the pipeline pod.
{{% /notice %}}

