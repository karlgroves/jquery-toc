# jQuery Table of Contents Plugin

![Travis CI build status](https://travis-ci.org/karlgroves/jquery-toc.svg?branch=master)

I created this plugin to dynamically add a Table of Contents to long documents, such as documentation or specifications.
Manually updating a Table of Contents when the content, structure, or heading text changes is an unnecessary pain.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/karlgroves/jquery-toc/master/dist/jquery.toc.min.js
[max]: https://raw.github.com/karlgroves/jquery-toc/master/dist/jquery.toc.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/toc.min.js"></script>
<script>
jQuery(function($) {
  $('#toc').toc($('h2'));
});
</script>
```

This plugin takes one argument: a selector representing the elements used to build the table of contents. So, in the example
above, we're building a table of contents based on H2 elements and adding the table of contents to an element with the ID of "toc"


## Documentation
This is it!

## Examples
Navigate to the /example/toc.html file to see an example
