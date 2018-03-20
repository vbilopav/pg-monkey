define(["template!command-bar/_.html"], (template) => {

    var wrap;

    const
        okEmo = "&#128053;",
        serverEmo = "&#128421;",
        commandChar = ">",
        defaultPrompt = `[${okEmo}@${serverEmo}]${commandChar} `;

    return (app) => {
        wrap = app.find("#nav-wrap").html(
            template({ prompt: defaultPrompt })
        );
    }    
});
