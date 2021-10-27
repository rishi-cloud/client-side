(this["webpackJsonpauth0-react-sample"]=this["webpackJsonpauth0-react-sample"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(54),o=n(55),r=n(1),i=n(2),s=n.n(i),c=n(56),l=n.n(c),d=n(7),u=n(8),b=n(57),p=s.a.createContext({}),m=function(e){var t=e.locale,n=Object(i.useState)(!1),a=Object(u.a)(n,2),o=a[0],s=a[1];console.log("configs",e);var c=new b.a.WebAuth({domain:e.config.auth0Domain,clientID:e.config.clientID,redirectUri:e.config.callbackURL,responseType:e.config.extraParams.response_type,scope:e.config.extraParams.scope,state:e.config.extraParams.state,nonce:e.config.extraParams.nonce,_csrf:e.config.extraParams._csrf,audience:e.config.extraParams.audience,overrides:{__tenant:e.config.auth0Tenant}});return Object(r.jsx)(p.Provider,{value:{webAuth:c,otpStart:function(e){return new Promise((function(t,n){var a={email:e,connection:"email",send:"code"};c.passwordlessStart(a,(function(e,a){e?(console.log(e),n(e)):t(a)}))}))},otpLogin:function(e,t){return new Promise((function(n,a){c.passwordlessLogin({email:e,connection:"email",verificationCode:t},(function(e,t){e?a(e):(window.origin=window.location.origin,n(t))}))}))},loginWithPassword:function(e,t){return new Promise((function(n,a){c.login({realm:"Username-Password-Authentication",username:e,password:t},(function(e,t){if(e)return console.log(e),void a(e);t&&(window.origin=window.location.origin,n(t))}))}))},SignupWithPassword:function(e,n){var a={lang:t};return new Promise((function(t,o){var r={connection:"Username-Password-Authentication",email:e,password:n,userMetadata:a};c.signup(r,(function(e,n){if(e)return console.log(e),void o(e);n&&(window.origin=window.location.origin,t(n))}))}))},AuthenticateUser:function(e){localStorage.setItem("auth_token",e),s(!0)},storeUserData:function(e){localStorage.setItem("userData",JSON.stringify(e))},isAuthenticated:o,getSocialLogin:function(e){return new Promise((function(t,n){c.authorize({connection:e},(function(e,a){e?(console.log(e),n(e)):t(a)}))}))}},children:e.children})},j=function(e){var t=Object(i.useContext)(p),n=t.isAuthenticated,a=t.storeUserData,o=t.AuthenticateUser,s=t.webAuth;return Object(i.useEffect)((function(){!function(){var t,n,r;window.location.hash&&s.parseHash({hash:window.location.hash,state:null===e||void 0===e||null===(t=e.config)||void 0===t?void 0:t.state,nonce:null===e||void 0===e||null===(n=e.config)||void 0===n||null===(r=n.extraParams)||void 0===r?void 0:r.nonce},(function(e,t){if(e)return console.log(e),void localStorage.clear();var n=t.idTokenPayload,r=n.email,i=n.name,s=n.picture,c=n.sub;a({email:r,name:i,picture:s,id:c}),o(t.idToken)}))}()}),[]),n?Object(r.jsx)(d.a,{to:"/dashboard"}):Object(r.jsx)("div",{children:"Loading...."})},g=s.a.createContext({}),h=function(e){var t=Object(i.useState)("login-page"),n=Object(u.a)(t,2),a=n[0],o=n[1];return Object(r.jsx)(g.Provider,{value:{whichPage:a,setWhichPage:o},children:e.children})},v=n(3),_=n(16),O=n(13),f=n.n(O),w=n(21);function x(e){var t=Object(i.useContext)(p),n=t.loginWithPassword,a=t.otpLogin,o=t.otpStart,r=t.getSocialLogin,c=Object(i.useState)({email:"",password:"",otp:"",otpAvailable:!1,isSubmitting:!1}),l=Object(u.a)(c,2),d=l[0],b=l[1],m=Object(i.useState)({email:"",isEmailError:"",databaseError:"",errorCode:""}),j=Object(u.a)(m,2),g=j[0],h=j[1],O=Object(i.useState)(!1),x=Object(u.a)(O,2),y=x[0],C=x[1],S=Object(i.useState)(!1),L=Object(u.a)(S,2),P=L[0],N=L[1],k=function(){var e=Object(w.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),A=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},E=function(){var e=Object(w.a)(f.a.mark((function e(t){var r,i,s,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(Object(v.a)(Object(v.a)({},d),{},{isSubmitting:!0})),t.preventDefault(),y){e.next=18;break}return e.prev=3,e.next=6,n(d.email,d.password);case 6:h(Object(v.a)(Object(v.a)({},g),{},{databaseError:""})),b(Object(v.a)(Object(v.a)({},d),{},{isSubmitting:!1})),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(3),console.log("ankit ",null===e.t0||void 0===e.t0?void 0:e.t0.code,null===e.t0||void 0===e.t0?void 0:e.t0.message),console.log(e.t0,null!==(r=null===e.t0||void 0===e.t0?void 0:e.t0.code)&&void 0!==r?r:null===e.t0||void 0===e.t0?void 0:e.t0.code),b(Object(v.a)(Object(v.a)({},d),{},{isSubmitting:!1})),h(Object(v.a)(Object(v.a)({},g),{},{databaseError:null===e.t0||void 0===e.t0?void 0:e.t0.description,errorCode:null!==(i=null===e.t0||void 0===e.t0?void 0:e.t0.code)&&void 0!==i?i:e.t0.message}));case 16:e.next=36;break;case 18:if(e.prev=18,!d.otpAvailable){e.next=25;break}return e.next=22,a(d.email,d.otp);case 22:b(Object(v.a)(Object(v.a)({},d),{},{isSubmitting:!1})),e.next=29;break;case 25:return e.next=27,o(d.email);case 27:b(Object(v.a)(Object(v.a)({},d),{},{isSubmitting:!1})),b(Object(v.a)(Object(v.a)({},d),{},{otpAvailable:!0}));case 29:e.next=36;break;case 31:e.prev=31,e.t1=e.catch(18),console.log(e.t1,null!==(s=null===e.t1||void 0===e.t1?void 0:e.t1.code)&&void 0!==s?s:null===e.t1||void 0===e.t1?void 0:e.t1.code),b(Object(v.a)(Object(v.a)({},d),{},{isSubmitting:!1})),h(Object(v.a)(Object(v.a)({},g),{},{databaseError:null===e.t1||void 0===e.t1?void 0:e.t1.description,errorCode:null!==(c=null===e.t1||void 0===e.t1?void 0:e.t1.code)&&void 0!==c?c:null===e.t1||void 0===e.t1?void 0:e.t1.message}));case 36:case"end":return e.stop()}}),e,null,[[3,10],[18,31]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(w.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!y),e.next=4,o(d.email);case 4:b(Object(v.a)(Object(v.a)({},d),{},{otpAvailable:!0})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),h(Object(v.a)(Object(v.a)({},g),{},{databaseError:null===e.t0||void 0===e.t0?void 0:e.t0.description,errorCode:null!==(t=null===e.t0||void 0===e.t0?void 0:e.t0.code)&&void 0!==t?t:null===e.t0||void 0===e.t0?void 0:e.t0.message}));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),R=s.a.Children.only(e.children);return s.a.cloneElement(R,Object(v.a)(Object(v.a)({},e),{},{onChange:function(e){b(Object(v.a)(Object(v.a)({},d),{},Object(_.a)({},e.target.name,e.target.value))),function(e){switch(e.target.name){case"email":e.target.value?e.target.value&&!A(e.target.value)?h(Object(v.a)(Object(v.a)({},g),{},Object(_.a)({isEmailError:!0},e.target.name,"Email is not valid"))):h(Object(v.a)(Object(v.a)({},g),{},Object(_.a)({isEmailError:!1},e.target.name,""))):h(Object(v.a)(Object(v.a)({},g),{},Object(_.a)({isEmailError:!0},e.target.name,"Email is required")))}}(e)},onToggle:function(){C(!y),h(Object(v.a)(Object(v.a)({},g),{},{email:"",databaseError:"",errorCode:""}))},switchLogin:y,onSubmit:E,LoginForm:d,LoginError:g,Continue:P,validateEmail:A,onPressContinue:function(){N(!0)},getOtp:I,socialBtn:k}))}n(44);var y=n(104),C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.jsx)(y.a,{id:e,values:Object(v.a)({},t)})},S=n(22),L=n(23),P=function(e){var t=e.onChange,n=e.switchLogin,a=e.onSubmit,o=e.LoginError,i=e.LoginForm,s=e.onToggle,c=e.validateEmail,l=function(){var e=Object(w.a)(f.a.mark((function e(t){var n,a,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=window.utag_data,a=window.utag,(o=Object(v.a)({},n)).tm_global_tealium_calltype="manual",o.tm_global_navigation_element=t,o.tm_global_navigation_element_click="true",a.link(o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(C("emailAddress")),Object(r.jsxs)("div",{className:"LoginWrapperContainer",children:[Object(r.jsxs)("form",{className:"LoginInputWrapper",children:[Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"LoginInputContainer",children:[""!==i.email?Object(r.jsx)("div",{className:"LoginInputLabel",children:C("emailAddress")}):null,Object(r.jsxs)("div",{style:{flex:1,display:"flex",border:!0===o.isEmailError?"2px solid red":!1===o.isEmailError?"2px solid green":"",backgroundColor:"#ffff",borderRadius:"1rem"},children:[Object(r.jsx)(S.b,{className:"LoginInputLogo"}),Object(r.jsx)("input",{type:"email",id:"email",name:"email",value:i.email,placeholder:"Email",className:"LoginInput",onChange:t})]})]})}),o.email&&Object(r.jsx)("div",{className:"Error",children:o.email}),!n&&Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"LoginInputContainer",children:[""!==i.password?Object(r.jsx)("div",{className:"LoginInputLabel",children:C("password")}):null,Object(r.jsxs)("div",{style:{display:"flex",borderRadius:"1rem",backgroundColor:"#ffff"},children:[Object(r.jsx)(L.a,{className:"LoginInputLogo"}),Object(r.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Password",className:"LoginInput",onChange:t})]})]})}),n&&i.otpAvailable&&Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"LoginInputContainer",children:[Object(r.jsx)("div",{className:"LoginInputLabel",children:C("one_time_passcode")}),Object(r.jsx)("input",{id:"otp",name:"otp",className:"LoginInput",onChange:t})]})}),Object(r.jsx)("button",{className:"RequestOtp",onClick:function(e){return a(e)&&l("continue-auth0")},disabled:!c(i.email)||i.isSubmitting,style:{backgroundColor:!c(i.email)||i.isSubmitting?"gray":"",cursor:i.isSubmitting?"progress":"pointer"},children:n?i.otpAvailable?Object(r.jsx)("div",{children:C("signIn")}):Object(r.jsx)("div",{children:C("Request_one_time_passcode")}):Object(r.jsx)("div",{children:C("signIn")})})]}),o.errorCode&&Object(r.jsx)("div",{className:"Error",children:C(o.errorCode)}),Object(r.jsxs)("div",{className:"SwitchContainer",children:[Object(r.jsx)("div",{className:"Switch",children:C("or")}),!n&&Object(r.jsx)("button",{className:"SwitchBtn",onClick:s,children:Object(r.jsx)("div",{children:C("Sign_in_with_a_onetime_passcode")})}),n&&Object(r.jsx)("button",{className:"SwitchBtn",onClick:s,children:Object(r.jsx)("div",{children:C("signIn_with_password")})})]})]})},N=function(e){var t=e.onChange,n=e.switchLogin,a=e.onToggle,o=e.onSubmit,s=e.LoginError,c=e.LoginForm,l=e.validateEmail,d=e.Continue,u=e.onPressContinue,b=e.getOtp,p=e.socialBtn,m=Object(i.useContext)(g).setWhichPage;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"LoginContainer",children:[Object(r.jsx)("div",{className:"LoginLeftWrapper",children:Object(r.jsxs)("div",{className:"LoginWelcomeContainer",children:[Object(r.jsx)("img",{alt:"McAfeeLogo",className:"LoginPageLogo",src:"https://cdn.jsdelivr.net/gh/atulrana007/McAfee-React-Appp/public/images/McAfee-Logo.png"}),Object(r.jsxs)("div",{className:"LoginIntro",children:[C("Welcome_back_to")," McAfee !"]}),Object(r.jsx)("div",{className:"LoginIntroSubHeading",children:C("choose_your_signIn_method_continue")}),Object(r.jsxs)("div",{className:"LoginBottomHeading",children:[Object(r.jsx)("div",{children:C("Do_not_have_an_account")}),Object(r.jsx)("div",{className:"Login-page-link",onClick:function(){m("signup-page")},children:C("Create_one_now")})]})]})}),Object(r.jsx)("div",{className:"LoginRightWrapper",children:Object(r.jsx)(P,{LoginError:s,onChange:t,switchLogin:n,onSubmit:o,LoginForm:c,onToggle:a,onPressContinue:u,Continue:d,getOtp:b,validateEmail:l,socialBtn:p})})]})})},k=function(e){return Object(i.useEffect)((function(){var e=window.utag_data;window.utag.view(Object(v.a)(Object(v.a)({},e),{},{tm_global_pagename:"Login-React"}))}),[]),Object(r.jsx)(x,Object(v.a)(Object(v.a)({},e),{},{children:Object(r.jsx)(N,{})}))},A=n(58),E=n(59),I=n.n(E),R=s.a.createContext({}),q=function(e){var t=Object(i.useState)([]),n=Object(u.a)(t,2),a=n[0],o=n[1];return Object(i.useEffect)((function(){(function(){var t=Object(w.a)(f.a.mark((function t(){var n,a,r,i,s,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("https://".concat(e.config.auth0Domain,"/client/").concat(e.config.clientID,".js"));case 2:n=t.sent,"string"===typeof(a=n.data)&&(i=a.slice(16,-2),s=JSON.parse(i),c=null===s||void 0===s||null===(r=s.strategies[0])||void 0===r?void 0:r.connections.filter((function(e){return"Username-Password-Authentication"===e.name})),console.log("DB ARRAY RECIVED",c),o(c));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(r.jsx)(R.Provider,{value:{connections:a},children:e.children})},W=n(27),M=n.n(W),D=n(96).charsets,z=function(e,t,n,a,o){var r,i,s=Object(v.a)({},n),c=new M.a({contains:{expressions:[D.upperCase,D.lowerCase,D.numbers]}}),l="none"!==e.passwordPolicy?(i=null===e||void 0===e||null===(r=e.password_complexity_options)||void 0===r?void 0:r.min_length,new M.a({length:{minLength:i}})):null;new M.a({contains:{expressions:[D.specialCharacters]}}),new M.a({identicalChars:{max:2}});o(!0),""!==t?s.Non_empty_Password_Required=!0:(o(!1),s.Non_empty_Password_Required=!1),l.check(t)?s.Length_Check=!0:(o(!1),s.Length_Check=!1),c.check(t)?s.Lower_case_Upper_Case_Numbers=!0:(o(!1),s.Lower_case_Upper_Case_Numbers=!1),console.log(s),a(s)};function U(e){var t=Object(i.useContext)(p),n=t.SignupWithPassword,a=t.loginWithPassword,o=Object(i.useContext)(R).connections,r=Object(i.useContext)(g).setWhichPage,c=Object(i.useState)(!1),l=Object(u.a)(c,2),d=l[0],b=l[1],m=Object(i.useState)(!1),j=Object(u.a)(m,2),h=j[0],O=j[1],x=Object(i.useState)(null),y=Object(u.a)(x,2),C=y[0],S=y[1],L=Object(i.useState)({email:"",password:"",confirmPassword:"",isSubmitting:!1}),P=Object(u.a)(L,2),N=P[0],k=P[1],E=Object(i.useState)({No_more_than_2_identical_characters_in_a_row:!1,Special_characters:!1,Lower_case_Upper_Case_Numbers:!1,Length_Check:!1,Non_empty_Password_Required:!1}),I=Object(u.a)(E,2),q=I[0],W=I[1],M=Object(i.useState)({email:"",isEmailError:"",databaseError:"",errorCode:""}),D=Object(u.a)(M,2),U=D[0],B=D[1],F=Object(i.useCallback)(Object(A.debounce)((function(){k(Object(v.a)(Object(v.a)({},N),{},{isSubmitting:!1})),O(!1)}),2e3),[]),T=function(){var e=Object(w.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),k(Object(v.a)(Object(v.a)({},N),{},{isSubmitting:!0})),b(!0),e.prev=3,e.next=6,n(N.email,N.password);case 6:if(!e.sent.email){e.next=10;break}return e.next=10,a(N.email,N.password);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),"invalid_signup"===e.t0.code?r("login-page"):B(Object(v.a)(Object(v.a)({},U),{},{databaseError:e.t0.description,errorCode:e.t0.code}));case 15:b(!1),F();case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),V=s.a.Children.only(e.children);return s.a.cloneElement(V,{onSubmit:T,SignupForm:N,onChange:function(e){"password"===e.target.name&&C&&z(C,e.target.value,q,W,O),k(Object(v.a)(Object(v.a)({},N),{},Object(_.a)({},e.target.name,e.target.value)))},onClick:function(e){S(o[0])},passwordRules:C,PasswordPolicyState:q,isValid:h,SignupError:U,loader:d})}n(53);var B=function(e){var t=e.count;return{No_more_than_2_identical_characters_in_a_row:"No more than 2 identical characters in a row",Special_characters:"Special characters (!@#$%^&*)",Lower_case_Upper_Case_Numbers:"Lower case (a-z), upper case (A-Z) and numbers (0-9)",Length_Check:"Must have ".concat(t," characters in length"),Non_empty_Password_Required:"Non-empty Password Required"}},F=n(60);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var H=i.createElement("path",{d:"M12 22.7812C17.5228 22.7812 22 18.3041 22 12.7812C22 7.2584 17.5228 2.78125 12 2.78125C6.47715 2.78125 2 7.2584 2 12.7812C2 18.3041 6.47715 22.7812 12 22.7812ZM17.7241 9.47091L10.3333 17.2312L6.27586 12.9709L7.72414 11.5916L10.3333 14.3312L16.2759 8.09159L17.7241 9.47091Z",fill:"#0CA77D"});function Z(e,t){var n=e.title,a=e.titleId,o=V(e,["title","titleId"]);return i.createElement("svg",T({width:24,height:25,viewBox:"0 0 24 25",fill:"none",ref:t,"aria-labelledby":a},o),n?i.createElement("title",{id:a},n):null,H)}var J=i.forwardRef(Z),G=(n.p,function(e){var t=e.onSubmit,n=e.SignupForm,a=e.onChange,o=e.passwordRules,s=e.PasswordPolicyState,c=e.onClick,l=e.isValid,d=e.SignupError,b=Object(i.useState)(!1),p=Object(u.a)(b,2),m=p[0],j=p[1],g=Object(i.useState)(!1),h=Object(u.a)(g,2),v=h[0],_=h[1],O=function(e,t){var n,a=[],o=[],r=e&&B({count:null===e||void 0===e||null===(n=e.password_complexity_options)||void 0===n?void 0:n.min_length});if("excellent"===(null===e||void 0===e?void 0:e.passwordPolicy))for(var i=0,s=Object.keys(t);i<s.length;i++){var c=s[i];o.push(c),a.push(r[c])}else if("good"===(null===e||void 0===e?void 0:e.passwordPolicy))for(var l=0,d=Object.keys(t);l<d.length;l++){var u=d[l];"Non_empty_Password_Required"!==u&&"Lower_case_Upper_Case_Numbers"!==u&&"Length_Check"!==u&&"Special_characters"!==u||(o.push(u),a.push(r[u]))}else if("fair"===(null===e||void 0===e?void 0:e.passwordPolicy))for(var b=0,p=Object.keys(t);b<p.length;b++){var m=p[b];"Non_empty_Password_Required"!==m&&"Lower_case_Upper_Case_Numbers"!==m&&"Length_Check"!==m||(o.push(m),a.push(r[m]))}else if("low"===(null===e||void 0===e?void 0:e.passwordPolicy))for(var j=0,g=Object.keys(t);j<g.length;j++){var h=g[j];"Non_empty_Password_Required"!==h&&"Length_Check"!==h||(o.push(h),a.push(r[h]))}else if(null===(null===e||void 0===e?void 0:e.passwordPolicy))for(var v=0,_=Object.keys(t);v<_.length;v++){var O=_[v];"Non_empty_Password_Required"===O&&(o.push(O),a.push(r[O]))}return{getKeys:o,displayablerule:a}}(o,s),f=O.getKeys,w=O.displayablerule;return Object(r.jsx)("div",{className:"formWrapper",children:Object(r.jsx)("form",{className:"InputWrapper",children:Object(r.jsxs)(r.Fragment,{children:[""!==n.email?Object(r.jsx)("div",{className:"InputLabel",children:C("emailAddress")}):null,Object(r.jsxs)("div",{className:"InputAndLogoSignup",children:[Object(r.jsx)(S.b,{style:{height:"2rem",width:"2rem",marginTop:"0.5rem",color:"rgb(175, 174, 174)"}}),Object(r.jsx)("input",{type:"email",id:"email",name:"email",value:n.email,placeholder:"Email",className:"Input",onChange:a})]}),Object(r.jsxs)("div",{children:[""!==n.password?Object(r.jsx)("div",{className:"InputLabelPass",style:{color:l?"#0CA77D":"rgb(175, 174, 174)"},children:C("password")}):null,Object(r.jsxs)("div",{className:"InputAndLogoSignup",style:{border:"1px solid ".concat(l?"#0CA77D":"RGB(212, 213, 219)")},children:[Object(r.jsx)(L.a,{style:{height:"2rem",width:"2rem",marginTop:"0.5rem",color:"rgb(175, 174, 174)"}}),Object(r.jsx)("input",{type:m?"text":"password",id:"password",name:"password",value:n.password,placeholder:"Password",className:"Input",onChange:a,onFocus:function(){c(),_(!0)},onBlur:function(){return _(!1)}}),Object(r.jsx)(S.a,{style:{height:"2rem",width:"2rem",marginTop:"0.5rem",color:"rgb(175, 174, 174)",cursor:"pointer"},onClick:function(){j(!m)}}),l?Object(r.jsx)(J,{style:{height:"2rem",width:"2rem",marginTop:"0.5rem"}}):null]})]}),Object(r.jsx)("div",{children:v?Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"Password-rules",children:w.map((function(e,t){return Object(r.jsxs)("div",{className:"Rule",children:[" ",Object(r.jsx)("div",{className:"checkbox",children:s[f[t]]?Object(r.jsx)(F.a,{className:"tick"}):Object(r.jsx)(L.b,{className:"cancel"})}),e]})}))})}):null}),Object(r.jsxs)("div",{children:[""!==n.confirmPassword?Object(r.jsx)("div",{className:"InputLabelCPass",style:{color:n.password===n.confirmPassword&&""!==n.confirmPassword?"#0CA77D":"rgb(175, 174, 174)"},children:C("confirm_password")}):null,Object(r.jsxs)("div",{className:"InputAndLogoSignup",style:{border:"1px solid ".concat(n.password===n.confirmPassword&&""!==n.confirmPassword?"#0CA77D":"RGB(212, 213, 219)")},children:[Object(r.jsx)(L.a,{style:{height:"2rem",width:"2rem",marginTop:"0.5rem",color:"rgb(175, 174, 174)"}}),Object(r.jsx)("input",{type:m?"text":"password",id:"confirmPassword",name:"confirmPassword",value:n.confirmPassword,placeholder:"Confirm Password",className:"Input",onChange:a,onBlur:function(){return _(!1)}}),Object(r.jsx)(S.a,{style:{height:"2rem",width:"2rem",marginTop:"0.7rem",color:"rgb(175, 174, 174)",cursor:"pointer"},onClick:function(){j(!m)}}),n.password===n.confirmPassword&&""!==n.confirmPassword?Object(r.jsx)(J,{style:{height:"2rem",width:"2rem",marginTop:"0.5rem"}}):null]})]}),d.errorCode&&Object(r.jsx)("div",{className:"Error",children:C(d.errorCode)}),Object(r.jsx)("div",{className:"PolicyLink",children:Object(r.jsxs)("p",{children:[" ","By clicking"," ",Object(r.jsx)("span",{style:{fontWeight:"bold"},children:"Create my account"}),", you accept",Object(r.jsxs)("span",{style:{color:"rgb(66, 88, 255)"},children:["McAfee\u2019s License ",Object(r.jsx)("br",{}),"Agreement"]})," ","and",Object(r.jsx)("span",{style:{color:"rgb(66, 88, 255)"},children:" Privacy Notice"})]})}),Object(r.jsx)("button",{className:""!==n.email&&""!==n.password&&""!==n.confirmPassword&&l?"SubmitButtonActive":"SubmitButton",onClick:t,disabled:n.isSubmitting,children:Object(r.jsx)("div",{children:C("Create_My_Account")})})]})})})});n(97);var K=function(){return Object(r.jsxs)("div",{class:"lds-ring",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},Y=function(e){var t=e.onSubmit,n=e.SignupForm,a=e.onChange,o=e.onClick,s=e.passwordRules,c=e.PasswordPolicyState,l=e.isValid,d=e.SignupError,u=e.loader,b=Object(i.useContext)(g).setWhichPage;return Object(r.jsx)(r.Fragment,{children:u?Object(r.jsxs)("div",{className:"loaderWrapper",children:[Object(r.jsx)("div",{className:"loaderLogo",children:Object(r.jsx)("img",{alt:"McAfeeLogo",className:"Logo",src:"https://cdn.jsdelivr.net/gh/atulrana007/McAfee-React-Appp/public/images/McAfee-Logo.png"})}),Object(r.jsxs)("div",{className:"loader-creating-your-account",children:[Object(r.jsx)("img",{alt:"McAfeeLogo",className:"loading-logo",src:"https://cdn.jsdelivr.net/gh/atulrana007/McAfee-React-Appp/public/images/McAfee-Document-Logo.png"}),Object(r.jsxs)("div",{className:"loading-text",children:[C("Creating your account"),"..."]}),Object(r.jsx)(K,{})]})]}):Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"SignupWrapper",children:[Object(r.jsxs)("div",{className:"leftContainer",children:[Object(r.jsx)("img",{alt:"McAfeeLogo",className:"Logo",src:"https://cdn.jsdelivr.net/gh/atulrana007/McAfee-React-Appp/public/images/McAfee-Logo.png"}),Object(r.jsx)("div",{className:"Intro",children:C("Create_your_McAfee_account")}),Object(r.jsx)("div",{className:"IntroSubHeading",children:Object(r.jsx)("div",{className:"Points",children:C("Enter_your_email_address_set_password_and_well_get_your_account_created")})}),Object(r.jsxs)("div",{className:"BottomHeadingSignUp",children:[C("Already_have_a_account"),Object(r.jsx)("p",{className:"page-link",onClick:function(){b("login-page")},children:"Login"})]})]}),Object(r.jsx)("div",{className:"RightContainer",children:Object(r.jsx)(G,{onChange:a,onSubmit:t,SignupForm:n,onClick:o,passwordRules:s,PasswordPolicyState:c,isValid:l,SignupError:d})})]})})})},$=function(e){return Object(r.jsx)(U,Object(v.a)(Object(v.a)({},e),{},{children:Object(r.jsx)(Y,{})}))};var Q=function(){var e=Object(i.useContext)(g),t=e.whichPage,n=e.setWhichPage;return Object(r.jsx)("div",{children:"signup-page"===t?Object(r.jsx)($,{setWhichPage:n}):Object(r.jsx)(k,{setWhichPage:n})})},X=n(103),ee="en-us",te="fr-ca",ne=Object(_.a)({},ee,{Welcome_back_to:"Welcome back to",emailAddress:"Email Address",password:"Password",signIn:"Sign in",choose_your_signIn_method_continue:"Choose your sign in method to continue",Enter_your_email_address_so_we_can_find_your_account:"Enter your email address so we can find your account.",or:"or",signIn_with_password:"Sign in with password",one_time_passcode:"one-time passcode",Sign_in_with_a_onetime_passcode:"Sign in with one-time passcode",continue:"continue",access_denied:"Wrong email or password.",too_many_attempts:" Your account has been blocked after multiple consecutive login attempts. We\u2019ve sent you an email with instructions on how to unblock it.",Welcome_to_dashboard:"Welcome to Dashboard",Create_your_McAfee_account:"Create your McAfee account",Create_one_now:"Create one now",invalid_request:" Invalid request body. All and only of client_id, credential_type, username, otp, realm are required.",unauthorized_client:"Cross origin login not allowed.",unsupported_credential_type:" Unknown credential type parameter.",blocked_user:"blocked user",password_leaked:"This login attempt has been blocked because the password you're using was previously disclosed through a data breach ",or_Signin_with:"or Sign in with:",Do_not_have_an_account:"Don't have an Account ?",invalid_user_password:"Wrong credentials.",invalid_captcha:"Solve the challenge question to verify you are not a robot.",invalid_recaptcha:"Select the checkbox to verify you are not a robot.",Enter_your_email_address_set_password_and_well_get_your_account_created:"Enter your email address, set a password and we'll get your account created.",Already_have_a_account:"Already have a account ?",confirm_password:"Confirm Password",Request_one_time_passcode:"Request one-time passcode",Create_My_Account:"Create My Account"}),ae=Object(_.a)({},te,{Welcome_back_to:"Bon retour \xe0",emailAddress:"Adresse e-mail",password:"le mot de passe",signIn:"s'identifier",choose_your_signIn_method_continue:"Choisissez votre m\xe9thode de connexion pour continuer",Enter_your_email_address_so_we_can_find_your_account:"Entrez votre adresse e-mail afin que nous puissions trouver votre compte.",Sign_in_with_a_onetime_passcode:"Connectez-vous avec un code d'acc\xe8s \xe0 usage unique",or:"ou",signIn_with_password:"se connecter avec mot de passe",one_time_passcode:"code d'acc\xe8s \xe0 usage unique",continue:"Continuez",access_denied:"Mauvaise adresse de messagerie ou mot de passe.",too_many_attempts:"Votre compte a \xe9t\xe9 bloqu\xe9 apr\xe8s plusieurs tentatives de connexion cons\xe9cutives. Nous vous avons envoy\xe9 un e-mail avec des instructions sur la fa\xe7on de le d\xe9bloquer",Welcome_to_dashboard:"bienvenue au tableau de bord",Create_your_McAfee_account:"Cr\xe9ez votre compte McAfee",Create_one_now:"Cr\xe9ez-en un maintenant",invalid_request:"Corps de requ\xeate non valide. Tous et uniquement client_id, type d'identification, nom d'utilisateur, otp, domaine sont requis",unauthorized_client:"Connexion d'origine crois\xe9e non autoris\xe9e.",unsupported_credential_typ:"Param\xe8tre de type d'identifiant inconnu.",blocked_user:"utilisateur bloqu\xe9",password_leaked:"Cette tentative de connexion a \xe9t\xe9 bloqu\xe9e car le mot de passe que vous utilisez a d\xe9j\xe0 \xe9t\xe9 divulgu\xe9 suite \xe0 une violation de donn\xe9es",or_Signin_with:"Ou connectez-vous avec :",Do_not_have_an_account:"Vous n'avez pas de compte ?",invalid_user_password:"Mauvais identifiants.",invalid_captcha:"R\xc3\xa9solvez la question du d\xc3\xa9fi pour v\xc3\xa9rifier que vous n'\xc3\xaates pas un robot.",invalid_recaptcha:"Cochez la case pour v\xc3\xa9rifier que vous n'\xc3\xaates pas un robot.",Enter_your_email_address_set_password_and_well_get_your_account_created:"Entrez votre adresse e-mail, d\xe9finissez un mot de passe et nous cr\xe9erons votre compte.",Already_have_a_account:"Vous avez d\xe9j\xe0 un compte ?",confirm_password:"Confirmez le mot de passe",Request_one_time_passcode:"Demander un mot de passe \xe0 usage unique",Create_My_Account:"Cr\xe9er mon compte"}),oe=Object(v.a)(Object(v.a)({},ne),ae),re=function(e){var t=e.children,n=e.locale;return Object(r.jsx)(X.a,{textComponent:i.Fragment,locale:n,messages:oe[n],children:t})};n(98);var ie=function(e){var t,n,a=e.pageConfig,o=new URLSearchParams(window.location.hash.substr(1)),s=new URLSearchParams(Object(d.g)().search),c=Object(i.useRef)(""),l=null!==(t=s.get("culture"))&&void 0!==t?t:o.get("culture");return null===l?n=null===localStorage.getItem("lang")?"en-us":localStorage.getItem("lang"):(n=l,localStorage.setItem("lang",n)),c.current="en-us"===n?ee:"fr-ca"===n?te:"en-us",Object(r.jsx)(q,{config:a,children:Object(r.jsx)(h,{children:Object(r.jsx)(re,{locale:c.current,children:Object(r.jsx)(m,{config:a,locale:c.current,children:Object(r.jsx)("div",{id:"app",className:"d-flex flex-column h-100",children:Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"/login",exact:!0,component:function(){return Object(r.jsx)(Q,{})}}),Object(r.jsx)(d.b,{exact:!0,path:"/authorize",children:Object(r.jsx)(j,{config:a})})]})})})})})})},se=(n(99),n(34));window.LoginWidget=function(){function e(){Object(a.a)(this,e)}return Object(o.a)(e,[{key:"init",value:function(e){var t=e.pageConfig;if(!t)throw new Error("pageConfig must be provided in opts");l.a.render(Object(r.jsx)(se.a,{children:Object(r.jsx)(ie,{pageConfig:t})}),document.getElementById("root"))}}]),e}()},44:function(e,t,n){},53:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.8beb2af6.chunk.js.map