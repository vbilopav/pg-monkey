requirejs.config({
    paths: {
        jquery: (
            _app.development ?
            "../libs/jquery/3.3.1/jquery" :
            ["//code.jquery.com/jquery-3.3.1.slim.min", "../libs/jquery/3.3.1/jquery.slim.min"]
        ),
        text: (
            _app.development ?
            "../libs/requirejs-text/2.0.12/text" :
                ["//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min", "../libs/requirejs-text/2.0.12/text"]
        ),
        template: "../plugin/template"
    }
});
define(["app", "text", "jquery", "extensions"], app => {    

   app();

});
