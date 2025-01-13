"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[2215],{

/***/ 87031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ CardShimmer)
});

// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 11 modules
var skeleton = __webpack_require__(46005);
;// ./src/Components/Atoms/CardShimmer/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"card":"styles_card__k61KP"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Atoms/CardShimmer/index.tsx
const CardShimmer=()=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.card,children:/*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.A,{active:true})});};

/***/ }),

/***/ 38714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2557);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52765);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57811);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80737);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73022);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28662);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44414);
const MoreCustomFilters=_ref=>{let{options,onChange,value}=_ref;const[visible,setVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const overlay=/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"pa-3",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.Group,{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.checkboxGroup,options:options,onChange:value=>{onChange(value);setVisible(false);},value:value})})});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{trigger:['click'],open:visible,onOpenChange:visible=>setVisible(visible),dropdownRender:()=>overlay,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.label,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"More Filters"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{})]})})})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreCustomFilters);

/***/ }),

/***/ 73209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28429);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92759);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57811);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56231);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90582);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78433);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72906);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82369);
/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50167);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44414);
const ActionsDropdown=_ref=>{let{item,onRefresh,permissions}=_ref;const navigate=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .useNavigate */ .Zp)();const[dropdownOpen,setDropdownOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});const[deleteConfirmation,setDeleteConfirmation]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const module=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _modules_Project__WEBPACK_IMPORTED_MODULE_2__/* .ProjectModule */ .K(),[]);/**Function to delete a project
 * @param {number} id id of the project to be deleted
 */const onDelete=id=>{if((permissions===null||permissions===void 0?void 0:permissions.deleteProject)===true){module.deleteRecord(id).then(()=>{onRefresh();}).catch(err=>{const errorMessages=err.response.data.message||"Something went wrong!";antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay.error(errorMessages);});}else{antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay.error("You don't have permission to delete this project, Please contact your admin");}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{trigger:['click'],open:dropdownOpen[item.id],onOpenChange:open=>setDropdownOpen({[item.id]:open}),menu:{items:[{label:'Edit',key:'edit',icon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{}),onClick:e=>{e.domEvent.preventDefault();navigate("/projects/edit?id=".concat(item.id));}},{label:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{title:"Are you sure to delete this project?",onConfirm:()=>{onDelete(item.id);// Close the dropdown and delete confirmation
setDeleteConfirmation(false);setDropdownOpen({[item.id]:false});},okText:"Yes",cancelText:"No",placement:"bottom",open:deleteConfirmation,onOpenChange:open=>setDeleteConfirmation(open),children:"Delete"}),key:'delete',icon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{}),danger:true,onClick:e=>{e.domEvent.preventDefault();setDeleteConfirmation(!deleteConfirmation);}}]},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.project_item_header_actions_more,onClick:e=>e.preventDefault()})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionsDropdown);

/***/ }),

/***/ 56052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Card)
});

// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 1 modules
var tag = __webpack_require__(12916);
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 3 modules
var avatar = __webpack_require__(75871);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js
var tooltip = __webpack_require__(81541);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__(79378);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/FileOutlined.js
var FileOutlined = __webpack_require__(56272);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/Components/Organisms/Projects/Card/actions.tsx
var actions = __webpack_require__(73209);
// EXTERNAL MODULE: ./node_modules/antd/es/popover/index.js
var popover = __webpack_require__(65059);
// EXTERNAL MODULE: ./src/Components/Organisms/Projects/Card/styles.module.scss
var styles_module = __webpack_require__(82369);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Projects/Card/members-tooltip.tsx
const MembersTooltip=props=>{var _memberInCharge$User,_memberInCharge$User2;const{memberInCharge,supportEngineers,allClients,children}=props;return/*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.A,{trigger:"hover",content:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_footer_members_popover,children:[(memberInCharge===null||memberInCharge===void 0?void 0:memberInCharge.User)&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_footer_members_popover_item,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{className:styles_module/* default */.A.project_item_footer_members_popover_item_title,children:"Project Incharge"}),/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),"".concat(memberInCharge===null||memberInCharge===void 0?void 0:(_memberInCharge$User=memberInCharge.User)===null||_memberInCharge$User===void 0?void 0:_memberInCharge$User.firstName," ").concat(memberInCharge===null||memberInCharge===void 0?void 0:(_memberInCharge$User2=memberInCharge.User)===null||_memberInCharge$User2===void 0?void 0:_memberInCharge$User2.lastName)]}),(supportEngineers===null||supportEngineers===void 0?void 0:supportEngineers.length)>0&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_footer_members_popover_item,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{className:styles_module/* default */.A.project_item_footer_members_popover_item_title,children:"Support Engineers"}),supportEngineers===null||supportEngineers===void 0?void 0:supportEngineers.map((member,idx)=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:"".concat(idx+1,". ").concat(member.User.firstName," ").concat(member.User.lastName)},"support-engineer-".concat(idx)))]}),(allClients===null||allClients===void 0?void 0:allClients.length)>0&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_footer_members_popover_item,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{className:styles_module/* default */.A.project_item_footer_members_popover_item_title,children:"Clients"}),allClients===null||allClients===void 0?void 0:allClients.map((member,idx)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:["".concat(idx+1,". ").concat(member.Client.name),member.isRepresentative===true&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"(Representative)"})]},"client-".concat(idx)))]})]}),children:children});};/* harmony default export */ const members_tooltip = (MembersTooltip);
// EXTERNAL MODULE: ./src/Components/Organisms/Projects/Details/Sections/States/index.tsx + 1 modules
var States = __webpack_require__(71708);
;// ./src/Components/Organisms/Projects/Card/index.tsx
const ProjectsCard=_ref=>{let{data,permissions}=_ref;const{onRefresh,allProjects,projectStates}=data;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.projects,children:allProjects.map(item=>{var _item$_count,_item$_count2;const{ProjectMembers,ProjectClient}=item;const memberInCharge=ProjectMembers===null||ProjectMembers===void 0?void 0:ProjectMembers.find(member=>member.projectRole===commonEnums/* ProjectRoleEnum */.b2.projectIncharge);const supportEngineers=ProjectMembers===null||ProjectMembers===void 0?void 0:ProjectMembers.filter(member=>member.projectRole===commonEnums/* ProjectRoleEnum */.b2.supportEngineers);const allClients=ProjectClient;return/*#__PURE__*/(0,jsx_runtime.jsxs)("a",{// Use a unique identifier for the key
href:"/projects/".concat(item.slug,"?id=").concat(item.id),className:styles_module/* default */.A.project_item,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_header,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_header_left,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:styles_module/* default */.A.project_item_header_id,children:item.referenceNumber}),/*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.A,{className:styles_module/* default */.A.project_item_header_priority,color:commonEnums/* taskPriority */.sh[item.priority].color,children:commonEnums/* taskPriority */.sh[item.priority].title})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_header_actions,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(States/* default */.A,{permissions:permissions,data:{projectStates:projectStates,project:{data:item,onRefresh:onRefresh}},style:{padding:'3px 5px'}}),/*#__PURE__*/(0,jsx_runtime.jsx)(actions/* default */.A,{item:item,onRefresh:onRefresh,permissions:permissions})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.project_item_body,children:/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:styles_module/* default */.A.project_item_body_title,children:item.title})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_footer,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_footer_left,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(members_tooltip,{allClients:allClients,memberInCharge:memberInCharge,supportEngineers:supportEngineers,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_footer_members,children:[(memberInCharge===null||memberInCharge===void 0?void 0:memberInCharge.User)&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.project_item_footer_members_incharge,children:/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:25,style:{border:'1px solid var(--color-light-200)'},src:"".concat(constants/* RESOURCE_BASE_URL */.to).concat(memberInCharge.User.profile),icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{})})}),(supportEngineers===null||supportEngineers===void 0?void 0:supportEngineers.length)>0&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.project_item_footer_members_support,children:/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default.Group */.A.Group,{children:supportEngineers.map(member=>/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:25,style:{border:'1px solid var(--color-light-200)',marginTop:'5px'},src:"".concat(constants/* RESOURCE_BASE_URL */.to).concat(member.User.profile),icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{})},member.User.id))})}),(allClients===null||allClients===void 0?void 0:allClients.length)>0&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.project_item_footer_members_clients,children:/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default.Group */.A.Group,{children:allClients.map(client=>/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:25,style:{border:'1px solid var(--color-light-200)'},src:"".concat(constants/* RESOURCE_BASE_URL */.to).concat(client.Client.logo),icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{})},client.Client.id))})})]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.project_item_footer_date,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:styles_module/* default */.A.project_item_footer_date_start,children:(0,dateHandler/* convertDate */.ic)(item.startDate,'M dd,yy')}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:styles_module/* default */.A.project_item_footer_date_separator,children:"-"}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:styles_module/* default */.A.project_item_footer_date_end,children:(0,dateHandler/* convertDate */.ic)(item.endDate,'M dd,yy')})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.project_item_footer_counts,children:/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:"".concat((_item$_count=item._count)===null||_item$_count===void 0?void 0:_item$_count.Resources," Files in this project"),placement:"left",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:styles_module/* default */.A.project_item_footer_counts_files,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FileOutlined/* default */.A,{style:{color:'var(--color-light-300)'}}),(_item$_count2=item._count)===null||_item$_count2===void 0?void 0:_item$_count2.Resources]})})})]})]},item.id);})});};/* harmony default export */ const Card = (ProjectsCard);

/***/ }),

/***/ 71708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ States)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 15 modules
var typography = __webpack_require__(30377);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js
var dropdown = __webpack_require__(57811);
// EXTERNAL MODULE: ./node_modules/antd/es/divider/index.js
var divider = __webpack_require__(40895);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js
var tooltip = __webpack_require__(81541);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js
var DownOutlined = __webpack_require__(73022);
// EXTERNAL MODULE: ./src/Modules/Project/index.ts
var Project = __webpack_require__(50167);
;// ./src/Components/Organisms/Projects/Details/Sections/States/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"dropdownOverlay":"styles_dropdownOverlay__8pes8","dropdownContainer":"styles_dropdownContainer__LqiO1","searchContainer":"styles_searchContainer__Xk+nm","searchInput":"styles_searchInput__-3cFL"});
// EXTERNAL MODULE: ./src/Components/Atoms/Input/index.tsx + 2 modules
var Input = __webpack_require__(58516);
// EXTERNAL MODULE: ./src/Components/Atoms/CustomEmpty/index.tsx
var CustomEmpty = __webpack_require__(49758);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Projects/Details/Sections/States/index.tsx
const{Text}=typography/* default */.A;/** Change States component */const ChangeStates=_ref=>{var _searchedStates$data,_project$ProjectState2,_project$ProjectState3,_project$ProjectState4,_project$ProjectState5;let{data,permissions,style}=_ref;const{projectStates,project:{data:project,onRefresh}}=data;const module=(0,react.useMemo)(()=>new Project/* ProjectModule */.K(),[]);const[searchedStates,setSearchedStates]=(0,react.useState)({data:projectStates,query:''});const onStatesChange=stateId=>{const updateData={projectId:project.id,projectStateId:stateId};if(permissions.updateProject===true){module.updateProjectStatus(updateData).then(res=>{const{data}=res;message/* default */.Ay.success((data===null||data===void 0?void 0:data.message)||'States changed successfully');onRefresh();}).catch(err=>{var _err$response,_err$response$data;const errorMessages=err===null||err===void 0?void 0:(_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message;message/* default */.Ay.error(errorMessages||'Something went wrong');});}else{message/* default */.Ay.error('You do not have permission to update project States, please contact your administrator');}};(0,react.useEffect)(()=>{setSearchedStates({data:projectStates,query:''});},[projectStates]);return/*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.A,{trigger:['click'],menu:{items:(_searchedStates$data=searchedStates.data)===null||_searchedStates$data===void 0?void 0:_searchedStates$data.map(state=>{var _project$ProjectState;return{key:"state-".concat(state.id),label:state.title,onClick:()=>onStatesChange(state.id),disabled:state.id===(project===null||project===void 0?void 0:(_project$ProjectState=project.ProjectState)===null||_project$ProjectState===void 0?void 0:_project$ProjectState.id)};})},overlayClassName:styles_module.dropdownOverlay,dropdownRender:menu=>{var _searchedStates$data2;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.dropdownContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.searchContainer,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A,{placeHolder:"Search",size:"w100",value:searchedStates.query,onChange:e=>{var _value$trim;const value=e.target.value||'';const query=value===null||value===void 0?void 0:(_value$trim=value.trim())===null||_value$trim===void 0?void 0:_value$trim.toLowerCase();const filteredStates=projectStates.filter(state=>state.title.toLowerCase().includes(query));setSearchedStates({data:filteredStates,query});},className:styles_module.searchInput})}),/*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.A,{style:{marginBottom:10,marginTop:0}}),menu,!((_searchedStates$data2=searchedStates.data)!==null&&_searchedStates$data2!==void 0&&_searchedStates$data2.length)&&/*#__PURE__*/(0,jsx_runtime.jsx)(CustomEmpty/* default */.A,{description:"No data found"})]});},children:/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:project===null||project===void 0?void 0:(_project$ProjectState2=project.ProjectState)===null||_project$ProjectState2===void 0?void 0:_project$ProjectState2.title,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:(0,objectSpread2/* default */.A)({display:"flex",alignItems:"center",background:"".concat(project===null||project===void 0?void 0:(_project$ProjectState3=project.ProjectState)===null||_project$ProjectState3===void 0?void 0:_project$ProjectState3.bgColor),cursor:"pointer",color:"".concat((project===null||project===void 0?void 0:(_project$ProjectState4=project.ProjectState)===null||_project$ProjectState4===void 0?void 0:_project$ProjectState4.textColor)||"var(--color-dark-sub"),padding:"5px 10px",borderRadius:"5px",fontSize:"14px",// add no wrap to prevent text overflow
whiteSpace:"nowrap"},style),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",display:"inline-block",maxWidth:window.innerWidth>1500?"30ch":"15ch"},children:(project===null||project===void 0?void 0:(_project$ProjectState5=project.ProjectState)===null||_project$ProjectState5===void 0?void 0:_project$ProjectState5.title)||'Select States'}),/*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.A,{style:{marginLeft:5}})]})})});};/* harmony default export */ const States = (ChangeStates);

/***/ }),

/***/ 32215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Projects)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(42074);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/segmented/index.js + 2 modules
var segmented = __webpack_require__(84649);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/BarsOutlined.js
var BarsOutlined = __webpack_require__(5992);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
;// ./node_modules/@ant-design/icons-svg/es/asn/AppstoreOutlined.js
// This icon file is generated automatically.
var AppstoreOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"
      }
    }]
  },
  "name": "appstore",
  "theme": "outlined"
};
/* harmony default export */ const asn_AppstoreOutlined = (AppstoreOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/AppstoreOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var AppstoreOutlined_AppstoreOutlined = function AppstoreOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_AppstoreOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_AppstoreOutlined = (/*#__PURE__*/react.forwardRef(AppstoreOutlined_AppstoreOutlined));
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Atoms/ErrorCodes/index.tsx + 1 modules
var ErrorCodes = __webpack_require__(36250);
// EXTERNAL MODULE: ./src/Components/Atoms/CustomFilter/more.tsx
var more = __webpack_require__(38714);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/Modules/Project/index.ts
var Project = __webpack_require__(50167);
// EXTERNAL MODULE: ./src/Modules/Project/permissions.ts
var Project_permissions = __webpack_require__(31203);
// EXTERNAL MODULE: ./src/Modules/User/index.ts
var User = __webpack_require__(47645);
// EXTERNAL MODULE: ./src/Modules/Organization/index.ts
var Organization = __webpack_require__(42361);
// EXTERNAL MODULE: ./src/Modules/ProjectState/index.ts
var ProjectState = __webpack_require__(45732);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Components/Organisms/Projects/Card/index.tsx + 1 modules
var Card = __webpack_require__(56052);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 15 modules
var typography = __webpack_require__(30377);
// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 1 modules
var tag = __webpack_require__(12916);
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 3 modules
var avatar = __webpack_require__(75871);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__(79378);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/Components/Organisms/Projects/Card/actions.tsx
var actions = __webpack_require__(73209);
// EXTERNAL MODULE: ./src/Components/Organisms/Projects/Details/Sections/States/index.tsx + 1 modules
var States = __webpack_require__(71708);
// EXTERNAL MODULE: ./node_modules/antd/es/badge/index.js + 4 modules
var badge = __webpack_require__(74947);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 11 modules
var skeleton = __webpack_require__(46005);
// EXTERNAL MODULE: ./node_modules/antd/es/transfer/index.js + 5 modules
var transfer = __webpack_require__(97579);
// EXTERNAL MODULE: ./src/Components/Organisms/Common/styles.module.scss
var styles_module = __webpack_require__(96019);
// EXTERNAL MODULE: ./src/Components/Atoms/ServerErrorHandler/index.tsx
var ServerErrorHandler = __webpack_require__(13321);
// EXTERNAL MODULE: ./src/helpers/error-handler.ts
var error_handler = __webpack_require__(38266);
// EXTERNAL MODULE: ./src/services/axiosInstance.ts
var axiosInstance = __webpack_require__(83365);
;// ./src/Modules/ProjectEnableStates/index.ts
class ProjectEnableStatesModule{constructor(){this.endPoint="project-enable-states";this.getAllRecords=query=>{return axiosInstance/* default */.A.get(this.endPoint,{params:query});};this.getByProjectId=projectId=>{return axiosInstance/* default */.A.get(this.endPoint+"/by-project/"+projectId);};this.createRecordStates=(data,projectId)=>{return axiosInstance/* default */.A.post("".concat(this.endPoint,"/updateProjectStates"),(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},data),{},{projectId}));};this.deleteRecord=(data,projectId)=>{return axiosInstance/* default */.A.delete("".concat(this.endPoint,"/remove"),{data:(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},data),{},{projectId})});};}}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Projects/Details/Sections/States/modal.tsx
const ProjectStateModal=props=>{const{openModal,onCancel,projectId,reloadTableData,permissions}=props;const[form]=es_form/* default */.A.useForm();console.log("Project ID:",projectId);const projectModule=(0,react.useMemo)(()=>new Project/* ProjectModule */.K(),[]);const projectStateModule=(0,react.useMemo)(()=>new ProjectState/* ProjectStateModule */.j(),[]);const projectEnableStatesModule=(0,react.useMemo)(()=>new ProjectEnableStatesModule(),[]);const[projectStatesData,setProjectStatesData]=(0,react.useState)([]);const[projectEnableStates,setProjectEnableStates]=(0,react.useState)([]);const[projectsMap,setProjectsMap]=(0,react.useState)(new Map());const[projectStatesMap,setProjectStatesMap]=(0,react.useState)(new Map());const[loading,setLoading]=(0,react.useState)(true);let selectedKeys=[];projectEnableStates===null||projectEnableStates===void 0?void 0:projectEnableStates.forEach(ele=>{if(ele!==null&&ele!==void 0&&ele.pstateId)selectedKeys.push(ele.pstateId.toString());});console.log("States selected",projectEnableStates);const[targetKeys,setTargetKeys]=(0,react.useState)(selectedKeys);const handleErrors=err=>{const error=(0,error_handler/* errorHandler */.r)(err);if(typeof error.message=="string"){message/* default */.Ay.error(error.message);}else{let errData=(0,ServerErrorHandler/* HandleServerErrors */.p)(error.message,[]);form.setFields(errData);}};const getProjectStatesData=(0,react.useCallback)(()=>{setLoading(true);projectStateModule.getAllStates().then(res=>{if(res.data){// Sort the data alphabetically by title (or another property)
const sortedData=res.data.data.sort((a,b)=>{return a.title.localeCompare(b.title);});setProjectStatesData(sortedData);console.log(sortedData);// Create a map for project state IDs and titles
const projectStatesMap=new Map();sortedData.forEach(state=>{projectStatesMap.set(state.id,state.title);});setProjectStatesMap(projectStatesMap);// Log the projectStatesMap to debug
console.log("Project States Map:",projectStatesMap);}setLoading(false);}).catch(err=>{handleErrors(err);setLoading(false);});},[projectStateModule]);const getProjectEnableStatesData=(0,react.useCallback)(()=>{setLoading(true);console.log("Fetching project enable states for project ID:",projectId);projectModule.getByProjectId(projectId).then(res=>{console.log("Response received:",res);console.log("Response data:",res.data);if(res.data&&res.data.data&&res.data.data.ProjectEnableStates){//console.log("Project Enable States:", res.data.data.ProjectEnableStates);
setProjectEnableStates(res.data.data.ProjectEnableStates);// Fetch project titles and create a map
const projectsMap=new Map();projectsMap.set(res.data.data.id,res.data.data.title);// Assuming the project title is in the main project data
setProjectsMap(projectsMap);// Create selected keys for the transfer component
const selectedKeys=res.data.data.ProjectEnableStates.map(ele=>ele.pstateId.toString());setTargetKeys(selectedKeys);// Log the projectsMap and selectedKeys to debug
console.log("Projects Map:",projectsMap);console.log("Selected Keys:",selectedKeys);}else{console.log("No project enable states found or unexpected response structure.");}setLoading(false);}).catch(err=>{console.error("Error fetching project enable states:",err);handleErrors(err);setLoading(false);});},[projectId]);const handleChange=nextTargetKeys=>{setTargetKeys(nextTargetKeys);};const filterOption=(inputValue,option)=>option.title.indexOf(inputValue)>-1;(0,react.useEffect)(()=>{if(openModal){getProjectStatesData();getProjectEnableStatesData();}},[openModal,getProjectStatesData,getProjectEnableStatesData]);const onFinish=formValues=>{var _formValues$projectSt;const formData=formValues===null||formValues===void 0?void 0:(_formValues$projectSt=formValues.projectStateIds)===null||_formValues$projectSt===void 0?void 0:_formValues$projectSt.map(ele=>Number(ele));console.log('Form Data:',formData);projectModule.createEnableStates({projectStateIds:formData},projectId).then(res=>{reloadTableData();onCancel();message/* default */.Ay.success("Saved Successfully!!");}).catch(err=>{handleErrors(err);});let removedStates=[];selectedKeys.forEach(ele=>{if(!targetKeys.includes(ele))removedStates.push(Number(ele));});if(removedStates.length>0){projectModule.removeProjectStates({projectStateIds:removedStates},projectId).catch(err=>{message/* default */.Ay.error(err.message);});}};const columns=[{title:'ID',dataIndex:'id',key:'id'},{title:'Project Title',dataIndex:'pId',key:'pId',render:pId=>projectsMap.get(pId)||pId},{title:'Project State Title',dataIndex:'pstateId',key:'pstateId',render:pstateId=>projectStatesMap.get(pstateId)||pstateId},{title:'Is Published',dataIndex:'isPublished',key:'isPublished',render:text=>text?'Yes':'No'},{title:'Is Deleted',dataIndex:'isDeleted',key:'isDeleted',render:text=>text?'Yes':'No'}];return/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomModal */.jo,{visible:openModal,closable:true,onCancel:onCancel,titleText:"Manage Project States",showFooter:false,children:loading?/*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.A,{active:true,paragraph:{rows:20}})// Adjust the number of rows if needed
:/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.A,{className:styles_module/* default */.A.form,onFinish:onFinish,form:form,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"projectStateIds",rules:[{required:false}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(transfer/* default */.A,{dataSource:projectStatesData.filter(Boolean).map(ele=>({key:ele.id.toString(),title:ele.title,description:ele.title.toLowerCase(),chosen:targetKeys.includes(ele.id.toString())})),listStyle:{width:250,height:400},showSearch:true,filterOption:filterOption,targetKeys:targetKeys,onChange:handleChange,render:item=>item.title})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.footer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{size:"normal",fontSize:"sm",onClick:onCancel,type:"plain",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomButton */.Sv,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",children:"Save"})]})]})})});};
;// ./src/Components/Organisms/Projects/table.tsx
const{Paragraph}=typography/* default */.A;const ProjectTable=_ref=>{let{data,permissions,rowSelection}=_ref;const{onRefresh,allProjects,projectStates}=data;// Ensure projectStates is an array before sorting
const sortedProjectStates=Array.isArray(projectStates)?[...projectStates].sort((a,b)=>a.title.localeCompare(b.title)):[];const[isModalVisible,setIsModalVisible]=(0,react.useState)(false);const[selectedProject,setSelectedProject]=(0,react.useState)(null);const handleManageStateClick=record=>{setSelectedProject(record);setIsModalVisible(true);};const handleCloseModal=()=>{setIsModalVisible(false);};const columns=[{title:'Reference Number',dataIndex:'referenceNumber',key:'referenceNumber',render:referenceNumber=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-sub",size:"sm",children:referenceNumber})},{title:"Title",dataIndex:"title",key:"title",render:(title,record)=>{const{priority}=record;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"/projects/".concat(record.slug,"?id=").concat(record.id),title:"View Project Details",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",weight:"semi",children:title})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Paragraph,{ellipsis:{rows:2,expandable:true,symbol:'more'},className:"mt-1 color-dark-sub mb-0",children:["Slug: ",record===null||record===void 0?void 0:record.slug]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"d-flex mt-1",children:/*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.A,{color:commonEnums/* taskPriority */.sh[priority].color,style:{borderRadius:15},children:commonEnums/* taskPriority */.sh[priority].title})})]});}},{title:'Project Type',dataIndex:'xeroReference',key:'projectType',render:xeroReference=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-sub",size:"sm",children:xeroReference?'Xero':'Local'})},{title:"Client",dataIndex:"client",key:"client",render:client=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:"small",className:"mr-2",src:"".concat(constants/* RESOURCE_BASE_URL */.to).concat(client===null||client===void 0?void 0:client.logo),icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",className:"mt-1",children:client===null||client===void 0?void 0:client.name})]})},// {
//   title: "Memberssss",
//   dataIndex: "ProjectMembers",
//   key: "ProjectMembers",
//   render: (ProjectMembers: ProjectTypes['ProjectMembers'], record) => {
//     // Project Incharge
//     const memberInCharge = ProjectMembers?.find((member) => member.projectRole === ProjectRoleEnum['projectIncharge'])
//     // Support Engineers
//     const supportEngineers = ProjectMembers?.filter((member) => member.projectRole === ProjectRoleEnum['supportEngineers'])
//     // Clients and their representatives
//     const allClients = record.ProjectClient
//     return (
//       <MembersTooltip
//         allClients={allClients}
//         memberInCharge={memberInCharge!}
//         supportEngineers={supportEngineers!}
//       >
//         <div>
//           <Avatar.Group maxCount={3} size={"small"} maxPopoverTrigger={'focus'}>
//             {ProjectMembers?.map((member) => (
//               <Avatar
//                 src={`${RESOURCE_BASE_URL}${member?.User?.profile}`}
//                 icon={<UserOutlined />}
//               />
//             ))}
//           </Avatar.Group>
//         </div>
//       </MembersTooltip>
//     )
//   }
// },
{title:'Verification',key:'verification',render:(_,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:record.referenceNumber?/*#__PURE__*/(0,jsx_runtime.jsx)(badge/* default */.A,{color:"green",text:"Xero Verified",style:{backgroundColor:'#52c41a',color:'white',borderRadius:'2px',padding:'0 4px',width:'110px'}}):/*#__PURE__*/(0,jsx_runtime.jsx)(badge/* default */.A,{color:"red",text:"Unverified",style:{backgroundColor:'#ff4d4f',color:'white',borderRadius:'2px',padding:'0 0px'}})})},{title:"State",dataIndex:"ProjectState",key:"ProjectState",render:(_projectState,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(States/* default */.A,{permissions:permissions,data:{projectStates:projectStates,project:{data:record,onRefresh:onRefresh}},style:{padding:"2px 8px"}})},// {
//   title: 'State',
//   dataIndex: 'ProjectState',
//   key: 'ProjectState',
//   render: (ProjectState: ProjectTypes['ProjectState'], record) => (
//     <>
//       <Paragraph
//         ellipsis={{
//           rows: 1,
//           expandable: false,
//         }}
//         className="my-0 color-dark-sub"
//       >
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           {projectStates.map((state) => (
//             <li key={state.id} className="font-size-xs ml-0">{state.title}</li>
//           ))}
//         </ul>
//       </Paragraph>
//       <p
//         className="color-dark-main font-weight-bold font-size-sm mb-0 ml-1 cursor-pointer"
//         onClick={() => handleManageStateClick(record)}
//       >
//         Manage State
//       </p>
//     </>
//   ),
// },
{title:'State',dataIndex:'ProjectState',key:'ProjectState',render:(_,record)=>{var _record$ProjectEnable;console.log("Record:",record);console.log("ProjectEnableStates:",record.ProjectEnableStates);const enableStates=((_record$ProjectEnable=record.ProjectEnableStates)===null||_record$ProjectEnable===void 0?void 0:_record$ProjectEnable.map(enableState=>enableState.pstateId))||[];console.log("Enable States:",enableStates);const assignedStates=projectStates.filter(state=>enableStates.includes(state.id));console.log("Assigned States:",assignedStates);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Paragraph,{ellipsis:{rows:1,expandable:false},className:"my-0 color-dark-sub",children:/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{style:{listStyle:'none',padding:0},children:assignedStates.map(state=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:"font-size-xs ml-0",children:state.title},state.id))})}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"color-dark-main font-weight-bold font-size-sm mb-0 ml-1 cursor-pointer",onClick:()=>handleManageStateClick(record),children:"Manage State"})]});}},{title:"Date",dataIndex:"startDate",key:"startDate",render:(startDate,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-sub",size:"sm",children:"Start: ".concat((0,dateHandler/* convertDate */.ic)(startDate,"dd MM yy"))||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-sub",size:"sm",children:"End: ".concat((0,dateHandler/* convertDate */.ic)(record===null||record===void 0?void 0:record.endDate,"dd MM yy"))||0})]})},{title:'Action',key:'action',render:(_,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(actions/* default */.A,{item:record,permissions:permissions,onRefresh:onRefresh})}];return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{columns:columns,dataSource:allProjects,pagination:false,rowKey:"id",rowSelection:rowSelection,style:{border:'1px solid #d9d9d9',borderRadius:'4px'}}),/*#__PURE__*/(0,jsx_runtime.jsx)(ProjectStateModal,{openModal:isModalVisible,onCancel:handleCloseModal,projectId:(selectedProject===null||selectedProject===void 0?void 0:selectedProject.id)||0,reloadTableData:onRefresh,permissions:permissions,currentForm:"projectForm"// Provide the relevant form context
,type:"edit"// Provide the relevant type
})]});};/* harmony default export */ const Projects_table = (ProjectTable);
;// ./src/Components/Organisms/Projects/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Projects_styles_module = ({"actions":"styles_actions__edjiB","actionItem":"styles_actionItem__qrAFw","actionItemText":"styles_actionItemText__Ap3Tc","actionItemButtonWrap":"styles_actionItemButtonWrap__Oh+sh","yesButton":"styles_yesButton__NVBIk","noButton":"styles_noButton__bVaev","overlayCustomStyle":"styles_overlayCustomStyle__UvU3i","form":"styles_form__VDx5T","footer":"styles_footer__3ryKW","avatarWrap":"styles_avatarWrap__K5PuI","qualityWrap":"styles_qualityWrap__CO4ve","image":"styles_image__7Q8oW","overlay":"styles_overlay__UeG9z","cardWrap":"styles_cardWrap__FEGB2","card":"styles_card__UGCvY","card__green":"styles_card__green__vW-1c","card__info":"styles_card__info__RHesw","filterWrap":"styles_filterWrap__olOLU","search":"styles_search__SpJs6","freeText":"styles_freeText__5C6w6","freeTextTwo":"styles_freeTextTwo__lTKd2","placeHolder":"styles_placeHolder__ubNfI","active":"styles_active__iJZuJ","moreFilter":"styles_moreFilter__SnTZO","resetWrap":"styles_resetWrap__ug1Qa","saveSearchWrap":"styles_saveSearchWrap__oXO2C","webIdFilter":"styles_webIdFilter__qc56v","searchItems":"styles_searchItems__J06+1","checkboxGroup":"styles_checkboxGroup__DrwAm","dateWrap":"styles_dateWrap__EBhJ-","inputsWrap":"styles_inputsWrap__uKzF3","footerButtonWrap":"styles_footerButtonWrap__VmwwC","dropdownItem":"styles_dropdownItem__AzaG0","noOption":"styles_noOption__FJWHQ","animateTranslation":"styles_animateTranslation__HD4RH","__translate":"styles___translate__VccIv","publishButton":"styles_publishButton__o6G19","unpublishButton":"styles_unpublishButton__6njH7","deals":"styles_deals__V8DcX","listingDetails":"styles_listingDetails__iMTs6","completionStatus":"styles_completionStatus__e41xr","dropdown":"styles_dropdown__XQfi3","overlay_item":"styles_overlay_item__sHDLS","overlay_item_noData":"styles_overlay_item_noData__G3hRr","overlay_popConfirm":"styles_overlay_popConfirm__bH2uJ","disabledButton":"styles_disabledButton__vGISC","view_as":"styles_view_as__TDQVp"});
// EXTERNAL MODULE: ./src/Components/Atoms/CardShimmer/index.tsx + 1 modules
var CardShimmer = __webpack_require__(87031);
;// ./src/Components/Organisms/Projects/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:false,text:"Projects"}];const useFetchXeroProjects=()=>{const[xeroProjects,setXeroProjects]=(0,react.useState)([]);const[loading,setLoading]=(0,react.useState)(false);const[error,setError]=(0,react.useState)(null);(0,react.useEffect)(()=>{const fetchXeroProjects=async()=>{setLoading(true);try{const response=await axiosInstance/* default */.A.get('/xero/projects');console.log("dekh Xero Projects Response:",response.data);setXeroProjects(response.data.data||[]);}catch(err){var _err$response,_err$response$data;console.error(err);// Log the error
setError(((_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message)||'Failed to fetch Xero projects');}finally{setLoading(false);}};fetchXeroProjects();},[]);return{xeroProjects,loading,error};};const AllProjects=()=>{var _users$data,_clients$data;const[searchParams]=(0,dist/* useSearchParams */.ok)();// available permissions for the projects page
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(Project_permissions/* ProjectPermissionsEnum */.l);const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const permissions=userPermissions;const{readProject}=permissions;const module=(0,react.useMemo)(()=>new Project/* ProjectModule */.K(),[]);const projectStateModule=(0,react.useMemo)(()=>new ProjectState/* ProjectStateModule */.j(),[]);const userModule=(0,react.useMemo)(()=>new User/* UserModule */.U(),[]);const orgModule=(0,react.useMemo)(()=>new Organization/* OrganizationModule */.I(),[]);const[projectViewAs,setProjectViewAs]=(0,react.useState)(()=>{const viewAs=localStorage.getItem("projectViewAs");if(viewAs==="table"){return"table";}return"grid";});const[selectedRowKeys,setSelectedRowKeys]=(0,react.useState)([]);const[moreFilters,setMoreFilters]=(0,react.useState)([]);const[selectedFilters,setSelectedFilters]=(0,react.useState)({title:"",slug:"",quoteNumber:"",projectStateSlugs:"",clientId:0,isClosed:undefined,dateRange:[],userIds:[],projectRole:0// sortOrder: "",
// sortByField: ""
});const{xeroProjects,loading:xeroLoading,error:xeroError}=useFetchXeroProjects();const[projects,setProjects]=(0,react.useState)([]);const[error,setError]=(0,react.useState)(null);const[reset,setReset]=(0,react.useState)(false);// Title Search
const[titleTerm,setTitleTerm]=(0,react.useState)();// Users Search
const[searchTerm,setSearchTerm]=(0,react.useState)("");// Client Search
const[clientSearchTerm,setClientSearchTerm]=(0,react.useState)("");// Title Debounce
const debouncedTitleTerm=(0,useDebounce/* useDebounce */.d)(titleTerm,500);// Users Debounce
const debouncedSearchTerm=(0,useDebounce/* useDebounce */.d)(searchTerm,500);// Client Debounce
const debouncedClientSearchTerm=(0,useDebounce/* useDebounce */.d)(clientSearchTerm,500);const{data,meta,onRefresh,loading}=(0,hooks/* useFetchData */.Gs)({method:module.getAllRecords,initialQuery:{isClosed:searchParams.get("isClosed")==="true"?true:searchParams.get("isClosed")==="false"?false:undefined,onHold:searchParams.get("onHold")==="true"?true:searchParams.get("onHold")==="false"?false:undefined}});const{data:projectStates}=(0,hooks/* useFetchData */.Gs)({method:projectStateModule.getPublishedRecords,initialQuery:{perPage:100}});(0,react.useEffect)(()=>{let combinedProjects=[];console.log('Data:',data);console.log('Xero Projects :',xeroProjects);if(data&&Array.isArray(data)&&xeroProjects&&Array.isArray(xeroProjects)){combinedProjects=[...data,...xeroProjects];}else if(data&&Array.isArray(data)){combinedProjects=data;}else if(xeroProjects&&Array.isArray(xeroProjects)){combinedProjects=xeroProjects;}else{combinedProjects=[];}setProjects(combinedProjects);console.log('Combined Projects:',combinedProjects);},[data,xeroProjects]);const[users,setUsers]=(0,react.useState)({data:[],loading:false});// Client Search Results
const[clients,setClients]=(0,react.useState)({data:[],loading:false});// const sortByField = [
//   { label: "Name", value: "name" },
//   { label: "Email", value: "email" },
//   { label: "Date Added", value: "addedDate" },
// ];
const onSelected=event=>{const{name,value}=event.target;const numberValues=[{key:"clientId",name:"Client"},{key:"projectRole",name:"Project Role"}];if(numberValues.some(item=>item.key===name)){const isValidNumber=(0,common/* isNumber */.Et)(value);if(!isValidNumber){var _numberValues$find;message/* default */.Ay.error("".concat((_numberValues$find=numberValues.find(item=>item.key===name))===null||_numberValues$find===void 0?void 0:_numberValues$find.name," should be a number"));return;}}// set the selected value in the state
setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{[name]:value}));};const onReset=(0,react.useCallback)((name,value)=>{if(name){setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{[name]:value}));}},[selectedFilters]);const onUpdate=(0,react.useCallback)(query=>{var _selectedFilters$date,_selectedFilters$date2,_selectedFilters$user;const fromDateString=((_selectedFilters$date=selectedFilters.dateRange)===null||_selectedFilters$date===void 0?void 0:_selectedFilters$date[0])||"";const toDateString=((_selectedFilters$date2=selectedFilters.dateRange)===null||_selectedFilters$date2===void 0?void 0:_selectedFilters$date2[1])||"";const fromDate=fromDateString?(0,dateHandler/* convertDate */.ic)(fromDateString,"yy-mm-dd"):undefined;const toDate=toDateString?(0,dateHandler/* convertDate */.ic)(toDateString,"yy-mm-dd"):undefined;const params=(0,objectSpread2/* default */.A)({slug:selectedFilters.slug||undefined,quoteNumber:selectedFilters.quoteNumber||undefined,projectStateSlugs:selectedFilters.projectStateSlugs?[selectedFilters.projectStateSlugs]:undefined,clientId:Number(selectedFilters.clientId)>0?Number(selectedFilters.clientId):undefined,isClosed:selectedFilters.isClosed||undefined,fromDate:fromDate,toDate:toDate,userIds:(_selectedFilters$user=selectedFilters.userIds)!==null&&_selectedFilters$user!==void 0&&_selectedFilters$user.length?selectedFilters.userIds:undefined,projectRole:Number(selectedFilters.projectRole)>0?Number(selectedFilters.projectRole):undefined,title:debouncedTitleTerm||undefined},query);onRefresh(params);},[selectedFilters,onRefresh]);const onTitleSearch=(0,react.useCallback)(()=>{if(debouncedTitleTerm!==undefined){onUpdate({title:debouncedTitleTerm});}else{onUpdate({title:undefined});}},[debouncedTitleTerm]);const onUserSearch=(0,react.useCallback)(()=>{if(debouncedSearchTerm){setUsers(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:true}));userModule.getAllRecords({name:debouncedSearchTerm}).then(res=>{const{data}=res===null||res===void 0?void 0:res.data;setUsers(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.data.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return{data:[...prev.data,...filteredData],loading:false};});}).catch(err=>{var _err$response2,_err$response2$data;message/* default */.Ay.error((err===null||err===void 0?void 0:(_err$response2=err.response)===null||_err$response2===void 0?void 0:(_err$response2$data=_err$response2.data)===null||_err$response2$data===void 0?void 0:_err$response2$data.message)||"Something went wrong");setUsers(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));});}},[debouncedSearchTerm]);const onOrgSearch=(0,react.useCallback)(()=>{if(debouncedClientSearchTerm){setClients(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:true}));orgModule.findPublished({name:debouncedClientSearchTerm}).then(res=>{const{data}=res===null||res===void 0?void 0:res.data;setClients(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.data.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return{data:[...prev.data,...filteredData],loading:false};});}).catch(err=>{var _err$response3,_err$response3$data;message/* default */.Ay.error((err===null||err===void 0?void 0:(_err$response3=err.response)===null||_err$response3===void 0?void 0:(_err$response3$data=_err$response3.data)===null||_err$response3$data===void 0?void 0:_err$response3$data.message)||"Something went wrong");setClients(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));});}},[debouncedClientSearchTerm]);const onTitleChange=event=>{const{currentTarget}=event;setTitleTerm(currentTarget.value);onSelected(event);};// Function to handle pagination change
const onPaginationChange=(page,pageSize)=>onUpdate({page,perPage:pageSize});// Function to handle view as change
const onViewAsChange=value=>{localStorage.setItem("projectViewAs",value);};// Use Effect to fetch Title Search data
(0,react.useEffect)(()=>{onTitleSearch();},[onTitleSearch]);// Use Effect to fetch Users Search data
(0,react.useEffect)(()=>{onUserSearch();},[onUserSearch]);// Use Effect to fetch organization Search data
(0,react.useEffect)(()=>{onOrgSearch();},[onOrgSearch]);(0,react.useEffect)(()=>{if(reset){onUpdate();}// after 2 seconds set reset clicked state to false
const timer=setTimeout(()=>{setReset(false);},2000);return()=>clearTimeout(timer);},[reset]);(0,react.useEffect)(()=>{if(readProject===false){window.location.replace('/');}},[readProject]);const moreFiltersOptions=[{label:"Users",value:"userIds"},{label:"Slug",value:"slug"},{label:"Closed Projects",value:"isClosed"}];const moreComponents={userIds:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"multiSelect",label:"Users",name:"userIds",withSearch:true,options:users===null||users===void 0?void 0:(_users$data=users.data)===null||_users$data===void 0?void 0:_users$data.map(item=>({label:"".concat(item.firstName," ").concat(item.lastName),value:"".concat(item.id)})),onChange:value=>{setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{userIds:value}));},onReset:()=>{setReset(true);onReset("userIds",[]);// Reset search term
setSearchTerm("");},defaultVisible:moreFilters.includes("userIds"),onUpdate:onUpdate// START: For search
,loading:users.loading,searchTerm:searchTerm,onSearch:event=>setSearchTerm(event.currentTarget.value)// END: For search
}),slug:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Slug",name:"slug",value:String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.slug),onChange:onSelected,onReset:()=>onReset("slug",""),onUpdate:onUpdate,defaultVisible:moreFilters.includes("slug")}),isClosed:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Closed Projects",name:"isClosed",options:[{label:"Yes",value:"true"},{label:"No",value:"false"}],value:String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.isClosed),onChange:onSelected,onReset:()=>onReset("isClosed",""),onUpdate:onUpdate,defaultVisible:moreFilters.includes("isClosed")})};(0,react.useEffect)(()=>{const isClosed=searchParams.get("isClosed");if(isClosed!==null){setSelectedFilters(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{isClosed:isClosed==="true"}));}},[]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,onGetProjects:onUpdate,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Projects",breadCrumbData:breadCrumbsData,filters:readProject?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module/* default */.A.filterWrapper,children:[selectedRowKeys.length>0?/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:"Bulk Action Components will be here"})}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomInput */.wi,{placeHolder:"Search by title or reference number",onChange:onTitleChange,value:titleTerm})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Project Status",name:"projectStateSlugs",options:(projectStates===null||projectStates===void 0?void 0:projectStates.map(state=>({label:state.title,value:"".concat(state.slug)})))||[],value:"".concat(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.projectStateSlugs),onChange:onSelected,onReset:()=>onReset("projectStateSlugs",""),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"input",label:"Quote Number",name:"quoteNumber",value:"".concat(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.quoteNumber),onChange:onSelected,onReset:()=>onReset("quoteNumber",""),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Client",name:"clientId",withSearch:true,options:clients===null||clients===void 0?void 0:(_clients$data=clients.data)===null||_clients$data===void 0?void 0:_clients$data.map(item=>({label:item.name,value:"".concat(item.id)})),onChange:onSelected,value:Number(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.clientId)>0?"".concat(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.clientId):"",onReset:()=>{onReset("clientId",0);// Reset search term
setClientSearchTerm("");},onUpdate:onUpdate// START: For search
,loading:clients.loading,searchTerm:clientSearchTerm,onSearch:event=>setClientSearchTerm(event.currentTarget.value)// END: For search
}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"datepicker",label:"Date",name:"dateRange",onChange:value=>setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{dateRange:value})),onReset:()=>onReset("dateRange",""),onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Project Role",name:"projectRole",options:Object.entries(commonEnums/* ProjectRoleEnumString */.A6).map(_ref=>{let[key,value]=_ref;return{label:key,value:value};}),value:String(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.projectRole),onChange:onSelected,onReset:()=>onReset("projectRole",""),onUpdate:onUpdate})}),/**  Find the selected filter and render the component based on the name of the filter */Object.keys(moreComponents).map(key=>{return(moreFilters===null||moreFilters===void 0?void 0:moreFilters.includes(key))&&moreComponents[key];}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(more/* default */.A,{options:moreFiltersOptions===null||moreFiltersOptions===void 0?void 0:moreFiltersOptions.map(option=>({label:option.label,value:option.value})),onChange:value=>setMoreFilters(value),value:moreFilters})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{overflow:"auto"},className:Projects_styles_module.view_as,children:/*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.A,{options:[{label:'Table',value:'table',icon:/*#__PURE__*/(0,jsx_runtime.jsx)(BarsOutlined/* default */.A,{})},{label:'Grid',value:'grid',icon:/*#__PURE__*/(0,jsx_runtime.jsx)(icons_AppstoreOutlined,{})}],onChange:value=>{setProjectViewAs(value);onViewAsChange(value);},value:projectViewAs})})]}):null// excelExport={propertiesData.data?.length > 0 &&
//     <ExcelExport
//         fileName="Properties"
//         headers={headers}
//         data={excelData}
//     />
// }
}),!data&&loading&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{display:"flex",flexWrap:"wrap",width:"100%",gap:10},children:Array(6).fill(0).map((_item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(CardShimmer/* CardShimmer */.S,{},"shimmerItem-".concat(index)))}),readProject===true&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.antdTableWrapper,children:(data===null||data===void 0?void 0:data.length)===0?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{marginTop:"50px"},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomEmpty */.ZX,{description:"No Projects found"})}):/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:projectViewAs==="table"?/*#__PURE__*/(0,jsx_runtime.jsx)(Projects_table,{data:{allProjects:data,onRefresh:onUpdate,projectStates:projectStates},permissions:permissions,rowSelection:{selectedRowKeys,onChange:setSelectedRowKeys}}):/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.A,{data:{allProjects:projects,onRefresh:onUpdate,projectStates:projectStates},permissions:permissions})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Pagination */.dK,{total:meta===null||meta===void 0?void 0:meta.total,current:meta===null||meta===void 0?void 0:meta.page,defaultPageSize:25,pageSizeOptions:[10,20,50,100],onChange:onPaginationChange})]}),readProject===false&&/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCodes/* ErrorCode403 */.$t,{mainMessage:"You don't have permission to view this data"})]});};/* harmony default export */ const Projects = (AllProjects);

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

/***/ 45732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ ProjectStateModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class ProjectStateModule{constructor(){this.endPoint="project-state";this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};this.getPublishedRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/find-published"),{params:query});};this.getAllStates=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/find-published-states"));};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete(this.endPoint+"/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint,data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(this.endPoint+"/"+id,data);};}}

/***/ }),

/***/ 5992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_BarsOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51111);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var BarsOutlined = function BarsOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_BarsOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(BarsOutlined));

/***/ }),

/***/ 90582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_EditOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42701);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var EditOutlined = function EditOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_EditOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EditOutlined));

/***/ }),

/***/ 56272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_FileOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62259);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FileOutlined = function FileOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_FileOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FileOutlined));

/***/ }),

/***/ 72906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_MoreOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/@ant-design/icons-svg/es/asn/MoreOutlined.js
// This icon file is generated automatically.
var MoreOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"
      }
    }]
  },
  "name": "more",
  "theme": "outlined"
};
/* harmony default export */ const asn_MoreOutlined = (MoreOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/MoreOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var MoreOutlined_MoreOutlined = function MoreOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_MoreOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_MoreOutlined = (/*#__PURE__*/react.forwardRef(MoreOutlined_MoreOutlined));

/***/ }),

/***/ 84649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ segmented)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(64467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(82284);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(48383);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(80045);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(71207);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(41929);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(15207);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var es = __webpack_require__(87418);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(13511);
;// ./node_modules/rc-segmented/es/MotionThumb.js







var calcThumbStyle = function calcThumbStyle(targetElement) {
  return targetElement ? {
    left: targetElement.offsetLeft,
    right: targetElement.parentElement.clientWidth - targetElement.clientWidth - targetElement.offsetLeft,
    width: targetElement.clientWidth
  } : null;
};
var toPX = function toPX(value) {
  return value !== undefined ? "".concat(value, "px") : undefined;
};
function MotionThumb(props) {
  var prefixCls = props.prefixCls,
    containerRef = props.containerRef,
    value = props.value,
    getValueIndex = props.getValueIndex,
    motionName = props.motionName,
    onMotionStart = props.onMotionStart,
    onMotionEnd = props.onMotionEnd,
    direction = props.direction;
  var thumbRef = react.useRef(null);
  var _React$useState = react.useState(value),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    prevValue = _React$useState2[0],
    setPrevValue = _React$useState2[1];

  // =========================== Effect ===========================
  var findValueElement = function findValueElement(val) {
    var _containerRef$current;
    var index = getValueIndex(val);
    var ele = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.querySelectorAll(".".concat(prefixCls, "-item"))[index];
    return (ele === null || ele === void 0 ? void 0 : ele.offsetParent) && ele;
  };
  var _React$useState3 = react.useState(null),
    _React$useState4 = (0,slicedToArray/* default */.A)(_React$useState3, 2),
    prevStyle = _React$useState4[0],
    setPrevStyle = _React$useState4[1];
  var _React$useState5 = react.useState(null),
    _React$useState6 = (0,slicedToArray/* default */.A)(_React$useState5, 2),
    nextStyle = _React$useState6[0],
    setNextStyle = _React$useState6[1];
  (0,useLayoutEffect/* default */.A)(function () {
    if (prevValue !== value) {
      var prev = findValueElement(prevValue);
      var next = findValueElement(value);
      var calcPrevStyle = calcThumbStyle(prev);
      var calcNextStyle = calcThumbStyle(next);
      setPrevValue(value);
      setPrevStyle(calcPrevStyle);
      setNextStyle(calcNextStyle);
      if (prev && next) {
        onMotionStart();
      } else {
        onMotionEnd();
      }
    }
  }, [value]);
  var thumbStart = react.useMemo(function () {
    return direction === 'rtl' ? toPX(-(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.right)) : toPX(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.left);
  }, [direction, prevStyle]);
  var thumbActive = react.useMemo(function () {
    return direction === 'rtl' ? toPX(-(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.right)) : toPX(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.left);
  }, [direction, nextStyle]);

  // =========================== Motion ===========================
  var onAppearStart = function onAppearStart() {
    return {
      transform: "translateX(var(--thumb-start-left))",
      width: "var(--thumb-start-width)"
    };
  };
  var onAppearActive = function onAppearActive() {
    return {
      transform: "translateX(var(--thumb-active-left))",
      width: "var(--thumb-active-width)"
    };
  };
  var onAppearEnd = function onAppearEnd() {
    setPrevStyle(null);
    setNextStyle(null);
    onMotionEnd();
  };

  // =========================== Render ===========================
  // No need motion when nothing exist in queue
  if (!prevStyle || !nextStyle) {
    return null;
  }
  return /*#__PURE__*/react.createElement(es/* default */.Ay, {
    visible: true,
    motionName: motionName,
    motionAppear: true,
    onAppearStart: onAppearStart,
    onAppearActive: onAppearActive,
    onAppearEnd: onAppearEnd
  }, function (_ref, ref) {
    var motionClassName = _ref.className,
      motionStyle = _ref.style;
    var mergedStyle = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, motionStyle), {}, {
      '--thumb-start-left': thumbStart,
      '--thumb-start-width': toPX(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.width),
      '--thumb-active-left': thumbActive,
      '--thumb-active-width': toPX(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.width)
    });

    // It's little ugly which should be refactor when @umi/test update to latest jsdom
    var motionProps = {
      ref: (0,es_ref/* composeRef */.K4)(thumbRef, ref),
      style: mergedStyle,
      className: classnames_default()("".concat(prefixCls, "-thumb"), motionClassName)
    };
    if (false) {}
    return /*#__PURE__*/react.createElement("div", motionProps);
  });
}
;// ./node_modules/rc-segmented/es/index.js






var _excluded = ["prefixCls", "direction", "options", "disabled", "defaultValue", "value", "onChange", "className", "motionName"];






function getValidTitle(option) {
  if (typeof option.title !== 'undefined') {
    return option.title;
  }

  // read `label` when title is `undefined`
  if ((0,esm_typeof/* default */.A)(option.label) !== 'object') {
    var _option$label;
    return (_option$label = option.label) === null || _option$label === void 0 ? void 0 : _option$label.toString();
  }
}
function normalizeOptions(options) {
  return options.map(function (option) {
    if ((0,esm_typeof/* default */.A)(option) === 'object' && option !== null) {
      var validTitle = getValidTitle(option);
      return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, option), {}, {
        title: validTitle
      });
    }
    return {
      label: option === null || option === void 0 ? void 0 : option.toString(),
      title: option === null || option === void 0 ? void 0 : option.toString(),
      value: option
    };
  });
}
var InternalSegmentedOption = function InternalSegmentedOption(_ref) {
  var prefixCls = _ref.prefixCls,
    className = _ref.className,
    disabled = _ref.disabled,
    checked = _ref.checked,
    label = _ref.label,
    title = _ref.title,
    value = _ref.value,
    onChange = _ref.onChange;
  var handleChange = function handleChange(event) {
    if (disabled) {
      return;
    }
    onChange(event, value);
  };
  return /*#__PURE__*/react.createElement("label", {
    className: classnames_default()(className, (0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-item-disabled"), disabled))
  }, /*#__PURE__*/react.createElement("input", {
    className: "".concat(prefixCls, "-item-input"),
    type: "radio",
    disabled: disabled,
    checked: checked,
    onChange: handleChange
  }), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-item-label"),
    title: title
  }, label));
};
var Segmented = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _segmentedOptions$, _classNames2;
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-segmented' : _props$prefixCls,
    direction = props.direction,
    options = props.options,
    disabled = props.disabled,
    defaultValue = props.defaultValue,
    value = props.value,
    onChange = props.onChange,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$motionName = props.motionName,
    motionName = _props$motionName === void 0 ? 'thumb-motion' : _props$motionName,
    restProps = (0,objectWithoutProperties/* default */.A)(props, _excluded);
  var containerRef = react.useRef(null);
  var mergedRef = react.useMemo(function () {
    return (0,es_ref/* composeRef */.K4)(containerRef, ref);
  }, [containerRef, ref]);
  var segmentedOptions = react.useMemo(function () {
    return normalizeOptions(options);
  }, [options]);

  // Note: We should not auto switch value when value not exist in options
  // which may break single source of truth.
  var _useMergedState = (0,useMergedState/* default */.A)((_segmentedOptions$ = segmentedOptions[0]) === null || _segmentedOptions$ === void 0 ? void 0 : _segmentedOptions$.value, {
      value: value,
      defaultValue: defaultValue
    }),
    _useMergedState2 = (0,slicedToArray/* default */.A)(_useMergedState, 2),
    rawValue = _useMergedState2[0],
    setRawValue = _useMergedState2[1];

  // ======================= Change ========================
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    thumbShow = _React$useState2[0],
    setThumbShow = _React$useState2[1];
  var handleChange = function handleChange(event, val) {
    if (disabled) {
      return;
    }
    setRawValue(val);
    onChange === null || onChange === void 0 ? void 0 : onChange(val);
  };
  var divProps = (0,omit/* default */.A)(restProps, ['children']);
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({}, divProps, {
    className: classnames_default()(prefixCls, (_classNames2 = {}, (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.A)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _classNames2), className),
    ref: mergedRef
  }), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-group")
  }, /*#__PURE__*/react.createElement(MotionThumb, {
    prefixCls: prefixCls,
    value: rawValue,
    containerRef: containerRef,
    motionName: "".concat(prefixCls, "-").concat(motionName),
    direction: direction,
    getValueIndex: function getValueIndex(val) {
      return segmentedOptions.findIndex(function (n) {
        return n.value === val;
      });
    },
    onMotionStart: function onMotionStart() {
      setThumbShow(true);
    },
    onMotionEnd: function onMotionEnd() {
      setThumbShow(false);
    }
  }), segmentedOptions.map(function (segmentedOption) {
    return /*#__PURE__*/react.createElement(InternalSegmentedOption, (0,esm_extends/* default */.A)({
      key: segmentedOption.value,
      prefixCls: prefixCls,
      className: classnames_default()(segmentedOption.className, "".concat(prefixCls, "-item"), (0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-item-selected"), segmentedOption.value === rawValue && !thumbShow)),
      checked: segmentedOption.value === rawValue,
      onChange: handleChange
    }, segmentedOption, {
      disabled: !!disabled || !!segmentedOption.disabled
    }));
  })));
});
Segmented.displayName = 'Segmented';
Segmented.defaultProps = {
  options: []
};
/* harmony default export */ const rc_segmented_es = (Segmented);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(5741);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(87126);
;// ./node_modules/antd/es/segmented/index.js



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





function isSegmentedLabeledOptionWithIcon(option) {
  return (0,esm_typeof/* default */.A)(option) === 'object' && !!(option === null || option === void 0 ? void 0 : option.icon);
}
var segmented_Segmented = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    block = props.block,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    _props$size = props.size,
    customSize = _props$size === void 0 ? 'middle' : _props$size,
    restProps = __rest(props, ["prefixCls", "className", "block", "options", "size"]);
  var _React$useContext = react.useContext(context/* ConfigContext */.QO),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('segmented', customizePrefixCls);
  // ===================== Size =====================
  var size = react.useContext(SizeContext/* default */.A);
  var mergedSize = customSize || size;
  // syntactic sugar to support `icon` for Segmented Item
  var extendedOptions = react.useMemo(function () {
    return options.map(function (option) {
      if (isSegmentedLabeledOptionWithIcon(option)) {
        var icon = option.icon,
          label = option.label,
          restOption = __rest(option, ["icon", "label"]);
        return (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, restOption), {
          label: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
            className: "".concat(prefixCls, "-item-icon")
          }, icon), label && /*#__PURE__*/react.createElement("span", null, label))
        });
      }
      return option;
    });
  }, [options, prefixCls]);
  return /*#__PURE__*/react.createElement(rc_segmented_es, (0,esm_extends/* default */.A)({}, restProps, {
    className: classnames_default()(className, (_classNames = {}, (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-block"), block), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-sm"), mergedSize === 'small'), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-lg"), mergedSize === 'large'), _classNames)),
    options: extendedOptions,
    ref: ref,
    prefixCls: prefixCls,
    direction: direction
  }));
});
if (false) {}
/* harmony default export */ const segmented = (segmented_Segmented);

/***/ }),

/***/ 82369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"projects":"styles_projects__z9Zfo","project_item":"styles_project_item__GJPNS","project_item_header":"styles_project_item_header__m+X6J","project_item_header_left":"styles_project_item_header_left__ICs5g","project_item_header_actions":"styles_project_item_header_actions__xp5ac","project_item_header_actions_status":"styles_project_item_header_actions_status__SEBNS","project_item_header_actions_more":"styles_project_item_header_actions_more__dteLT","project_item_body":"styles_project_item_body__H3frM","project_item_header_id":"styles_project_item_header_id__mne7U","project_item_header_priority":"styles_project_item_header_priority__LY6jN","project_item_body_title":"styles_project_item_body_title__lgNuR","project_item_footer":"styles_project_item_footer__EvGoD","project_item_footer_left":"styles_project_item_footer_left__eouKZ","project_item_footer_members":"styles_project_item_footer_members__xvdDV","project_item_footer_members_popover":"styles_project_item_footer_members_popover__Qw4ax","project_item_footer_members_popover_item":"styles_project_item_footer_members_popover_item__cJFm1","project_item_footer_members_popover_item_title":"styles_project_item_footer_members_popover_item_title__6l2Iy","project_item_footer_date":"styles_project_item_footer_date__TJSsL","project_item_footer_date_separator":"styles_project_item_footer_date_separator__GhL33","project_item_footer_counts":"styles_project_item_footer_counts__ZjPdK","project_item_footer_counts_files":"styles_project_item_footer_counts_files__vM5fj","project_item_footer_counts_comments":"styles_project_item_footer_counts_comments__Bf1J0"});

/***/ })

}]);