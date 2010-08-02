/*
 *  ../SourceForge/trunk/mathjax/extensions/MathZoom.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Unpack([
  ['(','function(','e,h,d,f,c){var b=e.Insert({delay:400,styles:{"#','MathJax_Zoom','":{position:"absolute','","','background-color','":"#F0F0F0",overflow:"auto",display:"block","z-index":301,padding:".5em",border:"1px solid black",','margin:0,"','font-family":"serif","font-size":"85%","font-weight','":"normal","','font-style',10,'text-align":"left","text-indent":0,"text-transform":"none","line-height',10,'letter-spacing',10,'word-spacing',10,'word-wrap',10,'white-space":"nowrap","float":"none","','box-shadow":"5px 5px 15px #AAAAAA','","-webkit-',22,'","-moz-',22,'","-khtml-',22,'",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color=\'gray\', Positive=\'true\')"},"#','MathJax_ZoomOverlay',4,'",left:0,top:0',',"z-index":300,','display:"inline-block','",','width:"100%",height:"100%",','border:0,padding:0,',8,6,'":"','white",opacity:0',',filter:"alpha(opacity=0)"}}},(e.config.MathZoom||{}));var g=',1,'i){if(!i){i','=window.event}if(','i){if(','i.preventDefault','){',47,'()}if(','i.stopPropagation','){',51,'()}i.cancelBubble=true;i.returnValue=','false}','return false','};var a=MathJax.Extension.MathZoom={settings:e.config.menuSettings,HandleEvent:',1,'k,i,j){if(!k){k',45,'a.settings.CTRL&&!k.ctrlKey','){return true}if(a.settings.','ALT&&!k.altKey',62,'CMD&&!k.metaKey',62,'Shift&&!','k.shiftKey){','return true','}return a[i](k,j)},Click:',1,'j,i){','if(this.settings.','zoom==="','Click"){return this.Zoom(i,j)}},','DblClick',':',1,72,73,74,'Double-',75,'Mouseover:',1,72,73,74,'Hover"){','a.oldMouseOver','=i','.onmouseover',';i',92,'=null;i','.onmousemove=this.','Mousemove;i.','onmouseout=','this.Mouseout;','return a.Timer(','j,i)}},Mouseout:',1,'i){this',92,'=',90,';delete ',90,';this',96,98,'null;a.','ClearTimer();','return g(','i)},Mousemove:',1,'i){',100,'i||window.event,this)},Timer:',1,72,'this.',113,'this.timer','=','setTimeout(','MathJax.Callback','(["Zoom",this,i,{}]),b.delay);',114,'j)},ClearTimer:function(){if(',124,'){clearTimeout(',124,');delete ',124,'}},Zoom:',1,'r,k){this.',113,'this.Remove','();var u=r','.parentNode',';if(u','.className==="MathJax_MathContainer"){u=u.parentNode','}if(u',142,144,142,'}var p=(String(u.className).match(/^MathJax_(MathML|Display)$/)?u:r).','nextSibling',';var l=e.getJaxFor(p),q=l.root;var n=(f','&&l.outputJax.isa(','f','.constructor)?"','HTMLCSS":(c',152,'c',154,'MathML":null));if(!n){return}var i','=Math.floor(0.85*document.body.','clientWidth','),o',160,'clientHeight);var j=','h.Element("','span','",{style:{position:"','relative",',34,'",height:0,width:0},id:"','MathJax_ZoomFrame','"},[["','span",{id:"',30,'",onmousedown:',140,'}],["',173,3,'",onclick:',140,',style:{visibility:"hidden",fontSize:','this.settings.','zscale,"max-width":i+"px","max-height":o+"px"}},[["span"]]]]);var w=j.lastChild,t=w.firstChild,m=j.firstChild;r',142,'.insertBefore(j,r',');if(this','.msieZIndexBug','){var s=',165,'img",{','src:"about:blank','",id:"','MathJax_ZoomTracker','",','style:{width:0,height:0',',position:"relative"}});','document.body','.appendChild(','j);j','.style.position="absolute";','j.style.zIndex=b.styles["#',30,'"]["z-index"];j=s}var v=(this["Zoom"+n])(q,t,r);if(this','.msiePositionBug','){if(this.msieIE8Bug){t',201,'w','.style.height','=t','.offsetHeight',';t.style.position="";if(w',211,'<=o&&w','.offsetWidth','<=i){w.style.overflow="visible"}}if(this','.msieWidthBug','){w','.style.width','=Math.min(i,','v.w)}else{if(v.w>i){w',219,'=i}}if(w',211,'>o){w.style.Height=o+"px"}if(r.',150,'){r',142,186,'.',150,')}else{u',199,'j)}}else{if(this','.operaPositionBug','){w',219,220,'t',215,')+"px"}}this.Position(w,v,(n==="MathML"&&u.nodeName.toLowerCase()==="div"));w.style.visibility="";',73,74,89,'m',92,'=',140,'}','if(window.','addEventListener','){',251,'("resize",','this','.Resize,false)}else{if(window.','attachEvent){attachEvent("onresize",this','.Resize)}else{','this.onresize=','window.onresize',';',260,'=this.Resize','}}',114,'k)},ZoomHTMLCSS:',1,'n,p,o){p.className="MathJax";f.idPostfix="-zoom";f.getScales(p,p);n.toHTML(p,p);var q=n.HTMLspanElement().bbox;f.idPostfix="";if(q.width&&q.width!=="100%"){var i',160,161,');p',219,'=i+"px";p.style.display="inline-block";var j=(n.id||"MathJax-Span-"+n.spanID)+"-zoom";var k=','document.getElementById','(j).firstChild;while(k&&k',219,'!==q.width){k=k.',150,'}if(k){k',219,'="100%"}}p',199,'this.topImg);var ','m=this.topImg.offsetTop;','p','.removeChild(',283,'l=(this',217,'?f.getW(o)*f.em:o',215,');return{w:q.w*f.em,Y:-m,W:l}},ZoomMathML:',1,'j,k,l){j.toNativeMML(k,k);var m;k',199,'this.topImg);',284,'k',286,283,'i=(this.ffMMLwidthBug?l',142,':l).offsetWidth;return{w:k',215,',Y:-m,W:i}},Position:',1,'o,m,q){var j',263,'(),l=j.x,k=j.y,i=m.W;if(this',205,'){i=-i}if(q&&this','.ffMMLcenterBug','){i=0}var p=-Math.floor((o',215,'-i)/2),n=m.Y;o.style.left=Math.max(p,20-l)+"px";o.style.top=Math.max(n,20-k)+"px"},Resize:',1,'k){if(a.onresize){a.onresize(k)}var i=0,n=0,m=',274,'("',171,'"),j=',274,'("',30,'");var l=(a',188,'?',274,'("',194,'"):m);if(a',235,'){m','.style.border="1px solid"}','if(l.offsetParent){do{i+=l.offsetLeft;n+=l.offsetTop}while(l=l.offsetParent)}if(a',235,'){m.style.','border=""}if(a',188,337,'left=i+"px";m.style.top=n+"px"}j.style.left=(-i)+"px";j.style.top=(-n)+"px";if(a',205,'){',126,'a.SetWH,0)}else{a.SetWH()}return{x:i,y:n}},SetWH:function(){var i=',274,'("',30,'");i',219,'=i',209,'="1px";i',219,'=',198,'.scrollWidth+"px";i',209,'=',198,'.scrollHeight+"px"},Remove:',1,'j){var k=',274,'("',171,'");if(k){k',142,286,'k);k=',274,'("',194,'");if(k){k',142,286,'k)}if(','a.operaRefreshBug','){var i=h.addElement(',198,',"div',167,'fixed',32,',',36,'backgroundColor:"',41,'},id:"MathJax_OperaDiv"});',198,286,'i)}',250,'removeEventListener','){',394,254,'a',256,'detachEvent){detachEvent("onresize",a',258,260,'=a.onresize;delete a.onresize}}}',114,'j)}};','e.Register.StartupHook("','HTML-CSS',' Jax Ready",function(){','f=','MathJax.OutputJax','["HTML-CSS','"];f','.Augment({HandleEvent:a.HandleEvent','})});',406,'NativeMML',408,'c=',410,'.',416,';c',413,',MSIEmouseup:',1,'k,j,i){if(this.','trapUp){delete this.trapUp;',69,'}if(','this.MSIEzoomKeys(k)){return ','true}',56,'},MSIEclick:',1,426,'trapClick){delete this.trapClick;',69,'}if(!',430,55,'if(!',183,'zoom.match(/Click/)){',56,'}','return(a.','Click','(k,j)===false)},','MSIEdblclick:',1,'k,',72,'if(!',430,55,446,76,448,'MSIEmouseover',':function(k,j,i){if(this.settings.zoom!=="Hover"){return false}a.','Timer(k,j);',69,'},MSIEmouseout',460,113,69,'},MSIEmousemove',460,'Timer(k,j);',69,'},MSIEzoomKeys:',1,'i){',73,'CTRL&&!i.ctrlKey){',56,'}',73,'CMD&&!i.metaKey){',56,'}',73,'ALT&&!i.altKey){',56,'}',73,67,'i.shiftKey){',56,'}',69,'}})});e.Browser.Select({MSIE:',1,'i){var j=(document.compatMode==="BackCompat");var k=i.versionAtLeast("8.0")&&document.documentMode>7;a',205,'=true;a',217,'=!j;a.msieIE8Bug=k;a',188,'=!k;','a.msieInlineBlockAlignBug','=(!k||j)},Opera:',1,'i){a',235,'=true;',378,'=true},Firefox:',1,'i){a.ffMMLwidthBug=true;a',312,'=true}});a.topImg=(',501,'?',165,191,196,'},',192,'"}):',165,'span",{',196,',',34,'"}}));if(a',235,'){a.topImg',334,127,'.Queue(["Styles",d,b.styles],["Post",e.Startup.signal,"MathZoom Ready"],["loadComplete",d,"[MathJax]/extensions/MathZoom.js"])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,',410,411,'"],',410,'.NativeMML);']
]);
