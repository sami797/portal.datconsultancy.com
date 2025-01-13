"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[8757],{

/***/ 19197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard_TaskBoard)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(16330);
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 3 modules
var avatar = __webpack_require__(75871);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js
var tooltip = __webpack_require__(81541);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(48538);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 30 modules
var es_select = __webpack_require__(97554);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/SearchOutlined.js
var SearchOutlined = __webpack_require__(52786);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__(79378);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
;// ./node_modules/@ant-design/icons-svg/es/asn/DatabaseOutlined.js
// This icon file is generated automatically.
var DatabaseOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"
      }
    }]
  },
  "name": "database",
  "theme": "outlined"
};
/* harmony default export */ const asn_DatabaseOutlined = (DatabaseOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(61187);
;// ./node_modules/@ant-design/icons/es/icons/DatabaseOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var DatabaseOutlined_DatabaseOutlined = function DatabaseOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_DatabaseOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_DatabaseOutlined = (/*#__PURE__*/react.forwardRef(DatabaseOutlined_DatabaseOutlined));
;// ./node_modules/@ant-design/icons-svg/es/asn/TableOutlined.js
// This icon file is generated automatically.
var TableOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"
      }
    }]
  },
  "name": "table",
  "theme": "outlined"
};
/* harmony default export */ const asn_TableOutlined = (TableOutlined);
;// ./node_modules/@ant-design/icons/es/icons/TableOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var TableOutlined_TableOutlined = function TableOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_TableOutlined
  }));
};
if (false) {}
/* harmony default export */ const icons_TableOutlined = (/*#__PURE__*/react.forwardRef(TableOutlined_TableOutlined));
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
;// ./src/Components/Organisms/Dashboard/TaskBoard/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"onlyMyTask":"styles_onlyMyTask__VBK-X","sortBy":"styles_sortBy__xTLNi"});
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./src/Modules/Task/permissions.ts
var permissions = __webpack_require__(15659);
// EXTERNAL MODULE: ./src/Modules/Task/index.ts
var Task = __webpack_require__(12671);
// EXTERNAL MODULE: ./src/Components/Organisms/Dashboard/TaskBoard/TaskDetailsModal/index.tsx + 2 modules
var TaskDetailsModal = __webpack_require__(28458);
// EXTERNAL MODULE: ./src/Components/Organisms/Header/Task/modal.tsx
var modal = __webpack_require__(65757);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(42074);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Modules/Project/index.ts
var Project = __webpack_require__(50167);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 11 modules
var skeleton = __webpack_require__(46005);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/FileOutlined.js
var FileOutlined = __webpack_require__(56272);
;// ./src/Components/Organisms/Dashboard/TaskBoard/KanbanBoard/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const KanbanBoard_styles_module = ({"board":"styles_board__U+9lJ","column":"styles_column__Cz2KE","columnHead":"styles_columnHead__RJ--N","kanbanItem":"styles_kanbanItem__LY-WM","kanbanItemBottom":"styles_kanbanItemBottom__gwRaA","priorityPill":"styles_priorityPill__HZ7xA","kanbanItemBottomBottom":"styles_kanbanItemBottomBottom__19Sez","file":"styles_file__c34FS"});
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/core/DndProvider.js + 33 modules
var DndProvider = __webpack_require__(59767);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js + 9 modules
var useDrop = __webpack_require__(89135);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useDrag/useDrag.js + 9 modules
var useDrag = __webpack_require__(65325);
// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/index.js + 12 modules
var react_dnd_html5_backend_dist = __webpack_require__(72500);
// EXTERNAL MODULE: ./node_modules/immutability-helper/index.js
var immutability_helper = __webpack_require__(25984);
var immutability_helper_default = /*#__PURE__*/__webpack_require__.n(immutability_helper);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./node_modules/react-infinite-scroll-component/dist/index.es.js
var index_es = __webpack_require__(50416);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/TaskBoard/KanbanBoard/index.tsx
const KanbanBoard=props=>{const{searchParams,setSearchParams,tasks,setTasks,meta,setMeta,searchTerm,openDetailModal,setOpenDetailModal,setSelectedTask,module,isLoading}=props;const columns=[1,2,3];const moveTask=(0,react.useCallback)((dragIndex,hoverIndex)=>{const dragRow=tasks[dragIndex];setTasks(immutability_helper_default()(tasks,{$splice:[[dragIndex,1],[hoverIndex,0,dragRow]]}));module.updateOrder({order:dragIndex},dragRow.id).catch(err=>{if(err.message){message/* default */.Ay.error(err.message);}else{message/* default */.Ay.error('Something went wrong');}});},[tasks]);const changeTaskStatus=(0,react.useCallback)((index,status)=>{const task=tasks[index];if(task.status===status)return;let newTasks=[...tasks];newTasks[index].status=status;setTasks(newTasks);module.updateRecord({status:status},task.id).then(res=>{}).catch(err=>{if(err.message){message/* default */.Ay.error(err.message);}else{message/* default */.Ay.error('Something went wrong');}});},[tasks]);return/*#__PURE__*/(0,jsx_runtime.jsx)(DndProvider/* DndProvider */.Q,{backend:react_dnd_html5_backend_dist/* HTML5Backend */.t2,children:/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:KanbanBoard_styles_module.board,children:columns.map(column=>{var _meta,_meta2,_meta4,_meta5;return/*#__PURE__*/(0,jsx_runtime.jsx)(KanbanColumn,{status:column,changeTaskStatus:changeTaskStatus,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:KanbanBoard_styles_module.column,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:KanbanBoard_styles_module.columnHead,children:[commonEnums/* taskColumnLabels */.XD[column]," (",Number((_meta=meta[column-1])===null||_meta===void 0?void 0:_meta.total)?Number((_meta2=meta[column-1])===null||_meta2===void 0?void 0:_meta2.total):"",")"]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(index_es/* default */.A,{dataLength:tasks.filter(item=>item.status===column).length,next:()=>{var _meta3;module.getAllRecords({status:column,page:Number((_meta3=meta[column-1])===null||_meta3===void 0?void 0:_meta3.page)+1}).then(res=>{setTasks([...tasks,...res.data.data]);const _temp=meta;_temp[column-1]=res.data.meta;setMeta(_temp);});},hasMore:Number((_meta4=meta[column-1])===null||_meta4===void 0?void 0:_meta4.pageCount)>Number((_meta5=meta[column-1])===null||_meta5===void 0?void 0:_meta5.page),loader:/*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.A,{active:true}),height:'70vh',scrollThreshold:0.75,className:"infinite-scroll-wrap",children:isLoading?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{display:'flex',flexDirection:'column',gap:'0.5rem'},children:Array(3).fill(0).map((_,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.A.Input,{size:"large",active:true,style:{height:'3.5vw',width:'100%',borderRadius:'0.25rem'}},index))}):tasks===null||tasks===void 0?void 0:tasks.filter(item=>item.status===column).filter(task=>{var _task$title,_task$title$toLowerCa;return searchTerm?task===null||task===void 0?void 0:(_task$title=task.title)===null||_task$title===void 0?void 0:(_task$title$toLowerCa=_task$title.toLowerCase())===null||_task$title$toLowerCa===void 0?void 0:_task$title$toLowerCa.includes(searchTerm===null||searchTerm===void 0?void 0:searchTerm.toLowerCase()):true;}).map(item=>/*#__PURE__*/(0,jsx_runtime.jsx)(KanbanItem,{item:item,items:tasks,moveTask:moveTask,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:KanbanBoard_styles_module.kanbanItem,onClick:()=>{setSelectedTask(item.id);setOpenDetailModal(!openDetailModal);searchParams.set("taskId",item.id.toString());setSearchParams(searchParams);},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:item.title}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:KanbanBoard_styles_module.kanbanItemBottom,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',gap:6,alignItems:'flex-end'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:KanbanBoard_styles_module.priorityPill,style:{backgroundColor:commonEnums/* taskPriority */.sh[item.priority].color},children:commonEnums/* taskPriority */.sh[item.priority].title}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{color:'var(--color-light-300)',fontSize:'var(--font-size-xs)'},children:(0,dateHandler/* convertDate */.ic)((item===null||item===void 0?void 0:item.taskEndOn)||"","dd MM,yy")}),item._count.Resources>0&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:KanbanBoard_styles_module.file,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FileOutlined/* default */.A,{}),"\xA0",item._count.Resources]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:KanbanBoard_styles_module.kanbanItemBottomBottom,children:/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default.Group */.A.Group,{children:item.TaskMembers.map(member=>/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{overlayInnerStyle:{borderRadius:'0.25rem',fontSize:'var(--font-size-sm)'},placement:item.status===3?"left":"bottom",title:member.User.firstName+" "+member.User.lastName,children:/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:25,style:{border:'0.5px solid var(--color-light-200)'},src:constants/* RESOURCE_BASE_URL */.to+member.User.profile,icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{})})},member.User.uuid))})})]})]})},item.id))})})]})},column);})})});};/* harmony default export */ const TaskBoard_KanbanBoard = (KanbanBoard);const KanbanColumn=_ref=>{let{status,changeTaskStatus,children}=_ref;const ref=(0,react.useRef)(null);const[,drop]=(0,useDrop/* useDrop */.H)({accept:"card",drop(item){// console.log("item dropped index", item.index);
// console.log("status", status);
// change the status of the task here	
changeTaskStatus(item.index,status);}});drop(ref);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{flexGrow:1},ref:ref,children:[" ",children]});};const KanbanItem=_ref2=>{let{children,item,items,moveTask}=_ref2;const ref=(0,react.useRef)(null);const index=items.indexOf(item);const[,drop]=(0,useDrop/* useDrop */.H)({accept:"card",collect:monitor=>{const{index:dragIndex}=monitor.getItem()||{};if(dragIndex===index){return{};}return{isOver:monitor.isOver(),dropClassName:dragIndex<index?' drop-over-downward':' drop-over-upward'};},drop:item=>{moveTask(item.index,index);}});const[{isDragging},drag]=(0,useDrag/* useDrag */.i)({type:"card",item:{index},collect:monitor=>({isDragging:monitor.isDragging()})});const opacity=isDragging?0:1;drop(drag(ref));return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{ref:ref,style:{opacity},children:children});};
// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/index.js + 56 modules
var date_picker = __webpack_require__(4132);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./node_modules/antd/es/pagination/index.js + 12 modules
var pagination = __webpack_require__(24575);
;// ./src/Components/Organisms/Dashboard/TaskBoard/TaskTable/style.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const style_module = ({"priorityPill":"style_priorityPill__co4pN"});
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(59051);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// ./src/Components/Organisms/Dashboard/TaskBoard/TaskTable/index.tsx
const{RangePicker}=date_picker/* default */.A;const TaskTable=_ref=>{let{tasks,searchParams,setSearchParams,setOpenDetailModal,setSelectedTask,openDetailModal,tableMeta,setTableMeta,currentUserUUID,view}=_ref;const[milestoneDate,setMilestoneDate]=(0,react.useState)(null);const[selectedDateRange,setSelectedDateRange]=(0,react.useState)(null);// State for storing filtered tasks
const[filterTasks,setFilterTasks]=(0,react.useState)(tasks);// Update filterTasks when tasks or filters change
(0,react.useEffect)(()=>{handleFilterChange();},[tasks,milestoneDate,selectedDateRange]);const handleFilterChange=()=>{const updatedSearchParams=new URLSearchParams(searchParams.toString());if(milestoneDate){var _milestoneDate$,_milestoneDate$2;updatedSearchParams.set('milestoneStartDate',((_milestoneDate$=milestoneDate[0])===null||_milestoneDate$===void 0?void 0:_milestoneDate$.format('YYYY-MM-DD'))||'');updatedSearchParams.set('milestoneEndDate',((_milestoneDate$2=milestoneDate[1])===null||_milestoneDate$2===void 0?void 0:_milestoneDate$2.format('YYYY-MM-DD'))||'');}const newFilteredTasks=tasks.filter(task=>{const taskStartDate=moment_default()(task.taskStartFrom);const taskEndDate=moment_default()(task.taskEndOn);let isFiltered=true;if(milestoneDate){const[start,end]=milestoneDate;isFiltered=start&&end?taskStartDate.isBetween(start,end,null,'[]')||taskEndDate.isBetween(start,end,null,'[]'):true;}if(selectedDateRange){const[startDate,endDate]=selectedDateRange;isFiltered=isFiltered&&taskStartDate.isSameOrAfter(startDate)&&taskEndDate.isSameOrBefore(endDate);}return isFiltered;});setFilterTasks(newFilteredTasks);if(selectedDateRange){const[startDate,endDate]=selectedDateRange;if(startDate&&endDate){updatedSearchParams.set('milestoneStartDate',startDate.format('YYYY-MM-DD'));updatedSearchParams.set('milestoneEndDate',endDate.format('YYYY-MM-DD'));}}setSearchParams(updatedSearchParams);};const columns=[{title:'Title',dataIndex:'title',key:'title',render:(value,task)=>/*#__PURE__*/(0,jsx_runtime.jsx)("a",{onClick:()=>{setSelectedTask(task.id);setOpenDetailModal(!openDetailModal);searchParams.set("taskId",task.id.toString());setSearchParams(searchParams);},children:value})},{title:'Project Id',dataIndex:'id',key:'projectId',render:value=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:value})},{title:'Status',dataIndex:'status',key:'status',render:value=>commonEnums/* taskColumnLabels */.XD[value]},{title:'Priority',dataIndex:'priority',key:'priority',render:value=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:style_module.priorityPill,style:{backgroundColor:commonEnums/* taskPriority */.sh[value].color},children:commonEnums/* taskPriority */.sh[value].title})},{title:'Added Date',dataIndex:'addedDate',key:'addedDate',render:value=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:(0,dateHandler/* convertDate */.ic)(value||"","dd MM,yy")})},{title:'Start Date',dataIndex:'taskStartFrom',key:'taskStartFrom',render:value=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:moment_default()(value).format("MMM DD, YYYY hh:mm A")})},{title:'End Date',dataIndex:'taskEndOn',key:'taskEndOn',render:value=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:moment_default()(value).format("MMM DD, YYYY hh:mm A")})},{title:'Assigned To',dataIndex:'TaskMembers',key:'TaskMembers',render:value=>/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default.Group */.A.Group,{children:value.map(member=>/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{overlayInnerStyle:{borderRadius:'0.25rem',fontSize:'var(--font-size-sm)'},title:member.User.firstName+" "+member.User.lastName,children:/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:32,style:{border:'1px solid var(--color-light-200)'},src:constants/* RESOURCE_BASE_URL */.to+member.User.profile,icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{})})},member.User.uuid))})},{title:'Assigned By',dataIndex:'AddedBy',key:'AddedBy',render:value=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:32,style:{marginRight:'8px'},src:constants/* RESOURCE_BASE_URL */.to+value.profile,icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{})}),value.firstName," ",value.lastName]})}];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',flexDirection:'column',gap:'2rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{marginBottom:'1rem'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(RangePicker,{onChange:dates=>setSelectedDateRange(dates)})}),/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{dataSource:filterTasks,columns:columns,size:"small",rowKey:"id",pagination:false}),/*#__PURE__*/(0,jsx_runtime.jsx)(pagination/* default */.A,{style:{alignSelf:'flex-end'},current:tableMeta===null||tableMeta===void 0?void 0:tableMeta.page,defaultPageSize:tableMeta===null||tableMeta===void 0?void 0:tableMeta.perPage,total:tableMeta===null||tableMeta===void 0?void 0:tableMeta.total,onChange:(page,pageSize)=>setTableMeta((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},tableMeta),{},{page:page,perPage:pageSize}))})]});};/* harmony default export */ const TaskBoard_TaskTable = (TaskTable);
;// ./src/helpers/useLocalStorage.ts
const useLocalStorage=(key,defaultValue)=>{const[value,setValue]=(0,react.useState)(()=>{let currentValue;try{currentValue=JSON.parse(localStorage.getItem(key)||String(defaultValue));}catch(error){currentValue=defaultValue;}return currentValue;});(0,react.useEffect)(()=>{localStorage.setItem(key,JSON.stringify(value));},[value,key]);return[value,setValue];};/* harmony default export */ const helpers_useLocalStorage = (useLocalStorage);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
;// ./src/Components/Organisms/Dashboard/TaskBoard/index.tsx
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:false,text:"Tasks"}];const TaskBoard=()=>{var _projectOptions$data,_taskFilters$projectI;const[isLoading,setIsLoading]=(0,react.useState)(false);const[taskView,setTaskView]=helpers_useLocalStorage("taskView","board");const taskModule=new Task/* TaskModule */._();const projectModule=new Project/* ProjectModule */.K();// get the saved searches id from the url 
const[searchParams,setSearchParams]=(0,dist/* useSearchParams */.ok)();const[isFirstRender,setIsFirstRender]=(0,react.useState)(true);const[openDetailModal,setOpenDetailModal]=(0,react.useState)(false);const[openTaskModal,setOpenTaskModal]=(0,react.useState)(false);const[selectedTask,setSelectedTask]=(0,react.useState)();const[taskMembers,setTaskMembers]=(0,react.useState)([]);const[tasks,setTasks]=(0,react.useState)([]);const[meta,setMeta]=(0,react.useState)(Array(3).fill({}));const[tableMeta,setTableMeta]=(0,react.useState)();const[taskFilters,setTaskFilters]=(0,react.useState)({type:searchParams.get("type")||undefined,sortByField:'order',sortOrder:'asc',projectId:searchParams!==null&&searchParams!==void 0&&searchParams.get("projectId")?Number(searchParams===null||searchParams===void 0?void 0:searchParams.get("projectId")):undefined,userIds:searchParams!==null&&searchParams!==void 0&&searchParams.get("userIds")?JSON.parse((searchParams===null||searchParams===void 0?void 0:searchParams.get("userIds"))||""):[]});const[searchTerm,setSearchTerm]=(0,react.useState)(searchParams.get("searchTerm"));// Project Search Term
const[searchTermProject,setSearchTermProject]=(0,react.useState)("");// Project Debounce
const debouncedSearchTermProject=(0,useDebounce/* useDebounce */.d)(searchTermProject,500);// Client Search Results
const[projectOptions,setProjectOptions]=(0,react.useState)({data:[],loading:false});// Project Search
const onProjectSearch=()=>{if(debouncedSearchTermProject){setProjectOptions((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},projectOptions),{},{loading:true}));projectModule.getAllRecords({title:debouncedSearchTermProject}).then(res=>{const{data}=res===null||res===void 0?void 0:res.data;setProjectOptions(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.data.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return{data:[...prev.data,...filteredData],loading:false};});}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});}else if(taskFilters.projectId&&isFirstRender){setProjectOptions((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},projectOptions),{},{loading:true}));projectModule.getRecordById(taskFilters.projectId).then(res=>{setProjectOptions((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},projectOptions),{},{data:[res.data.data]}));}).catch(err=>{message/* default */.Ay.error(err.response.data.message);});}};const{userPermissions}=(0,es/* useSelector */.d4)(state=>state.usersReducer);// available permissions for the properties page
const permissionSlug=(0,common/* getPermissionSlugs */.AH)(permissions/* TaskPermissionsEnum */.X);const taskPermissions=userPermissions;const fetchData=async query=>{setIsLoading(true);try{if(taskView==="board"){// Board view might not use pagination
const statuses=[1,2,3];const requests=statuses.map(status=>taskModule.getAllRecords((0,objectSpread2/* default */.A)({status},query)));const results=await Promise.allSettled(requests);const tasks=[];const meta=Array(3).fill({});results.forEach((result,index)=>{if(result.status==='fulfilled'){tasks.push(...result.value.data.data);meta[index]=result.value.data.meta;}});setTasks(tasks);setMeta(meta);}else if(taskView==="table"){// Table view uses pagination
const res=await taskModule.getAllRecords((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({page:(tableMeta===null||tableMeta===void 0?void 0:tableMeta.page)||1,// Default to page 1 if not set
perPage:(tableMeta===null||tableMeta===void 0?void 0:tableMeta.perPage)||10},query),taskFilters));setTasks(res.data.data);setTableMeta(res.data.meta);}}catch(error){console.error(error,'Error fetching tasks');}finally{setIsLoading(false);}};(0,react.useEffect)(()=>{if(isFirstRender){if(searchParams.get("taskId")){setOpenDetailModal(!openDetailModal);setSelectedTask(Number(searchParams.get("taskId")));}setIsFirstRender(false);}else if(!isFirstRender){if(taskFilters.type){searchParams.set("type",taskFilters.type);setSearchParams(searchParams);}else{searchParams.delete("type");setSearchParams(searchParams);}fetchData((0,objectSpread2/* default */.A)({},taskFilters));}},[taskFilters.type]);(0,react.useEffect)(()=>{onProjectSearch();},[debouncedSearchTermProject]);(0,react.useEffect)(()=>{const allUsers=[];tasks.forEach(task=>{task.TaskMembers.forEach(member=>{if(!allUsers.some(user=>user.User.id===member.User.id)){allUsers.push(member);}});});setTaskMembers(allUsers);},[tasks]);(0,react.useEffect)(()=>{fetchData({type:taskFilters.type,projectId:taskFilters.projectId});},[taskView,tableMeta===null||tableMeta===void 0?void 0:tableMeta.page,tableMeta===null||tableMeta===void 0?void 0:tableMeta.perPage]);const componentMap={"board":TaskBoard_KanbanBoard,"table":TaskBoard_TaskTable};(0,react.useEffect)(()=>{fetchData((0,objectSpread2/* default */.A)({},taskFilters));},[taskFilters]);const ViewComponent=componentMap[taskView];return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{permissionSlug:permissionSlug,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Tasks",breadCrumbData:breadCrumbsData,showAdd:taskPermissions.createTask,buttonText:"Add New Task",onButtonClick:()=>setOpenTaskModal(!openTaskModal),filters:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',alignItems:'center'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.A,{allowClear:true,value:searchTerm||"",placeholder:"Search this board",onChange:event=>{var _event$target;const value=event===null||event===void 0?void 0:(_event$target=event.target)===null||_event$target===void 0?void 0:_event$target.value;setSearchTerm(value);if(value){searchParams.set("searchTerm",value.toLowerCase());}else{searchParams.delete("searchTerm");}setSearchParams(searchParams);},style:{width:220,borderRadius:'0.25rem',marginRight:'16px'},suffix:/*#__PURE__*/(0,jsx_runtime.jsx)(SearchOutlined/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Project",name:"projectId",withSearch:true,options:projectOptions===null||projectOptions===void 0?void 0:(_projectOptions$data=projectOptions.data)===null||_projectOptions$data===void 0?void 0:_projectOptions$data.map(item=>({label:"".concat(item.referenceNumber," | ").concat(item.title),value:"".concat(item.id)})),onChange:e=>setTaskFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},taskFilters),{},{projectId:Number(e.target.value)})),value:taskFilters===null||taskFilters===void 0?void 0:(_taskFilters$projectI=taskFilters.projectId)===null||_taskFilters$projectI===void 0?void 0:_taskFilters$projectI.toString(),defaultValue:searchParams===null||searchParams===void 0?void 0:searchParams.get("projectId"),onReset:()=>{searchParams.delete("projectId");setSearchParams(searchParams);const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},taskFilters),{},{projectId:undefined});setTaskFilters(_temp);fetchData(_temp);},onUpdate:function(){var _taskFilters$projectI2;let taskFilter=arguments.length>0&&arguments[0]!==undefined?arguments[0]:taskFilters;fetchData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},taskFilter),{},{projectId:taskFilters.projectId}));if(taskFilters!==null&&taskFilters!==void 0&&taskFilters.projectId)searchParams.set("projectId",taskFilters===null||taskFilters===void 0?void 0:(_taskFilters$projectI2=taskFilters.projectId)===null||_taskFilters$projectI2===void 0?void 0:_taskFilters$projectI2.toString());setSearchParams(searchParams);},loading:projectOptions.loading,searchTerm:searchTermProject,onSearch:event=>setSearchTermProject(event.currentTarget.value)}),/*#__PURE__*/(0,jsx_runtime.jsxs)(es_select/* default */.A,{value:taskFilters.type||"",style:{width:180,marginRight:'16px'},onChange:value=>{const validValues=["myTask","assignedTask","assignedTask",undefined];const filterValue=validValues.includes(value)?value:undefined;const updatedSearchParams=new URLSearchParams(searchParams);if(filterValue){updatedSearchParams.set("type",filterValue);}else{updatedSearchParams.delete("type");}setSearchParams(updatedSearchParams.toString());setTaskFilters(prevFilters=>{const updatedFilters=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prevFilters),{},{type:filterValue});fetchData(updatedFilters);// Ensure fetchData is called with updated filters
return updatedFilters;});},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A.Option,{value:"myTask",style:{backgroundColor:taskFilters.type==='myTask'?"var(--color-dark-main)":undefined,color:taskFilters.type==='myTask'?"var(--color-inactive)":undefined},children:"Assigned For Me"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A.Option,{value:"assignedTask",style:{backgroundColor:taskFilters.type==='assignedTask'?"var(--color-dark-main)":undefined,color:taskFilters.type==='assignedTask'?"var(--color-inactive)":undefined},children:"Assigned By Me"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A.Option,{value:""// This represents "All Tasks"
,style:{backgroundColor:!taskFilters.type?"var(--color-dark-main)":undefined,color:!taskFilters.type?"var(--color-inactive)":undefined},children:"All Tasks"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default.Group */.A.Group,{maxCount:5,children:taskMembers.map(member=>{var _taskFilters$userIds;return/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{overlayInnerStyle:{borderRadius:'0.25rem',fontSize:'var(--font-size-sm)'},title:"".concat(member.User.firstName," ").concat(member.User.lastName),children:/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:32,onClick:()=>{let userIds=taskFilters.userIds||[];if(!userIds.includes(member.User.id)){userIds.push(member.User.id);}else{userIds=userIds.filter(id=>id!==member.User.id);}if(userIds.length){searchParams.set("userIds",JSON.stringify(userIds));}else{searchParams.delete("userIds");}setSearchParams(searchParams);fetchData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},taskFilters),{},{userIds}));setTaskFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},taskFilters),{},{userIds}));},style:{border:(_taskFilters$userIds=taskFilters.userIds)!==null&&_taskFilters$userIds!==void 0&&_taskFilters$userIds.includes(member.User.id)?'2px solid var(--color-primary-main)':'0.5px solid var(--color-light-200)',cursor:'pointer'},src:constants/* RESOURCE_BASE_URL */.to+member.User.profile,icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{})})},member.User.uuid);})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.sortBy,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Sort By",name:"sortBy",options:Object.entries(commonEnums/* TaskSort */.ms).map(_ref=>{let[key,value]=_ref;return{label:key,value:value};}),value:taskFilters===null||taskFilters===void 0?void 0:taskFilters.sortByField,onChange:e=>setTaskFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},taskFilters),{},{sortByField:e.target.value})),onReset:()=>{const _temp=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},taskFilters),{},{sortByField:undefined});setTaskFilters(_temp);fetchData(_temp);},onUpdate:function(){let taskFilter=arguments.length>0&&arguments[0]!==undefined?arguments[0]:taskFilters;fetchData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},taskFilter),{},{sortByField:taskFilters.sortByField,sortOrder:taskFilter.sortOrder}));},withSort:true}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[taskView==="table"&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{onClick:()=>setTaskView("board"),icon:/*#__PURE__*/(0,jsx_runtime.jsx)(icons_DatabaseOutlined,{style:{fontSize:20}})}),taskView==="board"&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{onClick:()=>setTaskView("table"),icon:/*#__PURE__*/(0,jsx_runtime.jsx)(icons_TableOutlined,{style:{fontSize:20}})})]})]})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(ViewComponent,{tasks:tasks,setTasks:setTasks,searchParams:searchParams,setSearchParams:setSearchParams,openDetailModal:openDetailModal,setOpenDetailModal:setOpenDetailModal,setSelectedTask:setSelectedTask,meta:taskView==="board"?meta:tableMeta,setMeta:taskView==="board"?setMeta:setTableMeta,searchTerm:taskView==="board"?searchTerm:undefined,isLoading:taskView==="board"?isLoading:undefined,module:taskView==="board"?taskModule:undefined}),selectedTask&&/*#__PURE__*/(0,jsx_runtime.jsx)(TaskDetailsModal/* TaskDetailsModal */.H,{openModal:openDetailModal,onCancel:()=>{setOpenDetailModal(!openDetailModal);searchParams.delete("taskId");setSearchParams(searchParams);},id:selectedTask,onUpdate:fetchData}),openTaskModal&&/*#__PURE__*/(0,jsx_runtime.jsx)(modal/* TaskModal */.f,{onCancel:()=>setOpenTaskModal(!openTaskModal),openModal:openTaskModal,permissions:taskPermissions,onUpdate:fetchData})]});};/* harmony default export */ const Dashboard_TaskBoard = (TaskBoard);

/***/ })

}]);