(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),o=(n(0),n(169)),i={id:"weight",title:"Weight"},c={id:"weight",isDocsHomePage:!1,title:"Weight",description:"MythicDrops uses a weight-based randomization system for determining tier drops,",source:"@site/../docs/weight.md",permalink:"/MythicDrops/docs/weight",sidebar:"docs",previous:{title:"Permissions",permalink:"/MythicDrops/docs/permissions"},next:{title:"Socket Extenders",permalink:"/MythicDrops/docs/socket-extenders"}},s=[{value:"Explanation",id:"explanation",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"MythicDrops uses a weight-based randomization system for determining tier drops,\nsocket gem drops, and custom item drops."),Object(o.b)("h2",{id:"explanation"},"Explanation"),Object(o.b)("p",null,'Weight based systems make it easier to expand upon items available in a randomized system.\nInstead of having to ensure that each item\'s chance to be chosen all adds up to 1.0 (100%),\nweight based systems allow each item to contribute a value to a total and each item therefore\nhas an automatically determinable "chance" to be chosen.'),Object(o.b)("p",null,"If you have an item with a weight of 20 and all of the items in the system have their weight\nadd up to 200, the aforementioned item has a 10% chance to be chosen."),Object(o.b)("p",null,"This does have the side effect of making it a bit tedious to enforce that a specific\nitem in the system has a static percentage chance to be chosen. You end up having to\ndo a bit of math based off of the weight of all of your items."),Object(o.b)("p",null,"Ultimately, however, the weight based system is easier to expand and add more items to,\nas it will automatically rebalance the percentage chances of the existing items in the\nsystem."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Think of it like a deck of cards."),Object(o.b)("p",null,"If you have a suit of cards, Ace - King, and assign each of them a weight equal to their face value (1 - 13), you have a total weight of 91."),Object(o.b)("p",null,"You pick a random number between 0 and 91. Let's say it's 14."),Object(o.b)("p",null,"You shuffle the cards from the suit and begin to deal them one at a time, adding each card to the previous cards you dealt. If the total is 14 or greater, you choose the card you just dealt. Example of the series:"),Object(o.b)("p",null,"You flip over 4. Your total is 4, which is not greater than or equal to 14.\nYou flip over 2. Your total is 6, which is not greater than or equal to 14.\nYou flip over 10. Your total is 16, which is greater than 14, so you choose 10."))}u.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||h[d]||o;return n?r.a.createElement(m,c({ref:t},l,{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);