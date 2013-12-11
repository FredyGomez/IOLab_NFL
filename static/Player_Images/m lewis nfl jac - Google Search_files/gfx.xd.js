/*
	Copyright (c) 2004-2010, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is an optimized version of Dojo, built for deployment and not for
	development. To get sources and documentation, please visit:

		http://dojotoolkit.org
*/

window[(typeof (djConfig)!="undefined"&&djConfig.scopeMap&&djConfig.scopeMap[0][1])||"dojo"]._xdResourceLoaded(function(_1,_2,_3){_1.loadInit(function(){var _4=_1.getObject("dojox.gfx",true),sl,_5,_6;if(!_4.renderer){if(_1.config.forceGfxRenderer){_3.gfx.renderer=_1.config.forceGfxRenderer;return;}var _7=(typeof _1.config.gfxRenderer=="string"?_1.config.gfxRenderer:"svg,vml,silverlight,canvas").split(",");var ua=navigator.userAgent,_8=0,_9=0;if(_1.isSafari>=3){if(ua.indexOf("iPhone")>=0||ua.indexOf("iPod")>=0){_6=ua.match(/Version\/(\d(\.\d)?(\.\d)?)\sMobile\/([^\s]*)\s?/);if(_6){_8=parseInt(_6[4].substr(0,3),16);}}}if(_1.isWebKit){if(!_8){_6=ua.match(/Android\s+(\d+\.\d+)/);if(_6){_9=parseFloat(_6[1]);}}}for(var i=0;i<_7.length;++i){switch(_7[i]){case "svg":if(!_1.isIE&&(!_8||_8>=1521)&&!_9&&!_1.isAIR){_3.gfx.renderer="svg";}break;case "vml":if(_1.isIE){_3.gfx.renderer="vml";}break;case "silverlight":try{if(_1.isIE){sl=new ActiveXObject("AgControl.AgControl");if(sl&&sl.IsVersionSupported("1.0")){_5=true;}}else{if(navigator.plugins["Silverlight Plug-In"]){_5=true;}}}catch(e){_5=false;}finally{sl=null;}if(_5){_3.gfx.renderer="silverlight";}break;case "canvas":if(!_1.isIE){_3.gfx.renderer="canvas";}break;}if(_3.gfx.renderer){break;}}if(_1.config.isDebug){}}});return {depends:[["provide","dojox.gfx.matrix"],["provide","dojox.gfx._base"],["provide","dojox.gfx"],["requireIf",_3.gfx.renderer=="svg","dojox.gfx.svg"],["requireIf",_3.gfx.renderer=="vml","dojox.gfx.vml"],["requireIf",_3.gfx.renderer=="silverlight","dojox.gfx.silverlight"],["requireIf",_3.gfx.renderer=="canvas","dojox.gfx.canvas"]],defineResource:function(_a,_b,_c){if(!_a._hasResource["dojox.gfx.matrix"]){_a._hasResource["dojox.gfx.matrix"]=true;_a.provide("dojox.gfx.matrix");(function(){var m=_c.gfx.matrix;var _d={};m._degToRad=function(_e){return _d[_e]||(_d[_e]=(Math.PI*_e/180));};m._radToDeg=function(_f){return _f/Math.PI*180;};m.Matrix2D=function(arg){if(arg){if(typeof arg=="number"){this.xx=this.yy=arg;}else{if(arg instanceof Array){if(arg.length>0){var _10=m.normalize(arg[0]);for(var i=1;i<arg.length;++i){var l=_10,r=_c.gfx.matrix.normalize(arg[i]);_10=new m.Matrix2D();_10.xx=l.xx*r.xx+l.xy*r.yx;_10.xy=l.xx*r.xy+l.xy*r.yy;_10.yx=l.yx*r.xx+l.yy*r.yx;_10.yy=l.yx*r.xy+l.yy*r.yy;_10.dx=l.xx*r.dx+l.xy*r.dy+l.dx;_10.dy=l.yx*r.dx+l.yy*r.dy+l.dy;}_a.mixin(this,_10);}}else{_a.mixin(this,arg);}}}};_a.extend(m.Matrix2D,{xx:1,xy:0,yx:0,yy:1,dx:0,dy:0});_a.mixin(m,{identity:new m.Matrix2D(),flipX:new m.Matrix2D({xx:-1}),flipY:new m.Matrix2D({yy:-1}),flipXY:new m.Matrix2D({xx:-1,yy:-1}),translate:function(a,b){if(arguments.length>1){return new m.Matrix2D({dx:a,dy:b});}return new m.Matrix2D({dx:a.x,dy:a.y});},scale:function(a,b){if(arguments.length>1){return new m.Matrix2D({xx:a,yy:b});}if(typeof a=="number"){return new m.Matrix2D({xx:a,yy:a});}return new m.Matrix2D({xx:a.x,yy:a.y});},rotate:function(_11){var c=Math.cos(_11);var s=Math.sin(_11);return new m.Matrix2D({xx:c,xy:-s,yx:s,yy:c});},rotateg:function(_12){return m.rotate(m._degToRad(_12));},skewX:function(_13){return new m.Matrix2D({xy:Math.tan(_13)});},skewXg:function(_14){return m.skewX(m._degToRad(_14));},skewY:function(_15){return new m.Matrix2D({yx:Math.tan(_15)});},skewYg:function(_16){return m.skewY(m._degToRad(_16));},reflect:function(a,b){if(arguments.length==1){b=a.y;a=a.x;}var a2=a*a,b2=b*b,n2=a2+b2,xy=2*a*b/n2;return new m.Matrix2D({xx:2*a2/n2-1,xy:xy,yx:xy,yy:2*b2/n2-1});},project:function(a,b){if(arguments.length==1){b=a.y;a=a.x;}var a2=a*a,b2=b*b,n2=a2+b2,xy=a*b/n2;return new m.Matrix2D({xx:a2/n2,xy:xy,yx:xy,yy:b2/n2});},normalize:function(_17){return (_17 instanceof m.Matrix2D)?_17:new m.Matrix2D(_17);},clone:function(_18){var obj=new m.Matrix2D();for(var i in _18){if(typeof (_18[i])=="number"&&typeof (obj[i])=="number"&&obj[i]!=_18[i]){obj[i]=_18[i];}}return obj;},invert:function(_19){var M=m.normalize(_19),D=M.xx*M.yy-M.xy*M.yx,M=new m.Matrix2D({xx:M.yy/D,xy:-M.xy/D,yx:-M.yx/D,yy:M.xx/D,dx:(M.xy*M.dy-M.yy*M.dx)/D,dy:(M.yx*M.dx-M.xx*M.dy)/D});return M;},_multiplyPoint:function(_1a,x,y){return {x:_1a.xx*x+_1a.xy*y+_1a.dx,y:_1a.yx*x+_1a.yy*y+_1a.dy};},multiplyPoint:function(_1b,a,b){var M=m.normalize(_1b);if(typeof a=="number"&&typeof b=="number"){return m._multiplyPoint(M,a,b);}return m._multiplyPoint(M,a.x,a.y);},multiply:function(_1c){var M=m.normalize(_1c);for(var i=1;i<arguments.length;++i){var l=M,r=m.normalize(arguments[i]);M=new m.Matrix2D();M.xx=l.xx*r.xx+l.xy*r.yx;M.xy=l.xx*r.xy+l.xy*r.yy;M.yx=l.yx*r.xx+l.yy*r.yx;M.yy=l.yx*r.xy+l.yy*r.yy;M.dx=l.xx*r.dx+l.xy*r.dy+l.dx;M.dy=l.yx*r.dx+l.yy*r.dy+l.dy;}return M;},_sandwich:function(_1d,x,y){return m.multiply(m.translate(x,y),_1d,m.translate(-x,-y));},scaleAt:function(a,b,c,d){switch(arguments.length){case 4:return m._sandwich(m.scale(a,b),c,d);case 3:if(typeof c=="number"){return m._sandwich(m.scale(a),b,c);}return m._sandwich(m.scale(a,b),c.x,c.y);}return m._sandwich(m.scale(a),b.x,b.y);},rotateAt:function(_1e,a,b){if(arguments.length>2){return m._sandwich(m.rotate(_1e),a,b);}return m._sandwich(m.rotate(_1e),a.x,a.y);},rotategAt:function(_1f,a,b){if(arguments.length>2){return m._sandwich(m.rotateg(_1f),a,b);}return m._sandwich(m.rotateg(_1f),a.x,a.y);},skewXAt:function(_20,a,b){if(arguments.length>2){return m._sandwich(m.skewX(_20),a,b);}return m._sandwich(m.skewX(_20),a.x,a.y);},skewXgAt:function(_21,a,b){if(arguments.length>2){return m._sandwich(m.skewXg(_21),a,b);}return m._sandwich(m.skewXg(_21),a.x,a.y);},skewYAt:function(_22,a,b){if(arguments.length>2){return m._sandwich(m.skewY(_22),a,b);}return m._sandwich(m.skewY(_22),a.x,a.y);},skewYgAt:function(_23,a,b){if(arguments.length>2){return m._sandwich(m.skewYg(_23),a,b);}return m._sandwich(m.skewYg(_23),a.x,a.y);}});})();_c.gfx.Matrix2D=_c.gfx.matrix.Matrix2D;}if(!_a._hasResource["dojox.gfx._base"]){_a._hasResource["dojox.gfx._base"]=true;_a.provide("dojox.gfx._base");(function(){var g=_c.gfx,b=g._base;g._hasClass=function(_24,_25){var cls=_24.getAttribute("className");return cls&&(" "+cls+" ").indexOf(" "+_25+" ")>=0;};g._addClass=function(_26,_27){var cls=_26.getAttribute("className")||"";if(!cls||(" "+cls+" ").indexOf(" "+_27+" ")<0){_26.setAttribute("className",cls+(cls?" ":"")+_27);}};g._removeClass=function(_28,_29){var cls=_28.getAttribute("className");if(cls){_28.setAttribute("className",cls.replace(new RegExp("(^|\\s+)"+_29+"(\\s+|$)"),"$1$2"));}};b._getFontMeasurements=function(){var _2a={"1em":0,"1ex":0,"100%":0,"12pt":0,"16px":0,"xx-small":0,"x-small":0,"small":0,"medium":0,"large":0,"x-large":0,"xx-large":0};if(_a.isIE){_a.doc.documentElement.style.fontSize="100%";}var div=_a.doc.createElement("div");var s=div.style;s.position="absolute";s.top="-100px";s.left="0px";s.width="30px";s.height="1000em";s.borderWidth="0px";s.margin="0px";s.padding="0px";s.outline="none";s.lineHeight="1";s.overflow="hidden";_a.body().appendChild(div);for(var p in _2a){div.style.fontSize=p;_2a[p]=Math.round(div.offsetHeight*12/16)*16/12/1000;}_a.body().removeChild(div);div=null;return _2a;};var _2b=null;b._getCachedFontMeasurements=function(_2c){if(_2c||!_2b){_2b=b._getFontMeasurements();}return _2b;};var _2d=null,_2e={};b._getTextBox=function(_2f,_30,_31){var m,s,al=arguments.length;if(!_2d){m=_2d=_a.doc.createElement("div");s=m.style;s.position="absolute";s.top="-10000px";s.left="0";_a.body().appendChild(m);}else{m=_2d;s=m.style;}m.className="";s.borderWidth="0";s.margin="0";s.padding="0";s.outline="0";if(al>1&&_30){for(var i in _30){if(i in _2e){continue;}s[i]=_30[i];}}if(al>2&&_31){m.className=_31;}m.innerHTML=_2f;if(m["getBoundingClientRect"]){var bcr=m.getBoundingClientRect();return {l:bcr.left,t:bcr.top,w:bcr.width||(bcr.right-bcr.left),h:bcr.height||(bcr.bottom-bcr.top)};}else{return _a.marginBox(m);}};var _32=0;b._getUniqueId=function(){var id;do{id=_a._scopeName+"Unique"+(++_32);}while(_a.byId(id));return id;};})();_a.mixin(_c.gfx,{defaultPath:{type:"path",path:""},defaultPolyline:{type:"polyline",points:[]},defaultRect:{type:"rect",x:0,y:0,width:100,height:100,r:0},defaultEllipse:{type:"ellipse",cx:0,cy:0,rx:200,ry:100},defaultCircle:{type:"circle",cx:0,cy:0,r:100},defaultLine:{type:"line",x1:0,y1:0,x2:100,y2:100},defaultImage:{type:"image",x:0,y:0,width:0,height:0,src:""},defaultText:{type:"text",x:0,y:0,text:"",align:"start",decoration:"none",rotated:false,kerning:true},defaultTextPath:{type:"textpath",text:"",align:"start",decoration:"none",rotated:false,kerning:true},defaultStroke:{type:"stroke",color:"black",style:"solid",width:1,cap:"butt",join:4},defaultLinearGradient:{type:"linear",x1:0,y1:0,x2:100,y2:100,colors:[{offset:0,color:"black"},{offset:1,color:"white"}]},defaultRadialGradient:{type:"radial",cx:0,cy:0,r:100,colors:[{offset:0,color:"black"},{offset:1,color:"white"}]},defaultPattern:{type:"pattern",x:0,y:0,width:0,height:0,src:""},defaultFont:{type:"font",style:"normal",variant:"normal",weight:"normal",size:"10pt",family:"serif"},getDefault:(function(){var _33={};return function(_34){var t=_33[_34];if(t){return new t();}t=_33[_34]=new Function;t.prototype=_c.gfx["default"+_34];return new t();};})(),normalizeColor:function(_35){return (_35 instanceof _a.Color)?_35:new _a.Color(_35);},normalizeParameters:function(_36,_37){if(_37){var _38={};for(var x in _36){if(x in _37&&!(x in _38)){_36[x]=_37[x];}}}return _36;},makeParameters:function(_39,_3a){if(!_3a){return _a.delegate(_39);}var _3b={};for(var i in _39){if(!(i in _3b)){_3b[i]=_a.clone((i in _3a)?_3a[i]:_39[i]);}}return _3b;},formatNumber:function(x,_3c){var val=x.toString();if(val.indexOf("e")>=0){val=x.toFixed(4);}else{var _3d=val.indexOf(".");if(_3d>=0&&val.length-_3d>5){val=x.toFixed(4);}}if(x<0){return val;}return _3c?" "+val:val;},makeFontString:function(_3e){return _3e.style+" "+_3e.variant+" "+_3e.weight+" "+_3e.size+" "+_3e.family;},splitFontString:function(str){var _3f=_c.gfx.getDefault("Font");var t=str.split(/\s+/);do{if(t.length<5){break;}_3f.style=t[0];_3f.variant=t[1];_3f.weight=t[2];var i=t[3].indexOf("/");_3f.size=i<0?t[3]:t[3].substring(0,i);var j=4;if(i<0){if(t[4]=="/"){j=6;}else{if(t[4].charAt(0)=="/"){j=5;}}}if(j<t.length){_3f.family=t.slice(j).join(" ");}}while(false);return _3f;},cm_in_pt:72/2.54,mm_in_pt:7.2/2.54,px_in_pt:function(){return _c.gfx._base._getCachedFontMeasurements()["12pt"]/12;},pt2px:function(len){return len*_c.gfx.px_in_pt();},px2pt:function(len){return len/_c.gfx.px_in_pt();},normalizedLength:function(len){if(len.length==0){return 0;}if(len.length>2){var _40=_c.gfx.px_in_pt();var val=parseFloat(len);switch(len.slice(-2)){case "px":return val;case "pt":return val*_40;case "in":return val*72*_40;case "pc":return val*12*_40;case "mm":return val*_c.gfx.mm_in_pt*_40;case "cm":return val*_c.gfx.cm_in_pt*_40;}}return parseFloat(len);},pathVmlRegExp:/([A-Za-z]+)|(\d+(\.\d+)?)|(\.\d+)|(-\d+(\.\d+)?)|(-\.\d+)/g,pathSvgRegExp:/([A-Za-z])|(\d+(\.\d+)?)|(\.\d+)|(-\d+(\.\d+)?)|(-\.\d+)/g,equalSources:function(a,b){return a&&b&&a==b;}});}if(!_a._hasResource["dojox.gfx"]){_a._hasResource["dojox.gfx"]=true;_a.provide("dojox.gfx");_a.requireIf(_c.gfx.renderer=="svg","dojox.gfx.svg");_a.requireIf(_c.gfx.renderer=="vml","dojox.gfx.vml");_a.requireIf(_c.gfx.renderer=="silverlight","dojox.gfx.silverlight");_a.requireIf(_c.gfx.renderer=="canvas","dojox.gfx.canvas");}}};});
