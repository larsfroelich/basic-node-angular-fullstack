const fs = require('fs');
const path = require('path');

function walkDirectory(rootdir, subdir) {
    let results = [];
    let list;
    try {
        list = fs.readdirSync(path.join(rootdir, subdir));
    } catch (err) {
        if (err && err.code === 'ENOENT') {
            return results; // directory does not exist
        }
        throw err;
    }
    for (const file of list) {
        const stat = fs.statSync(path.join(rootdir, subdir, file));
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDirectory(rootdir, path.join(subdir, file)));
        } else {
            results.push('/' + path.join(subdir, file));
        }
    }
    return results;
}

module.exports = walkDirectory;
