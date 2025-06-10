const fs = require('fs');

function walkDirectory(rootdir, subdir) {
    let results = [];
    const list = fs.readdirSync(rootdir + subdir);
    list.forEach(function(file) {
        const stat = fs.statSync(rootdir + subdir + '/' + file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDirectory(rootdir, subdir + '/' + file));
        } else {
            results.push(subdir + '/' + file);
        }
    });
    return results;
}

module.exports = walkDirectory;
