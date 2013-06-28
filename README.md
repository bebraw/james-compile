# james-compile - A compiler plugin for james.js

Generic template compiler for [James.js](https://github.com/leonidas/james.js).
The compiler you use should provide a `compile` method that returns a function
that may be used to render a `context`. Ie. `jade.compile()()` is such a
function. In case the templating engine you wish to use does not implement this
scheme, consider implementing an adapter.

```js
var james   = require('james'),
    compile = require('james-compile'),
    jade    = require('jade');

james.task('jade', function() {
    james.list('src/**/*.jade').forEach(function(file) {
        james.read(file)
            .transform(compile({
                compiler: jade,
                filename: file,
                context: {
                    title: 'demo'
                }
            }))
            .write(process.stdout);
        });
    });
```

## License

`james-compile` is available under MIT. See LICENSE for more details.
