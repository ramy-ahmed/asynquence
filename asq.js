/*! asynquence
    v0.2.0-a (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
(function n(e,t,r){if(typeof module!=="undefined"&&module.exports)module.exports=r();else if(typeof define==="function"&&define.amd)define(r);else t[e]=r(e,t)})("ASQ",this,function e(n,t){var r,u=(t||{})[n],l=Array.prototype.slice,f="__ASQ__",i=Object.create(null);function a(n){return typeof setImmediate!=="undefined"?setImmediate(n):setTimeout(n,0)}function c(){function n(){clearTimeout(x);x=null;k.length=0;S.length=0;T.length=0;q.length=0}function e(){if(_)return t();if(!x){x=a(t)}}function t(){var t,r;x=null;if(_){n()}else if(E){while(S.length){t=S.shift();try{t.apply(i,q)}catch(l){if(o(l)){q=q.concat(l)}else{q.push(l);if(l.stack)q.push(l.stack)}if(S.length===0){console.error.apply(console,q)}}}}else if(j&&k.length>0){j=false;t=k.shift();r=T.slice();T.length=0;r.unshift(u());try{t.apply(i,r)}catch(l){if(o(l)){q=q.concat(l)}else{q.push(l)}E=true;e()}}}function u(){function n(){if(E||_||j)return;j=true;T.push.apply(T,arguments);q.length=0;e()}n.fail=function t(){if(E||_||j)return;E=true;T.length=0;q.push.apply(q,arguments);e()};n.abort=function r(){if(E||_)return;j=false;_=true;T.length=0;q.length=0;e()};return n}function f(n,e,t){function u(){clearTimeout(j);j=v=b=A=null}function f(){if(h)return c();if(!j){j=a(c)}}function c(){if(E||_||m)return;var e=[];j=null;if(g){n.fail.apply(i,A);u()}else if(h){n.abort();u()}else if(s()){m=true;v.forEach(function t(n,r){e.push(b["s"+r])});n.apply(i,e);u()}}function s(){if(E||_||g||h||m||v.length===0)return;var n=true;v.some(function e(t){if(t===null){n=false;return true}});return n}function p(){function n(){if(E||_||g||h||m||v[e]){return}var n=r.messages.apply(i,arguments);b["s"+e]=n.length>1?n:n[0];v[e]=true;f()}var e=v.length;n.fail=function t(){if(E||_||g||h||m||v[e]){return}g=true;A=l.call(arguments);f()};n.abort=function u(){if(E||_||g||h||m)return;h=true;c()};v[e]=null;return n}var g=false,h=false,m=false,y,d,v=[],b={},A,j;e.some(function k(n){if(g||h)return true;y=t.slice();y.unshift(p());try{n.apply(i,y)}catch(e){d=e;g=true;return true}});if(d){if(o(d)){n.fail.apply(i,d)}else{n.fail(d)}}}function c(){if(E||_||arguments.length===0)return I;k.push.apply(k,m(arguments,h));e();return I}function p(){if(_||arguments.length===0)return I;S.push.apply(S,arguments);e();return I}function y(){if(E||_||arguments.length===0)return I;var n=l.call(arguments);c(function e(t){var r=l.call(arguments,1);f(t,n,r)});return I}function d(){if(_||arguments.length===0)return I;l.call(arguments).forEach(function n(e){c(function t(n){e.apply(i,l.call(arguments,1));n()}).or(e.fail)});return I}function v(){if(E||_||arguments.length===0)return I;l.call(arguments).forEach(function n(e){c(function t(n){if(!o(e)){e=e.apply(i,l.call(arguments,1))}e.pipe(n)})});return I}function b(){if(E||_||arguments.length===0)return I;l.call(m(arguments,g)).forEach(function n(e){c(function t(n){var t=e.apply(i,l.call(arguments,1));if(!o(t)){t=r.messages(t)}n.apply(i,t)})});return I}function A(){if(E)return I;_=true;t();return I}var E=false,_=false,j=true,k=[],S=[],T=[],q=[],x,I=s({then:c,or:p,gate:y,pipe:d,seq:v,val:b,abort:A});I.then.apply(i,m(arguments,h));return I}function s(n){Object.defineProperty(n,f,{enumerable:false,value:true});return n}function o(n){return n!=null&&typeof n==="object"&&n[f]}function p(n,e){return l.call(e).slice(1,n+1)}function g(n){return r.messages.apply(i,p(n,arguments))}function h(n){arguments[n+1].apply(i,p(n,arguments))}function m(n,e){var t,r;n=l.call(n);for(t=0;t<n.length;t++){if(Array.isArray(n[t])&&o(n[t])){n[t]=e.bind.apply(e,[null,n[t].length].concat(n[t]))}else if(typeof n[t]!=="function"){for(r=t+1;r<n.length;r++){if(typeof n[r]==="function"||o(n[r])){break}}n.splice(t,r-t,e.bind.apply(e,[null,r-t].concat(n.slice(t,r))))}}return n}r=c;r.messages=function y(){var n=l.call(arguments);s(n);return n};r.isMessageWrapper=r.isSequence=o;r.noConflict=function d(){if(t){t[n]=u}return r};return r});
