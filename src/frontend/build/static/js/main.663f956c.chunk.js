(this["webpackJsonpsmart-homes-dv-frontend"]=this["webpackJsonpsmart-homes-dv-frontend"]||[]).push([[0],{118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},236:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(12),r=a.n(c),i=(a(118),a(72)),s=(a(119),a(14)),l=a(16),o=(a(120),a(270)),j=a(9),u=a(19),b=a(273),d=a(268),O=a(272),v=a(269),p=a(27),h=a.n(p),f=a(264),m=a(271),x=Object(f.a)((function(e){return Object(m.a)({formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}})})),g=function(e,t){for(var a=[],n=h()(e),c=h()(t);n<=c;)a.push(h()(n).format("YYYY-MM-DD")),n=h()(n).add(1,"days");return a},D=a(4),N=function(e){var t=e.setDate,a=x(),c=Object(n.useState)({date:"2019-04-29"}),r=Object(l.a)(c,2),i=r[0],s=r[1];return Object(D.jsx)("div",{children:Object(D.jsxs)(O.a,{required:!0,className:a.formControl,children:[Object(D.jsx)(b.a,{htmlFor:"date-native-required",children:"Date"}),Object(D.jsxs)(v.a,{native:!0,value:i.date,onChange:function(e){var a=e.target.name;s(Object(u.a)(Object(u.a)({},i),{},Object(j.a)({},a,String(e.target.value)))),t(Object(u.a)(Object(u.a)({},i),{},Object(j.a)({},a,String(e.target.value))))},name:"date",inputProps:{id:"date-native-required"},children:[Object(D.jsx)("option",{value:i.date,children:h()(i.date).format("LL")}),Object(D.jsx)("optgroup",{label:"Available Dates",children:g("2019-04-29","2019-05-06").map((function(e){return Object(D.jsx)("option",{value:e,children:h()(e).format("LL")},e)}))})]}),Object(D.jsx)(d.a,{children:"Required"})]})})},S="/api/id",y="/api/serial",k=a(73),C=a.n(k),I=a(102),q=function(e,t){var a=Object(n.useState)(null),c=Object(l.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)(!0),o=Object(l.a)(s,2),j=o[0],u=o[1];return Object(n.useEffect)((function(){Object(I.a)(C.a.mark((function a(){var n,c;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(e);case 3:return n=a.sent,a.next=6,n.json();case 6:c=a.sent,t(c),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),i(a.t0);case 13:return a.prev=13,u(!1),a.finish(13);case 16:case"end":return a.stop()}}),a,null,[[0,10,13,16]])})))()}),[e,t]),{loading:j,error:r}},L=function(e){var t=e.type,a=x(),c=Object(n.useState)({label:"Device_ID"===t?"ID":"SN",value:"",title:"Device_ID"===t?"Device ID":"Serial Number"}),r=Object(l.a)(c,2),i=r[0],s=r[1],o=Object(n.useState)(null),p=Object(l.a)(o,2),h=p[0],f=p[1];Object(n.useEffect)((function(){console.log(h)}),[h]);var m=q(function(e){return""+("Device_ID"===e?S:y)}(t),f);m.loading,m.error;return Object(D.jsx)("div",{children:Object(D.jsxs)(O.a,{className:a.formControl,children:[Object(D.jsx)(b.a,{htmlFor:"".concat(t,"-native-required"),children:i.label}),Object(D.jsxs)(v.a,{native:!0,value:i.value,onChange:function(e){var t=e.target.name;s(Object(u.a)(Object(u.a)({},i),{},Object(j.a)({},t,String(e.target.value))))},name:"label",inputProps:{id:"".concat(t,"-native-required")},children:[Object(D.jsx)("option",{value:i.value,children:i.value}),Object(D.jsx)("optgroup",{label:"".concat(i.title,"s")})]}),Object(D.jsx)(d.a,{children:t})]})})},Y=function(e){var t=e.setData,a=Object(n.useState)({date:"2019-04-29"}),c=Object(l.a)(a,2),r=c[0],i=c[1];return Object(D.jsxs)("div",{className:"filtercontainer",children:[Object(D.jsxs)("div",{className:"filterselects",children:[Object(D.jsx)("div",{className:"filterinner",children:Object(D.jsx)(N,{setDate:i})}),Object(D.jsxs)("div",{className:"filterinner",children:[Object(D.jsx)(L,{type:"Serial_Number"}),Object(D.jsx)(L,{type:"Device_ID"})]})]}),Object(D.jsx)(o.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),console.log("clicked"),t(r.date)},children:"Go"})]})},_=a(105),w=function(){return Object(D.jsx)(_.a,{type:"line",data:{labels:["1","2","3","4","5","6"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]},options:{plugins:{title:{display:!0,text:"Title"},legend:{display:!0,position:"bottom"}},responsive:!0,scales:{y:{ticks:{display:!0},beginAtZero:!0,title:{text:"Y Axis",display:!0}}},maintainAspectRatio:!1,elements:{point:{radius:10}}}})},A=function(e){var t=e.title;return Object(D.jsxs)("div",{children:[Object(D.jsx)("h3",{className:"centerhead",children:h()(t).format("LL")}),Object(D.jsx)("div",{className:"graphcontainer",children:Object(D.jsx)(w,{})})]})},E=function(){var e=Object(n.useState)("2019-04-29"),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(D.jsxs)("div",{className:"appcontainer",children:[Object(D.jsx)("h1",{className:"centerhead",children:"Smart Homes Data Visualization"}),Object(D.jsx)("h4",{className:"centerhead",children:"Filter"}),Object(D.jsx)(Y,{setData:c}),Object(D.jsx)(A,{title:a})]})},F=function(){return Object(D.jsx)(s.c,{children:Object(D.jsx)(s.a,{exact:!0,path:"/",component:E})})};r.a.render(Object(D.jsx)(i.a,{children:Object(D.jsx)(F,{})}),document.getElementById("root"))}},[[236,1,2]]]);
//# sourceMappingURL=main.663f956c.chunk.js.map