---
layout: page
title: Plugins
permalink: /plugins/
nav_order: 5
---

# Plugins

Plugins are the easiest way to import and share directives/mappers. 

## Publishing and discovery

A plugin defined as an npm module, whose name is prefixed with `kyoml-plugin-`

Here is an [example](https://github.com/kyoml/kyoml-plugin-extend)

Once installed in your project using `npm install <plugin>`, KyoML will attempt to autodetect and load all plugins available.

## Writing a plugin

The easiest way to write a plugin is to create an npm module which exports directives and mappers.

Example:


```js
module.exports = {
  directives: {
      myDirective() { ... }
  }
}
```
