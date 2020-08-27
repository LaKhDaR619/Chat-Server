(this["webpackJsonpchat-client"]=this["webpackJsonpchat-client"]||[]).push([[0],{109:function(e,t,n){e.exports=n(153)},114:function(e,t,n){},150:function(e,t){},153:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),s=n.n(c),o=(n(114),n(41)),u=n(188),i=n(181),l=n(183),m=n(184),d=n(52),p=n(185),E=n(179),g=n(23),f=Object(E.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var h=Object(g.b)((function(e){return{loggedIn:e.auth.loggedIn}}),(function(e){return{logOut:function(){return e({type:"USER_LOGOUT"})}}}))((function(e){var t=e.loggedIn,n=e.logOut,r=f();return a.a.createElement(i.a,{position:"static"},a.a.createElement(l.a,null,a.a.createElement(m.a,{edge:"start",className:r.menuButton,color:"inherit","aria-label":"menu"}),a.a.createElement(d.a,{variant:"h6",className:r.title},"Chat"),t?a.a.createElement(p.a,{color:"inherit",onClick:n},"Logout"):a.a.createElement(p.a,{color:"inherit"},a.a.createElement(o.b,{to:"/login",style:{textDecoration:"none",color:"white"}},"Login"))))})),b=n(12),O=n.n(b),y=n(8),v=n(31),j=n(45),S=n(187),I=n(189),x=n(196),_=n(194),w=Object(E.a)({fullWidth:{width:"100%"}});function L(e){var t=e.label,n=e.value,r=e.type,c=e.errorMessage,s=e.onChange,o=w();return a.a.createElement(_.a,{variant:"outlined",type:r,className:o.fullWidth,label:t,value:n,helperText:c,error:!!c&&0!==c.length,onChange:s})}var R=n(17),C=Object(E.a)({center:{textAlign:"center"},mgTop:{marginTop:"15px"},fullWidth:{width:"100%"}});var T=Object(g.b)((function(e){return{inputFields:e.auth.inputFields,errorMessages:e.auth.errorMessages}}),(function(e){return{userLogin:function(t){return e({type:"USER_LOGIN",payload:t})},setInputFields:function(t){return e({type:"SET_INPUT_FIELDS",payload:t})},resetIE:function(){return e({type:"RESET_IE"})}}}))((function(e){var t=e.userLogin,n=e.errorMessages,c=e.inputFields,s=e.setInputFields,o=e.resetIE,i=C(),l=Object(R.f)();Object(r.useEffect)((function(){var e=l.listen((function(e,t){o()}));return function(){e()}}),[l,o]);var m=Object(r.useState)(!0),E=Object(j.a)(m,2),g=E[0],f=E[1],h=function(){var e=Object(v.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(Object(y.a)(Object(y.a)({},c),{},{keep:g,history:l}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(u.a,{item:!0,container:!0,spacing:2,direction:"column",className:i.mgTop,xs:10,md:4},a.a.createElement(d.a,{className:i.center,variant:"h2"},"Login"),a.a.createElement(u.a,{item:!0},a.a.createElement(L,{label:"User Name",type:"text",value:c.username,onChange:function(e){s(Object(y.a)(Object(y.a)({},c),{},{username:e.target.value}))},errorMessage:n.username})),a.a.createElement(u.a,{item:!0},a.a.createElement(L,{label:"Password",type:"Password",value:c.password,onChange:function(e){s(Object(y.a)(Object(y.a)({},c),{},{password:e.target.value}))},errorMessage:n.password})),a.a.createElement(S.a,{error:!0},n.other),a.a.createElement(u.a,{item:!0},a.a.createElement(I.a,{control:a.a.createElement(x.a,{checked:g,onChange:function(){return f(!g)},name:"checkedB",color:"primary"}),label:"Keep Me Logged In"})),a.a.createElement(u.a,{item:!0},a.a.createElement(p.a,{className:i.fullWidth,size:"large",variant:"contained",color:"primary",onClick:h},"Login")),a.a.createElement(p.a,{onClick:function(){return l.push("/register")}}," Register "))}));var N=function(){return Object(r.useEffect)((function(){document.title="Login"}),[]),a.a.createElement(u.a,{container:!0,direction:"row",justify:"center"},a.a.createElement(h,null),a.a.createElement(u.a,{item:!0,xs:1,md:4}),a.a.createElement(T,null),a.a.createElement(u.a,{item:!0,xs:1,md:4}))},U=n(195),k=n(186),A=n(190),M=n(191),F=n(197),G=n(192);var D,H=function(e){var t=e.friends,n=e.selectedIndex,c=e.setSelectedIndex;Object(r.useLayoutEffect)((function(){function e(){s.current.style.setProperty("height","".concat(document.getElementById("root").clientHeight-124,"px"))}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var s=Object(r.useRef)();return a.a.createElement(U.a,{item:!0,component:u.a,sm:4,lg:3,xl:2,display:{xs:"none",sm:"block"}},a.a.createElement(d.a,{variant:"h4"},"Friends"),a.a.createElement(k.a,{ref:s,style:{overflowY:"scroll"}},t.map((function(e,t){return a.a.createElement(A.a,{key:t,button:!0,selected:n===t,onClick:function(){return function(e){c(e)}(t)}},a.a.createElement(M.a,null,a.a.createElement(F.a,{alt:e.username,src:"/static/images/avatar/".concat(t+1,".jpg")})),a.a.createElement(G.a,{primary:e.username}))}))))},K=n(193),P=n(95),W=n.n(P);function z(){var e=document.getElementById("list");e.scrollTop=e.scrollHeight-e.clientHeight}var B=function(e){var t=e.friends,n=e.setFriends,c=e.selectedIndex,s=e.user;Object(r.useEffect)((function(){(D=W()("/")).on(s.username,(function(e){var r;if(e.sender===s.username)r=t.map((function(t){return t.username===e.receiver&&(t.messages=t.messages.map((function(t){return t.pending&&t.message===e.message&&(t.pending=!1),t}))),t}));else{var a=!1;r=t.map((function(t){return t.username===e.sender&&(a=!0,t.messages.push(e)),t})),a||r.push({username:e.sender,messages:[e]})}n(r),m(""),z()}))}),[s.username]),Object(r.useLayoutEffect)((function(){function e(){E.current.style.setProperty("height","".concat(document.getElementById("root").clientHeight-185,"px")),z()}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var o=Object(r.useState)(""),i=Object(j.a)(o,2),l=i[0],m=i[1],E=Object(r.useRef)(),g=function(){m("");var e={receiver:t[c].username,message:l,pending:!0};D.emit("message",e);var r=t.map((function(t){return t.username===e.receiver&&t.messages.push({sender:s.username,message:l,pending:!0}),t}));n(r),z()};return a.a.createElement(u.a,{item:!0,container:!0,style:{paddingLeft:15},direction:"column",xs:12,sm:8,lg:9,xl:10},a.a.createElement(u.a,{item:!0,container:!0,direction:"column",justify:"flex-end"},a.a.createElement(d.a,{variant:"h4"},t.length>0?t[c].username:"Messages"),a.a.createElement(k.a,{id:"list",ref:E,style:{overflowY:"scroll"}},t.length>0&&t[c].messages.length>0?t[c].messages.map((function(e,t){return a.a.createElement(A.a,{style:{padding:0},key:t},a.a.createElement(G.a,null,"".concat(e.sender,": ").concat(e.message)),e.pending?a.a.createElement(K.a,{size:25}):null)})):null)),a.a.createElement(u.a,{item:!0,container:!0},a.a.createElement(u.a,{item:!0,xs:10},a.a.createElement(_.a,{variant:"outlined",type:"text",style:{width:"100%"},value:l,onChange:function(e){return m(e.target.value)},onKeyPress:function(e){"Enter"==e.key&&g()}})),a.a.createElement(u.a,{item:!0,xs:2},a.a.createElement(p.a,{style:{height:"100%",width:"100%"},variant:"text",onClick:g},"Send"))))};var Y=Object(g.b)((function(e){return{user:e.auth.user,friends:e.chat.friends}}),(function(e){return{setFriends:function(t){e({type:"SET_FRIENDS",payload:{friends:t}})}}}))((function(e){var t=e.user,n=e.friends,c=e.setFriends;Object(r.useLayoutEffect)((function(){function e(){m.current.style.setProperty("height","".concat(document.getElementById("root").clientHeight-65,"px"))}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var s=a.a.useState(0),o=Object(j.a)(s,2),i=o[0],l=o[1],m=Object(r.useRef)();return a.a.createElement(u.a,{item:!0,container:!0,direction:"row",ref:m},a.a.createElement(H,{friends:n,selectedIndex:i,setSelectedIndex:l}),a.a.createElement(B,{user:t,friends:n,setFriends:c,selectedIndex:i}))}));var J=function(){return Object(r.useEffect)((function(){document.title="Chat"}),[]),a.a.createElement(u.a,{container:!0,direction:"column",wrap:"nowrap",style:{height:"100vh"},alignItems:"stretch"},a.a.createElement(u.a,{item:!0},a.a.createElement(h,{title:"Chat"})),a.a.createElement(Y,null))},X=n(97),V=function(e){var t=e.component,n=e.condition,r=e.redirectTo,c=Object(X.a)(e,["component","condition","redirectTo"]);return a.a.createElement(R.b,Object.assign({},c,{render:function(e){return n?a.a.createElement(t,Object.assign({},c,e)):a.a.createElement(R.a,{to:r})}}))},$=Object(E.a)({center:{textAlign:"center"},mgTop:{marginTop:"15px"},fullWidth:{width:"100%"}});var q=Object(g.b)((function(e){return{inputFields:e.auth.inputFields,errorMessages:e.auth.errorMessages,userAvailable:e.auth.userAvailable}}),(function(e){return{userRegister:function(t){return e({type:"USER_REGISTER",payload:t})},checkUserName:function(t){e({type:"CHECK_USERNAME",payload:{username:t}})},setInputFields:function(t){return e({type:"SET_INPUT_FIELDS",payload:t})},resetIE:function(){return e({type:"RESET_IE"})}}}))((function(e){var t=e.checkUserName,n=e.userRegister,c=e.errorMessages,s=e.inputFields,o=e.setInputFields,i=e.resetIE,l=$(),m=Object(R.f)();Object(r.useEffect)((function(){var e=m.listen((function(e,t){i()}));return function(){e()}}),[m,i]);var E=function(){var e=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(Object(y.a)(Object(y.a)({},s),{},{history:m}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(u.a,{item:!0,container:!0,direction:"column",className:l.mgTop,xs:10,md:4,spacing:2},a.a.createElement(d.a,{className:l.center,variant:"h2"},"Register"),a.a.createElement(u.a,{item:!0},a.a.createElement(L,{label:"User Name",type:"text",value:s.username,onChange:function(e){o(Object(y.a)(Object(y.a)({},s),{},{username:e.target.value})),t(e.target.value)},errorMessage:c.username})),a.a.createElement(u.a,{item:!0},a.a.createElement(L,{label:"Password",type:"Password",value:s.password,onChange:function(e){return o(Object(y.a)(Object(y.a)({},s),{},{password:e.target.value}))},errorMessage:c.password})),a.a.createElement(u.a,{item:!0},a.a.createElement(p.a,{className:l.fullWidth,size:"large",variant:"contained",color:"primary",onClick:E,type:"submit"},"Register")),a.a.createElement(p.a,{onClick:function(){return m.push("/login")}}," Login "))}));var Q=function(){return Object(r.useEffect)((function(){document.title="Register"}),[]),a.a.createElement(u.a,{container:!0,direction:"row",justify:"center"},a.a.createElement(h,{title:"Register"}),a.a.createElement(u.a,{item:!0,xs:1,md:4}),a.a.createElement(q,null),a.a.createElement(u.a,{item:!0,xs:1,md:4}))};var Z=Object(g.b)((function(e){return{loggedIn:e.auth.loggedIn,isLoading:e.auth.isLoading}}),(function(e){return{checkLogin:function(){return e({type:"CHECK_LOGIN"})}}}))((function(e){var t=e.checkLogin,n=e.loggedIn,c=e.isLoading;return Object(r.useEffect)((function(){t()}),[t]),c?"loading":a.a.createElement(o.a,null,a.a.createElement(V,{path:"/",exact:!0,component:J,condition:n,redirectTo:"/login"}),a.a.createElement(V,{path:"/login",exact:!0,component:N,condition:!n,redirectTo:"/"}),a.a.createElement(V,{path:"/register",exact:!0,component:Q,condition:!n,redirectTo:"/"}),a.a.createElement(V,{path:"/chat",exact:!0,component:J,condition:n,redirectTo:"/login"}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=n(24),te={username:"",password:""},ne={username:"",password:"",other:""},re={loggedIn:!1,user:{},isLoading:!0,inputFields:te,errorMessages:ne},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_LOGIN_ASYNC":return Object(y.a)(Object(y.a)(Object(y.a)({},e),t.payload),{},{isLoading:!1});case"USER_LOGIN_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{isLoading:!1,loggedIn:!0,errorMessages:ne},t.payload);case"USER_LOGIN_FAILED":return Object(y.a)(Object(y.a)({},e),{},{isLoading:!1,loggedIn:!1,user:{}},t.payload);case"USER_REGISTER_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{errorMessages:ne,isLoading:!1,loggedIn:!1,user:{}});case"USER_REGISTER_FAILED":return Object(y.a)(Object(y.a)({},e),{},{isLoading:!1,loggedIn:!1,user:{}},t.payload);case"CHECK_USERNAME_SUCCESS":case"CHECK_USERNAME_FAILED":return Object(y.a)(Object(y.a)({},e),t.payload);case"SET_INPUT_FIELDS":return Object(y.a)(Object(y.a)({},e),{},{inputFields:t.payload});case"RESET_IE":return Object(y.a)(Object(y.a)({},e),{},{inputFields:te,errorMessages:ne});case"USER_LOGOUT_ASYNC":return Object(y.a)(Object(y.a)({},e),{},{isLoading:!1,loggedIn:t.loggedIn,user:t.user,errorMessages:ne});case"SET_AUTH_LOADING":return Object(y.a)(Object(y.a)({},e),{},{isLoading:!0});default:return e}},ce={friends:[]},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FRIENDS":return Object(y.a)(Object(y.a)({},e),t.payload);default:return e}},oe=Object(ee.c)({auth:ae,chat:se}),ue=n(16),ie=O.a.mark(Ee),le=O.a.mark(ge),me=O.a.mark(fe),de=O.a.mark(he),pe=O.a.mark(be);function Ee(){var e,t;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ue.b)({type:"SET_AUTH_LOADING"});case 2:return n.next=4,Object(ue.a)(Object(v.a)(O.a.mark((function t(){var n,r,a,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/auth/check/loggedin");case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,a=r.loggedIn,c={username:r.user.username},e=r.user.friends,t.abrupt("return",{type:"CHECK_LOGIN_ASYNC",payload:{loggedIn:a,user:c}});case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:return t.abrupt("return",{type:"CHECK_LOGIN_ASYNC"});case 17:case"end":return t.stop()}}),t,null,[[0,13]])}))));case 4:if(t=n.sent,!e){n.next=8;break}return n.next=8,Object(ue.b)({type:"SET_FRIENDS",payload:{friends:e}});case 8:return n.next=10,Object(ue.b)(t);case 10:case"end":return n.stop()}}),ie)}function ge(e){var t,n,r,a,c,s;return O.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,r=t.username,a=t.password,c=t.history,o.next=4,Object(ue.b)({type:"SET_AUTH_LOADING"});case 4:return o.next=6,Object(ue.a)(Object(v.a)(O.a.mark((function e(){var t,s,o,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,password:a})});case 3:t=e.sent,e.t0=t.status,e.next=200===e.t0?7:400===e.t0?14:500===e.t0?20:21;break;case 7:return c.push("/chat"),e.next=10,t.json();case 10:return s=e.sent,n=s.friends,s={username:s.username},e.abrupt("return",{type:"USER_LOGIN_SUCCESS",payload:{user:s}});case 14:return e.next=16,t.json();case 16:return o=e.sent,u={},0===o.index?u.username=o.message:u.password=o.message,e.abrupt("return",{type:"USER_LOGIN_FAILED",payload:{errorMessages:u}});case 20:return e.abrupt("return",{type:"USER_LOGIN_FAILED",payload:{errorMessages:{other:"There is a problem with the Server"}}});case 21:return e.abrupt("return",{type:"USER_LOGIN_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 22:e.next=27;break;case 24:e.prev=24,e.t1=e.catch(0),console.log(e.t1);case 27:return e.abrupt("return",{type:"USER_LOGIN_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 28:case"end":return e.stop()}}),e,null,[[0,24]])}))));case 6:if(s=o.sent,!n){o.next=10;break}return o.next=10,Object(ue.b)({type:"SET_FRIENDS",payload:{friends:n}});case 10:return o.next=12,Object(ue.b)(s);case 12:case"end":return o.stop()}}),le)}function fe(e){var t,n;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(ue.b)({type:"SET_AUTH_LOADING"});case 3:return r.next=5,Object(ue.a)(Object(v.a)(O.a.mark((function e(){var n,r,a,c,s,o,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,a=t.history,e.prev=1,e.next=4,fetch("/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:r})});case 4:c=e.sent,e.t0=c.status,e.next=200===e.t0?8:400===e.t0?10:409===e.t0?16:500===e.t0?20:21;break;case 8:return a.push("/login"),e.abrupt("return",{type:"USER_REGISTER_SUCCESS"});case 10:return e.next=12,c.json();case 12:return s=e.sent,o={},0===s.index?o.username=s.message:o.password=s.message,e.abrupt("return",{type:"USER_REGISTER_FAILED",payload:{errorMessages:o}});case 16:return e.next=18,c.json();case 18:return u=e.sent,e.abrupt("return",{type:"USER_REGISTER_FAILED",payload:{errorMessages:{username:u}}});case 20:return e.abrupt("return",{type:"USER_REGISTER_FAILED",payload:{errorMessages:{other:"There is a problem with the Server"}}});case 21:return e.abrupt("return",{type:"USER_REGISTER_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 22:e.next=27;break;case 24:e.prev=24,e.t1=e.catch(1),console.log(e.t1);case 27:return e.abrupt("return",{type:"USER_REGISTER_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 28:case"end":return e.stop()}}),e,null,[[1,24]])}))));case 5:return n=r.sent,r.next=8,Object(ue.b)(n);case 8:case"end":return r.stop()}}),me)}function he(){var e;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ue.b)({type:"USER_LOADING"});case 2:return t.next=4,Object(ue.a)(Object(v.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={user:{},errorMessage:""},e.prev=1,e.next=4,fetch("/auth/logout");case 4:200===e.sent.status&&(t.loggedIn=!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Error: ".concat(e.t0)),t.loggedIn=!1;case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,null,[[1,8]])}))));case 4:return e=t.sent,t.next=7,Object(ue.b)(Object(y.a)({type:"USER_LOGOUT_ASYNC"},e));case 7:case"end":return t.stop()}}),de)}function be(e){var t,n;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(ue.a)(Object(v.a)(O.a.mark((function e(){var n,r,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.username,e.next=4,fetch("/auth/check/username",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n})});case 4:r=e.sent,e.t0=r.status,e.next=200===e.t0?8:500===e.t0?14:15;break;case 8:return e.next=10,r.json();case 10:return a=e.sent,c={},c=a?{username:"",other:""}:{username:"User ".concat(n," Already exists")},e.abrupt("return",{type:"CHECK_USERNAME_SUCCESS",payload:{errorMessages:c}});case 14:return e.abrupt("return",{type:"CHECK_USERNAME_FAILED",payload:{errorMessage:{other:"There is a problem with the Server"}}});case 15:return e.abrupt("return",{type:"CHECK_USERNAME_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(0),console.log(e.t1);case 21:return e.abrupt("return",{type:"CHECK_USERNAME_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 22:case"end":return e.stop()}}),e,null,[[0,18]])}))));case 3:return n=r.sent,r.next=6,Object(ue.b)(n);case 6:case"end":return r.stop()}}),pe)}var Oe=O.a.mark(ye);function ye(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ue.c)("CHECK_LOGIN",Ee);case 2:return e.next=4,Object(ue.c)("USER_REGISTER",fe);case 4:return e.next=6,Object(ue.c)("USER_LOGIN",ge);case 6:return e.next=8,Object(ue.c)("USER_LOGOUT",he);case 8:return e.next=10,Object(ue.c)("CHECK_USERNAME",be);case 10:case"end":return e.stop()}}),Oe)}var ve,je,Se=n(96),Ie=Object(Se.a)();try{ve=Object(ee.d)(Object(ee.a)(Ie),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),je=Object(ee.e)(oe,ve)}catch(xe){je=Object(ee.e)(oe,Object(ee.a)(Ie)),console.log(xe)}Ie.run(ye),s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g.a,{store:je},a.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[109,1,2]]]);
//# sourceMappingURL=main.a374ffac.chunk.js.map