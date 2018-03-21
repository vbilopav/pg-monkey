(function () {

    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };
   
    window._assert = (condition, message="assert error") => {
        if (condition === false) {
            throw new Error(message);
        }
    }

    window._parseOptions = function (options, defaults) {
        for (let key in defaults) {
            let item = defaults[key], option = options[key];
            if (typeof option === "function" || typeof option == "object") {
                continue;
            }
            _assert(item, `Unknown option ${key}`);
            _assert(typeof item === "object", `Option ${key} is not object`);            
            _assert(!(option == undefined && item.default === undefined && !item.optional), 
                `Option ${key} is not optional and defaul value is missing`);
            if (option == undefined) {
                option = item.default;
            }
            _assert(item.type && typeof option !== item.type, `Option ${key} should be type ${item.type}.`);
            if (item.values) {
                let found = false;
                for (let i in item.values) {
                    if (option === item.values[i]) {
                        found = true;
                        break;
                    } 
                }
                _assert(found, `Option ${key} not in valid range.`)
            }
        }
        return options;
    }

})();
