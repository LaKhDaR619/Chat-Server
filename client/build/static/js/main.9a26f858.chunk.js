(this["webpackJsonpchat-client"]=this["webpackJsonpchat-client"]||[]).push([[0],{118:function(e,t,n){e.exports=n(165)},123:function(e,t,n){},159:function(e,t){},164:function(e,t,n){e.exports=n.p+"static/media/stairs.ac905963.mp3"},165:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(13),c=n.n(s),o=(n(123),n(45)),i=n(198),u=n(195),l=n(197),d=n(56),m=n(199),p=n(193),E=n(25),g=Object(p.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}}));var f=Object(E.b)((function(e){return{loggedIn:e.auth.loggedIn,user:e.auth.user}}),(function(e){return{logOut:function(){return e({type:"USER_LOGOUT"})}}}))((function(e){var t=e.loggedIn,n=e.logOut,r=e.user,s=g();return a.a.createElement(u.a,{position:"static"},a.a.createElement(l.a,null,a.a.createElement(d.a,{variant:"h6",className:s.title},"Chat"),t?a.a.createElement(i.a,{container:!0,justify:"flex-end",alignItems:"center",spacing:2},a.a.createElement(i.a,{item:!0},a.a.createElement(d.a,{variant:"h6",className:s.title},r.username)),a.a.createElement(i.a,{item:!0},a.a.createElement(m.a,{color:"inherit",onClick:n},"Logout"))):a.a.createElement(m.a,{color:"inherit"},a.a.createElement(o.b,{to:"/login",style:{textDecoration:"none",color:"white"}},"Login"))))})),h=n(12),b=n.n(h),O=n(8),y=n(35),v=n(37),S=n(201),j=n(202),x=n(210),I=n(208),w=Object(p.a)({fullWidth:{width:"100%"}});function _(e){var t=e.label,n=e.value,r=e.type,s=e.errorMessage,c=e.onChange,o=w();return a.a.createElement(I.a,{variant:"outlined",type:r,className:o.fullWidth,label:t,value:n,helperText:s,error:!!s&&0!==s.length,onChange:c})}var R=n(17),T=Object(p.a)({center:{textAlign:"center"},mgTop:{marginTop:"15px"},fullWidth:{width:"100%"}});var L=Object(E.b)((function(e){return{inputFields:e.auth.inputFields,errorMessages:e.auth.errorMessages}}),(function(e){return{userLogin:function(t){return e({type:"USER_LOGIN",payload:t})},setInputFields:function(t){return e({type:"SET_INPUT_FIELDS",payload:t})},resetIE:function(){return e({type:"RESET_IE"})}}}))((function(e){var t=e.userLogin,n=e.errorMessages,s=e.inputFields,c=e.setInputFields,o=e.resetIE,u=T(),l=Object(R.f)();Object(r.useEffect)((function(){var e=l.listen((function(e,t){o()}));return function(){e()}}),[l,o]);var p=Object(r.useState)(!0),E=Object(v.a)(p,2),g=E[0],f=E[1],h=function(){var e=Object(y.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(Object(O.a)(Object(O.a)({},s),{},{keep:g,history:l}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(i.a,{item:!0,container:!0,spacing:2,direction:"column",className:u.mgTop,xs:10,md:6},a.a.createElement(d.a,{className:u.center,variant:"h2"},"Login"),a.a.createElement(i.a,{item:!0},a.a.createElement(_,{label:"User Name",type:"text",value:s.username,onChange:function(e){c(Object(O.a)(Object(O.a)({},s),{},{username:e.target.value}))},errorMessage:n.username})),a.a.createElement(i.a,{item:!0},a.a.createElement(_,{label:"Password",type:"Password",value:s.password,onChange:function(e){c(Object(O.a)(Object(O.a)({},s),{},{password:e.target.value}))},errorMessage:n.password})),a.a.createElement(S.a,{error:!0},n.other),a.a.createElement(i.a,{item:!0},a.a.createElement(j.a,{control:a.a.createElement(x.a,{checked:g,onChange:function(){return f(!g)},name:"checkedB",color:"primary"}),label:"Keep Me Logged In"})),a.a.createElement(i.a,{item:!0},a.a.createElement(m.a,{className:u.fullWidth,size:"large",variant:"contained",color:"primary",onClick:h},"Login")),a.a.createElement(m.a,{onClick:function(){return l.push("/register")}}," Register "))}));var C=function(){return Object(r.useEffect)((function(){document.title="Login"}),[]),a.a.createElement(i.a,{container:!0,direction:"row",justify:"center"},a.a.createElement(f,null),a.a.createElement(i.a,{item:!0,xs:1,md:3}),a.a.createElement(L,null),a.a.createElement(i.a,{item:!0,xs:1,md:3}))},N=n(209),k=n(200),U=n(203),M=n(204),F=n(212),A=n(205),D=n(206);var G=function(e){var t=e.friends,n=e.setRead,s=e.selectedIndex,c=e.setSelectedIndex,o=e.scrollToBottom,u=e.showFriends,l=e.setShowFriends;Object(r.useLayoutEffect)((function(){function e(){f.current&&f.current.style.setProperty("height","".concat(document.getElementById("root").clientHeight-124,"px")),window.innerWidth>=600?g("block"):g(u?"block":"none")}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[u]),Object(r.useEffect)((function(){o(),t[s].unRead&&n(t,s)}),[s,t,o,n]);var m=Object(r.useState)("block"),p=Object(v.a)(m,2),E=p[0],g=p[1];Object(r.useEffect)((function(){window.innerWidth<600&&g(u?"block":"none")}),[u]);var f=Object(r.useRef)();return a.a.createElement(N.a,{component:i.a,item:!0,xs:12,sm:4,lg:3,xl:2,style:{display:E}},a.a.createElement(d.a,{variant:"h4"},"Friends"),a.a.createElement(k.a,{ref:f,id:"friends",style:{overflowY:"scroll"}},t.map((function(e,t){return a.a.createElement(U.a,{key:t,button:!0,selected:s===t,onClick:function(){return function(e){c(e),l(!1)}(t)}},a.a.createElement(M.a,null,a.a.createElement(F.a,{alt:e.username,src:"/static/images/avatar/".concat(t+1,".jpg")})),a.a.createElement(A.a,{primary:e.username}),e.unRead?a.a.createElement(D.a,{color:"secondary",variant:"dot"}):null)}))))},H=n(48),W=n(211),P=n(207),K=n(103),B=n.n(K),z=n(102),Y=n.n(z);var J,X=function(e){var t=e.message,n=e.setMessage,r=e.handleSendMessage;return a.a.createElement(i.a,{item:!0,container:!0},a.a.createElement(i.a,{item:!0,xs:8,sm:10},a.a.createElement(I.a,{variant:"outlined",type:"text",style:{width:"100%",marginLeft:"5px"},value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&r()}})),a.a.createElement(i.a,{item:!0,xs:4,sm:2},a.a.createElement(m.a,{style:{height:"100%",width:"80%",marginLeft:"10px"},variant:"text",onClick:r},"Send")))};var V=function(e){var t=e.friends,n=e.setFriends,s=e.setRead,c=e.selectedIndex,o=e.setSelectedIndex,u=e.user,l=e.receiveMessage,p=e.messageConfirmation,E=e.scrollToTop,g=e.showFriends,f=e.backToFriends,h=function(e){if(e.sender===u.username)p(e,s);else{l(e,E);var t=document.getElementById("notification");t.muted=!1,t.play(),t.muted=!1}},b=Object(r.useState)(""),O=Object(v.a)(b,2),y=O[0],S=O[1];Object(r.useEffect)((function(){return J=Y()("/",{forceNew:!0}),console.log("on"),J.on(u.username,h),function(){console.log("off"),J.off(u.username)}}),[u.username]),Object(r.useLayoutEffect)((function(){function e(){window.innerWidth>=600?(w("block"),_.current&&_.current.style.setProperty("height","".concat(document.getElementById("root").clientHeight-185,"px"))):(w(g?"none":"block"),_.current&&_.current.style.setProperty("height","".concat(document.getElementById("root").clientHeight-177,"px")))}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[g]);var j=Object(r.useState)("block"),x=Object(v.a)(j,2),I=x[0],w=x[1];Object(r.useEffect)((function(){window.innerWidth<600&&w(g?"none":"block")}),[g]);var _=Object(r.useRef)();return a.a.createElement(i.a,{item:!0,container:!0,direction:"column",xs:12,sm:8,lg:9,xl:10,style:{display:I}},a.a.createElement(i.a,{item:!0,container:!0,direction:"column",justify:"flex-end"},a.a.createElement(i.a,{item:!0,container:!0,alignItems:"center",style:{paddingLeft:"10px",paddingRight:"10px"}},a.a.createElement(i.a,{item:!0,sm:12,xs:10},a.a.createElement(d.a,{variant:"h4"},t.length>0&&t.length>c?t[c].username:"Messages")),a.a.createElement(i.a,{item:!0,xs:2},a.a.createElement(W.a,{smUp:!0},a.a.createElement(m.a,{size:"large",onClick:f},a.a.createElement(B.a,null))))),a.a.createElement(k.a,{id:"messages",ref:_,style:{overflowY:"scroll"}},t.length>0&&t.length>c?t[c].messages.map((function(e,t){return a.a.createElement(U.a,{style:{padding:0},key:t},e.pending?a.a.createElement(P.a,{size:25,variant:"indeterminate",style:{marginRight:"10px"}}):a.a.createElement("div",{style:{width:"35px",height:"25px"}}),a.a.createElement(A.a,null,"".concat(e.sender,": ").concat(e.message)))})):null)),a.a.createElement(X,{friends:t,selectedIndex:c,setSelectedIndex:o,user:u,socket:J,setFriends:n,message:y,setMessage:S,handleSendMessage:function(){if(y){S("");var e={receiver:t[c].username,message:y,pending:!0},r=Object(H.a)(t),a=t.findIndex((function(t){return t.username===e.receiver}));r[a].messages.push({sender:u.username,message:y,pending:!0});var s=r[a];r.splice(a,1),r.splice(0,0,s),J.emit("message",e),o(0),n(r)}}}))};function $(){var e=document.getElementById("messages");e&&(e.scrollTop=e.scrollHeight-e.clientHeight)}function q(){document.getElementById("friends").scroll({top:0,left:0,behavior:"smooth"})}var Q=Object(E.b)((function(e){return{user:e.auth.user,friends:e.chat.friends,selectedIndex:e.chat.selectedIndex}}),(function(e){return{setFriends:function(t){e({type:"SET_FRIENDS",payload:{friends:t}})},setRead:function(t,n){e({type:"SET_READ",payload:{friends:t,index:n}})},setSelectedIndex:function(t){e({type:"SET_SELECTED_INDEX",payload:{selectedIndex:t}})},messageConfirmation:function(t){e({type:"MESSAGE_CONFIRMATION",payload:{msg:t}})},receiveMessage:function(t,n){e({type:"RECEIVE_MESSAGE",payload:{msg:t,scrollToTop:n}})}}}))((function(e){var t=e.user,s=e.friends,c=e.setFriends,o=e.selectedIndex,u=e.setSelectedIndex,l=e.setRead,d=e.messageConfirmation,m=e.receiveMessage;Object(r.useLayoutEffect)((function(){function e(){p.current&&p.current.style.setProperty("height","".concat(document.getElementById("root").clientHeight-65,"px"))}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var p=Object(r.useRef)(),E=Object(r.useState)(!1),g=Object(v.a)(E,2),f=g[0],h=g[1];return a.a.createElement(i.a,{item:!0,container:!0,direction:"row",ref:p},a.a.createElement(G,{friends:s,setRead:l,selectedIndex:o,setSelectedIndex:u,scrollToBottom:$,showFriends:f,setShowFriends:h}),a.a.createElement(V,{user:t,friends:s,setFriends:c,setRead:l,selectedIndex:o,setSelectedIndex:u,messageConfirmation:d,receiveMessage:m,scrollToBottom:$,scrollToTop:q,showFriends:f,backToFriends:function(){h(!0)}}),a.a.createElement("audio",{id:"notification",src:n(164),muted:!0}))}));var Z=function(){return Object(r.useEffect)((function(){document.title="Chat"}),[]),a.a.createElement(i.a,{container:!0,direction:"column",wrap:"nowrap",style:{height:"100vh"},alignItems:"stretch"},a.a.createElement(i.a,{item:!0},a.a.createElement(f,{title:"Chat"})),a.a.createElement(Q,null))},ee=n(105),te=function(e){var t=e.component,n=e.condition,r=e.redirectTo,s=Object(ee.a)(e,["component","condition","redirectTo"]);return a.a.createElement(R.b,Object.assign({},s,{render:function(e){return n?a.a.createElement(t,Object.assign({},s,e)):a.a.createElement(R.a,{to:r})}}))},ne=Object(p.a)({center:{textAlign:"center"},mgTop:{marginTop:"15px"},fullWidth:{width:"100%"}});var re=Object(E.b)((function(e){return{inputFields:e.auth.inputFields,errorMessages:e.auth.errorMessages,userAvailable:e.auth.userAvailable}}),(function(e){return{userRegister:function(t){return e({type:"USER_REGISTER",payload:t})},checkUserName:function(t){e({type:"CHECK_USERNAME",payload:{username:t}})},setInputFields:function(t){return e({type:"SET_INPUT_FIELDS",payload:t})},resetIE:function(){return e({type:"RESET_IE"})}}}))((function(e){var t=e.checkUserName,n=e.userRegister,s=e.errorMessages,c=e.inputFields,o=e.setInputFields,u=e.resetIE,l=ne(),p=Object(R.f)();Object(r.useEffect)((function(){var e=p.listen((function(e,t){u()}));return function(){e()}}),[p,u]);var E=function(){var e=Object(y.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(Object(O.a)(Object(O.a)({},c),{},{history:p}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(i.a,{item:!0,container:!0,direction:"column",className:l.mgTop,xs:10,md:4,spacing:2},a.a.createElement(d.a,{className:l.center,variant:"h2"},"Register"),a.a.createElement(i.a,{item:!0},a.a.createElement(_,{label:"User Name",type:"text",value:c.username,onChange:function(e){o(Object(O.a)(Object(O.a)({},c),{},{username:e.target.value})),t(e.target.value)},errorMessage:s.username})),a.a.createElement(i.a,{item:!0},a.a.createElement(_,{label:"Password",type:"Password",value:c.password,onChange:function(e){return o(Object(O.a)(Object(O.a)({},c),{},{password:e.target.value}))},errorMessage:s.password})),a.a.createElement(i.a,{item:!0},a.a.createElement(m.a,{className:l.fullWidth,size:"large",variant:"contained",color:"primary",onClick:E,type:"submit"},"Register")),a.a.createElement(m.a,{onClick:function(){return p.push("/login")}}," Login "))}));var ae=function(){return Object(r.useEffect)((function(){document.title="Register"}),[]),a.a.createElement(i.a,{container:!0,direction:"row",justify:"center"},a.a.createElement(f,{title:"Register"}),a.a.createElement(i.a,{item:!0,xs:1,md:4}),a.a.createElement(re,null),a.a.createElement(i.a,{item:!0,xs:1,md:4}))};var se=Object(E.b)((function(e){return{loggedIn:e.auth.loggedIn,isLoading:e.auth.isLoading}}),(function(e){return{checkLogin:function(){return e({type:"CHECK_LOGIN"})}}}))((function(e){var t=e.checkLogin,n=e.loggedIn,s=e.isLoading;return Object(r.useEffect)((function(){t()}),[t]),s?"loading":a.a.createElement(o.a,null,a.a.createElement(te,{path:"/",exact:!0,component:Z,condition:n,redirectTo:"/login"}),a.a.createElement(te,{path:"/login",exact:!0,component:C,condition:!n,redirectTo:"/"}),a.a.createElement(te,{path:"/register",exact:!0,component:ae,condition:!n,redirectTo:"/"}),a.a.createElement(te,{path:"/chat",exact:!0,component:Z,condition:n,redirectTo:"/login"}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=n(26),oe={username:"",password:""},ie={username:"",password:"",other:""},ue={loggedIn:!1,user:{},isLoading:!0,inputFields:oe,errorMessages:ie},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_LOGIN_ASYNC":return Object(O.a)(Object(O.a)(Object(O.a)({},e),t.payload),{},{isLoading:!1});case"USER_LOGIN_SUCCESS":return Object(O.a)(Object(O.a)({},e),{},{isLoading:!1,loggedIn:!0,errorMessages:ie},t.payload);case"USER_LOGIN_FAILED":return Object(O.a)(Object(O.a)({},e),{},{isLoading:!1,loggedIn:!1,user:{}},t.payload);case"USER_REGISTER_SUCCESS":return Object(O.a)(Object(O.a)({},e),{},{errorMessages:ie,isLoading:!1,loggedIn:!1,user:{}});case"USER_REGISTER_FAILED":return Object(O.a)(Object(O.a)({},e),{},{isLoading:!1,loggedIn:!1,user:{}},t.payload);case"CHECK_USERNAME_SUCCESS":case"CHECK_USERNAME_FAILED":return Object(O.a)(Object(O.a)({},e),t.payload);case"SET_INPUT_FIELDS":return Object(O.a)(Object(O.a)({},e),{},{inputFields:t.payload});case"RESET_IE":return Object(O.a)(Object(O.a)({},e),{},{inputFields:oe,errorMessages:ie});case"USER_LOGOUT_ASYNC":return Object(O.a)(Object(O.a)({},e),{},{isLoading:!1,loggedIn:t.loggedIn,user:t.user,errorMessages:ie});case"SET_AUTH_LOADING":return Object(O.a)(Object(O.a)({},e),{},{isLoading:!0});default:return e}},de={friends:[],selectedIndex:0},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FRIENDS":case"SET_SELECTED_INDEX":return Object(O.a)(Object(O.a)({},e),t.payload);case"MESSAGE_CONFIRMATION":var n=Object(H.a)(e.friends),r=t.payload.msg,a=n.findIndex((function(e){return e.username===r.receiver})),s=n[a].messages.findIndex((function(e){return e.pending&&e.message===r.message}));return n[a].messages[s].pending=!1,Object(O.a)(Object(O.a)({},e),{},{friends:n});case"RECEIVE_MESSAGE":var c=Object(H.a)(e.friends),o=e.selectedIndex,i=t.payload,u=i.msg,l=i.scrollToTop,d=c.findIndex((function(e){return e.username===u.sender}));if(-1!==d){c[d].messages.push(u),d===o?(o=0,c[d].unRead=!0,l()):(c[d].unRead=!0,d>o&&o++);var m=c[d];return c.splice(d,1),c.splice(0,0,m),Object(O.a)(Object(O.a)({},e),{},{friends:c,selectedIndex:o})}return c.splice(0,0,{username:u.sender,messages:[u],unRead:!0}),o++,Object(O.a)(Object(O.a)({},e),{},{friends:c,selectedIndex:o});default:return e}},pe=Object(ce.c)({auth:le,chat:me}),Ee=n(14),ge=b.a.mark(ye),fe=b.a.mark(ve),he=b.a.mark(Se),be=b.a.mark(je),Oe=b.a.mark(xe);function ye(){var e,t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Ee.b)({type:"SET_AUTH_LOADING"});case 2:return n.next=4,Object(Ee.a)(Object(y.a)(b.a.mark((function t(){var n,r,a,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/auth/check/loggedin");case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,a=r.loggedIn,s={username:r.user.username},e=r.user.friends,t.abrupt("return",{type:"CHECK_LOGIN_ASYNC",payload:{loggedIn:a,user:s}});case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:return t.abrupt("return",{type:"CHECK_LOGIN_ASYNC"});case 17:case"end":return t.stop()}}),t,null,[[0,13]])}))));case 4:if(t=n.sent,!e){n.next=8;break}return n.next=8,Object(Ee.b)({type:"SET_FRIENDS",payload:{friends:e}});case 8:return n.next=10,Object(Ee.b)(t);case 10:case"end":return n.stop()}}),ge)}function ve(e){var t,n,r,a,s,c;return b.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,r=t.username,a=t.password,s=t.history,o.next=4,Object(Ee.b)({type:"SET_AUTH_LOADING"});case 4:return o.next=6,Object(Ee.a)(Object(y.a)(b.a.mark((function e(){var t,c,o,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,password:a})});case 3:t=e.sent,e.t0=t.status,e.next=200===e.t0?7:400===e.t0?14:500===e.t0?20:21;break;case 7:return s.push("/chat"),e.next=10,t.json();case 10:return c=e.sent,n=c.friends,c={username:c.username},e.abrupt("return",{type:"USER_LOGIN_SUCCESS",payload:{user:c}});case 14:return e.next=16,t.json();case 16:return o=e.sent,i={},0===o.index?i.username=o.message:i.password=o.message,e.abrupt("return",{type:"USER_LOGIN_FAILED",payload:{errorMessages:i}});case 20:return e.abrupt("return",{type:"USER_LOGIN_FAILED",payload:{errorMessages:{other:"There is a problem with the Server"}}});case 21:return e.abrupt("return",{type:"USER_LOGIN_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 22:e.next=27;break;case 24:e.prev=24,e.t1=e.catch(0),console.log(e.t1);case 27:return e.abrupt("return",{type:"USER_LOGIN_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 28:case"end":return e.stop()}}),e,null,[[0,24]])}))));case 6:if(c=o.sent,!n){o.next=10;break}return o.next=10,Object(Ee.b)({type:"SET_FRIENDS",payload:{friends:n}});case 10:return o.next=12,Object(Ee.b)(c);case 12:case"end":return o.stop()}}),fe)}function Se(e){var t,n;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(Ee.b)({type:"SET_AUTH_LOADING"});case 3:return r.next=5,Object(Ee.a)(Object(y.a)(b.a.mark((function e(){var n,r,a,s,c,o,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,a=t.history,e.prev=1,e.next=4,fetch("/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:r})});case 4:s=e.sent,e.t0=s.status,e.next=200===e.t0?8:400===e.t0?10:409===e.t0?16:500===e.t0?20:21;break;case 8:return a.push("/login"),e.abrupt("return",{type:"USER_REGISTER_SUCCESS"});case 10:return e.next=12,s.json();case 12:return c=e.sent,o={},0===c.index?o.username=c.message:o.password=c.message,e.abrupt("return",{type:"USER_REGISTER_FAILED",payload:{errorMessages:o}});case 16:return e.next=18,s.json();case 18:return i=e.sent,e.abrupt("return",{type:"USER_REGISTER_FAILED",payload:{errorMessages:{username:i}}});case 20:return e.abrupt("return",{type:"USER_REGISTER_FAILED",payload:{errorMessages:{other:"There is a problem with the Server"}}});case 21:return e.abrupt("return",{type:"USER_REGISTER_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 22:e.next=27;break;case 24:e.prev=24,e.t1=e.catch(1),console.log(e.t1);case 27:return e.abrupt("return",{type:"USER_REGISTER_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 28:case"end":return e.stop()}}),e,null,[[1,24]])}))));case 5:return n=r.sent,r.next=8,Object(Ee.b)(n);case 8:case"end":return r.stop()}}),he)}function je(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ee.b)({type:"USER_LOADING"});case 2:return t.next=4,Object(Ee.a)(Object(y.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={user:{},errorMessage:""},e.prev=1,e.next=4,fetch("/auth/logout");case 4:200===e.sent.status&&(t.loggedIn=!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Error: ".concat(e.t0)),t.loggedIn=!1;case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,null,[[1,8]])}))));case 4:return e=t.sent,t.next=7,Object(Ee.b)(Object(O.a)({type:"USER_LOGOUT_ASYNC"},e));case 7:case"end":return t.stop()}}),be)}function xe(e){var t,n;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(Ee.a)(Object(y.a)(b.a.mark((function e(){var n,r,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.username,e.next=4,fetch("/auth/check/username",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n})});case 4:r=e.sent,e.t0=r.status,e.next=200===e.t0?8:500===e.t0?14:15;break;case 8:return e.next=10,r.json();case 10:return a=e.sent,s={},s=a?{username:"",other:""}:{username:"User ".concat(n," Already exists")},e.abrupt("return",{type:"CHECK_USERNAME_SUCCESS",payload:{errorMessages:s}});case 14:return e.abrupt("return",{type:"CHECK_USERNAME_FAILED",payload:{errorMessage:{other:"There is a problem with the Server"}}});case 15:return e.abrupt("return",{type:"CHECK_USERNAME_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(0),console.log(e.t1);case 21:return e.abrupt("return",{type:"CHECK_USERNAME_FAILED",payload:{errorMessages:{other:"Something went Wrong"}}});case 22:case"end":return e.stop()}}),e,null,[[0,18]])}))));case 3:return n=r.sent,r.next=6,Object(Ee.b)(n);case 6:case"end":return r.stop()}}),Oe)}var Ie=b.a.mark(we);function we(e){var t,n,r,a,s;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.friends,r=t.index,a=Object(H.a)(n),c.next=5,Object(Ee.a)((function(){try{fetch("/chat/messageRead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({friendName:n[r].username})})}catch(e){console.log(e)}return a[r].unRead=!1,{type:"SET_FRIENDS",payload:{friends:a}}}));case 5:return s=c.sent,c.next=8,Object(Ee.b)(s);case 8:case"end":return c.stop()}}),Ie)}var _e=b.a.mark(Re);function Re(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ee.c)("CHECK_LOGIN",ye);case 2:return e.next=4,Object(Ee.c)("USER_REGISTER",Se);case 4:return e.next=6,Object(Ee.c)("USER_LOGIN",ve);case 6:return e.next=8,Object(Ee.c)("USER_LOGOUT",je);case 8:return e.next=10,Object(Ee.c)("CHECK_USERNAME",xe);case 10:return e.next=12,Object(Ee.c)("SET_READ",we);case 12:case"end":return e.stop()}}),_e)}var Te,Le,Ce=n(104),Ne=Object(Ce.a)();try{Te=Object(ce.d)(Object(ce.a)(Ne),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),Le=Object(ce.e)(pe,Te)}catch(ke){Le=Object(ce.e)(pe,Object(ce.a)(Ne)),console.log(ke)}Ne.run(Re),c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E.a,{store:Le},a.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.9a26f858.chunk.js.map