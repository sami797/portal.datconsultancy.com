"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[6357],{

/***/ 76357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Templates_ResetPassword)
});

;// ./src/Components/Templates/ResetPassword/login.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const login_module = ({"row":"login_row__Pvv30","colLeft":"login_colLeft__iwgAA","contentWrap":"login_contentWrap__mIMwr","frameImage":"login_frameImage__ZQf1W","formWrap":"login_formWrap__ZHxSe"});
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/Modules/Auth/index.tsx
var Auth = __webpack_require__(64076);
// EXTERNAL MODULE: ./src/Components/Atoms/Button/index.tsx + 1 modules
var Button = __webpack_require__(17050);
// EXTERNAL MODULE: ./src/Components/Atoms/Headings/index.tsx
var Headings = __webpack_require__(35751);
// EXTERNAL MODULE: ./src/Components/Atoms/Input/index.tsx + 2 modules
var Input = __webpack_require__(58516);
;// ./src/Components/Organisms/ResetPasswordForm/style.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const style_module = ({"form":"style_form__SMfSb","headingWrap":"style_headingWrap__61BQK","logoWrap":"style_logoWrap__8Hwar","forgotPasswordImg":"style_forgotPasswordImg__Q3cWf"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/ResetPasswordForm/index.tsx
const ResetPasswordForm=()=>{// get the url
const url=window.location.pathname;// remove /reset-password/ from the url
const token=url.replace("/reset-password/","");const authModule=(0,react.useMemo)(()=>new Auth/* AuthModule */.r(),[]);const[resetSuccess,setResetSuccess]=(0,react.useState)(false);const onFinish=values=>{if(values.password!==values.confirmPassword){message/* default */.Ay.error("Passwords do not match!");return;}const data={password:values.password,resetToken:token};authModule.resetPassword(data).then(res=>{var _res$data;if(((_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.statusCode)===200){message/* default */.Ay.success(res.data.message);setResetSuccess(true);}}).catch(err=>{const msg=err.response.data.message;message/* default */.Ay.error(msg);});};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.form,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.logoWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.headingWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"lg",weight:"bold",children:"Reset Password!"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"xs",children:resetSuccess?"You can now login with your new password.":"Enter your new password below to reset your password."})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/logo256.png",alt:"logo"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{name:"login",validateTrigger:"onChange",onFinish:onFinish,autoComplete:"off",children:[resetSuccess?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/forgot-password.svg",className:style_module.forgotPasswordImg,alt:"Email sent"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"md",weight:"semi",className:"text-center my-4",children:"Password reset successful! You can now login with your new password."})]}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"password",rules:[{required:true,message:"Please enter your password!"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A,{size:"w100",type:"password",label:"Password",placeHolder:"Password",className:"pa-2"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"confirmPassword",rules:[{required:true,message:"Please confirm your password!"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A,{size:"w100",type:"password",label:"Confirm Password",placeHolder:"Confirm Password",className:"pa-2"})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{size:"w100",type:"primary",htmlType:resetSuccess?"button":"submit",onClick:()=>{if(resetSuccess){window.location.href="/login";}},children:resetSuccess?"Login":"Reset Password"})})]})]});};/* harmony default export */ const Organisms_ResetPasswordForm = (ResetPasswordForm);
;// ./src/Components/Templates/ResetPassword/index.tsx
function ResetPassword(){//if access token is present redirect to dashboard
const access_token=localStorage.getItem("access_token");if(access_token){window.location.href="/";return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{});}return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:!access_token&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:login_module.formWrap,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Organisms_ResetPasswordForm,{})})});}/* harmony default export */ const Templates_ResetPassword = (ResetPassword);

/***/ })

}]);