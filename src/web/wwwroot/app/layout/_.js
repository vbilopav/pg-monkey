define([
], function () {
    "use strict";

    return function (container) {
        var wrap = container.find("#nav-wrap").html(template({
            prompt: defaultPrompt
        }));
    }    
});
