montageDefine("8c245bc","lib/parser",{dependencies:[],factory:function(e,t){function n(e){return function(t){var n,s=0,r=1,i=e.apply(this,[function(e){return n=e,a()}].concat(Array.prototype.slice.call(arguments,1)));try{for(var o=0;t.length>o;o++)i=i(t[o],{index:o,line:r,column:s}),"\n"===t[o]?(r++,s=0):s++;i=i("",{index:o,line:r,column:s})}catch(l){if(l.loc){var c=l.loc;l.message+=t.length>80?" at line "+c.line+", column "+c.column:" in "+JSON.stringify(t)+" at index "+c.index}throw l}return n}}function a(){return function(e,t){if(""!==e){var n=Error("Unexpected "+JSON.stringify(e));throw n.loc=t,n}return function a(){return a}}}function s(e){return function(t){return function(n,a){return n===e?t(n,a):t(null,a)(n,a)}}}t.makeParser=n,t.expectEof=a,t.makeExpect=s}});