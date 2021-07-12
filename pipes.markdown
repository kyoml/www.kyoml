---
layout: page
title: Pipes
permalink: /pipes/
nav_order: 5
---

{% include ace.html %}

# Pipes

Pipes are a way of passing values to a loaded directive. They can be used with the left-sided operator `<|` or the right-sided operator `|>`

e.g

<pre class="ace-editor">
@directiveA # Directive called on the root block

 # String value piped into a directive:
foo = "bar" |> @uppercase

# Array piped into a directive

list = @sort <| [
    "some",
    "words"
]

</pre>

## Chained pipes

A value can be piped into multiple directives by chaining them one after the other

e.g

<pre class="ace-editor">
foo = "bar" |> @uppercase |> @sanitize 
</pre>