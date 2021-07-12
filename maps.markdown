---
layout: page
title: Maps
permalink: /maps/
nav_order: 4
---

{% include ace.html %}

# Maps

Maps are simple key/value pair structures, they translate to JSON Objects.

#### Example

<pre class="ace-editor">
introduction = {
  "greeting": "hello",
  "subject": "world"
}
</pre>


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
