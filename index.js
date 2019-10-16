const _ = require('lodash');

module.exports = function (arr = [], size = 1) {
    return _.chunk(arr, size);
}