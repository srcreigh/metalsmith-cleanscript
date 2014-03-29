metalsmith-clean
================

Generates a cleanup bash script.

Use case
--------

When your build directory contains more than just your metalsmith build files.
You may look at [the repository for my website]
(http://github.com/srcreigh/srcreigh.github.io) for an example.

Install
-------

```
cd $LOCATION_OF_BUILD_JS/node_modules
git clone https://github.com/srcreigh/metalsmith-clean.git
```

Usage
-----

```
var clean = require('metalsmith-clean');

// Use this plugin after any other plugins that may add or change
// files.
.use(clean({
    "path": "src/clean.sh"
}))
```

Options
-------

```path``` - where to put the script

Todo
----

1. Support multiple scripting languages
2. Add an "ignore" option

License
-------

MIT
