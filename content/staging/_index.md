---
title: Staging
description:
author:
tags:
categories:
products:
date:
weight: 0
hidden: false
mermaid: true
---


{{< mermaid >}}
stateDiagram-v2
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
{{< /mermaid >}}
