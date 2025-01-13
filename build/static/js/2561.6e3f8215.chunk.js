"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[2561],{

/***/ 40695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Overview)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(42074);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Icons/index.tsx + 58 modules
var Icons = __webpack_require__(63668);
;// ./src/Components/Organisms/Dashboard/Overview/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"dashboardBody":"styles_dashboardBody__v5dCv","overview":"styles_overview__Uub8N","card":"styles_card__kBcc5","overview_cards":"styles_overview_cards__Y8cJd","overview_main":"styles_overview_main__c7EGh","overview_main_full":"styles_overview_main_full__FKMPx","cards":"styles_cards__wZVT0","card_icon":"styles_card_icon__jjy3e","card_content":"styles_card_content__ARTfy"});
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./src/Components/Organisms/NotificationModal/index.tsx + 1 modules
var NotificationModal = __webpack_require__(69273);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/Overview/Cards/with-icon.tsx
const CardWithIcon=_ref=>{let{title,subtitle,description,icon,lightSubtitle}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.card,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.card_content,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"xxl",weight:"bold",children:"".concat(title)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:lightSubtitle?"dark-sub":"dark-main",type:"h5",weight:"semi",className:"mt-4",children:subtitle}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"font-size-xs color-dark-sub mb-0",children:description})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.card_icon,children:icon})]});};/* harmony default export */ const with_icon = (CardWithIcon);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 22 modules
var tabs = __webpack_require__(92555);
// EXTERNAL MODULE: ./node_modules/react-sticky-box/dist/index.js
var react_sticky_box_dist = __webpack_require__(76266);
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/Modules/Task/index.ts
var Task = __webpack_require__(12671);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 11 modules
var skeleton = __webpack_require__(46005);
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 3 modules
var avatar = __webpack_require__(75871);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js
var tooltip = __webpack_require__(81541);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__(79378);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
;// ./src/Components/Organisms/Dashboard/Overview/Cards/Tasks/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tasks_styles_module = ({"tabBar_header":"styles_tabBar_header__i1bxs","taskOverview":"styles_taskOverview__OmOtE","tasks":"styles_tasks__W8CLh","kanbanItem":"styles_kanbanItem__GJ+09","kanbanItemBottom":"styles_kanbanItemBottom__DsYg2","priorityPill":"styles_priorityPill__Y7HdA","kanbanItemBottomBottom":"styles_kanbanItemBottomBottom__ZLyOs","taskEndOn":"styles_taskEndOn__W7Pif"});
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/TaskBoard/TaskDetailsModal/index.tsx + 2 modules
var TaskDetailsModal = __webpack_require__(28458);
;// ./src/Components/Organisms/Dashboard/Overview/Cards/Tasks/card.tsx
const TaskCard=_ref=>{let{data,loading,onRefresh}=_ref;const[detailModal,setDetailModal]=(0,react.useState)({open:false,id:0});return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Tasks_styles_module.tasks,children:[loading&&/*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.A,{active:true,paragraph:{rows:5}}),!loading&&(data===null||data===void 0?void 0:data.length)===0&&/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomEmpty */.ZX,{description:"No tasks found",imageStyle:{height:200}}),!loading&&(data===null||data===void 0?void 0:data.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Tasks_styles_module.kanbanItem,onClick:()=>setDetailModal({open:true,id:item===null||item===void 0?void 0:item.id}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"mb-0",children:item===null||item===void 0?void 0:item.title}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Tasks_styles_module.kanbanItemBottom,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',alignItems:'flex-end',gap:4},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Tasks_styles_module.priorityPill,style:{backgroundColor:commonEnums/* taskPriority */.sh[item.priority].color},children:commonEnums/* taskPriority */.sh[item.priority].title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:Tasks_styles_module.taskEndOn,children:(0,dateHandler/* convertDate */.ic)((item===null||item===void 0?void 0:item.taskEndOn)||"","dd MM,yy")})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Tasks_styles_module.kanbanItemBottomBottom,children:/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default.Group */.A.Group,{children:item.TaskMembers.map(member=>/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:"".concat(member.User.firstName," ").concat(member.User.lastName),children:/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:25,style:{border:'1px solid var(--color-light-200)'},src:constants/* RESOURCE_BASE_URL */.to+member.User.profile,icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{})})},member.User.uuid))})})]})]},"".concat(item===null||item===void 0?void 0:item.id,"-").concat(index)))),detailModal.open&&detailModal.id!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(TaskDetailsModal/* TaskDetailsModal */.H,{openModal:detailModal.open,onCancel:()=>setDetailModal({open:false,id:0}),id:detailModal.id,onUpdate:onRefresh})]});};/* harmony default export */ const card = (TaskCard);
;// ./src/Components/Organisms/Dashboard/Overview/Cards/Tasks/index.tsx
const TaskOverview=()=>{const[tab,setTab]=(0,react.useState)("assigned_to_me");const module=(0,react.useMemo)(()=>new Task/* TaskModule */._(),[]);const{data,onRefresh,loading}=(0,hooks/* useFetchData */.Gs)({method:module.getAllRecords,initialQuery:{type:"myTask"}});const onRefreshTasks=(0,react.useMemo)(()=>{return()=>onRefresh({type:tab==="assigned_by_me"?"assignedTask":"myTask"});},[tab,onRefresh]);const renderTabBar=(props,DefaultTabBar)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(react_sticky_box_dist/* default */.A,{offsetTop:0,offsetBottom:20,style:{zIndex:1},className:Tasks_styles_module.tabBar_header,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{weight:"bold",color:"dark-main",size:"normal",className:"mr-8",children:"Tasks"}),/*#__PURE__*/(0,jsx_runtime.jsx)(DefaultTabBar,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},props),{},{className:"mb-0"}))]});return/*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* default */.A,{className:Tasks_styles_module.taskOverview,activeKey:tab,onChange:key=>{const _key=key;setTab(key);onRefresh({type:_key==="assigned_by_me"?"assignedTask":"myTask"});},renderTabBar:renderTabBar,items:[{label:"Assigned To Me",key:"assigned_to_me",children:/*#__PURE__*/(0,jsx_runtime.jsx)(card,{data:data,loading:loading,onRefresh:onRefreshTasks})},{label:"Assigned By Me",key:"assigned_by_me",children:/*#__PURE__*/(0,jsx_runtime.jsx)(card,{data:data,loading:loading,onRefresh:onRefreshTasks})}],style:{paddingBottom:"0.2rem"}});};/* harmony default export */ const Tasks = (TaskOverview);
;// ./src/Components/Organisms/Dashboard/Overview/Cards/index.ts

// EXTERNAL MODULE: ./node_modules/@ant-design/pro-card/es/ProCard.js + 15 modules
var ProCard = __webpack_require__(91692);
;// ./src/Components/Organisms/Dashboard/Overview/Cards/Projects/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Projects_styles_module = ({"active_projects__item":"styles_active_projects__item__QFzeW","delayed_projects__item":"styles_delayed_projects__item__1OPX9","project_trend_by_location__item":"styles_project_trend_by_location__item__S64BH","active_projects__item__title":"styles_active_projects__item__title__U7XS5","active_projects__item__date":"styles_active_projects__item__date__Jso+G","delayed_projects__item__title":"styles_delayed_projects__item__title__IlT5z","delayed_projects__item__date":"styles_delayed_projects__item__date__dIXEm"});
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(59051);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 1 modules
var tag = __webpack_require__(12916);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LinkOutlined.js + 1 modules
var LinkOutlined = __webpack_require__(26142);
;// ./src/Components/Organisms/Dashboard/Overview/Cards/Projects/projects-card.tsx
const ProjectsCard=_ref=>{let{data,title,showStatus,link}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{width:'calc(50% - 1rem)',display:'flex'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(ProCard/* default */.A,{title:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',alignItems:'center',gap:'0.5rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{weight:"bold",color:"dark-main",size:"sm",children:title}),link&&/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:link,children:/*#__PURE__*/(0,jsx_runtime.jsx)(LinkOutlined/* default */.A,{})})]}),extra:"Deadline",style:{width:"100%"},children:data!==null&&data!==void 0&&data.length?data.map((project,index)=>{var _project$ProjectState;return/*#__PURE__*/(0,jsx_runtime.jsxs)("a",{href:"/projects/".concat(project.slug,"?id=").concat(project.id),className:Projects_styles_module.active_projects__item,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Projects_styles_module.active_projects__item__title,children:[project.referenceNumber," | ",project.title," \xA0",/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:((_project$ProjectState=project.ProjectState)===null||_project$ProjectState===void 0?void 0:_project$ProjectState.title)||'No State',children:showStatus&&project.ProjectState?/*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.A,{style:{fontSize:'var(--font-size-xxs)',background:project.ProjectState.bgColor,color:project.ProjectState.textColor,border:'none',borderRadius:'1rem'},children:project.ProjectState.title.slice(0,15)}):null})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Projects_styles_module.active_projects__item__date,children:moment_default()(project.endDate).fromNow()})]},"active_projects__item-".concat(index));}):/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomEmpty */.ZX,{description:"No ".concat(title," Found")})})});};/* harmony default export */ const projects_card = (ProjectsCard);
;// ./src/Components/Organisms/Dashboard/Overview/Cards/Projects/delayed.tsx
const DelayedProjects=_ref=>{let{data}=_ref;// const module = useMemo(() => new ProjectModule(), []);
// const { data } = useFetchData<ProjectTypes[]>({
//   method: module.getAllRecords,
//   initialQuery: {
//     delayed: true
//   }
// });
return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{width:'calc(50% - 1rem)',display:'flex'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(ProCard/* default */.A,{title:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{weight:"bold",color:"dark-main",size:"normal",children:"Delayed Projects"}),extra:"Delayed By",style:{width:"100%"},children:data!==null&&data!==void 0&&data.length?data===null||data===void 0?void 0:data.map((project,index)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("a",{href:"/projects/".concat(project.slug,"?id=").concat(project.id),target:"_blank",className:Projects_styles_module.delayed_projects__item,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Projects_styles_module.delayed_projects__item__title,children:project.title}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Projects_styles_module.delayed_projects__item__date,children:[moment_default()(new Date()).diff(project.endDate,'days')," days"]})]},"delayed_projects__item-".concat(index))):/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomEmpty */.ZX,{description:"No projects found"})})});};/* harmony default export */ const delayed = (DelayedProjects);
;// ./src/Components/Organisms/Dashboard/Overview/Cards/Projects/index.tsx

// EXTERNAL MODULE: ./src/Modules/DashboardElement/index.ts
var DashboardElement = __webpack_require__(66722);
// EXTERNAL MODULE: ./src/Components/Organisms/Skeletons/index.tsx
var Skeletons = __webpack_require__(70619);
;// ./src/Components/Organisms/Dashboard/Overview/index.tsx
const DashboardOverview=()=>{const[dashboardElements,setDashboardElements]=(0,react.useState)([]);const module=(0,react.useMemo)(()=>new DashboardElement/* DashboardElementModule */.F(),[]);const{data,loading}=(0,hooks/* useFetchData */.Gs)({method:module.getDashboardContent});const[elements,setElements]=(0,react.useState)([]);(0,react.useEffect)(()=>{if(!loading&&data!==null&&data!==void 0&&data.content){var _data$content$pending,_data$content,_data$content$pending2,_data$content$pending3,_data$content2,_data$content2$active,_data$content3,_data$content3$delaye,_data$content4,_data$content4$close_,_data$content5,_data$content5$on_hol,_data$content6,_data$content6$ready_,_data$content7,_data$content7$new_pr,_data$content8,_data$content8$approv,_data$content9,_data$content9$active,_data$content10,_data$content10$close,_data$content11,_data$content11$activ,_data$content12,_data$content12$pendi,_data$content13,_data$content13$activ,_data$content14,_data$content14$activ,_data$content15,_data$content15$activ,_data$content16,_data$content16$activ,_data$content17,_data$content17$activ,_data$content18,_data$content18$permi,_data$content19,_data$content19$gover;setElements([{slug:"pending_project_as_project_incharge",element:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.N_,{to:"/projects",style:{width:'calc(25% - 1rem)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(with_icon,{title:(data===null||data===void 0?void 0:(_data$content$pending=data.content.pending_project_as_project_incharge)===null||_data$content$pending===void 0?void 0:_data$content$pending.data)||0,subtitle:"Pending Project InCharge",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* ClipboardTagIcon */.u1,{width:50,height:50})})})},{slug:"pending_project_as_support_engineer",element:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.N_,{to:"/projects",style:{width:'calc(25% - 1rem)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(with_icon,{title:(data===null||data===void 0?void 0:(_data$content=data.content)===null||_data$content===void 0?void 0:(_data$content$pending2=_data$content.pending_project_as_support_engineer)===null||_data$content$pending2===void 0?void 0:_data$content$pending2.data)||0,subtitle:"Pending Project As Support Engineer",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* ClipboardTagIcon */.u1,{width:50,height:50})})})},{slug:"pending_project_as_support_engineer",element:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.N_,{to:"/tasks",style:{width:'calc(25% - 1rem)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(with_icon,{title:(data===null||data===void 0?void 0:(_data$content$pending3=data.content.pending_project_as_support_engineer)===null||_data$content$pending3===void 0?void 0:_data$content$pending3.data)||0,subtitle:"Pending Task Assigned To Me",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* ClipboardTagIcon */.u1,{width:50,height:50})})})},{slug:"notification",element:/*#__PURE__*/(0,jsx_runtime.jsx)(NotificationModal/* default */.A,{dropdown:false,fetch:true})},{slug:"all_tasks",element:/*#__PURE__*/(0,jsx_runtime.jsx)(Tasks,{})},{slug:"active_projects",element:/*#__PURE__*/(0,jsx_runtime.jsx)(projects_card,{link:"/projects?all=true",showStatus:true,title:"Active Projects",data:data===null||data===void 0?void 0:(_data$content2=data.content)===null||_data$content2===void 0?void 0:(_data$content2$active=_data$content2.active_projects)===null||_data$content2$active===void 0?void 0:_data$content2$active.data})},{slug:"delayed_projects",element:/*#__PURE__*/(0,jsx_runtime.jsx)(delayed,{data:data===null||data===void 0?void 0:(_data$content3=data.content)===null||_data$content3===void 0?void 0:(_data$content3$delaye=_data$content3.delayed_projects)===null||_data$content3$delaye===void 0?void 0:_data$content3$delaye.data})},{slug:"close_out_projects",element:/*#__PURE__*/(0,jsx_runtime.jsx)(projects_card,{link:"/projects?isClosed=true",title:"Closed Out Projects",data:data===null||data===void 0?void 0:(_data$content4=data.content)===null||_data$content4===void 0?void 0:(_data$content4$close_=_data$content4.close_out_projects)===null||_data$content4$close_===void 0?void 0:_data$content4$close_.data})},{slug:"Active Projects",element:/*#__PURE__*/(0,jsx_runtime.jsx)(projects_card,{link:"/projects?onHold=true",showStatus:true,title:"Active Projects",data:data===null||data===void 0?void 0:(_data$content5=data.content)===null||_data$content5===void 0?void 0:(_data$content5$on_hol=_data$content5.on_hold_projects)===null||_data$content5$on_hol===void 0?void 0:_data$content5$on_hol.data})},{slug:"ready_for_submission",element:/*#__PURE__*/(0,jsx_runtime.jsx)(projects_card,{title:"Ready For Submission Projects",data:data===null||data===void 0?void 0:(_data$content6=data.content)===null||_data$content6===void 0?void 0:(_data$content6$ready_=_data$content6.ready_for_submission)===null||_data$content6$ready_===void 0?void 0:_data$content6$ready_.data})},{slug:"new_project",element:/*#__PURE__*/(0,jsx_runtime.jsx)(projects_card,{link:"/projects",title:"New Projects",data:data===null||data===void 0?void 0:(_data$content7=data.content)===null||_data$content7===void 0?void 0:(_data$content7$new_pr=_data$content7.new_project)===null||_data$content7$new_pr===void 0?void 0:_data$content7$new_pr.data})},{slug:"approved_projects",element:/*#__PURE__*/(0,jsx_runtime.jsx)(projects_card,{link:"/projects?isClosed=false",title:"Approved Projects",data:data===null||data===void 0?void 0:(_data$content8=data.content)===null||_data$content8===void 0?void 0:(_data$content8$approv=_data$content8.approved_projects)===null||_data$content8$approv===void 0?void 0:_data$content8$approv.data})},{slug:"active_employees",element:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.N_,{to:"/employees",style:{width:'calc(25% - 1rem)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(with_icon,{title:(data===null||data===void 0?void 0:(_data$content9=data.content)===null||_data$content9===void 0?void 0:(_data$content9$active=_data$content9.active_employees)===null||_data$content9$active===void 0?void 0:_data$content9$active.data)||0,subtitle:"Active Employees",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* ClipboardTagIcon */.u1,{width:50,height:50})})})},{slug:"closed_projects",element:/*#__PURE__*/(0,jsx_runtime.jsx)(projects_card,{title:"Closed Projects",data:data===null||data===void 0?void 0:(_data$content10=data.content)===null||_data$content10===void 0?void 0:(_data$content10$close=_data$content10.closed_projects)===null||_data$content10$close===void 0?void 0:_data$content10$close.data})},{slug:"active_quotations",element:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.N_,{to:"/quotations",style:{width:'calc(25% - 1rem)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(with_icon,{title:(data===null||data===void 0?void 0:(_data$content11=data.content)===null||_data$content11===void 0?void 0:(_data$content11$activ=_data$content11.active_quotations)===null||_data$content11$activ===void 0?void 0:_data$content11$activ.data)||0,subtitle:"Active Quotations",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* ClipboardTagIcon */.u1,{width:50,height:50})})})},{slug:"pending_invoices",element:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.N_,{to:"/invoice",style:{width:'calc(25% - 1rem)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(with_icon,{title:(data===null||data===void 0?void 0:(_data$content12=data.content)===null||_data$content12===void 0?void 0:(_data$content12$pendi=_data$content12.pending_invoices)===null||_data$content12$pendi===void 0?void 0:_data$content12$pendi.data)||0,subtitle:"Pending Invoices",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* ClipboardTagIcon */.u1,{width:50,height:50})})})},{slug:"active_enquiries",element:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.N_,{to:"/enquiries",style:{width:'calc(25% - 1rem)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(with_icon,{title:(data===null||data===void 0?void 0:(_data$content13=data.content)===null||_data$content13===void 0?void 0:(_data$content13$activ=_data$content13.active_enquiries)===null||_data$content13$activ===void 0?void 0:_data$content13$activ.data)||0,subtitle:"Active Enquiries",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* ClipboardTagIcon */.u1,{width:50,height:50})})})},{slug:"active_leads",element:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.N_,{to:"/leads",style:{width:'calc(25% - 1rem)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(with_icon,{title:(data===null||data===void 0?void 0:(_data$content14=data.content)===null||_data$content14===void 0?void 0:(_data$content14$activ=_data$content14.active_leads)===null||_data$content14$activ===void 0?void 0:_data$content14$activ.data)||0,subtitle:"Active Leads",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* ClipboardTagIcon */.u1,{width:50,height:50})})})},{slug:"active_reimbursement",element:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.N_,{to:"/employee-requests/reimbursement-requests",style:{width:'calc(25% - 1rem)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(with_icon,{title:(data===null||data===void 0?void 0:(_data$content15=data.content)===null||_data$content15===void 0?void 0:(_data$content15$activ=_data$content15.active_reimbursement)===null||_data$content15$activ===void 0?void 0:_data$content15$activ.data)||0,subtitle:"Active Reimbursements",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* ClipboardTagIcon */.u1,{width:50,height:50})})})},{slug:"active_leave_request",element:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.N_,{to:"/employee-requests/leave-requests",style:{width:'calc(25% - 1rem)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(with_icon,{title:(data===null||data===void 0?void 0:(_data$content16=data.content)===null||_data$content16===void 0?void 0:(_data$content16$activ=_data$content16.active_leave_request)===null||_data$content16$activ===void 0?void 0:_data$content16$activ.data)||0,subtitle:"Active Leave Requests",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* ClipboardTagIcon */.u1,{width:50,height:50})})})},{slug:"active_cash_advance_request",element:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.N_,{to:"/employee-requests/cash-advance-requests",style:{width:'calc(25% - 1rem)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(with_icon,{title:(data===null||data===void 0?void 0:(_data$content17=data.content)===null||_data$content17===void 0?void 0:(_data$content17$activ=_data$content17.active_cash_advance_request)===null||_data$content17$activ===void 0?void 0:_data$content17$activ.data)||0,subtitle:"Active Cash Advance Requests",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* ClipboardTagIcon */.u1,{width:50,height:50})})})},{slug:"permits_expiring",element:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.N_,{to:"/permits",style:{width:'calc(25% - 1rem)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(with_icon,{title:(data===null||data===void 0?void 0:(_data$content18=data.content)===null||_data$content18===void 0?void 0:(_data$content18$permi=_data$content18.permits_expiring)===null||_data$content18$permi===void 0?void 0:_data$content18$permi.data)||0,subtitle:"Expiring Permits",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* ClipboardTagIcon */.u1,{width:50,height:50})})})},{slug:"government_fees_to_collect",element:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.N_,{to:"/transactions",style:{width:'calc(25% - 1rem)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(with_icon,{title:(data===null||data===void 0?void 0:(_data$content19=data.content)===null||_data$content19===void 0?void 0:(_data$content19$gover=_data$content19.government_fees_to_collect)===null||_data$content19$gover===void 0?void 0:_data$content19$gover.data)||0,subtitle:"Government Fees To Collect",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* ClipboardTagIcon */.u1,{width:50,height:50})})})}]);}},[data]);(0,react.useEffect)(()=>{if(!(dashboardElements!==null&&dashboardElements!==void 0&&dashboardElements.length)&&elements.length){var _data$elements;const _temp=(data===null||data===void 0?void 0:(_data$elements=data.elements)===null||_data$elements===void 0?void 0:_data$elements.map(item=>{var _elements$find;return{element:(_elements$find=elements.find(element=>element.slug===item))===null||_elements$find===void 0?void 0:_elements$find.element};}))||[];setDashboardElements(_temp);}},[elements,dashboardElements,data]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{className:styles_module.dashboardBody,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"lg",weight:"semi",className:"ml-4 mb-4",children:"Overview"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.overview,children:loading?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{background:'#fafafa',padding:10},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:4,span:6})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{background:'#fafafa',padding:10,marginTop:20},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:2,span:12,paragraph:{rows:8}})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{background:'#fafafa',padding:10,marginTop:20},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:4,span:6})})]}):/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.cards,children:dashboardElements.map((element,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:element.element},"dashboard-element-".concat(index)))})})]});};/* harmony default export */ const Overview = (DashboardOverview);

/***/ }),

/***/ 66722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ DashboardElementModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class DashboardElementModule{constructor(){this.endPoint="dashboard-elements";/**Get all Biometric records
	 * @param query - query params
	 */this.getAllRecords=query=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:query});};this.getDashboardContent=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint+"/get-dashboard-content");};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint,data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id,data);};}}

/***/ }),

/***/ 78887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_CopyOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55712);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CopyOutlined = function CopyOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_CopyOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CopyOutlined));

/***/ }),

/***/ 31023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_FolderTwoTone)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/@ant-design/icons-svg/es/asn/FolderTwoTone.js
// This icon file is generated automatically.
var FolderTwoTone = {
  "icon": function render(primaryColor, secondaryColor) {
    return {
      "tag": "svg",
      "attrs": {
        "viewBox": "64 64 896 896",
        "focusable": "false"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "d": "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z",
          "fill": primaryColor
        }
      }, {
        "tag": "path",
        "attrs": {
          "d": "M372.5 256H184v512h656V370.4H492.1z",
          "fill": secondaryColor
        }
      }]
    };
  },
  "name": "folder",
  "theme": "twotone"
};
/* harmony default export */ const asn_FolderTwoTone = (FolderTwoTone);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/FolderTwoTone.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FolderTwoTone_FolderTwoTone = function FolderTwoTone(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_FolderTwoTone
  }));
};
if (false) {}
/* harmony default export */ const icons_FolderTwoTone = (/*#__PURE__*/react.forwardRef(FolderTwoTone_FolderTwoTone));

/***/ }),

/***/ 78188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_PaperClipOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21053);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var PaperClipOutlined = function PaperClipOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_PaperClipOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PaperClipOutlined));

/***/ }),

/***/ 4228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_ShareAltOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/@ant-design/icons-svg/es/asn/ShareAltOutlined.js
// This icon file is generated automatically.
var ShareAltOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"
      }
    }]
  },
  "name": "share-alt",
  "theme": "outlined"
};
/* harmony default export */ const asn_ShareAltOutlined = (ShareAltOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/ShareAltOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var ShareAltOutlined_ShareAltOutlined = function ShareAltOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_ShareAltOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_ShareAltOutlined = (/*#__PURE__*/react.forwardRef(ShareAltOutlined_ShareAltOutlined));

/***/ }),

/***/ 53983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_WhatsAppOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
;// ./node_modules/@ant-design/icons-svg/es/asn/WhatsAppOutlined.js
// This icon file is generated automatically.
var WhatsAppOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "defs",
      "attrs": {},
      "children": [{
        "tag": "style",
        "attrs": {}
      }]
    }, {
      "tag": "path",
      "attrs": {
        "d": "M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-.4-13.7-.4-21.1-.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
      }
    }]
  },
  "name": "whats-app",
  "theme": "outlined"
};
/* harmony default export */ const asn_WhatsAppOutlined = (WhatsAppOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/WhatsAppOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var WhatsAppOutlined_WhatsAppOutlined = function WhatsAppOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_WhatsAppOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_WhatsAppOutlined = (/*#__PURE__*/react.forwardRef(WhatsAppOutlined_WhatsAppOutlined));

/***/ }),

/***/ 76266:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ src_default)
/* harmony export */ });
/* unused harmony export useStickyBox */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44414);
// src/index.tsx


var getScrollParent = node => {
  let parent = node;
  while (parent = parent.parentElement) {
    const overflowYVal = getComputedStyle(parent, null).getPropertyValue("overflow-y");
    if (parent === document.body) return window;
    if (overflowYVal === "auto" || overflowYVal === "scroll" || overflowYVal === "overlay") {
      return parent;
    }
  }
  return window;
};
var isOffsetElement = el => el.firstChild ? el.firstChild.offsetParent === el : true;
var offsetTill = (node, target) => {
  let current = node;
  let offset = 0;
  if (!isOffsetElement(target)) {
    offset += node.offsetTop - target.offsetTop;
    target = node.offsetParent;
    offset += -node.offsetTop;
  }
  do {
    offset += current.offsetTop;
    current = current.offsetParent;
  } while (current && current !== target);
  return offset;
};
var getParentNode = node => {
  let currentParent = node.parentElement;
  while (currentParent) {
    const style = getComputedStyle(currentParent, null);
    if (style.getPropertyValue("display") !== "contents") break;
    currentParent = currentParent.parentElement;
  }
  return currentParent || window;
};
var stickyProp = null;
if (typeof CSS !== "undefined" && CSS.supports) {
  if (CSS.supports("position", "sticky")) stickyProp = "sticky";else if (CSS.supports("position", "-webkit-sticky")) stickyProp = "-webkit-sticky";
}
var passiveArg = false;
try {
  const opts = Object.defineProperty({}, "passive", {
    // eslint-disable-next-line getter-return
    get() {
      passiveArg = {
        passive: true
      };
    }
  });
  const emptyHandler = () => {};
  window.addEventListener("testPassive", emptyHandler, opts);
  window.removeEventListener("testPassive", emptyHandler, opts);
} catch (e) {}
var getDimensions = opts => {
  const {
    el,
    onChange,
    unsubs,
    measure
  } = opts;
  if (el === window) {
    const getRect = () => ({
      top: 0,
      left: 0,
      height: window.innerHeight,
      width: window.innerWidth
    });
    const mResult = measure(getRect());
    const handler = () => {
      Object.assign(mResult, measure(getRect()));
      onChange();
    };
    window.addEventListener("resize", handler, passiveArg);
    unsubs.push(() => window.removeEventListener("resize", handler));
    return mResult;
  } else {
    const mResult = measure(el.getBoundingClientRect());
    const handler = () => {
      Object.assign(mResult, measure(el.getBoundingClientRect()));
      onChange();
    };
    const ro = new ResizeObserver(handler);
    ro.observe(el);
    unsubs.push(() => ro.disconnect());
    return mResult;
  }
};
var getVerticalPadding = node => {
  const computedParentStyle = getComputedStyle(node, null);
  const parentPaddingTop = parseInt(computedParentStyle.getPropertyValue("padding-top"), 10);
  const parentPaddingBottom = parseInt(computedParentStyle.getPropertyValue("padding-bottom"), 10);
  return {
    top: parentPaddingTop,
    bottom: parentPaddingBottom
  };
};
var setup = (node, unsubs, opts) => {
  const {
    bottom,
    offsetBottom,
    offsetTop
  } = opts;
  const scrollPane = getScrollParent(node);
  let isScheduled = false;
  const scheduleOnLayout = () => {
    if (!isScheduled) {
      requestAnimationFrame(() => {
        const nextMode = onLayout();
        if (nextMode !== mode) changeMode(nextMode);
        isScheduled = false;
      });
    }
    isScheduled = true;
  };
  let latestScrollY = scrollPane === window ? window.scrollY : scrollPane.scrollTop;
  const isBoxTooLow = scrollY => {
    const {
      offsetTop: scrollPaneOffset,
      height: viewPortHeight
    } = scrollPaneDims;
    const {
      naturalTop
    } = parentDims;
    const {
      height: nodeHeight
    } = nodeDims;
    if (scrollY + scrollPaneOffset + viewPortHeight >= naturalTop + nodeHeight + relativeOffset + offsetBottom) {
      return true;
    }
    return false;
  };
  const onLayout = () => {
    const {
      height: viewPortHeight
    } = scrollPaneDims;
    const {
      height: nodeHeight
    } = nodeDims;
    if (nodeHeight + offsetTop + offsetBottom <= viewPortHeight) {
      return 3 /* small */;
    } else {
      if (isBoxTooLow(latestScrollY)) {
        return 1 /* stickyBottom */;
      } else {
        return 2 /* relative */;
      }
    }
  };

  const scrollPaneIsOffsetEl = scrollPane !== window && isOffsetElement(scrollPane);
  const scrollPaneDims = getDimensions({
    el: scrollPane,
    onChange: scheduleOnLayout,
    unsubs,
    measure: _ref => {
      let {
        height,
        top
      } = _ref;
      return {
        height,
        offsetTop: scrollPaneIsOffsetEl ? top : 0
      };
    }
  });
  const parentNode = getParentNode(node);
  const parentPaddings = parentNode === window ? {
    top: 0,
    bottom: 0
  } : getVerticalPadding(parentNode);
  const parentDims = getDimensions({
    el: parentNode,
    onChange: scheduleOnLayout,
    unsubs,
    measure: _ref2 => {
      let {
        height
      } = _ref2;
      return {
        height: height - parentPaddings.top - parentPaddings.bottom,
        naturalTop: parentNode === window ? 0 : offsetTill(parentNode, scrollPane) + parentPaddings.top + scrollPaneDims.offsetTop
      };
    }
  });
  const nodeDims = getDimensions({
    el: node,
    onChange: scheduleOnLayout,
    unsubs,
    measure: _ref3 => {
      let {
        height
      } = _ref3;
      return {
        height
      };
    }
  });
  let relativeOffset = 0;
  let mode = onLayout();
  const changeMode = newMode => {
    const prevMode = mode;
    mode = newMode;
    if (prevMode === 2 /* relative */) relativeOffset = -1;
    if (newMode === 3 /* small */) {
      node.style.position = stickyProp;
      if (bottom) {
        node.style.bottom = "".concat(offsetBottom, "px");
      } else {
        node.style.top = "".concat(offsetTop, "px");
      }
      return;
    }
    const {
      height: viewPortHeight,
      offsetTop: scrollPaneOffset
    } = scrollPaneDims;
    const {
      height: parentHeight,
      naturalTop
    } = parentDims;
    const {
      height: nodeHeight
    } = nodeDims;
    if (newMode === 2 /* relative */) {
      node.style.position = "relative";
      relativeOffset = prevMode === 0 /* stickyTop */ ? Math.max(0, scrollPaneOffset + latestScrollY - naturalTop + offsetTop) : Math.max(0, scrollPaneOffset + latestScrollY + viewPortHeight - (naturalTop + nodeHeight + offsetBottom));
      if (bottom) {
        const nextBottom = Math.max(0, parentHeight - nodeHeight - relativeOffset);
        node.style.bottom = "".concat(nextBottom, "px");
      } else {
        node.style.top = "".concat(relativeOffset, "px");
      }
    } else {
      node.style.position = stickyProp;
      if (newMode === 1 /* stickyBottom */) {
        if (bottom) {
          node.style.bottom = "".concat(offsetBottom, "px");
        } else {
          node.style.top = "".concat(viewPortHeight - nodeHeight - offsetBottom, "px");
        }
      } else {
        if (bottom) {
          node.style.bottom = "".concat(viewPortHeight - nodeHeight - offsetBottom, "px");
        } else {
          node.style.top = "".concat(offsetTop, "px");
        }
      }
    }
  };
  changeMode(mode);
  const onScroll = scrollY => {
    if (scrollY === latestScrollY) return;
    const scrollDelta = scrollY - latestScrollY;
    latestScrollY = scrollY;
    if (mode === 3 /* small */) return;
    const {
      offsetTop: scrollPaneOffset,
      height: viewPortHeight
    } = scrollPaneDims;
    const {
      naturalTop,
      height: parentHeight
    } = parentDims;
    const {
      height: nodeHeight
    } = nodeDims;
    if (scrollDelta > 0) {
      if (mode === 0 /* stickyTop */) {
        if (scrollY + scrollPaneOffset + offsetTop > naturalTop) {
          const topOffset = Math.max(0, scrollPaneOffset + latestScrollY - naturalTop + offsetTop);
          if (scrollY + scrollPaneOffset + viewPortHeight <= naturalTop + nodeHeight + topOffset + offsetBottom) {
            changeMode(2 /* relative */);
          } else {
            changeMode(1 /* stickyBottom */);
          }
        }
      } else if (mode === 2 /* relative */) {
        if (isBoxTooLow(scrollY)) changeMode(1 /* stickyBottom */);
      }
    } else {
      if (mode === 1 /* stickyBottom */) {
        if (scrollPaneOffset + scrollY + viewPortHeight < naturalTop + parentHeight + offsetBottom) {
          const bottomOffset = Math.max(0, scrollPaneOffset + latestScrollY + viewPortHeight - (naturalTop + nodeHeight + offsetBottom));
          if (scrollPaneOffset + scrollY + offsetTop >= naturalTop + bottomOffset) {
            changeMode(2 /* relative */);
          } else {
            changeMode(0 /* stickyTop */);
          }
        }
      } else if (mode === 2 /* relative */) {
        if (scrollPaneOffset + scrollY + offsetTop < naturalTop + relativeOffset) {
          changeMode(0 /* stickyTop */);
        }
      }
    }
  };

  const handleScroll = scrollPane === window ? () => onScroll(window.scrollY) : () => onScroll(scrollPane.scrollTop);
  scrollPane.addEventListener("scroll", handleScroll, passiveArg);
  scrollPane.addEventListener("mousewheel", handleScroll, passiveArg);
  unsubs.push(() => scrollPane.removeEventListener("scroll", handleScroll), () => scrollPane.removeEventListener("mousewheel", handleScroll));
};
var useStickyBox = function () {
  let {
    offsetTop = 0,
    offsetBottom = 0,
    bottom = false
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const [node, setNode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!node || !stickyProp) return;
    const unsubs = [];
    setup(node, unsubs, {
      offsetBottom,
      offsetTop,
      bottom
    });
    return () => {
      unsubs.forEach(fn => fn());
    };
  }, [node, offsetBottom, offsetTop, bottom]);
  return setNode;
};
var StickyBox = props => {
  const {
    offsetTop,
    offsetBottom,
    bottom,
    children,
    className,
    style
  } = props;
  const ref = useStickyBox({
    offsetTop,
    offsetBottom,
    bottom
  });
  return /* @__PURE__ */(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className,
    style,
    ref,
    children
  });
};
var src_default = StickyBox;


/***/ })

}]);