define([
    "text!_app_layout.html", 
    "command-bar/func-cmd-bar",
    "layout/func-layout"
], (
    template, 
    commandBar,
    layout
) => {

    var body, app;

    return () => {
        body = $(document.body);
        app = $("#app-container").html(template);

        // initialize ...
        commandBar(app);
        layout(app);

    
        body.find("#loading-screen").remove();
        body.find("script").remove();

        // animate...
        app.show();
    }
});
