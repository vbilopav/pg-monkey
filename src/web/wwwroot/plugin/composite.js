define(['module'], module => {
    return {
        version: '1.0.0',
        load(name, req, onload, config) {
            req(["text!" + name], text => {
                let from = 0,
                    found = [],
                    length = text.length,
                    search = "{require(\"",
                    searchLength = search.length;
                while(true) {
                    let index = text.indexOf(search, from)
                    if (index === -1) {
                        break;
                    }
                    index = index + searchLength
                    from = text.indexOf("\")}", index);
                    found.push(text.substring(index, from))
                }
                require(found, () => {
                    onload(data => new Function("return `" + text + "`;").call(data));
                });                
            });
        }
    };
});
