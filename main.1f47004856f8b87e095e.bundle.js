webpackJsonp([1],{"+h1B":function(n,l,t){"use strict";var u=t("/oeL"),r=t("aR8+"),a=t("wQAS"),e=t("q4dy"),c=t("qbdv"),i=t("fc+i"),o=t("f9zQ"),d=t("fL27"),f=t("EyWH"),s=t("p4Sk"),p=t("Z04r"),h=t("CPp0"),_=t("WzaD");t.d(l,"a",function(){return v});var v=u.b(r.a,[a.a],function(n){return u.c([u.d(512,u.e,u.f,[[8,[e.a]],[3,u.e],u.g]),u.d(5120,u.h,u.i,[[3,u.h]]),u.d(4608,c.a,c.b,[u.h]),u.d(4608,u.j,u.j,[]),u.d(5120,u.k,u.l,[]),u.d(5120,u.m,u.n,[]),u.d(5120,u.o,u.p,[]),u.d(4608,i.b,i.c,[c.c]),u.d(6144,u.q,null,[i.b]),u.d(4608,i.d,i.e,[]),u.d(5120,i.f,function(n,l,t,u){return[new i.g(n),new i.h(l),new i.i(t,u)]},[c.c,c.c,c.c,i.d]),u.d(4608,i.j,i.j,[i.f,u.r]),u.d(135680,i.k,i.k,[c.c]),u.d(4608,i.l,i.l,[i.j,i.k]),u.d(5120,o.a,d.a,[]),u.d(5120,o.b,d.b,[]),u.d(4608,o.c,d.c,[o.a,o.b]),u.d(5120,u.s,d.d,[i.l,o.c,u.r]),u.d(6144,i.m,null,[i.k]),u.d(4608,u.t,u.t,[u.r]),u.d(4608,i.n,i.n,[c.c]),u.d(4608,i.o,i.o,[c.c]),u.d(4608,f.a,d.e,[u.s]),u.d(6144,s.a,null,[i.p]),u.d(4608,s.b,s.b,[[2,s.a]]),u.d(4608,s.c,s.c,[]),u.d(5120,p.a,p.b,[[3,p.a],u.r,s.c]),u.d(5120,p.c,p.d,[[3,p.c],p.a]),u.d(4608,p.e,p.e,[p.a,p.c]),u.d(4608,p.f,p.f,[u.r,s.c]),u.d(4608,s.d,s.d,[]),u.d(4608,h.a,h.a,[]),u.d(4608,h.b,h.c,[]),u.d(5120,h.d,h.e,[]),u.d(4608,h.f,h.f,[h.a,h.b,h.d]),u.d(4608,h.g,h.h,[]),u.d(5120,h.i,h.j,[h.f,h.g]),u.d(4608,_.a,_.a,[h.i]),u.d(512,c.d,c.d,[]),u.d(1024,u.u,i.q,[]),u.d(1024,u.v,function(n,l){return[i.r(n,l)]},[[2,i.s],[2,u.w]]),u.d(512,u.x,u.x,[[2,u.v]]),u.d(131584,u.y,u.y,[u.r,u.z,u.A,u.u,u.e,u.x]),u.d(2048,u.B,null,[u.y]),u.d(512,u.C,u.C,[u.B]),u.d(512,i.t,i.t,[[3,i.t]]),u.d(512,d.f,d.f,[]),u.d(512,p.g,p.g,[]),u.d(512,s.e,s.e,[]),u.d(256,p.h,!0,[]),u.d(512,p.i,p.i,[[2,i.p],[2,p.h]]),u.d(512,s.f,s.f,[]),u.d(512,p.j,p.j,[]),u.d(512,p.k,p.k,[]),u.d(512,p.l,p.l,[]),u.d(512,p.m,p.m,[]),u.d(512,s.g,s.g,[]),u.d(512,p.n,p.n,[]),u.d(512,s.h,s.h,[]),u.d(512,p.o,p.o,[]),u.d(512,h.k,h.k,[]),u.d(512,r.a,r.a,[])])})},0:function(n,l,t){n.exports=t("cDNt")},"3YnW":function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=[""]},NhKt:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=[""]},T683:function(n,l,t){"use strict";var u=t("WzaD");t.d(l,"a",function(){return r});var r=function(){function n(n){this.dataService=n,this.offset=0}return n.prototype.ngOnInit=function(){var n=this;this.characters=[],this.dataService.getCharactersByOffset(this.offset).subscribe(function(l){n.tempCharacters=l.data.results,console.log(n.tempCharacters);for(var t=0;t<n.tempCharacters.length;t++)n.characters.push({name:n.tempCharacters[t].name})})},n.ctorParameters=function(){return[{type:u.a}]},n}()},WzaD:function(n,l,t){"use strict";var u=t("CPp0"),r=t("5v8a");t.n(r);t.d(l,"a",function(){return a});var a=function(){function n(n){this.http=n,this.limit=20}return n.prototype.getCharacters=function(){return this.http.get("https://gateway.marvel.com:443/v1/public/characters?apikey=34f8c538accc8d5f931f49cad49a4d21").map(function(n){return n.json()})},n.prototype.getCharactersByOffset=function(n){return this.http.get("https://gateway.marvel.com:443/v1/public/characters?limit="+this.limit+"&offset="+n+"&apikey=34f8c538accc8d5f931f49cad49a4d21").map(function(n){return n.json()})},n.ctorParameters=function(){return[{type:u.i}]},n}()},"aR8+":function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function n(){}return n}()},cDNt:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var u=t("/oeL"),r=t("p5Ee"),a=t("+h1B"),e=t("fc+i");r.a.production&&t.i(u.a)(),t.i(e.a)().bootstrapModuleFactory(a.a)},p5Ee:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u={production:!0}},q4dy:function(n,l,t){"use strict";function u(n){return e._23(0,[(n()(),e._24(null,["\n"])),(n()(),e._25(0,null,null,13,"div",[["class","main-body mat-typography"]],null,null,null,null,null)),(n()(),e._24(null,["\n  "])),(n()(),e._25(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e._24(null,["\n    ","\n  "])),(n()(),e._24(null,["\n  "])),(n()(),e._25(0,null,null,1,"app-characters",[],null,null,null,c.a,c.b)),e._26(114688,null,0,i.a,[o.a],null,null),(n()(),e._24(null,["\n  "])),(n()(),e._25(0,null,null,4,"p",[],null,null,null,null,null)),(n()(),e._24(null,["Data provided by "])),(n()(),e._25(0,null,null,1,"a",[["href","http://marvel.com"]],null,null,null,null,null)),(n()(),e._24(null,["Marvel"])),(n()(),e._24(null,[". © 2014 Marvel"])),(n()(),e._24(null,["\n"])),(n()(),e._24(null,["\n\n\n"]))],function(n,l){n(l,7,0)},function(n,l){n(l,4,0,l.component.title)})}function r(n){return e._23(0,[(n()(),e._25(0,null,null,1,"app-root",[],null,null,null,u,s)),e._26(49152,null,0,d.a,[],null,null)],null,null)}var a=t("NhKt"),e=t("/oeL"),c=t("sC3u"),i=t("T683"),o=t("WzaD"),d=t("wQAS");t.d(l,"a",function(){return p});var f=[a.a],s=e._22({encapsulation:0,styles:f,data:{}}),p=e._27("app-root",d.a,r,{},{},[])},qtrl:function(n,l){function t(n){throw new Error("Cannot find module '"+n+"'.")}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="qtrl"},sC3u:function(n,l,t){"use strict";function u(n){return c._23(0,[(n()(),c._25(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),c._24(null,["",""]))],null,function(n,l){n(l,1,0,l.context.$implicit.name)})}function r(n){return c._23(0,[(n()(),c._24(null,["\n"])),(n()(),c._25(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),c._24(null,["Characters"])),(n()(),c._24(null,["\n"])),(n()(),c._28(16777216,null,null,1,null,u)),c._26(802816,null,0,i.i,[c._2,c._3,c.m],{ngForOf:[0,"ngForOf"]},null),(n()(),c._24(null,["\n"]))],function(n,l){n(l,5,0,l.component.characters)},null)}function a(n){return c._23(0,[(n()(),c._25(0,null,null,1,"app-characters",[],null,null,null,r,s)),c._26(114688,null,0,o.a,[d.a],null,null)],function(n,l){n(l,1,0)},null)}var e=t("3YnW"),c=t("/oeL"),i=t("qbdv"),o=t("T683"),d=t("WzaD");t.d(l,"b",function(){return s}),l.a=r;var f=[e.a],s=c._22({encapsulation:0,styles:f,data:{}});c._27("app-characters",o.a,a,{},{},[])},wQAS:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function n(){this.title="MACVA - Marvel API Character Viewer Application"}return n}()}},[0]);