---
title: "first-content"
menuTitle: "first-content"
weight: 0
date: 2019-08-30T15:13:01+08:00
---



{{% button href="https://getgrav.org/" %}}Get Grav{{% /button %}}
{{% button href="https://getgrav.org/" icon="fas fa-download" %}}Get Grav with icon{{% /button %}}
{{% button href="https://getgrav.org/" icon="fas fa-download" icon-position="right" %}}Get Grav with icon right{{% /button %}}

{{% children  %}}

{{%expand "test expand"%}}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{{% /expand%}}

{{<mermaid align="left">}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}

```mermaid
graph LR;
  A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
```

{{<mermaid>}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
{{< /mermaid >}}

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts 
prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
```

{{% notice note %}}
A notice disclaimer
{{% /notice %}}

{{% notice info %}}
An information disclaimer
{{% /notice %}}

{{% notice tip %}}
A tip disclaimer
{{% /notice %}}

{{% notice warning %}}
An warning disclaimer
{{% /notice %}}

`editURL` Value : {{% siteparam "editURL" %}}
