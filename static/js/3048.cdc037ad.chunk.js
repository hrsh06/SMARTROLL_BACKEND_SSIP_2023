"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3048],{443:(e,s,a)=>{a.d(s,{Z:()=>m});a(2791);var t=a(4846),n=a(4546),r=a(1698),l=a(3899),o=a(1517),i=a(9909),c=a(3570),d=a(2937),h=a(184);const m={admin_role:[{component:d.fd,name:"ADMNISTRATION"},{component:d.U6,name:"Dashboard",to:"/",icon:(0,h.jsx)(t.Z,{icon:n.V,customClassName:"nav-icon"})},{component:d.U6,name:"Subject",to:"/subject",icon:(0,h.jsx)(t.Z,{icon:r.E,customClassName:"nav-icon"})},{component:d.U6,name:"Teachers",to:"/manage-teachers",icon:(0,h.jsx)(t.Z,{icon:l.J,customClassName:"nav-icon"})},{component:d.U6,name:"Add Student",to:"/addstudent",icon:(0,h.jsx)(t.Z,{icon:o.g,customClassName:"nav-icon"})},{component:d.U6,name:"Timetable",to:"/timetable",icon:(0,h.jsx)(t.Z,{icon:i.J,customClassName:"nav-icon"})},{component:d.U6,name:"Logout",to:"/logout",icon:(0,h.jsx)(t.Z,{icon:c.V,customClassName:"nav-icon"})}],teacher_role:[{component:d.U6,name:"Dashboard",to:"/teacher/dashboard",icon:(0,h.jsx)(t.Z,{icon:n.V,customClassName:"nav-icon"})},{component:d.U6,name:"LectureHistory",to:"/teacher/lectures/history",icon:(0,h.jsx)(t.Z,{icon:c.V,customClassName:"nav-icon"})},{component:d.U6,name:"Logout",to:"/logout",icon:(0,h.jsx)(t.Z,{icon:c.V,customClassName:"nav-icon"})}],student_role:[{component:d.U6,name:"Dashboard",to:"/studentdashboard",icon:(0,h.jsx)(t.Z,{icon:n.V,customClassName:"nav-icon"})},{component:d.U6,name:"Logout",to:"/logout",icon:(0,h.jsx)(t.Z,{icon:c.V,customClassName:"nav-icon"})}]}},2958:(e,s,a)=>{a.d(s,{I:()=>n,t:()=>t});const t="http://localhost:8000",n="ws://localhost:8000"},3193:(e,s,a)=>{a.d(s,{$:()=>i});var t=a(2791),n=a(7689),r=a(1087),l=a(2937),o=a(184);const i=e=>{let{items:s}=e;const a=(0,n.TH)(),i=(e,s,a)=>(0,o.jsxs)(o.Fragment,{children:[s&&s,e&&e,a&&(0,o.jsx)(l.C_,{color:a.color,className:"ms-auto",children:a.text})]}),c=(e,s)=>{const{component:a,name:n,badge:l,icon:o,...c}=e,d=a;return(0,t.createElement)(d,{...c.to&&!c.items&&{component:r.OL},key:s,...c},i(n,o,l))},d=(e,s)=>{var t;const{component:n,name:r,icon:l,to:h,...m}=e,u=n;return(0,o.jsx)(u,{idx:String(s),toggler:i(r,l),visible:a.pathname.startsWith(h),...m,children:null===(t=e.items)||void 0===t?void 0:t.map(((e,s)=>e.items?d(e,s):c(e,s)))},s)};return(0,o.jsx)(t.Fragment,{children:s&&s.map(((e,s)=>e.items?d(e,s):c(e,s)))})}},947:(e,s,a)=>{a.d(s,{Lk:()=>ne,tf:()=>ce,S8:()=>xe,ns:()=>be,q3:()=>ye,cG:()=>fe});var t=a(2791),n=a(2937),r=a(9792),l=a(5294),o=(a(2673),a(183),a(6912)),i=a(184);const c=e=>{let{visible:s,setVisible:a,attendances:r,session_data:l}=e;const c=(0,t.useRef)(null),[d,h]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{c.current&&h(!0)}),[c.current]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(n.N3,{className:"card w-100",placement:"end",visible:s,onHide:()=>a(!1),"data-coreui-backdrop":"static",children:[(0,i.jsx)(n.Gc,{color:"success",visible:!0,className:"justify-content-between align-items-center d-flex",children:(0,i.jsx)("svg",{onClick:()=>a(!1),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x-lg",viewBox:"0 0 16 16",children:(0,i.jsx)("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"})})}),(0,i.jsxs)(n.xF,{children:[(0,i.jsx)("div",{className:"w-100",children:c.current?(0,i.jsx)(o.DownloadTableExcel,{filename:"".concat(l.lecture.subject.subject_name," - ").concat(new Date(l.day).toLocaleString()),sheet:"attendance",currentTableRef:c.current,children:(0,i.jsx)("button",{className:"my-2 w-100 btn btn btn-outline-primary",children:" Export excel "})}):null}),(0,i.jsx)(n.rb,{className:"w-100 flex-col",children:(0,i.jsx)(n.b7,{className:"col-12",children:(0,i.jsx)("div",{className:"table-responsive",children:(0,i.jsxs)("table",{align:"middle",className:"table align-middle table-hover text-center mb-0 border hover responsive",ref:c,children:[(0,i.jsxs)(n.V,{color:"light",children:[(0,i.jsx)(n.T6,{"aria-colspan":5,children:(0,i.jsx)(n.is,{colSpan:5,children:"L.D COLLEGE OF ENGINEERING"})}),(0,i.jsx)(n.T6,{"aria-colspan":5,children:(0,i.jsxs)(n.is,{colSpan:5,children:["Subject: ",l.lecture.subject.subject_name," | DATE: ",l.day]})}),(0,i.jsxs)(n.T6,{children:[(0,i.jsx)(n.is,{children:"Enrollment No"}),(0,i.jsx)(n.is,{children:"Student Name"}),(0,i.jsx)(n.is,{children:"IP Addr"}),(0,i.jsx)(n.is,{children:"Batch"}),(0,i.jsx)(n.is,{children:"Status"})]})]}),(0,i.jsx)(n.NR,{children:r&&r.map(((e,s)=>(0,i.jsxs)(n.T6,{"v-for":"alert alert-primary item in tableItems",children:[(0,i.jsx)(n.NN,{children:(0,i.jsx)("div",{children:e.student.enrollment?e.student.enrollment:"-"})}),(0,i.jsx)(n.NN,{children:(0,i.jsx)("div",{children:e.student.profile.name?e.student.profile.name:"-"})}),(0,i.jsx)(n.NN,{children:(0,i.jsx)("div",{children:e.marking_ip?e.marking_ip:"-"})}),(0,i.jsx)(n.NN,{children:(0,i.jsx)("div",{children:e.batches?e.batches.map(((e,s)=>(0,i.jsx)("span",{children:e.batch_name.toUpperCase()},s))):"-"})}),e.is_present?(0,i.jsx)(n.NN,{children:(0,i.jsxs)("div",{className:"text-success",children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"mx-auto bi bi-patch-check",viewBox:"0 0 16 16",children:[(0,i.jsx)("path",{fillRule:"evenodd",d:"M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"}),(0,i.jsx)("path",{d:"m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"})]}),(0,i.jsx)("p",{style:{visibility:"hidden"},children:"P"})]})}):(0,i.jsx)(n.NN,{children:(0,i.jsxs)("div",{className:"text-danger",children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x-octagon",viewBox:"0 0 16 16",children:[(0,i.jsx)("path",{d:"M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"}),(0,i.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"})]}),(0,i.jsx)("p",{style:{visibility:"hidden"},children:"F"})]})})]},s)))})]})})})})]})]})})},d=()=>{const[e,s]=(0,r.Z)(),[a,o]=(0,t.useState)(null),[d,h]=(0,t.useState)(null),[m,u]=(0,t.useState)(null),[p,x]=(0,t.useState)(null),[j,b]=(0,t.useState)(!1),[g,f]=(0,t.useState)(null),v=e=>{console.log(e);const s=d.filter((s=>s.session.some((s=>s.day===e))));s.length>0?u(s):u(null)},y=async a=>{const t=l.Z.create(),n=await s(e,t,"/manage/session/get_session_data_for_export/".concat(a),"get",{"Content-Type":"application/json","ngrok-skip-browser-warning":!0},null,null);if(!1===n.error){const e=n.response;x(e.data.data.marked_attendances),f(e.data.data),b(!0)}else alert(n.errorMessage.message)};return(0,t.useEffect)((()=>{(async()=>{const a=l.Z.create(),t=await s(e,a,"/manage/get_subjects_of_teacher","get",{"Content-Type":"application/json","ngrok-skip-browser-warning":!0},null,null);if(!1===t.error){const e=t.response;o(e.data.data)}else alert(t.errorMessage.message)})()}),[]),(0,i.jsxs)(i.Fragment,{children:[a?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{className:"form-label",children:"Select A Subject"}),(0,i.jsxs)("select",{className:"form-select","aria-label":"Default select example",required:!0,onChange:a=>{(async a=>{const t=l.Z.create(),n=await s(e,t,"/manage/get_lecture_sessions_for_teacher","get",{"Content-Type":"application/json","ngrok-skip-browser-warning":!0},null,{subject_slug:a});if(!1===n.error){const e=n.response;h(e.data.data)}else alert(n.errorMessage.message)})(a.target.value)},children:[(0,i.jsx)("option",{value:"",children:"...."}),a&&a.map(((e,s)=>(0,i.jsx)("option",{value:e.slug,children:e.subject_name},s)))]})]}),m?(0,i.jsx)(n.rb,{children:(0,i.jsx)(n.b7,{xs:!0,children:(0,i.jsxs)(n.xH,{className:"mb-4",children:[(0,i.jsx)(n.bn,{children:(0,i.jsxs)("div",{className:"d-flex flex-wrap justify-between",children:[(0,i.jsx)("div",{children:(0,i.jsx)("strong",{children:"Subject Attendance History"})}),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"d-flex",children:[(0,i.jsx)("div",{children:(0,i.jsx)(n.jO,{type:"date",id:"validationCustom01",required:!0,onChange:e=>{v(e.target.value)}})}),(0,i.jsx)("div",{className:"mx-2"})]})})]})}),(0,i.jsx)(n.sl,{children:(0,i.jsxs)(n.Sx,{align:"middle",className:"mb-0 border text-center",hover:!0,responsive:!0,children:[(0,i.jsx)(n.V,{color:"light",children:(0,i.jsxs)(n.T6,{children:[(0,i.jsx)(n.is,{children:"classroom"}),(0,i.jsx)(n.is,{children:"Lecture Type"}),(0,i.jsx)(n.is,{children:"Day"})]})}),(0,i.jsx)(n.NR,{children:m.map(((e,s)=>e.session.map(((s,a)=>(0,i.jsxs)(n.T6,{"v-for":"item in tableItems",onClick:e=>y(s.session_id),children:[(0,i.jsx)(n.NN,{children:(0,i.jsx)("div",{children:e.classroom})}),(0,i.jsx)(n.NN,{children:(0,i.jsx)("div",{children:e.type.charAt(0).toUpperCase()+e.type.slice(1)})}),(0,i.jsx)(n.NN,{children:(0,i.jsx)("div",{children:s.day})})]},a)))))})]})})]})})}):d?(0,i.jsx)(n.rb,{children:(0,i.jsx)(n.b7,{xs:!0,children:(0,i.jsxs)(n.xH,{className:"mb-4",children:[(0,i.jsx)(n.bn,{children:(0,i.jsxs)("div",{className:"d-flex flex-wrap justify-between",children:[(0,i.jsx)("div",{children:(0,i.jsx)("strong",{children:"Subject Attendance History"})}),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"d-flex",children:[(0,i.jsx)("div",{children:(0,i.jsx)(n.jO,{type:"date",id:"validationCustom01",required:!0,onChange:e=>{v(e.target.value)}})}),(0,i.jsx)("div",{className:"mx-2"})]})})]})}),(0,i.jsx)(n.sl,{children:(0,i.jsxs)(n.Sx,{align:"middle",className:"mb-0 border text-center",hover:!0,responsive:!0,children:[(0,i.jsx)(n.V,{color:"light",children:(0,i.jsxs)(n.T6,{children:[(0,i.jsx)(n.is,{children:"classroom"}),(0,i.jsx)(n.is,{children:"Lecture Type"}),(0,i.jsx)(n.is,{children:"Day"})]})}),(0,i.jsx)(n.NR,{children:d.length>0?d.map(((e,s)=>e.session.map(((s,a)=>(0,i.jsxs)(n.T6,{"v-for":"item in tableItems",onClick:e=>y(s.session_id),children:[(0,i.jsx)(n.NN,{children:(0,i.jsx)("div",{children:e.classroom})}),(0,i.jsx)(n.NN,{children:(0,i.jsx)("div",{children:e.type.charAt(0).toUpperCase()+e.type.slice(1)})}),(0,i.jsx)(n.NN,{children:(0,i.jsx)("div",{children:s.day})})]},a))))):(0,i.jsx)(n.T6,{"v-for":"item in tableItems",children:(0,i.jsx)(n.NN,{colSpan:3,children:(0,i.jsx)("div",{className:"alert alert-primary w-100 my-2",children:(0,i.jsx)("span",{className:"",children:"No Lecture Sessions Are Thre for This Subject"})})})})})]})})]})})}):null]}):null,p&&(0,i.jsx)(c,{visible:j,setVisible:b,attendances:p,session_data:g}),!d&&(0,i.jsxs)("div",{role:"status",className:"p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700",children:[(0,i.jsx)("div",{className:"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"}),(0,i.jsx)("div",{className:"w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"}),(0,i.jsxs)("div",{className:"flex items-baseline mt-4",children:[(0,i.jsx)("div",{className:"w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-300"}),(0,i.jsx)("div",{className:"w-full h-56 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-300"}),(0,i.jsx)("div",{className:"w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-300"}),(0,i.jsx)("div",{className:"w-full h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-300"}),(0,i.jsx)("div",{className:"w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-300"}),(0,i.jsx)("div",{className:"w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-300"}),(0,i.jsx)("div",{className:"w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-300"}),(0,i.jsx)("div",{className:"w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-300"})]})]})]})},h=t.lazy((()=>a.e(9338).then(a.bind(a,9338)))),m=t.lazy((()=>a.e(811).then(a.bind(a,811)))),u=t.lazy((()=>a.e(9557).then(a.bind(a,9557)))),p=t.lazy((()=>a.e(5722).then(a.bind(a,5722)))),x=t.lazy((()=>a.e(6692).then(a.bind(a,6692)))),j=t.lazy((()=>a.e(6857).then(a.bind(a,6857)))),b=t.lazy((()=>a.e(2808).then(a.bind(a,8062)))),g=t.lazy((()=>a.e(7182).then(a.bind(a,7182)))),f=t.lazy((()=>a.e(5735).then(a.bind(a,5735)))),v=t.lazy((()=>a.e(1001).then(a.bind(a,1001)))),y=t.lazy((()=>a.e(7494).then(a.bind(a,7494)))),N=t.lazy((()=>a.e(1894).then(a.bind(a,1894)))),w=t.lazy((()=>a.e(2422).then(a.bind(a,2422)))),k=t.lazy((()=>a.e(4142).then(a.bind(a,4142)))),S=t.lazy((()=>a.e(44).then(a.bind(a,44)))),T=t.lazy((()=>a.e(1299).then(a.bind(a,1299)))),C=t.lazy((()=>a.e(2670).then(a.bind(a,2670)))),_=t.lazy((()=>Promise.all([a.e(1134),a.e(8417)]).then(a.bind(a,8417)))),z=t.lazy((()=>Promise.resolve().then(a.bind(a,183)))),L=t.lazy((()=>Promise.all([a.e(2426),a.e(7934),a.e(1841)]).then(a.bind(a,1841)))),I=t.lazy((()=>a.e(1681).then(a.bind(a,1681)))),Z=t.lazy((()=>a.e(6882).then(a.bind(a,6882)))),E=t.lazy((()=>a.e(3866).then(a.bind(a,3866)))),A=t.lazy((()=>a.e(644).then(a.bind(a,644)))),F=t.lazy((()=>a.e(3738).then(a.bind(a,3738)))),D=t.lazy((()=>a.e(6027).then(a.bind(a,6027)))),P=t.lazy((()=>a.e(3255).then(a.bind(a,3255)))),U=t.lazy((()=>a.e(4085).then(a.bind(a,4085)))),V=t.lazy((()=>a.e(3861).then(a.bind(a,3861)))),B=t.lazy((()=>a.e(1883).then(a.bind(a,1883)))),O=t.lazy((()=>a.e(1968).then(a.bind(a,1968)))),R=t.lazy((()=>a.e(8386).then(a.bind(a,8386)))),H=t.lazy((()=>a.e(5962).then(a.bind(a,5962)))),M=t.lazy((()=>a.e(9979).then(a.bind(a,9979)))),q=t.lazy((()=>a.e(8099).then(a.bind(a,8037)))),G=t.lazy((()=>Promise.all([a.e(3076),a.e(9958)]).then(a.bind(a,9958)))),W=t.lazy((()=>Promise.all([a.e(2426),a.e(4551)]).then(a.bind(a,4551)))),K=t.lazy((()=>a.e(6657).then(a.bind(a,6657)))),J=t.lazy((()=>a.e(9746).then(a.bind(a,9746)))),X=t.lazy((()=>Promise.all([a.e(4269),a.e(553),a.e(4017)]).then(a.bind(a,4017)))),$=t.lazy((()=>Promise.all([a.e(4269),a.e(1053),a.e(327)]).then(a.bind(a,4106)))),Q=t.lazy((()=>Promise.all([a.e(4269),a.e(7096)]).then(a.bind(a,7096)))),Y=t.lazy((()=>a.e(3304).then(a.bind(a,3304)))),ee=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",element:h},{path:"/theme",name:"Theme",element:m,exact:!0},{path:"/theme/colors",name:"Colors",element:m},{path:"/theme/typography",name:"Typography",element:u},{path:"/base",name:"Base",element:j,exact:!0},{path:"/base/accordion",name:"Accordion",element:p},{path:"/base/breadcrumbs",name:"Breadcrumbs",element:x},{path:"/base/cards",name:"Cards",element:j},{path:"/base/carousels",name:"Carousel",element:b},{path:"/base/collapses",name:"Collapse",element:g},{path:"/base/list-groups",name:"List Groups",element:f},{path:"/base/navs",name:"Navs",element:v},{path:"/base/paginations",name:"Paginations",element:y},{path:"/base/placeholders",name:"Placeholders",element:N},{path:"/base/popovers",name:"Popovers",element:w},{path:"/base/progress",name:"Progress",element:k},{path:"/base/spinners",name:"Spinners",element:S},{path:"/base/tables",name:"Tables",element:T},{path:"/base/tooltips",name:"Tooltips",element:C},{path:"/buttons",name:"Buttons",element:Z,exact:!0},{path:"/buttons/buttons",name:"Buttons",element:Z},{path:"/buttons/dropdowns",name:"Dropdowns",element:A},{path:"/buttons/button-groups",name:"Button Groups",element:E},{path:"/charts",name:"Charts",element:G},{path:"/forms",name:"Forms",element:P,exact:!0},{path:"/forms/form-control",name:"Form Control",element:P},{path:"/forms/select",name:"Select",element:O},{path:"/forms/checks-radios",name:"Checks & Radios",element:F},{path:"/forms/range",name:"Range",element:B},{path:"/forms/input-group",name:"Input Group",element:U},{path:"/forms/floating-labels",name:"Floating Labels",element:D},{path:"/forms/layout",name:"Layout",element:V},{path:"/forms/validation",name:"Validation",element:R},{path:"/icons",exact:!0,name:"Icons",element:X},{path:"/icons/coreui-icons",name:"CoreUI Icons",element:X},{path:"/icons/flags",name:"Flags",element:$},{path:"/icons/brands",name:"Brands",element:Q},{path:"/notifications",name:"Notifications",element:Y,exact:!0},{path:"/notifications/alerts",name:"Alerts",element:Y},{path:"/notifications/badges",name:"Badges",element:t.lazy((()=>a.e(1243).then(a.bind(a,1243))))},{path:"/notifications/modals",name:"Modals",element:t.lazy((()=>a.e(2066).then(a.bind(a,2066))))},{path:"/notifications/toasts",name:"Toasts",element:t.lazy((()=>a.e(5198).then(a.bind(a,5198))))},{path:"/widgets",name:"Widgets",element:t.lazy((()=>Promise.all([a.e(3076),a.e(3393)]).then(a.bind(a,3393))))},{path:"/manage-teachers",name:"Teacher",element:H},{path:"/breadcrumb",name:"Breadcrumbnav",element:M},{path:"/TeacherSidebar",name:"TeacherSidebar",element:q},{path:"/logout",name:"Logout",element:J},{path:"/timetable",name:"Timetable",element:_},{path:"/subject",name:"Subject",element:z},{path:"/addstudent",name:"AddStudent",element:I},{path:"/teacher/dashboard",name:"Teacherview",element:L},{path:"/studentdashboard",name:"StudentDashboard",element:W},{path:"/teacher/session",name:"Sessionmanage",element:K},{path:"/teacher/lectures/history",name:"LectureHistory",element:d}];var se=a(7689),ae=a(2585);a(3645);const te=()=>{const{state:e,dispatch:s}=(0,t.useContext)(ae.y),{accessToken:a,refreshToken:r,batches:l,accessTokenActive:o,profileDetails:c}=e;(0,se.s0)();return(0,t.useEffect)((()=>{a&&c.obj.profile.role}),[]),(0,i.jsx)(n.KB,{lg:!0,children:(0,i.jsx)(t.Suspense,{fallback:(0,i.jsx)(n.LQ,{color:"primary"}),children:(0,i.jsxs)(se.Z5,{children:[ee.map(((e,s)=>e.element&&(0,i.jsx)(se.AW,{path:e.path,exact:e.exact,name:e.name,element:(0,i.jsx)(e.element,{})},s))),"admin"===c.obj.profile.role?(0,i.jsx)(se.AW,{path:"/",element:(0,i.jsx)(se.Fg,{to:"dashboard",replace:!0})}):"teacher"===c.obj.profile.role?(0,i.jsx)(se.AW,{path:"/",element:(0,i.jsx)(se.Fg,{to:"teacher/dashboard",replace:!0})}):"student"===c.obj.profile.role?(0,i.jsx)(se.AW,{path:"/",element:(0,i.jsx)(se.Fg,{to:"studentdashboard",replace:!0})}):void 0]})})})},ne=t.memo(te);var re=a(9434),le=a(4846),oe=a(612);const ie=()=>{(0,se.s0)();const{state:e,dispatch:s}=(0,t.useContext)(ae.y),{profileDetails:a}=e,[r,l]=(0,t.useState)("");(0,t.useEffect)((()=>{a&&l(a.obj.profile.email)}),[a]);return(0,i.jsx)(n.w5,{variant:"nav-item",children:(0,i.jsx)(n.SQ,{placement:"bottom-end",className:"py-0",caret:!1,children:(0,i.jsx)("div",{className:"text-medium-emphasis",children:r})})})},ce=()=>{const{state:e,dispatch:s}=(0,t.useContext)(ae.y),{profileDetails:a}=e,[r,l]=(0,t.useState)("");(0,t.useEffect)((()=>{a&&l(a.email)}),[a]);const o=(0,re.I0)(),c=(0,re.v9)((e=>e.sidebarShow));return(0,i.jsx)(n.PO,{position:"sticky",className:"mb-2",children:(0,i.jsxs)(n.KB,{fluid:!0,children:[(0,i.jsx)(n.X4,{className:"ps-1",onClick:()=>o({type:"set",sidebarShow:!c}),children:(0,i.jsx)(le.Z,{icon:oe.N,size:"lg"})}),(0,i.jsx)(n.g3,{className:"ms-3",children:(0,i.jsx)(ie,{})})]})})};var de=a(3193),he=a(4358);a(2454);const me=a.p+"static/media/smartroll_logo.a3c3e21d0b4a56919e74.png";var ue=a(443);const pe=()=>{const{state:e,dispatch:s}=(0,t.useContext)(ae.y),{accessToken:a,refreshToken:r,profileDetails:l}=e,o=(0,re.I0)(),c=(0,re.v9)((e=>e.sidebarUnfoldable)),d=(0,re.v9)((e=>e.sidebarShow));return(0,i.jsxs)(n.z3,{position:"fixed",palcement:"end",unfoldable:c,visible:d,onVisibleChange:e=>{o({type:"set",sidebarShow:e})},children:[(0,i.jsx)("img",{className:"p-3",src:me}),(0,i.jsx)(n.Xk,{children:(0,i.jsxs)(he.Z,{children:["admin"===l.obj.profile.role&&(0,i.jsx)(de.$,{items:ue.Z.admin_role}),"teacher"===l.obj.profile.role&&(0,i.jsx)(de.$,{items:ue.Z.teacher_role}),"student"===l.obj.profile.role&&(0,i.jsx)(de.$,{items:ue.Z.student_role})]})})]})},xe=t.memo(pe),je=e=>{const{content:s,href:a,name:t}=e,r="s"===t.slice(-1),l="https://coreui.io/react/docs/".concat(a);return(0,i.jsxs)(n.e_,{color:"info",className:"bg-white",children:[s||"A React ".concat(t," component ").concat(r?"have":"has"," been created as a native React.js version\n      of Bootstrap ").concat(t,". ").concat(t," ").concat(r?"are":"is"," delivered with some new features,\n      variants, and unique design that matches CoreUI Design System requirements."),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"For more information please visit our official"," ",(0,i.jsx)(n.h7,{href:l,target:"_blank",children:"documentation of CoreUI Components Library for React.js"}),"."]})},be=t.memo(je),ge=e=>{const{href:s,name:a,text:t,...r}=e,l=a?"https://coreui.io/react/docs/components/".concat(a):s;return(0,i.jsx)("div",{className:"float-end",children:(0,i.jsx)(n.h7,{...r,href:l,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:(0,i.jsx)("small",{className:"text-medium-emphasis",children:t||"docs"})})})},fe=t.memo(ge),ve=e=>{const{children:s}=e;return(0,i.jsx)("div",{className:"example",children:(0,i.jsx)(n.gr,{className:"rounded-bottom",children:(0,i.jsx)(n.IA,{className:"p-3 preview",visible:!0,children:s})})})},ye=t.memo(ve)},3645:(e,s,a)=>{a.d(s,{J:()=>o,w:()=>c});var t=a(5294),n=a(2958),r=a(2062),l=a.n(r);const o=async function(e,s,a,t){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;const c=localStorage.getItem("accessToken"),d=localStorage.getItem("refreshToken");let h;if(t.Authorization="Bearer ".concat(c),window.setProgress(100),"get"===a)try{h={error:!1,response:await e.get("".concat(n.t).concat(s),{headers:t,params:l})}}catch(m){if(m.response&&401===m.response.status){const n=await i(d);localStorage.setItem("accessToken",n.access),localStorage.setItem("refreshToken",n.refresh),h=await o(e,s,a,t,r,l)}else h={error:!0,error:m}}else if("post"===a)try{h={error:!1,response:await e.post("".concat(n.t).concat(s),r,{headers:t})}}catch(m){if(m.response&&401===m.response.status){const n=await i(d);localStorage.setItem("accessToken",n.access),localStorage.setItem("refreshToken",n.refresh),h=await o(e,s,a,t,r,l)}else h={error:!0,error:m}}return h},i=async e=>t.Z.post("".concat(n.t,"/auth/api/token/refresh/"),{refresh:e},{headers:{"ngrok-skip-browser-warning":!0}}).then((e=>e.data)).catch((e=>{throw e})),c=(e,s)=>{l()({title:e,text:s,icon:"success",button:"OK"})}},9792:(e,s,a)=>{a.d(s,{Z:()=>d});var t=a(5294),n=a(7689),r=a(2791),l=a(2585),o=a(2958);const i=async(e,s,a,n,r,l)=>{if("get"===a)return await t.Z.get("".concat(o.t).concat(s),{headers:n,params:l});if("post"===a)return await t.Z.post("".concat(o.t).concat(s),r,{headers:n});throw new Error("Invalid HTTP method")},c=async e=>{try{return(await t.Z.post("".concat(o.t,"/auth/api/token/refresh/, { refresh: ").concat(e," }, { headers: header }"))).data}catch(s){if(401===s.response.status)return{action:"tokenExpired",status:s.response.status}}},d=()=>{const e=(0,n.s0)(),{state:s,dispatch:a}=(0,r.useContext)(l.y),{accessToken:t,refreshToken:o,profileDetails:d,objectCount:h}=s,m={accessToken:t,refreshToken:o},u=async function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,l=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;l.Authorization="Bearer ".concat(s.accessToken);try{return{error:!1,response:await i(t,n,r,l,o,d)}}catch(h){if(!h.response||401!==h.response.status)return{error:!0,errorMessage:h.response.data||"Unknown error"};{const i=await c(s.refreshToken);if(i.access&&i.refresh){const e={accessToken:i.access,refreshToken:i.refresh};return localStorage.setItem("accessToken",i.access),localStorage.setItem("refreshToken",i.refresh),a({type:"ACCESS_TOKEN",payload:i.access}),a({type:"REFRESH_TOKEN",payload:i.refresh}),u(e,t,n,r,l,o,d)}if("tokenExpired"==i.action&&401===i.status)return localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),e("/auth/sign-in/"),{error:!0,result:i}}}};return[m,u]}},6265:(e,s,a)=>{a.r(s),a.d(s,{default:()=>m});var t=a(2791),n=a(947),r=a(7689),l=a(2585),o=a(5294),i=a(2958),c=a(9165),d=a(5443),h=a(184);const m=()=>{const{state:e,dispatch:s}=(0,t.useContext)(l.y),{accessToken:a,refreshToken:m}=e,[u,p]=(0,t.useState)(!1),[x,j]=(0,t.useState)(!0),[b,g]=(0,t.useState)(!1),[f,v]=(0,t.useState)(0),y=(0,r.s0)();"undefined"!==typeof window&&(window.setProgress=v);const N=async e=>{const a={"Content-Type":"application/json","ngrok-skip-browser-warning":!0,Authorization:"Bearer ".concat(e)};o.Z.get("".concat(i.t,"/check_token_authenticity/"),{headers:a}).then((e=>{!0===e.data.data?g(!0):m?(async e=>{o.Z.post("".concat(i.t,"/auth/api/token/refresh/"),{refresh:e},{headers:{"ngrok-skip-browser-warning":!0}}).then((e=>{localStorage.setItem("accessToken",e.data.access),localStorage.setItem("refreshToken",e.data.refresh);const a=(0,c.o)(e.data.access);s({type:"SET_PROFILE",payload:a}),g(!0)})).catch((e=>{alert(e.response.data.detail),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),y("/auth/login")}))})(m):y("/login")})).catch((e=>{localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),y("/login")}))};return(0,t.useEffect)((()=>{(async()=>{o.Z.get("".concat(i.t,"/check_server_avaibility/"),{headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":!0}}).then((e=>{if(p(!0),a){const e=(0,c.o)(a);s({type:"SET_PROFILE",payload:e}),N(a)}else y("/login")})).catch((e=>{y("/404")}))})()}),[]),a&&b?(0,h.jsxs)("div",{children:[(0,h.jsx)(d.Z,{color:"#1f6feb",progress:f,onLoaderFinished:()=>v(0)}),(0,h.jsx)(n.S8,{}),(0,h.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,h.jsx)(n.tf,{}),(0,h.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,h.jsx)(n.Lk,{})})]})]}):null}},183:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var t=a(2791),n=a(2585),r=a(5294),l=a(3645),o=a(2937),i=a(7689),c=a(9792),d=a(184);const h=()=>{const[e,s]=(0,t.useState)(null),[a,h]=(0,t.useState)(null),[m,u]=(0,t.useState)(null),[p,x]=(0,c.Z)(),[j,b]=(0,t.useState)(null),[g,f]=(0,t.useState)(!1),[v,y]=(0,t.useState)(""),[N,w]=(0,t.useState)(""),[k,S]=(0,t.useState)(""),[T,C]=(0,t.useState)(""),{state:_,dispatch:z}=(0,t.useContext)(n.y),{accessToken:L,refreshToken:I}=_;(0,i.s0)();return(0,t.useEffect)((()=>{(async()=>{const e=r.Z.create;let s={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},a=await x(p,e,"/manage/get_terms","get",s);if(0==a.error){let e=a.response;u(e.data.data)}else alert(a.errorMessage.message)})(),(async()=>{const e=r.Z.create();let a={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},t=await x(p,e,"/manage/get_subject","get",a,null,null);if(0==t.error){let e=t.response;s(e.data.data)}})()}),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.rb,{children:(0,d.jsxs)(o.b7,{children:[m&&(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(o.xH,{className:"mb-3",children:[(0,d.jsx)(o.bn,{children:"select term"}),(0,d.jsx)(o.sl,{children:(0,d.jsxs)(o.LX,{"aria-label":"Default select example",onChange:e=>{console.log(e.target.value),(async e=>{r.Z.create();const s=await x(p,r.Z,"/manage/get_semesters","get",{"Content-Type":"application/json","ngrok-skip-browser-warning":!0},null,{term_slug:e});if(0==s.error){const e=s.response;h(e.data.data)}})(e.target.value)},children:[(0,d.jsx)("option",{value:"",children:"Select Term"}),m.map(((e,s)=>(0,d.jsxs)("option",{value:e.slug,children:["term : ",e.start_year," - ",e.end_year]},s)))]})})]})}),a&&(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(o.xH,{className:"mb-3",children:[(0,d.jsx)(o.bn,{children:"Semester"}),(0,d.jsx)(o.sl,{children:(0,d.jsxs)(o.LX,{"aria-label":"Default select example",onChange:e=>{b(e.target.value)},children:[(0,d.jsx)("option",{value:"",children:"Select Semester"}),a.map(((e,s)=>(0,d.jsxs)("option",{value:e.slug,children:["Semester - ",e.no]},s)))]})})]})})]})}),j?(0,d.jsx)(o.rb,{children:(0,d.jsx)(o.b7,{xs:12,children:(0,d.jsxs)(o.xH,{className:"mb-3",children:[(0,d.jsx)(o.bn,{children:(0,d.jsx)("strong",{children:"Subjects"})}),(0,d.jsx)(o.sl,{children:(0,d.jsxs)(o.lx,{className:"row g-3 needs-validation",noValidate:!0,validated:g,onSubmit:e=>{!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),f(!0);const a={code:N,subject_name:v,credit:k,semester_slug:j};e.preventDefault(),(async e=>{const a=r.Z.create();let t={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},n=await(0,l.J)(a,"/manage/add_subject/","post",t,e,null);if(0==n.error){let e=n.response;s((s=>[...s,e.data.data])),(0,l.w)("success","Subject Added successfully...!")}})(a)},children:[(0,d.jsxs)(o.b7,{md:12,children:[(0,d.jsx)(o.L8,{htmlFor:"validationCustom01",children:"Subject Name"}),(0,d.jsx)(o.jO,{type:"text",id:"validationCustom01",onChange:e=>y(e.target.value),required:!0}),(0,d.jsx)(o.CO,{valid:!0,children:"Looks good!"})]}),(0,d.jsxs)(o.b7,{md:6,children:[(0,d.jsx)(o.L8,{htmlFor:"validationCustom01",children:"Subject Code"}),(0,d.jsx)(o.jO,{type:"text",id:"validationCustom01",onChange:e=>w(e.target.value),required:!0}),(0,d.jsx)(o.CO,{valid:!0,children:"Looks good!"})]}),(0,d.jsxs)(o.b7,{md:6,children:[(0,d.jsx)(o.L8,{htmlFor:"validationCustom01",children:"Subject Credit"}),(0,d.jsx)(o.jO,{type:"text",id:"validationCustom01",onChange:e=>S(e.target.value),required:!0}),(0,d.jsx)(o.CO,{valid:!0,children:"Looks good!"})]}),(0,d.jsx)(o.b7,{xs:12,children:(0,d.jsx)("button",{className:"btn btn-outline-dark form-control",type:"submit",children:"Submit form"})})]})})]})})}):null,(0,d.jsx)(o.rb,{children:e?(0,d.jsx)(o.b7,{xs:!0,children:(0,d.jsxs)(o.xH,{className:"mb-4",children:[(0,d.jsx)(o.bn,{children:(0,d.jsx)("strong",{children:"Subject History"})}),(0,d.jsx)(o.sl,{children:(0,d.jsxs)(o.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[(0,d.jsx)(o.V,{color:"light",children:(0,d.jsxs)(o.T6,{children:[(0,d.jsx)(o.is,{children:"Subject Name"}),(0,d.jsx)(o.is,{children:"Subject Code"}),(0,d.jsx)(o.is,{children:"Subject Credit"})]})}),(0,d.jsx)(o.NR,{children:e.map(((e,s)=>(0,d.jsxs)(o.T6,{"v-for":"item in tableItems",children:[(0,d.jsx)(o.NN,{children:(0,d.jsx)("div",{children:e.subject_name.charAt(0).toUpperCase()+e.subject_name.slice(1)})}),(0,d.jsx)(o.NN,{children:(0,d.jsx)("div",{children:e.code})}),(0,d.jsx)(o.NN,{children:(0,d.jsx)("div",{children:e.credit})})]},s)))})]})})]})}):null})]})})}},2673:()=>{}}]);
//# sourceMappingURL=3048.cdc037ad.chunk.js.map