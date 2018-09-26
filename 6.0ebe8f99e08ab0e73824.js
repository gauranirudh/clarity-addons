(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{XIy8:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),e=function(){},r=u("zl1X"),o=u("KZfJ"),t=u("+Xo0"),c=u("0G9f"),i=u("gIcY"),d=u("Ip0R"),s=u("QkwE"),g=u("vAyd"),b=u("mrSG"),p='\n<form clrForm clrLayout="horizontal">\n    <clr-input-container>\n        <label class="required">Input label</label>\n        <input clrInput type="text" [(ngModel)]="inputText" name="inputName" required minlength="5"/>\n        <clr-control-helper>Helper text that shows while it is pristine and valid</clr-control-helper>\n        <clr-control-error *clrIfError="\'required\'">Error message about being required</clr-control-error>\n        <clr-control-error *clrIfError="\'minlength\'">Error message about requiring 5 characters</clr-control-error>\n    </clr-input-container>\n    <clr-textarea-container>\n        <label class="required">Textarea label</label>\n        <textarea clrTextarea [(ngModel)]="textareaText" name="description" required></textarea>\n    </clr-textarea-container>\n    <clr-password-container>\n        <label>Password label</label>\n        <input clrPassword placeholder="Password please!" type="text" [(ngModel)]="passwordText" name="passwordName" />\n    </clr-password-container>\n    <clr-select-container>\n        <label class="required">Select label</label>\n        <select clrSelect name="options" [(ngModel)]="selectOption">\n            <option value="one">One</option>\n            <option value="two">Two</option>\n            <option value="three">Three</option>\n        </select>\n    </clr-select-container>\n    <clr-radio-container>\n        <label class="required">Radio label</label>\n        <clr-radio-wrapper>\n            <input type="radio" clrRadio name="options" value="1" required [(ngModel)]="radioOption" />\n            <label>Option 1</label>\n        </clr-radio-wrapper>\n        <clr-radio-wrapper>\n            <input type="radio" clrRadio name="options" value="2" required [(ngModel)]="radioOption" />\n            <label>Option 2</label>\n        </clr-radio-wrapper>\n        <clr-control-helper>Helper text</clr-control-helper>\n        <clr-control-error>This field is required!</clr-control-error>\n    </clr-radio-container> \n    <clr-date-container>\n        <label>Date2 label</label>\n        <input type="date" [clrDate]="date">\n    </clr-date-container>\n    <div class="clr-form-control clr-row">\n        <label class="clr-control-label">Checkbox label</label>\n        <clr-checkbox-container class="clr-control-container clr-col-md-10">\n            <label>Option</label>\n            <input clrCheckbox type="checkbox" [(ngModel)]="checkboxValue" name="checkboxName" />\n        </clr-checkbox-container>\n    </div>\n    <div class="clr-form-control clr-row">\n        <label class="clr-control-label">Toggle label</label>\n        <div class="clr-control-container clr-col-md-10">\n            <div class="toggle-switch">\n                <input type="checkbox" id="toggle" name="toggle" [(ngModel)]="toggleValue">\n                <label for="toggle" class="clr-col-none"></label>\n            </div>\n        </div>\n    </div>\n</form>\n',m=function(l){function n(){var n=l.call(this,"forms")||this;return n.codeExampleFullForm=p,n}return Object(b.b)(n,l),n}(u("N+3j").a),h=a.La({encapsulation:2,styles:[],data:{}});function X(l){return a.hb(0,[(l()(),a.Na(0,0,null,null,2,"clr-control-error",[],[[2,"clr-subtext",null]],null,null,r.I,r.m)),a.Ma(1,49152,null,0,o.s,[],null,null),(l()(),a.fb(-1,0,["Error message about being required"]))],null,function(l,n){l(n,0,0,!0)})}function f(l){return a.hb(0,[(l()(),a.Na(0,0,null,null,2,"clr-control-error",[],[[2,"clr-subtext",null]],null,null,r.I,r.m)),a.Ma(1,49152,null,0,o.s,[],null,null),(l()(),a.fb(-1,0,["Error message about requiring 5 characters"]))],null,function(l,n){l(n,0,0,!0)})}function v(l){return a.hb(0,[(l()(),a.Na(0,0,null,null,2,"clr-control-error",[],[[2,"clr-subtext",null]],null,null,r.I,r.m)),a.Ma(1,49152,null,0,o.s,[],null,null),(l()(),a.fb(-1,0,["Error message about being required"]))],null,function(l,n){l(n,0,0,!0)})}function M(l){return a.hb(0,[(l()(),a.Na(0,0,null,null,222,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,t.b,t.a)),a.Ma(1,49152,null,0,c.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),a.Na(2,0,null,0,220,"article",[],null,null,null,null,null)),(l()(),a.Na(3,0,null,null,3,"h5",[["class","component-summary"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["This describes clarity forms in more detail, as the official documentation is still in progress. "])),(l()(),a.Na(5,0,null,null,1,"a",[["href","https://vmware.github.io/clarity/documentation/forms"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Clarity Forms documentation"])),(l()(),a.Na(7,0,null,null,8,"p",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Recommendation of clarity team is to use the new forms, although they aren't completely implemented."])),(l()(),a.Na(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.fb(-1,null,[" So find below our recommendation how to use every input component and a general overview of open issues here: "])),(l()(),a.Na(11,0,null,null,1,"a",[["href","https://github.com/vmware/clarity/issues/2681"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Issue 2681"])),(l()(),a.fb(-1,null,["."])),(l()(),a.Na(14,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.fb(-1,null,[" Please also check back frequently to get updates of the recommended way."])),(l()(),a.Na(16,0,null,null,2,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),a.Na(17,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Usage"])),(l()(),a.Na(19,0,null,null,203,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),a.Na(20,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Code & Examples"])),(l()(),a.Na(22,0,null,null,198,"form",[["clrForm",""],["clrLayout","horizontal"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"clr-form",null],[8,"className",0]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==a.Xa(l,24).onSubmit(u)&&e),"reset"===n&&(e=!1!==a.Xa(l,24).onReset()&&e),e},null,null)),a.Ma(23,16384,null,0,i.u,[],null,null),a.Ma(24,4210688,null,0,i.l,[[8,null],[8,null]],null,null),a.cb(2048,null,i.c,null,[i.l]),a.Ma(26,16384,null,0,i.k,[[4,i.c]],null,null),a.Ma(27,16384,null,0,o.U,[],null,null),a.cb(512,null,o.vd,o.vd,[]),a.Ma(29,81920,null,0,o.Ga,[o.vd],{layout:[0,"layout"]},null),(l()(),a.Na(30,0,null,null,26,"clr-input-container",[],[[2,"clr-form-control",null],[2,"clr-row",null]],null,null,r.S,r.w)),a.cb(512,null,o.xd,o.xd,[]),a.cb(131584,null,o.wd,o.wd,[o.xd]),a.cb(512,null,o.cc,o.cc,[]),a.Ma(34,180224,null,1,o.Da,[o.wd,[2,o.vd],o.cc],null,null),a.db(335544320,1,{label:0}),a.cb(512,null,o.ud,o.ud,[]),(l()(),a.Na(37,0,null,0,2,"label",[["class","required"]],[[1,"for",0]],null,null,null,null)),a.Ma(38,212992,[[1,4]],0,o.Fa,[[2,o.ud],[2,o.vd],a.D,a.k],null,null),(l()(),a.fb(-1,null,["Input label"])),(l()(),a.Na(40,16777216,null,1,9,"input",[["clrInput",""],["minlength","5"],["name","inputName"],["required",""],["type","text"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"clr-input",null],[8,"id",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,r=l.component;return"input"===n&&(e=!1!==a.Xa(l,41)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,41).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Xa(l,41)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Xa(l,41)._compositionEnd(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,49).onBlur()&&e),"ngModelChange"===n&&(e=!1!==(r.inputText=u)&&e),e},null,null)),a.Ma(41,16384,null,0,i.d,[a.D,a.k,[2,i.a]],null,null),a.Ma(42,16384,null,0,i.p,[],{required:[0,"required"]},null),a.Ma(43,540672,null,0,i.f,[],{minlength:[0,"minlength"]},null),a.cb(1024,null,i.g,function(l,n){return[l,n]},[i.p,i.f]),a.cb(1024,null,i.h,function(l){return[l]},[i.d]),a.Ma(46,671744,null,0,i.m,[[2,i.c],[6,i.g],[8,null],[6,i.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,i.i,null,[i.m]),a.Ma(48,16384,null,0,i.j,[[4,i.i]],null,null),a.Ma(49,81920,null,0,o.Ca,[a.O,[2,o.xd],[2,o.wd],[2,i.i],[2,o.cc],[8,"text"],a.D,a.k],null,null),(l()(),a.Na(50,0,null,2,2,"clr-control-helper",[],[[2,"clr-subtext",null]],null,null,r.J,r.n)),a.Ma(51,49152,null,0,o.t,[],null,null),(l()(),a.fb(-1,0,["Helper text that shows while it is pristine and valid"])),(l()(),a.Fa(16777216,null,3,1,null,X)),a.Ma(54,212992,null,0,o.Aa,[[2,o.wd],a.L,a.O],{error:[0,"error"]},null),(l()(),a.Fa(16777216,null,3,1,null,f)),a.Ma(56,212992,null,0,o.Aa,[[2,o.wd],a.L,a.O],{error:[0,"error"]},null),(l()(),a.Na(57,0,null,null,20,"clr-textarea-container",[],[[2,"clr-form-control",null],[2,"clr-row",null]],null,null,r.X,r.B)),a.cb(512,null,o.xd,o.xd,[]),a.cb(131584,null,o.wd,o.wd,[o.xd]),a.cb(512,null,o.cc,o.cc,[]),a.Ma(61,180224,null,1,o.tb,[o.wd,[2,o.vd],o.cc],null,null),a.db(335544320,2,{label:0}),a.cb(512,null,o.ud,o.ud,[]),(l()(),a.Na(64,0,null,0,2,"label",[["class","required"]],[[1,"for",0]],null,null,null,null)),a.Ma(65,212992,[[2,4]],0,o.Fa,[[2,o.ud],[2,o.vd],a.D,a.k],null,null),(l()(),a.fb(-1,null,["Textarea label"])),(l()(),a.Na(67,16777216,null,1,8,"textarea",[["clrTextarea",""],["name","description"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"clr-textarea",null],[8,"id",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,r=l.component;return"input"===n&&(e=!1!==a.Xa(l,68)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,68).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Xa(l,68)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Xa(l,68)._compositionEnd(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,75).onBlur()&&e),"ngModelChange"===n&&(e=!1!==(r.textareaText=u)&&e),e},null,null)),a.Ma(68,16384,null,0,i.d,[a.D,a.k,[2,i.a]],null,null),a.Ma(69,16384,null,0,i.p,[],{required:[0,"required"]},null),a.cb(1024,null,i.g,function(l){return[l]},[i.p]),a.cb(1024,null,i.h,function(l){return[l]},[i.d]),a.Ma(72,671744,null,0,i.m,[[2,i.c],[6,i.g],[8,null],[6,i.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,i.i,null,[i.m]),a.Ma(74,16384,null,0,i.j,[[4,i.i]],null,null),a.Ma(75,81920,null,0,o.sb,[a.O,[2,o.xd],[2,o.wd],[2,i.i],[2,o.cc],a.D,a.k],null,null),(l()(),a.Fa(16777216,null,3,1,null,v)),a.Ma(77,212992,null,0,o.Aa,[[2,o.wd],a.L,a.O],{error:[0,"error"]},null),(l()(),a.Na(78,0,null,null,18,"clr-password-container",[],[[2,"clr-form-control",null],[2,"clr-row",null]],null,null,r.T,r.x)),a.cb(512,null,o.xd,o.xd,[]),a.cb(131584,null,o.wd,o.wd,[o.xd]),a.cb(512,null,o.cc,o.cc,[]),a.cb(512,null,o.dc,o.dc,[]),a.cb(1024,null,o.Rb,o.Sb,[]),a.Ma(84,180224,null,1,o.Ta,[o.wd,[2,o.vd],o.cc,o.dc,o.Rb,o.r],null,null),a.db(335544320,3,{label:0}),a.cb(512,null,o.ud,o.ud,[]),(l()(),a.Na(87,0,null,0,2,"label",[],[[1,"for",0]],null,null,null,null)),a.Ma(88,212992,[[3,4]],0,o.Fa,[[2,o.ud],[2,o.vd],a.D,a.k],null,null),(l()(),a.fb(-1,null,["Password label"])),(l()(),a.Na(90,16777216,null,1,6,"input",[["clrPassword",""],["name","passwordName"],["placeholder","Password please!"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"clr-input",null],[8,"id",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,u){var e=!0,r=l.component;return"input"===n&&(e=!1!==a.Xa(l,91)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,91).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Xa(l,91)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Xa(l,91)._compositionEnd(u.target.value)&&e),"focus"===n&&(e=!1!==a.Xa(l,96).onFocus()&&e),"blur"===n&&(e=!1!==a.Xa(l,96).onBlur()&&e),"ngModelChange"===n&&(e=!1!==(r.passwordText=u)&&e),e},null,null)),a.Ma(91,16384,null,0,i.d,[a.D,a.k,[2,i.a]],null,null),a.cb(1024,null,i.h,function(l){return[l]},[i.d]),a.Ma(93,671744,null,0,i.m,[[2,i.c],[8,null],[8,null],[6,i.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,i.i,null,[i.m]),a.Ma(95,16384,null,0,i.j,[[4,i.i]],null,null),a.Ma(96,212992,null,0,o.Sa,[a.O,[2,o.xd],[2,o.wd],[2,i.i],[2,o.dc],o.cc,[8,"text"],a.D,a.k,o.Rb],null,null),(l()(),a.Na(97,0,null,null,29,"clr-select-container",[],[[2,"clr-form-control",null],[2,"clr-row",null]],null,null,r.W,r.A)),a.cb(512,null,o.xd,o.xd,[]),a.cb(131584,null,o.wd,o.wd,[o.xd]),a.cb(512,null,o.cc,o.cc,[]),a.Ma(101,180224,null,2,o.bb,[o.wd,[2,o.vd],o.cc,o.xd],null,null),a.db(335544320,4,{label:0}),a.db(335544320,5,{multiple:0}),a.cb(512,null,o.ud,o.ud,[]),(l()(),a.Na(105,0,null,0,2,"label",[["class","required"]],[[1,"for",0]],null,null,null,null)),a.Ma(106,212992,[[4,4]],0,o.Fa,[[2,o.ud],[2,o.vd],a.D,a.k],null,null),(l()(),a.fb(-1,null,["Select label"])),(l()(),a.Na(108,16777216,null,1,18,"select",[["clrSelect",""],["name","options"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"clr-select",null],[8,"id",0]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var e=!0,r=l.component;return"change"===n&&(e=!1!==a.Xa(l,109).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,109).onTouched()&&e),"blur"===n&&(e=!1!==a.Xa(l,114).onBlur()&&e),"ngModelChange"===n&&(e=!1!==(r.selectOption=u)&&e),e},null,null)),a.Ma(109,16384,null,0,i.q,[a.D,a.k],null,null),a.cb(1024,null,i.h,function(l){return[l]},[i.q]),a.Ma(111,671744,null,0,i.m,[[2,i.c],[8,null],[8,null],[6,i.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,i.i,null,[i.m]),a.Ma(113,16384,null,0,i.j,[[4,i.i]],null,null),a.Ma(114,81920,null,0,o.ab,[a.O,[2,o.xd],[2,o.wd],[2,i.i],[2,o.cc],a.k],null,null),(l()(),a.Na(115,0,null,null,3,"option",[["value","one"]],null,null,null,null,null)),a.Ma(116,147456,null,0,i.n,[a.k,a.D,[2,i.q]],{value:[0,"value"]},null),a.Ma(117,147456,null,0,i.w,[a.k,a.D,[8,null]],{value:[0,"value"]},null),(l()(),a.fb(-1,null,["One"])),(l()(),a.Na(119,0,null,null,3,"option",[["value","two"]],null,null,null,null,null)),a.Ma(120,147456,null,0,i.n,[a.k,a.D,[2,i.q]],{value:[0,"value"]},null),a.Ma(121,147456,null,0,i.w,[a.k,a.D,[8,null]],{value:[0,"value"]},null),(l()(),a.fb(-1,null,["Two"])),(l()(),a.Na(123,0,null,null,3,"option",[["value","three"]],null,null,null,null,null)),a.Ma(124,147456,null,0,i.n,[a.k,a.D,[2,i.q]],{value:[0,"value"]},null),a.Ma(125,147456,null,0,i.w,[a.k,a.D,[8,null]],{value:[0,"value"]},null),(l()(),a.fb(-1,null,["Threeasdfa sdasd fasdfasdasdf"])),(l()(),a.Na(127,0,null,null,48,"clr-radio-container",[],[[2,"clr-form-control",null],[2,"clr-row",null]],null,null,r.U,r.y)),a.cb(512,null,o.xd,o.xd,[]),a.cb(131584,null,o.wd,o.wd,[o.xd]),a.cb(512,null,o.cc,o.cc,[]),a.Ma(131,180224,null,1,o.Xa,[o.wd,[2,o.vd],o.cc],null,null),a.db(335544320,6,{label:0}),(l()(),a.Na(133,0,null,0,2,"label",[["class","required"]],[[1,"for",0]],null,null,null,null)),a.Ma(134,212992,[[6,4]],0,o.Fa,[[2,o.ud],[2,o.vd],a.D,a.k],null,null),(l()(),a.fb(-1,null,["Radio label"])),(l()(),a.Na(136,0,null,1,16,"clr-radio-wrapper",[],[[2,"clr-radio-wrapper",null]],null,null,r.V,r.z)),a.Ma(137,49152,null,1,o.Za,[[2,o.cc]],null,null),a.db(335544320,7,{label:0}),a.cb(512,null,o.ud,o.ud,[]),(l()(),a.Na(140,16777216,null,0,9,"input",[["clrRadio",""],["name","options"],["required",""],["type","radio"],["value","1"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[8,"id",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0,r=l.component;return"input"===n&&(e=!1!==a.Xa(l,141)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,141).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Xa(l,141)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Xa(l,141)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==a.Xa(l,142).onChange()&&e),"blur"===n&&(e=!1!==a.Xa(l,142).onTouched()&&e),"blur"===n&&(e=!1!==a.Xa(l,149).onBlur()&&e),"ngModelChange"===n&&(e=!1!==(r.radioOption=u)&&e),e},null,null)),a.Ma(141,16384,null,0,i.d,[a.D,a.k,[2,i.a]],null,null),a.Ma(142,212992,null,0,i.o,[a.D,a.k,i.v,a.p],{name:[0,"name"],value:[1,"value"]},null),a.Ma(143,16384,null,0,i.p,[],{required:[0,"required"]},null),a.cb(1024,null,i.g,function(l){return[l]},[i.p]),a.cb(1024,null,i.h,function(l,n){return[l,n]},[i.d,i.o]),a.Ma(146,671744,null,0,i.m,[[2,i.c],[6,i.g],[8,null],[6,i.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,i.i,null,[i.m]),a.Ma(148,16384,null,0,i.j,[[4,i.i]],null,null),a.Ma(149,81920,null,0,o.Wa,[a.O,[2,o.xd],[2,o.wd],[2,i.i],[2,o.cc],a.k],null,null),(l()(),a.Na(150,0,null,1,2,"label",[],[[1,"for",0]],null,null,null,null)),a.Ma(151,212992,[[7,4],[6,4]],0,o.Fa,[[2,o.ud],[2,o.vd],a.D,a.k],null,null),(l()(),a.fb(-1,null,["Option 1"])),(l()(),a.Na(153,0,null,1,16,"clr-radio-wrapper",[],[[2,"clr-radio-wrapper",null]],null,null,r.V,r.z)),a.Ma(154,49152,null,1,o.Za,[[2,o.cc]],null,null),a.db(335544320,8,{label:0}),a.cb(512,null,o.ud,o.ud,[]),(l()(),a.Na(157,16777216,null,0,9,"input",[["clrRadio",""],["name","options"],["required",""],["type","radio"],["value","2"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[8,"id",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0,r=l.component;return"input"===n&&(e=!1!==a.Xa(l,158)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,158).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Xa(l,158)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Xa(l,158)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==a.Xa(l,159).onChange()&&e),"blur"===n&&(e=!1!==a.Xa(l,159).onTouched()&&e),"blur"===n&&(e=!1!==a.Xa(l,166).onBlur()&&e),"ngModelChange"===n&&(e=!1!==(r.radioOption=u)&&e),e},null,null)),a.Ma(158,16384,null,0,i.d,[a.D,a.k,[2,i.a]],null,null),a.Ma(159,212992,null,0,i.o,[a.D,a.k,i.v,a.p],{name:[0,"name"],value:[1,"value"]},null),a.Ma(160,16384,null,0,i.p,[],{required:[0,"required"]},null),a.cb(1024,null,i.g,function(l){return[l]},[i.p]),a.cb(1024,null,i.h,function(l,n){return[l,n]},[i.d,i.o]),a.Ma(163,671744,null,0,i.m,[[2,i.c],[6,i.g],[8,null],[6,i.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,i.i,null,[i.m]),a.Ma(165,16384,null,0,i.j,[[4,i.i]],null,null),a.Ma(166,81920,null,0,o.Wa,[a.O,[2,o.xd],[2,o.wd],[2,i.i],[2,o.cc],a.k],null,null),(l()(),a.Na(167,0,null,1,2,"label",[],[[1,"for",0]],null,null,null,null)),a.Ma(168,212992,[[8,4],[6,4]],0,o.Fa,[[2,o.ud],[2,o.vd],a.D,a.k],null,null),(l()(),a.fb(-1,null,["Option 2"])),(l()(),a.Na(170,0,null,2,2,"clr-control-helper",[],[[2,"clr-subtext",null]],null,null,r.J,r.n)),a.Ma(171,49152,null,0,o.t,[],null,null),(l()(),a.fb(-1,0,["Helper text"])),(l()(),a.Na(173,0,null,3,2,"clr-control-error",[],[[2,"clr-subtext",null]],null,null,r.I,r.m)),a.Ma(174,49152,null,0,o.s,[],null,null),(l()(),a.fb(-1,0,["This field is required!"])),(l()(),a.Na(176,0,null,null,13,"clr-date-container",[],[[2,"date-container",null]],null,null,r.O,r.s)),a.cb(512,null,o.Pc,o.Pc,[]),a.cb(512,null,o.Vb,o.Vb,[]),a.cb(512,null,o.Zb,o.Zb,[d.d]),a.cb(512,null,o.Wb,o.Wb,[]),a.Ma(181,180224,null,0,o.I,[o.Pc,o.Vb,o.Zb,o.Wb,o.r],null,null),a.cb(512,null,o.ud,o.ud,[]),a.cb(512,null,o.Xb,o.Xb,[a.s]),a.cb(512,null,o.Yb,o.Yb,[o.Xb]),(l()(),a.Na(185,0,null,0,2,"label",[],[[1,"for",0]],null,null,null,null)),a.Ma(186,212992,null,0,o.Fa,[[2,o.ud],[2,o.vd],a.D,a.k],null,null),(l()(),a.fb(-1,null,["Date2 label"])),(l()(),a.Na(188,16777216,null,0,1,"input",[["type","date"]],[[2,"date-input",null],[8,"id",0],[1,"placeholder",0],[1,"type",0]],[[null,"change"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==a.Xa(l,189).onValueChange(u.target)&&e),e},null,null)),a.Ma(189,4407296,null,0,o.J,[[2,o.I],a.O,a.k,a.D,[8,null],[2,o.Yb],[2,o.Vb],[2,o.Zb],[2,o.Wb],a.z],{date:[0,"date"]},null),(l()(),a.Na(190,0,null,null,16,"div",[["class","clr-form-control clr-row"]],null,null,null,null,null)),(l()(),a.Na(191,0,null,null,2,"label",[["class","clr-control-label"]],[[1,"for",0]],null,null,null,null)),a.Ma(192,212992,null,0,o.Fa,[[2,o.ud],[2,o.vd],a.D,a.k],null,null),(l()(),a.fb(-1,null,["Checkbox label"])),(l()(),a.Na(194,0,null,null,12,"clr-checkbox-container",[["class","clr-control-container clr-col-md-10"]],[[2,"checkbox",null]],null,null,r.H,r.l)),a.Ma(195,49152,null,0,o.l,[],null,null),a.cb(512,null,o.ud,o.ud,[]),(l()(),a.Na(197,0,null,1,2,"label",[],[[1,"for",0]],null,null,null,null)),a.Ma(198,212992,null,0,o.Fa,[[2,o.ud],[2,o.vd],a.D,a.k],null,null),(l()(),a.fb(-1,null,["Option"])),(l()(),a.Na(200,16777216,null,0,6,"input",[["clrCheckbox",""],["name","checkboxName"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[8,"id",0]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var e=!0,r=l.component;return"change"===n&&(e=!1!==a.Xa(l,201).onChange(u.target.checked)&&e),"blur"===n&&(e=!1!==a.Xa(l,201).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(r.checkboxValue=u)&&e),e},null,null)),a.Ma(201,16384,null,0,i.b,[a.D,a.k],null,null),a.cb(1024,null,i.h,function(l){return[l]},[i.b]),a.Ma(203,671744,null,0,i.m,[[2,i.c],[8,null],[8,null],[6,i.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,i.i,null,[i.m]),a.Ma(205,16384,null,0,i.j,[[4,i.i]],null,null),a.Ma(206,81920,null,0,o.o,[a.O],null,null),(l()(),a.Na(207,0,null,null,13,"div",[["class","clr-form-control clr-row"]],null,null,null,null,null)),(l()(),a.Na(208,0,null,null,2,"label",[["class","clr-control-label"]],[[1,"for",0]],null,null,null,null)),a.Ma(209,212992,null,0,o.Fa,[[2,o.ud],[2,o.vd],a.D,a.k],null,null),(l()(),a.fb(-1,null,["Toggle label"])),(l()(),a.Na(211,0,null,null,9,"div",[["class","clr-control-container clr-col-md-10"]],null,null,null,null,null)),(l()(),a.Na(212,0,null,null,8,"div",[["class","toggle-switch"]],null,null,null,null,null)),(l()(),a.Na(213,0,null,null,5,"input",[["id","toggle"],["name","toggle"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var e=!0,r=l.component;return"change"===n&&(e=!1!==a.Xa(l,214).onChange(u.target.checked)&&e),"blur"===n&&(e=!1!==a.Xa(l,214).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(r.toggleValue=u)&&e),e},null,null)),a.Ma(214,16384,null,0,i.b,[a.D,a.k],null,null),a.cb(1024,null,i.h,function(l){return[l]},[i.b]),a.Ma(216,671744,null,0,i.m,[[2,i.c],[8,null],[8,null],[6,i.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,i.i,null,[i.m]),a.Ma(218,16384,null,0,i.j,[[4,i.i]],null,null),(l()(),a.Na(219,0,null,null,1,"label",[["class","clr-col-none"],["for","toggle"]],[[1,"for",0]],null,null,null,null)),a.Ma(220,212992,null,0,o.Fa,[[2,o.ud],[2,o.vd],a.D,a.k],{forAttr:[0,"forAttr"]},null),(l()(),a.Na(221,0,null,null,1,"clr-code-snippet",[],null,null,null,s.b,s.a)),a.Ma(222,4243456,null,0,g.a,[],{code:[0,"code"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,29,0,"horizontal"),l(n,38,0),l(n,42,0,""),l(n,43,0,"5"),l(n,46,0,"inputName",u.inputText),l(n,49,0),l(n,54,0,"required"),l(n,56,0,"minlength"),l(n,65,0),l(n,69,0,""),l(n,72,0,"description",u.textareaText),l(n,75,0),l(n,77,0,"required"),l(n,88,0),l(n,93,0,"passwordName",u.passwordText),l(n,96,0),l(n,106,0),l(n,111,0,"options",u.selectOption),l(n,114,0),l(n,116,0,"one"),l(n,117,0,"one"),l(n,120,0,"two"),l(n,121,0,"two"),l(n,124,0,"three"),l(n,125,0,"three"),l(n,134,0),l(n,142,0,"options","1"),l(n,143,0,""),l(n,146,0,"options",u.radioOption),l(n,149,0),l(n,151,0),l(n,159,0,"options","2"),l(n,160,0,""),l(n,163,0,"options",u.radioOption),l(n,166,0),l(n,168,0),l(n,186,0),l(n,189,0,u.date),l(n,192,0),l(n,198,0),l(n,203,0,"checkboxName",u.checkboxValue),l(n,206,0),l(n,209,0),l(n,216,0,"toggle",u.toggleValue),l(n,220,0,"toggle"),l(n,222,0,u.codeExampleFullForm)},function(l,n){l(n,0,0,!0),l(n,22,0,a.Xa(n,26).ngClassUntouched,a.Xa(n,26).ngClassTouched,a.Xa(n,26).ngClassPristine,a.Xa(n,26).ngClassDirty,a.Xa(n,26).ngClassValid,a.Xa(n,26).ngClassInvalid,a.Xa(n,26).ngClassPending,!0,a.Xa(n,29).layoutService.layoutClass),l(n,30,0,!0,a.Xa(n,34).addGrid()),l(n,37,0,a.Xa(n,38).forAttr),l(n,40,1,[a.Xa(n,42).required?"":null,a.Xa(n,43).minlength?a.Xa(n,43).minlength:null,a.Xa(n,48).ngClassUntouched,a.Xa(n,48).ngClassTouched,a.Xa(n,48).ngClassPristine,a.Xa(n,48).ngClassDirty,a.Xa(n,48).ngClassValid,a.Xa(n,48).ngClassInvalid,a.Xa(n,48).ngClassPending,!0,a.Xa(n,49).id]),l(n,50,0,!0),l(n,57,0,!0,a.Xa(n,61).addGrid()),l(n,64,0,a.Xa(n,65).forAttr),l(n,67,0,a.Xa(n,69).required?"":null,a.Xa(n,74).ngClassUntouched,a.Xa(n,74).ngClassTouched,a.Xa(n,74).ngClassPristine,a.Xa(n,74).ngClassDirty,a.Xa(n,74).ngClassValid,a.Xa(n,74).ngClassInvalid,a.Xa(n,74).ngClassPending,!0,a.Xa(n,75).id),l(n,78,0,!0,a.Xa(n,84).addGrid()),l(n,87,0,a.Xa(n,88).forAttr),l(n,90,0,a.Xa(n,95).ngClassUntouched,a.Xa(n,95).ngClassTouched,a.Xa(n,95).ngClassPristine,a.Xa(n,95).ngClassDirty,a.Xa(n,95).ngClassValid,a.Xa(n,95).ngClassInvalid,a.Xa(n,95).ngClassPending,!0,a.Xa(n,96).id),l(n,97,0,!0,a.Xa(n,101).addGrid()),l(n,105,0,a.Xa(n,106).forAttr),l(n,108,0,a.Xa(n,113).ngClassUntouched,a.Xa(n,113).ngClassTouched,a.Xa(n,113).ngClassPristine,a.Xa(n,113).ngClassDirty,a.Xa(n,113).ngClassValid,a.Xa(n,113).ngClassInvalid,a.Xa(n,113).ngClassPending,!0,a.Xa(n,114).id),l(n,127,0,!0,a.Xa(n,131).addGrid()),l(n,133,0,a.Xa(n,134).forAttr),l(n,136,0,!0),l(n,140,0,a.Xa(n,143).required?"":null,a.Xa(n,148).ngClassUntouched,a.Xa(n,148).ngClassTouched,a.Xa(n,148).ngClassPristine,a.Xa(n,148).ngClassDirty,a.Xa(n,148).ngClassValid,a.Xa(n,148).ngClassInvalid,a.Xa(n,148).ngClassPending,a.Xa(n,149).id),l(n,150,0,a.Xa(n,151).forAttr),l(n,153,0,!0),l(n,157,0,a.Xa(n,160).required?"":null,a.Xa(n,165).ngClassUntouched,a.Xa(n,165).ngClassTouched,a.Xa(n,165).ngClassPristine,a.Xa(n,165).ngClassDirty,a.Xa(n,165).ngClassValid,a.Xa(n,165).ngClassInvalid,a.Xa(n,165).ngClassPending,a.Xa(n,166).id),l(n,167,0,a.Xa(n,168).forAttr),l(n,170,0,!0),l(n,173,0,!0),l(n,176,0,!0),l(n,185,0,a.Xa(n,186).forAttr),l(n,188,0,!0,a.Xa(n,189).id,a.Xa(n,189).placeholderText,a.Xa(n,189).inputType),l(n,191,0,a.Xa(n,192).forAttr),l(n,194,0,!0),l(n,197,0,a.Xa(n,198).forAttr),l(n,200,0,a.Xa(n,205).ngClassUntouched,a.Xa(n,205).ngClassTouched,a.Xa(n,205).ngClassPristine,a.Xa(n,205).ngClassDirty,a.Xa(n,205).ngClassValid,a.Xa(n,205).ngClassInvalid,a.Xa(n,205).ngClassPending,a.Xa(n,206).id),l(n,208,0,a.Xa(n,209).forAttr),l(n,213,0,a.Xa(n,218).ngClassUntouched,a.Xa(n,218).ngClassTouched,a.Xa(n,218).ngClassPristine,a.Xa(n,218).ngClassDirty,a.Xa(n,218).ngClassValid,a.Xa(n,218).ngClassInvalid,a.Xa(n,218).ngClassPending),l(n,219,0,a.Xa(n,220).forAttr)})}var C=a.Ja("clr-forms-demo",m,function(l){return a.hb(0,[(l()(),a.Na(0,0,null,null,1,"clr-forms-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,M,h)),a.Ma(1,49152,null,0,m,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),w=u("XPsC"),x=u("ZYCi"),V=u("JsA7");u.d(n,"FormsDemoModuleNgFactory",function(){return N});var N=a.Ka(e,[],function(l){return a.Ua([a.Va(512,a.j,a.Aa,[[8,[r.Aa,r.a,r.b,r.c,r.d,r.e,r.f,r.g,r.Z,C]],[3,a.j],a.v]),a.Va(4608,d.q,d.p,[a.s,[2,d.F]]),a.Va(4608,i.v,i.v,[]),a.Va(4608,o.Tb,o.Tb,[]),a.Va(5120,o.Vc,o.Wc,[[3,o.Vc]]),a.Va(1073742336,d.b,d.b,[]),a.Va(1073742336,i.s,i.s,[]),a.Va(1073742336,i.e,i.e,[]),a.Va(1073742336,o.Z,o.Z,[]),a.Va(1073742336,o.Ub,o.Ub,[]),a.Va(1073742336,o.od,o.od,[]),a.Va(1073742336,o.R,o.R,[]),a.Va(1073742336,o.d,o.d,[]),a.Va(1073742336,o.T,o.T,[]),a.Va(1073742336,o.q,o.q,[]),a.Va(1073742336,o.yd,o.yd,[]),a.Va(1073742336,o.p,o.p,[]),a.Va(1073742336,o.Ad,o.Ad,[]),a.Va(1073742336,o.K,o.K,[]),a.Va(1073742336,o.Ea,o.Ea,[]),a.Va(1073742336,o.Ua,o.Ua,[]),a.Va(1073742336,o.Ya,o.Ya,[]),a.Va(1073742336,o.cb,o.cb,[]),a.Va(1073742336,o.ub,o.ub,[]),a.Va(1073742336,o.W,o.W,[]),a.Va(1073742336,o.Ka,o.Ka,[]),a.Va(1073742336,o.ec,o.ec,[]),a.Va(1073742336,o.Nc,o.Nc,[]),a.Va(1073742336,o.D,o.D,[]),a.Va(1073742336,o.mb,o.mb,[]),a.Va(1073742336,o.n,o.n,[]),a.Va(1073742336,o.V,o.V,[]),a.Va(1073742336,o.zb,o.zb,[]),a.Va(1073742336,o.u,o.u,[]),a.Va(1073742336,o.Oa,o.Oa,[]),a.Va(1073742336,o.Ja,o.Ja,[]),a.Va(1073742336,o.i,o.i,[]),a.Va(1073742336,o.j,o.j,[]),a.Va(1073742336,o.Ma,o.Ma,[]),a.Va(1073742336,o.Ra,o.Ra,[]),a.Va(1073742336,o.Xc,o.Xc,[]),a.Va(1073742336,o.rb,o.rb,[]),a.Va(1073742336,o.Eb,o.Eb,[]),a.Va(1073742336,o.Ha,o.Ha,[]),a.Va(1073742336,o.fb,o.fb,[]),a.Va(1073742336,o.xb,o.xb,[]),a.Va(1073742336,o.Va,o.Va,[]),a.Va(1073742336,o.Ib,o.Ib,[]),a.Va(1073742336,o.a,o.a,[]),a.Va(1073742336,w.a,w.a,[]),a.Va(1073742336,x.o,x.o,[[2,x.t],[2,x.l]]),a.Va(1073742336,V.a,V.a,[]),a.Va(1073742336,e,e,[]),a.Va(1024,x.j,function(){return[[{path:"",component:m}]]},[])])})}}]);