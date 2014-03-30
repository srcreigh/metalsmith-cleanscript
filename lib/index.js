
var join = require('path').join;
var dirname = require('path').dirname;
var fs = require('fs');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Metalsmith plugin to generate a clean script
 *
 * @param {String} path (optional)
 * @return {Function}
 */

function plugin(path) {
    path = path || 'clean.sh';
    var result = '#!/bin/bash\n';

    // Will hold the directories to remove
    var dirs = {};

    return function(files, metalsmith, done) {
        Object.keys(files).forEach(function(file) {
            
            // Add `rm file` for each file in files to the result
            result += 'rm ';
            result += join(metalsmith.destination(), file) + ' \n';

            // Recursively add all the directories for file
            // Note: Will be removed after removing the files, so that the
            //       empty directories will be empty.
            var dir = dirname(file);
            while (dir != '.') {
                dirs[dir] = null;
                dir = dirname(dir);
            }
        });
        result += ' \n';

        // Add `rmdir dir` for all the directories
        // Note: Will fail for nonempty directories.. which is probably a good
        //       thing!
        // Note: Sort and reverse the array so that we remove the directories
        //       in order.
        dirs = Object.keys(dirs).sort().reverse().forEach(function(dir) {
            result += 'rm -r ';
            result += join(metalsmith.destination(), dir) + ' \n';
        });

        files[path] = { 
            'contents': result,

            // This isn't supported by metalsmith yet, but hopefully it will!
            'mode': 0544
        };

        done();
    };
}

