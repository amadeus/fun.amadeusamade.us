// MooTools: the javascript framework.
// Load this file's selection again by visiting: http://mootools.net/more/cf160b909b1fcc51ee427540080ad3cf 
// Or build this file again with packager using: packager build More/Events.Pseudos
/*
---
copyrights:
  - [MooTools](http://mootools.net)

licenses:
  - [MIT License](http://mootools.net/license.txt)
...
*/
MooTools.More={version:"1.3.2.1",build:"e586bcd2496e9b22acfde32e12f84d49ce09e59d"};Events.Pseudos=function(g,c,e){var b="monitorEvents:";var a=function(h){return{store:h.store?function(i,j){h.store(b+i,j);
}:function(i,j){(h.$monitorEvents||(h.$monitorEvents={}))[i]=j;},retrieve:h.retrieve?function(i,j){return h.retrieve(b+i,j);}:function(i,j){if(!h.$monitorEvents){return j;
}return h.$monitorEvents[i]||j;}};};var f=function(j){if(j.indexOf(":")==-1||!g){return null;}var i=Slick.parse(j).expressions[0][0],m=i.pseudos,h=m.length,k=[];
while(h--){if(g[m[h].key]){k.push({event:i.tag,value:m[h].value,pseudo:m[h].key,original:j});}}return k.length?k:null;};var d=function(h){return Object.merge.apply(this,h.map(function(i){return g[i.pseudo].options||{};
}));};return{addEvent:function(m,p,j){var n=f(m);if(!n){return c.call(this,m,p,j);}var k=a(this),s=k.retrieve(m,[]),h=n[0].event,t=d(n),o=p,i=t[h]||{},l=Array.slice(arguments,2),r=this,q;
if(i.args){l.append(Array.from(i.args));}if(i.base){h=i.base;}if(i.onAdd){i.onAdd(this);}n.each(function(u){var v=o;o=function(){(i.listener||g[u.pseudo].listener).call(r,u,v,arguments,q,t);
};});q=o.bind(this);s.include({event:p,monitor:q});k.store(m,s);c.apply(this,[m,p].concat(l));return c.apply(this,[h,q].concat(l));},removeEvent:function(l,n){var m=f(l);
if(!m){return e.call(this,l,n);}var j=a(this),o=j.retrieve(l);if(!o){return this;}var h=m[0].event,p=d(m),i=p[h]||{},k=Array.slice(arguments,2);if(i.args){k.append(Array.from(i.args));
}if(i.base){h=i.base;}if(i.onRemove){i.onRemove(this);}e.apply(this,[l,n].concat(k));o.each(function(q,r){if(!n||q.event==n){e.apply(this,[h,q.monitor].concat(k));
}delete o[r];},this);j.store(l,o);return this;}};};(function(){var b={once:{listener:function(e,f,d,c){f.apply(this,d);this.removeEvent(e.event,c).removeEvent(e.original,f);
}},throttle:{listener:function(d,e,c){if(!e._throttled){e.apply(this,c);e._throttled=setTimeout(function(){e._throttled=false;},d.value||250);}}},pause:{listener:function(d,e,c){clearTimeout(e._pause);
e._pause=e.delay(d.value||250,this,c);}}};Events.definePseudo=function(c,d){b[c]=Type.isFunction(d)?{listener:d}:d;return this;};Events.lookupPseudo=function(c){return b[c];
};var a=Events.prototype;Events.implement(Events.Pseudos(b,a.addEvent,a.removeEvent));["Request","Fx"].each(function(c){if(this[c]){this[c].implement(Events.prototype);
}});})();