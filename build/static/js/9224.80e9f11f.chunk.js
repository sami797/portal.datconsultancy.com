"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[9224],{

/***/ 30386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89379);
/* harmony import */ var C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16330);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81541);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9494);
/* harmony import */ var _input_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16835);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44414);
const _excluded=["label","hint","asterisk","helperText","className"];const{TextArea}=antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;const CustomTextArea=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props,ref)=>{const{label,hint,asterisk,helperText,className}=props,rest=(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(props,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[label?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label",{className:_input_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.labelWrap,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:label}),hint?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{title:hint,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{})}):null,asterisk?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:_input_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.asterisk,children:"*"}):null]}):null,/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TextArea,(0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,C_Users_Developer_datportal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({ref:ref},rest),{},{className:"".concat(_input_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["inpt"]," ").concat(className)})),helperText?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("small",{className:_input_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.helperText,children:helperText}):null]});});CustomTextArea.defaultProps={autoSize:{minRows:4},placeholder:"Enter text here",asterisk:false,hint:""};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomTextArea);

/***/ }),

/***/ 59224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Edit)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(28429);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(42074);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
;// ./src/Components/Organisms/Projects/Edit/types.ts
/** Project Form Steps or Tabs 
 * @enum `basic_info` - Basic Info Tab
 * @enum `deadline_info` - Deadline Info Tab
*/let ProjectFormSteps=/*#__PURE__*/function(ProjectFormSteps){ProjectFormSteps["basic_info"]="basic_info";ProjectFormSteps["deadline_info"]="deadline_info";return ProjectFormSteps;}({});/** Types for Basic Info Form */ /** Types for Deadline Info Form */ // Define the PaymentTermStatus enum
let ClientStatus=/*#__PURE__*/function(ClientStatus){ClientStatus[ClientStatus["Active"]=1]="Active";ClientStatus[ClientStatus["Inactive"]=0]="Inactive";return ClientStatus;}({});
// EXTERNAL MODULE: ./src/Components/Atoms/Headings/index.tsx
var Headings = __webpack_require__(35751);
;// ./src/Components/Organisms/Projects/Edit/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"container":"styles_container__1P8dA","nav":"styles_nav__zr1Ty","divider":"styles_divider__87b4X","textWithIcon":"styles_textWithIcon__o9hfd","active":"styles_active__KQJBM","done":"styles_done__q6-J7","wrap":"styles_wrap__rnzf3","bodyWrap":"styles_bodyWrap__ObFOa","heading":"styles_heading__IfS0w","backBtn":"styles_backBtn__fe3SK","form":"styles_form__BV4Jf","formItems":"styles_formItems__ecF8D","list":"styles_list__CjRrA","datePicker":"styles_datePicker__6HABC","footer":"styles_footer__OJJ49","tab":"styles_tab__vtgEb","activeTab":"styles_activeTab__0zRi8","flexItem":"styles_flexItem__Y-iHn","dragger":"styles_dragger__E1sg9","numberOfUploads":"styles_numberOfUploads__DNKKN","imageWrap":"styles_imageWrap__4xGyn","imageError":"styles_imageError__Feqdu","amenitiesWrap":"styles_amenitiesWrap__N0B4N","dropDownWrap":"styles_dropDownWrap__NLRg1","clientId":"styles_clientId__45E15","projectFileLinks":"styles_projectFileLinks__f6mHX","projectFileLink":"styles_projectFileLink__hoRW0","projectFileLink__deleteIcon":"styles_projectFileLink__deleteIcon__OgfFb","linkFormContainer":"styles_linkFormContainer__Ux0ns","projectFilesLinkName":"styles_projectFilesLinkName__IY6Ng"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Projects/Edit/EditProjectBodyWrap.tsx
const EditProjectBodyWrap=props=>{const{headings,children,onBackClick,showBackButton=true}=props;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.bodyWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.heading,children:[showBackButton&&/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/west.svg",alt:"",onClick:onBackClick}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{type:"h1",color:"dark-main",size:"lg",weight:"semi",className:showBackButton?"":"text-center w-100",children:headings===null||headings===void 0?void 0:headings.heading}),showBackButton&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.subHeading,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{type:"h3",color:"dark-main",weight:"semi",children:headings===null||headings===void 0?void 0:headings.subHeading}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{type:"p",color:"dark-sub",size:"sm",children:headings===null||headings===void 0?void 0:headings.description})]}),children]});};EditProjectBodyWrap.defaultProps={headings:{heading:"Heading",subHeading:"Sub Heading",description:"Description",buttonText:"Continue"},children:undefined,onBackClick:()=>{}};/* harmony default export */ const Edit_EditProjectBodyWrap = (EditProjectBodyWrap);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Organisms/Skeletons/index.tsx
var Skeletons = __webpack_require__(70619);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
;// ./src/Components/Organisms/Projects/Edit/Tabs/basic-info.tsx
const headings={heading:"Basic Informaton",subHeading:"Edit Basic Informaton",buttonText:"Save & Continue",description:"Please enter the basic informaton of the project."};const BasicInfoTab=_ref=>{let{form,onFinish,options,searchTerms,loading}=_ref;const{searchedClients,searchedClientsRep,organization,projectType}=options;const{setSearchClient,setSearchClientRep}=searchTerms;return/*#__PURE__*/(0,jsx_runtime.jsx)(Edit_EditProjectBodyWrap,{headings:headings,showBackButton:false,children:loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:3}):/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{form:form,className:styles_module.form,onFinish:values=>{const slug=(0,common/* slugifyString */.Dv)(values.title);const finalValues=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},values),{},{slug:slug});onFinish(ProjectFormSteps.basic_info,finalValues);},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.formItems,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"title",rules:[{required:true,message:"Please enter the project name."}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{label:"Project Title",placeHolder:"Project Title",size:"w100",asterisk:true})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"clientId",help:/*#__PURE__*/(0,jsx_runtime.jsx)("small",{children:"Client cannot be modified once the project is created as it will affect invoices and quotations associated with this project."}),className:styles_module.clientId,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* SelectWithSearch */.fd,{label:"Client",disabled:true,onSearch:value=>setSearchClient(value),options:searchedClients===null||searchedClients===void 0?void 0:searchedClients.map(item=>({label:item.name,value:item.id})),onChange:value=>form.setFieldsValue({clientId:value,// Reset the client representative field when client is changed
clientRepresentativeId:undefined}),asterisk:false})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"clientRepresentativeId",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* SelectWithSearch */.fd,{label:"Client Representative",asterisk:false,onSearch:value=>setSearchClientRep(value),options:searchedClientsRep===null||searchedClientsRep===void 0?void 0:searchedClientsRep.map(item=>({label:item.name,value:item.id}))})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"projectTypeId",rules:[{required:true,message:"Please select a project type!"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{label:"Project Type",asterisk:true,options:projectType===null||projectType===void 0?void 0:projectType.map(item=>({label:item.title,value:item.id}))})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"submissionById",rules:[{required:true,message:"Please select a submission by!"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomSelect */.Ae,{label:"Submission By",asterisk:true,options:organization===null||organization===void 0?void 0:organization.map(item=>({label:item.name,value:item.id}))})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"referenceNumber",style:{marginBottom:40},help:/*#__PURE__*/(0,jsx_runtime.jsx)("small",{children:"Reference is created automatically from approved quotations."}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{label:"Reference Number",placeHolder:"Reference Number",size:"w100",disabled:true})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"xeroReference",help:/*#__PURE__*/(0,jsx_runtime.jsx)("small",{className:"color-yellow-dark",children:"CAUTION: Do not add XERO reference if you are not sure about it."}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{type:"text",placeHolder:"Enter Project Xero Reference",label:"Project Xero Reference",size:"w100"})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.footer,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",htmlType:"submit",children:headings===null||headings===void 0?void 0:headings.buttonText})})]})});};/* harmony default export */ const basic_info = (BasicInfoTab);
// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/index.js + 56 modules
var date_picker = __webpack_require__(4132);
// EXTERNAL MODULE: ./node_modules/antd/es/radio/index.js + 4 modules
var es_radio = __webpack_require__(17811);
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 1 modules
var popconfirm = __webpack_require__(56231);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(59051);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/Components/Icons/index.tsx + 58 modules
var Icons = __webpack_require__(63668);
// EXTERNAL MODULE: ./src/Components/Atoms/Input/textarea.tsx
var Input_textarea = __webpack_require__(30386);
;// ./src/Components/Organisms/Projects/Edit/Tabs/deadline-info.tsx
const{RangePicker}=date_picker/* default */.A;const deadline_info_headings={heading:"Deadlines and Priority",subHeading:"Edit Deadlines and Priority",buttonText:"Submit",description:"Please enter the deadlines and priority."};const deadlineOptions=[{label:'7 days',value:"7_days"},{label:'15 days',value:"15_days"},{label:'30 days',value:"30_days"},{label:'45 days',value:"45_days"},{label:'90 days',value:"90_days"},{label:'Custom',value:"custom"}];const priorityOptions=[{label:'High',value:commonEnums/* PriorityEnum */.ac.High},{label:'Medium',value:commonEnums/* PriorityEnum */.ac.Medium},{label:'Normal',value:commonEnums/* PriorityEnum */.ac.Normal}];const DeadlineInfoTab=props=>{const{form,onFinish,onBackClick,options,searchTerms,states}=props;const{searchedProjectIncharge,searchedSupportEngineers}=options;const{projectFileLinks,setProjectFileLinks}=states;const{setSearchProjectIncharge,setSearchSupportEngineers}=searchTerms;const projectLinkActions=(0,react.useCallback)((link,action,linkName)=>{switch(action){case'add':{// if the link is already present in the array, then don't add it
let existingLink=projectFileLinks.find(ele=>ele.link===link);if(existingLink)return;const allLinks=[...projectFileLinks,{name:linkName,link:link}];setProjectFileLinks(allLinks);form.setFieldsValue({projectFilesLink:'',projectFilesLinkName:''});break;}case'remove':{const removeLink=projectFileLinks.filter(item=>item.link!==link);setProjectFileLinks(removeLink);break;}}},[projectFileLinks]);const[deadline,setDeadline]=(0,react.useState)();const[deadlineDates,setDeadlineDates]=(0,react.useState)({startDate:"",endDate:""});const onFinalSubmit=values=>{const date=new Date();let startDate=moment_default()(date).format("YYYY-MM-DD");let endDate="";switch(values.deadlineValue){case"7_days":{endDate=moment_default()(date).add(7,"days").format("YYYY-MM-DD");break;}case"15_days":{endDate=moment_default()(date).add(15,"days").format("YYYY-MM-DD");break;}case"30_days":{endDate=moment_default()(date).add(30,"days").format("YYYY-MM-DD");break;}case"45_days":{endDate=moment_default()(date).add(45,"days").format("YYYY-MM-DD");break;}case"90_days":{endDate=moment_default()(date).add(90,"days").format("YYYY-MM-DD");break;}case"custom":{startDate=deadlineDates.startDate;endDate=deadlineDates.endDate;}}delete values.deadlineValue;delete values.rangePicker;if(form.getFieldValue('projectFilesLink')!==''){projectLinkActions(values.projectFilesLink,'add');}let _fileLinks="";try{_fileLinks=JSON.stringify(projectFileLinks);}catch(err){console.error("Some error while parsing links",err===null||err===void 0?void 0:err.message);}const finalValues=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},values),{},{projectFilesLink:_fileLinks,priority:values.priority||commonEnums/* PriorityEnum */.ac.Normal,startDate,endDate});onFinish(ProjectFormSteps.deadline_info,finalValues);};// Prepare the deadline value and set the deadline value in the form
(0,react.useEffect)(()=>{const startDate=form.getFieldValue('startDate');const endDate=form.getFieldValue('endDate');// find out if the deadline is custom or not and set the deadline value accordingly
const _deadline=deadlineOptions.find(item=>{switch(item.value){case"7_days":{return moment_default()(startDate).add(7,"days").toISOString()===endDate;}case"15_days":{return moment_default()(startDate).add(15,"days").toISOString()===endDate;}case"30_days":{return moment_default()(startDate).add(30,"days").toISOString()===endDate;}case"45_days":{return moment_default()(startDate).add(45,"days").toISOString()===endDate;}case"90_days":{return moment_default()(startDate).add(90,"days").toISOString()===endDate;}case"custom":{return true;}}});if(_deadline){setDeadline(_deadline.value);form.setFieldsValue({deadlineValue:_deadline.value});}if((_deadline===null||_deadline===void 0?void 0:_deadline.value)==='custom'){form.setFieldsValue({rangePicker:[moment_default()(startDate),moment_default()(endDate)]});setDeadlineDates({startDate,endDate});}},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Edit_EditProjectBodyWrap,{headings:deadline_info_headings,onBackClick:onBackClick,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A,{form:form,className:styles_module.form,onFinish:values=>onFinalSubmit(values),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.formItems,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{className:"font-size-sm",children:["Deadline  ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"color-red-yp",children:"*"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{flexDirection:'column',fontSize:'var(--font-size-sm)',gap:0},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"deadlineValue",rules:[{required:true,message:"Please select deadline"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Group */.Ay.Group,{optionType:"button",onChange:event=>setDeadline(event.target.value),children:deadlineOptions.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Button */.Ay.Button,{value:item.value,children:item.label},index))})}),deadline==="custom"&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"rangePicker",rules:[{required:true,message:"Please select deadline"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(RangePicker,{onChange:date=>{if((date===null||date===void 0?void 0:date.length)===2){var _date$,_date$2;setDeadlineDates({startDate:((_date$=date[0])===null||_date$===void 0?void 0:_date$.format("YYYY-MM-DD"))||"",endDate:((_date$2=date[1])===null||_date$2===void 0?void 0:_date$2.format("YYYY-MM-DD"))||""});}}})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{flexDirection:'column',fontSize:'var(--font-size-sm)',gap:0,marginTop:10},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:"Priority"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"priority",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Group */.Ay.Group,{optionType:"button",children:priorityOptions.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Button */.Ay.Button,{value:item.value,children:item.label},index))})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"projectInchargeId",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* SelectWithSearch */.fd,{label:"Who is incharge of this project?",placeholder:"Search for who is incharge of this project",notFoundDescription:"Could not find any user with this name, Please search for another user.",onSearch:value=>setSearchProjectIncharge(value),options:searchedProjectIncharge===null||searchedProjectIncharge===void 0?void 0:searchedProjectIncharge.map(item=>({label:"".concat(item.firstName," ").concat(item.lastName),value:item.id})),asterisk:false})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"supportEngineersId",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* SelectWithSearch */.fd,{label:"Who are the support engineers? (Optional)",placeholder:"Search for support engineers",mode:"multiple",asterisk:false,notFoundDescription:"No support engineers found., Please search for support engineers.",onSearch:value=>setSearchSupportEngineers(value),options:searchedSupportEngineers===null||searchedSupportEngineers===void 0?void 0:searchedSupportEngineers.map(item=>({label:"".concat(item.firstName," ").concat(item.lastName),value:item.id}))})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"instructions",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_textarea/* default */.A,{label:"More Instructions for Engineers (Optional)",placeholder:"Are there any more instructions for engineers?"})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.linkFormContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{style:{width:'50%',marginTop:10},name:"projectFilesLinkName",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{label:"Link Name",placeHolder:"Name of the link",className:styles_module.projectFilesLinkName,size:"w100"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"projectFilesLink",rules:[{required:(projectFileLinks===null||projectFileLinks===void 0?void 0:projectFileLinks.length)===0?true:false,message:"Please add at least one link."},{type:'url',message:"Please enter a valid url."},()=>({validator(_,value){if(!value||!(projectFileLinks!==null&&projectFileLinks!==void 0&&projectFileLinks.includes(value))){return Promise.resolve();}return Promise.reject(new Error('This link is already added.'));}})],style:{marginTop:10,width:"50%"},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{label:"Project Files Link",placeHolder:"Add project file link",size:"w100",suffix:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* PlusCircleIcon */.GY,{style:{cursor:'pointer'},onClick:()=>{const enteredLink=form.getFieldValue('projectFilesLink');const linkName=form.getFieldValue('projectFilesLinkName');projectLinkActions(enteredLink,'add',linkName);}})})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.projectFileLinks,children:projectFileLinks===null||projectFileLinks===void 0?void 0:projectFileLinks.map((link,index)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.projectFileLink,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:link.link,target:"_blank",rel:"noreferrer",children:link.name?link.name:link.link}),/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{title:"Are you sure to delete this link?",okText:"Yes",cancelText:"No",placement:"left",onConfirm:()=>projectLinkActions(link.link,'remove'),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* DeleteIcon */.d7,{className:styles_module.projectFileLink__deleteIcon})})]},"".concat(link,"-").concat(index)))}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.footer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/images/west.svg",alt:"Back",onClick:onBackClick}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",htmlType:"submit",children:deadline_info_headings===null||deadline_info_headings===void 0?void 0:deadline_info_headings.buttonText})]})]})})});};/* harmony default export */ const deadline_info = (DeadlineInfoTab);
;// ./src/Components/Organisms/Projects/Edit/Tabs/index.tsx

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js
var CheckOutlined = __webpack_require__(65472);
;// ./src/Components/Organisms/Projects/Edit/EditProjectMenu.tsx
// import { useSelector } from "react-redux";
// import { RootState } from "../../../../Redux/store";
// import { HandleServerErrors } from "../../../Atoms";
const EditPropertyMenu=_ref=>{let{currentTab,onTabClick,completedTabs}=_ref;const[errors,setErrors]=(0,react.useState)();const navItems=[{src:"/images/basic-info.svg",text:"Basic Information",tab:ProjectFormSteps.basic_info},{src:"/images/deadline.svg",text:"Deadlines and Priority",tab:ProjectFormSteps.deadline_info}];//TODO: add error handling 
// const { addPropertiesData } = useSelector((state: RootState) => state.propertiesReducer);
// const prepareError = useCallback(() => {
//   if (addPropertiesData.errorData.message) {
//     let error = addPropertiesData.errorData;
//     if (typeof error.message !== "string") {
//       let errData = HandleServerErrors(error.message, []);
//       // group the errors and categories them by tab index
//       let groupedErrors = errData?.reduce((acc: any, item: any) => {
//         const name = item?.name
//         if (item?.errors?.length > 0) {
//           switch (name) {
//             case "location":
//               acc["0"] = item?.errors
//               break;
//             case "translations":
//               acc["1"] = item?.errors
//               break;
//             case "propertyTypeId" || "propertyType":
//               acc["2"] = item?.errors
//               break;
//             case "priceTypes":
//               acc["3"] = item?.errors
//               break;
//             case "reference":
//               acc["6"] = item?.errors
//               break;
//             default:
//               acc[name] = item?.errors
//               break;
//           }
//         }
//         return acc
//       }, {})
//       setErrors(groupedErrors)
//     }
//   }
// }, [addPropertiesData?.errorData])
// useEffect(() => {
//   prepareError()
// }, [prepareError])
const getTextWithIcon=item=>/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:styles_module.textWithIcon+" "+(item.tab===currentTab?styles_module.active:"")+" "+(completedTabs.includes(item.tab)?styles_module.done:""),onClick:()=>onTabClick(item.tab),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{}),item.src&&/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:item.src,alt:"".concat(item.text," icon"),width:30,height:30}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:item.text})]}),(completedTabs===null||completedTabs===void 0?void 0:completedTabs.includes(item.tab))&&errors&&errors[item.tab]&&/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* XMarkIcon */.fK,{color:"#ff0000"}),(completedTabs===null||completedTabs===void 0?void 0:completedTabs.includes(item.tab))&&!errors&&/*#__PURE__*/(0,jsx_runtime.jsx)(CheckOutlined/* default */.A,{}),(completedTabs===null||completedTabs===void 0?void 0:completedTabs.includes(item.tab))&&errors&&!errors[item.tab]&&/*#__PURE__*/(0,jsx_runtime.jsx)(CheckOutlined/* default */.A,{})]},item.tab);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.nav,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{type:"h1",color:"dark-main",size:"lg",children:"Edit Project"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.divider}),navItems.map(item=>getTextWithIcon(item))]});};/* harmony default export */ const EditProjectMenu = (EditPropertyMenu);
// EXTERNAL MODULE: ./src/Modules/Organization/index.ts
var Organization = __webpack_require__(42361);
// EXTERNAL MODULE: ./src/Modules/ProjectType/index.ts
var ProjectType = __webpack_require__(12975);
// EXTERNAL MODULE: ./src/Modules/Department/index.ts
var Department = __webpack_require__(98924);
// EXTERNAL MODULE: ./src/Modules/User/index.ts
var User = __webpack_require__(47645);
// EXTERNAL MODULE: ./src/Modules/Project/index.ts
var Project = __webpack_require__(50167);
// EXTERNAL MODULE: ./src/Modules/Project/permissions.ts
var permissions = __webpack_require__(31203);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Modules/Client/index.ts
var Client = __webpack_require__(97097);
;// ./src/Components/Organisms/Projects/Edit/index.tsx
// string array of completed tabs using the ProjectFormSteps enum keys as values
// object with keys of ProjectFormSteps enum keys and values of the corresponding form data type
// Types for the search params
// Types for the search params
// Types for the search params
const EditProject=()=>{const navigate=(0,dist/* useNavigate */.Zp)();// available permissions for the projects page
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(permissions/* ProjectPermissionsEnum */.l);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const{updateProject}=userPermissions;const[searchParams]=(0,react_router_dom_dist/* useSearchParams */.ok)();const projectId=searchParams.get("id")||"";// form instances for each tab
const[basicInfoForm]=es_form/* default */.A.useForm();const[deadlineInfoForm]=es_form/* default */.A.useForm();const[currentTab,setCurrentTab]=(0,react.useState)("basic_info");const[completedTabs,setCompletedTabs]=(0,react.useState)([]);const[completeFormData,setCompleteFormData]=(0,react.useState)();// Client Search Term
const[clientTerm,setSearchClient]=(0,react.useState)("");const debouncedClientTerm=(0,useDebounce/* useDebounce */.d)(clientTerm,500);// Client Represenative Search Term
const[clientRepTerm,setSearchClientRep]=(0,react.useState)("");const debouncedClientRepTerm=(0,useDebounce/* useDebounce */.d)(clientRepTerm,500);// Project Incharge Search Term
const[projectInchargeTerm,setSearchProjectIncharge]=(0,react.useState)("");const debouncedProjectInchargeTerm=(0,useDebounce/* useDebounce */.d)(projectInchargeTerm,500);// Support Engineers Search Term
const[supportEngineersTerm,setSearchSupportEngineers]=(0,react.useState)("");const debouncedSupportEngineersTerm=(0,useDebounce/* useDebounce */.d)(supportEngineersTerm,500);// Clients Search
const[clients,setClients]=(0,react.useState)([]);// Client Representative Searched Users
const[representative,setRepresentative]=(0,react.useState)([]);// Project Incharge Searched Users
const[projectIncharge,setProjectIncharge]=(0,react.useState)([]);// Support Engineers Searched Users
const[supportEngineers,setSupportEngineers]=(0,react.useState)([]);// Project File Links
const[projectFileLinks,setProjectFileLinks]=(0,react.useState)([]);// Modules
const projectModule=(0,react.useMemo)(()=>new Project/* ProjectModule */.K(),[]);const clientModule=(0,react.useMemo)(()=>new Client/* ClientModule */.u(),[]);const orgModule=(0,react.useMemo)(()=>new Organization/* OrganizationModule */.I(),[]);const userModule=(0,react.useMemo)(()=>new User/* UserModule */.U(),[]);const projectTypeModule=(0,react.useMemo)(()=>new ProjectType/* ProjectTypeModule */.g(),[]);const departmentModule=(0,react.useMemo)(()=>new Department/* DepartmentModule */.d(),[]);// Fetch Project Data From API
const{data,loading}=(0,hooks/* useConditionFetchData */.P6)({method:()=>projectModule.getRecordById(Number(projectId)),condition:!!projectId});// Fetch Project Type Data From API
const{data:projectTypeData}=(0,hooks/* useFetchData */.Gs)({method:projectTypeModule.getPublishRecords});const{data:departmentData}=(0,hooks/* useFetchData */.Gs)({method:departmentModule.getAllPublishedRecords});const{data:organizationData}=(0,hooks/* useFetchData */.Gs)({method:orgModule.findPublished});const{data:initialClient}=(0,hooks/* useConditionFetchData */.P6)({method:clientModule.findPublished,condition:!!(data!==null&&data!==void 0&&data.clientId),initialQuery:{ids:[data===null||data===void 0?void 0:data.clientId]}});/** Get Client Representative From API
   * @param {string} params.name - Search Term
   * @param {number} params.organizationId - Organization Id
   * @param {number[]} params.ids - User Ids
   */const GetClientRepresentative=params=>{clientModule.findPublished(params).then(res=>{setRepresentative(prev=>{var _res$data,_res$data$data;// if the data is already present in the state, then don't add it again
const filteredData=res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:(_res$data$data=_res$data.data)===null||_res$data$data===void 0?void 0:_res$data$data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});};/**
   * Get Project Incharge From API
   * @param {string} params.name - Search Term
   * @param {number[]} params.ids - User Ids
   */const GetProjectIncharge=params=>{userModule.getAllRecords(params).then(res=>{setProjectIncharge(prev=>{var _res$data2,_res$data2$data;// if the data is already present in the state, then don't add it again
const filteredData=res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:(_res$data2$data=_res$data2.data)===null||_res$data2$data===void 0?void 0:_res$data2$data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});};/**
   * Get Support Engineers From API
   * @param {string} params.name - Search Term
   * @param {number[]} params.ids - User Ids
   * */const GetSupportEngineers=params=>{userModule.getAllRecords(params).then(res=>{setSupportEngineers(prev=>{var _res$data3,_res$data3$data;// if the data is already present in the state, then don't add it again
const filteredData=res===null||res===void 0?void 0:(_res$data3=res.data)===null||_res$data3===void 0?void 0:(_res$data3$data=_res$data3.data)===null||_res$data3$data===void 0?void 0:_res$data3$data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});};// Prepare Form Data From API
const setFormData=(0,react.useCallback)(()=>{if(data&&!loading){var _ProjectClient$find,_ProjectMembers$find,_ProjectMembers$filte;// Prepare Basic Info Form Data
const{ProjectMembers,ProjectClient}=data;// Get Client Representative Id
const clientRepId=ProjectClient===null||ProjectClient===void 0?void 0:(_ProjectClient$find=ProjectClient.find(client=>{return client.isRepresentative===true;}))===null||_ProjectClient$find===void 0?void 0:_ProjectClient$find.clientId;// Get Project Incharge Id
const projectInchargeId=ProjectMembers===null||ProjectMembers===void 0?void 0:(_ProjectMembers$find=ProjectMembers.find(member=>{return member.projectRole===commonEnums/* ProjectRoleEnum */.b2['projectIncharge'];}))===null||_ProjectMembers$find===void 0?void 0:_ProjectMembers$find.User.id;// Get Support Engineers Id
const supportEngineersId=ProjectMembers===null||ProjectMembers===void 0?void 0:(_ProjectMembers$filte=ProjectMembers.filter(member=>{return member.projectRole===commonEnums/* ProjectRoleEnum */.b2['supportEngineers'];}))===null||_ProjectMembers$filte===void 0?void 0:_ProjectMembers$filte.map(member=>member.User.id);// Get Client Representative
if(clientRepId){GetClientRepresentative({ids:[clientRepId]});}// Get Project Incharge
if(projectInchargeId){GetProjectIncharge({ids:[projectInchargeId]});}// Get Support Engineers
if(supportEngineersId!==null&&supportEngineersId!==void 0&&supportEngineersId.length){GetSupportEngineers({ids:supportEngineersId});}const basic_info={title:data.title,projectTypeId:data.projectTypeId,referenceNumber:data.referenceNumber,clientId:data.clientId,submissionById:data.submissionById,clientRepresentativeId:clientRepId,xeroReference:data.xeroReference};try{// Set Project File Links
const _projectFileLinks=JSON.parse(data.projectFilesLink);if(typeof _projectFileLinks==="string"){setProjectFileLinks([{link:_projectFileLinks}]);}else{setProjectFileLinks(_projectFileLinks?_projectFileLinks:[]);}}catch(err){console.error("Error while parsing project file links",err===null||err===void 0?void 0:err.message);}// Prepare Deadline Info Form Data
const deadline_info={instructions:data.instructions,priority:String(data.priority),projectInchargeId:projectInchargeId,supportEngineersId:supportEngineersId,startDate:data.startDate,endDate:data.endDate,/** NOTE: leave projectFilesLink as empty string because the actual 
         * value is in the projectFilesLink state which is an array of strings
         */projectFilesLink:"",projectFilesLinkName:""};// Set Form Data
basicInfoForm.setFieldsValue(basic_info);deadlineInfoForm.setFieldsValue(deadline_info);// Set Completed Tabs
const _completedTabs=[ProjectFormSteps.basic_info,ProjectFormSteps.deadline_info];setCompletedTabs(_completedTabs);}},[data]);(0,react.useEffect)(()=>{setFormData();},[setFormData]);/**
   * @description this function is used to set the tab when the user clicks on the tab menu item (the menu item is disabled if the tab is not completed)
   * @param tab - the tab key
   * */const onTabClick=(0,react.useCallback)(tab=>{if(completedTabs.includes(tab)){setCurrentTab(tab);}},[completedTabs]);/**
   * @description this function is used to go to the next or previous tab
   * @param action - the action to perform, either `next` or `prev`
   * @param step - the current tab key
   */const onGoToStep=(0,react.useCallback)((action,step)=>{// get the keys of the ProjectFormSteps enum
const tabKeys=Object.keys(ProjectFormSteps);switch(action){case"next":{// get the index of the next tab by finding the index of the current tab and adding 1 to it
const nextTabIndex=tabKeys.findIndex(item=>item===step)+1;// if the next tab index is not the last one (the last one is the length of the tab keys array)
if(nextTabIndex!==tabKeys.length){// get the next tab key
const nextTab=tabKeys.filter((_item,index)=>index===nextTabIndex);// set the current tab to the next tab
setCurrentTab(nextTab[0]);}break;}case"prev":{// get the index of the current tab
const currentTabIndex=tabKeys.findIndex(item=>item===currentTab);// if the current tab index is not the first one (the first one is 0)
if(currentTabIndex!==0){// get the previous tab key
const previousTab=tabKeys.filter((_item,index)=>index===currentTabIndex-1);// set the current tab to the previous tab
setCurrentTab(previousTab[0]);}break;}}},[currentTab]);/** This function is called when the user clicks on the back button of the current tab */const onBackClick=()=>onGoToStep("prev");/**
   * @param step the current tab key
   * @param data the form data of the current tab
   * @description this function is called when the user tries to submit the form of the current tab
   */const onFinish=(0,react.useCallback)((step,data)=>{const completeData=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},completeFormData),{},{[step]:data});setCompleteFormData(completeData);setCompletedTabs(prev=>{if(!prev.includes(step)){return[...prev,step];}return prev;});if(step===ProjectFormSteps.deadline_info){const{deadline_info,basic_info}=completeData;const projectData={// Basic Info Form Data
title:basic_info===null||basic_info===void 0?void 0:basic_info.title,clientId:basic_info===null||basic_info===void 0?void 0:basic_info.clientId,clientRepresentativeId:basic_info===null||basic_info===void 0?void 0:basic_info.clientRepresentativeId,projectTypeId:basic_info===null||basic_info===void 0?void 0:basic_info.projectTypeId,submissionById:basic_info===null||basic_info===void 0?void 0:basic_info.submissionById,referenceNumber:basic_info===null||basic_info===void 0?void 0:basic_info.referenceNumber,xeroReference:basic_info===null||basic_info===void 0?void 0:basic_info.xeroReference,// Deadline Info Form Data
startDate:deadline_info===null||deadline_info===void 0?void 0:deadline_info.startDate,endDate:deadline_info===null||deadline_info===void 0?void 0:deadline_info.endDate,priority:Number(deadline_info===null||deadline_info===void 0?void 0:deadline_info.priority),projectInchargeId:deadline_info===null||deadline_info===void 0?void 0:deadline_info.projectInchargeId,supportEngineersId:deadline_info===null||deadline_info===void 0?void 0:deadline_info.supportEngineersId,instructions:deadline_info===null||deadline_info===void 0?void 0:deadline_info.instructions,projectFilesLink:deadline_info===null||deadline_info===void 0?void 0:deadline_info.projectFilesLink};if(updateProject===true){projectModule.updateRecord(projectData,Number(projectId)).then(res=>{var _res$data4;message/* default */.Ay.success((res===null||res===void 0?void 0:(_res$data4=res.data)===null||_res$data4===void 0?void 0:_res$data4.message)||"Project Updated Successfully!");window.location.href="/projects?all=true";}).catch(err=>{const errorMessages=err.response.data.message||"Something went wrong!";message/* default */.Ay.error(errorMessages);});}else{message/* default */.Ay.error("You are not authorized to update this project!, Please contact your admin.");}}else{onGoToStep("next",step);}},[completeFormData,onGoToStep]);// Client Search
const onClientSearch=(0,react.useCallback)(()=>{if(debouncedClientTerm){clientModule.findPublished({name:debouncedClientTerm}).then(res=>{const{data}=res;setClients(prev=>{var _data$data;// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:(_data$data=data.data)===null||_data$data===void 0?void 0:_data$data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});}},[debouncedClientTerm]);(0,react.useEffect)(()=>{onClientSearch();},[onClientSearch]);// Client Represenative Search
const onClientRepSearch=(0,react.useCallback)(()=>{if(debouncedClientRepTerm){const params={name:debouncedClientRepTerm,organizationId:basicInfoForm.getFieldValue("clientId")};GetClientRepresentative(params);}},[debouncedClientRepTerm]);(0,react.useEffect)(()=>{onClientRepSearch();},[onClientRepSearch]);// set the default value for the client field
(0,react.useEffect)(()=>{if(initialClient){setClients(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=initialClient===null||initialClient===void 0?void 0:initialClient.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}},[initialClient]);// Project InCharge Search
const onProjectInChargeSearch=(0,react.useCallback)(()=>{if(debouncedProjectInchargeTerm){const params={name:debouncedProjectInchargeTerm};GetProjectIncharge(params);}},[debouncedProjectInchargeTerm]);(0,react.useEffect)(()=>{onProjectInChargeSearch();},[onProjectInChargeSearch]);// Support Engineer Search
const onSupportEngineerSearch=(0,react.useCallback)(()=>{if(debouncedSupportEngineersTerm){const params={name:debouncedSupportEngineersTerm};GetSupportEngineers(params);}},[debouncedSupportEngineersTerm]);(0,react.useEffect)(()=>{onSupportEngineerSearch();},[onSupportEngineerSearch]);// If there is no project id in the url, then redirect the user to the projects page
(0,react.useEffect)(()=>{if(!projectId){navigate('/projects?all=true');}},[projectId]);const MenuItems={basic_info:/*#__PURE__*/(0,jsx_runtime.jsx)(basic_info,{form:basicInfoForm,onFinish:onFinish,options:{organization:organizationData,department:departmentData,projectType:projectTypeData,searchedClients:clients,searchedClientsRep:representative},searchTerms:{setSearchClient:setSearchClient,setSearchClientRep:setSearchClientRep},loading:loading}),// project_info: (
//   <ProjectInfoTab
//     form={projectInfoForm}
//     onBackClick={onBackClick}
//     onFinish={onFinish}
//     options={{
//       projectComponent: projectComponentData!,
//       authorities: authoritiesData!,
//     }}
//     states={{
//       projectFileLinks: projectFileLinks,
//       setProjectFileLinks: setProjectFileLinks,
//     }}
//   />
// ),
deadline_info:/*#__PURE__*/(0,jsx_runtime.jsx)(deadline_info,{form:deadlineInfoForm,onBackClick:onBackClick,onFinish:onFinish,options:{searchedProjectIncharge:projectIncharge,searchedSupportEngineers:supportEngineers},searchTerms:{setSearchProjectIncharge:setSearchProjectIncharge,setSearchSupportEngineers:setSearchSupportEngineers},states:{projectFileLinks:projectFileLinks,setProjectFileLinks:setProjectFileLinks}})};return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{showAddProject:false,className:"pa-0",permissionSlug:permissionSlug,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(EditProjectMenu,{currentTab:currentTab,onTabClick:onTabClick,completedTabs:completedTabs}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.wrap,children:MenuItems[currentTab]})]})});};/* harmony default export */ const Edit = (EditProject);

/***/ }),

/***/ 97097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ ClientModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class ClientModule{constructor(){this.endPoint="client";/**Get all Client records
     * @param query - query params
     */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get Client record by id
     * @param id - Client id
     */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};/**Find published client records
     * @param query - query params
     */this.findPublished=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/find-published"),{params:query});};/**Delete Client record
    * @param id - Client id
    */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};/**Create new Client record
     * @param data - Client data
     */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};/**Update Client record
    * @param data - Client data
    * @param id - Client id
    */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};}}

/***/ }),

/***/ 98924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ DepartmentModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class DepartmentModule{constructor(){this.endPoint="department";this.getAllRecords=queryData=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:queryData});};this.getAllPublishedRecords=queryData=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/find-published",{params:queryData});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete(this.endPoint+"/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(this.endPoint+"/"+id,data);};}}

/***/ }),

/***/ 42361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ OrganizationModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _modules_Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class OrganizationModule{constructor(){this.endPoint="organization";/**Get all organization records
     * @param query - query params
     */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get all organization records
     * @param query - query params
     */this.findPublished=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/find-published",{params:query});};/**Get organization record by id
     * @param id - organization id
     */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};/**Delete organization record
    * @param id - organization id
    */this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};/**Create new organization record
     * @param data - organization data
     */this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};/**Update organization record
    * @param data - organization data
    * @param id - organization id
    */this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data,{headers:_modules_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};this.getTenants=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("xero/getTenants");};}}

/***/ }),

/***/ 12975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ ProjectTypeModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class ProjectTypeModule{constructor(){this.endPoint="project-type";/**Get all project type records
  * @param query - query params
  */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};/**Get all publish project type records
  * @param query - query params
  */this.getPublishRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/find-published"),{params:query});};/**Get project type record by id
  * @param id - project type id
  */this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete(this.endPoint+"/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(this.endPoint+"/"+id,data);};}}

/***/ })

}]);