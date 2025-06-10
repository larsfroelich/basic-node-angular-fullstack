const fs = require('fs/promises');

async function walkDirectory(rootdir, subdir) {
    let results = [];
    const list = await fs.readdir(rootdir + subdir);
    for (const file of list) {
        const stat = await fs.stat(rootdir + subdir + '/' + file);
        if (stat && stat.isDirectory()) {
            results = results.concat(await walkDirectory(rootdir, subdir + '/' + file));
        } else {
            results.push(subdir + '/' + file);
        }
    }
    return results;
}

module.exports = walkDirectory;
