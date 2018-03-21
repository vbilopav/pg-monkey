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

    if (_app.development) {
        console.log(_app);
    }

    return () => {
        body = $(document.body);
        app = $("#app-container").html(template);

        // initialize ...
        commandBar(app);
        layout(app);
    
        body.find("#loading-screen").remove();
        body.find("script").remove();
        app.animate({"opacity": "show"} , 100);
    }
});
