define(["text!_app_layout.html", "command-bar/func-cmd-bar"], (template, commandBar) => {

    var body, container;

    return () => {
        body = $(document.body);
        container = $("#app-container").html(template);

        // initialize ...
        commandBar(container);

        body.find("#loading-screen").remove();
        body.find("script").remove();

        // animate...
        container.show();
    }
});
