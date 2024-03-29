var james = require('james');


module.exports = function(options) {
    var compiler = options.compiler;
    delete options.compiler;

    return james.createStream(function(file, callback) {
        callback(compiler.compile(file, options)(options.context));
    });
};
