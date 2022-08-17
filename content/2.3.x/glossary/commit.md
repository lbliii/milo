---
title: Commit
description: A Pachyderm commit is a snapshot that preserves the state of a repository's files and directories at a point in time. 
tags: ["reference"]
---

## TL;DR 

A Pachyderm commit is a snapshot that preserves the state of a repository's files and directories at a point in time.

---

## Usage 

### Start Commit 

You can start a commit by running the `pachctl start commit` command with reference to a specific repository. 

### Finish Commit

You can finish your commit after  making changes by running the `pachctl finish commit` command.

### Inspect Commit 

You can view detailed information about a commit by running the `pachctl inspect commit <repo>@<commitId>` command.

{{% notice tip %}}
If you specify a branch instead of a specific commit (`pachctl inspect commit <repo>@<branch>`), Pachyderm displays the information about the HEAD of the branch.
{{% /notice %}}

#### Notable Flags 

- `--raw`: outputs a detailed JSON version of the commit
- `--full-timestamps`: outputs the exact date and time of the commit

### Reference Commit
 You can reference a commit using its alphanumeric identifier:

- **Single Branch**: `<repo>@<commitID>`.
- **Multi-Branch**: `<repo>@<branch>=<commitID>` 

### List Commits

#### Global 

You can list all global commits by running the `pachctl list commits` command. 

#### With Same ID

You can list all commits sharing the same ID by running the `pachctl list commit <commitID>` command.

#### Downstream

You can run the command `pachctl wait commit <commitId>` to track commits downstream as they complete.

--- 

## About 

Repository history consists of the parent-child relationships between your data commits, where:

- An initial commit has `<none>` as a parent 
- Subsequent commits have the previous commit as a parent

All commits belong to exactly one branch. When moving a commit from one branch to another, Pachyderm creates an `ALIAS` commit on the other branch.


