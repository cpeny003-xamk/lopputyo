(this["webpackJsonpsoveltava-harjoitustyo-cpeny003-xamk"]=this["webpackJsonpsoveltava-harjoitustyo-cpeny003-xamk"]||[]).push([[0],{134:function(a,e,t){"use strict";t.r(e);var l=t(0),i=t(16),c=t.n(i),s=t(12),n=t(40),r=t(14),o=t(23),j=t(78),b=t(188),u=t(166),h=t(169),d=t(171),O=t(192),x=t(187),m=t(172),v=t(18),p=t(186),g=t(189),k=t(4),f=Object(u.a)({taulukko:{width:750,border:"solid black 2px",boxShadow:"0px 0px 3px black",padding:20,backgroundColor:"lightgray"},teksti:{backgroundColor:"white",marginTop:5,marginBottom:10}});var S=function(a){var e=Object(r.f)().id,t=Object(r.e)(),i=f(),c=Object(l.useState)(new Date),n=Object(s.a)(c,2),u=n[0],S=n[1],y=Object(l.useState)(a.velalliset.filter((function(a){return a.id===e}))[0].henkilonnimi),N=Object(s.a)(y,2),w=N[0],C=N[1],T=Object(l.useState)(a.velalliset.filter((function(a){return a.id===e}))[0].rahasumma),W=Object(s.a)(T,2),V=W[0],M=W[1];return Object(k.jsx)(h.a,{className:i.taulukko,children:Object(k.jsxs)(v.a,{className:i.tekstiasettelu,utils:j.a,locale:b.a,children:[Object(k.jsx)(d.a,{variant:"h2",style:{textAlign:"center",fontWeight:"bold"},children:"Muokkaa"}),Object(k.jsx)(O.a,{children:"Muokkaa nime\xe4"}),Object(k.jsx)(x.a,{className:i.teksti,value:w,variant:"outlined",fullWidth:!0,placeholder:"Nimi",onChange:function(a){C(a.target.value)}}),Object(k.jsx)(O.a,{children:"Muokkaa summaa"}),Object(k.jsx)(x.a,{className:i.teksti,value:V,variant:"outlined",fullWidth:!0,placeholder:"Nimi",onChange:function(a){M(a.target.value)}}),Object(k.jsx)(O.a,{children:"Muokkaa lis\xe4ysp\xe4iv\xe4\xe4"}),Object(k.jsx)(p.a,{disableFuture:!0,ampm:!1,className:i.teksti,fullWidth:!0,inputVariant:"outlined",format:"d.M.y HH:mm",value:u,onChange:S}),Object(k.jsx)(m.a,{style:{marginTop:"10px",marginLeft:"10px"},variant:"contained",color:"default",size:"large",onClick:function(){for(var l={id:Object(g.a)(),lisayspaiva:u.getTime(),henkilonnimi:w,rahasumma:Number(V)},i=0;i<a.velalliset.length;i++)e===a.velalliset[i].id&&(a.velalliset.splice(a.velalliset.indexOf(a.velalliset[i]),1,l),a.velalliset.sort((function(a,e){return a.lisayspaiva-e.lisayspaiva})),a.velalliset.reverse(),a.setVelalliset(Object(o.a)(a.velalliset)),t.push("/"))},children:"Muokkaa"}),Object(k.jsx)(m.a,{style:{marginTop:"10px",marginLeft:"10px"},variant:"contained",color:"default",size:"large",onClick:function(){t.push("/")},children:"Peruuta"})]})})},y=t(175),N=t(176),w=t(173);var C=function(){return Object(k.jsx)(y.a,{children:Object(k.jsx)(N.a,{position:"static",color:"primary",style:{marginBottom:"20px"},children:Object(k.jsxs)(w.a,{children:[Object(k.jsx)(d.a,{variant:"h2",edge:"start",style:{marginTop:"10px",marginBottom:"10px",marginRight:"0px",fontWeight:"bold",textShadow:"2px 2px 2px black"},children:"Talouskirjanpito"}),Object(k.jsxs)("div",{style:{marginLeft:"200px"},children:[Object(k.jsx)(d.a,{component:n.b,to:"/",variant:"h5",display:"inline",style:{marginLeft:"20px",color:"white",textDecoration:"none",fontWeight:"bold",textShadow:"1px 1px 1px black"},children:"Velkalista"}),Object(k.jsx)(d.a,{component:n.b,to:"/saatavat",variant:"h5",display:"inline",style:{marginLeft:"20px",color:"white",textDecoration:"none",fontWeight:"bold",textShadow:"1px 1px 1px black"},children:"Saatavat"})]})]})})})},T=t(178),W=t(179),V=t(180),M=t(181),I=t(182),E=t(183),L=t(174),J=t(184),A=t(185),D=t(177),H=t(100),B=Object(u.a)({taulukko:{width:750,border:"solid black 2px",boxShadow:"0px 0px 3px black",padding:20,backgroundColor:"lightblue"}});var P=function(a){var e=B(),t=Object(l.useState)(!1),i=Object(s.a)(t,2),c=i[0],r=i[1],j=Object(l.useState)(!1),b=Object(s.a)(j,2),u=b[0],h=b[1],O=Object(l.useState)(""),v=Object(s.a)(O,2),p=v[0],f=v[1],S=Object(l.useState)(!1),y=Object(s.a)(S,2),N=y[0],w=y[1],C=Object(l.useState)(""),P=Object(s.a)(C,2),z=P[0],K=P[1],F=Object(l.useState)(),R=Object(s.a)(F,2),q=(R[0],R[1],Object(l.useState)()),G=Object(s.a)(q,2),Q=G[0],U=G[1],X=Object(l.useState)(),Y=Object(s.a)(X,2),Z=Y[0],$=Y[1],_=Object(l.useState)((new Date).getTime()),aa=Object(s.a)(_,2),ea=aa[0],ta=(aa[1],Object(l.useState)(new Date)),la=Object(s.a)(ta,2),ia=(la[0],la[1],Object(l.useState)()),ca=Object(s.a)(ia,2),sa=ca[0],na=ca[1],ra={id:Object(g.a)(),lisayspaiva:ea,henkilonnimi:Z,rahasumma:Number(Q)},oa=function(){Z||(h(!0),f("Pakollinen tieto")),Q||(w(!0),K("Pakollinen tieto")),!0===isNaN(Q)&&(w(!0),K("Summan t\xe4ytyy olla numero"))};return Object(l.useEffect)((function(){if(a.velalliset.length){var e=a.velalliset.reduce((function(a,e){return a+e.rahasumma}),0);na(Number(e)),a.setVelkasumma(Number(e))}else na(0),a.setVelkasumma(0)}),[a.velalliset]),Object(l.useEffect)((function(){Z&&Q&&!1===isNaN(Q)?r(!0):r(!1)}),[Z,Q]),Object(k.jsx)("div",{style:{width:"750px",margin:"auto"},children:Object(k.jsxs)(T.a,{className:e.taulukko,children:[Object(k.jsx)(d.a,{variant:"h2",style:{textAlign:"center",fontWeight:"bold",color:"white",textShadow:"2px 2px 3px black"},children:"Velat"}),Object(k.jsxs)(W.a,{children:[Object(k.jsx)(V.a,{children:Object(k.jsxs)(M.a,{children:[Object(k.jsx)(I.a,{children:Object(k.jsx)(d.a,{variant:"h5",style:{fontWeight:"bold"},children:"Lis\xe4ysp\xe4iv\xe4"})}),Object(k.jsx)(I.a,{children:Object(k.jsx)(d.a,{variant:"h5",style:{fontWeight:"bold"},children:"Kenelle"})}),Object(k.jsx)(I.a,{children:Object(k.jsx)(d.a,{variant:"h5",style:{fontWeight:"bold"},children:"Summa"})})]})}),Object(k.jsxs)(E.a,{children:[a.velalliset.map((function(e,t){return Object(k.jsxs)(M.a,{children:[Object(k.jsx)(I.a,{children:Object(H.a)(e.lisayspaiva,"d.M.y HH:mm")}),Object(k.jsx)(I.a,{children:e.henkilonnimi}),Object(k.jsxs)(I.a,{children:[e.rahasumma," \u20ac"]}),Object(k.jsx)(L.a,{onClick:function(){var e;e=t,a.velalliset.splice(e,1),a.setVelalliset(Object(o.a)(a.velalliset))},children:Object(k.jsx)(J.a,{})}),Object(k.jsx)(L.a,{component:n.b,to:"/muokkaa/".concat(e.id),children:Object(k.jsx)(A.a,{})})]},t)})),Object(k.jsxs)(M.a,{children:[Object(k.jsx)(I.a,{children:"\xa0"}),Object(k.jsx)(I.a,{children:Object(k.jsx)(x.a,{placeholder:"Kenelle",variant:"outlined",helperText:p,error:u,onChange:function(a){$(a.target.value)}})}),Object(k.jsx)(I.a,{children:Object(k.jsx)(x.a,{placeholder:"Summa (\u20ac)",variant:"outlined",helperText:z,error:N,onChange:function(a){U(a.target.value)}})}),Object(k.jsx)(I.a,{children:Object(k.jsx)(m.a,{variant:"contained",color:"primary",onClick:function(){if(c)if(a.velalliset.length>0)for(var e=0;e<a.velalliset.length;e++){if(Object(D.a)(ea)>Object(D.a)(a.velalliset[e].lisayspaiva)){a.velalliset.splice(e,0,ra),a.setVelalliset(Object(o.a)(a.velalliset));break}a.setVelalliset([].concat(Object(o.a)(a.velalliset),[ra]))}else a.setVelalliset([].concat(Object(o.a)(a.velalliset),[ra]));else oa()},children:"Lis\xe4\xe4 velka"})})]})]})]}),Object(k.jsxs)(d.a,{variant:"h4",style:{textAlign:"center",marginTop:20},children:["Velkasi on ",Object(k.jsx)("b",{children:sa})," euroa."]})]})})},z=Object(u.a)({taulukko:{width:750,border:"solid black 2px",boxShadow:"0px 0px 3px black",padding:20,backgroundColor:"lightyellow"}});var K=function(a){var e=z(),t=Object(l.useState)(!1),i=Object(s.a)(t,2),c=i[0],r=i[1],j=Object(l.useState)(!1),b=Object(s.a)(j,2),u=b[0],h=b[1],O=Object(l.useState)(""),v=Object(s.a)(O,2),p=v[0],f=v[1],S=Object(l.useState)(!1),y=Object(s.a)(S,2),N=y[0],w=y[1],C=Object(l.useState)(""),B=Object(s.a)(C,2),P=B[0],K=B[1],F=Object(l.useState)(),R=Object(s.a)(F,2),q=R[0],G=R[1],Q=Object(l.useState)(),U=Object(s.a)(Q,2),X=U[0],Y=U[1],Z=Object(l.useState)((new Date).getTime()),$=Object(s.a)(Z,2),_=$[0],aa=($[1],Object(l.useState)(new Date)),ea=Object(s.a)(aa,2),ta=(ea[0],ea[1],Object(l.useState)()),la=Object(s.a)(ta,2),ia=la[0],ca=la[1],sa={id:Object(g.a)(),lisayspaiva:_,henkilonnimi:X,rahasumma:Number(q)},na=function(){X||(h(!0),f("Pakollinen tieto")),q||(w(!0),K("Pakollinen tieto")),!0===isNaN(q)&&(w(!0),K("Summan t\xe4ytyy olla numero"))};return Object(l.useEffect)((function(){if(a.saatavat.length){var e=a.saatavat.reduce((function(a,e){return a+e.rahasumma}),0);ca(Number(e)),a.setSaatavasumma(Number(e))}else ca(0),a.setSaatavasumma(0)}),[a.saatavat]),Object(l.useEffect)((function(){X&&q&&!1===isNaN(q)?r(!0):r(!1)}),[X,q]),Object(k.jsx)("div",{style:{width:"750px",margin:"auto"},children:Object(k.jsxs)(T.a,{className:e.taulukko,children:[Object(k.jsx)(d.a,{variant:"h2",style:{textAlign:"center",fontWeight:"bold",color:"white",textShadow:"2px 2px 3px black"},children:"Saatavat"}),Object(k.jsxs)(W.a,{children:[Object(k.jsx)(V.a,{children:Object(k.jsxs)(M.a,{children:[Object(k.jsx)(I.a,{children:Object(k.jsx)(d.a,{variant:"h5",style:{fontWeight:"bold"},children:"Lis\xe4ysp\xe4iv\xe4"})}),Object(k.jsx)(I.a,{children:Object(k.jsx)(d.a,{variant:"h5",style:{fontWeight:"bold"},children:"Kenelle"})}),Object(k.jsx)(I.a,{children:Object(k.jsx)(d.a,{variant:"h5",style:{fontWeight:"bold"},children:"Summa"})})]})}),Object(k.jsxs)(E.a,{children:[a.saatavat.map((function(e,t){return Object(k.jsxs)(M.a,{children:[Object(k.jsx)(I.a,{children:Object(H.a)(e.lisayspaiva,"d.M.y HH:mm")}),Object(k.jsx)(I.a,{children:e.henkilonnimi}),Object(k.jsxs)(I.a,{children:[e.rahasumma," \u20ac"]}),Object(k.jsx)(L.a,{onClick:function(){var e;e=t,a.saatavat.splice(e,1),a.setSaatavat(Object(o.a)(a.saatavat))},children:Object(k.jsx)(J.a,{})}),Object(k.jsx)(L.a,{component:n.b,to:"/muokkaasaatava/".concat(e.id),children:Object(k.jsx)(A.a,{})})]},t)})),Object(k.jsxs)(M.a,{children:[Object(k.jsx)(I.a,{children:"\xa0"}),Object(k.jsx)(I.a,{children:Object(k.jsx)(x.a,{placeholder:"Kenelle",variant:"outlined",helperText:p,error:u,onChange:function(a){Y(a.target.value)}})}),Object(k.jsx)(I.a,{children:Object(k.jsx)(x.a,{placeholder:"Summa (\u20ac)",variant:"outlined",helperText:P,error:N,onChange:function(a){G(a.target.value)}})}),Object(k.jsx)(I.a,{children:Object(k.jsx)(m.a,{variant:"contained",color:"primary",onClick:function(){if(c)if(a.saatavat.length>0)for(var e=0;e<a.saatavat.length;e++){if(Object(D.a)(_)>Object(D.a)(a.saatavat[e].lisayspaiva)){a.saatavat.splice(e,0,sa),a.setSaatavat(Object(o.a)(a.saatavat));break}a.setSaatavat([].concat(Object(o.a)(a.saatavat),[sa]))}else a.setSaatavat([].concat(Object(o.a)(a.saatavat),[sa]));else na()},children:"Lis\xe4\xe4 saatava"})})]})]})]}),Object(k.jsxs)(d.a,{variant:"h4",style:{textAlign:"center",marginTop:20},children:["Saatavasi ovat ",Object(k.jsx)("b",{children:ia})," euroa."]})]})})},F=Object(u.a)({taulukko:{width:750,border:"solid black 2px",boxShadow:"0px 0px 3px black",padding:20,backgroundColor:"lightgray"},teksti:{backgroundColor:"white",marginTop:5,marginBottom:10}});var R=function(a){var e=Object(r.f)().id,t=Object(r.e)(),i=F(),c=Object(l.useState)(new Date),n=Object(s.a)(c,2),u=n[0],f=n[1],S=Object(l.useState)(a.saatavat.filter((function(a){return a.id===e}))[0].henkilonnimi),y=Object(s.a)(S,2),N=y[0],w=y[1],C=Object(l.useState)(a.saatavat.filter((function(a){return a.id===e}))[0].rahasumma),T=Object(s.a)(C,2),W=T[0],V=T[1];return Object(k.jsx)(h.a,{className:i.taulukko,children:Object(k.jsxs)(v.a,{className:i.tekstiasettelu,utils:j.a,locale:b.a,children:[Object(k.jsx)(d.a,{variant:"h2",style:{textAlign:"center",fontWeight:"bold"},children:"Muokkaa"}),Object(k.jsx)(O.a,{children:"Muokkaa nime\xe4"}),Object(k.jsx)(x.a,{className:i.teksti,value:N,variant:"outlined",fullWidth:!0,placeholder:"Nimi",onChange:function(a){w(a.target.value)}}),Object(k.jsx)(O.a,{children:"Muokkaa summaa"}),Object(k.jsx)(x.a,{className:i.teksti,value:W,variant:"outlined",fullWidth:!0,placeholder:"Nimi",onChange:function(a){V(a.target.value)}}),Object(k.jsx)(O.a,{children:"Muokkaa lis\xe4ysp\xe4iv\xe4\xe4"}),Object(k.jsx)(p.a,{disableFuture:!0,ampm:!1,className:i.teksti,fullWidth:!0,inputVariant:"outlined",format:"d.M.y HH:mm",value:u,onChange:f}),Object(k.jsx)(m.a,{style:{marginTop:"10px",marginLeft:"10px"},variant:"contained",color:"default",size:"large",onClick:function(){for(var l={id:Object(g.a)(),lisayspaiva:u.getTime(),henkilonnimi:N,rahasumma:Number(W)},i=0;i<a.saatavat.length;i++)e===a.saatavat[i].id&&(a.saatavat.splice(a.saatavat.indexOf(a.saatavat[i]),1,l),a.saatavat.sort((function(a,e){return a.lisayspaiva-e.lisayspaiva})),a.saatavat.reverse(),a.setSaatavat(Object(o.a)(a.saatavat)),t.push("/saatavat"))},children:"Muokkaa"}),Object(k.jsx)(m.a,{style:{marginTop:"10px",marginLeft:"10px"},variant:"contained",color:"default",size:"large",onClick:function(){t.push("/saatavat")},children:"Peruuta"})]})})},q=Object(u.a)({laatikko:{marginTop:10,width:750,border:"solid black 2px",boxShadow:"0px 0px 3px black",padding:20,backgroundColor:"lightgray",textAlign:"center"},teksti:{backgroundColor:"white",marginTop:5,marginBottom:10}});var G=function(){var a=q(),e=Object(l.useState)([]),t=Object(s.a)(e,2),i=t[0],c=t[1],o=Object(l.useState)([]),j=Object(s.a)(o,2),b=j[0],u=j[1],O=Object(l.useState)(),x=Object(s.a)(O,2),m=x[0],v=x[1],p=Object(l.useState)(),g=Object(s.a)(p,2),f=g[0],y=g[1];return Object(l.useEffect)((function(){localStorage.getItem("velalliset")&&localStorage.getItem("velkaSumma")?(c(JSON.parse(localStorage.getItem("velalliset"))),v(JSON.parse(localStorage.getItem("velkaSumma")))):(c([]),v(0))}),[]),Object(l.useEffect)((function(){localStorage.getItem("saatavat")&&localStorage.getItem("saatavaSumma")?(u(JSON.parse(localStorage.getItem("saatavat"))),y(JSON.parse(localStorage.getItem("saatavaSumma")))):(u([]),y(0))}),[]),Object(l.useEffect)((function(){localStorage.setItem("velalliset",JSON.stringify(i))}),[i]),Object(l.useEffect)((function(){localStorage.setItem("saatavat",JSON.stringify(b))}),[b]),Object(l.useEffect)((function(){localStorage.setItem("velkaSumma",JSON.stringify(m))}),[m]),Object(l.useEffect)((function(){localStorage.setItem("saatavaSumma",JSON.stringify(f))}),[f]),Object(k.jsxs)(n.a,{children:[Object(k.jsx)(C,{}),Object(k.jsx)(r.a,{path:"/",exact:!0,component:P,children:Object(k.jsx)(P,{setVelalliset:c,velalliset:i,setVelkasumma:v,velkaSumma:m})}),Object(k.jsx)(r.a,{path:"/muokkaa/:id",exact:!0,component:S,children:Object(k.jsx)(S,{setVelalliset:c,velalliset:i})}),Object(k.jsx)(r.a,{path:"/muokkaasaatava/:id",component:R,children:Object(k.jsx)(R,{setSaatavat:u,saatavat:b})}),Object(k.jsx)(r.a,{path:"/saatavat",component:K,children:Object(k.jsx)(K,{setSaatavat:u,saatavat:b,setSaatavasumma:y,saatavaSumma:f})}),Object(k.jsxs)(h.a,{className:a.laatikko,children:[Object(k.jsxs)(d.a,{variant:"h6",children:["Velka: ",m," euroa"]}),Object(k.jsxs)(d.a,{variant:"h6",children:["Saatavat: ",f," euroa"]}),f-m>0?Object(k.jsx)(d.a,{variant:"h4",style:{color:"green",textShadow:"1px 1px 2px black"},children:Object(k.jsxs)("b",{children:["Arvioitu voitto: ",f-m," euroa"]})}):f-m===0?Object(k.jsx)(d.a,{variant:"h4",style:{textShadow:"1px 1px 2px black"},children:Object(k.jsxs)("b",{children:["Tulos: ",f-m," euroa"]})}):Object(k.jsx)(d.a,{variant:"h4",style:{color:"red",textShadow:"1px 1px 2px black"},children:Object(k.jsxs)("b",{children:["Arvioitu tappio: ",f-m," euroa"]})})]})]})};c.a.render(Object(k.jsx)(G,{}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.ccd73c48.chunk.js.map