metalsmith-clean
================

Generates a cleanup script for your metalsmith build.

This is useful when your build directory contains more than just your 
metalsmith build files. You may look at [the repository for my website]
(http://github.com/srcreigh/srcreigh.github.io) for a good use case.

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
    "path": "clean.sh"
}))
```

Options
-------

```path``` - the relative path of your newly minted cleanup script

Todo
----

1. Support multiple scripting languages
2. Add an "ignore" option

License
-------

MIT
