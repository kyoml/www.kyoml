---
layout: home
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

  # == Key/Value Pairs ==
  noun      = "world"
  greeting  = "hello"

  # == String interpolation ==
  sentence = "${noun} ${greeting}"

  #
  # == Blocks ==
  # Main structural construct, can be nested
  #

  kyoml {
    #
    # == Directives ==
    # Enrich your document with plugins and custom methods
    #

    @directives('rock')

    # == JSON-like data structures ==
  
    array = [
      1001,
      1003,
      1002
    ]

    #
    # == Pipes ==
    # Allow passing values to directives
    #

    users = "api.com/users" |> @fetch
  }
</pre>

---

## KyoML concept


<img src="/assets/images/logo_short.png">

The root idea behind KyoML, is to create a **markup language** which you can **enrich** yourself.

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

