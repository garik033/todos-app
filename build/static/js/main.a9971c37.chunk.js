(this["webpackJsonptodos-task"]=this["webpackJsonptodos-task"]||[]).push([[0],{42:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),s=n.n(r),o=n(8),i=n(28),u=n.n(i),d=n(25),j=n(12),l=n(50),b=n(51),O=n(47),p=n(48),f=n(49),h=n(46),x=n(2),m=function(e){var t=e.activeColor,n=e.setActive;return Object(x.jsx)("div",{className:"color-pick",children:["transparent","#e36d78","#f6dc5a","#76f353","#52c5ec"].map((function(e,a){return Object(x.jsx)("span",{style:{backgroundColor:e},onClick:function(){return n(e)},children:e===t&&Object(x.jsx)(h.a,{})},a)}))})},v="TODOS_FETCH",y="SET_TODOS",g="SET_TODO",T="CREATE_TODO",_="ADD_TODO",k="UPDATE_TODO",N="DELETE_TODO",E="CLEAR_TODOLIST",C="CLEAR_STATUS",w="CLEAR_FROM_LIST",S="THROW_ERROR_MESSAGE",D=function(e){return{type:y,payload:e}},A=function(e){return{type:T,payload:e}},R=function(e){return{type:k,payload:e}},P=function(e){return{type:S,payload:e}},L=function(){return{type:C}},M=function(e){var t=e.cancel,n=e.data,c=void 0===n?null:n,r=Object(o.b)(),s=Object(o.c)((function(e){return e.todos.added})),i=Object(a.useState)(""),u=Object(j.a)(i,2),d=u[0],l=u[1],b=Object(a.useState)(""),h=Object(j.a)(b,2),v=h[0],y=h[1],g=Object(a.useState)("transparent"),T=Object(j.a)(g,2),_=T[0],k=T[1],N=Object(a.useState)(!1),E=Object(j.a)(N,2),C=E[0],w=E[1],S=Object(a.useState)(!1),D=Object(j.a)(S,2),P=D[0],M=D[1];Object(a.useEffect)((function(){c&&(l(c.title),y(c.description),k(c.color))}),[c]),Object(a.useEffect)((function(){c&&s?setTimeout((function(){r(L()),t()}),500):s&&(l(""),y(""),k("transparent"),setTimeout((function(){r(L())}),1e3))}),[r,s,t,c]);var G=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=!0;d.trim().length<3&&(w(!0),t=!1),v.trim().length<5&&(M(!0),t=!1),t&&r(e?R({_id:c._id,title:d,description:v,color:_}):A({title:d,description:v,color:_}))};return Object(x.jsxs)("div",{className:"add-todo",children:[s&&Object(x.jsxs)("div",{className:"text-center",children:["Successfully ",c?"edited":"added"]}),!s&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m,{activeColor:_,setActive:k}),Object(x.jsxs)("div",{className:"input-block",children:[Object(x.jsx)("input",{type:"text",placeholder:"Title",value:d,onChange:function(e){return l(e.target.value)}}),(C||d.trim().length<3)&&Object(x.jsx)("small",{children:"The title must be min 3 character"})]}),Object(x.jsxs)("div",{className:"input-block",children:[Object(x.jsx)("textarea",{placeholder:"Description",value:v,onChange:function(e){return y(e.target.value)}}),(P||v.trim().length<5)&&Object(x.jsx)("small",{children:"The description must be min 5 character"})]}),Object(x.jsxs)("div",{className:"_action",children:[!c&&Object(x.jsx)("div",{className:"_add",onClick:function(){return G()},children:Object(x.jsx)(O.a,{size:26})}),c&&Object(x.jsx)("div",{className:"_add",onClick:function(){return G(!0)},children:Object(x.jsx)(p.a,{size:26})}),Object(x.jsx)("div",{className:" danger",onClick:t,children:Object(x.jsx)(f.a,{size:26})})]})]})]})},G=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.todos.data})),n=Object(a.useState)(!1),c=Object(j.a)(n,2),r=c[0],s=c[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"_actions",children:[Object(x.jsxs)("button",{className:"btn danger",onClick:function(){return e(function(e){return{type:E,payload:e}}(t))},children:[Object(x.jsx)(l.a,{className:"mr-2"})," Clear Todo list"]}),!r&&Object(x.jsxs)("button",{className:"btn",onClick:function(){return s(!r)},children:[Object(x.jsx)(b.a,{className:"mr-2"})," Create Todo"]})]}),r&&Object(x.jsx)(M,{cancel:function(){return s(!1)}})]})},z=n(52),F=function(e){var t=e.data,n=Object(o.b)(),c=Object(a.useState)(!1),r=Object(j.a)(c,2),s=r[0],i=r[1];return Object(x.jsxs)("div",{className:"_item",children:[!s&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{style:{borderBottom:"3px solid ".concat(t.color)},children:[Object(x.jsx)("h3",{children:t.title}),Object(x.jsx)("p",{children:t.description})]}),Object(x.jsxs)("div",{className:"_action",children:[Object(x.jsx)("div",{className:"_todo-edit",onClick:function(){return i(!0)},children:Object(x.jsx)(z.a,{size:26})}),Object(x.jsx)("div",{className:"danger",onClick:function(){return n((e=t._id,{type:N,payload:e}));var e},children:Object(x.jsx)(f.a,{size:26})})]})]}),s&&Object(x.jsx)(M,{cancel:function(){return i(!1)},data:t})]})},J=n(53),H=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.todos.data}));return Object(a.useEffect)((function(){e({type:v})}),[e]),Object(x.jsxs)("div",{className:"_todo-list",children:[t&&t.map((function(e){return Object(x.jsx)(F,{data:e},e._id)})),t&&!t.length&&Object(x.jsx)("div",{className:"text-center",children:"There is no Todo"}),!t&&Object(x.jsx)("div",{className:"text-center ",children:Object(x.jsx)(J.a,{className:"rotate"})})]})};n(42),n(43);var I=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.todos.errorMessage}));return Object(a.useEffect)((function(){""!==t&&(d.b.error(t),e(L()))}),[t,e]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("h1",{className:"_title",children:"Todos"}),Object(x.jsx)(G,{}),Object(x.jsx)(H,{})]}),Object(x.jsx)(d.a,{})]})},B=n(11),U=n(29),W=n(10),q={data:null,added:!1,errorMessage:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(W.a)(Object(W.a)({},e),{},{data:t.payload});case _:var n=Object(U.a)(e.data);return n.push(t.payload),Object(W.a)(Object(W.a)({},e),{},{data:n,added:!0});case g:return Object(W.a)(Object(W.a)({},e),{},{data:e.data.map((function(e){return e._id===t.payload._id?t.payload:e})),added:!0});case w:return Object(W.a)(Object(W.a)({},e),{},{data:e.data.filter((function(e){return e._id!==t.payload}))});case S:return Object(W.a)(Object(W.a)({},e),{},{errorMessage:t.payload});case C:return Object(W.a)(Object(W.a)({},e),{},{added:!1,errorMessage:""});default:return e}},Q=Object(B.c)({todos:K}),V=n(20),X=n(16),Y=n(6),Z=n.n(Y),$=n(7),ee=Z.a.mark(oe),te=Z.a.mark(ie),ne=Z.a.mark(ue),ae=Z.a.mark(de),ce=Z.a.mark(je),re=Z.a.mark(le),se=Object(V.a)();function oe(){var e;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object($.d)(v,ie);case 2:return t.next=4,Object($.d)(T,ue);case 4:return t.next=6,Object($.d)(k,de);case 6:return t.next=8,Object($.d)(E,je);case 8:return t.next=10,Object($.d)(N,le);case 10:return t.next=13,Object($.c)(se);case 13:return e=t.sent,t.next=16,Object($.b)(e);case 16:t.next=10;break;case 18:case"end":return t.stop()}}),ee)}function ie(){var e;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object($.a)(be);case 2:return e=t.sent,t.next=5,Object($.b)(e.error?P(e.message):D(e));case 5:case"end":return t.stop()}}),te)}function ue(e){var t;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($.a)(pe,e.payload);case 2:return t=n.sent,n.next=5,Object($.b)(t.message?P(t.message):{type:_,payload:t});case 5:case"end":return n.stop()}}),ne)}function de(e){var t;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($.a)(he,e.payload);case 2:return t=n.sent,n.next=5,Object($.b)(t.message?P(t.message):{type:g,payload:t});case 5:case"end":return n.stop()}}),ae)}function je(e){var t,n,a;return Z.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.next=3,Object($.a)(me,t);case 3:return n=c.sent,a=[],console.log(n),c.next=8,n.forEach((function(e){"deleted"!==e&&(a.push(t.filter((function(t){return t._id===e.id}))[0]),se.put(P(e.message)))}));case 8:return c.next=10,Object($.b)(D(a));case 10:case"end":return c.stop()}}),ce)}function le(e){var t;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($.a)(ye,e.payload);case 2:return t=n.sent,n.next=5,Object($.b)("deleted"===t?(a=e.payload,{type:w,payload:a}):P(t.message));case 5:case"end":return n.stop()}var a}),re)}function be(){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(X.a)(Z.a.mark((function e(){var t;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://todo.eachbase.com/api/GarikPoghosyan/","todos/"),{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(e){return fe.apply(this,arguments)}function fe(){return(fe=Object(X.a)(Z.a.mark((function e(t){var n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://todo.eachbase.com/api/GarikPoghosyan/","todos/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(e){return xe.apply(this,arguments)}function xe(){return(xe=Object(X.a)(Z.a.mark((function e(t){var n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://todo.eachbase.com/api/GarikPoghosyan/","todos/").concat(t._id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(e){return ve.apply(this,arguments)}function ve(){return(ve=Object(X.a)(Z.a.mark((function e(t){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e,t){return ye(e._id)})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(e){return fetch("".concat("https://todo.eachbase.com/api/GarikPoghosyan/","todos/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return t.message?{id:e,message:t.message}:"deleted"}))}var ge=Object(V.b)(),Te=Object(B.e)(Q,Object(B.d)(Object(B.a)(ge)));ge.run(oe);var _e=Te;u.a.config(),s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(o.a,{store:_e,children:Object(x.jsx)(I,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.a9971c37.chunk.js.map