"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[5735],{

/***/ 31538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Notes)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(16330);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 7 modules
var modal = __webpack_require__(32645);
// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__(52765);
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 3 modules
var avatar = __webpack_require__(75871);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js
var spin = __webpack_require__(90650);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 11 modules
var skeleton = __webpack_require__(46005);
// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 1 modules
var tag = __webpack_require__(12916);
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 1 modules
var popconfirm = __webpack_require__(56231);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-card/es/ProCard.js + 15 modules
var ProCard = __webpack_require__(91692);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__(79378);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js
var LoadingOutlined = __webpack_require__(29008);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js
var DeleteOutlined = __webpack_require__(78433);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(59051);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Icons/index.tsx + 58 modules
var Icons = __webpack_require__(63668);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(98341);
// EXTERNAL MODULE: ./src/Modules/Invoice/index.ts
var Invoice = __webpack_require__(49925);
;// ./src/Components/Organisms/Invoice/Notes/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabs":"styles_tabs__J7yrI","divider":"styles_divider__l5mMy","notes":"styles_notes__Z3Nzr","notes_wrapper":"styles_notes_wrapper__t9t0v","note":"styles_note__JeUL4","note_user_avatar":"styles_note_user_avatar__CjZ2r","note_content_wrapper":"styles_note_content_wrapper__8I8Jy","note_header":"styles_note_header__bXRrV","note_header_date":"styles_note_header_date__PhpfW","note_header_delete":"styles_note_header_delete__EY3hp","note_content":"styles_note_content__vuPP2","notes_form_input_wrapper":"styles_notes_form_input_wrapper__Xz4O9","notes_form_avatar":"styles_notes_form_avatar__N5jfJ","notes_form_input":"styles_notes_form_input__crYw3","notes_form_send_loader":"styles_notes_form_send_loader__yJrt5","notes_form_send":"styles_notes_form_send__9YXu6"});
// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(91970);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Invoice/Notes/index.tsx
const{TextArea}=input/* default */.A;const InvoiceNotes=props=>{var _loggedInUserData$dat,_loggedInUserData$dat2,_loggedInUserData$dat3;const{invoiceId,onRefresh,permissions,open,onCancel}=props;const{loggedInUserData}=(0,es/* useSelector */.d4)(state=>state.usersReducer);const{updateInvoice,readInvoice}=permissions;const module=(0,react.useMemo)(()=>new Invoice/* InvoiceModule */.O(),[]);const[activeTab,setActiveTab]=(0,react.useState)("addNote");const[showDelete,setShowDelete]=(0,react.useState)({});const[notes,setNotes]=(0,react.useState)({content:'',loading:false,isConcern:false});const[concernResolved,setConcernResolved]=(0,react.useState)({confirmLoading:false,visible:false});const logsCondition=(0,react.useMemo)(()=>{return!!invoiceId&&readInvoice===true&&activeTab==="logs";},[invoiceId,readInvoice,activeTab]);// Fetch notes
const{data:allNotes,onRefresh:onRefreshNotes,loading:notesLoading}=(0,hooks/* useConditionFetchData */.P6)({method:()=>module.getNoteById(invoiceId),condition:!!invoiceId&&readInvoice===true});// Fetch notes logs
const{data:noteLogs,onRefresh:onRefreshNoteLogs,loading:logsLoading}=(0,hooks/* useConditionFetchData */.P6)({method:()=>module.getLogsById(invoiceId),condition:logsCondition});/**Function to add a note
   * @param {string} note note to be added
   */const onAddNote=(note,isConcern)=>{if(!note){message/* default */.Ay.error('Please enter a note');return;}if(!invoiceId)return;if(updateInvoice===true){setNotes(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:true}));module.addNote(invoiceId,{note,isConcern}).then(res=>{var _res$data;message/* default */.Ay.success((res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.message)||'Note added successfully');setNotes({content:'',loading:false,isConcern:false});onRefresh();onRefreshNotes();}).catch(err=>{var _err$response,_err$response$data;message/* default */.Ay.error((err===null||err===void 0?void 0:(_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message)||'Something went wrong');setNotes(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{loading:false}));});}else{message/* default */.Ay.error('You do not have permission to add notes');}};/**Function to remove a note
   * @param {number} noteId id of the note to be deleted
   */const onRemoveNote=noteId=>{if(updateInvoice===true){module.removeNote(noteId).then(res=>{var _res$data2;message/* default */.Ay.success((res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.message)||'Note deleted successfully');onRefresh();onRefreshNotes();}).catch(err=>{var _err$response2,_err$response2$data;message/* default */.Ay.error((err===null||err===void 0?void 0:(_err$response2=err.response)===null||_err$response2===void 0?void 0:(_err$response2$data=_err$response2.data)===null||_err$response2$data===void 0?void 0:_err$response2$data.message)||'Something went wrong');});}else{message/* default */.Ay.error('You do not have permission to delete notes');}};return/*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.A,{title:"Notes",open:open,onCancel:onCancel,width:700,footer:activeTab==="addNote"&&!notesLoading?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_checkbox/* default */.A,{checked:notes.isConcern,onChange:e=>setNotes(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{isConcern:e.target.checked})),children:"Mark as a concern"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.notes_form_input_wrapper,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:30,icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{}),className:styles_module.notes_form_avatar,src:"".concat(constants/* RESOURCE_BASE_URL */.to).concat(loggedInUserData===null||loggedInUserData===void 0?void 0:(_loggedInUserData$dat=loggedInUserData.data)===null||_loggedInUserData$dat===void 0?void 0:_loggedInUserData$dat.profile),alt:"".concat(loggedInUserData===null||loggedInUserData===void 0?void 0:(_loggedInUserData$dat2=loggedInUserData.data)===null||_loggedInUserData$dat2===void 0?void 0:_loggedInUserData$dat2.firstName," ").concat(loggedInUserData===null||loggedInUserData===void 0?void 0:(_loggedInUserData$dat3=loggedInUserData.data)===null||_loggedInUserData$dat3===void 0?void 0:_loggedInUserData$dat3.lastName)}),/*#__PURE__*/(0,jsx_runtime.jsx)(TextArea,{placeholder:"Add a note...",className:styles_module.notes_form_input,autoSize:{minRows:1,maxRows:4},value:notes.content,onChange:e=>setNotes(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{content:e.target.value}))}),notes.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.A,{indicator:/*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.A,{style:{fontSize:20},spin:true}),className:styles_module.notes_form_send_loader}):/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* SendIcon */.qx,{width:30,height:30,className:styles_module.notes_form_send,onClick:()=>onAddNote(notes.content,notes.isConcern)})]})]}):null,children:/*#__PURE__*/(0,jsx_runtime.jsx)(ProCard/* default */.A,{headStyle:{display:'unset',padding:0},bodyStyle:{padding:0},className:styles_module.notes,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.notes_wrapper,children:[notesLoading&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.notes_loader,children:/*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.A,{active:true})}),(allNotes===null||allNotes===void 0?void 0:allNotes.length)===0&&!notesLoading&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.notes_empty,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomEmpty */.ZX,{description:"No notes found"})}),allNotes===null||allNotes===void 0?void 0:allNotes.map((note,index)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.note,onMouseEnter:()=>setShowDelete({[note.id]:true}),onMouseLeave:()=>setShowDelete({}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.A,{size:40,icon:/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{}),className:styles_module.note_user_avatar,src:"".concat(constants/* RESOURCE_BASE_URL */.to).concat(note.AddedBy.profile),alt:"".concat(note.AddedBy.firstName," ").concat(note.AddedBy.lastName)}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.note_content_wrapper,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.note_header,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{weight:"bold",color:"dark-main",children:"".concat(note.AddedBy.firstName," ").concat(note.AddedBy.lastName)}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:styles_module.note_header_date,title:moment_default()(note.addedDate).format("DD MMM, YYYY hh:mm A"),children:[moment_default()(note.addedDate).fromNow(),note.isConcern&&/*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.A,{color:"warning",className:"ml-2",children:"Concern"}),note.isResolved&&/*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.A,{color:"green",className:"ml-2",children:"Resolved"}),note.isConcern&&!note.isResolved&&/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{title:"Are you sure to mark this concern as resolved?",okText:"Yes",cancelText:"No",placement:"bottomRight",open:concernResolved.visible,onOpenChange:open=>setConcernResolved(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{visible:open})),onCancel:()=>setConcernResolved(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{visible:false})),okButtonProps:{loading:concernResolved.confirmLoading},onConfirm:()=>{if(updateInvoice===true){module.markConcernAsResolved(note.id).then(res=>{var _res$data3;message/* default */.Ay.success((res===null||res===void 0?void 0:(_res$data3=res.data)===null||_res$data3===void 0?void 0:_res$data3.message)||'Concern resolved successfully');onRefresh();onRefreshNotes();setConcernResolved(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{visible:false}));}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage||'Something went wrong');});}else{message/* default */.Ay.error('You do not have permission to resolve concerns');}},children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_checkbox/* default */.A,{checked:false,onChange:e=>setConcernResolved(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{visible:e.target.checked})),children:"Mark as resolved"})})]}),showDelete[note.id]&&/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{title:"Are you sure to delete this note?",onConfirm:()=>onRemoveNote(note.id),okText:"Yes",cancelText:"No",placement:"left",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.A,{className:styles_module.note_header_delete})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:styles_module.note_content,children:note.note})]})]},"note-".concat(index)))]})})});};/* harmony default export */ const Notes = (InvoiceNotes);

/***/ }),

/***/ 56946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ table_columns)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 15 modules
var typography = __webpack_require__(30377);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(48538);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js
var dropdown = __webpack_require__(57811);
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 1 modules
var popconfirm = __webpack_require__(56231);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EditOutlined.js
var EditOutlined = __webpack_require__(90582);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LinkOutlined.js + 1 modules
var LinkOutlined = __webpack_require__(26142);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js
var DeleteOutlined = __webpack_require__(78433);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/MoreOutlined.js + 1 modules
var MoreOutlined = __webpack_require__(72906);
// EXTERNAL MODULE: ./src/Modules/Invoice/index.ts
var Invoice = __webpack_require__(49925);
;// ./src/Components/Organisms/Invoice/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"header":"styles_header__TrrOz","content":"styles_content__41fqm","contentHeader":"styles_contentHeader__iOHQL","content__layout":"styles_content__layout__BXPpM","content__layout__header":"styles_content__layout__header__9GmKl","content__layout__content":"styles_content__layout__content__Iwran","content__layout__footer":"styles_content__layout__footer__QW0Pb","content__layout__footer__button":"styles_content__layout__footer__button__ShU3e","actions":"styles_actions__2eeWO","form":"styles_form__YG4R2","footer":"styles_footer__NmVI+","opacity_6":"styles_opacity_6__0knF3","dropdown":"styles_dropdown__A2BY9","overlay":"styles_overlay__2ww-V","overlay_item":"styles_overlay_item__pfi2+","overlay_popConfirm":"styles_overlay_popConfirm__2glYJ","disabledButton":"styles_disabledButton__X+YYd","tabs":"styles_tabs__5yx1C","message":"styles_message__PXLyt","container":"styles_container__vzXLg","button":"styles_button__QsgQx"});
// EXTERNAL MODULE: ./src/helpers/commonEnums.ts
var commonEnums = __webpack_require__(2360);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Invoice/actions.tsx
const ActionComponent=props=>{const{record,setDrawer,reloadTableData,permissions:{deleteInvoice},setQuickUpdate}=props;const module=(0,react.useMemo)(()=>new Invoice/* InvoiceModule */.O(),[]);const[dropdownOpen,setDropdownOpen]=(0,react.useState)({});const[deleteConfirmation,setDeleteConfirmation]=(0,react.useState)(false);const handleDelete=()=>{if(deleteInvoice===false){message/* default */.Ay.error("You don't have permission to delete this record, please contact your admin.");return;}module.deleteRecord(record.id).then(()=>{message/* default */.Ay.success("Invoice has been deleted successfully.");reloadTableData&&reloadTableData();}).catch(err=>{var _err$response,_err$response$data;const errorMessage=err===null||err===void 0?void 0:(_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message;message/* default */.Ay.error(errorMessage||"Something went wrong, please try again later.");});};return/*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.A,{trigger:['click'],open:dropdownOpen[record.id],onOpenChange:open=>setDropdownOpen((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},dropdownOpen),{},{[record.id]:open})),menu:{items:[{label:'Edit',key:'edit',icon:/*#__PURE__*/(0,jsx_runtime.jsx)(EditOutlined/* default */.A,{}),onClick:e=>{e.domEvent.preventDefault();if(record.status===commonEnums/* InvoiceStatus */.Sx.Generated){setDrawer({open:true,id:record.id,type:"edit"});}else{message/* default */.Ay.error("You cannot edit this invoice because it is already ".concat(commonEnums/* InvoiceStatus */.Sx[record.status]));}}},{key:'link-to-project',icon:/*#__PURE__*/(0,jsx_runtime.jsx)(LinkOutlined/* default */.A,{}),label:" Link To Project",onClick:e=>{e.domEvent.preventDefault();setQuickUpdate({open:true,invoiceId:record.id,initialProjectId:record.projectId});setDropdownOpen({[record.id]:false});}},{type:'divider'},{label:/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{title:"Are you sure to delete this invoice?",onConfirm:()=>{handleDelete();// Close the dropdown and delete confirmation
setDeleteConfirmation(false);setDropdownOpen((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},dropdownOpen),{},{[record.id]:false}));},okText:"Yes",cancelText:"No",placement:"bottomLeft",open:deleteConfirmation,onOpenChange:open=>setDeleteConfirmation(open),children:"Delete"}),key:'delete',icon:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.A,{}),danger:true,onClick:e=>{e.domEvent.preventDefault();setDeleteConfirmation(!deleteConfirmation);}}]},children:/*#__PURE__*/(0,jsx_runtime.jsx)(MoreOutlined/* default */.A,{className:styles_module.actions,onClick:e=>e.preventDefault()})});};/* harmony default export */ const actions = (ActionComponent);
// EXTERNAL MODULE: ./src/Components/Organisms/Invoice/status.tsx
var Invoice_status = __webpack_require__(14270);
// EXTERNAL MODULE: ./src/helpers/common.ts
var common = __webpack_require__(88132);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__(10678);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 7 modules
var modal = __webpack_require__(32645);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/Modules/Project/index.ts
var Project = __webpack_require__(50167);
;// ./src/Components/Organisms/Invoice/quick-update.tsx
const QuickUpdate=props=>{const{open,onClose,invoiceId,initialProjectId}=props;const[form]=es_form/* default */.A.useForm();const[loading,setLoading]=(0,react.useState)(false);const module=(0,react.useMemo)(()=>new Invoice/* InvoiceModule */.O(),[]);const projectModule=(0,react.useMemo)(()=>new Project/* ProjectModule */.K(),[]);// Project Search Term
const[searchTermProject,setSearchTermProject]=(0,react.useState)("");const debouncedSearchTermProject=(0,useDebounce/* useDebounce */.d)(searchTermProject,500);const[projectOptions,setProjectOptions]=(0,react.useState)([]);// Project Search
const onProjectSearch=function(){let{title,ids}=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};projectModule.getAllRecords({title:title,ids:ids}).then(res=>{const{data}=res===null||res===void 0?void 0:res.data;setProjectOptions(prev=>{// if the data is already present in the state, then don't add it again
const filteredData=data===null||data===void 0?void 0:data.filter(item=>{return!(prev!==null&&prev!==void 0&&prev.find(prevItem=>prevItem.id===item.id));});// add the new data to the existing data
return[...prev,...filteredData];});}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage);});};const onFinish=values=>{setLoading(true);module.quickUpdate(invoiceId,values).then(res=>{message/* default */.Ay.success("Invoice has been updated successfully.");onClose();}).catch(err=>{const errorMessage=(0,common/* handleError */.H4)(err);message/* default */.Ay.error(errorMessage);}).finally(()=>setLoading(false));};// Project Search Request 
(0,react.useEffect)(()=>{if(!debouncedSearchTermProject)return;onProjectSearch({title:debouncedSearchTermProject});},[debouncedSearchTermProject]);// Initial Project Id
(0,react.useEffect)(()=>{if(initialProjectId!==0){onProjectSearch({ids:[initialProjectId]});form.setFieldsValue({projectId:initialProjectId});}},[initialProjectId]);return/*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.A,{open:open,onCancel:onClose,zIndex:10000,destroyOnClose:true,title:"Quick Update",okText:"Update",cancelText:"Cancel",okButtonProps:{htmlType:'submit',form:'quick-update-form',loading},children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A,{onFinish:onFinish,form:form,name:"quick-update-form",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A.Item,{name:"projectId",rules:[{required:true,message:"Please select a project"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* SelectWithSearch */.fd,{label:"Select Project",notFoundDescription:"No projects found., Please search for projects.",onSearch:value=>setSearchTermProject(value),onChange:value=>form.setFieldsValue({projectId:value}),options:projectOptions===null||projectOptions===void 0?void 0:projectOptions.map(item=>({label:"".concat(item.referenceNumber," | ").concat(item.title),value:item.id}))})})})});};/* harmony default export */ const quick_update = (QuickUpdate);
;// ./src/Components/Organisms/Invoice/table-columns.tsx
const{Paragraph}=typography/* default */.A;const InvoicesTable=props=>{const{tableData,tableLoading,emptyText,reloadTableData,permissions,setDrawer,onAddNoteClick}=props;// Quick Update Modal State
const[quickUpdate,setQuickUpdate]=(0,react.useState)({open:false,invoiceId:0,initialProjectId:0});const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(_text,_record,index)=>index+1,width:"60px"},{title:'Client',dataIndex:"Client",key:"Client",render:(Client,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",size:"sm",className:"mb-1",children:record.invoiceNumber}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",children:Client===null||Client===void 0?void 0:Client.name}),(Client===null||Client===void 0?void 0:Client.email)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Paragraph,{ellipsis:{rows:1,expandable:false},copyable:{text:Client===null||Client===void 0?void 0:Client.email},className:"font-size-xs color-dark-sub mb-0",children:/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"mailto:".concat(Client===null||Client===void 0?void 0:Client.email),style:{color:'var(--color-dark-sub)'},children:Client===null||Client===void 0?void 0:Client.email})}),(Client===null||Client===void 0?void 0:Client.phone)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Paragraph,{ellipsis:{rows:1,expandable:false},copyable:{text:"".concat(Client===null||Client===void 0?void 0:Client.phoneCode).concat(Client===null||Client===void 0?void 0:Client.phone)},className:"font-size-xs color-dark-sub",children:/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"tel:".concat(Client===null||Client===void 0?void 0:Client.phoneCode," ").concat(Client===null||Client===void 0?void 0:Client.phone),style:{color:'var(--color-dark-sub)'},children:"".concat(Client===null||Client===void 0?void 0:Client.phoneCode).concat(Client===null||Client===void 0?void 0:Client.phone)})})]}),width:'240px'},{title:'Project',dataIndex:"Project",key:"Project",render:Project=>/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",children:"".concat((Project===null||Project===void 0?void 0:Project.referenceNumber)||""," ").concat(Project!==null&&Project!==void 0&&Project.referenceNumber?"|":""," ").concat((Project===null||Project===void 0?void 0:Project.title)||"")}),width:'240px'},{title:"Message/Note",dataIndex:"message",key:"message",render:(message,record)=>{const{InvoiceFollowUp}=record;return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.container,style:{// backgroundColor: "var(--color-border)",
padding:"10px",borderRadius:"2px",fontSize:"var(--font-size-sm)"},children:[(InvoiceFollowUp===null||InvoiceFollowUp===void 0?void 0:InvoiceFollowUp.length)>0?InvoiceFollowUp===null||InvoiceFollowUp===void 0?void 0:InvoiceFollowUp.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Paragraph,{ellipsis:{rows:5},style:{fontSize:'var(--font-size-sm)',color:'var(--color-dark-main)'},children:item.note})):/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{fontSize:'var(--font-size-sm)',color:'var(--color-dark-100)'},children:"No notes"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.button,children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"ghost",size:"small",style:{fontSize:'var(--font-size-xs)'},onClick:()=>onAddNoteClick(record),children:(InvoiceFollowUp===null||InvoiceFollowUp===void 0?void 0:InvoiceFollowUp.length)===0?"Add Note":"Manage Notes"})})]})});},width:"400px"},{title:'Overview',dataIndex:"total",key:"total",render:(total,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Typography */.o5,{color:"dark-main",children:"Total Amount: ".concat((0,common/* formatCurrency */.vv)(total))}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"ghost",size:"small",style:{fontSize:'0.8rem'},className:"mt-1",onClick:()=>setDrawer({open:true,id:record.id,type:"preview"}),children:"Preview File"})]}),width:'150px'},{title:'Status',dataIndex:"status",key:"status",className:"text-center",render:(_status,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Invoice_status/* default */.A,{item:record,permissions:permissions,onRefresh:()=>reloadTableData(),setDrawer:setDrawer}),width:'180px'},{title:"Actions",dataIndex:"actions",key:"actions",render:(_actions,record)=>/*#__PURE__*/(0,jsx_runtime.jsx)(actions,{record:record,setDrawer:setDrawer,reloadTableData:reloadTableData,permissions:permissions,setQuickUpdate:setQuickUpdate}),width:"120px"}];return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{sticky:true,dataSource:tableData,columns:columns,pagination:false,scroll:{x:991},loading:tableLoading,rowKey:record=>"invoice-".concat(record.id),locale:{emptyText:emptyText}}),(quickUpdate===null||quickUpdate===void 0?void 0:quickUpdate.open)&&/*#__PURE__*/(0,jsx_runtime.jsx)(quick_update,{open:quickUpdate.open,invoiceId:quickUpdate.invoiceId,initialProjectId:quickUpdate.initialProjectId,onClose:()=>{setQuickUpdate({open:false,invoiceId:0,initialProjectId:0});reloadTableData();}})]});};/* harmony default export */ const table_columns = (InvoicesTable);

/***/ }),

/***/ 29008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9950);
/* harmony import */ var _ant_design_icons_svg_es_asn_LoadingOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21293);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61187);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var LoadingOutlined = function LoadingOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_LoadingOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
  }));
};
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(LoadingOutlined));

/***/ })

}]);