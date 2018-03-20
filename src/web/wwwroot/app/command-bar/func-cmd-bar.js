define([
    "template!command-bar/_.html",
], (template) => {

    var wrap;

    const
        okEmo = "&#128053;",
        serverEmo = "&#128421;",
        commandChar = ">",
        defaultPrompt = `[${okEmo}@${serverEmo}]${commandChar} `;

    return (container) => {
        wrap = container.find("#nav-wrap").html(
            template({ prompt: defaultPrompt })
        );
    }    
});
