---
layout: page
title: Compiler Options
permalink: /compiler-options/
nav_order: 2
---

# Compiler Options

## Overview

| Property       | Type     | Default | Description |
| -------------- | -------- | ------  | ----------- |
| interpolation  | boolean  | `true`  | Enables string interpolation |
| async          | boolean  | `false` | Enables asynchronous directives |
| directives     | object  | `{}` | Directives provided to the compiler |
| mappers        | object  | `{}` | Mapping directives provided to the compiler |

## Example

```javascript

kyoml.compile(
  `
    key = 'value' |> @uppercase
  `, {
    async: false,
    interpolation: true,
    directives: {
      ...
    },
    mappers: {
      uppercase: (val) => val.toUpperCase()
    }
  }
)

```
