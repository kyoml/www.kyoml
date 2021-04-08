---
layout: page
title: Getting Started
permalink: /getting-started/
nav_order: 1
---

{% include fontawesome.html %}
{% include ace.html %}

# Getting Started

## Adding to your project

Install KyoML

With npm:

```bash
npm install --save kyoml
```

With yarn:

```bash
yarn add kyoml
```

## Using the compiler

The module exposes a `compile` method which takes in a KyoML string, and returns JSON

```javascript
const kyoml = require('kyoml');

const json = kyoml.compile(`
  # This is KyoML
  block {
    foo = 'bar'
  }
`)
```

Reading from a file

```javascript
const kyoml = require('kyoml');
const fs    = require('fs');

const json = kyoml.compile(
  fs.readFileSync('./sample.kyo').toString()
)
```
