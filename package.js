Package.describe({
    summary: "JavaScript Class System with Multiple Inheritance."
});

Package.on_use(function(api) {
    if(api.export) {
        api.export('ring', ['client', 'server']);
    }

    api.add_files(['lib/ring.js'], ['client', 'server']);
});
