webpackJsonp([1],{"+h1B":function(l,n,u){"use strict";var t=u("/oeL"),a=u("aR8+"),r=u("wQAS"),e=u("q4dy"),c=u("qbdv"),i=u("fc+i"),o=u("f9zQ"),d=u("fL27"),s=u("EyWH"),f=u("p4Sk"),_=u("Z04r"),p=u("CPp0"),h=u("WzaD");u.d(n,"a",function(){return m});var m=t.b(a.a,[r.a],function(l){return t.c([t.d(512,t.e,t.f,[[8,[e.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,c.a,c.b,[t.h]),t.d(4608,t.j,t.j,[]),t.d(5120,t.k,t.l,[]),t.d(5120,t.m,t.n,[]),t.d(5120,t.o,t.p,[]),t.d(4608,i.b,i.c,[c.c]),t.d(6144,t.q,null,[i.b]),t.d(4608,i.d,i.e,[]),t.d(5120,i.f,function(l,n,u,t){return[new i.g(l),new i.h(n),new i.i(u,t)]},[c.c,c.c,c.c,i.d]),t.d(4608,i.j,i.j,[i.f,t.r]),t.d(135680,i.k,i.k,[c.c]),t.d(4608,i.l,i.l,[i.j,i.k]),t.d(5120,o.a,d.a,[]),t.d(5120,o.b,d.b,[]),t.d(4608,o.c,d.c,[o.a,o.b]),t.d(5120,t.s,d.d,[i.l,o.c,t.r]),t.d(6144,i.m,null,[i.k]),t.d(4608,t.t,t.t,[t.r]),t.d(4608,i.n,i.n,[c.c]),t.d(4608,i.o,i.o,[c.c]),t.d(4608,s.a,d.e,[t.s]),t.d(6144,f.a,null,[i.p]),t.d(4608,f.b,f.b,[[2,f.a]]),t.d(4608,f.c,f.c,[]),t.d(5120,_.a,_.b,[[3,_.a],t.r,f.c]),t.d(5120,_.c,_.d,[[3,_.c],_.a]),t.d(4608,_.e,_.e,[_.a,_.c]),t.d(4608,_.f,_.f,[t.r,f.c]),t.d(4608,f.d,f.d,[]),t.d(4608,p.a,p.a,[]),t.d(4608,p.b,p.c,[]),t.d(5120,p.d,p.e,[]),t.d(4608,p.f,p.f,[p.a,p.b,p.d]),t.d(4608,p.g,p.h,[]),t.d(5120,p.i,p.j,[p.f,p.g]),t.d(4608,h.a,h.a,[p.i]),t.d(512,c.d,c.d,[]),t.d(1024,t.u,i.q,[]),t.d(1024,t.v,function(l,n){return[i.r(l,n)]},[[2,i.s],[2,t.w]]),t.d(512,t.x,t.x,[[2,t.v]]),t.d(131584,t.y,t.y,[t.r,t.z,t.A,t.u,t.e,t.x]),t.d(2048,t.B,null,[t.y]),t.d(512,t.C,t.C,[t.B]),t.d(512,i.t,i.t,[[3,i.t]]),t.d(512,d.f,d.f,[]),t.d(512,_.g,_.g,[]),t.d(512,f.e,f.e,[]),t.d(256,_.h,!0,[]),t.d(512,_.i,_.i,[[2,i.p],[2,_.h]]),t.d(512,f.f,f.f,[]),t.d(512,_.j,_.j,[]),t.d(512,_.k,_.k,[]),t.d(512,_.l,_.l,[]),t.d(512,_.m,_.m,[]),t.d(512,f.g,f.g,[]),t.d(512,_.n,_.n,[]),t.d(512,f.h,f.h,[]),t.d(512,_.o,_.o,[]),t.d(512,p.k,p.k,[]),t.d(512,a.a,a.a,[])])})},0:function(l,n,u){l.exports=u("cDNt")},"3YnW":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[".list-card[_ngcontent-%COMP%]{width:400px}.list-card-header-image[_ngcontent-%COMP%]{background-size:cover}"]},NhKt:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[""]},T683:function(l,n,u){"use strict";var t=u("WzaD");u.d(n,"a",function(){return a});var a=function(){function l(l){this.dataService=l,this.offset=0,this.limit=20}return l.prototype.getCharacters=function(l){var n=this;this.characters=[{name:"Loading..."}],this.dataService.getCharactersByOffset(l,this.limit).subscribe(function(l){n.tempCharacters=l.data.results,console.log(n.tempCharacters),n.characters=[];for(var u=0;u<n.tempCharacters.length;u++)n.characters.push({name:n.tempCharacters[u].name})})},l.prototype.ngOnInit=function(){this.getCharacters(this.offset)},l.prototype.getNextCharacters=function(){this.offset=this.offset+this.limit,this.getCharacters(this.offset)},l.prototype.getPrevCharacters=function(){this.offset=this.offset-this.limit,this.getCharacters(this.offset)},l.ctorParameters=function(){return[{type:t.a}]},l}()},WzaD:function(l,n,u){"use strict";var t=u("CPp0"),a=u("5v8a");u.n(a);u.d(n,"a",function(){return r});var r=function(){function l(l){this.http=l}return l.prototype.getCharacters=function(){return this.http.get("https://gateway.marvel.com:443/v1/public/characters?apikey=34f8c538accc8d5f931f49cad49a4d21").map(function(l){return l.json()})},l.prototype.getCharactersByOffset=function(l,n){return this.http.get("https://gateway.marvel.com:443/v1/public/characters?limit="+n+"&offset="+l+"&apikey=34f8c538accc8d5f931f49cad49a4d21").map(function(l){return l.json()})},l.ctorParameters=function(){return[{type:t.i}]},l}()},"aR8+":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},cDNt:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("/oeL"),a=u("p5Ee"),r=u("+h1B"),e=u("fc+i");a.a.production&&u.i(t.a)(),u.i(e.a)().bootstrapModuleFactory(r.a)},p5Ee:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t={production:!0}},q4dy:function(l,n,u){"use strict";function t(l){return e._23(0,[(l()(),e._24(null,["\n"])),(l()(),e._25(0,null,null,13,"div",[["class","main-body mat-typography"]],null,null,null,null,null)),(l()(),e._24(null,["\n  "])),(l()(),e._25(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e._24(null,["\n    ","\n  "])),(l()(),e._24(null,["\n  "])),(l()(),e._25(0,null,null,1,"app-characters",[],null,null,null,c.a,c.b)),e._26(114688,null,0,i.a,[o.a],null,null),(l()(),e._24(null,["\n  "])),(l()(),e._25(0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e._24(null,["Data provided by "])),(l()(),e._25(0,null,null,1,"a",[["href","http://marvel.com"]],null,null,null,null,null)),(l()(),e._24(null,["Marvel"])),(l()(),e._24(null,[". © 2017 Marvel"])),(l()(),e._24(null,["\n"])),(l()(),e._24(null,["\n\n\n"]))],function(l,n){l(n,7,0)},function(l,n){l(n,4,0,n.component.title)})}function a(l){return e._23(0,[(l()(),e._25(0,null,null,1,"app-root",[],null,null,null,t,f)),e._26(49152,null,0,d.a,[],null,null)],null,null)}var r=u("NhKt"),e=u("/oeL"),c=u("sC3u"),i=u("T683"),o=u("WzaD"),d=u("wQAS");u.d(n,"a",function(){return _});var s=[r.a],f=e._22({encapsulation:0,styles:s,data:{}}),_=e._27("app-root",d.a,a,{},{},[])},qtrl:function(l,n){function u(l){throw new Error("Cannot find module '"+l+"'.")}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="qtrl"},sC3u:function(l,n,u){"use strict";function t(l){return i._23(0,[(l()(),i._25(0,null,null,2,"md-card",[],null,null,null,null,null)),i._26(16384,null,0,o.p,[[2,o.q],i.Z],null,null),(l()(),i._24(null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.name)})}function a(l){return i._23(0,[(l()(),i._25(0,null,null,39,"md-card",[["class","list-card"]],null,null,null,null,null)),i._26(16384,null,0,o.p,[[2,o.q],i.Z],null,null),(l()(),i._24(null,["\n    "])),(l()(),i._25(0,null,null,12,"md-card-header",[],null,null,null,null,null)),i._26(16384,null,0,o.p,[[2,o.q],i.Z],null,null),(l()(),i._24(null,["\n        "])),(l()(),i._25(0,null,null,0,"div",[["class","list-card-header-image"],["md-card-avatar",""]],null,null,null,null,null)),(l()(),i._24(null,["\n        "])),(l()(),i._25(0,null,null,2,"md-card-title",[],null,null,null,null,null)),i._26(16384,null,0,o.p,[[2,o.q],i.Z],null,null),(l()(),i._24(null,["",""])),(l()(),i._24(null,["\n        "])),(l()(),i._25(0,null,null,2,"md-card-subtitle",[],null,null,null,null,null)),i._26(16384,null,0,o.p,[[2,o.q],i.Z],null,null),(l()(),i._24(null,["",""])),(l()(),i._24(null,["\n    "])),(l()(),i._24(null,["\n    "])),(l()(),i._25(0,null,null,5,"md-card-content",[],null,null,null,null,null)),i._26(16384,null,0,o.p,[[2,o.q],i.Z],null,null),(l()(),i._24(null,["\n        "])),(l()(),i._25(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._24(null,["\n            ","\n        "])),(l()(),i._24(null,["\n    "])),(l()(),i._24(null,["\n    "])),(l()(),i._25(0,null,null,14,"md-card-actions",[],null,null,null,null,null)),i._26(16384,null,0,o.p,[[2,o.q],i.Z],null,null),(l()(),i._24(null,["\n        "])),(l()(),i._25(0,null,null,4,"button",[["class","mat-button"],["md-button",""]],[[8,"disabled",0]],null,null,d.a,d.b)),i._26(16384,null,0,o.p,[[2,o.q],i.Z],null,null),i._26(180224,null,0,o.r,[i._11,i.Z,s.c,o.f],null,null),i._26(16384,null,0,o.s,[],null,null),(l()(),i._24(0,["LIKE"])),(l()(),i._24(null,["\n        "])),(l()(),i._25(0,null,null,4,"button",[["class","mat-button"],["md-button",""]],[[8,"disabled",0]],null,null,d.a,d.b)),i._26(16384,null,0,o.p,[[2,o.q],i.Z],null,null),i._26(180224,null,0,o.r,[i._11,i.Z,s.c,o.f],null,null),i._26(16384,null,0,o.s,[],null,null),(l()(),i._24(0,["SHARE"])),(l()(),i._24(null,["\n    "])),(l()(),i._24(null,["\n"]))],null,function(l,n){l(n,10,0,n.context.$implicit.name),l(n,14,0,n.context.$implicit.name),l(n,21,0,n.context.$implicit.name),l(n,27,0,i._28(n,29).disabled||null),l(n,33,0,i._28(n,35).disabled||null)})}function r(l){return i._23(0,[(l()(),i._25(0,null,null,4,"button",[["class","mat-button"],["md-button",""]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0,a=l.component;if("click"===n){t=!1!==a.getPrevCharacters()&&t}return t},d.a,d.b)),i._26(16384,null,0,o.p,[[2,o.q],i.Z],null,null),i._26(180224,null,0,o.r,[i._11,i.Z,s.c,o.f],null,null),i._26(16384,null,0,o.s,[],null,null),(l()(),i._24(0,["Previous 20"])),(l()(),i._24(null,["\n"])),(l()(),i._25(0,null,null,4,"button",[["class","mat-button"],["md-button",""]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0,a=l.component;if("click"===n){t=!1!==a.getNextCharacters()&&t}return t},d.a,d.b)),i._26(16384,null,0,o.p,[[2,o.q],i.Z],null,null),i._26(180224,null,0,o.r,[i._11,i.Z,s.c,o.f],null,null),i._26(16384,null,0,o.s,[],null,null),(l()(),i._24(0,["Next 20"])),(l()(),i._24(null,["\n"])),(l()(),i._25(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),i._24(null,["Characters"])),(l()(),i._24(null,["\n"])),(l()(),i._29(16777216,null,null,1,null,t)),i._26(802816,null,0,_.i,[i._2,i._3,i.m],{ngForOf:[0,"ngForOf"]},null),(l()(),i._24(null,["\n\n"])),(l()(),i._29(16777216,null,null,1,null,a)),i._26(802816,null,0,_.i,[i._2,i._3,i.m],{ngForOf:[0,"ngForOf"]},null),(l()(),i._24(null,["\n"]))],function(l,n){var u=n.component;l(n,16,0,u.characters),l(n,19,0,u.characters)},function(l,n){l(n,0,0,i._28(n,2).disabled||null),l(n,6,0,i._28(n,8).disabled||null)})}function e(l){return i._23(0,[(l()(),i._25(0,null,null,1,"app-characters",[],null,null,null,r,m)),i._26(114688,null,0,f.a,[p.a],null,null)],function(l,n){l(n,1,0)},null)}var c=u("3YnW"),i=u("/oeL"),o=u("Z04r"),d=u("v6Q/"),s=u("p4Sk"),f=u("T683"),_=u("qbdv"),p=u("WzaD");u.d(n,"b",function(){return m}),n.a=r;var h=[c.a],m=i._22({encapsulation:0,styles:h,data:{}});i._27("app-characters",f.a,e,{},{},[])},wQAS:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.title="MACVA - Marvel API Character Viewer Application"}return l}()}},[0]);