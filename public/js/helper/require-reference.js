/**
 * @author Extentia Information Technology
 * @class require-reference
 * @description A module that configure Require-JS.

 require.config({
    baseUrl: "",
    waitSeconds: 1000,
    paths: {
        'jquery': 'js/lib/jquery-2.0.0.min',
        'Backbone': 'js/lib/backbone-min',
        'Bootstrap': 'js/lib/bootstrap.min',
        'i18n': 'js/lib/i18n',
        'text': 'js/lib/text'
    },
    shim: {
        Backbone: {
            deps: ['js/lib/underscore', 'js/lib/jquery-2.0.0.min'],
            exports: 'Backbone'
        },
        Bootstrap: {
            "deps": ['jquery']
        }
    }
});
 */

require.config({
    baseUrl: "",
    waitSeconds: 1000,
    paths: {
        'socketIo' : 'js/lib/socket.io-1.2.0',
        "LIB" : "js/build/production.min"
    }
});
