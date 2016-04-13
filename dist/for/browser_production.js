require("source-map-support").install(),module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}(function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))switch(typeof e[t]){case"function":break;case"object":e[t]=function(t){var n=t.slice(1),r=e[t[0]];return function(e,t,o){r.apply(this,[e,t,o].concat(n))}}(e[t]);break;default:e[t]=e[e[t]]}return e}([function(e,t,n){e.exports=n(6)},function(e,t){e.exports=require("strictduck-domain-driven-fullstack")},function(e,t){e.exports=require("source-map-support")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),c=r(a),f=n(8),s=r(f),d=n(10),l=r(d),p=n(9),v=r(p),y=function(e){function t(e){var n=e.server,r=void 0===n?s["default"]:n,i=e.client,a=void 0===i?l["default"]:i,c=e.persister,f=void 0===c?v["default"]:c,d=e.domains,p=e.context,y=void 0===p?"BROWSER":p;return o(this,t),u(this,Object.getPrototypeOf(t).call(this,{context:y,domains:d,server:r,client:a,persister:f}))}return i(t,e),t}(c["default"]);t["default"]=y},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.persister=t.Domain=t.settings=t["default"]=void 0;var u=n(5),i=o(u),a=n(7),c=o(a),f=n(1),s=n(16),d=r(s);t["default"]=i["default"],t.settings=c["default"];var l=f.Domain.implementation;f.Domain.Domains;t.Domain=l,t.persister=d},function(e,t,n){"use strict";function r(e,t){var n=arguments.length<=2||void 0===arguments[2]?["server","client"]:arguments[2];return e=Object.assign(e,e[t]||{}),Object.keys(e).filter(function(e){return n.indexOf(e)<0}).reduce(function(o,u){return o[u]=Array.isArray(e[u])||"object"!=i(e[u])?e[u]:r(e[u],t,n),o},{})}function o(e){var t=arguments.length<=1||void 0===arguments[1]?{NODE:"server",BROWSER:"client"}:arguments[1];return new a.Domain.implementation(u({name:"settings"},r(e,t.BROWSER)))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t["default"]=o;var a=n(1)},[27,11],[27,12],[27,13],function(e,t,n){"use strict";n(2).install(),e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(2)["default"];t["default"]=r},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t["default"]=r.server.implement({name:"DomainDrivenExpress",constructor:function(e){var t=e.Domains,n=(e.middlewareGenerators,e.server),r=void 0===n?{}:n;return r._domains=r._domains||{},r.generateMiddleware=function(e){return this},r.generateMiddleware.bind(r)(t),r.use=function(){return Error("express requires a node context")},r.listen=function(){return Error("express requires a node context")},[r]},provider:function(){return this}})},function(e,t){e.exports=n(1)}])},function(e,t,n){"use strict";n(2).install(),e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(7)},function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return Object.keys(e).reduce(function(t,n){return t[e[n]]=n,t},{})}function u(e){var t=e.domain,n=t.actions,r=void 0===n?{}:n,u=t.pouchActionMap,i=void 0===u?{insert:"insert",update:"update",remove:"remove"}:u,a=o(i),c=Object.keys(r).filter(function(e){return[i.update,i.insert,i.remove].indexOf(e)>=0}).reduce(function(e,t){return e[a[t]]=function(e){try{return r[t](e)}catch(n){if(n instanceof TypeError)return;throw n}},e},{});return Object.keys(c).length?c:!1}function i(e){var t=e.db,n=e.domains;return(0,c["default"])(Object.values(n).filter(function(e){return u({domain:e})}).map(function(e){return e}).map(function(e){return{path:"/"+e.prefix,prefix:""+(e.dbPrefix||""),db:t,actions:u({domain:e})}}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var a=(n(3),n(8)),c=r(a)},function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.path,n=e.persister;return function(e,r,o){var u=function(n){r({nextPathname:e.location.pathname},t),o()};(n||this.db).getSession(function(e,t){e?(console.log(e),u()):t.userCtx.name?o():u()})}}function u(e){return{requiresAuthentication:!0,path:e}}function i(e){var t=function(e){return e};return Object.assign(t,{providesAuthentication:!0,component:e}),t}function a(e){var t=e.route,n=e.persister;return t.props.onEnter&&t.props.onEnter.requiresAuthentication?{onEnter:o({path:t.props.onEnter.path,persister:n})}:{}}function c(e){var t=e.route,n=e.persister;return t.props.component&&t.props.component.providesAuthentication?{component:function(e){return m["default"].createElement(t.props.component.component,y({auth:n},e))}}:{}}function f(e,t){return t=t||this.db,m["default"].cloneElement(e,y({},a({route:e,persister:t}),c({route:e,persister:t}),{key:e.props.path}),e.props.children?e.props.children.map(function(e){return f(e,t)}):void 0)}function s(e,t){var n=this;return function(){for(var r=arguments.length,o=Array(r),u=0;r>u;u++)o[u]=arguments[u];return e.apply(void 0,[t||n.db].concat(o))}}function d(e,t){return e.handlers=e.handlers.map(function(e){return e.requiresPersister?s(e.dependentFunction,t):e}),e}function l(e,t){var n=e.get("routes");return Object.keys(e.get("routes")).map(function(r){return e.register("routes",r,d(n[r],t))}),e}function p(e,t){return t=t||this.db,Object.keys(e).reduce(function(n,r){return n[r]=l(e[r],t),n},{})}function v(e){return{requiresPersister:!0,dependentFunction:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultDataFlows=void 0;var y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.requireAuthWithPersister=o,t.requireAuthFromRoute=u,t.provideAuthFromRoute=i,t.authenticateRoutes=f,t.provideInjectionForDomainRouteHandlers=p,t.requireInjection=v;var h=n(14),m=r(h),b=n(4),_=r(b);t.defaultDataFlows=_["default"]},function(e,t){e.exports=n(4)},function(e,t){function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={INSERT:function(e,t){return[t].concat(n(e))},UPDATE:function(e,t){return e.map(function(e){return e._id==t._id?t:e})},REMOVE:function(e,t){var n=t._id;return e.filter(function(e){return e._id!=n})}}},function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.name,n=e.uri;return n+"/"+t}function u(e){return new a["default"](o(e),{skipSetup:!0})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var i=n(12),a=r(i),c=n(13),f=r(c);a["default"].plugin(f["default"])},function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),u=n(1),i=r(u),a=n(5),c=r(a),f=n(2),s=n(1)["default"],d=function(e){return e};t["default"]=o.storePersistencePlugin.implement({name:"DomainDrivenPouchPersistencePlugin",constructor:function(e){var t=e.Domains.settings.db;return d(t),[{db:(0,c["default"])(t),middlewareGenerator:i["default"],authenticateRoutes:f.authenticateRoutes,provideAuthFromRoute:f.provideAuthFromRoute,provideInjectionForDomainRouteHandlers:f.provideInjectionForDomainRouteHandlers}]},provider:function(){return s.bind(this.db).apply(void 0,arguments)}})},function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.utils=t["default"]=void 0;var o=n(2);Object.keys(o).forEach(function(e){"default"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var u=n(6),i=r(u);t["default"]=i["default"],t.utils={}},function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){var t=console.warn||console.log;t&&t.call(console,e)}function a(e){return function(){throw new Error("no action provided for "+e)}}function c(e){return e.lifecycleState?void 0:(e.lifecycleState="INITIALIZING",e.db.allDocs(y({include_docs:!0},e.prefix?{startkey:e.prefix,endkey:e.prefix+"￿"}:{})).then(function(t){t.rows.forEach(function(t){return l(e,t)}),e.lifecycleState="INITIALIZED",f(e)}))}function f(e){var t=e.db.changes(y({live:!0,since:"now",include_docs:!0},e.prefix?{filter:function(t){var n=t._id;return n.split("/")[0]==e.prefix}}:{}));t.on("change",function(t){return l(e,t)})}function s(e,t){var n=m["default"].resolve(t,e.path);n&&n.length&&"INITIALIZED"==e.lifecycleState&&n.forEach(function(t){var n=d(e.docs,t),r=n.updated,o=n.deleted,u=n.inserted;u.concat(r).forEach(function(t){return e.insert(t)}),o.forEach(function(t){return e.remove(t)})})}function d(e,t){var n=[],r=[],o=Object.keys(e).map(function(t){return e[t]});return t.forEach(function(t){t._id||i("doc with no id"),o=o.filter(function(e){return e._id!==t._id});var u=e[t._id];u?(0,g["default"])(u,t)||r.push(t):n.push(t)}),{inserted:n,updated:r,deleted:o}}function l(e,t){var n=t.doc;if(o(t,["doc"]),n._deleted)e.docs[n._id]&&(delete e.docs[n._id],e.propagations.remove(n));else{var r=e.docs[n._id];e.docs[n._id]=n,r?e.propagations.update(n):e.propagations.insert(n)}}function p(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];if(Array.isArray(e)||(e=[e]),!e.length)throw new Error("PouchMiddleware: no paths");return e=e.map(function(e){return new j(e)}),function(t){var n=t.dispatch,r=t.getState;return e.forEach(function(e){e.wrapActionCreators(n),e.initFromDb()}),function(t){return function(n){var o=t(n);return e.forEach(function(e){return s(e,r())}),o}}}}Object.defineProperty(t,"__esModule",{value:!0});var v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=p;var h=n(11),m=r(h),b=n(9),_=r(b),x=n(10),g=r(x),O=(n(3),{remove:a("remove"),update:a("update"),insert:a("insert")}),j=function(){function e(t){var n=t.path,r=void 0===n?".":n,o=t.prefix,i=void 0===o?"":o,a=t.db,c=t.actions;if(u(this,e),!a)throw new Error("path "+r.path+" needs a db");this.queue=(0,_["default"])(1),this.docs={},this.db=a,this.path=r,this.prefix=i,this.actions=Object.assign({},O,c)}return v(e,[{key:"insert",value:function(e){this.docs[e._id]=e;var t=this.db;this.queue.push(function(n){t.put(e,n)})}},{key:"remove",value:function(e){var t=this,n=this.db;this.queue.push(function(r){n.remove(e,r),delete t.docs[e._id]})}},{key:"wrapActionCreators",value:function(e){var t=this;this.propagations=Object.keys(this.actions).reduce(function(n,r){return n[r]=function(n){var o=t.actions[r](n);o&&e(o)},n},{})}},{key:"initFromDb",value:function(){var e=this;c(this)["catch"](function(t){if(401!=t.status)throw t;e.lifecycleState=!1,e.db.once("login",function(t){return c(e)})})}}]),e}()},function(e,t){e.exports=n(14)},function(e,t){e.exports=n(15)},function(e,t){e.exports=n(18)},function(e,t){e.exports=n(19)},function(e,t){e.exports=n(20)},function(e,t){e.exports=n(3)},function(e,t){e.exports=n(1)}])},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};n(2).install(),e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(17)},function(e,t){e.exports=n(4)},function(e,t){e.exports=n(24)},function(e,t){e.exports=n(3)},function(e,t){e.exports=n(22)},function(e,t){e.exports=n(25)},function(e,t){e.exports=n(1)},function(e,t){e.exports=n(26)},function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=(n(5),n(6)),u=n(19),i=r(u),a=n(13),c=r(a),f=n(15),s=r(f),d=n(16),l=r(d),p=n(18)["default"];t["default"]=o.reactiveClient.implement({name:"DomainDrivenReduxReactClient",constructor:function(e){var t=e.Domains,n=e.elementId,r=void 0===n?"app":n,o=e.DomainDrivenClientStore,u=void 0===o?i["default"]:o,a=e.DomainDrivenStorePersistencePlugin,f=e.routes,d=e.middlewareGenerators,p=void 0===d?[]:d,v=e.client,y=void 0===v?{}:v;return a instanceof Error||p.push(function(e){return a.middlewareGenerator({db:a.db,domains:e})}),u instanceof Error&&(u=i["default"]),t=(0,l["default"])(t),Object.assign(y,{routes:f||y.routes||(0,s["default"])(t),elementId:r}),a&&a.authenticateRoutes&&(y.routes=a.authenticateRoutes(y.routes)),y.store=new u({domains:t,routes:y.routes,middlewareGenerators:p}),y.router=(0,c["default"])(y.store,y.routes),[y]},provider:function(){return p.bind(this)()}})},function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return(0,i["default"])(Object.keys(e).filter(function(t){return e[t].reducer}).reduce(function(t,n){return t[n]=e[n].reducer,t},{}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=n(10),i=r(u)},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u="function"==typeof Symbol&&"symbol"==r(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":"undefined"==typeof e?"undefined":r(e)};t["default"]=function(e){if("object"!==("undefined"==typeof e?"undefined":u(e)))throw"Reactuate reducers should be an object (and not a function)";return(0,i.combineReducers)(o({router:a.routerStateReducer},e))};var i=n(1),a=n(2)},function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(t,n){function r(){var t=arguments.length<=0||void 0===arguments[0]?i:arguments[0],n=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],u=arguments.length<=2||void 0===arguments[2]?void 0:arguments[2],f=arguments.length<=3||void 0===arguments[3]?[o.displayName]:arguments[3];return r.is(t)?t:(t=o(t),"undefined"!=typeof u&&(u=a(u)),this instanceof r?(this.type=c,this.payload=t,n&&(this.error=!0),"undefined"!=typeof u&&(this.meta=u),void("production"!==e.env.NODE_ENV&&Object.freeze(this))):new r(t,n,u,f))}var o=arguments.length<=2||void 0===arguments[2]?u["default"].Any:arguments[2],i=arguments.length<=3||void 0===arguments[3]?void 0:arguments[3],a=arguments.length<=4||void 0===arguments[4]?u["default"].Any:arguments[4],c=t.withPrefix(n);return r.meta={kind:"actionCreator",payload:o,name:c,identity:!1},r.displayName="Action "+c+"("+o.displayName+")",r.actionCreator=!0,r.action=n,r.is=function(e){return e instanceof r},t.register("actions",n,r),r};var o=n(7),u=r(o)}).call(t,n(20))},function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),u=2;n>u;u++)r[u-2]=arguments[u];var a=function c(){var n=arguments.length<=0||void 0===arguments[0]?t:arguments[0],u=arguments[1],c=u;if("@@reactuate/action"===u.type){var a=e.get("actions")[e.withoutPrefix(u.payload.type)];i["default"].Nil.is(a)||(c=a(u.payload.payload,u.payload.error,u.payload.meta))}Object.freeze(n);var f=r.map(function(e){return"function"==typeof e&&"undefined"==typeof e.meta?function(t){return e(n,t)}:e});return i["default"].match.apply(i["default"],[c].concat(o(f),[i["default"].Any,function(){return n}]))};return e.reducer=a,a};var u=n(7),i=r(u)},function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){return i["default"].createElement(c.Provider,{store:e},i["default"].createElement(a.ReduxRouter,null,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=n(3),i=r(u),a=n(2),c=n(4)},function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.name;return t.toLowerCase().replace(/_([a-z])/g,function(e){return e[1].toUpperCase()})}function u(e){var t=e.prefix,n=e.name;return"@@"+t+"/"+n}function i(e,t){return p.utils.nameObj({name:o({prefix:e,name:t}),object:function(n){return{type:u({prefix:e,name:t}),payload:n}}})}function a(e,t,n){return function(r,o){var i=o.type,a=o.payload;return i===u({prefix:e,name:t})?n(r,a):r}}function c(e,t){return function(){var n=arguments.length<=0||void 0===arguments[0]?e:arguments[0],r=arguments[1];return t.reduce(function(e,t){return t(e,r)},n)}}function f(e){var t=e.get("dataFlows"),n=e.prefix;return t&&Object.keys(t).length&&(Object.keys(t).forEach(function(t){e.register("actions",o({prefix:n,name:t}),i(n,t))}),e.reducer=c(e.initialState||[],Object.keys(t).map(function(e){return a(n,e,t[e])}))),e}function s(e){return Object.keys(e).reduce(function(t,n){return t[n]=s(e[n]),t},{})}Object.defineProperty(t,"__esModule",{value:!0}),t.unpackDataFlowsIntoDomain=f,t["default"]=s;var d=n(12),l=(r(d),n(11)),p=(r(l),n(5))},function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){return Object.keys(e).map(function(t){return e[t]}).filter(function(e){return Object.keys(e.get(t)).length})}function u(e){return e.get("route").route||l["default"].createElement(p.Route,{path:"/",component:e.get("route").component})}function i(e){return o(e,"route").filter(function(e){return"/"==e.get("route").path}).map(u)[0]}function a(e){return o(e,"route").map(function(e){return e.get("route")}).filter(function(e){return e.isContainer})}function c(e){var t=e.route,n=e.domainRoutes,r=n.filter(function(e){return e.original==t.props.component})[0];return l["default"].cloneElement(t,r?{component:r.component,key:t.props.key||t.props.path}:{key:t.props.key||t.props.path},t.props.children?t.props.children.map(function(e){return c({route:e,domainRoutes:n})}):void 0)}function f(e,t){return c({route:e,domainRoutes:a(t)})}function s(e){return f(i(e),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.swapRouteComponentForContainer=c,t["default"]=s;var d=n(3),l=r(d),p=n(23)},function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return e.get("actions")&&Object.keys(e.get("actions")).length||(e=(0,s.unpackDataFlowsIntoDomain)(e)),(0,f.connect)(function(t){return r({},e.prefix,t[e.prefix])},function(t){return{actions:(0,c.bindActionCreators)(e.get("actions"),t)}})(e.get("route").component)}function u(e){return e.get("actions")&&Object.keys(e.get("actions")).length||(e=(0,s.unpackDataFlowsIntoDomain)(e)),e.register("route","original",e.get("route").component),e.register("route","component",o(e)),e.register("route","isContainer",!0),e}function i(e){var t=e.get("dataFlows"),n=e.get("route").component;return Object.keys(t).length&&n&&(e=u(e)),e}function a(e){return Object.keys(e).reduce(function(t,n){return t[n]=i(e[n]),t},{})}Object.defineProperty(t,"__esModule",{value:!0}),t.domainReduxConnector=o,t.connectDomainRoutes=u,t.expandReduxDomain=i,t["default"]=a;var c=n(1),f=n(4),s=n(14)},function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=n(8),u=r(o);t["default"]=u["default"]},function(e,t,n){function r(){(0,o.render)(this.router,document.getElementById(this.elementId))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var o=n(22)},function(e,t,n){function o(e){return e&&e.__esModule?e:{"default":e}}function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=("undefined"==typeof t?"undefined":r(t))&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":r(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=n(1),s=n(2),d=n(6),l=n(9),p=o(l),v=n(21).createHistory,y=function(e){function t(e){var n=e.domains,r=e.routes,o=e.store,c=void 0===o?f.createStore:o,d=e.defaultMiddlewareGenerators,l=void 0===d?[]:d,y=e.middlewareGenerators,h=void 0===y?[]:y;return i(this,t),a(this,Object.getPrototypeOf(t).call(this,(0,f.compose)(f.applyMiddleware.apply(void 0,u(l.map(function(e){return e(n)})).concat(u(h.map(function(e){return e(n)})))),(0,s.reduxReactRouter)({routes:r,createHistory:v}))(c)((0,p["default"])(n))))}return c(t,e),t}(d.clientStore["default"]);t["default"]=y},function(e,t){function n(){f=!1,i.length?c=i.concat(c):s=-1,c.length&&r()}function r(){if(!f){var e=setTimeout(n);f=!0;for(var t=c.length;t;){for(i=c,c=[];++s<t;)i&&i[s].run();s=-1,t=c.length}i=null,f=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function u(){}var i,a=e.exports={},c=[],f=!1,s=-1;a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new o(e,t)),1!==c.length||f||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=u,a.addListener=u,a.once=u,a.off=u,a.removeListener=u,a.removeAllListeners=u,a.emit=u,a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t){e.exports=n(17)},function(e,t){e.exports=n(21)},function(e,t){e.exports=n(23)}])},function(e,t){e.exports=require("async-function-queue")},function(e,t){e.exports=require("deep-equal")},function(e,t){e.exports=require("domain-driven-pouchdb-persistence-plugin")},function(e,t){e.exports=require("history")},function(e,t){e.exports=require("json-path")},function(e,t){e.exports=require("pouchdb")},function(e,t){e.exports=require("pouchdb-authentication")},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("redux-router")},function(e,t){e.exports=require("strictduck")},function(e,t){e.exports=require("tcomb")},function(e,t,n,r){"use strict";e.exports={"default":n(r)}}]));
//# sourceMappingURL=browser_production.js.map