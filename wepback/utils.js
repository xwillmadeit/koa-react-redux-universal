const sortPackage = function(packages) {
    var len = packages.length - 1;
    var first = packages[0];
    var last = packages[len];
    return function sort(a, b) {
        if (a.names[0] === first) {
            return -1;
        }
        if (a.names[0] === last) {
            return 1;
        }
        if (a.names[0] !== first && b.names[0] === last) {
            return -1;
        } else {
            return 1;
        }
        return 0;
    }
} 

module.exports = {
    sortPackage
}