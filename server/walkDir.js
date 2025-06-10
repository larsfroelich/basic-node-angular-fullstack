const fs = require('fs');
global.walkDirectory = function(rootdir, subdir) {
    var results = [];
    var list = fs.readdirSync(rootdir + subdir);
    list.forEach(function(file) {
        var stat = fs.statSync(rootdir + subdir + '/' + file);
        if (stat && stat.isDirectory()) results = results.concat(walkDirectory(rootdir, subdir + '/' + file));
        else results.push(subdir + '/' + file)
    });
    return results
};
