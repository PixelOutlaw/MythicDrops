(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(9),i=(n(0),n(152)),a={id:"customItems_yml",title:"customItems.yml"},c={id:"customItems_yml",title:"customItems.yml",description:"## Configuration",source:"@site/../docs/customItems_yml.md",permalink:"/MythicDrops/docs/customItems_yml",sidebar:"docs",previous:{title:"creatureSpawning.yml",permalink:"/MythicDrops/docs/creatureSpawning_yml"},next:{title:"identifying.yml",permalink:"/MythicDrops/docs/identifying_yml"}},m=[{value:"Configuration",id:"configuration",children:[]}],s={rightToc:m};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"MythicDrops has a lot of configuration options. Below is the contents of the\ncustomItems.yml with inline explanations of what each configuration option does."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'version: 5.0.0\n## Name of a custom item. Used as an identifier by the plugin, so it needs\n## to be unique.\nsocketsword:\n  ## Material of the custom item. You can obtain a list of potential material\n  ## names (for 1.14 at time of writing) here:\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html\n  material: WOODEN_SWORD\n  ## Name to display on the custom item itself.\n  display-name: "&2Socket Sword (Unique)"\n  ## Goes in the description of the custom item.\n  lore:\n    - "&7This sword has sockets!"\n    - "&2(Socket)"\n    - "&2(Socket)"\n    - "&2(Socket)"\n    - "&7Find a &2Socket Gem&7 to fill a &2(Socket)"\n  ## Weight of the custom item. See the weights section of the documentation\n  ## for more information.\n  weight: 100\n  ## Durability of the item when spawned. A durability of 1 means that the\n  ## item has taken 1 damage. If an item has a max durability of 127,\n  ## then setting this to 126 would almost break the item. This is due\n  ## to how both Minecraft and Spigot handle durability.\n  durability: 1\n  ## Chance for this custom item to drop when a monster that is carrying it\n  ## dies.\n  chance-to-drop-on-monster-death: 1.0\n  ## Should a message be sent to every player in the same world\n  ## when this custom item is dropped?\n  broadcast-on-find: true\n  ## Custom model data value. Only supported in 1.14+.\n  ## https://www.planetminecraft.com/forums/communities/texturing/new-1-14-custom-item-models-tuto-578834/\n  custom-model-data: 0\n  ## Should the custom item have the unbreakable NBT tag?\n  unbreakable: false\n  ## Enchantments to go on the custom item. Enchantment names here:\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html\n  enchantments:\n    ## Standard enchantment name to level mapping.\n    DAMAGE_ALL: 5\n    LOOTING:\n      ## Minimum level of enchantment\n      minimum-level: 1\n      ## Maximum level of enchantment. Can be higher than normal maximum level\n      ## per Minecraft rules.\n      maximum-level: 2\n')))}u.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),l=u(n),f=o,d=l["".concat(a,".").concat(f)]||l[f]||p[f]||i;return n?r.a.createElement(d,c({ref:t},s,{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);