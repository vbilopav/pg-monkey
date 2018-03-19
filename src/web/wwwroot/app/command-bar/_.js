define([
    "template!command-bar/_.html",
], function (template) {
    "use strict";

    var wrap,
        okEmo = "&#128053;",
        serverEmo = "&#128421;",
        command = ">",
        defaultPrompt = "[{0} @ {1}]> ".format(okEmo, serverEmo, command)

    return function (app) {
        wrap = app.find("#nav-wrap").html(template({
            prompt: defaultPrompt
        }));
    }    
});
