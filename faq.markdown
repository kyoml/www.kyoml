---
layout: page
title: FAQ
permalink: /faq/
nav_order: 6
---

{% include ace.html %}

# FAQ

## Is KyoML supposed to replace JSON ?

No, that is not the purpose of KyoML, it is still very far from a widely supported language and in most cases probably shouldn't be used.

There is however a niche set of use cases where you might want to add your own flavors to a configuration file. Or perhaps provide developers a set of helpers within a markup language to set things up properly.
Those are the times you should consider KyoML.

It is still experimental at this stage,

## Which text editors support KyoML syntax coloring ?

As of now, syntax coloring is only available for VSCode (via an extension) and the in-browser Ace editor

## Which languages support KyoML ?

As of now, only Javascript supports KyoML. The parser was written using PEG.js

However since the grammar has now been written, it'll make it easier to support other languages in the future. Requests can be made on [Github Issues](https://github.com/kyoml/www.kyoml/issues)

## Why is it named KyoML ?

I originally created a project called [Kankyo](https://github.com/patrixr/kankyo), which provided an alternative way to set up the environment for software projects (similar to `.env`).

`Kankyo` is japanese for "environment" or "context". I later noticed this also exists as a `.env` [crate](https://crates.io/crates/kankyo) for Rust

I first implemented it using [toml](https://toml.io/en/) which worked out great. But felt the developer experience wasn't exactly what I wanted it to be. And started imagining various options, such as:

<pre class="ace-editor">
  @key('NODE_ENV')
  @require([
    'JWT_SECRET',
    'DATABASE_URL'
  ])

  defaults {
    @uppercase

    jwt_secret = "keyboard cat"
    log_levels = "info,error"
    database_url = "postgres://${db_host}/${db_name}"
  }

  development {
    @environment
    @extends('defaults')

    log_levels = "*"
    db_host = "localhost"
    db_name = "dev_db"
  }

  test {
    @environment
    @extends('defaults')

    log_levels = ""
    db_host = "localhost"
    db_name = "test_db"
  }

  production {
    @environment
    @extends('defaults')
    @decrypt('env.prod.vault')
  }
</pre>

As of now, I'm not there yet. But I started writing a small parser that I named 'kyo-lang', which then turned into `KyoML`.

A lot of work, simply to express my disapproval of `.env` files which I dislike in many ways.

(rant over.)