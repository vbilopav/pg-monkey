define(["sys/storage", "ui/splitter"], (storage, Splitter) => {  

    var
        container,
        leftPanel;

    const
        store = storage.create("leftPanelW", "100px");

    return (app) => {      
        container = app.find("#container");
        leftPanel = $('<div id="left" class="pgm-panel-light">left</div>').appendTo(container).width(store.leftPanelW)
        new Splitter({
            target: leftPanel,
            direction: "left"
        })
    }    
});
