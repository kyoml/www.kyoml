---
layout: page
title: Directives
permalink: /directives/
nav_order: 5
---

{% include ace.html %}

# Directives

Directives can be added manually by the user, or via a plugin.

Calling a directive will alter the document in some form

Example: A directive that uppercases all the strings of a document

<table>
<tr>
<th>KyoML</th>
<th>JSON</th>
</tr>
<tr>
<td>
<pre class="ace-editor">
@uppercase

object = "world"
introduction = "hello"
sentence = "${object} ${introduction}"
</pre>
</td>
<td>


<pre class="ace-editor" lang="json">
{
  "object": "WORLD",
  "introduction": "HELLO",
  "sentence": "HELLO WORLD"
}
</pre>

</td>
</tr>
</table>


## Loading the directive

```javascript

kyoml.compile(
  ` 
    @uppercase

    key = 'value'
  `, {
    async: false,
    interpolation: true,
    directives: {
      uppercase: (node) => {
        //
        // Write your own directive
        //
        if (typeof node.value === "string") {
         return node.set(node.value.toUpperCase())
        }

        Object.keys(node.value).forEach(key => {
            const str = node.value[key];
            if (typeof str === "string") {
                node.value[key] = str.toUpperCase();
            }
        })
      }
    }
  }
)

```

### The 'node' object

Each directive is called with a `node` object, which is a reference to the place in the document the directive was called at. The node object contains the following properties:

- `root` The root of the entire document
- `path` The path to the field as a string (e.g `document.users[3].name`)
- `base` The object that contains the prop referenced by the node
- `key` The key of the property on the base object
- `value` (computed) The value referenced by the node
- `get(path)` A helper method to retrieve any element on the document thanks to a string path
- `set(value)` A helper method used to replace the value referenced by the node

## Calling the directive

### At the root of a block

Calling a directive at the root of a block will pass the whole block to the directive

e.g

<pre class="ace-editor">
myBlock {
  @uppercase

  object = "world"
  introduction = "hello"
}
</pre>

### On a single value

Single values can be piped into a directive using the left or right handed pipe symbols (`<|` and `|>`)

e.g

<pre class="ace-editor">
myBlock {
  object = "world" |> @uppercase
  introduction = "hello"
}
</pre>