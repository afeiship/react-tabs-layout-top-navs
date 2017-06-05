!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-tabs")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react","react-tabs"],t):"object"==typeof exports?exports.ReactTabsLayoutTopNavs=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-tabs")):e.ReactTabsLayoutTopNavs=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react,e["react-tabs"])}(this,function(e,t,n,r,o,a){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);t.default=a.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,c,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(5);var p=n(10),d=r(p),v=n(11),h=n(9),b=r(h),y=n(6),m=r(y),g=n(7),x=(r(g),n(8)),O=(r(x),c=u=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onClick=function(e){var t=e.target.value;n.setState({activeIndex:t})},n.state={activeIndex:e.activeIndex},n}return s(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e,t){var n=nextPros,r=n.activeIndex;r!==this.state.activeIndex&&this.setState({activeIndex:r})}},{key:"geteInitialChlidren",value:function(e){var t=this.props.children;return p.Children.map(t,function(t){var n=t.props,r=n.title,a=n.badge,i=o(n,["title","badge"]);return e.push({title:r,badge:a}),(0,p.cloneElement)((0,p.createElement)(t.type),i)})}},{key:"template",value:function(e){return e.map(function(e,t){return d.default.createElement("span",{key:t},d.default.createElement("em",null,e.title),d.default.createElement("b",{className:"badge"},e.badge))})}},{key:"render",value:function(){var e=[],t=this.props,n=t.className,r=t.menuOverflow,a=o(t,["className","menuOverflow"]),i=this.geteInitialChlidren(e);return d.default.createElement(v.ReactTabs,l({},a,{className:(0,m.default)("react-tabs-layout-top-navs",n)}),d.default.createElement(v.ReactTabsMenu,{overflow:r,onItemClick:this._onClick,activeIndex:this.state.activeIndex,children:this.template(e)}),d.default.createElement(v.ReactTabsBody,{activeIndex:this.state.activeIndex,children:i}))}}]),t}(p.PureComponent),u.propTypes={className:b.default.string,menuOverflow:b.default.oneOf(["overflow","hidden","auto"])},u.defaultProps={menuOverflow:"hidden"},c);t.default=O},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".react-tabs-layout-top-navs>.react-tabs-menu{position:fixed;left:0;right:0;overflow:auto}.react-tabs-layout-top-navs>.react-tabs-menu>.scroller{-webkit-overflow-scrolling:touch;width:102%;height:44px;line-height:44px}.react-tabs-layout-top-navs>.react-tabs-menu>.scroller>.item{float:left}.react-tabs-layout-top-navs>.react-tabs-body{padding-top:44px}.react-tabs-layout-top-navs>.react-tabs-body>.item{display:none}.react-tabs-layout-top-navs>.react-tabs-body>.item.active{display:block}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(c(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(c(r.parts[a],t));d[r.id]={id:r.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],a=o[0],i=o[1],s=o[2],u=o[3],c={css:i,media:s,sourceMap:u};n[a]?n[a].parts.push(c):t.push(n[a]={id:a,parts:[c]})}return t}function a(e,t){var n=b(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var a=m++;n=y||(y=s(t)),r=l.bind(null,n,a,!1),o=l.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},v=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=v(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=v(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var s=n[i],u=d[s.id];u.refs--,a.push(u)}if(e){var c=o(e);r(c,t)}for(var i=0;i<a.length;i++){var u=a[i];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete d[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=a}])});
//# sourceMappingURL=react-tabs-layout-top-navs.js.map