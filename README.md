metalsmith-cleanscript
======================

Generates a cleanup script for your metalsmith build.

This is useful when your build directory contains more than just your 
metalsmith build files. You may look at [the repository for my website]
(http://github.com/srcreigh/srcreigh.github.io) for a good use case.

Example
-------



```
$ ls -R build
clean.sh posts style

posts:
page1

posts/page1:
index.html

style:
style.css

$ cat clean.sh
#!/bin/bash
rm /Users/me/build/posts/page1/index.html
rm /Users/me/build/style/style.css

rm -r /Users/me/build/style
rm -r /Users/me/build/posts/page1
rm -r /Users/me/build/posts
```

Install
-------

```
npm install metalsmith-cleanscript
```

Usage
-----

```
var clean = require('metalsmith-cleanscript');

// Use this plugin after any other plugins that may add or change 
// files.
.use(clean("clean.sh"))

// Equivalent to .use(clean()) since clean.sh is the default
```

Parameters
----------

#### path

the relative path of your newly minted cleanup script.

**default** ```clean.sh```
            

Todo
----

1. Support multiple scripting languages
2. Add an "ignore" option

License
-------

MIT
