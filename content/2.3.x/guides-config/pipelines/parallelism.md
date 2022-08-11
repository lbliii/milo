---
title: Parallelism
description: Learn about pipeline specifications.
author:
tags:  ["guides-config", "pipelines"]
categories:
series: ["pipeline spec"]
seriesPart: 4
date:
weight: 4
label: "optional" 
---

## Parallelism Spec 

```json
  "parallelism_spec": {
    "constant": 0
  },
```

### About Parallelism

`parallelism_spec` describes how Pachyderm parallelizes your pipeline.

Pachyderm starts the number of workers that you specify. For example, set` "constant":10` to use 10 workers.

The default value is `"constant=1"`.

### Spouts & Services

Because spouts and services are designed to be single instances, do not modify the default `parallism_spec` value for these pipelines.