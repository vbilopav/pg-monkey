define([
    "text!_.html", 
    "nav/nav",
    "layout/layout"
], (
    template, 
    commandBar,
    layout
) => {

    var body, app;

    if (window._app.development) {
        console.log(window._app);
    }

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
