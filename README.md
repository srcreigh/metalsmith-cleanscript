metalsmith-cleanscript
======================

Generates a cleanup script for your metalsmith build.
This is useful when your build directory has more than 
what metalsmith has put in there, so cleaning up is not
as simple as 'rm -rf build'.

Example
-------

```
$ ls -R build
clean.sh posts style not-added-by-metalsmith.txt

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

rmdir /Users/me/build/style
rmdir /Users/me/build/posts/page1
rmdir /Users/me/build/posts
rmdir /Users/me/build
```

Install
-------

```
npm install metalsmith-cleanscript
```

Usage
-----

```
var cleanscript = require('metalsmith-cleanscript');

// Use this plugin after any other plugins that may add or change 
// files.
.use(cleanscript("clean.sh"))

// Equivalent to .use(clean()) since clean.sh is the default
// Also equivalent to .use(cleanscript({ out: 'clean.sh' }))
```

Options
-------

### out

the relative path of your newly minted cleanup script

the path you provide will be relative to your build directory,
i.e. the return value of ```metalsmith.build()```.

**note** this is what will be set if you ```use``` cleanscript 
with a string

**default** ```'clean.sh'```

### root

whether or not to try to delete the root build directory

**default** ```true```
            

Todo
----

1. Support multiple scripting languages
2. Add an "ignore" option

License
-------

MIT
