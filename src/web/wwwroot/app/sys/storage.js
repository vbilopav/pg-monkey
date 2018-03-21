define([], () => {
    const
        storage = localStorage;

    var
        wrapper = new class { }();

    wrapper.constructor.prototype.create = function (name, defaultValue) {
        eval(
            `var temp = { 
                        get ${name}() { return (storage.${name} === undefined ? "${defaultValue}" : storage.${name}); },
                        set ${name}(value) { storage.${name} = value; }
             }`)
        wrapper = Object.assign(wrapper, temp);
        return wrapper;
    }

    return wrapper;
});
