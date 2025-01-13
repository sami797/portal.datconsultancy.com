"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[5858],{

/***/ 65858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard_AccountSettings)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 11 modules
var skeleton = __webpack_require__(46005);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(42074);
// EXTERNAL MODULE: ./src/Modules/User/index.ts
var User = __webpack_require__(47645);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/AccountSettings/layout.tsx
const AccountSettingsTemplate=_ref=>{let{children,className,permissionSlug}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{adminNav:true,className:className,profileNav:true// permissionSlug={["readOrganization", "updateOrganization"]}
,children:children});};/* harmony default export */ const layout = (AccountSettingsTemplate);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/AccountSettings/styles.module.scss
var styles_module = __webpack_require__(12877);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/alert/index.js + 1 modules
var es_alert = __webpack_require__(99985);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 3 modules
var card = __webpack_require__(2557);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(16330);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Organisms/Common/styles.module.scss
var Common_styles_module = __webpack_require__(96019);
;// ./src/Components/Organisms/Dashboard/AccountSettings/about-card.tsx
const AboutCard=_ref=>{let{defaultData,reload,drawer}=_ref;const[form]=es_form/* default */.A.useForm();// loading state for submit button
const[btnLoading,setBtnLoading]=(0,react.useState)(false);const userModule=(0,react.useMemo)(()=>new User/* UserModule */.U(),[]);const onFinish=formValues=>{// remove the email field from the form values
delete formValues.email;setBtnLoading(true);userModule.updateRecord(formValues,defaultData.id).then(res=>{var _res$data;message/* default */.Ay.success(res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.message);setBtnLoading(false);reload&&reload();}).catch(err=>{var _err$response,_err$response$data;message/* default */.Ay.error((_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message);setBtnLoading(false);});};const setDefaultValues=(0,react.useCallback)(()=>{if(Object.keys(defaultData).length>0){form.setFieldsValue({firstName:defaultData.firstName,lastName:defaultData.lastName,email:defaultData.email,phone:defaultData.phone// whatsapp: defaultData.whatsapp,
});}},[defaultData,form]);(0,react.useEffect)(()=>{setDefaultValues();},[setDefaultValues]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[!drawer&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.A,{message:"Your admin now manages your account. Contact your admin to change your account details.",description:/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"/",children:"Learn more about managed accounts"}),type:"info",showIcon:true,closable:true,className:styles_module/* default */.A.alert}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"lg",className:"my-5",children:"Profile and Visibility"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"mb-2",children:"Manage your personal information, and control which information other people see and apps may access."}),/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"/",children:"Learn more about your profile and visibility or view our privacy policy."})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"lg",className:"".concat(!drawer&&'mt-5'),children:"About You"}),/*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.A,{className:"rounded-5 mt-4 pa-5",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:Common_styles_module/* default */.A.form,onFinish:onFinish,form:form,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"firstName",rules:[{required:true,message:"Please enter first name"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"First Name",placeHolder:"Enter first name",asterisk:true,type:"text",defaultValue:defaultData.firstName})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"lastName",rules:[{required:true,message:"Please enter last name"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Last Name",placeHolder:"Enter last name",asterisk:true,type:"text",defaultValue:defaultData.lastName})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"phone",rules:[{required:true,message:"Please enter phone number"}],children:/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{className:"color-dark-main font-size-sm",children:["Phone",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"color-red-yp ml-1",children:"*"}),/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.A,{type:"tel",placeholder:"Enter your phone number",addonBefore:"\uD83C\uDDE6\uD83C\uDDEA +971",defaultValue:defaultData.phone})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"whatsapp",rules:[{required:true,message:"Please enter whatsapp number"}],children:/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{className:"color-dark-main font-size-sm",children:["WhatsApp",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"color-red-yp ml-1",children:"*"}),/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.A,{type:"tel",placeholder:"Enter your whatsapp number",addonBefore:"\uD83C\uDDE6\uD83C\uDDEA +971"// defaultValue={defaultData.whatsapp}
})]})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"email",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{size:"w100",label:"Email",placeHolder:"Enter email",asterisk:true,type:"email",defaultValue:defaultData.email,disabled:true})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"d-flex justify-end",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"sm",htmlType:"submit",loading:btnLoading,children:"Save"})})]})})]})]});};/* harmony default export */ const about_card = (AboutCard);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/antd/es/divider/index.js
var divider = __webpack_require__(40895);
// EXTERNAL MODULE: ./node_modules/antd/es/upload/index.js + 19 modules
var upload = __webpack_require__(28013);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js
var dropdown = __webpack_require__(57811);
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 3 modules
var avatar = __webpack_require__(75871);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 7 modules
var modal = __webpack_require__(32645);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/services/axiosInstance.ts
var axiosInstance = __webpack_require__(83365);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/Redux/Reducers/UsersReducer/action.ts
var action = __webpack_require__(3769);
;// ./src/Components/Organisms/Dashboard/AccountSettings/profile-overview-card.tsx
// import { ProfileScoringStatus } from '../../../../helpers/commonEnums';
const ProfileOverviewCard=_ref=>{var _userData$firstName,_userData$lastName;let{defaultData}=_ref;const[isModalOpen,setIsModalOpen]=(0,react.useState)(false);const[visible,setVisible]=(0,react.useState)(false);const[images,setImages]=(0,react.useState)([]);const dispatch=(0,es/* useDispatch */.wA)();const{loggedInUserData}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const userData=loggedInUserData===null||loggedInUserData===void 0?void 0:loggedInUserData.data;const name="".concat(userData===null||userData===void 0?void 0:userData.firstName," ").concat(userData===null||userData===void 0?void 0:userData.lastName);const initials=(userData===null||userData===void 0?void 0:(_userData$firstName=userData.firstName)===null||_userData$firstName===void 0?void 0:_userData$firstName.charAt(0))+(userData===null||userData===void 0?void 0:(_userData$lastName=userData.lastName)===null||_userData$lastName===void 0?void 0:_userData$lastName.charAt(0));const profilePicture=userData===null||userData===void 0?void 0:userData.profile;// const userScoring = defaultData?.userScoring;
const handleVisibleChange=flag=>setVisible(flag);const showModal=()=>setIsModalOpen(true);const handleCancel=()=>setIsModalOpen(false);/** Upload Image to server */const uploadImage=async options=>{const{onSuccess,onError,file}=options;const fmData=new FormData();const config={headers:{"content-type":"multipart/form-data"}};fmData.append("profile",file);try{var _res$data;const res=await axiosInstance/* default */.A.patch("user/update-me",fmData,config);const data=await((_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data);onSuccess("ok");if(data){message/* default */.Ay.success("Profile picture updated successfully");// update the user data
dispatch((0,action/* getLoggedInUser */.xC)({reload:true}));// clear the upload file list after success upload 
setImages([]);}}catch(err){onError({err});}};const propsForUpload={beforeUpload:file=>{const isPNG=file.type==='image/png';const isJPG=file.type==='image/jpeg'||file.type==='image/jpg';if(!isPNG&&!isJPG){message/* default */.Ay.error('You can only upload PNG or JPG file!');}return isPNG||isJPG;},onChange:info=>{if(info.file.status==='done'){setImages(info.fileList);}},name:'profile',multiple:false,maxCount:1,customRequest:uploadImage,fileList:images};const overlay=/*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.A,{className:styles_module/* default */.A.overlay,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.overlay_content,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:styles_module/* default */.A.overlay_content_btn,onClick:()=>{handleVisibleChange(false);showModal();},children:"View Photo"}),/*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.A,{className:"my-0"}),/*#__PURE__*/(0,jsx_runtime.jsx)(upload/* default */.A,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},propsForUpload),{},{children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:styles_module/* default */.A.overlay_content_btn,onClick:()=>handleVisibleChange(false),children:"Upload a photo"})}))]})});return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.profile,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.A,{className:"rounded-5",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.profile_header,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.A,{trigger:['click'],dropdownRender:()=>overlay,placement:"bottom",arrow:{pointAtCenter:true},onOpenChange:handleVisibleChange,open:visible,children:/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:80,src:profilePicture?"".concat(constants/* RESOURCE_BASE_URL */.to).concat(profilePicture):"",alt:name,className:"d-flex mx-auto",children:initials?initials:'Loading...'})}),/*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.A,{title:name,visible:isModalOpen,onCancel:handleCancel,footer:null,children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:profilePicture?"".concat(constants/* RESOURCE_BASE_URL */.to).concat(profilePicture):"",alt:name,className:styles_module/* default */.A.profile_viewer})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",className:"text-center mt-2",children:!(userData!==null&&userData!==void 0&&userData.firstName)?'':name})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"ma-3",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",className:"text-center",children:"Profile Completeness"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.A,{className:"mt-0"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"ma-3"})]})});};/* harmony default export */ const profile_overview_card = (ProfileOverviewCard);
;// ./src/Components/Organisms/Dashboard/AccountSettings/profile.tsx
const Profile=_ref=>{let{defaultData,reload,drawer}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.AccountSettingsWrapper,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.AccountSettingsWrapper_item1,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(about_card,{defaultData:defaultData,reload:reload,loading:!defaultData,drawer:drawer})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mt-10"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.AccountSettingsWrapper_item2,children:/*#__PURE__*/(0,jsx_runtime.jsx)(profile_overview_card,{defaultData:defaultData,drawer:drawer})})]});};/* harmony default export */ const profile = (Profile);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/AccountSettings/security.tsx
var security = __webpack_require__(11568);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/AccountSettings/manage-notifications.tsx + 1 modules
var manage_notifications = __webpack_require__(27999);
// EXTERNAL MODULE: ./src/services/tokenService.ts
var tokenService = __webpack_require__(92966);
;// ./src/Components/Organisms/Dashboard/AccountSettings/index.tsx
// import AboutOrganization from './about-org';
const AccountSettings=()=>{const userModule=(0,react.useMemo)(()=>new User/* UserModule */.U(),[]);const user=tokenService/* default */.A.getUserData();const[userData,setUserData]=(0,react.useState)();const[searchParams]=(0,dist/* useSearchParams */.ok)();const tab=searchParams.get('tab');if(tab==="profile"){window.location.href="/employees/"+user.id;}const getData=(0,react.useCallback)(()=>{userModule.getUserProfileScores().then(res=>{setUserData(res===null||res===void 0?void 0:res.data);}).catch(err=>{var _err$response;console.error(err===null||err===void 0?void 0:(_err$response=err.response)===null||_err$response===void 0?void 0:_err$response.data);setUserData(undefined);});},[userModule]);(0,react.useEffect)(()=>{getData();},[getData]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(layout,{children:[tab==="security"&&/*#__PURE__*/(0,jsx_runtime.jsx)(security/* default */.A,{}),tab==="manage_notifications"&&/*#__PURE__*/(0,jsx_runtime.jsx)(manage_notifications/* default */.A,{}),(tab==="profile"||tab===null)&&/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:userData?/*#__PURE__*/(0,jsx_runtime.jsx)(profile,{defaultData:userData===null||userData===void 0?void 0:userData.data,reload:getData}):/*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.A,{active:true})})]});};/* harmony default export */ const Dashboard_AccountSettings = (AccountSettings);

/***/ }),

/***/ 27999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ manage_notifications)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 11 modules
var skeleton = __webpack_require__(46005);
// EXTERNAL MODULE: ./node_modules/antd/es/radio/index.js + 4 modules
var es_radio = __webpack_require__(17811);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/AccountSettings/styles.module.scss
var styles_module = __webpack_require__(12877);
// EXTERNAL MODULE: ./src/services/axiosInstance.ts
var axiosInstance = __webpack_require__(83365);
;// ./src/Modules/UserAlertsSettings/index.ts
class UserAlertsSettingsModule{constructor(){this.endPoint="user-alerts-setting";this.getAlertsSettings=alertTypeId=>{return axiosInstance/* default */.A.get("".concat(this.endPoint,"/").concat(alertTypeId));};this.getAlertsSettingsBySlug=alertTypeSlug=>{return axiosInstance/* default */.A.get("".concat(this.endPoint,"/find-user-alert-by-slug/").concat(alertTypeSlug));};this.subscribeAlertsUnsubscribe=data=>{return axiosInstance/* default */.A.post("".concat(this.endPoint,"/subscribe-unsubscribe"),data);};this.unsubscribeAlertsAll=()=>{return axiosInstance/* default */.A.patch("".concat(this.endPoint,"/unsubscribe-all"));};}}
// EXTERNAL MODULE: ./src/Modules/AlertsType/index.ts
var AlertsType = __webpack_require__(64977);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/AccountSettings/manage-notifications.tsx
const ManageNotifications=()=>{const[isLoading,setIsLoading]=(0,react.useState)(false);const module=(0,react.useMemo)(()=>new AlertsType/* AlertsTypeModule */.C(),[]);const userAlertsSettingsModule=(0,react.useMemo)(()=>new UserAlertsSettingsModule(),[]);const[manageNotifications,setManageNotifications]=(0,react.useState)([]);const getAlertsData=(0,react.useCallback)(()=>{setIsLoading(true);module.getPublishedAlerts().then(res=>{var _res$data;setManageNotifications((_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data);setIsLoading(false);}).catch(err=>{var _err$response;console.error(err===null||err===void 0?void 0:(_err$response=err.response)===null||_err$response===void 0?void 0:_err$response.data);setManageNotifications([]);setIsLoading(false);});},[module]);(0,react.useEffect)(()=>{getAlertsData();},[]);const onPreferenceChange=(_ref,radioItem,alertsTypeId)=>{let{target:{value}}=_ref;userAlertsSettingsModule.subscribeAlertsUnsubscribe({alertsTypeId:alertsTypeId,[radioItem.type]:value}).then(res=>{message/* default */.Ay.success(res.data.message);}).catch(err=>{var _err$response2,_err$response2$data;message/* default */.Ay.error(err===null||err===void 0?void 0:(_err$response2=err.response)===null||_err$response2===void 0?void 0:(_err$response2$data=_err$response2.data)===null||_err$response2$data===void 0?void 0:_err$response2$data.message);});};const onUnsubscribeAll=()=>{userAlertsSettingsModule.unsubscribeAlertsAll().then(res=>{message/* default */.Ay.success(res.data.message);getAlertsData();}).catch(err=>{var _err$response3,_err$response3$data;message/* default */.Ay.error(err===null||err===void 0?void 0:(_err$response3=err.response)===null||_err$response3===void 0?void 0:(_err$response3$data=_err$response3.data)===null||_err$response3$data===void 0?void 0:_err$response3$data.message);});};const findDefaultPreferenceValue=(userAlertsSetting,radioItem)=>{if(userAlertsSetting.length===0){return commonEnums/* DefaultAlertSettings */.NY[radioItem.type];}else{return userAlertsSetting[0][radioItem.type];}};return/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:styles_module/* default */.A.manageNotificationsWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.heading,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:styles_module/* default */.A.title,children:"Manage Subscription"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{onClick:onUnsubscribeAll,className:styles_module/* default */.A.unsubscribe,children:"Unsubscribe All"})]}),isLoading?/*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.A,{active:true}):/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.subscriptionsTypeWrap,children:manageNotifications===null||manageNotifications===void 0?void 0:manageNotifications.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.subscriptionType,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{margin:0},children:item===null||item===void 0?void 0:item.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:styles_module/* default */.A.description,children:item===null||item===void 0?void 0:item.description}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.subscriptionsWrap,children:commonEnums/* manageNotificationsSubscriptions */.Uv.map((radioItem,radioIndex)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.subscription,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.textWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:styles_module/* default */.A.subscriptionTitle,children:radioItem.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:styles_module/* default */.A.subscriptionDescription,children:radioItem.description})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"manageNotificationOverrides",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Group */.Ay.Group,{options:[{label:'Off',value:false},{label:'On',value:true}],onChange:e=>onPreferenceChange(e,radioItem,item.id),defaultValue:findDefaultPreferenceValue(item.UserAlertsSetting,radioItem),optionType:"button",buttonStyle:"solid"})})]},radioIndex))})]},index))})]});};/* harmony default export */ const manage_notifications = (ManageNotifications);

/***/ }),

/***/ 11568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89379);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10678);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92759);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2557);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _Modules_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64076);
/* harmony import */ var _Atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9394);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12877);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44414);
const Security=()=>{const[form]=antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.useForm();const[password,setPassword]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({newPassword:'',confirmNewPassword:'',error:'',loading:false});const handleAlertClose=()=>{setPassword((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)({},password),{},{error:''}));};const authModule=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _Modules_Auth__WEBPACK_IMPORTED_MODULE_1__/* .AuthModule */ .r(),[]);const onFinish=formValues=>{setPassword((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)({},password),{},{loading:true}));if(formValues.newPassword!==formValues.confirmNewPassword){setPassword((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)({},password),{},{error:'Passwords do not match',loading:false}));return;}const data={password:formValues.currentPassword,newPassword:formValues.newPassword};authModule.changePassword(data).then(res=>{var _res$data;antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay.success((_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.message);setPassword((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)({},password),{},{loading:false,error:''}));}).catch(err=>{var _err$response,_err$response$data;const error=(_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message;setPassword((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)({},password),{},{error:error,loading:false}));});};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.AccountSettingsSecurity,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Atoms__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .o5,{color:"dark-main",size:"md",className:"mb-5",children:"Change Your Password"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.form,onFinish:onFinish,form:form,children:[password.error&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Atoms__WEBPACK_IMPORTED_MODULE_2__/* .CustomErrorAlert */ .WZ,{description:password.error,isClosable:true,onClose:handleAlertClose}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.Item,{name:"currentPassword",rules:[{required:true,message:"Please enter current password"}],children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Atoms__WEBPACK_IMPORTED_MODULE_2__/* .CustomInput */ .wi,{size:"w100",label:"Current Password",placeHolder:"Enter current password",asterisk:true,type:"password",className:"w-100"})})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.Item,{name:"newPassword",rules:[{required:true,message:"Please enter new password"}],children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Atoms__WEBPACK_IMPORTED_MODULE_2__/* .CustomInput */ .wi,{size:"w100",label:"Enter New Password",placeHolder:"Enter new password",asterisk:true,type:"password"})})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.Item,{name:"confirmNewPassword",rules:[{required:true,message:"Please confirm new password"}],children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Atoms__WEBPACK_IMPORTED_MODULE_2__/* .CustomInput */ .wi,{size:"w100",label:"Confirm New Password",placeHolder:"Confirm new password",asterisk:true,type:"password"})})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"d-flex justify-end",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Atoms__WEBPACK_IMPORTED_MODULE_2__/* .CustomButton */ .Sv,{type:"primary",htmlType:"submit",loading:password.loading,children:"Save Changes"})})]})]})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Security);

/***/ }),

/***/ 64977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ AlertsTypeModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class AlertsTypeModule{constructor(){this.endPoint="alerts-type";this.getAllRecords=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint));};this.getPublishedAlerts=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/find-published"));};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};this.getRecordBySlug=slug=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/find-by-slug/").concat(slug));};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};}}

/***/ }),

/***/ 12877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"alert":"styles_alert__HV4au","AccountSettingsWrapper":"styles_AccountSettingsWrapper__wVSCc","orgWrapper":"styles_orgWrapper__ALVcq","AccountSettingsWrapper_item2":"styles_AccountSettingsWrapper_item2__LlQph","AccountSettingsSecurity":"styles_AccountSettingsSecurity__YDu8N","profile":"styles_profile__pB2BP","profile_header":"styles_profile_header__dClQk","profile_viewer":"styles_profile_viewer__KMWBN","addSocialLinkWrap":"styles_addSocialLinkWrap__UlNXc","addSocialLink":"styles_addSocialLink__9ziTI","overlay":"styles_overlay__gxrKt","overlay_content":"styles_overlay_content__rOYVf","overlay_content_btn":"styles_overlay_content_btn__po1Db","manageNotificationsWrap":"styles_manageNotificationsWrap__NDVxo","heading":"styles_heading__uXHxk","title":"styles_title__oRd5F","unsubscribe":"styles_unsubscribe__d-aUW","subscriptionsTypeWrap":"styles_subscriptionsTypeWrap__eS6wz","subscriptionType":"styles_subscriptionType__oCtRl","description":"styles_description__tI1UL","subscriptionsWrap":"styles_subscriptionsWrap__IZEUg","subscription":"styles_subscription__etAmt","textWrap":"styles_textWrap__8x4E8","subscriptionTitle":"styles_subscriptionTitle__cRX2T","subscriptionDescription":"styles_subscriptionDescription__l5mhT","closeIcon":"styles_closeIcon__9+id9"});

/***/ })

}]);