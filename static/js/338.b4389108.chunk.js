"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[338,255,85,386,979],{9979:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var r=t(2791),a=t(2585),n=t(2937),i=(t(8682),t(184));const l=e=>{const{state:s,dispatch:t}=(0,r.useContext)(a.y),{objectCount:l,profileDetails:c}=s,{currentStep:o,chageSteps:d}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.rb,{className:"mb-2",children:(0,i.jsx)(n.b7,{xl:!0,children:(0,i.jsx)(n.xH,{children:(0,i.jsxs)(n.sl,{style:{display:"flex",justifyContent:"space-between",flexDirection:"column"},children:[(0,i.jsx)("nav",{"aria-label":"breadcrumb",children:(0,i.jsxs)("ol",{className:"mb-3 breadcrumb d-flex align-items-center text-sm sm:text-lg",style:{margin:"0"},children:[(0,i.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:(0,i.jsx)("svg",{style:{marginTop:"-3"},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-house",viewBox:"0 0 16 16",children:(0,i.jsx)("path",{d:"M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"})})}),{term:["term"],semester:["term","semester"],division:["term","semester","division"],batch:["term","semester","division","batch"]}[o].map(((e,s)=>(0,i.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:(0,i.jsx)("a",{style:{cursor:"grab"},onClick:()=>{d(e)},className:e===o?"disabled":"",children:e})},s)))]})}),(0,i.jsxs)("span",{className:"text-sm sm:text-lg",children:["Branch - ",c.obj.branch.branch_name]})]})})})})})}},9338:(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var r=t(2791),a=t(2937),n=t(5294),i=t(3255),l=t(4085),c=t(8386),o=t(2585),d=(t(2958),t(3645)),h=t(9979),m=t(9792),x=t(7689),u=(t(9160),t(184));const j=(e,s)=>{const{state:t,dispatch:i}=(0,r.useContext)(o.y),{accessToken:l,refreshToken:c,batches:h,currentBatch:j,objectCount:g}=t,[p,b]=(0,r.useState)(!1),v=(new Date).getFullYear(),[f,y]=(0,r.useState)(""),[S,C]=(0,r.useState)(v),_=(parseInt(S,10)+1).toString(),[k,N]=((0,x.s0)(),(0,m.Z)());return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(a.lx,{className:"row g-3 needs-validation",noValidate:!0,validated:p,onSubmit:t=>{const r=t.currentTarget;t.preventDefault(),!1===r.checkValidity()&&(t.preventDefault(),t.stopPropagation()),b(!0);(async t=>{const r=n.Z.create();let a={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},l=await N(k,r,"/manage/add_term/","post",a,t,null);if(0==l.error){let t=l.response,r={...g};r.terms+=1,i({type:"GET_OBJECTS",payload:r}),e((e=>[...e,t.data.data])),s((e=>e+1)),(0,d.w)("success","Bactch Added successfully...!")}else alert(l.errorMessage.message)})({start_year:S,end_year:_})},children:[(0,u.jsxs)(a.b7,{md:6,children:[(0,u.jsx)(a.L8,{htmlFor:"validationCustom01",children:"Start Year"}),(0,u.jsx)(a.jO,{type:"number",min:v,max:"2099",step:"1",value:S,id:"validationCustom01",onChange:e=>C(e.target.value),required:!0,maxLength:4}),(0,u.jsx)(a.CO,{valid:!0,children:"Looks good!"})]}),(0,u.jsxs)(a.b7,{md:6,children:[(0,u.jsx)(a.L8,{htmlFor:"validationCustom02",children:"End Year"}),(0,u.jsx)(a.jO,{type:"number",value:_,readOnly:!0,step:"1",id:"validationCustom02",required:!0,maxLength:4}),(0,u.jsx)(a.CO,{valid:!0,children:"Looks good!"})]}),(0,u.jsx)(a.b7,{xs:12,children:(0,u.jsx)("button",{className:"btn btn-outline-dark form-control",type:"submit",children:"Submit form"})})]})})},g=e=>{const{chageSteps:s}=e,{set_term_slug:t}=e,{set_term_count:i}=e,{state:l,dispatch:c}=(0,r.useContext)(o.y),{accessToken:d,refreshToken:h,batches:g,currentBatch:p}=l,[b,v]=((0,x.s0)(),(0,r.useState)([])),[f,y]=(0,m.Z)(),[S,C]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{const e=n.Z.create();let s={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},t=await y(f,e,"/manage/get_terms","get",s);if(0==t.error){let e=t.response;C(e.data.data)}else alert(t.errorMessage.message)})()}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.rb,{children:(0,u.jsx)(a.b7,{xs:12,children:(0,u.jsxs)(a.xH,{className:"mb-3",children:[(0,u.jsx)(a.bn,{children:(0,u.jsx)("strong",{children:"Term"})}),(0,u.jsx)(a.sl,{children:j(C,i)})]})})}),(0,u.jsx)(a.rb,{children:(0,u.jsx)(a.b7,{xs:!0,children:(0,u.jsxs)(a.xH,{className:"mb-4",children:[(0,u.jsx)(a.bn,{children:(0,u.jsx)("strong",{children:"Term History"})}),(0,u.jsx)(a.sl,{children:S.length>0?(0,u.jsxs)(a.Sx,{align:"middle",className:"mb-0 border text-center",hover:!0,responsive:!0,children:[(0,u.jsx)(a.V,{color:"light",children:(0,u.jsxs)(a.T6,{children:[(0,u.jsx)(a.is,{children:"Start Year"}),(0,u.jsx)(a.is,{children:"End Year"})]})}),(0,u.jsx)(a.NR,{children:S.map(((e,r)=>(0,u.jsxs)(a.T6,{"v-for":"item in tableItems",onClick:()=>{s("semester"),t(e.slug)},style:{cursor:"grab"},children:[(0,u.jsx)(a.NN,{children:(0,u.jsx)("div",{children:e.start_year})}),(0,u.jsx)(a.NN,{children:(0,u.jsx)("div",{children:e.end_year})})]},r)))})]}):(0,u.jsx)("p",{children:"no Terms"})})]})})})]})},p=()=>{const[e,s]=(0,r.useState)("term"),[t,d]=(0,r.useState)(""),[x,j]=(0,r.useState)(""),[p,b]=(0,r.useState)(""),[v,f]=(0,r.useState)(0),[y,S]=(0,r.useState)(0),[C,_]=(0,r.useState)(0),[k,N]=(0,r.useState)(0),{state:w,dispatch:T}=(0,r.useContext)(o.y),{accessToken:B,refreshToken:L,profileDetails:E,objectCount:V}=w,[Z,D]=(0,r.useState)(""),[O,F]=(0,m.Z)(),[H,M]=(0,r.useState)("");(0,r.useEffect)((()=>{"admin"===E.obj.profile.role&&A()}),[]);const A=async()=>{const e=n.Z.create();let s={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},t=await F(O,e,"/manage/get_object_counts","get",s);if(0==t.error){let e=t.response;T({type:"GET_OBJECTS",payload:e.data})}else alert(t.errorMessage.message)},P=e=>{s(e)};console.log(C);const J=[{title:"Terms",value:V.terms,nextStep:"semester"},{title:"Semester",value:V.semesters,nextStep:"semester"},{title:"divison",value:V.divisons,nextStep:"subject"},{title:"Batches",value:V.batches,nextStep:"batch"}];return console.log(V),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h.default,{currentStep:e,chageSteps:P}),(0,u.jsx)(a.xH,{className:"mb-4",children:(0,u.jsx)(a.Bt,{children:(0,u.jsx)(a.rb,{xs:{cols:1},md:{cols:4},className:"text-center",children:J.map(((e,s)=>(0,u.jsx)(a.b7,{className:"mb-sm-2 mb-0",children:(0,u.jsxs)(a.u5,{style:{backgroundColor:"transparent",border:"none",cursor:"default"},children:[(0,u.jsx)("div",{className:"text-medium-emphasis",children:e.title}),(0,u.jsxs)("strong",{style:{color:"black"},children:[e.value," ",e.percent]})]})},s)))})})}),(()=>{switch(e){case"term":return(0,u.jsx)(g,{chageSteps:P,set_term_slug:M,set_term_count:f});case"semester":return(0,u.jsx)(c.default,{chageSteps:P,term_slug:H,set_semester_slug:d,setsemCount:S});case"division":return(0,u.jsx)(i.default,{chageSteps:P,semester_slug:t,set_division_slug:D,set_divisionCount:_});case"batch":return(0,u.jsx)(l.default,{chageSteps:P,division_slug:Z,setsubSlug:b,setBatchCout:N})}})()]})}},3255:(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var r=t(2791),a=t(5294),n=t(2585),i=(t(2958),t(2937)),l=(t(9160),t(3645)),c=t(7689),o=t(9792),d=t(184);const h=(e,s,t)=>{const[h,m]=(0,o.Z)(),[x,u]=(0,r.useState)(!1),[j,g]=(0,r.useState)(null),{state:p,dispatch:b}=(0,r.useContext)(n.y),{accessToken:v,refreshToken:f,semesters:y,objectCount:S}=p,[C,_]=(0,r.useState)(S);(0,c.s0)();return(0,d.jsxs)(i.lx,{className:"row g-3 needs-validation",noValidate:!0,validated:x,onSubmit:r=>{!1===r.currentTarget.checkValidity()&&(r.preventDefault(),r.stopPropagation()),r.preventDefault(),u(!0);(async s=>{if(j){const r={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},n=a.Z.create();let i="/manage/add_division/",c="post",o=r,d=await m(h,n,i,c,o,s,null);if(0==d.error){let s=d.response,r={...S};console.log(S),r.divisons+=1,console.log(r.divison),b({type:"GET_OBJECTS",payload:r}),e((e=>[...e,s.data.data])),t((e=>e+1)),(0,l.w)("success","Semester Added successfully...!")}else alert(d.errorMessage.message)}else alert("Please Enter The Valid Division Name")})({division_name:j,semester_slug:s})},children:[(0,d.jsxs)(i.b7,{md:12,children:[(0,d.jsx)(i.L8,{htmlFor:"validationCustom01",children:"Division Name"}),(0,d.jsx)(i.jO,{type:"text",id:"validationCustom01",onChange:e=>g(e.target.value.toUpperCase()),required:!0,maxLength:1}),(0,d.jsx)(i.CO,{valid:!0,children:"Looks good!"})]}),(0,d.jsx)(i.b7,{xs:12,children:(0,d.jsx)("button",{className:"btn btn-outline-dark form-control",type:"submit",children:"Submit form"})})]})},m=e=>{const{semester_slug:s,chageSteps:t,set_division_slug:o,set_divisionCount:m}=e,[x,u]=(0,r.useState)([]),{state:j,dispatch:g}=(0,r.useContext)(n.y),{accessToken:p,refreshToken:b,semesters:v}=j;(0,c.s0)();return(0,r.useEffect)((()=>{(async()=>{const e=a.Z.create();let t={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},r=await(0,l.J)(e,"/manage/get_divisions","get",t,null,{semester_slug:s});if(0==r.error){let e=r.response;u(e.data.data)}else alert(r.errorMessage.message)})()}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.rb,{children:(0,d.jsx)(i.b7,{xs:12,children:(0,d.jsxs)(i.xH,{className:"mb-3",children:[(0,d.jsx)(i.bn,{children:(0,d.jsx)("strong",{children:"Divison"})}),(0,d.jsx)(i.sl,{children:h(u,s,m)})]})})}),(0,d.jsx)(i.rb,{children:(0,d.jsx)(i.b7,{xs:!0,children:(0,d.jsxs)(i.xH,{className:"mb-4",children:[(0,d.jsx)(i.bn,{children:(0,d.jsx)("strong",{children:"Division History"})}),(0,d.jsx)(i.sl,{children:(0,d.jsxs)(i.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[(0,d.jsx)(i.V,{color:"light",children:(0,d.jsx)(i.T6,{onClick:()=>{t("batch")},style:{textAlign:"center"},children:(0,d.jsx)(i.is,{children:"Division Name"})})}),(0,d.jsx)(i.NR,{style:{textAlign:"center"},children:x.map(((e,s)=>(0,d.jsx)(i.T6,{onClick:()=>{t("batch"),o(e.slug)},style:{cursor:"pointer"},children:(0,d.jsx)(i.NN,{children:(0,d.jsx)("div",{children:e.division_name})})},s)))})]})})]})})})]})}},4085:(e,s,t)=>{t.r(s),t.d(s,{default:()=>j});var r=t(2791),a=t(2007),n=t.n(a),i=t(2585),l=t(5294),c=(t(2958),t(9160),t(3645)),o=t(2937),d=t(7689),h=(t(9434),t(9792)),m=t(184);const x=(e,s,t)=>{const[a,n]=(0,r.useState)(!1),[x,u]=(0,r.useState)(null),{state:j,dispatch:g}=(0,r.useContext)(i.y),{accessToken:p,refreshToken:b,objectCount:v}=j,[f,y]=((0,d.s0)(),(0,h.Z)());return(0,m.jsxs)(o.lx,{className:"row g-3 needs-validation",noValidate:!0,validated:a,onSubmit:r=>{!1===r.currentTarget.checkValidity()&&(r.preventDefault(),r.stopPropagation()),n(!0);const a={division_slug:e,batch_name:x};r.preventDefault(),(async e=>{x||alert("Please Enter The Valid Batch Name");const r=l.Z.create();let a={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},n=await y(f,r,"/manage/add_batch/","post",a,e,null);if(0==n.error){let e=n.response,r={...v};r.batches+=1,console.log(r),g({type:"GET_OBJECTS",payload:r}),s((s=>[...s,e.data.data])),t((e=>e+1)),(0,c.w)("success","Batch Added successfully...!")}else alert(n.errorMessage.message)})(a)},children:[(0,m.jsxs)(o.b7,{md:12,children:[(0,m.jsx)(o.L8,{htmlFor:"validationCustom01",children:"Batch Name"}),(0,m.jsx)(o.jO,{type:"text",id:"validationCustom01",onChange:e=>u(e.target.value),required:!0}),(0,m.jsx)(o.CO,{valid:!0,children:"Looks good!"})]}),(0,m.jsx)(o.b7,{xs:12,children:(0,m.jsx)("button",{className:"btn btn-outline-dark form-control",type:"submit",children:"Submit form"})})]})},u=e=>{const[s,t]=(0,h.Z)(),{state:a,dispatch:n}=(0,r.useContext)(i.y),{accessToken:u,refreshToken:j,semesters:g}=a,{division_slug:p,chageSteps:b,setBatchCout:v}=((0,d.s0)(),e),[f,y]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{const e=l.Z.create();let s={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},t=await(0,c.J)(e,"/manage/get_batches","get",s,null,{division_slug:p});if(0==t.error){let e=t.response;y(e.data.data)}else alert(t.errorMessage.message)})()}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.rb,{children:(0,m.jsx)(o.b7,{xs:12,children:(0,m.jsxs)(o.xH,{className:"mb-3",children:[(0,m.jsx)(o.bn,{children:(0,m.jsx)("strong",{children:"Batches"})}),(0,m.jsx)(o.sl,{children:x(p,y,v)})]})})}),(0,m.jsx)(o.rb,{children:(0,m.jsx)(o.b7,{xs:!0,children:(0,m.jsxs)(o.xH,{className:"mb-4",children:[(0,m.jsx)(o.bn,{children:(0,m.jsx)("strong",{children:"Batch History"})}),(0,m.jsx)(o.sl,{children:(0,m.jsxs)(o.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[(0,m.jsx)(o.V,{color:"light",children:(0,m.jsx)(o.T6,{className:"text-center",children:(0,m.jsx)(o.is,{children:"Batch Name"})})}),(0,m.jsx)(o.NR,{children:f.map(((e,s)=>(0,m.jsx)(o.T6,{"v-for":"item in tableItems",children:(0,m.jsx)(o.NN,{children:(0,m.jsxs)("div",{className:"text-center",children:[e.division.division_name," | ",e.batch_name]})})},s)))})]})})]})})})]})};u.prototype={chageSteps:n().func.isRequired,semSlug:n().string};const j=u},8386:(e,s,t)=>{t.r(s),t.d(s,{default:()=>h});var r=t(2791),a=t(5294),n=t(7689),i=(t(3645),t(9792)),l=t(2937),c=t(2585),o=(t(2958),t(9160),t(184));const d=(e,s,t)=>{const{state:d,dispatch:h}=(0,r.useContext)(c.y),{accessToken:m,refreshToken:x,batches:u,currentBatch:j,objectCount:g}=d,[p,b]=(0,r.useState)(!1),v=(new Date).getFullYear(),[f,y]=(0,r.useState)(0),[S,C]=(0,r.useState)(v),[_,k]=((parseInt(S,10)+1).toString(),(0,n.s0)(),(0,i.Z)());return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(l.lx,{className:"row g-3 needs-validation",noValidate:!0,validated:p,onSubmit:r=>{const n=r.currentTarget;if(r.preventDefault(),!1===n.checkValidity())return r.preventDefault(),r.stopPropagation(),void alert("Please enter the valid semester details");b(!0);(async t=>{if(0!=f){const r={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},n=a.Z.create();let i="/manage/add_semester/",l="post",c=r,o=await k(_,n,i,l,c,t,null);if(0==o.error){let t=o.response,r={...g};r.semesters+=1,h({type:"GET_OBJECTS",payload:r}),e((e=>[...e,t.data.data])),s((e=>e+1))}else alert(o.errorMessage.message)}else alert("Please Enter the Valid Semester Number")})({term_slug:t,no:f})},children:[(0,o.jsxs)(l.b7,{md:12,children:[(0,o.jsx)(l.L8,{htmlFor:"validationCustom01",children:"Semester Number"}),(0,o.jsx)(l.jO,{type:"number",min:1,max:8,step:"1",id:"validationCustom01",onChange:e=>y(e.target.value),required:!0,maxLength:1}),(0,o.jsx)(l.CO,{valid:!0,children:"Looks good!"})]}),(0,o.jsx)(l.b7,{xs:12,children:(0,o.jsx)("button",{className:"btn btn-outline-dark form-control",type:"submit",children:"Submit form"})})]})})},h=e=>{const{chageSteps:s}=e,{set_semester_slug:t}=e,{setsemCount:h}=e,{term_slug:m}=e,{state:x,dispatch:u}=(0,r.useContext)(c.y),{accessToken:j,refreshToken:g,batches:p,currentBatch:b}=x,[v,f]=((0,n.s0)(),(0,r.useState)([])),[y,S]=(0,i.Z)();return(0,r.useEffect)((()=>{j&&(async()=>{const e=a.Z.create();let s={"Content-Type":"application/json","ngrok-skip-browser-warning":!0},t=await S(y,e,"/manage/get_semesters","get",s,null,{term_slug:m});if(0==t.error){let e=t.response;f(e.data.data)}else alert(t.errorMessage.message)})()}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.rb,{children:(0,o.jsx)(l.b7,{xs:12,children:(0,o.jsxs)(l.xH,{className:"mb-3",children:[(0,o.jsx)(l.bn,{children:(0,o.jsx)("strong",{children:"Semesters"})}),(0,o.jsx)(l.sl,{children:d(f,h,m)})]})})}),(0,o.jsx)(l.rb,{children:(0,o.jsx)(l.b7,{xs:!0,children:(0,o.jsxs)(l.xH,{className:"mb-4",children:[(0,o.jsx)(l.bn,{children:(0,o.jsx)("strong",{children:"Semester History"})}),(0,o.jsx)(l.sl,{children:(0,o.jsxs)(l.Sx,{align:"middle",className:"mb-0 border text-center",hover:!0,responsive:!0,children:[(0,o.jsx)(l.V,{color:"light",children:(0,o.jsxs)(l.T6,{children:[(0,o.jsx)(l.is,{children:"Semester No"}),(0,o.jsx)(l.is,{children:"Activation Status"})]})}),(0,o.jsx)(l.NR,{children:v.map(((e,r)=>(0,o.jsxs)(l.T6,{"v-for":"item in tableItems",onClick:()=>{s("division"),t(e.slug)},style:{cursor:"grab"},children:[(0,o.jsx)(l.NN,{children:(0,o.jsx)("div",{children:e.no})}),(0,o.jsx)(l.NN,{children:(0,o.jsx)("div",{className:"d-flex justify-content-center",children:e.status?(0,o.jsx)("div",{children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-check-circle-fill",viewBox:"0 0 16 16",children:(0,o.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})})}):(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x-circle-fill",viewBox:"0 0 16 16",children:(0,o.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})})})})]},r)))})]})})]})})})]})}},8682:()=>{}}]);
//# sourceMappingURL=338.b4389108.chunk.js.map