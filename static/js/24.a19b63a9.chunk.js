"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[24],{2958:(e,t,a)=>{a.d(t,{I:()=>s,t:()=>r});const r="https://smartroll.ldce.mnv-dev.live",s="wss://smartroll.ldce.mnv-dev.live"},3024:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var r=a(2791),s=a(5294),l=a(7689),o=a(1087),n=a(2585),c=a(2958),d=(a(8114),a(2673),a(1134)),i=a(2937),p=a(184);function u(){const e=(0,l.s0)(),{register:t,handleSubmit:a}=(0,d.cI)(),{state:u,dispatch:m}=(0,r.useContext)(n.y),{refreshToken:f,set404:h,loader_state:b}=u;(0,r.useEffect)((()=>{h&&(e("/404"),m({type:"SET_404",payload:!1}))}),[h]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:b?"":"d-none",style:{backdropFilter:"blur(5px)",height:"100vh",width:"100%",position:"absolute",zIndex:9999,top:0,justifyContent:"center",display:"flex",alignItems:"center",left:0},children:(0,p.jsx)("img",{className:"animated-container",style:{height:"10vh"},src:"/static/svgs/loader.svg"})}),(0,p.jsx)("div",{className:"h-screen bg-center sm:p-10 p-2",style:{backgroundImage:"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")"},children:(0,p.jsx)("section",{className:"w-full h-full flex justify-center items-center",children:(0,p.jsx)("div",{className:"text-white sm:w-full w-75",children:(0,p.jsxs)("form",{className:"max-w-sm mx-auto",onSubmit:a((t=>{m({type:"LOADER_STATE",payload:!0});s.Z.post("".concat(c.t,"/auth/api/login/"),{email:t.email,password:t.password},{header:{"ngrok-skip-browser-warning":!0}}).then((t=>{m({type:"LOADER_STATE",payload:!1}),m({type:"ACCESS_TOKEN",payload:t.data.access}),m({type:"REFRESH_TOKEN",payload:t.data.refresh}),localStorage.setItem("accessToken",t.data.access),localStorage.setItem("refreshToken",t.data.refresh),e("/")})).catch((e=>{m({type:"LOADER_STATE",payload:!1}),"ERR_NETWORK"===e.code?m({type:"SET_404",payload:!0}):401===e.response.status&&alert(e.response.data.detail)}))})),autoComplete:"off",children:[(0,p.jsxs)("div",{className:"relative border-b-2\tborder-slate-500 z-0 w-full mb-5 group",children:[(0,p.jsx)("input",{type:"email",name:"floating_email",id:"floating_email",className:"block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0,...t("email")}),(0,p.jsx)("label",{htmlFor:"floating_email",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Email address"})]}),(0,p.jsxs)("div",{className:"relative z-0 border-b-2\tborder-slate-500 w-full mb-5 group",children:[(0,p.jsx)("input",{type:"password",name:"floating_password",id:"floating_password",className:"block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:"",required:!0,...t("password")}),(0,p.jsx)("label",{htmlFor:"floating_email",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Password"})]}),(0,p.jsx)(i.rb,{children:(0,p.jsx)(i.b7,{children:(0,p.jsx)("button",{type:"submit",className:"w-100 focus:ring-4  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  text-black",style:{background:"#ffa31a"},children:" Login "})})}),(0,p.jsx)(i.rb,{className:"justify-center mt-4",children:(0,p.jsxs)(i.b7,{className:"w-full text-center",children:[(0,p.jsxs)("div",{className:"text-black",children:[" Do not have an account?  ",(0,p.jsx)(o.rU,{to:"/register",className:"ml-2",style:{color:"#ffa31a"},children:"Register"})]}),(0,p.jsxs)("div",{className:"text-black",children:[" Or ",(0,p.jsx)("button",{className:"",type:"button",onClick:()=>{const e=prompt("Please enter your enrollment no!!");if(isNaN(e))return void alert("Please enter a valid enrollment number!!");s.Z.post("".concat(c.t,"/auth/api/forgot_password/"),{enrollment:e},{header:{"ngrok-skip-browser-warning":!0}}).then((e=>{alert("Reset password link has been sent to your registered email...")})).catch((e=>{alert(e.response.data.message)}))},style:{color:"#ffa31a"},children:"Forgot Password"})]})]})})]})})})})]})}},2673:()=>{},8114:()=>{}}]);
//# sourceMappingURL=24.a19b63a9.chunk.js.map