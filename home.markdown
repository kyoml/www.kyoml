---
layout: page
title: Home
permalink: /home/
nav_order: 0
---

{% include fontawesome.html %}
{% include ace.html %}

# KyoML

{: .fs-9 }

A dynamic markup language with support for custom directives and plugins

{: .fs-6 .fw-300 }


[Get started now](/getting-started){: .btn .btn-green .fs-5 .mb-4 .mb-md-0 .mr-2 } [<i class="fab fa-github"></i> Source](https://github.com/kyoml/kyoml){: .btn .fs-5 .mb-4 .mb-md-0 }

<pre class="ace-editor">
  #
  # Example KyoML document
  #

  noun      = "world"
  greeting  = "hello"
  sentence  = "${noun} ${greeting}"

  kyoml {
    @directive

    array = [
      1001,
      1003,
      1002
    ] |> @sort('desc')
      |> @multiply(10)
  }
</pre>

---

## KyoML concept

The root idea behind KyoML, is to create a markup language which you can **enrich** yourself.

It was designed in an attempt to customize the configuration experience provided to others.

In its raw form, KyoML isn't much different from JSON or Yaml but, thanks to **directives**, you can level it up, and add your own **features** to the language.

**Note**: KyoML does not ship with any directives, it's up to you to write your own <i class="far fa-smile-wink"></i>

## KyoML Features

- Key/Value Pairs
- Arrays
- Blocks
- Maps
- Directives
- Mappers
- Pipes
- Plugins
- String interpolation

## License

MIT License

Copyright (c) 2021 kyoml

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
