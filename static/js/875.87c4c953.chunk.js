"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[875],{443:(e,s,t)=>{t.d(s,{Z:()=>u});t(2791);var a=t(4846),n=t(4546),r=t(1698),l=t(3899),o=t(1517),i=t(9909),c=t(3570),d=t(4479),h=t(2937),m=t(184);const u={admin_role:[{component:h.fd,name:"ADMNISTRATION"},{component:h.U6,name:"Dashboard",to:"/",icon:(0,m.jsx)(a.Z,{icon:n.V,customClassName:"nav-icon"})},{component:h.U6,name:"Subject",to:"/subject",icon:(0,m.jsx)(a.Z,{icon:r.E,customClassName:"nav-icon"})},{component:h.U6,name:"Teachers",to:"/manage-teachers",icon:(0,m.jsx)(a.Z,{icon:l.J,customClassName:"nav-icon"})},{component:h.U6,name:"Add Student",to:"/addstudent",icon:(0,m.jsx)(a.Z,{icon:o.g,customClassName:"nav-icon"})},{component:h.U6,name:"Timetable",to:"/timetable",icon:(0,m.jsx)(a.Z,{icon:i.J,customClassName:"nav-icon"})},{component:h.U6,name:"Attendance History",to:"/attendance-history",icon:(0,m.jsx)(a.Z,{icon:i.J,customClassName:"nav-icon"})},{component:h.U6,name:"Logout",to:"/logout",icon:(0,m.jsx)(a.Z,{icon:c.V,customClassName:"nav-icon"})}],teacher_role:[{component:h.U6,name:"Dashboard",to:"/teacher/dashboard",icon:(0,m.jsx)(a.Z,{icon:n.V,customClassName:"nav-icon"})},{component:h.U6,name:"LectureHistory",to:"/teacher/lectures/history",icon:(0,m.jsx)(a.Z,{icon:d.$,customClassName:"nav-icon"})},{component:h.U6,name:"Additional Features",to:"/teacher/lectures/additional-features",icon:(0,m.jsx)(a.Z,{icon:d.$,customClassName:"nav-icon"})},{component:h.U6,name:"Logout",to:"/logout",icon:(0,m.jsx)(a.Z,{icon:c.V,customClassName:"nav-icon"})}],student_role:[{component:h.U6,name:"Dashboard",to:"/studentdashboard",icon:(0,m.jsx)(a.Z,{icon:n.V,customClassName:"nav-icon"})},{component:h.U6,name:"Logout",to:"/logout",icon:(0,m.jsx)(a.Z,{icon:c.V,customClassName:"nav-icon"})}]}},2958:(e,s,t)=>{t.d(s,{I:()=>n,t:()=>a});const a="https://smartroll.ldce.mnv-dev.live",n="wss://smartroll.ldce.mnv-dev.live"},3193:(e,s,t)=>{t.d(s,{$:()=>i});var a=t(2791),n=t(7689),r=t(1087),l=t(2937),o=t(184);const i=e=>{let{items:s}=e;const t=(0,n.TH)(),i=(e,s,t)=>(0,o.jsxs)(o.Fragment,{children:[s&&s,e&&e,t&&(0,o.jsx)(l.C_,{color:t.color,className:"ms-auto",children:t.text})]}),c=(e,s)=>{const{component:t,name:n,badge:l,icon:o,...c}=e,d=t;return(0,a.createElement)(d,{...c.to&&!c.items&&{component:r.OL},key:s,...c},i(n,o,l))},d=(e,s)=>{var a;const{component:n,name:r,icon:l,to:h,...m}=e,u=n;return(0,o.jsx)(u,{idx:String(s),toggler:i(r,l),visible:t.pathname.startsWith(h),...m,children:null===(a=e.items)||void 0===a?void 0:a.map(((e,s)=>e.items?d(e,s):c(e,s)))},s)};return(0,o.jsx)(a.Fragment,{children:s&&s.map(((e,s)=>e.items?d(e,s):c(e,s)))})}},3645:(e,s,t)=>{t.d(s,{J:()=>o,w:()=>c});var a=t(5294),n=t(2958),r=t(2062),l=t.n(r);const o=async function(e,s,t,a){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;const c=localStorage.getItem("accessToken"),d=localStorage.getItem("refreshToken");let h;if(a.Authorization="Bearer ".concat(c),window.setProgress(100),"get"===t)try{h={error:!1,response:await e.get("".concat(n.t).concat(s),{headers:a,params:l})}}catch(m){if(m.response&&401===m.response.status){const n=await i(d);localStorage.setItem("accessToken",n.access),localStorage.setItem("refreshToken",n.refresh),h=await o(e,s,t,a,r,l)}else h={error:!0,error:m}}else if("post"===t)try{h={error:!1,response:await e.post("".concat(n.t).concat(s),r,{headers:a})}}catch(m){if(m.response&&401===m.response.status){const n=await i(d);localStorage.setItem("accessToken",n.access),localStorage.setItem("refreshToken",n.refresh),h=await o(e,s,t,a,r,l)}else h={error:!0,error:m}}return h},i=async e=>a.Z.post("".concat(n.t,"/auth/api/token/refresh/"),{refresh:e},{headers:{"ngrok-skip-browser-warning":!0}}).then((e=>e.data)).catch((e=>{throw e})),c=(e,s)=>{l()({title:e,text:s,icon:"success",button:"OK"})}},9792:(e,s,t)=>{t.d(s,{Z:()=>d});var a=t(5294),n=t(7689),r=t(2791),l=t(2585),o=t(2958);const i=async(e,s,t,n,r,l)=>{if("get"===t)return await a.Z.get("".concat(o.t).concat(s),{headers:n,params:l});if("post"===t)return await a.Z.post("".concat(o.t).concat(s),r,{headers:n});throw new Error("Invalid HTTP method")},c=async e=>{try{return(await a.Z.post("".concat(o.t,"/auth/api/token/refresh/, { refresh: ").concat(e," }, { headers: header }"))).data}catch(s){if(401===s.response.status)return{action:"tokenExpired",status:s.response.status}}},d=()=>{const e=(0,n.s0)(),{state:s,dispatch:t}=(0,r.useContext)(l.y),{accessToken:a,refreshToken:o,loader_state:d}=s,h={accessToken:a,refreshToken:o},m=async function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,l=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;t({type:"LOADER_STATE",payload:!0}),l.Authorization="Bearer ".concat(s.accessToken);try{const e=await i(a,n,r,l,o,d);return t({type:"LOADER_STATE",payload:!1}),{error:!1,response:e}}catch(u){if(!u.response||401!==u.response.status)return t({type:"LOADER_STATE",payload:!1}),{error:!0,errorMessage:u.response.data||"Unknown error"};{const i=await c(s.refreshToken);if(i.access&&i.refresh){const e={accessToken:i.access,refreshToken:i.refresh};return localStorage.setItem("accessToken",i.access),localStorage.setItem("refreshToken",i.refresh),t({type:"ACCESS_TOKEN",payload:i.access}),t({type:"REFRESH_TOKEN",payload:i.refresh}),m(e,a,n,r,l,o,d)}if("tokenExpired"==i.action&&401===i.status)return localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),e("/auth/sign-in/"),t({type:"LOADER_STATE",payload:!1}),{error:!0,result:i}}}};return[h,m]}},6293:(e,s,t)=>{t.r(s),t.d(s,{default:()=>P});var a=t(2791),n=t(2937),r=t(9792),l=t(5294),o=(t(2673),t(183),t(2548)),i=t(2426),c=t.n(i),d=t(184);const h=()=>{const[e,s]=(0,r.Z)(),[t,i]=(0,a.useState)(null),[h,m]=(0,a.useState)(null),[u,x]=(0,a.useState)(null),[p,j]=(0,a.useState)(null),[g,b]=(0,a.useState)(!1),[v,f]=(0,a.useState)(null),y=e=>{const s=h.filter((s=>s.session.some((s=>s.day===e))));s.length>0?x(s):x(null)},w=async t=>{const a=l.Z.create(),n=await s(e,a,"/manage/session/get_session_data_for_export/".concat(t),"get",{"Content-Type":"application/json","ngrok-skip-browser-warning":!0},null,null);if(!1===n.error){const e=n.response;j(e.data.data.marked_attendances),f(e.data.data),b(!0)}else alert(n.errorMessage.message)};return(0,a.useEffect)((()=>{(async()=>{const t=l.Z.create(),a=await s(e,t,"/manage/get_subjects_of_teacher","get",{"Content-Type":"application/json","ngrok-skip-browser-warning":!0},null,null);if(!1===a.error){const e=a.response;i(e.data.data)}else alert(a.errorMessage.message)})()}),[]),(0,d.jsxs)(d.Fragment,{children:[t?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsx)("label",{className:"form-label",children:"Select A Subject"}),(0,d.jsxs)("select",{className:"form-select","aria-label":"Default select example",required:!0,onChange:t=>{(async t=>{const a=l.Z.create(),n=await s(e,a,"/manage/get_lecture_sessions_for_teacher","get",{"Content-Type":"application/json","ngrok-skip-browser-warning":!0},null,{subject_slug:t});if(!1===n.error){const e=n.response;m(e.data.data)}else alert(n.errorMessage.message)})(t.target.value)},children:[(0,d.jsx)("option",{value:"",children:"...."}),t&&t.map(((e,s)=>(0,d.jsx)("option",{value:e.slug,children:e.subject_name},s)))]})]}),u?(0,d.jsx)(n.rb,{children:(0,d.jsx)(n.b7,{xs:!0,children:(0,d.jsxs)(n.xH,{className:"mb-4",children:[(0,d.jsx)(n.bn,{children:(0,d.jsxs)("div",{className:"d-flex flex-wrap justify-between",children:[(0,d.jsx)("div",{children:(0,d.jsx)("strong",{children:"Subject Attendance History"})}),(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsx)("div",{children:(0,d.jsx)("input",{type:"date",id:"validationCustom01",required:!0,onChange:e=>{y(e.target.value)}})}),(0,d.jsx)("div",{className:"mx-2"})]})})]})}),(0,d.jsx)(n.sl,{children:(0,d.jsxs)(n.Sx,{align:"middle",className:"mb-0 border text-center",hover:!0,responsive:!0,children:[(0,d.jsx)(n.V,{color:"light",children:(0,d.jsxs)(n.T6,{children:[(0,d.jsx)(n.is,{children:"classroom"}),(0,d.jsx)(n.is,{children:"Lecture Type"}),(0,d.jsx)(n.is,{children:"Date"}),(0,d.jsx)(n.is,{children:"Time"})]})}),(0,d.jsx)(n.NR,{children:u.map(((e,s)=>e.session.map(((s,t)=>(0,d.jsxs)(n.T6,{"v-for":"item in tableItems",onClick:e=>w(s.session_id),children:[(0,d.jsx)(n.NN,{style:{fontSize:"0.8rem"},children:(0,d.jsx)("div",{children:e.classroom})}),(0,d.jsx)(n.NN,{style:{fontSize:"0.8rem"},children:(0,d.jsx)("div",{children:e.type.charAt(0).toUpperCase()+e.type.slice(1)})}),(0,d.jsx)(n.NN,{style:{fontSize:"0.6rem"},children:(0,d.jsx)("div",{children:s.day})}),(0,d.jsxs)(n.NN,{style:{fontSize:"0.5rem"},children:[(0,d.jsxs)("span",{className:"d-block",children:[c()(e.start_time.slice(0,5),"HH:mm").format("h:mm A")," "]}),(0,d.jsx)("span",{className:"d-block",children:"To"}),(0,d.jsx)("span",{className:"d-block",children:c()(e.end_time.slice(0,5),"HH:mm").format("h:mm A")})]})]},t)))))})]})})]})})}):h?(0,d.jsx)(n.rb,{children:(0,d.jsx)(n.b7,{xs:!0,children:(0,d.jsxs)(n.xH,{className:"mb-4",children:[(0,d.jsx)(n.bn,{children:(0,d.jsxs)("div",{className:"d-flex flex-wrap justify-between",children:[(0,d.jsx)("div",{children:(0,d.jsx)("strong",{children:"Subject Attendance History"})}),(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsx)("div",{children:(0,d.jsx)("input",{type:"date",id:"validationCustom01",required:!0,onChange:e=>{y(e.target.value)}})}),(0,d.jsx)("div",{className:"mx-2"})]})})]})}),(0,d.jsx)(n.sl,{children:(0,d.jsxs)(n.Sx,{align:"middle",className:"mb-0 border text-center",hover:!0,responsive:!0,children:[(0,d.jsx)(n.V,{color:"light",children:(0,d.jsxs)(n.T6,{children:[(0,d.jsx)(n.is,{children:"Class"}),(0,d.jsx)(n.is,{children:"Type"}),(0,d.jsx)(n.is,{children:"Date"}),(0,d.jsx)(n.is,{children:"Time"})]})}),(0,d.jsx)(n.NR,{children:h.length>0?h.map(((e,s)=>e.session.map(((s,t)=>(0,d.jsxs)(n.T6,{"v-for":"item in tableItems",onClick:e=>w(s.session_id),children:[(0,d.jsx)(n.NN,{style:{fontSize:"0.8rem"},children:(0,d.jsx)("div",{children:e.classroom})}),(0,d.jsx)(n.NN,{style:{fontSize:"0.8rem"},children:(0,d.jsx)("div",{children:e.type.charAt(0).toUpperCase()+e.type.slice(1)})}),(0,d.jsx)(n.NN,{style:{fontSize:"0.6rem"},children:(0,d.jsx)("div",{children:s.day})}),(0,d.jsxs)(n.NN,{style:{fontSize:"0.5rem"},children:[(0,d.jsxs)("span",{className:"d-block",children:[c()(e.start_time.slice(0,5),"HH:mm").format("h:mm A")," "]}),(0,d.jsx)("span",{className:"d-block",children:"To"}),(0,d.jsx)("span",{className:"d-block",children:c()(e.end_time.slice(0,5),"HH:mm").format("h:mm A")})]})]},t))))):(0,d.jsx)(n.T6,{"v-for":"item in tableItems",children:(0,d.jsx)(n.NN,{colSpan:4,children:(0,d.jsx)("div",{className:"alert alert-primary w-100 my-2",children:(0,d.jsx)("span",{className:"",children:"No Lecture Sessions Are There for This Subject"})})})})})]})})]})})}):null]}):null,p&&(0,d.jsx)(o.Z,{visible:g,setVisible:b,attendances:p,session_data:v}),!h&&(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"d-flex justify-content-center",children:(0,d.jsx)("img",{style:{maxWidth:"70%",height:"auto"},src:"/static/svgs/lecturehistory.svg"})})})]})};var m=t(2062),u=t.n(m);const x=function(){const[e,s]=(0,r.Z)();return(0,d.jsx)("div",{className:"flex justify-center mt-4",children:(0,d.jsxs)("div",{className:"max-w-sm bg-slate-200 p-6  border border-gray-200 rounded-lg shadow dark:border-gray-700",children:[(0,d.jsx)("svg",{className:"w-7 h-7 text-gray-500 dark:text-gray-400 mb-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,d.jsx)("path",{d:"M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"})}),(0,d.jsx)("a",{href:"#",children:(0,d.jsx)("h5",{className:"mb-2 text-2xl font-semibold tracking-tight text-dark",children:"Lecture Alerts !!"})}),(0,d.jsx)("p",{className:"mb-3 font-normal text-gray-500 dark:text-gray-400",children:"You'll be notified 5 mins before your lecture session !!"}),(0,d.jsxs)("a",{onClick:async()=>{const t=l.Z.create(),a=await s(e,t,"/manage/set_web_push_subscription","get",{"Content-Type":"application/json","ngrok-skip-browser-warning":!0},null,null);if(!1===a.error){const t=a.response;t.data.VAPID_PUBLIC_KEY?"Notification"in window&&"serviceWorker"in navigator&&"PushManager"in window?navigator.serviceWorker.register("/static/workers/NotificationWorker.js").then((a=>{navigator.serviceWorker.getRegistrations().then((n=>{Notification.requestPermission().then((n=>{if("granted"===n){const n=function(e){const s=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),t=window.atob(s),a=new Uint8Array(t.length);for(let n=0;n<t.length;++n)a[n]=t.charCodeAt(n);return a}(t.data.VAPID_PUBLIC_KEY);a.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:n}).then((t=>{console.log(t),(async t=>{const a=l.Z.create(),n=await s(e,a,"/manage/save_web_push_subscription/","post",{"Content-Type":"application/json","ngrok-skip-browser-warning":!0},{subscription:t},null);!1===n.error?u()("Good job!","You'll be notified about your upcoming lecture sessions","success"):u()("Oops!",n.errorMessage.message,"error")})(t)})).catch((e=>{u()("Oops!",e,"error")}))}else u()("Oops!","You've denined the notification permission","error")}))}))})):u()("Oops!","Your browser doesn't support push notificaitons!!","error"):u()("Oops!",a.errorMessage.message,"error")}},className:"btn inline-flex font-medium items-center text-blue-600 hover:underline",children:["Opt-In",(0,d.jsx)("svg",{className:"w-3 h-3 ms-2.5 rtl:rotate-[270deg]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 18",children:(0,d.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"})})]})]})})},p=a.lazy((()=>t.e(338).then(t.bind(t,9338)))),j=a.lazy((()=>Promise.all([t.e(134),t.e(998)]).then(t.bind(t,5998)))),g=a.lazy((()=>Promise.resolve().then(t.bind(t,183)))),b=a.lazy((()=>t.e(841).then(t.bind(t,1841)))),v=a.lazy((()=>t.e(681).then(t.bind(t,1681)))),f=a.lazy((()=>t.e(417).then(t.bind(t,9417)))),y=a.lazy((()=>Promise.all([t.e(305),t.e(551)]).then(t.bind(t,4551)))),w=a.lazy((()=>t.e(657).then(t.bind(t,6657)))),N=a.lazy((()=>t.e(746).then(t.bind(t,9746)))),k=a.lazy((()=>t.e(255).then(t.bind(t,3255)))),S=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",element:p},{path:"/forms",name:"Forms",element:k,exact:!0},{path:"/forms/form-control",name:"Form Control",element:k},{path:"/forms/input-group",name:"Input Group",element:a.lazy((()=>t.e(85).then(t.bind(t,4085))))},{path:"/forms/validation",name:"Validation",element:a.lazy((()=>t.e(386).then(t.bind(t,8386))))},{path:"/manage-teachers",name:"Teacher",element:a.lazy((()=>t.e(962).then(t.bind(t,5962))))},{path:"/breadcrumb",name:"Breadcrumbnav",element:a.lazy((()=>t.e(979).then(t.bind(t,9979))))},{path:"/TeacherSidebar",name:"TeacherSidebar",element:a.lazy((()=>t.e(99).then(t.bind(t,8037))))},{path:"/logout",name:"Logout",element:N},{path:"/timetable",name:"Timetable",element:j},{path:"/subject",name:"Subject",element:g},{path:"/addstudent",name:"AddStudent",element:v},{path:"/attendance-history",name:"attendance-history",element:f},{path:"/teacher/dashboard",name:"Teacherview",element:b},{path:"/studentdashboard",name:"StudentDashboard",element:y},{path:"/teacher/session",name:"Sessionmanage",element:w},{path:"/teacher/lectures/history",name:"LectureHistory",element:h},{path:"/teacher/lectures/additional-features",name:"LectureHistory",element:x}];var T=t(7689),_=t(2585);t(3645);const C=()=>{const{state:e,dispatch:s}=(0,a.useContext)(_.y),{accessToken:t,refreshToken:r,batches:l,accessTokenActive:o,profileDetails:i}=e;(0,T.s0)();return(0,a.useEffect)((()=>{t&&i.obj.profile.role}),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.KB,{lg:!0,children:(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(n.LQ,{color:"primary"}),children:(0,d.jsxs)(T.Z5,{children:[S.map(((e,s)=>e.element&&(0,d.jsx)(T.AW,{path:e.path,exact:e.exact,name:e.name,element:(0,d.jsx)(e.element,{})},s))),"admin"===i.obj.profile.role?(0,d.jsx)(T.AW,{path:"/",element:(0,d.jsx)(T.Fg,{to:"dashboard",replace:!0})}):"teacher"===i.obj.profile.role?(0,d.jsx)(T.AW,{path:"/",element:(0,d.jsx)(T.Fg,{to:"teacher/dashboard",replace:!0})}):"student"===i.obj.profile.role?(0,d.jsx)(T.AW,{path:"/",element:(0,d.jsx)(T.Fg,{to:"studentdashboard",replace:!0})}):void 0]})})})})},A=a.memo(C);var E=t(9434),Z=t(4846),L=t(612);const I=()=>{(0,T.s0)();const{state:e,dispatch:s}=(0,a.useContext)(_.y),{profileDetails:t}=e,[r,l]=(0,a.useState)("");(0,a.useEffect)((()=>{t&&l(t.obj.profile.email)}),[t]);return(0,d.jsx)(n.w5,{variant:"nav-item",children:(0,d.jsx)(n.SQ,{placement:"bottom-end",className:"py-0",caret:!1,children:(0,d.jsx)("div",{className:"text-medium-emphasis",children:r})})})},H=()=>{const{state:e,dispatch:s}=(0,a.useContext)(_.y),{profileDetails:t}=e,[r,l]=(0,a.useState)("");(0,a.useEffect)((()=>{t&&l(t.email)}),[t]);const o=(0,E.I0)(),i=(0,E.v9)((e=>e.sidebarShow));return(0,d.jsx)(n.PO,{position:"sticky",className:"mb-2",children:(0,d.jsxs)(n.KB,{fluid:!0,className:"d-flex flex-wrap",children:[(0,d.jsx)(n.X4,{className:"ps-1",onClick:()=>o({type:"set",sidebarShow:!i}),children:(0,d.jsx)(Z.Z,{icon:L.N,size:"lg"})}),(0,d.jsx)(n.g3,{className:"ms-3",children:(0,d.jsx)(I,{})})]})})};var z=t(3193),O=t(4358);t(2454);const D=t.p+"static/media/smartroll_logo.a3c3e21d0b4a56919e74.png";var F=t(443);const U=()=>{const{state:e,dispatch:s}=(0,a.useContext)(_.y),{accessToken:t,refreshToken:r,profileDetails:l}=e,o=(0,E.I0)(),i=(0,E.v9)((e=>e.sidebarUnfoldable)),c=(0,E.v9)((e=>e.sidebarShow));return(0,d.jsxs)(n.z3,{position:"fixed",palcement:"end",unfoldable:i,visible:c,onVisibleChange:e=>{o({type:"set",sidebarShow:e})},children:[(0,d.jsx)("img",{className:"p-3",src:D}),(0,d.jsx)(n.Xk,{children:(0,d.jsxs)(O.Z,{children:["admin"===l.obj.profile.role&&(0,d.jsx)(z.$,{items:F.Z.admin_role}),"teacher"===l.obj.profile.role&&(0,d.jsx)(z.$,{items:F.Z.teacher_role}),"student"===l.obj.profile.role&&(0,d.jsx)(z.$,{items:F.Z.student_role})]})})]})},V=a.memo(U);var M=t(2958),R=t(9165);t(5443);const P=()=>{const{state:e,dispatch:s}=(0,a.useContext)(_.y),{accessToken:t,refreshToken:n,loader_state:r}=e,[o,i]=(0,a.useState)(!1),[c,h]=(0,a.useState)(!0),[m,u]=(0,a.useState)(!1),[x,p]=(0,a.useState)(0),j=(0,T.s0)();"undefined"!==typeof window&&(window.setProgress=p);const g=async e=>{const t={"Content-Type":"application/json","ngrok-skip-browser-warning":!0,Authorization:"Bearer ".concat(e)};l.Z.get("".concat(M.t,"/check_token_authenticity/"),{headers:t}).then((t=>{if(!0===t.data.data){const t=(0,R.o)(e);s({type:"SET_PROFILE",payload:t}),u(!0)}})).catch((e=>{n?(async e=>{l.Z.post("".concat(M.t,"/auth/api/token/refresh/"),{refresh:e},{headers:{"ngrok-skip-browser-warning":!0}}).then((e=>{s({type:"ACCESS_TOKEN",payload:e.data.access}),s({type:"REFRESH_TOKEN",payload:e.data.refresh}),localStorage.setItem("accessToken",e.data.access),localStorage.setItem("refreshToken",e.data.refresh);const t=(0,R.o)(e.data.access);s({type:"SET_PROFILE",payload:t}),u(!0)})).catch((e=>{localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),j("/login")}))})(n):j("/login")}))};return(0,a.useEffect)((()=>{(async()=>{l.Z.get("".concat(M.t,"/check_server_avaibility/"),{headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":!0}}).then((e=>{i(!0),t?g(t):j("/login")})).catch((e=>{j("/404")}))})()}),[]),t&&m?(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:r?"":"d-none",style:{backdropFilter:"blur(5px)",height:"100vh",width:"100%",position:"absolute",zIndex:9999,top:0,justifyContent:"center",display:"flex",alignItems:"center",left:0},children:(0,d.jsx)("img",{className:"animated-container",style:{height:"10vh"},src:"/static/svgs/loader.svg"})}),(0,d.jsx)(V,{}),(0,d.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,d.jsx)(H,{}),(0,d.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,d.jsx)(A,{})})]})]}):null}},183:(e,s,t)=>{t.r(s),t.d(s,{default:()=>h});var a=t(2791),n=t(2585),r=t(5294),l=t(3645),o=t(2937),i=t(7689),c=t(9792),d=t(184);const h=()=>{const[e,s]=(0,a.useState)(null),[t,h]=(0,a.useState)(null),[m,u]=(0,a.useState)(null),[x,p]=(0,c.Z)(),[j,g]=(0,a.useState)(null),[b,v]=(0,a.useState)(!1),[f,y]=(0,a.useState)(""),[w,N]=(0,a.useState)(""),[k,S]=(0,a.useState)(""),[T,_]=(0,a.useState)(""),{state:C,dispatch:A}=(0,a.useContext)(n.y),{accessToken:E,refreshToken:Z}=C;(0,i.s0)();return(0,a.useEffect)((()=>{(async()=>{const e=r.Z.create;let s={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},t=await p(x,e,"/manage/get_terms","get",s);if(0==t.error){let e=t.response;u(e.data.data)}else alert(t.errorMessage.message)})(),(async()=>{const e=r.Z.create();let t={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},a=await p(x,e,"/manage/get_subject","get",t,null,null);if(0==a.error){let e=a.response;s(e.data.data)}})()}),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.rb,{children:(0,d.jsxs)(o.b7,{children:[m&&(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(o.xH,{className:"mb-3",children:[(0,d.jsx)(o.bn,{children:"select term"}),(0,d.jsx)(o.sl,{children:(0,d.jsxs)(o.LX,{"aria-label":"Default select example",onChange:e=>{(async e=>{r.Z.create();const s=await p(x,r.Z,"/manage/get_semesters","get",{"Content-Type":"application/json","ngrok-skip-browser-warning":!0},null,{term_slug:e});if(0==s.error){const e=s.response;h(e.data.data)}})(e.target.value)},children:[(0,d.jsx)("option",{value:"",children:"Select Term"}),m.map(((e,s)=>(0,d.jsxs)("option",{value:e.slug,children:["Term : ",e.start_year," - ",e.end_year]},s)))]})})]})}),t&&(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(o.xH,{className:"mb-3",children:[(0,d.jsx)(o.bn,{children:"Semester"}),(0,d.jsx)(o.sl,{children:(0,d.jsxs)(o.LX,{"aria-label":"Default select example",onChange:e=>{g(e.target.value)},children:[(0,d.jsx)("option",{value:"",children:"Select Semester"}),t.map(((e,s)=>(0,d.jsxs)("option",{value:e.slug,children:["Semester - ",e.no]},s)))]})})]})})]})}),j?(0,d.jsx)(o.rb,{children:(0,d.jsx)(o.b7,{xs:12,children:(0,d.jsxs)(o.xH,{className:"mb-3",children:[(0,d.jsx)(o.bn,{children:(0,d.jsx)("strong",{children:"Subjects"})}),(0,d.jsx)(o.sl,{children:(0,d.jsxs)(o.lx,{className:"row g-3 needs-validation",noValidate:!0,validated:b,onSubmit:e=>{if(!1===e.currentTarget.checkValidity())return e.preventDefault(),e.stopPropagation(),void alert("Please Enter Valid Subject Information");v(!0);const t={code:w,subject_name:f,credit:k,semester_slug:j};e.preventDefault(),(async e=>{const t=r.Z.create();let a={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},n=await(0,l.J)(t,"/manage/add_subject/","post",a,e,null);if(0==n.error){let e=n.response;s((s=>[...s,e.data.data])),(0,l.w)("success","Subject Added successfully...!")}else alert(n.errorMessage.message)})(t)},children:[(0,d.jsxs)(o.b7,{md:12,children:[(0,d.jsx)(o.L8,{htmlFor:"validationCustom01",children:"Subject Name"}),(0,d.jsx)(o.jO,{type:"text",id:"validationCustom01",onChange:e=>y(e.target.value),required:!0}),(0,d.jsx)(o.CO,{valid:!0,children:"Looks good!"})]}),(0,d.jsxs)(o.b7,{md:6,children:[(0,d.jsx)(o.L8,{htmlFor:"validationCustom01",children:"Subject Code"}),(0,d.jsx)(o.jO,{type:"number",id:"validationCustom01",onChange:e=>N(e.target.value),required:!0}),(0,d.jsx)(o.CO,{valid:!0,children:"Looks good!"})]}),(0,d.jsxs)(o.b7,{md:6,children:[(0,d.jsx)(o.L8,{htmlFor:"validationCustom01",children:"Subject Credit"}),(0,d.jsx)(o.jO,{type:"number",id:"validationCustom01",onChange:e=>S(e.target.value),required:!0}),(0,d.jsx)(o.CO,{valid:!0,children:"Looks good!"})]}),(0,d.jsx)(o.b7,{xs:12,children:(0,d.jsx)("button",{className:"btn btn-outline-dark form-control",type:"submit",children:"Submit form"})})]})})]})})}):null,(0,d.jsx)(o.rb,{children:e?(0,d.jsx)(o.b7,{xs:!0,children:(0,d.jsxs)(o.xH,{className:"mb-4",children:[(0,d.jsx)(o.bn,{children:(0,d.jsx)("strong",{children:"Subject History"})}),(0,d.jsx)(o.sl,{children:(0,d.jsxs)(o.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[(0,d.jsx)(o.V,{color:"light",children:(0,d.jsxs)(o.T6,{children:[(0,d.jsx)(o.is,{children:"Subject Name"}),(0,d.jsx)(o.is,{children:"Subject Code"}),(0,d.jsx)(o.is,{children:"Semester"})]})}),(0,d.jsx)(o.NR,{children:e.map(((e,s)=>(0,d.jsxs)(o.T6,{"v-for":"item in tableItems",children:[(0,d.jsx)(o.NN,{children:(0,d.jsx)("div",{children:e.subject_name.charAt(0).toUpperCase()+e.subject_name.slice(1)})}),(0,d.jsx)(o.NN,{children:(0,d.jsx)("div",{children:e.code})}),(0,d.jsx)(o.NN,{children:(0,d.jsx)("div",{children:e.semester.no})})]},s)))})]})})]})}):null})]})})}},2548:(e,s,t)=>{t.d(s,{Z:()=>h});var a=t(2791),n=t(6912),r=t(2426),l=t.n(r),o=t(2937),i=t(5294),c=t(9792),d=t(184);const h=e=>{let{visible:s,setVisible:t,attendances:r,session_data:h}=e;const m=(0,a.useRef)(null),[u,x]=(0,a.useState)(!1),[p,j]=(0,c.Z)();(0,a.useEffect)((()=>{m.current&&x(!0)}),[m.current]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(o.N3,{className:"card w-100",placement:"end",visible:s,onHide:()=>t(!1),"data-coreui-backdrop":"static",children:[(0,d.jsx)(o.Gc,{color:"success",visible:!0,className:"justify-content-between align-items-center d-flex",children:(0,d.jsx)("svg",{onClick:()=>t(!1),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x-lg",viewBox:"0 0 16 16",children:(0,d.jsx)("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"})})}),(0,d.jsxs)(o.xF,{children:[(0,d.jsx)("div",{className:"w-100",children:m.current?(0,d.jsx)(n.DownloadTableExcel,{filename:"".concat(h.lecture.subject.subject_name," - ").concat(new Date(h.day).toLocaleString()),sheet:"attendance",currentTableRef:m.current,children:(0,d.jsx)("button",{className:"my-2 w-100 btn btn btn-outline-primary",children:" Export excel "})}):null}),(0,d.jsx)(o.rb,{className:"w-100 flex-col",children:(0,d.jsx)(o.b7,{className:"col-12",children:(0,d.jsx)("div",{className:"table-responsive",children:(0,d.jsxs)("table",{align:"middle",className:"table align-middle table-hover text-center mb-0 border hover responsive",ref:m,children:[(0,d.jsxs)(o.V,{color:"light",children:[(0,d.jsx)(o.T6,{"aria-colspan":5,children:(0,d.jsx)(o.is,{colSpan:5,children:"L.D COLLEGE OF ENGINEERING"})}),(0,d.jsx)(o.T6,{"aria-colspan":5,children:(0,d.jsxs)(o.is,{colSpan:5,children:["Subject: ",h.lecture.subject.subject_name," | DATE: ",h.day," | TIME: ",l()(h.lecture.start_time.slice(0,5),"HH:mm").format("h:mm A")," to ",l()(h.lecture.end_time.slice(0,5),"HH:mm").format("h:mm A")]})}),(0,d.jsxs)(o.T6,{children:[(0,d.jsx)(o.is,{children:"Enrollment No"}),(0,d.jsx)(o.is,{children:"Student Name"}),(0,d.jsx)(o.is,{children:"Batch"}),(0,d.jsx)(o.is,{children:"Status"})]})]}),(0,d.jsx)(o.NR,{children:r&&r.map(((e,s)=>(0,d.jsxs)(o.T6,{"v-for":"alert alert-primary item in tableItems",style:e.manual?{border:"2px solid darkorange"}:null,children:[(0,d.jsx)(o.NN,{children:(0,d.jsx)("div",{children:e.student.enrollment?e.student.enrollment:"-"})}),(0,d.jsx)(o.NN,{children:(0,d.jsx)("div",{children:e.student.profile.name?e.student.profile.name:"-"})}),(0,d.jsx)(o.NN,{children:(0,d.jsx)("div",{children:e.batches?e.batches.map(((e,s)=>(0,d.jsx)("span",{children:e.batch_name.toUpperCase()},s))):"-"})}),e.is_present?(0,d.jsx)(o.NN,{children:(0,d.jsxs)("div",{className:"text-success d-flex justify-content-center align-items-center",children:[(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"mx-auto bi bi-patch-check",viewBox:"0 0 16 16",children:[(0,d.jsx)("path",{fillRule:"evenodd",d:"M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"}),(0,d.jsx)("path",{d:"m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"})]}),(0,d.jsx)("p",{style:{visibility:"hidden"},children:"P"})]})}):(0,d.jsx)(o.NN,{children:(0,d.jsxs)("div",{className:"text-success d-flex justify-content-center align-items-center",children:[(0,d.jsx)("input",{type:"checkbox",onClick:s=>{(async(e,s)=>{e.preventDefault();try{if(!confirm("Are you sure you want to mark the attendance manually?"))return;e.target.checked="checked",e.target.disabled=!0;const r=i.Z.create(),l={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},o={attendance_slug:s},c=await j(p,r,"/manage/session/mark_attendance_for_absent_student/","post",l,o,null);if(!1===c.error){c.response;const s=e.target.parentElement,r=s.children;r[1].innerText="P",s.removeChild(r[0]);var t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("width","16"),t.setAttribute("height","16"),t.setAttribute("fill","currentColor"),t.setAttribute("class","mx-auto bi bi-patch-check"),t.setAttribute("viewBox","0 0 16 16");var a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("fill-rule","evenodd"),a.setAttribute("d","M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0");var n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("d","m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"),t.appendChild(a),t.appendChild(n),s.prepend(t)}else alert(c.errorMessage.message)}catch(r){alert(r.message)}})(s,e.slug)}}),(0,d.jsx)("p",{style:{visibility:"hidden"},children:"A"})]})})]},s)))})]})})})})]})]})})}},2673:()=>{}}]);
//# sourceMappingURL=875.87c4c953.chunk.js.map