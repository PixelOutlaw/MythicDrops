(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var i=n(1),r=n(9),o=(n(0),n(152)),a={id:"identifying_yml",title:"identifying.yml"},l={id:"identifying_yml",title:"identifying.yml",description:"## Configuration",source:"@site/../docs/identifying_yml.md",permalink:"/MythicDrops/docs/identifying_yml",sidebar:"docs",previous:{title:"customItems.yml",permalink:"/MythicDrops/docs/customItems_yml"},next:{title:"itemGroups.yml",permalink:"/MythicDrops/docs/itemGroups_yml"}},p=[{value:"Configuration",id:"configuration",children:[]}],c={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"MythicDrops has a lot of configuration options. Below is the contents of the\nidentifying.yml with inline explanations of what each configuration option does."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),'version: 5.1.0\noptions:\n  ## Should unidentified items respect the tier drops of the mob that they\n  ## originally dropped from? Does not work in 6.0.0. See\n  ## https://github.com/PixelOutlaw/MythicDrops/issues/396\n  ##\n  ## Will require the use of "%droppedby%" or "%allowabletiers%" from below.\n  unidentified-items-respect-tier-drops: true\nitems:\n  identity-tome:\n    ## Name of the identity tome item.\n    name: "&5Identity Tome"\n    ## Description of the identity tome item.\n    lore:\n      - "&7Right-click while holding this tome"\n      - "&7over an &dUnidentified Item"\n      - "&7to identify it!"\n    ## Material of the identity tome item.\n    material: ENCHANTED_BOOK\n  unidentified-item:\n    ## Name of the unidentified item.\n    name: "&dUnidentified Item"\n    ## Description of the unidentified item.\n    ##\n    ## You can use the following variables in the lore of an unidentified item:\n    ## %droppedby% - composed of `dropped-by-prefix`, then the mob type, then `dropped-by-suffix`\n    ## %allowabletiers% - composed of `allowable-tiers-prefix`, then allowable tiers separated by\n    ##                    `allowable-tiers-separator`, then `allowable-tiers-suffix`\n    ## %tier% - composed of `tier-prefix`, then the tier name, then `tier-suffix`\n    lore:\n      - "&7Find an &5Identity Tome &7to"\n      - "&7identify this item!"\n      - ""\n      - "%droppedby%"\n    ## Used to compose the "%allowabletiers%" variable above.\n    allowable-tiers-prefix: "&7Tiers: (&F"\n    ## Used to compose the "%allowabletiers%" variable above.\n    allowable-tiers-separator: "&7, &F"\n    ## Used to compose the "%allowabletiers%" variable above.\n    allowable-tiers-suffix: "&7)"\n    ## Used to compose the "%droppedby%" variable above.\n    dropped-by-prefix: "&7Dropped by: &F"\n    ## Used to compose the "%droppedby%" variable above.\n    dropped-by-suffix: ""\n    ## Used to compose the "%tier%" variable above.\n    tier-prefix: "&7Tier: &F"\n    ## Used to compose the "%tier%" variable above.\n    tier-suffix: ""\n')))}s.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,m=d["".concat(a,".").concat(u)]||d[u]||f[u]||o;return n?r.a.createElement(m,l({ref:t},c,{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);