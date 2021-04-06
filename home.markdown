---
layout: page
title: Home
permalink: /home/
nav_order: 1
---

{% include ace.html %}

# KyoML

{: .fs-9 }

A dynamic markup language with support for custom directives and plugins

{: .fs-6 .fw-300 }

[Get started now](#getting-started){: .btn .btn-green .fs-5 .mb-4 .mb-md-0 .mr-2 } [Source Code](https://github.com/kyoml/kyoml){: .btn .fs-5 .mb-4 .mb-md-0 }

<pre class="ace-editor">
  block {
    @directive()
  
    key =  ["hi", 2,3, [1, 1 |> @hello]]
  
    key       = 2.123
    key       = "ASD"
    key       = [1, 2],
    key       = "ASD" hi=1 
    key       = "ASD"
    key       = 'world'

    key = {
      "hi": "hello"
    }

    key       = "Hello ${world}"
    key       = 'bar' |> @prop |> @prop(false) # comment
  
    sublock {
      subkey = 1
      subkey = true # A comment
    }
  }
</pre>

---
