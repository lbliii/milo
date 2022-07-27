---
title: Repo layout
description:
author:
tags: ["developer","feedback","testing","repo"]
series: ["contributors"]
seriesPart: 3
weight: 3
date:
---
# Repo layout

Following is a layout of the various directories that make up the pachyderm
repo, and their purpose.

## ETC
```shell
📦etc
 ┣ 📂build
 ┣ 📂compile
 ┣ 📂contributing
 ┣ 📂deploy
 ┃ ┣ 📂azure
 ┃ ┣ 📂cloudfront
 ┃ ┣ 📂gcp
 ┃ ┣ 📂gpu
 ┃ ┣ 📂tracing
 ┣ 📂examples
 ┣ 📂generate-envoy-config
 ┣ 📂helm
 ┃ ┣ 📂.cr-index
 ┃ ┣ 📂LICENSES
 ┃ ┣ 📂examples
 ┃ ┣ 📂pachyderm
 ┃ ┃ ┣ 📂charts
 ┃ ┃ ┣ 📂dependencies
 ┃ ┃ ┃ ┗ 📂postgresql
 ┃ ┃ ┃ ┃ ┣ 📂charts
 ┃ ┃ ┃ ┃ ┃ ┗ 📂common
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂templates
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂validations
 ┃ ┃ ┃ ┃ ┣ 📂ci
 ┃ ┃ ┃ ┃ ┣ 📂files
 ┃ ┃ ┃ ┃ ┃ ┣ 📂conf.d
 ┃ ┃ ┃ ┃ ┃ ┣ 📂docker-entrypoint-initdb.d
 ┃ ┃ ┃ ┃ ┣ 📂templates
 ┃ ┃ ┣ 📂templates
 ┃ ┃ ┃ ┣ 📂cloudsqlAuthProxy
 ┃ ┃ ┃ ┣ 📂console
 ┃ ┃ ┃ ┣ 📂enterprise-server
 ┃ ┃ ┃ ┣ 📂etcd
 ┃ ┃ ┃ ┣ 📂ingress
 ┃ ┃ ┃ ┣ 📂kube-event-tail
 ┃ ┃ ┃ ┣ 📂pachd
 ┃ ┃ ┃ ┃ ┣ 📂rbac
 ┃ ┃ ┃ ┣ 📂pgbouncer
 ┃ ┃ ┃ ┣ 📂proxy
 ┃ ┃ ┃ ┣ 📂tests
 ┃ ┣ 📂test
 ┣ 📂kube
 ┣ 📂kubernetes-kafka
 ┃ ┣ 📂0configure
 ┃ ┣ 📂2rbac-namespace-default
 ┃ ┣ 📂3zookeeper
 ┃ ┣ 📂4kafka
 ┃ ┣ 📂5outside-services
 ┣ 📂kubernetes-prometheus
 ┣ 📂netcat
 ┣ 📂proto
 ┃ ┣ 📂pachgen
 ┣ 📂redhat
 ┣ 📂test-images
 ┣ 📂testing
 ┃ ┣ 📂artifacts
 ┃ ┣ 📂circle
 ┃ ┣ 📂dags
 ┃ ┣ 📂images
 ┃ ┃ ┗ 📂ubuntu_with_s3_clients
 ┃ ┣ 📂introspect
 ┃ ┣ 📂kafka
 ┃ ┣ 📂loads
 ┃ ┃ ┣ 📂few-commits
 ┃ ┃ ┃ ┣ 📂few-modifications
 ┃ ┃ ┃ ┃ ┣ 📂few-directories
 ┃ ┃ ┃ ┃ ┣ 📂many-directories
 ┃ ┃ ┃ ┃ ┗ 📂one-directory
 ┃ ┃ ┃ ┗ 📂many-modifications
 ┃ ┃ ┃ ┃ ┗ 📂one-directory
 ┃ ┃ ┣ 📂many-commits
 ┃ ┃ ┃ ┣ 📂few-modifications
 ┃ ┃ ┃ ┗ 📂many-modifications
 ┃ ┣ 📂migration
 ┃ ┃ ┣ 📂v1_11
 ┃ ┃ ┣ 📂v1_7
 ┃ ┣ 📂opa-policies
 ┃ ┣ 📂s3gateway
 ┃ ┃ ┣ 📂runs
 ┃ ┣ 📂spout
 ┣ 📂worker
```

## SRC 

```shell
📦src # Source code 
 ┣ 📂admin 
 ┣ 📂auth 
 ┣ 📂client # protobufs & source code for go client
 ┃ ┣ 📂limit
 ┣ 📂debug
 ┣ 📂enterprise
 ┣ 📂identity
 ┣ 📂internal 
 ┃ ┣ 📂ancestry # package that parses git ancestry references
 ┃ ┣ 📂backoff # package that implements backoff algorithms for retrying operations
 ┃ ┣ 📂cert # library for generating x509 certificates
 ┃ ┣ 📂clientsdk # package for implementing gRPC APIs functions
 ┃ ┣ 📂clusterstate # package containing set of migrations for running pachd at the current version
 ┃ ┣ 📂cmdutil # utilities for pachctl CLI
 ┃ ┣ 📂collection # collection of utilities (errors, errorutil, tracing, & watch)
 ┃ ┣ 📂config # package for handling pachd config 
 ┃ ┣ 📂dbutil # utilities for handling database connections
 ┃ ┣ 📂deploy # package that detects if we're using a non-released version of pachd image
 ┃ ┣ 📂dlock # package that implements a distributed lock on top of etcd
 ┃ ┣ 📂dockertestenv # package for handling docker test environments 
 ┃ ┣ 📂errors # package for handling errors + stack traces
 ┃ ┃ ┣ 📂testing
 ┃ ┣ 📂errutil # utilities for handling error messages 
 ┃ ┣ 📂exec # package that runs external commands
 ┃ ┣ 📂fsutil # utilities for handling temporary files 
 ┃ ┣ 📂grpcutil # utilities for working with gRPC clients/servers
 ┃ ┣ 📂keycache # package that watches, caches, and returns keys in atomic value
 ┃ ┣ 📂lease # package that manages resources via leases
 ┃ ┣ 📂license # package that handles checking enterprise licensing 
 ┃ ┣ 📂log # package that formats logs and makes them pretty
 ┃ ┣ 📂lokiutil # utilities for leveraging loki logs 
 ┃ ┃ ┣ 📂client 
 ┃ ┣ 📂metrics # package that submits user & cluster metrics to segment
 ┃ ┣ 📂middleware 
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂errors
 ┃ ┃ ┣ 📂logging
 ┃ ┃ ┗ 📂version
 ┃ ┣ 📂migrations #  package that handles env and state structs 
 ┃ ┣ 📂minikubetestenv  # package for handling minikube test environments 
 ┃ ┣ 📂miscutil # utilities for miscellaneous 
 ┃ ┣ 📂obj # package for handling objects (local, minio, amazon, cache, etc)
 ┃ ┃ ┣ 📂integrationtests
 ┃ ┣ 📂pacherr # package to check if error exists 
 ┃ ┣ 📂pachhash # package for handling hashes 
 ┃ ┣ 📂pachsql # package for handling sql ingest tool (snowflake, mysql,pgx)
 ┃ ┣ 📂pachtmpl # package for handling jsonnet templates 
 ┃ ┣ 📂pager
 ┃ ┣ 📂pbutil # utilities for working with protobufs
 ┃ ┣ 📂pfsdb
 ┃ ┣ 📂pfsfile
 ┃ ┣ 📂pfsload
 ┃ ┣ 📂pfssync
 ┃ ┣ 📂pool
 ┃ ┣ 📂ppsconsts
 ┃ ┣ 📂ppsdb
 ┃ ┣ 📂ppsload
 ┃ ┣ 📂ppsutil # utilities for handling pipeline-related tasks
 ┃ ┣ 📂pretty
 ┃ ┣ 📂profileutil # utilities for exporting performance information to external systems
 ┃ ┣ 📂progress
 ┃ ┣ 📂promutil # utilities for collecting Prometheus metrics
 ┃ ┣ 📂random
 ┃ ┣ 📂randutil # utilities for handling unique/random strings (uuid)
 ┃ ┣ 📂require # utilities for making unit tests terser
 ┃ ┣ 📂sdata
 ┃ ┃ ┣ 📂csv
 ┃ ┣ 📂secrets
 ┃ ┣ 📂serde
 ┃ ┣ 📂serviceenv
 ┃ ┣ 📂storage
 ┃ ┃ ┣ 📂chunk
 ┃ ┃ ┣ 📂fileset
 ┃ ┃ ┃ ┣ 📂index
 ┃ ┃ ┣ 📂kv
 ┃ ┃ ┣ 📂metrics
 ┃ ┃ ┣ 📂renew
 ┃ ┃ ┗ 📂track
 ┃ ┣ 📂stream
 ┃ ┣ 📂tabwriter
 ┃ ┣ 📂tarutil # utilities for [tbd]
 ┃ ┣ 📂task
 ┃ ┃ ┣ 📂cmds
 ┃ ┃ ┣ 📂taskprotos
 ┃ ┣ 📂testetcd
 ┃ ┣ 📂testpachd
 ┃ ┣ 📂testsnowflake
 ┃ ┣ 📂testutil # utilities for [tbd]
 ┃ ┃ ┣ 📂local
 ┃ ┃ ┣ 📂random
 ┃ ┣ 📂tls
 ┃ ┣ 📂tracing
 ┃ ┃ ┣ 📂extended
 ┃ ┣ 📂transactiondb
 ┃ ┣ 📂transactionenv
 ┃ ┃ ┣ 📂txncontext
 ┃ ┣ 📂transforms
 ┃ ┣ 📂uuid
 ┃ ┗ 📂watch
 ┣ 📂license
 ┣ 📂pfs
 ┣ 📂pps 
 ┣ 📂proxy
 ┣ 📂server
 ┃ ┣ 📂admin
 ┃ ┃ ┣ 📂cmds
 ┃ ┃ ┗ 📂server
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂cmds
 ┃ ┃ ┣ 📂server
 ┃ ┃ ┃ ┣ 📂testing
 ┃ ┃ ┣ 📂testing
 ┃ ┣ 📂cmd
 ┃ ┃ ┣ 📂mount-server
 ┃ ┃ ┃ ┣ 📂cmd
 ┃ ┃ ┣ 📂pachctl
 ┃ ┃ ┃ ┣ 📂cmd
 ┃ ┃ ┃ ┣ 📂shell
 ┃ ┃ ┣ 📂pachctl-doc
 ┃ ┃ ┣ 📂pachd
 ┃ ┃ ┣ 📂pachtf
 ┃ ┃ ┗ 📂worker
 ┃ ┣ 📂config
 ┃ ┣ 📂debug
 ┃ ┃ ┣ 📂cmds
 ┃ ┃ ┣ 📂server
 ┃ ┃ ┗ 📂shell
 ┃ ┣ 📂enterprise
 ┃ ┃ ┣ 📂cmds
 ┃ ┃ ┣ 📂limits
 ┃ ┃ ┣ 📂metrics
 ┃ ┃ ┣ 📂server
 ┃ ┃ ┣ 📂testing
 ┃ ┃ ┣ 📂text
 ┃ ┣ 📂identity
 ┃ ┃ ┣ 📂cmds
 ┃ ┃ ┣ 📂server
 ┃ ┣ 📂identityutil # utilities for [tbd]
 ┃ ┣ 📂license
 ┃ ┃ ┣ 📂cmds
 ┃ ┃ ┣ 📂server
 ┃ ┣ 📂pfs
 ┃ ┃ ┣ 📂cmds
 ┃ ┃ ┣ 📂fuse
 ┃ ┃ ┣ 📂pretty
 ┃ ┃ ┣ 📂s3
 ┃ ┃ ┣ 📂server
 ┃ ┃ ┃ ┣ 📂testing
 ┃ ┣ 📂pps
 ┃ ┃ ┣ 📂cmds
 ┃ ┃ ┣ 📂pretty
 ┃ ┃ ┣ 📂server
 ┃ ┣ 📂proxy
 ┃ ┃ ┗ 📂server
 ┃ ┣ 📂transaction
 ┃ ┃ ┣ 📂cmds
 ┃ ┃ ┣ 📂pretty
 ┃ ┃ ┣ 📂server
 ┃ ┃ ┃ ┣ 📂testing
 ┃ ┣ 📂worker
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┣ 📂datum
 ┃ ┃ ┣ 📂driver
 ┃ ┃ ┣ 📂logs
 ┃ ┃ ┣ 📂pipeline
 ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┣ 📂spout
 ┃ ┃ ┃ ┗ 📂transform
 ┃ ┃ ┣ 📂server
 ┃ ┃ ┣ 📂stats
 ┣ 📂task
 ┣ 📂templates
 ┣ 📂testing
 ┃ ┣ 📂deploy
 ┃ ┣ 📂loadtest
 ┃ ┃ ┣ 📂obj
 ┃ ┃ ┃ ┣ 📂build
 ┃ ┃ ┃ ┣ 📂cmd
 ┃ ┃ ┃ ┃ ┗ 📂supervisor
 ┃ ┃ ┃ ┣ 📂kube
 ┃ ┗ 📂match
 ┣ 📂transaction
 ┗ 📂version
 ┃ ┣ 📂versionpb
```
