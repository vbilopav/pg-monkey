define(['module'], function (module) {
    'use strict';
    return {
        version: '1.0.0',
        load: function (name, req, onload, config) {          
            req(["text!" + name], function (text) {
                var compiled = '\'' + text.replace(/[\r\n\t|\n|\r\t]/gm, "") + '\'';
                onload(function (data) {
                    return eval(compiled)
                });
            });
        }
    };
});
