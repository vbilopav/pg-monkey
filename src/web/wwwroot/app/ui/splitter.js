define([], () => {

    const
        templateVertical = '<div class="pgm-vsplitter"></div>';


    class Splitter {
        constructor(options) {
            this._options = _parseOptions(options, {
                target: {optional: false, type: "object" },
                direction: {optional: true, default: "left", values: ["left", "right"] }
            });
        }
    }

    return Splitter;
});
