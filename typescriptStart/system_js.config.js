SystemJS.config({
    baseURL: '/',
    map: {
        'jQuery': '/node_modules/jquery/dist/jquery.min.js'
    },
    defaultJSExtensions: true,
    defaultExtension: 'js'
});

SystemJS.import('bundle');