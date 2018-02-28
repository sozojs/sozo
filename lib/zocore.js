'use strict';


const internals = {};


// exports = module.exports = internals.Core = class {
// 
//     constructor(options) {
//     
//         this.app = {};
//         this.store = {};
//         this.que = [];
//         this.log = [];      // log app events
//         this.info = {};
//         this.actions = {};  // execute plugin methods by name
//     }
// };


exports = module.exports = internals.Core = {

    app: {},
    store: {},
    que: {},
    log: {},
    info: {},
    actions: {},
    registering: '',
    register: function (registration, options) {
    
        // @todo if array process array of plugins
        //
        // plugin(this, options);
        // console.log('registering a plugin test ' + Object.keys(registration));
        // console.log('registering a plugin test ' + registration.plugin);
        // console.log('registering a registration.plugin.name ' + registration.plugin.name);

        this.registering = registration.plugin.name;
        registration.plugin.register(this, options)
    },
    views: {},
    view: function (viewObject) {
    
        console.log('REGISTERING registering: ' + viewObject.name);
        if (!this.views[this.registering]) {
            this.views[this.registering] = {}; 
        }
        this.views[this.registering][viewObject.name] = {}; 
        this.views[this.registering][viewObject.name].description = viewObject.config.description; 
        this.views[this.registering][viewObject.name].render = viewObject.config.render; 

        // console.log('REGISTERING registering: ' + this.registering);
        // console.log('REGISTERING VIEW.name: ' + viewObject.name);
        // console.log('REGISTERING VIEW.config.description: ' + viewObject.config.description);
        // console.log('REGISTERING this.registration: ' + viewObject.name);
    }
}
