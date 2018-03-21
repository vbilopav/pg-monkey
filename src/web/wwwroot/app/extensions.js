(function () {

    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    window._assert = console.assert;

    Object.prototype.parseOptions = function (defaults) {
        var options = this;
        for (let key in options) {
            
        }
        return options;
    }

})();
