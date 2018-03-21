define([], () => {

    const
        templateVertical = '<div class="pgm-vsplitter"></div>';


    class Splitter {
        constructor(options) {
            this._options = options.parseOptions({
                target: {optional: false, type: "object" },
                direction: {optional: true, default: "left", values: ["left", "right"] }
            });
        }
    }

    return Splitter;
});
