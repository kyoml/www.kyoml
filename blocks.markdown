---
layout: page
title: Blocks
permalink: /blocks/
nav_order: 3
---

{% include ace.html %}

# Blocks

Blocks are the main **structure** providers of KyoML, they translate to JSON Objects. They are a **named collection** of key/value pairs.

| **[Note]** The root of the document is a block itself

#### Example

<table>
<tr>
<th>KyoML</th>
<th>JSON</th>
</tr>
<tr>
<td>
<pre class="ace-editor">

foo = "bar"

world {
  greeting = "hello"
}
</pre>
</td>
<td>


<pre class="ace-editor" lang="json">
{
  "foo": "bar",
  "world": {
    "greeting": "hello"
  }
}
</pre>

</td>
</tr>
</table>


## Difference between Blocks and Maps

When translated to JSON, both `Blocks` and `Maps` become *plain objects*, they however differ in the following ways:

#### **Blocks**
- designed as a **structural construct**
- support @directives at their root
- cannot be piped
- tolerant syntax (commas are optional) 

##### Example

<pre class="ace-editor" lang="kyoml">
block {
  @directive

  key   = "value"
  key2  = "value2"
}
</pre>

#### **Maps**
- designed as a **value**
- strict syntax (mandatory commas, keys are strings)
- do not support @directives at their root
- can be piped

##### Example

<pre class="ace-editor" lang="kyoml">
map = {
  "key": "value",
  "key2": "value2"
}
</pre>

## Nested Blocks

#### Example

<table>
<tr>
<th>KyoML</th>
<th>JSON</th>
</tr>
<tr>
<td>
<pre class="ace-editor">
foo = "bar"

world {
  name = "earth"

  greeting {
    word    = "hello"
    kind    = "pleasant"
    rating  = 5
  }
}
</pre>
</td>
<td>


<pre class="ace-editor" lang="json">
{
  "foo": "bar",
  "world": {
    "name": "earth",
    "greeting": {
      "word": "hello",
      "kind": "pleasant",
      "rating": 5
    }
  }
}
</pre>

</td>
</tr>
</table>


