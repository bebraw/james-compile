var james = require('james');


module.exports = function(options) {
    return james.createStream(function(file, callback) {
        callback(options.compiler.compile(file, options)(options.context));
    });
};
