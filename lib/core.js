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
    actions: {}
}
