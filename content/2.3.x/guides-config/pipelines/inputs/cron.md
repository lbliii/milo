---
title: Cron Input
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
  "input": {
    "cron": {
    "name": string,
    "spec": string,
    "repo": string,
    "start": time,
    "overwrite": bool
    }
},

```

## About 

Cron inputs allow you to trigger pipelines based on time. 

A Cron input is based on the Unix utility called `cron`. When you create a pipeline with one or more Cron inputs, `pachd` creates a repo for each of them. The start time for Cron input is specified in its spec. When a Cron input triggers, `pachd` commits a single file, named by the current RFC 3339 timestamp to the repo which contains the time which satisfied the spec.

## Attributes 

### name 

`input.cron.name` is the name for the input. Its semantics is similar to those of `input.pfs.name`. Except that it is not optional.

### Spec 

`input.cron.spec` is a cron expression which specifies the schedule on which to trigger the pipeline. To learn more about how to write schedules, see the Wikipedia page on cron. Pachyderm supports non-standard schedules, such as `"@daily"`.

### repo 

`input.cron.repo` is the repo which Pachyderm creates for the input. This parameter is optional. If you do not specify this parameter, then `"<pipeline-name>_<input-name>"` is used by default.

### start 

### overwrite 