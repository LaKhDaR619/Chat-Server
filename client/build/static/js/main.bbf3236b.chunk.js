(this["webpackJsonpchat-client"]=this["webpackJsonpchat-client"]||[]).push([[0],{112:function(e,t,n){e.exports=n(157)},117:function(e,t,n){},153:function(e,t){},156:function(e,t,n){e.exports=n.p+"static/media/stairs.ac905963.mp3"},157:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(13),c=n.n(s),o=(n(117),n(42)),i=n(189),u=n(185),l=n(187),d=n(188),m=n(53),p=n(190),E=n(183),g=n(23),f=Object(E.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var h=Object(g.b)((function(e){return{loggedIn:e.auth.loggedIn,user:e.auth.user}}),(function(e){return{logOut:function(){return e({type:"USER_LOGOUT"})}}}))((function(e){var t=e.loggedIn,n=e.logOut,r=e.user,s=f();return a.a.createElement(u.a,{position:"static"},a.a.createElement(l.a,null,a.a.createElement(d.a,{edge:"start",className:s.menuButton,color:"inherit","aria-label":"menu"}),a.a.createElement(m.a,{variant:"h6",className:s.title},"Chat"),t?a.a.createElement(i.a,{container:!0,justify:"flex-end",alignItems:"center",spacing:2},a.a.createElement(i.a,{item:!0},a.a.createElement(m.a,{variant:"h6",className:s.title},r.username)),a.a.createElement(i.a,{item:!0},a.a.createElement(p.a,{color:"inherit",onClick:n},"Logout"))):a.a.createElement(p.a,{color:"inherit"},a.a.createElement(o.b,{to:"/login",style:{textDecoration:"none",color:"white"}},"Login"))))})),b=n(12),O=n.n(b),y=n(8),v=n(32),S=n(62),j=n(192),I=n(193),x=n(201),_=n(199),w=Object(E.a)({fullWidth:{width:"100%"}});function R(e){var t=e.label,n=e.value,r=e.type,s=e.errorMessage,c=e.onChange,o=w();return a.a.createElement(_.a,{variant:"outlined",type:r,className:o.fullWidth,label:t,value:n,helperText:s,error:!!s&&0!==s.length,onChange:c})}var T=n(17),L=Object(E.a)({center:{textAlign:"center"},mgTop:{marginTop:"15px"},fullWidth:{width:"100%"}});var C=Object(g.b)((function(e){return{inputFields:e.auth.inputFields,errorMessages:e.auth.errorMessages}}),(function(e){return{userLogin:function(t){return e({type:"USER_LOGIN",payload:t})},setInputFields:function(t){return e({type:"SET_INPUT_FIELDS",payload:t})},resetIE:function(){return e({type:"RESET_IE"})}}}))((function(e){var t=e.userLogin,n=e.errorMessages,s=e.inputFields,c=e.setInputFields,o=e.resetIE,u=L(),l=Object(T.f)();Object(r.useEffect)((function(){var e=l.listen((function(e,t){o()}));return function(){e()}}),[l,o]);var d=Object(r.useState)(!0),E=Object(S.a)(d,2),g=E[0],f=E[1],h=function(){var e=Object(v.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(Object(y.a)(Object(y.a)({},s),{},{keep:g,history:l}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(i.a,{item:!0,container:!0,spacing:2,direction:"column",className:u.mgTop,xs:10,md:4},a.a.createElement(m.a,{className:u.center,variant:"h2"},"Login"),a.a.createElement(i.a,{item:!0},a.a.createElement(R,{label:"User Name",type:"text",value:s.username,onChange:function(e){c(Object(y.a)(Object(y.a)({},s),{},{username:e.target.value}))},errorMessage:n.username})),a.a.createElement(i.a,{item:!0},a.a.createElement(R,{label:"Password",type:"Password",value:s.password,onChange:function(e){c(Object(y.a)(Object(y.a)({},s),{},{password:e.target.value}))},errorMessage:n.password})),a.a.createElement(j.a,{error:!0},n.other),a.a.createElement(i.a,{item:!0},a.a.createElement(I.a,{control:a.a.createElement(x.a,{checked:g,onChange:function(){return f(!g)},name:"checkedB",color:"primary"}),label:"Keep Me Logged In"})),a.a.createElement(i.a,{item:!0},a.a.createElement(p.a,{className:u.fullWidth,size:"large",variant:"contained",color:"primary",onClick:h},"Login")),a.a.createElement(p.a,{onClick:function(){return l.push("/register")}}," Register "))}));var N=function(){return Object(r.useEffect)((function(){document.title="Login"}),[]),a.a.createElement(i.a,{container:!0,direction:"row",justify:"center"},a.a.createElement(h,null),a.a.createElement(i.a,{item:!0,xs:1,md:4}),a.a.createElement(C,null),a.a.createElement(i.a,{item:!0,xs:1,md:4}))},U=n(200),M=n(191),A=n(194),k=n(195),F=n(202),D=n(196),G=n(197);var H=function(e){var t=e.friends,n=e.setRead,s=e.selectedIndex,c=e.setSelectedIndex,o=e.scrollToBottom;Object(r.useLayoutEffect)((function(){function e(){u.current.style.setProperty("height","".concat(document.getElementById("root").clientHeight-124,"px"))}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(r.useEffect)((function(){o(),t[s].unRead&&n(t,s)}),[s,t]);var u=Object(r.useRef)();return a.a.createElement(U.a,{item:!0,component:i.a,sm:4,lg:3,xl:2,display:{xs:"none",sm:"block"}},a.a.createElement(m.a,{variant:"h4"},"Friends"),a.a.createElement(M.a,{ref:u,id:"friends",style:{overflowY:"scroll"}},t.map((function(e,t){return a.a.createElement(A.a,{key:t,button:!0,selected:s===t,onClick:function(){return function(e){c(e)}(t)}},a.a.createElement(k.a,null,a.a.createElement(F.a,{alt:e.username,src:"/static/images/avatar/".concat(t+1,".jpg")})),a.a.createElement(D.a,{primary:e.username}),e.unRead?a.a.createElement(G.a,{color:"secondary",variant:"dot"}):null)}))))},B=n(35),K=n(198),P=n(98);var W=function(e){var t=e.friends,s=e.selectedIndex,c=e.setSelectedIndex,o=e.user,u=e.socket,l=e.setFriends,d=Object(r.useState)(""),m=Object(S.a)(d,2),E=m[0],g=m[1],f=function(){if(E){g("");var e={receiver:t[s].username,message:E,pending:!0},n=Object(B.a)(t),r=t.findIndex((function(t){return t.username===e.receiver}));n[r].messages.push({sender:o.username,message:E,pending:!0});var a=n[r];n.splice(r,1),n.splice(0,0,a),u.emit("message",e),c(0),l(n)}};return a.a.createElement(i.a,{item:!0,container:!0},a.a.createElement(i.a,{item:!0,xs:10},a.a.createElement(_.a,{variant:"outlined",type:"text",style:{width:"100%"},value:E,onChange:function(e){return g(e.target.value)},onKeyPress:function(e){"Enter"==e.key&&f()}})),a.a.createElement(i.a,{item:!0,xs:2},a.a.createElement(p.a,{style:{height:"100%",width:"100%"},variant:"text",onClick:f},"Send")),a.a.createElement("audio",{id:"notification",src:n(156),muted:!0}))},z=n.n(P)()("http://localhost:5000");var Y=function(e){var t=e.friends,n=e.setFriends,s=e.setRead,c=e.selectedIndex,o=e.setSelectedIndex,u=e.user,l=e.receiveMessage,d=e.messageConfirmation,p=(e.scrollToBottom,e.scrollToTop,function(e){Object(B.a)(t);if(e.sender===u.username)d(e,s);else{l(e);var n=document.getElementById("notification");n.muted=!1,n.play(),n.muted=!1}});Object(r.useEffect)((function(){return console.log("on"),z.on(u.username,p),function(){console.log("off"),z.off(u.username)}}),[u.username]),Object(r.useLayoutEffect)((function(){function e(){E.current.style.setProperty("height","".concat(document.getElementById("root").clientHeight-185,"px"))}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var E=Object(r.useRef)();return a.a.createElement(i.a,{item:!0,component:i.a,container:!0,direction:"column",xs:12,sm:8,lg:9,xl:10},a.a.createElement(i.a,{item:!0,container:!0,direction:"column",justify:"flex-end"},a.a.createElement(m.a,{variant:"h4"},t.length>0&&t.length>c?t[c].username:"Messages"),a.a.createElement(M.a,{id:"messages",ref:E,style:{overflowY:"scroll"}},t.length>0&&t.length>c?t[c].messages.map((function(e,t){return a.a.createElement(A.a,{style:{padding:0},key:t},(e.pending,a.a.createElement(K.a,{size:25,variant:e.pending?"indeterminate":"static",value:0,style:{marginRight:"10px"}})),a.a.createElement(D.a,null,"".concat(e.sender,": ").concat(e.message)))})):null)),a.a.createElement(W,{friends:t,selectedIndex:c,setSelectedIndex:o,user:u,socket:z,setFriends:n}))};function J(){var e=document.getElementById("messages");e.scrollTop=e.scrollHeight-e.clientHeight}function X(){document.getElementById("friends").scroll({top:0,left:0,behavior:"smooth"})}var V=Object(g.b)((function(e){return{user:e.auth.user,friends:e.chat.friends,selectedIndex:e.chat.selectedIndex}}),(function(e){return{setFriends:function(t){e({type:"SET_FRIENDS",payload:{friends:t}})},setRead:function(t,n){e({type:"SET_READ",payload:{friends:t,index:n}})},setSelectedIndex:function(t){e({type:"SET_SELECTED_INDEX",payload:{selectedIndex:t}})},messageConfirmation:function(t){e({type:"MESSAGE_CONFIRMATION",payload:{msg:t}})},receiveMessage:function(t){e({type:"RECEIVE_MESSAGE",payload:{msg:t}})}}}))((function(e){var t=e.user,n=e.friends,s=e.setFriends,c=e.selectedIndex,o=e.setSelectedIndex,u=e.setRead,l=e.messageConfirmation,d=e.receiveMessage;Object(r.useLayoutEffect)((function(){function e(){m.current.style.setProperty("height","".concat(document.getElementById("root").clientHeight-65,"px"))}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var m=Object(r.useRef)();return a.a.createElement(i.a,{item:!0,container:!0,direction:"row",ref:m},a.a.createElement(H,{friends:n,setRead:u,selectedIndex:c,setSelectedIndex:o,scrollToBottom:J}),a.a.createElement(Y,{user:t,friends:n,setFriends:s,setRead:u,selectedIndex:c,setSelectedIndex:o,messageConfirmation:l,receiveMessage:d,scrollToBottom:J,scrollToTop:X}))}));var $=function(){return Object(r.useEffect)((function(){document.title="Chat"}),[]),a.a.createElement(i.a,{container:!0,direction:"column",wrap:"nowrap",style:{height:"100vh"},alignItems:"stretch"},a.a.createElement(i.a,{item:!0},a.a.createElement(h,{title:"Chat"})),a.a.createElement(V,null))},q=n(100),Q=function(e){var t=e.component,n=e.condition,r=e.redirectTo,s=Object(q.a)(e,["component","condition","redirectTo"]);return a.a.createElement(T.b,Object.assign({},s,{render:function(e){return n?a.a.createElement(t,Object.assign({},s,e)):a.a.createElement(T.a,{to:r})}}))},Z=Object(E.a)({center:{textAlign:"center"},mgTop:{marginTop:"15px"},fullWidth:{width:"100%"}});var ee=Object(g.b)((function(e){return{inputFields:e.auth.inputFields,errorMessages:e.auth.errorMessages,userAvailable:e.auth.userAvailable}}),(function(e){return{userRegister:function(t){return e({type:"USER_REGISTER",payload:t})},checkUserName:function(t){e({type:"CHECK_USERNAME",payload:{username:t}})},setInputFields:function(t){return e({type:"SET_INPUT_FIELDS",payload:t})},resetIE:function(){return e({type:"RESET_IE"})}}}))((function(e){var t=e.checkUserName,n=e.userRegister,s=e.errorMessages,c=e.inputFields,o=e.setInputFields,u=e.resetIE,l=Z(),d=Object(T.f)();Object(r.useEffect)((function(){var e=d.listen((function(e,t){u()}));return function(){e()}}),[d,u]);var E=function(){var e=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(Object(y.a)(Object(y.a)({},c),{},{history:d}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(i.a,{item:!0,container:!0,direction:"column",className:l.mgTop,xs:10,md:4,spacing:2},a.a.createElement(m.a,{className:l.center,variant:"h2"},"Register"),a.a.createElement(i.a,{item:!0},a.a.createElement(R,{label:"User Name",type:"text",value:c.username,onChange:function(e){o(Object(y.a)(Object(y.a)({},c),{},{username:e.target.value})),t(e.target.value)},errorMessage:s.username})),a.a.createElement(i.a,{item:!0},a.a.createElement(R,{label:"Password",type:"Password",value:c.password,onChange:function(e){return o(Object(y.a)(Object(y.a)({},c),{},{password:e.target.value}))},errorMessage:s.password})),a.a.createElement(i.a,{item:!0},a.a.createElement(p.a,{className:l.fullWidth,size:"large",variant:"contained",color:"primary",onClick:E,type:"submit"},"Register")),a.a.createElement(p.a,{onClick:function(){return d.push("/login")}}," Login "))}));var te=function(){return Object(r.useEffect)((function(){document.title="Register"}),[]),a.a.createElement(i.a,{container:!0,direction:"row",justify:"center"},a.a.createElement(h,{title:"Register"}),a.a.createElement(i.a,{item:!0,xs:1,md:4}),a.a.createElement(ee,null),a.a.createElement(i.a,{item:!0,xs:1,md:4}))};var ne=Object(g.b)((function(e){return{loggedIn:e.auth.loggedIn,isLoading:e.auth.isLoading}}),(function(e){return{checkLogin:function(){return e({type:"CHECK_LOGIN"})}}}))((function(e){var t=e.checkLogin,n=e.loggedIn,s=e.isLoading;return Object(r.useEffect)((function(){t()}),[t]),s?"loading":a.a.createElement(o.a,null,a.a.createElement(Q,{path:"/",exact:!0,component:$,condition:n,redirectTo:"/login"}),a.a.createElement(Q,{path:"/login",exact:!0,component:N,condition:!n,redirectTo:"/"}),a.a.createElement(Q,{path:"/register",exact:!0,component:te,condition:!n,redirectTo:"/"}),a.a.createElement(Q,{path:"/chat",exact:!0,component:$,condition:n,redirectTo:"/login"}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=n(24),ae={username:"",password:""},se={username:"",password:"",other:""},ce={loggedIn:!1,user:{},isLoading:!0,inputFields:ae,errorMessages:se},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_LOGIN_ASYNC":return Object(y.a)(Object(y.a)(Object(y.a)({},e),t.payload),{},{isLoading:!1});case"USER_LOGIN_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{isLoading:!1,loggedIn:!0,errorMessages:se},t.payload);case"USER_LOGIN_FAILED":return Object(y.a)(Object(y.a)({},e),{},{isLoading:!1,loggedIn:!1,user:{}},t.payload);case"USER_REGISTER_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{errorMessages:se,isLoading:!1,loggedIn:!1,user:{}});case"USER_REGISTER_FAILED":return Object(y.a)(Object(y.a)({},e),{},{isLoading:!1,loggedIn:!1,user:{}},t.payload);case"CHECK_USERNAME_SUCCESS":case"CHECK_USERNAME_FAILED":return Object(y.a)(Object(y.a)({},e),t.payload);case"SET_INPUT_FIELDS":return Object(y.a)(Object(y.a)({},e),{},{inputFields:t.payload});case"RESET_IE":return Object(y.a)(Object(y.a)({},e),{},{inputFields:ae,errorMessages:se});case"USER_LOGOUT_ASYNC":return Object(y.a)(Object(y.a)({},e),{},{isLoading:!1,loggedIn:t.loggedIn,user:t.user,errorMessages:se});case"SET_AUTH_LOADING":return Object(y.a)(Object(y.a)({},e),{},{isLoading:!0});default:return e}},ie={friends:[],selectedIndex:0},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FRIENDS":case"SET_SELECTED_INDEX":return Object(y.a)(Object(y.a)({},e),t.payload);case"MESSAGE_CONFIRMATION":var n=Object(B.a)(e.friends),r=t.payload.msg,a=n.findIndex((function(e){return e.username===r.receiver})),s=n[a].messages.findIndex((function(e){return e.pending&&e.message===r.message}));return n[a].messages[s].pending=!1,Object(y.a)(Object(y.a)({},e),{},{friends:n});case"RECEIVE_MESSAGE":var c=Object(B.a)(e.friends),o=e.selectedIndex,i=t.payload.msg,u=c.findIndex((function(e){return e.username===i.sender}));if(-1!==u){c[u].messages.push(i),u===o?(o=0,c[u].unRead=!0):(c[u].unRead=!0,u>o&&o++);var l=c[u];return c.splice(u,1),c.splice(0,0,l),Object(y.a)(Object(y.a)({},e),{},{friends:c,selectedIndex:o})}return c.splice(0,0,{username:i.sender,messages:[i],unRead:!0}),o++,Object(y.a)(Object(y.a)({},e),{},{friends:c,selectedIndex:o});default:return e}},le=Object(re.c)({auth:oe,chat:ue}),de=n(14),me=O.a.mark(he),pe=O.a.mark(be),Ee=O.a.mark(Oe),ge=O.a.mark(ye),fe=O.a.mark(ve);function he(){var e,t;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(de.b)({type:"SET_AUTH_LOADING"});case 2:return n.next=4,Object(de.a)(Object(v.a)(O.a.mark((function t(){var n,r,a,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/auth/check/loggedin");case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,a=r.loggedIn,s={username:r.user.username},e=r.user.friends,t.abrupt("return",{type:"CHECK_LOGIN_ASYNC",payload:{loggedIn:a,user:s}});case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:return t.abrupt("return",{type:"CHECK_LOGIN_ASYNC"});case 17:case"end":return t.stop()}}),t,null,[[0,13]])}))));case 4:if(t=n.sent,!e){n.next=8;break}return n.next=8,Object(de.b)({type:"SET_FRIENDS",payload:{friends:e}});case 8:return n.next=10,Object(de.b)(t);case 10:case"end":return n.stop()}}),me)}function be(e){var t,n,r,a,s,c;return O.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,r=t.username,a=t.password,s=t.history,o.next=4,Object(de.b)({type:"SET_AUTH_LOADING"});case 4:return o.next=6,Object(de.a)(Object(v.a)(O.a.mark((function e(){var t,c,o,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,password:a})});case 3:t=e.sent,e.t0=t.status,e.next=200===e.t0?7:400===e.t0?14:500===e.t0?20:21;break;case 7:return s.push("/chat"),e.next=10,t.json();case 10:return c=e.sent,n=c.friends,c={username:c.username},e.abrupt("return",{type:"USER_LOGIN_SUCCESS",payload:{user:c}});case 14:return e.next=16,t.json();case 16:return o=e.sent,i={},0===o.index?i.username=o.message:i.password=o.message,e.abrupt("return",{type:"USER_LOGIN_FAILED",payload:{errorMessages:i}});case 20:return e.abrupt("return",{type:"USER_LOGIN_FAILED",payload:{errorMessages:{other:"There is a problem with the Server"}}});case 21:return e.abrupt("return",{type:"USER_LOGIN_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 22:e.next=27;break;case 24:e.prev=24,e.t1=e.catch(0),console.log(e.t1);case 27:return e.abrupt("return",{type:"USER_LOGIN_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 28:case"end":return e.stop()}}),e,null,[[0,24]])}))));case 6:if(c=o.sent,!n){o.next=10;break}return o.next=10,Object(de.b)({type:"SET_FRIENDS",payload:{friends:n}});case 10:return o.next=12,Object(de.b)(c);case 12:case"end":return o.stop()}}),pe)}function Oe(e){var t,n;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(de.b)({type:"SET_AUTH_LOADING"});case 3:return r.next=5,Object(de.a)(Object(v.a)(O.a.mark((function e(){var n,r,a,s,c,o,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,a=t.history,e.prev=1,e.next=4,fetch("/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:r})});case 4:s=e.sent,e.t0=s.status,e.next=200===e.t0?8:400===e.t0?10:409===e.t0?16:500===e.t0?20:21;break;case 8:return a.push("/login"),e.abrupt("return",{type:"USER_REGISTER_SUCCESS"});case 10:return e.next=12,s.json();case 12:return c=e.sent,o={},0===c.index?o.username=c.message:o.password=c.message,e.abrupt("return",{type:"USER_REGISTER_FAILED",payload:{errorMessages:o}});case 16:return e.next=18,s.json();case 18:return i=e.sent,e.abrupt("return",{type:"USER_REGISTER_FAILED",payload:{errorMessages:{username:i}}});case 20:return e.abrupt("return",{type:"USER_REGISTER_FAILED",payload:{errorMessages:{other:"There is a problem with the Server"}}});case 21:return e.abrupt("return",{type:"USER_REGISTER_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 22:e.next=27;break;case 24:e.prev=24,e.t1=e.catch(1),console.log(e.t1);case 27:return e.abrupt("return",{type:"USER_REGISTER_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 28:case"end":return e.stop()}}),e,null,[[1,24]])}))));case 5:return n=r.sent,r.next=8,Object(de.b)(n);case 8:case"end":return r.stop()}}),Ee)}function ye(){var e;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(de.b)({type:"USER_LOADING"});case 2:return t.next=4,Object(de.a)(Object(v.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={user:{},errorMessage:""},e.prev=1,e.next=4,fetch("/auth/logout");case 4:200===e.sent.status&&(t.loggedIn=!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Error: ".concat(e.t0)),t.loggedIn=!1;case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,null,[[1,8]])}))));case 4:return e=t.sent,t.next=7,Object(de.b)(Object(y.a)({type:"USER_LOGOUT_ASYNC"},e));case 7:case"end":return t.stop()}}),ge)}function ve(e){var t,n;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(de.a)(Object(v.a)(O.a.mark((function e(){var n,r,a,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.username,e.next=4,fetch("/auth/check/username",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n})});case 4:r=e.sent,e.t0=r.status,e.next=200===e.t0?8:500===e.t0?14:15;break;case 8:return e.next=10,r.json();case 10:return a=e.sent,s={},s=a?{username:"",other:""}:{username:"User ".concat(n," Already exists")},e.abrupt("return",{type:"CHECK_USERNAME_SUCCESS",payload:{errorMessages:s}});case 14:return e.abrupt("return",{type:"CHECK_USERNAME_FAILED",payload:{errorMessage:{other:"There is a problem with the Server"}}});case 15:return e.abrupt("return",{type:"CHECK_USERNAME_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(0),console.log(e.t1);case 21:return e.abrupt("return",{type:"CHECK_USERNAME_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 22:case"end":return e.stop()}}),e,null,[[0,18]])}))));case 3:return n=r.sent,r.next=6,Object(de.b)(n);case 6:case"end":return r.stop()}}),fe)}var Se=O.a.mark(je);function je(e){var t,n,r,a,s;return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.friends,r=t.index,a=Object(B.a)(n),c.next=5,Object(de.a)((function(){try{fetch("/chat/messageRead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({friendName:n[r].username})})}catch(e){console.log(e)}return a[r].unRead=!1,{type:"SET_FRIENDS",payload:{friends:a}}}));case 5:return s=c.sent,c.next=8,Object(de.b)(s);case 8:case"end":return c.stop()}}),Se)}var Ie=O.a.mark(xe);function xe(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.c)("CHECK_LOGIN",he);case 2:return e.next=4,Object(de.c)("USER_REGISTER",Oe);case 4:return e.next=6,Object(de.c)("USER_LOGIN",be);case 6:return e.next=8,Object(de.c)("USER_LOGOUT",ye);case 8:return e.next=10,Object(de.c)("CHECK_USERNAME",ve);case 10:return e.next=12,Object(de.c)("SET_READ",je);case 12:case"end":return e.stop()}}),Ie)}var _e,we,Re=n(99),Te=Object(Re.a)();try{_e=Object(re.d)(Object(re.a)(Te),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),we=Object(re.e)(le,_e)}catch(Le){we=Object(re.e)(le,Object(re.a)(Te)),console.log(Le)}Te.run(xe),c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g.a,{store:we},a.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[112,1,2]]]);
//# sourceMappingURL=main.bbf3236b.chunk.js.map