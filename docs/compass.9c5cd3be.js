parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Ampb":[function(require,module,exports) {
!function(n){"use strict";var e=function(n){return null!=n||null!=n},t=function(n,e){for(var t=a._callbacks[n],i=0;i<t.length;i++)t[i].apply(window,e)},i=function(n){for(var e=0,t=n.length-1;t>n.length-6;t--)e+=n[t];return e/5},a=window.Compass={method:void 0,watch:function(n){var e=++a._lastId;return a.init(function(t){if("phonegap"==t)a._watchers[e]=a._nav.compass.watchHeading(n);else if("webkitOrientation"==t){var i=function(e){n(e.webkitCompassHeading)};a._win.addEventListener("deviceorientation",i),a._watchers[e]=i}else if("orientationAndGPS"==t){var o;i=function(e){(o=-e.alpha+a._gpsDiff)<0?o+=360:o>360&&(o-=360),n(o)};a._win.addEventListener("deviceorientation",i),a._watchers[e]=i}}),e},unwatch:function(n){return a.init(function(e){"phonegap"==e?a._nav.compass.clearWatch(a._watchers[n]):"webkitOrientation"!=e&&"orientationAndGPS"!=e||a._win.removeEventListener("deviceorientation",a._watchers[n]),delete a._watchers[n]}),a},needGPS:function(n){return a._callbacks.needGPS.push(n),a},needMove:function(n){return a._callbacks.needMove.push(n),a},noSupport:function(n){return!1===a.method?n():e(a.method)||a._callbacks.noSupport.push(n),a},init:function(n){if(e(a.method))n(a.method);else if(a._callbacks.init.push(n),!a._initing)return a._initing=!0,a._nav.compass?a._start("phonegap"):a._win.DeviceOrientationEvent?(a._checking=0,a._win.addEventListener("deviceorientation",a._checkEvent),setTimeout(function(){!1!==a._checking&&a._start(!1)},500)):a._start(!1),a},_lastId:0,_watchers:{},_win:window,_nav:navigator,_callbacks:{init:[],noSupport:[],needGPS:[],needMove:[]},_initing:!1,_gpsDiff:void 0,_start:function(n){a.method=n,a._initing=!1,t("init",[n]),a._callbacks.init=[],!1===n&&t("noSupport",[]),a._callbacks.noSupport=[]},_checking:!1,_checkEvent:function(n){a._checking+=1;var t=!1;e(n.webkitCompassHeading)?a._start("webkitOrientation"):e(n.alpha)&&a._nav.geolocation?a._gpsHack():a._checking>1?a._start(!1):t=!0,t||(a._checking=!1,a._win.removeEventListener("deviceorientation",a._checkEvent))},_gpsHack:function(){var n=!0,o=[],c=[];t("needGPS");var r=function(n){o.push(n.alpha)};a._win.addEventListener("deviceorientation",r);var s=a._nav.geolocation.watchPosition(function(_){var v=_.coords;e(v.heading)&&(n&&(n=!1,t("needMove")),v.speed>1?(c.push(v.heading),c.length>=5&&o.length>=5&&(a._win.removeEventListener("deviceorientation",r),a._nav.geolocation.clearWatch(s),a._gpsDiff=i(c)+i(o),a._start("orientationAndGPS"))):c=[])},function(){a._win.removeEventListener("deviceorientation",r),a._start(!1)},{enableHighAccuracy:!0})}}}();
},{}]},{},["Ampb"], null)
//# sourceMappingURL=/compass.9c5cd3be.map