define([
    "text!_app.html",
    "command-bar/_",
], function (
    template,
    commandBar
) {
    "use strict";

    return function () {
        var body = $(document.body);
        var app = $("#app-container").html(template);
        
        // initialize ...
        commandBar(app);

        body.find("#loading-screen").remove();
        body.find("script").remove();

        // animate...
        app.show();
    }    
});
