"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[998],{5998:(e,s,l)=>{l.r(s),l.d(s,{default:()=>d});var a=l(2791),t=l(2937),c=l(5294),r=l(9792),n=l(1134),i=l(184);const o=function(e){let{visible:s,setVisible:l,sechedule:o,lectureConfigs:m,schedule_list:d}=e;const[u,h]=(0,r.Z)(),x=(0,a.useRef)(),{register:j,handleSubmit:b}=(0,n.cI)();return(0,a.useEffect)((()=>{}),[x]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(t.N3,{className:"card w-100",placement:"end",visible:s,onHide:()=>l(!1),"data-coreui-backdrop":"static",children:[(0,i.jsxs)(t.Gc,{color:"success",visible:!0,className:"justify-content-between align-items-center d-flex",children:[o.day.toUpperCase(),(0,i.jsx)("svg",{onClick:()=>l(!1),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x-lg",viewBox:"0 0 16 16",children:(0,i.jsx)("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"})})]}),(0,i.jsx)(t.xF,{children:(0,i.jsxs)("form",{className:"container",onSubmit:b((async e=>{if(e.start_time&&e.end_time&&e.teacher&&e.subject&&e.batches&&e.classroom&&e.type){const a=c.Z.create(),t=e;t.schedule_slug=o.slug;const r={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},n=await h(u,a,"/manage/add_lecture_to_schedule/","post",r,t,null);if(!1===n.error){const e=n.response;d((s=>s.map((s=>s.slug===o.slug?{...s,lectures:[...s.lectures,e.data.data]}:s)))),l(!s)}else alert(n.errorMessage.message)}})),ref:x,children:[(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{className:"form-label",children:"Start Time"}),(0,i.jsx)("input",{type:"time",className:"form-control",required:!0,...j("start_time")})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{className:"form-label",children:"End Time"}),(0,i.jsx)("input",{type:"time",className:"form-control",required:!0,...j("end_time")})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{className:"form-label",children:"Select Lecture Type"}),(0,i.jsxs)("select",{className:"form-select","aria-label":"Default select example",required:!0,...j("type"),children:[(0,i.jsx)("option",{value:"",children:"...."}),(0,i.jsx)("option",{value:"theory",children:"Theory"}),(0,i.jsx)("option",{value:"lab",children:"Lab"})]})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{className:"form-label",children:"Select Classroom"}),(0,i.jsxs)("select",{className:"form-select","aria-label":"Default select example",...j("classroom"),children:[(0,i.jsx)("option",{value:"",children:"...."}),m.classrooms&&m.classrooms.map(((e,s)=>(0,i.jsx)("option",{value:e.slug,children:e.class_name},s)))]})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{className:"form-label",children:"Select Subject"}),(0,i.jsxs)("select",{className:"form-select","aria-label":"Default select example",...j("subject"),children:[(0,i.jsx)("option",{value:"",children:"...."}),m.subjects&&m.subjects.map(((e,s)=>(0,i.jsx)("option",{value:e.slug,children:e.subject_name},s)))]})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{className:"form-label",children:"Select Teacher"}),(0,i.jsxs)("select",{className:"form-select","aria-label":"Default select example",...j("teacher"),children:[(0,i.jsx)("option",{value:"",children:"...."}),m.teachers&&m.teachers.map(((e,s)=>(0,i.jsx)("option",{value:e.slug,children:e.profile.name},s)))]})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{className:"form-label",children:"Select Batch"}),(0,i.jsx)("select",{multiple:!0,className:"form-select",size:"3","aria-label":"size 3 select example",...j("batches"),children:m.batches&&m.batches.map(((e,s)=>(0,i.jsx)("option",{value:e.slug,children:e.batch_name},s)))})]}),(0,i.jsx)("button",{type:"submit",className:"form-control btn-outline-success btn mb-3",children:"Submit"}),(0,i.jsx)("button",{type:"button",className:"form-control btn-outline-success btn",onClick:()=>{var e;null===(e=x.current)||void 0===e||e.reset()},children:"Clear"})]})})]})})},m=e=>{let{visible:s,setVisible:l,sechedule:o,lectureConfigs:m,schedule_list:d,proxy_lecture_slug:u}=e;const[h,x]=(0,r.Z)(),j=(0,a.useRef)(),{register:b,handleSubmit:p}=(0,n.cI)();return(0,a.useEffect)((()=>{}),[j]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(t.N3,{className:"card w-100",placement:"end",visible:s,onHide:()=>l(!1),"data-coreui-backdrop":"static",children:[(0,i.jsxs)(t.Gc,{color:"success",visible:!0,className:"justify-content-between align-items-center d-flex",children:[o.day.toUpperCase(),(0,i.jsx)("svg",{onClick:()=>l(!1),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x-lg",viewBox:"0 0 16 16",children:(0,i.jsx)("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"})})]}),(0,i.jsx)(t.xF,{children:(0,i.jsxs)("form",{className:"container",onSubmit:p((async e=>{if(e.start_time&&e.end_time&&e.teacher&&e.subject&&e.batches&&e.classroom&&e.type){const a=c.Z.create(),t=e;t.schedule_slug=o.slug,t.prev_lecture_slug=u;const r={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},n=await x(h,a,"/manage/add_lecture_as_proxy/","post",r,t,null);if(!1===n.error){const e=n.response;d((s=>s.map((s=>s.slug===o.slug?{...s,lectures:[...s.lectures,e.data.data]}:s)))),l(!s)}else alert(n.errorMessage.message)}})),ref:j,children:[(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{className:"form-label",children:"Start Time"}),(0,i.jsx)("input",{type:"time",className:"form-control",required:!0,...b("start_time")})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{className:"form-label",children:"End Time"}),(0,i.jsx)("input",{type:"time",className:"form-control",required:!0,...b("end_time")})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{className:"form-label",children:"Select Lecture Type"}),(0,i.jsxs)("select",{className:"form-select","aria-label":"Default select example",required:!0,...b("type"),children:[(0,i.jsx)("option",{value:"",children:"...."}),(0,i.jsx)("option",{value:"theory",children:"Theory"}),(0,i.jsx)("option",{value:"lab",children:"Lab"})]})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{className:"form-label",children:"Select Classroom"}),(0,i.jsxs)("select",{className:"form-select","aria-label":"Default select example",...b("classroom"),children:[(0,i.jsx)("option",{value:"",children:"...."}),m.classrooms&&m.classrooms.map(((e,s)=>(0,i.jsx)("option",{value:e.slug,children:e.class_name},s)))]})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{className:"form-label",children:"Select Subject"}),(0,i.jsxs)("select",{className:"form-select","aria-label":"Default select example",...b("subject"),children:[(0,i.jsx)("option",{value:"",children:"...."}),m.subjects&&m.subjects.map(((e,s)=>(0,i.jsx)("option",{value:e.slug,children:e.subject_name},s)))]})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{className:"form-label",children:"Select Teacher"}),(0,i.jsxs)("select",{className:"form-select","aria-label":"Default select example",...b("teacher"),children:[(0,i.jsx)("option",{value:"",children:"...."}),m.teachers&&m.teachers.map(((e,s)=>(0,i.jsx)("option",{value:e.slug,children:e.profile.name},s)))]})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{className:"form-label",children:"Select Batch"}),(0,i.jsx)("select",{multiple:!0,className:"form-select",size:"3","aria-label":"size 3 select example",...b("batches"),children:m.batches&&m.batches.map(((e,s)=>(0,i.jsx)("option",{value:e.slug,children:e.batch_name},s)))})]}),(0,i.jsx)("button",{type:"submit",className:"form-control btn-outline-success btn mb-3",children:"Submit"}),(0,i.jsx)("button",{type:"button",className:"form-control btn-outline-success btn",onClick:()=>{var e;null===(e=j.current)||void 0===e||e.reset()},children:"Clear"})]})})]})})},d=()=>{const[e,s]=(0,a.useState)(null),[l,n]=(0,a.useState)(null),[d,u]=(0,a.useState)(null),[h,x]=(0,r.Z)(),[j,b]=(0,a.useState)(null),[p,g]=(0,a.useState)(!1),[f,v]=(0,a.useState)(null),[N,_]=(0,a.useState)(null),[w,y]=(0,a.useState)(null),[S,C]=(0,a.useState)(!1),[k,T]=(0,a.useState)(""),L=async e=>{const s=c.Z.create();let l={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},a=await x(h,s,"/manage/get_lecture_configs","get",l,null,{schedule_slug:e.slug});!1===a.error?(u(e),v(a.response.data.data)):alert(a.errorMessage.message)};return(0,a.useEffect)((()=>{(async()=>{const e=c.Z.create();let s={"Content-Typle":"application/json","ngrok-skip-browser-warning":!0},l=await x(h,e,"/manage/get_terms","get",s);if(!1===l.error){const e=l.response;y(e.data.data)}else alert(l.errorMessage.message)})()}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.rb,{className:"mb-3",children:(0,i.jsxs)(t.b7,{children:[w&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(t.xH,{className:"mb-3",children:[(0,i.jsx)(t.bn,{children:"select term"}),(0,i.jsx)(t.sl,{children:(0,i.jsxs)(t.LX,{"aria-label":"Default select example",onChange:e=>{(async e=>{const l=c.Z.create();let a={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},t=await x(h,l,"/manage/get_semesters","get",a,null,{term_slug:e});if(0==t.error){let e=t.response;s(e.data.data)}else s(null),alert(t.errorMessage.message)})(e.target.value)},children:[(0,i.jsx)("option",{value:"",children:"Select Term"}),w.map(((e,s)=>(0,i.jsxs)("option",{value:e.slug,children:["Term : ",e.start_year," - ",e.end_year]},s)))]})})]})}),e&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(t.xH,{className:"mb-3",children:[(0,i.jsx)(t.bn,{children:"Semester"}),(0,i.jsx)(t.sl,{children:(0,i.jsxs)(t.LX,{"aria-label":"Default select example",onChange:e=>{(async e=>{if(" "!=e){const s={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},l=c.Z.create();let a="/manage/get_divisions",t="get",r=await x(h,l,a,t,s,null,{semester_slug:e});if(!1===r.error){const e=r.response;n(e.data.data),v(null)}else n(null),alert(r.errorMessage.message)}else alert("please select semester")})(e.target.value)},children:[(0,i.jsx)("option",{value:"",children:"Select Semester"}),e.map(((e,s)=>(0,i.jsxs)("option",{value:e.slug,children:["Semester - ",e.no]},s)))]})})]})}),l&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(t.xH,{children:[(0,i.jsx)(t.bn,{children:"Division"}),(0,i.jsx)(t.sl,{children:(0,i.jsxs)(t.LX,{"aria-label":"Default select example",onChange:e=>{(async e=>{if(""!=e){const s={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},l=c.Z.create();let a="/manage/get_timetable",t="get",r=await x(h,l,a,t,s,null,{division_slug:e});if(!1===r.error){const e=r.response;b(e.data.data),_(e.data.data.schedules)}else alert(r.errorMessage.message)}else alert("please select division")})(e.target.value)},children:[(0,i.jsx)("option",{value:"",children:"Select division"}),l.map(((e,s)=>(0,i.jsxs)("option",{value:e.slug,children:["Division - ",e.division_name]},s)))]})})]})})]})}),j?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.rb,{className:"text-center mb-5 justify-content-center",children:(0,i.jsx)(t.b7,{className:"col-lg-10 col-md-10 col-sm-12 col-xs-12",children:(0,i.jsxs)(t.xH,{className:"",children:[(0,i.jsxs)(t.bn,{children:["Division - ",j?j.division.division_name:""]}),(0,i.jsx)(t.sl,{children:(0,i.jsx)(t.rb,{className:"flex-column",style:{padding:"0"},children:j?N.map(((e,s)=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(t.b7,{className:"mb-4 d-flex align-items-center flex-column",children:[(0,i.jsxs)(t.Gc,{className:"m-0 rounded-0 w-100 p-2 d-flex justify-content-between align-items-center",color:"primary",visible:!0,onClose:()=>g(!1),children:[e.day.toUpperCase(),(0,i.jsx)("button",{className:"btn",onClick:()=>{L(e),g(!0)},children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-plus-circle",viewBox:"0 0 16 16",children:[(0,i.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),(0,i.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"})]})})]}),(0,i.jsx)(t.xH,{className:"w-100  rounded-0 border-0",children:(0,i.jsx)(t.sl,{className:"",children:(0,i.jsx)(t.rb,{className:"justify-content-center",children:e.lectures.length>0?e.lectures.map(((s,l)=>(0,i.jsxs)(t.oo,{autohide:!1,visible:!0,className:"mb-3 w-100 ".concat(s.is_proxy?"border-red-700":""),children:[(0,i.jsxs)(t.xZ,{className:"d-flex flex-wrap justify-content-sm-between justify-content-center",children:[s.is_proxy?(0,i.jsxs)("div",{className:"w-100 fw-bold mx-2 my-2",children:[(0,i.jsxs)("small",{className:"mx-2 my-2",children:[s.is_proxy?"Proxied from ":"",s.link?s.link.from_lecture.subject.subject_name:""]}),(0,i.jsx)("hr",{className:"w-100 my-2"})]}):null,(0,i.jsx)("div",{className:"fw-bold mx-2 my-2",children:s.subject.subject_name.charAt(0).toUpperCase()+s.subject.subject_name.slice(1)}),(0,i.jsx)("small",{className:"mx-2 my-2",children:s.type.toUpperCase()}),(0,i.jsxs)("small",{className:"mx-2 my-2",children:[s.start_time.slice(0,5)," |"," ",s.end_time.slice(0,5)]})]}),(0,i.jsxs)(t.S3,{className:"d-flex flex-row flex-wrap justify-content-center justify-content-md-between",children:[(0,i.jsxs)("span",{className:"mx-3",children:["Prof - ",s.teacher.charAt(0).toUpperCase()+s.teacher.slice(1)," "]}),(0,i.jsxs)("span",{children:["batches - ",s.batches.map(((e,l)=>(0,i.jsxs)("span",{children:[e.batch_name.toUpperCase(),l<s.batches.length-1&&", "]},l)))," "]})," ",(0,i.jsx)("span",{className:"mx-3",children:s.classroom.class_name.charAt(0).toUpperCase()+s.classroom.class_name.slice(1)})," "]}),!s.is_proxy&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("hr",{className:"w-100"}),(0,i.jsx)("div",{className:"d-flex w-100 mb-3",children:(0,i.jsx)("div",{className:"w-100",children:(0,i.jsx)("button",{className:"btn btn-outline-dark w-100 mt-3",onClick:l=>{L(e),T(s.slug),C(!0)},children:"Add Proxy"})})})]})]},l))):(0,i.jsx)(t.oo,{autohide:!1,visible:!0,children:(0,i.jsx)(t.S3,{children:"No Lectures Found"})})})})})]},s)}))):(0,i.jsx)(t.oo,{autohide:!1,visible:!0,children:(0,i.jsx)(t.S3,{children:"No Schedules Found"})})})})]})})})}):(0,i.jsxs)(t.oo,{animation:!1,autohide:!1,visible:!0,className:"mx-auto w-100",children:[(0,i.jsx)(t.xZ,{className:"bg-dark d-flex justify-content-center",children:(0,i.jsx)("img",{src:"/static/media/smartroll_logo.a3c3e21d0b4a56919e74.png",width:100})}),w?e?l?(0,i.jsx)(t.S3,{children:"Select a division"}):(0,i.jsx)(t.S3,{children:"Select a semester "}):(0,i.jsx)(t.S3,{children:"Select a term "}):null]}),d&&(0,i.jsx)(o,{visible:p,setVisible:g,sechedule:d,lectureConfigs:f,schedule_list:_}),d&&(0,i.jsx)(m,{visible:S,setVisible:C,sechedule:d,lectureConfigs:f,schedule_list:_,proxy_lecture_slug:k})]})}}}]);
//# sourceMappingURL=998.55f68c8f.chunk.js.map