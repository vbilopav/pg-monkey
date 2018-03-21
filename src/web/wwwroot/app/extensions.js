(function () {

    window._assert = console.assert;

    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };
   
    Object.prototype.parseOptions = function (defaults) {
        var options = this;
        for (let key in options) {
            
        }
        return options;
    }

})();
