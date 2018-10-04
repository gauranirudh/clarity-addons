(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{gFsD:function(l,n,a){"use strict";a.r(n);var u=a("CcnG"),c=function(){},e=a("zl1X"),t=a("8KBR"),i=a("Ip0R"),d=a("+Xo0"),r=a("0G9f"),s=a("QkwE"),o=a("vAyd"),b=a("mrSG"),v='\n<div class="clr-row">\n    <div class="clr-col-4">\n        <div class="card card-active clickable">\n            <div class="card-header">\n                I am an active card\n            </div>\n            <div class="card-block">\n                I am also clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card clickable">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                But I am clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                And I am also not clickable\n            </div>\n        </div>\n    </div>\n</div>\n            \n',V=function(l){function n(){var n=l.call(this,"cards")||this;return n.htmlExample=v,n.cards=[{title:"Selectable card",active:!0},{title:"Selectable card",active:!1},{title:"Selectable card",active:!1}],n}return Object(b.b)(n,l),n.prototype.activateCard=function(l){for(var n=0,a=this.cards;n<a.length;n++)a[n].active=!1;this.cards[l].active=!0},n}(a("N+3j").a),f=u.La({encapsulation:2,styles:[],data:{}});function h(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,1,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),u.fb(-1,null,[" Click to select me "]))],null,null)}function m(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,1,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),u.fb(-1,null,[" I am the selected card "]))],null,null)}function p(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,7,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),u.Na(1,0,null,null,6,"div",[["class","card selectable"]],[[2,"card-active",null]],[[null,"click"]],function(l,n,a){var u=!0;return"click"===n&&(u=!1!==l.component.activateCard(l.context.index)&&u),u},null,null)),(l()(),u.Na(2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),u.fb(3,null,[" "," "])),(l()(),u.Fa(16777216,null,null,1,null,h)),u.Ma(5,16384,null,0,i.o,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.Fa(16777216,null,null,1,null,m)),u.Ma(7,16384,null,0,i.o,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,5,0,!n.context.$implicit.active),l(n,7,0,n.context.$implicit.active)},function(l,n){l(n,1,0,n.context.$implicit.active),l(n,3,0,n.context.$implicit.title)})}function N(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,42,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,d.b,d.a)),u.Ma(1,49152,null,0,r.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),u.Na(2,0,null,0,40,"article",[],null,null,null,null,null)),(l()(),u.Na(3,0,null,null,1,"h5",[["class","component-summary"],["id","cards-header"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["The Addons extend the default Clarity cards by providing a selectable card. The selected stays visually highlighted."])),(l()(),u.Na(5,0,null,null,34,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),u.Na(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["Behavior"])),(l()(),u.Na(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["Only one card at the time can have the selection indicator. Compare this behavior to a radio button. Note the different hover style in the example below."])),(l()(),u.Na(10,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["Default clickable card (Standard Clarity)"])),(l()(),u.Na(12,0,null,null,9,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),u.Na(13,0,null,null,8,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),u.Na(14,0,null,null,7,"div",[["class","card clickable"]],null,null,null,null,null)),(l()(),u.Na(15,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),u.fb(-1,null,[" Default card "])),(l()(),u.Na(17,0,null,null,4,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),u.fb(-1,null,[" See the official "])),(l()(),u.Na(19,0,null,null,1,"a",[["href","https://vmware.github.io/clarity/documentation"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["Clarity documentation"])),(l()(),u.fb(-1,null,[" for details. "])),(l()(),u.Na(22,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["Selectable card (Clarity Addons)"])),(l()(),u.Na(24,0,null,null,2,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),u.Fa(16777216,null,null,1,null,p)),u.Ma(26,802816,null,0,i.n,[u.O,u.L,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.Na(27,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["Usage"])),(l()(),u.Na(29,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),u.fb(-1,null,[" On contrast to the default clickable-cards, the selectable card does not start an action, it is only marked as selected. Note that multiple selection is not supported. If you depend on multi-selection, use a different element such as a checkbox. A selectable card should have the class "])),(l()(),u.Na(31,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["selectable"])),(l()(),u.fb(-1,null,[" instead of the clarity-default "])),(l()(),u.Na(34,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["clickable"])),(l()(),u.fb(-1,null,[" class. Use the "])),(l()(),u.Na(37,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["card-active"])),(l()(),u.fb(-1,null,[" class to mark the currently selected one. "])),(l()(),u.Na(40,0,null,null,2,"div",[["id","examples"]],null,null,null,null,null)),(l()(),u.Na(41,0,null,null,1,"clr-code-snippet",[],null,null,null,s.b,s.a)),u.Ma(42,4243456,null,0,o.a,[],{code:[0,"code"]},null)],function(l,n){var a=n.component;l(n,1,0,a.title,a.newLayout,a.ui,a.ng),l(n,26,0,a.cards),l(n,42,0,a.htmlExample)},function(l,n){l(n,0,0,!0)})}var k=u.Ja("clr-cards-demo",V,function(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,1,"clr-cards-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,N,f)),u.Ma(1,49152,null,0,V,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),y=a("gIcY"),g=a("KZfJ"),x=a("5lT0"),w=a("XPsC"),I=a("ZYCi"),C=a("JsA7");a.d(n,"CardsDemoModuleNgFactory",function(){return A});var A=u.Ka(c,[],function(l){return u.Ua([u.Va(512,u.j,u.Aa,[[8,[e.Aa,e.a,e.b,e.c,e.d,e.e,e.f,e.g,e.Z,t.a,k]],[3,u.j],u.v]),u.Va(4608,i.q,i.p,[u.s,[2,i.F]]),u.Va(4608,y.v,y.v,[]),u.Va(4608,g.Tb,g.Tb,[]),u.Va(5120,g.Vc,g.Wc,[[3,g.Vc]]),u.Va(4608,x.f,x.f,[]),u.Va(1073742336,i.b,i.b,[]),u.Va(1073742336,y.s,y.s,[]),u.Va(1073742336,y.e,y.e,[]),u.Va(1073742336,g.Z,g.Z,[]),u.Va(1073742336,g.Ub,g.Ub,[]),u.Va(1073742336,g.od,g.od,[]),u.Va(1073742336,g.R,g.R,[]),u.Va(1073742336,g.d,g.d,[]),u.Va(1073742336,g.T,g.T,[]),u.Va(1073742336,g.q,g.q,[]),u.Va(1073742336,g.yd,g.yd,[]),u.Va(1073742336,g.p,g.p,[]),u.Va(1073742336,g.Ad,g.Ad,[]),u.Va(1073742336,g.K,g.K,[]),u.Va(1073742336,g.Ea,g.Ea,[]),u.Va(1073742336,g.Ua,g.Ua,[]),u.Va(1073742336,g.Ya,g.Ya,[]),u.Va(1073742336,g.cb,g.cb,[]),u.Va(1073742336,g.ub,g.ub,[]),u.Va(1073742336,g.W,g.W,[]),u.Va(1073742336,g.Ka,g.Ka,[]),u.Va(1073742336,g.ec,g.ec,[]),u.Va(1073742336,g.Nc,g.Nc,[]),u.Va(1073742336,g.D,g.D,[]),u.Va(1073742336,g.mb,g.mb,[]),u.Va(1073742336,g.n,g.n,[]),u.Va(1073742336,g.V,g.V,[]),u.Va(1073742336,g.zb,g.zb,[]),u.Va(1073742336,g.u,g.u,[]),u.Va(1073742336,g.Oa,g.Oa,[]),u.Va(1073742336,g.Ja,g.Ja,[]),u.Va(1073742336,g.i,g.i,[]),u.Va(1073742336,g.j,g.j,[]),u.Va(1073742336,g.Ma,g.Ma,[]),u.Va(1073742336,g.Ra,g.Ra,[]),u.Va(1073742336,g.Xc,g.Xc,[]),u.Va(1073742336,g.rb,g.rb,[]),u.Va(1073742336,g.Eb,g.Eb,[]),u.Va(1073742336,g.Ha,g.Ha,[]),u.Va(1073742336,g.fb,g.fb,[]),u.Va(1073742336,g.xb,g.xb,[]),u.Va(1073742336,g.Va,g.Va,[]),u.Va(1073742336,g.Ib,g.Ib,[]),u.Va(1073742336,g.a,g.a,[]),u.Va(1073742336,w.a,w.a,[]),u.Va(1073742336,I.o,I.o,[[2,I.t],[2,I.l]]),u.Va(1073742336,C.a,C.a,[]),u.Va(1073742336,x.G,x.G,[]),u.Va(1073742336,x.z,x.z,[]),u.Va(1073742336,x.x,x.x,[]),u.Va(1073742336,x.h,x.h,[]),u.Va(1073742336,x.e,x.e,[]),u.Va(1073742336,x.q,x.q,[]),u.Va(1073742336,x.m,x.m,[]),u.Va(1073742336,x.s,x.s,[]),u.Va(1073742336,x.o,x.o,[]),u.Va(1073742336,x.c,x.c,[]),u.Va(1073742336,x.v,x.v,[]),u.Va(1073742336,x.D,x.D,[]),u.Va(1073742336,x.B,x.B,[]),u.Va(1073742336,x.a,x.a,[]),u.Va(1073742336,c,c,[]),u.Va(1024,I.j,function(){return[[{path:"",component:V}]]},[])])})}}]);