"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[548],{

/***/ 90548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Login)
});

// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(87094);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(41988);
// EXTERNAL MODULE: ./src/Components/Atoms/Headings/index.tsx
var Headings = __webpack_require__(35751);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/MailOutlined.js + 1 modules
var MailOutlined = __webpack_require__(51400);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__(52765);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/Modules/Auth/index.tsx
var Auth = __webpack_require__(64076);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./src/services/tokenService.ts
var tokenService = __webpack_require__(92966);
// EXTERNAL MODULE: ./src/Redux/Reducers/LoginReducer/types.ts
var types = __webpack_require__(38765);
;// ./src/Redux/Reducers/LoginReducer/action.ts
const authModule=new Auth/* AuthModule */.r();const loginApi=(data,callback)=>async(dispatch,getState)=>{const{loginDetails}=getState()["loginReducer"];dispatch({type:types/* SET_LOGIN_DATA */.w,payload:(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},loginDetails),{},{loading:true})});try{authModule.login(data).then(res=>{var _res$data,_res$data2;const data=(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data;if(data!==null&&data!==void 0&&data.token){var _data$token,_data$token2,_res$data$data;tokenService/* default */.A.updateLocalAccessToken(data===null||data===void 0?void 0:(_data$token=data.token)===null||_data$token===void 0?void 0:_data$token.access_token);tokenService/* default */.A.updateLocalRefreshToken(data===null||data===void 0?void 0:(_data$token2=data.token)===null||_data$token2===void 0?void 0:_data$token2.refresh_token);tokenService/* default */.A.saveUserData((_res$data$data=res.data.data)===null||_res$data$data===void 0?void 0:_res$data$data.userData);}dispatch({type:types/* SET_LOGIN_DATA */.w,payload:(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},loginDetails),{},{loading:false,data:(_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.data})});callback&&callback();}).catch(err=>{dispatch({type:types/* SET_LOGIN_DATA */.w,payload:(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},loginDetails),{},{loading:false,errorData:err})});});}catch(error){dispatch({type:types/* SET_LOGIN_DATA */.w,payload:(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},loginDetails),{},{loading:false,errorData:error})});}};const refreshToken=accessToken=>dispatch=>{dispatch({type:REFRESH_TOKEN,payload:accessToken});};
// EXTERNAL MODULE: ./src/Components/Atoms/Button/index.tsx + 1 modules
var Button = __webpack_require__(17050);
// EXTERNAL MODULE: ./src/Components/Atoms/Input/index.tsx + 2 modules
var Input = __webpack_require__(58516);
// EXTERNAL MODULE: ./src/Components/Icons/index.tsx + 58 modules
var Icons = __webpack_require__(63668);
;// ./src/Components/Organisms/LoginForm/style.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const style_module = ({"form":"style_form__b7tbV","headingWrap":"style_headingWrap__ES1uo","logoWrap":"style_logoWrap__I4oqu","logo":"style_logo__cXUgB","forgotPasswordImg":"style_forgotPasswordImg__WwOHD"});
;// ./src/Components/Atoms/LogoTextLoop/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"slide_up":"styles_slide_up__pyMOi","slide_down":"styles_slide_down__gdHZ1","hide":"styles_hide__JnBh8"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Atoms/LogoTextLoop/index.tsx
const TextLoop=()=>{const texts=["Infrastructures","Energy","Resources"];const[textIndex,setTextIndex]=(0,react.useState)({curIndex:0,focusIndex:0,prevIndex:-1});(0,react.useEffect)(()=>{const interval=setInterval(()=>{const current=textIndex.curIndex;let newIndex=current+1;if(newIndex>=texts.length)newIndex=0;setTextIndex({curIndex:newIndex,prevIndex:current,focusIndex:newIndex});},2000);return()=>clearInterval(interval);//This is a cleanup function
});return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:texts.map((_ele,index)=>{if(index===textIndex.curIndex){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.slide_up,children:texts[textIndex.curIndex]},"some_child"+index);}else if(index===textIndex.prevIndex){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"".concat(styles_module.slide_down," ").concat(textIndex.focusIndex!==index?styles_module.hide:''),children:texts[textIndex.prevIndex]},"hide_child"+index);}else{return"";}})});};/* harmony default export */ const LogoTextLoop = (TextLoop);
;// ./src/Components/Organisms/LoginForm/index.tsx
const LoginForm=()=>{const dispatch=(0,es/* useDispatch */.wA)();const{loginDetails}=(0,es/* useSelector */.d4)(state=>state.loginReducer);const authModule=(0,react.useMemo)(()=>new Auth/* AuthModule */.r(),[]);const[resetPassword,setResetPassword]=(0,react.useState)({sent:false,clicked:false});const onFinish=values=>{if(resetPassword!==null&&resetPassword!==void 0&&resetPassword.clicked){authModule.sendPasswordResetLink(values.email).then(res=>{var _res$data;if(((_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.statusCode)===200){message/* default */.Ay.success(res.data.message);setResetPassword({sent:true,clicked:true});}}).catch(err=>{const message=err.response.data.message;message.error(message);setResetPassword({sent:false,clicked:true});});return;}else{const callBack=()=>{let redirectUrl="/";const urlParams=new URLSearchParams(window.location.search);const __redirectUrl=urlParams.get('redirectUrl');if(__redirectUrl){redirectUrl=__redirectUrl;}window.location.href=redirectUrl;};dispatch(loginApi(values,callBack));}};const onLoginError=(0,react.useCallback)(()=>{var _loginDetails$errorDa,_loginDetails$errorDa2;if((_loginDetails$errorDa=loginDetails.errorData.response)!==null&&_loginDetails$errorDa!==void 0&&(_loginDetails$errorDa2=_loginDetails$errorDa.data)!==null&&_loginDetails$errorDa2!==void 0&&_loginDetails$errorDa2.message){var _loginDetails$errorDa3,_loginDetails$errorDa4;message/* default */.Ay.error((_loginDetails$errorDa3=loginDetails.errorData.response)===null||_loginDetails$errorDa3===void 0?void 0:(_loginDetails$errorDa4=_loginDetails$errorDa3.data)===null||_loginDetails$errorDa4===void 0?void 0:_loginDetails$errorDa4.message);}},[loginDetails.errorData]);(0,react.useEffect)(()=>{onLoginError();},[onLoginError]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.form,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.logoWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:style_module.headingWrap,children:resetPassword!==null&&resetPassword!==void 0&&resetPassword.clicked?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"lg",weight:"bold",children:"Reset Password!"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"xs",children:"Enter your email address and we'll send you a link to reset your password."})]}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"lg",weight:"bold",children:"Welcome back!"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"xs",children:"Lets get you signed in"})]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:style_module.logo,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* Logo */.gu,{color:"#137749"}),/*#__PURE__*/(0,jsx_runtime.jsx)(LogoTextLoop,{})]})]}),(resetPassword===null||resetPassword===void 0?void 0:resetPassword.clicked)&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex cursor-pointer mb-5",onClick:()=>setResetPassword({sent:false,clicked:false}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* BackIcon */.Z3,{className:"mr-2"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"normal",children:"Back to Login"})]}),(resetPassword===null||resetPassword===void 0?void 0:resetPassword.sent)&&(resetPassword===null||resetPassword===void 0?void 0:resetPassword.clicked)&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/forgot-password.svg",className:style_module.forgotPasswordImg,alt:"forgot-password"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"md",weight:"semi",className:"text-center my-4",children:"We have sent you an email with a link to reset your password."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{name:"login",validateTrigger:"onChange",onFinish:onFinish,autoComplete:"off",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"email",rules:[{required:true,message:"Please enter your email!"},{type:"email",message:"Please enter a valid email!"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A,{size:"w100",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(MailOutlined/* default */.A,{}),label:"Email",placeHolder:"Email address",className:"pa-2"})}),!(resetPassword!==null&&resetPassword!==void 0&&resetPassword.clicked)&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"password",rules:[{required:true,message:"Please enter your password!"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A,{size:"w100",type:"password",label:"Password",placeHolder:"Password",className:"pa-2"})}),!(resetPassword!==null&&resetPassword!==void 0&&resetPassword.clicked)&&/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A.Item,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_checkbox/* default */.A,{className:"font-size-xs",children:"Remember me"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"xs",weight:"semi",className:"float-right cursor-pointer mt-1",onClick:()=>setResetPassword({sent:false,clicked:true}),children:"Forgot Password?"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{size:"w100",type:"primary",htmlType:"submit",loading:loginDetails.loading,children:resetPassword!==null&&resetPassword!==void 0&&resetPassword.clicked?"Reset Password":"Sign In"})})]})]});};/* harmony default export */ const Organisms_LoginForm = (LoginForm);
;// ./src/Components/Templates/Login/login.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const login_module = ({"row":"login_row__o+M4s","colLeft":"login_colLeft__ynnBz","contentWrap":"login_contentWrap__myVm2","frameImage":"login_frameImage__FIxDn","formWrap":"login_formWrap__Vb-bO"});
;// ./src/Components/Templates/Login/index.tsx
const LoginTemplate=()=>{//if access token is present redirect to dashboard
const access_token=localStorage.getItem("access_token");// device width
const width=window.innerWidth;if(access_token){window.location.href="/";return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{});}return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:!access_token&&/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.A,{className:login_module.row,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.A,{className:login_module.colLeft,xs:24,sm:24,md:12,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* DIcon */.u7,{width:width>768?400:300,height:width>768?450:300,className:login_module.frameImage}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{size:"xxxl",weight:"bold",type:"h1",lineHeight:width>768?4:2,className:login_module.contentWrap,children:"Welcome to DAT Portal"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.A,{xs:24,sm:24,md:12,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:login_module.formWrap,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Organisms_LoginForm,{})})})]})});};/* harmony default export */ const Login = (LoginTemplate);

/***/ }),

/***/ 51400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_MailOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/@ant-design/icons-svg/es/asn/MailOutlined.js
// This icon file is generated automatically.
var MailOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"
      }
    }]
  },
  "name": "mail",
  "theme": "outlined"
};
/* harmony default export */ const asn_MailOutlined = (MailOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/MailOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var MailOutlined_MailOutlined = function MailOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_MailOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_MailOutlined = (/*#__PURE__*/react.forwardRef(MailOutlined_MailOutlined));

/***/ })

}]);