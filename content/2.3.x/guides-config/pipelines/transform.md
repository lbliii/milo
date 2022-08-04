---
title: Transform
description: Required attribute for building a pipeline spec.
author:
tags:
categories:
series: ["pipeline spec"]
seriesPart: 3
date:
weight: 3
---


## Transform Spec

```json
"transform": {
    "image": "string",
    "cmd": ["string"],
    "stdin": ["string"],
    "err_cmd": ["string"],
    "err_stdin": ["string"],
    "env": {
      "string": "string"
    },
    "secrets": [
      {
        "name": "string",
        "mount_path": "string"
      },
      {
        "name": "string",
        "env_var": "string",
        "key": "string"
      }
    ],
    "image_pull_secrets": ["string"],
    "accept_return_code": [0],
    "debug": true,
    "user": "string",
    "working_dir": "string",
    "dockerfile": "string"
  },
```

### About Transform

## Transform Attributes

### image 

`transform.image` is the name of the Docker image that your jobs use.

### cmd

`transform.cmd` is the command passed to the Docker run invocation. 

{{% notice info %}}
Similarly to Docker, `cmd` is not run inside a shell which means that wildcard globbing (`*`), pipes (`|`), and file redirects (`>` and `>>`) do not work. To specify these settings, you can set `cmd` to be a shell of your choice, such as `sh` and pass a shell script to `stdin`.
{{%/notice %}}

### stdin

`transform.stdin` is an array of lines that are sent to your command on stdin. Lines do not have to end in newline characters.


### err_cmd

`transform.err_cmd` is an optional command that is executed on failed datums. 

If the `err_cmd` is successful and returns `0` error code, it does not prevent the job from succeeding. This behavior means that `transform.err_cmd` can be used to ignore failed datums while still writing successful datums to the output repo, instead of failing the whole job when some datums fail. The `transform.err_cmd` command has the same limitations as transform.cmd.

### err_stdin

`transform.err_stdin` is an array of lines that are sent to your error command on stdin. Lines do not have to end in newline characters.

### env

`transform.env` is a key-value map of environment variables that Pachyderm injects into the container. 

There are also [environment variables](../../env-vars/) that are automatically injected into the container, such as:

- `PACH_JOB_ID`: the ID of the current job.
- `PACH_OUTPUT_COMMIT_ID`: the ID of the commit in the output repo for the current job.
- `<inputRepoName>_COMMIT`: the ID of the input commit (for example,`images_COMMIT` ) 

### secrets 

`transform.secrets` is an array of secrets. 

You can use the secrets to embed sensitive data, such as credentials. `secrets` reference Kubernetes secrets by name and specify a path to map the secrets or an environment variable (`env_var`) that the value should be bound to. 

- `secrets` must set name which should be the name of a secret in Kubernetes. 
- `secrets` must also specify either `mount_path` or `env_var` and `key`.

### image_pull_secrets

`transform.image_pull_secrets` is an array of image pull secrets.

Image pull secrets are similar to secrets -- except that they are mounted before the containers are created,so they can be used to provide credentials for image pulling. 

For example, if you are using a private Docker registry for your images, you can specify it by running the following command:

```sh
kubectl create secret docker-registry myregistrykey --docker-server=DOCKER_REGISTRY_SERVER --docker-username=DOCKER_USER --docker-password=DOCKER_PASSWORD --docker-email=DOCKER_EMAIL
```

And then, notify your pipeline about it by using "image_pull_secrets": [ "myregistrykey" ]. Read more about image pull secrets here.

### accept_return_code 

`accept_return_code` is an array of return codes, such as exit codes from your Docker command that are considered acceptable. 

If your Docker command exits with one of the codes in this array, it is considered a successful run to set job status. `0` is always considered a successful exit code.

### debug

`transform.debug` turns on added debug logging for the pipeline.


### user

`transform.user` sets the user that your code runs as, this can also be accomplished with a USER directive in your Dockerfile.

### working_dir

`transform.working_dir` sets the directory that your command runs from. You can also specify the `WORKDIR` directive in your Dockerfile.