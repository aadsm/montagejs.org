var Montage=require("montage").Montage,Component=require("montage/ui/component").Component,Expression=require("model/expression").Expression;exports.Main=Montage.create(Component,{calculator:{value:null,serializable:!0},tape:{value:null,serializable:!0},prepareForDraw:{value:function(){this.calculator.addEventListener("calcResult",this,!1);var e=navigator.userAgent.toLowerCase(),t=e.indexOf("android")>-1;t&&this._element.classList.add("isAndroid")}},handleCalcResult:{value:function(e){e.detail.expression&&(e.detail.expression.comment="Calculator",this.tape.addTapeEntry(e.detail.expression))}},templateDidLoad:{value:function(){var e=screen.height,t=73,n=parseInt(e/t),r=Montage.create(Expression);for(var i=0;i<n;i++)this.tape.addEmptyTapeEntry(r)}}})