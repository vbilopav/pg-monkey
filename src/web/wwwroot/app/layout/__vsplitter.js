define([
], function () {
    const template = '<div class="pgm-vsplitter"></div>';

    return function (app) {
        var wrap = app.find("#nav-wrap").html(template({
            prompt: defaultPrompt
        }));
    }    
});
