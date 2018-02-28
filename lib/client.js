'use strict';

const Core = require('./zocore');
const Request = require('./core');

const internals = {};

// exports = module.exports = function (options) {
// 
//     const core = new Core(options);
//     const request = new Request(options);
//     return new internals.Server(core, request);
// };
// 
// 
// internals.Server = class {
// 
//     constructor(core, request, parent) {
// 
//         this._core = core;
//         this.info = core.info;
//         this.que = core.que;
//         this.log = core.log;
//         this.actions = core.actions;
//         this.request = request.execute;
//     }
// };

exports = module.exports = {

    name: 'sozo',
    description: 'tools to develop client interface',
    info: {},
    initialize: function () {
    
        console.log(Object.keys(Core));
        console.log(typeof Core.register);
        this._core = Core; 
        this.actions = Core.actions;
        this.que = Core.que;
        this.log = Core.log; 
        this.store = Core.store; 
        this.views = Core.views; 
        this.view = Core.view; 
        // this.register = function () { console.log('hi'); }; 
        this.register = Core.register; 
        console.log('initialize is running');
    },
    init: function () {
    
        console.log('init is executing');
        console.log(Object.keys(this.views));
    },
    start: () => {
    
        console.log('start executing');
    }
}
