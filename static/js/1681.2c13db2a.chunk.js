"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1681],{1681:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(2937),n=a(5294),r=a(2791),l=a(9792),i=a(184);const o=()=>{const[e,s]=(0,r.useState)(null),[a,o]=(0,r.useState)(!1),[c,d]=(0,r.useState)(null),[u,m]=(0,r.useState)(null),[p,g]=(0,r.useState)(null),[x,h]=(0,r.useState)(null),[j,_]=(0,r.useState)([]),[b,f]=(0,l.Z)();return(0,r.useEffect)((()=>{(async()=>{const e=n.Z.create();let s={"Content-Typle":"application/json","ngrok-skip-browser-warning":!0},a=await f(b,e,"/manage/get_terms","get",s);if(!1===a.error){const e=a.response;_(e.data.data)}else alert(a.errorMessage.message)})()}),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.rb,{className:"mb-3",children:(0,i.jsxs)(t.b7,{children:[j&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(t.xH,{className:"mb-3",children:[(0,i.jsx)(t.bn,{children:"Term"}),(0,i.jsx)(t.sl,{children:(0,i.jsxs)(t.LX,{"aria-label":"Default select example",onChange:e=>{(async e=>{if(e){const a={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},t=n.Z.create();let r="/manage/get_semesters",l="get",i=a,o=await f(b,t,r,l,i,null,{term_slug:e});if(0==o.error){let e=o.response;s(e.data.data)}else alert(o.errorMessage.message)}else alert("Please select a valid term")})(e.target.value)},children:[(0,i.jsx)("option",{value:"",children:"Select Term"}),j.map(((e,s)=>(0,i.jsxs)("option",{value:e.slug,children:["term: ",e.start_year," : ",e.end_year]},s)))]})})]})}),e&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(t.xH,{className:"mb-3",children:[(0,i.jsx)(t.bn,{children:"Semester"}),(0,i.jsx)(t.sl,{children:(0,i.jsxs)(t.LX,{"aria-label":"Default select example",onChange:e=>{(async e=>{if(" "!=e){const s={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},a=n.Z.create();let t="/manage/get_divisions",r="get",l=await f(b,a,t,r,s,null,{semester_slug:e});if(!1===l.error){const e=l.response;d(e.data.data)}else alert(l.errorMessage.message)}else alert("please select semester")})(e.target.value)},children:[(0,i.jsx)("option",{value:"",children:"Select Semester"}),e.map(((e,s)=>(0,i.jsxs)("option",{value:e.slug,children:["Semester - ",e.no]},s)))]})})]})}),c&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(t.xH,{children:[(0,i.jsx)(t.bn,{children:"Division"}),(0,i.jsx)(t.sl,{children:(0,i.jsxs)(t.LX,{"aria-label":"Default select example",onChange:e=>{o(!0),h(e.target.value)},children:[(0,i.jsx)("option",{value:"",children:"Select division"}),c.map(((e,s)=>(0,i.jsxs)("option",{value:e.slug,children:["Division - ",e.division_name]},s)))]})})]})}),a&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(t.xH,{className:"mt-3",children:[(0,i.jsx)(t.bn,{children:"upload File"}),(0,i.jsxs)(t.sl,{children:[(0,i.jsxs)(t.b7,{xs:12,children:[(0,i.jsx)(t.L8,{htmlFor:"validationCustom01",children:"Enter Sheet name"}),(0,i.jsx)(t.jO,{type:"text",id:"validationCustom01",required:!0,onChange:e=>{g(e.target.value)}})]}),(0,i.jsxs)(t.b7,{xs:12,className:"mt-2",children:[(0,i.jsx)(t.L8,{htmlFor:"validationCustom01",children:"upload excel file"}),(0,i.jsx)(t.jO,{type:"file",id:"validationCustom01",required:!0,onChange:e=>m(e.target.files[0])})]}),(0,i.jsx)(t.b7,{xs:12,className:"mt-3",children:(0,i.jsx)("button",{className:"btn btn-outline-dark form-control",type:"button",onClick:()=>{(async()=>{const e=new FormData;e.append("students.xlsc",u,u.name),e.append("sheet_name",p),e.append("division_slug",x);const s=n.Z.create(),a=await f(b,s,"/manage/upload_students_data/","post",{"Content-Type":"multipart/form-data","ngrok-skip-browser-warning":!0},e,null);if(!1===a.error){const e=a.response;e.data.data.register_count>0?alert("".concat(e.data.data.register_count," student added successfully")):alert("error count : ".concat(e.data.data.error_count))}else alert(a.errorMessage.message)})()},children:"Submit form"})})]})]})})]})})})}}}]);
//# sourceMappingURL=1681.2c13db2a.chunk.js.map