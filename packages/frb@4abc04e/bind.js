function bind(e,t,n){n.target=e,n.targetPath=t;var i=n.source=n.source||e,r=n["<-"]||n["<->"]||"",a=n.twoWay="<->"in n;n.sourcePath=r,n.value;var o=n.parameters=n.parameters||i,s=n.document,l=n.components,u=n.trace,c=n.sourceScope=new Scope(i,null,o,s,l),h=n.targetScope=new Scope(e,null,o,s,l);if(n.converter){var d=n.converter;d.convert&&(n.convert=d.convert.bind(d)),d.revert&&(n.revert=d.revert.bind(d))}else if(n.reverter){var p=n.reverter;p.convert&&(n.revert=p.convert.bind(p)),p.revert&&(n.convert=p.revert.bind(p))}var f=n.convert,m=n.revert,v=n.sourceSyntax=parse(r),g=n.targetSyntax=parse(t);u&&console.log("DEFINE BINDING",t,"<-",r,e);var _=bindOneWay(h,g,c,v,f,n,u),b=noop;return a&&(u&&console.log("DEFINE BINDING",t,"->",r,i),b=bindOneWay(c,v,h,g,m,n,u)),function(){_(),b()}}function bindOneWay(e,t,n,i,r,a,o){var s=solve(t,i);t=s[0],i=s[1];var l=compileObserver(i);r&&(l=Observers.makeConverterObserver(l,r,n));var u=compileBinder(t);return u(l,n,e,a,o?{sourcePath:stringify(i),targetPath:stringify(t)}:null)}function noop(){}var parse=require("./parse"),solve=require("./algebra"),stringify=require("./stringify"),compileObserver=require("./compile-observer"),compileBinder=require("./compile-binder"),Observers=require("./observers"),Scope=require("./scope");module.exports=bind;