---
layout: page
title: Arrays
permalink: /arrays/
nav_order: 4
---

{% include ace.html %}

# Arrays

Arrays are defined with square brackets, similarly to JSON. Values of the array are comma-separated

<pre class="ace-editor" lang="kyoml">
array = ["value1", "value2"]
</pre>

## Multi-line

Arrays allow line breaks, whitespace and comments

<pre class="ace-editor" lang="kyoml">
array = [
  # This is a comment
  "value1",
  "value2"
]
</pre>

## Mixing data types

Arrays allow mixing of different data types

<pre class="ace-editor" lang="kyoml">
array = [
  # This is a comment
  "string",
  123,
  {
    "type": "map"
  }
]
</pre>

## Directive support

Arrays can be piped into directives

<pre class="ace-editor" lang="kyoml">
array = [
  "el1",
  "el2"
] |> @directive
</pre>

Elements of the array can also be piped into directibes

<pre class="ace-editor" lang="kyoml">
array = [
  "el1" |> @directive,
  "el2" |> @directive
]
</pre>


