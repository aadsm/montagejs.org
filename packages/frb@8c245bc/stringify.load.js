montageDefine("8c245bc","stringify",{dependencies:["./parse","./language"],factory:function(e,t,n){"use strict";function a(e,t){return a.semantics.stringify(e,t)}function s(e){return function(t,n,a){var s=e+"{"+a(t.args[1],n)+"}";return"value"===t.args[0].type?s:a(t.args[0],n)+"."+s}}e("./parse");var r=e("./language").precedence,i=e("./language").operatorTypes;e("./language").operatorTokens,n.exports=a,a.semantics={makeBlockStringifier:s,stringify:function(e,t,n){function a(e){var n=i(e,t);return n?n:"()"}var s,i=this.stringify.bind(this),o=this.stringifiers;if(o[e.type])s=o[e.type](e,t,i);else if(e.inline)s="&"+e.type+"("+e.args.map(a).join(", ")+")";else{var l;1===e.args.length&&"mapBlock"===e.args[0].type?(l=e.type+"{"+i(e.args[0].args[1],t)+"}",e=e.args[0]):l=e.type+"("+e.args.slice(1).map(a).join(", ")+")",s="value"===e.args[0].type?l:i(e.args[0],t)+"."+l}return!n||n.type===e.type&&"if"!==n.type||r.get(n.type).has(e.type)?s:"("+s+")"},stringifiers:{value:function(){return""},literal:function(e){return"string"==typeof e.value?"'"+e.value.replace("'","\\'")+"'":""+e.value},parameters:function(){return"$"},record:function(e,t,n){return"{"+Object.map(e.args,function(e,a){var s;return s="value"===e.type?"()":n(e,t),a+": "+s}).join(", ")+"}"},tuple:function(e,t,n){return"["+Object.map(e.args,function(e){return"value"===e.type?"()":n(e)}).join(", ")+"]"},component:function(e,t){var n;return t&&t.components&&e.component?t.components.getObjectLabel?n=t.components.getObjectLabel(e.component):t.components.getLabelForObject&&(n=t.components.getLabelForObject(e.component)):n=e.label,"@"+n},element:function(e){return"#"+e.id},mapBlock:s("map"),filterBlock:s("filter"),someBlock:s("some"),everyBlock:s("every"),sortedBlock:s("sorted"),groupBlock:s("group"),groupMapBlock:s("groupMap"),minBlock:s("min"),maxBlock:s("max"),property:function(e,t,n){return"value"===e.args[0].type?"string"==typeof e.args[1].value?e.args[1].value:"literal"===e.args[1].type?"."+e.args[1].value:"()["+n(e.args[1],t)+"]":"parameters"===e.args[0].type?"$"+e.args[1].value:"literal"===e.args[1].type&&/^[\w\d_]+$/.test(e.args[1].value)?n(e.args[0],t,{type:"scope"})+"."+e.args[1].value:n(e.args[0],{type:"scope"},t)+"["+n(e.args[1],t)+"]"},"with":function(e,t,n){var a=n(e.args[1],t,e);return n(e.args[0],t)+"."+a},get:function(e,t,n){var a;return a="value"===e.args[0].type?"()":n(e.args[0],t),a+"["+n(e.args[1],t)+"]"},not:function(e,t,n){return"equals"===e.args[0].type?n(e.args[0].args[0],t,{type:"equals"})+" != "+n(e.args[0].args[1],t,{type:"equals"}):"!"+n(e.args[0],t,e)},neg:function(e,t,n){return"-"+n(e.args[0],t,e)},toNumber:function(e,t,n){return"+"+n(e.args[0],t,e)},parent:function(e,t,n){return"^"+n(e.args[0],t,e)},"if":function(e,t,n){return n(e.args[0],t,e)+" ? "+n(e.args[1],t)+" : "+n(e.args[2],t)},event:function(e,t,n){return e.when+" "+e.event+" -> "+n(e.listener,t)},binding:function(e,t,n,a){var s=a(t.args[0],n)+" "+e+" "+a(t.args[1],n),r="",i=t.descriptor;if(i)for(var o in i)r+=", "+o+": "+a(i[o],n);return s+r},bind:function(e,t,n){return this.binding("<-",e,t,n)},bind2:function(e,t,n){return this.binding("<->",e,t,n)},assign:function(e,t,n){return n(e.args[0],t)+": "+n(e.args[1],t)},block:function(e,t,n){var a="@"+e.label;return e.connection&&("prototype"===e.connection?a+=" < ":"object"===e.connection&&(a+=" : "),a+=n({type:"literal",value:e.module}),e.exports&&"value"!==e.exports.type&&(a+=" "+n(e.exports,t))),a+" {\n"+e.statements.map(function(e){return"    "+n(e,t)+";\n"}).join("")+"}\n"},sheet:function(e,t,n){return"\n"+e.blocks.map(function(e){return n(e,t)}).join("\n")+"\n"}}},i.forEach(function(e,t){a.semantics.stringifiers[t]=function(t,n,a){return t.args.map(function(e){return a(e,n,t)}).join(" "+e+" ").trim()}})}});