---
title: Branch
summary: A Pachyderm branch is a pointer to a commit that moves along with new commits as they are submitted.
tags: ["reference"]
---

## TL;DR

A Pachyderm branch is a pointer to a commit that moves along with new commits as they are submitted. 

--- 

## Usage

### Create Initial Branch
You can create a `master` branch by initiating the first commit and specifying the `master` branch in the `put file` command. 

### Create Additional Branches

You can create additional branches to experiment with the data (`pachctl create branch <myrepo>@<branchname>`. Optionally, you can add `--head  <myrepo>@<master>` for the head of the new branch to reference the head commit on `master`).

### View Branches

To view a list of branches in a repo, run the `pachctl list branch <myrepo>` command.

---

## About

Pachyderm does not create any branches when you create a repository. Branches can enable collaboration between contributors, however, you may find it sufficient to use a `master` branch for all of your work. 

Each branch has a `HEAD` which references the latest commit in the branch. Pachyderm pipelines look at the `HEAD` of the branch for changes and, if they detect new changes, trigger a job. When you commit a new change, the `HEAD` of the branch moves to the latest commit.

A branch stores the following additional information:

-  [provenance](../provenance) details
-  input branch details 
-  output branch details

These branch relationships are how Pachyderm knows which data each pipeline relies on, and which branches and repos should be included in each commit.

---

## Callouts 

- Deleting a branch (`pachctl delete branch <myrepo>@<branchname>`) does not delete the commits on it
- All branches must have a head commit