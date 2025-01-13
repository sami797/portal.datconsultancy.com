"use strict";
(self["webpackChunkdat_projects"] = self["webpackChunkdat_projects"] || []).push([[4302],{

/***/ 4302:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard_PriceFinder)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9950);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92759);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(90247);
// EXTERNAL MODULE: ./src/Components/Templates/Layout/index.tsx + 28 modules
var Layout = __webpack_require__(81168);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 96 modules
var table = __webpack_require__(41821);
// EXTERNAL MODULE: ./src/Components/Atoms/Headings/index.tsx
var Headings = __webpack_require__(35751);
// EXTERNAL MODULE: ./src/helpers/dateHandler.ts
var dateHandler = __webpack_require__(98933);
// EXTERNAL MODULE: ./src/Components/Icons/index.tsx + 58 modules
var Icons = __webpack_require__(63668);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(44414);
;// ./src/Components/Organisms/Dashboard/PriceFinder/table-columns.tsx
// import { DLDTransactionTypes } from "../../../../Modules/DLD-Transaction/types"
// import { DLDRentTransactionTypes } from "../../../../Modules/DLD-Rent-Transaction/types";
function TableComponent(props){const{tableData,tableLoading,emptyText,isTypeSale}=props;// Sale Table Columns
const columns=[{title:"S.No",dataIndex:"index",key:"index",render:(text,record,index)=>index+1,width:"60px"},{title:"Transaction Group",dataIndex:"trans_group_en",key:"trans_group_en",render:trans_group_en=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:trans_group_en||""})},{title:"Property",dataIndex:"property",key:"property",render:(property,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Type: ".concat((record===null||record===void 0?void 0:record.property_type_en)||"")}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",className:"my-1",children:"Sub-Type: ".concat((record===null||record===void 0?void 0:record.property_sub_type_en)||"")}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Usage: ".concat((record===null||record===void 0?void 0:record.property_usage_en)||"")})]})},{title:"Area",dataIndex:"area_name_en",key:"area_name_en",render:area_name_en=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:area_name_en||""})},{title:"Building Name",dataIndex:"building_name_en",key:"building_name_en",render:building_name_en=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:building_name_en||""})},{title:"Property Name",dataIndex:"project_name_en",key:"project_name_en",render:project_name_en=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:project_name_en||""})},{title:"Transaction Amount",dataIndex:"transactionAmount",key:"transactionAmount",render:transactionAmount=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"AED ".concat(Intl.NumberFormat("en",{notation:"standard"}).format(transactionAmount)||"")}),width:'17%'},{title:"Transaction Date",dataIndex:"transactionDate",key:"transactionDate",render:transactionDate=>/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:(0,dateHandler/* convertDate */.ic)(transactionDate,"dd M,yy")||""})}];// Rent Table Columns
const rentColumns=[{title:"S.No",dataIndex:"index",key:"index",render:(text,record,index)=>index+1,width:"6%"},{title:"Name",dataIndex:"name",key:"name",render:(name,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",weight:"bold",children:"Area: ".concat(record.area_name_en)||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"ID: ".concat(record.area_id)||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Actual Area: ".concat(record.actual_area)||0}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex mt-1",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* CalenderIcon */.e$,{className:"mr-2"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Added: ".concat((0,dateHandler/* convertDate */.ic)(record.addedDate,"dd MM yy"))||0})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex mt-1",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icons/* CalenderIcon */.e$,{className:"mr-2"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-sub",size:"sm",children:"Transaction: ".concat((0,dateHandler/* convertDate */.ic)(record.transactionDate,"dd MM yy"))||0})]})]})},{title:"Ejari",dataIndex:"ejari_bus_property_type_en",key:"ejari_bus_property_type_en",render:(ejari_bus_property_type_en,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"ID: ".concat(record.ejari_property_type_id)||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Type: ".concat(record.ejari_property_type_en)||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Sub Type: ".concat(record.ejari_property_sub_type_en)||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Sub Type ID: ".concat(record.ejari_property_sub_type_id)||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Bus Type: ".concat(ejari_bus_property_type_en)||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Bus Type ID: ".concat(record.ejari_bus_property_type_id)||0})]})},{title:"Project",dataIndex:"project_name_en",key:"project_name_en",render:(project_name_en,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(record===null||record===void 0?void 0:record.project_name_en)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Name: ".concat(project_name_en)||0}),(record===null||record===void 0?void 0:record.master_project_en)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Master: ".concat(record.master_project_en)||0}),(record===null||record===void 0?void 0:record.project_number)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Number: ".concat(record.project_number)||0}),(record===null||record===void 0?void 0:record.property_usage_en)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Usage: ".concat(record.property_usage_en)||0}),(record===null||record===void 0?void 0:record.no_of_prop)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"No. of Properties: ".concat(record.no_of_prop)||0})]})},{title:"Contract",dataIndex:"contract_amount",key:"contract_amount",render:(contract_amount,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Amount (AED): ".concat(Intl.NumberFormat("en").format(contract_amount))||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Annual Amount (AED): ".concat(Intl.NumberFormat("en").format(record.annual_amount))||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"ID: ".concat(record.contract_id)||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Start Date: ".concat((0,dateHandler/* convertDate */.ic)(record.contract_start_date,"dd-mm-yy"))||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"End Date: ".concat((0,dateHandler/* convertDate */.ic)(record.contract_end_date,"dd-mm-yy"))||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Reg Type: ".concat(record.contract_reg_type_en)||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Reg Type ID: ".concat(record.contract_reg_type_id)||0})]})},{title:"Nearest",dataIndex:"nearest_landmark_en",key:"nearest_landmark_en",render:(nearest_landmark_en,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Landmark: ".concat(nearest_landmark_en)||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Metro: ".concat(record.nearest_metro_en)||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Mall: ".concat(record.nearest_mall_en)||0})]})},{title:"Others",dataIndex:"other_details_en",key:"other_details_en",render:(other_details_en,record)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Status: ".concat(record.status===1?"Active":"Inactive")||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Tenant Type: ".concat(record.tenant_type_en)||0}),/*#__PURE__*/(0,jsx_runtime.jsx)(Headings/* default */.A,{color:"dark-main",size:"sm",children:"Tenant Type ID: ".concat(record.tenant_type_id)||0})]})}];return/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.A,{dataSource:tableData,columns:isTypeSale?columns:rentColumns,pagination:false,scroll:{x:991},loading:tableLoading,rowKey:record=>"dld-transaction-resp-table-".concat(record.id),locale:{emptyText:emptyText}});}
// EXTERNAL MODULE: ./node_modules/recharts/es6/component/ResponsiveContainer.js
var ResponsiveContainer = __webpack_require__(81095);
// EXTERNAL MODULE: ./node_modules/recharts/es6/chart/ComposedChart.js + 4 modules
var ComposedChart = __webpack_require__(34508);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/CartesianGrid.js
var CartesianGrid = __webpack_require__(93245);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/XAxis.js
var XAxis = __webpack_require__(60158);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/YAxis.js
var YAxis = __webpack_require__(44813);
// EXTERNAL MODULE: ./node_modules/recharts/es6/component/Tooltip.js + 3 modules
var Tooltip = __webpack_require__(16335);
// EXTERNAL MODULE: ./node_modules/recharts/es6/component/Legend.js + 1 modules
var Legend = __webpack_require__(25102);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/Bar.js + 1 modules
var Bar = __webpack_require__(85706);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/Line.js
var Line = __webpack_require__(56473);
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(65944);
;// ./src/Components/Organisms/Dashboard/PriceFinder/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"analyticsWrap":"styles_analyticsWrap__cGC--","tooltipWrap":"styles_tooltipWrap__j8ZZr","tooltipLabel":"styles_tooltipLabel__a06BQ","tooltipFirst":"styles_tooltipFirst__9HHnC","tooltipSecond":"styles_tooltipSecond__DSyeb"});
;// ./src/Components/Organisms/Dashboard/PriceFinder/analytics.tsx
// import { PriceFinderRespTypes } from "../../../../Modules/PriceFinder/types";
const PriceFinderAnalytics=_ref=>{let{data,filters}=_ref;// 1 meter = 10.7639 sqft
const meterToSqft=10.7639;// checks if the property category is for rent or for sale
const isTypeSale=(0,react.useMemo)(()=>{const category=filters.propertyCategory;if(category==='commercial-for-rent'||category==='residential-for-rent'){return false;}return true;},[filters.propertyCategory]);const CustomTooltip=_ref2=>{var _monthFinder$find,_payload$3,_price,_payload$4;let{payload,label}=_ref2;let price;if(isTypeSale){var _payload$,_payload$$payload;price=((_payload$=payload[1])===null||_payload$===void 0?void 0:(_payload$$payload=_payload$.payload)===null||_payload$$payload===void 0?void 0:_payload$$payload.averageCostPerMeter)/meterToSqft;}else{var _payload$2,_payload$2$payload;price=(_payload$2=payload[1])===null||_payload$2===void 0?void 0:(_payload$2$payload=_payload$2.payload)===null||_payload$2$payload===void 0?void 0:_payload$2$payload.averagePrice;}return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.tooltipWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:styles_module.tooltipLabel,children:"".concat((_monthFinder$find=constants/* monthFinder */.D$.find(month=>month.id===label))===null||_monthFinder$find===void 0?void 0:_monthFinder$find.title," - ").concat((_payload$3=payload[0])===null||_payload$3===void 0?void 0:_payload$3.payload.year)}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"px-2",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:styles_module.tooltipFirst,children:["Avg. Price: ",Intl.NumberFormat("en",{notation:"standard"}).format((_price=price)===null||_price===void 0?void 0:_price.toFixed(0))]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:styles_module.tooltipSecond,children:["Properties ",isTypeSale?'Sold':'Rented',": ",(_payload$4=payload[0])===null||_payload$4===void 0?void 0:_payload$4.value]})]})]});};const renderColorfulLegendText=(value,entry)=>{const{color}=entry;return value.toLowerCase()==="volume"?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"#ababab"},children:value}):/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color},children:value});};return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.analyticsWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:"color-dark-main font-size-md",children:"Price & Trends"}),(data===null||data===void 0?void 0:data.length)>0?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{width:'100%',height:300},children:/*#__PURE__*/(0,jsx_runtime.jsx)(ResponsiveContainer/* ResponsiveContainer */.u,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(ComposedChart/* ComposedChart */.X,{data:data,margin:{top:5,right:20,bottom:0,left:10},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(CartesianGrid/* CartesianGrid */.d,{strokeDasharray:"3 3"}),/*#__PURE__*/(0,jsx_runtime.jsx)(XAxis/* XAxis */.W,{tickFormatter:val=>{var _monthFinder$find2;return((_monthFinder$find2=constants/* monthFinder */.D$.find(month=>month.id===val))===null||_monthFinder$find2===void 0?void 0:_monthFinder$find2.title)||"month";}// tick={{ stroke: '#00A884', strokeWidth: 0.5 }}
,dataKey:"month",reversed:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(YAxis/* YAxis */.h,{tickFormatter:val=>Intl.NumberFormat("en",{notation:"compact"}).format(isTypeSale?val/meterToSqft:val),yAxisId:"left",label:{value:isTypeSale?'Average price in AED per sqft':'Average price in AED',angle:-90,position:{x:8,y:"15%"}}}),/*#__PURE__*/(0,jsx_runtime.jsx)(YAxis/* YAxis */.h,{yAxisId:"right",orientation:"right",label:{value:"No. of properties ".concat(isTypeSale?'sold':'rented'),angle:-90,position:{x:70,y:"15%"}}}),/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* Tooltip */.m,{content:/*#__PURE__*/(0,jsx_runtime.jsx)(CustomTooltip,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Legend/* Legend */.s,{formatter:renderColorfulLegendText}),/*#__PURE__*/(0,jsx_runtime.jsx)(Bar/* Bar */.y,{name:"Volume",barSize:20,yAxisId:"right",dataKey:"aggregatedFrom",fill:"#ccc"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Line/* Line */.N,{activeDot:{r:8},strokeWidth:1.5,name:"Price",yAxisId:"left",type:"monotone",dataKey:isTypeSale?'averageCostPerMeter':'averagePrice',stroke:"#00A884"})]})})}):/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.A,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:150},description:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"No Data Found"})})]})});};/* harmony default export */ const analytics = (PriceFinderAnalytics);
// EXTERNAL MODULE: ./src/Components/Atoms/index.tsx + 12 modules
var Atoms = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/Components/Organisms/Skeletons/index.tsx
var Skeletons = __webpack_require__(70619);
// EXTERNAL MODULE: ./src/Modules/PropertyCategory/index.ts
var PropertyCategory = __webpack_require__(90831);
// EXTERNAL MODULE: ./src/Modules/PropertyType/index.ts
var PropertyType = __webpack_require__(51019);
// EXTERNAL MODULE: ./src/helpers/useDebounce.ts
var useDebounce = __webpack_require__(28173);
// EXTERNAL MODULE: ./src/helpers/propertyEnums.ts
var propertyEnums = __webpack_require__(57352);
// EXTERNAL MODULE: ./src/Components/Organisms/Common/styles.module.scss
var Common_styles_module = __webpack_require__(96019);
// EXTERNAL MODULE: ./src/Modules/Location/index.ts
var Location = __webpack_require__(44137);
;// ./src/Components/Organisms/Dashboard/PriceFinder/index.tsx
/* module decorator */ module = __webpack_require__.hmd(module);
// import { PriceFinderModule } from "../../../../Modules/PriceFinder";
// import { DLDTransactionModule } from "../../../../Modules/DLD-Transaction";
// import { DLDRentTransactionModule } from "../../../../Modules/DLD-Rent-Transaction";
// import { DLDTransactionResponseObject } from "../../../../Modules/DLD-Transaction/types";
// import { DLDRentTransactionResponseObject } from "../../../../Modules/DLD-Rent-Transaction/types";
const breadCrumbsData=[{text:"Home",isLink:true,path:"/"},{isLink:false,text:"Price Finder"}];function PriceFinder(){var _locations$data,_propertyType$data,_tableData$meta,_tableRentData$meta,_tableData$meta2,_tableRentData$meta2,_tableData$meta3,_tableRentData$meta3;//const module = useMemo(() => new PriceFinderModule(), [])
const propertyModule=(0,react.useMemo)(()=>new PropertyCategory/* PropertyCategoryModule */.Y(),[]);const propertyTypeModule=(0,react.useMemo)(()=>new PropertyType/* PropertyTypeModule */.c(),[]);// const dldTransactionModule = useMemo(() => new DLDTransactionModule(), [])
// const dldRentTransactionModule = useMemo(() => new DLDRentTransactionModule(), [])
const locationModule=(0,react.useMemo)(()=>new Location/* LocationModule */.a(),[]);const[searchTerm,setSearchTerm]=(0,react.useState)("");const debouncedSearchTerm=(0,useDebounce/* useDebounce */.d)(searchTerm,500);const[locations,setLocations]=(0,react.useState)({data:[],loading:false});const[reset,setReset]=(0,react.useState)(false);const[moduleData,setModuleData]=(0,react.useState)({loading:false,error:{},data:[]});// DLD Transaction Data
const[tableData,setTableData]=(0,react.useState)({loading:false,error:{},data:[]});// DLD Rent Transaction Data
const[tableRentData,setTableRentData]=(0,react.useState)({loading:false,error:{},data:[]});const[propertyCategories,setPropertyCategories]=(0,react.useState)({data:[],loading:false});const[propertyType,setPropertyType]=(0,react.useState)({data:[],loading:false});const[selectedFilters,setSelectedFilters]=(0,react.useState)({propertyCategory:"residential-for-rent",propertyType:"",beds:"",completionStatus:"",areaNames:[]});// checks if the property category is for rent or for sale
const isTypeSale=(0,react.useMemo)(()=>{const category=selectedFilters.propertyCategory;if(category==='commercial-for-rent'||category==='residential-for-rent'){return false;}return true;},[selectedFilters.propertyCategory]);const onSearch=event=>{const value=event.currentTarget.value;setSearchTerm(value);};const onLocationSearch=(0,react.useCallback)(()=>{if(debouncedSearchTerm){setLocations((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},locations),{},{loading:true}));locationModule.getAllRecords({name:debouncedSearchTerm}).then(res=>{var _res$data;const data=res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.data;const prevData=locations.data;// remove duplicates from the new data
const newValues=data===null||data===void 0?void 0:data.filter(item=>prevData===null||prevData===void 0?void 0:prevData.every(prevItem=>prevItem.id!==item.id));// add the new data to the previous data
setLocations({data:[...newValues,...prevData],loading:false});}).catch(err=>{var _err$response,_err$response$data;message/* default */.Ay.error(err===null||err===void 0?void 0:(_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message);setLocations((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},locations),{},{loading:false}));});}},[debouncedSearchTerm,locationModule]);const onSelected=event=>{const{name,value}=event===null||event===void 0?void 0:event.target;// set the selected value in the state 
setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{[name]:value}));};const getPropertyCategoriesData=(0,react.useCallback)(()=>{setPropertyCategories((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},propertyCategories),{},{loading:true}));setPropertyType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},propertyType),{},{loading:true}));// get property categories
propertyModule.getAllRecords().then(res=>{var _res$data2;setPropertyCategories({data:res===null||res===void 0?void 0:(_res$data2=res.data)===null||_res$data2===void 0?void 0:_res$data2.data,loading:false});}).catch(err=>{setPropertyCategories((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},propertyCategories),{},{loading:false}));});// get property types
propertyTypeModule.getAllRecords().then(res=>{var _res$data3;setPropertyType({data:res===null||res===void 0?void 0:(_res$data3=res.data)===null||_res$data3===void 0?void 0:_res$data3.data,loading:false});}).catch(err=>{setPropertyType((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},propertyType),{},{loading:false}));});},[propertyModule,propertyTypeModule,propertyCategories,propertyType]);// Get DLD Transaction Data
// const onGetDLDTransactionData = useCallback((query?: any) => {
//     dldTransactionModule.getDLDTransactions(query).then((res) => {
//         setTableData({
//             data: res.data?.data,
//             loading: false,
//             ...res.data
//         })
//     }).catch((error) => {
//         message.error(error?.response?.data?.message)
//         setTableData({
//             ...tableData,
//             loading: false
//         })
//     })
// }, [dldTransactionModule])
// Get DLD Rent Transaction Data
// const onGetDLDRentTransactionData = useCallback((query?: any) => {
//     dldRentTransactionModule.getDLDRentTransactions(query).then((res) => {
//         setTableRentData({
//             data: res.data?.data,
//             loading: false,
//             ...res.data
//         })
//     }).catch((error) => {
//         message.error(error?.response?.data?.message)
//         setTableRentData({
//             ...tableRentData,
//             loading: false
//         })
//     })
// }, [dldRentTransactionModule])
const onUpdate=(0,react.useCallback)(()=>{var _selectedFilters$area,_selectedFilters$area2;const category=selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.propertyCategory;if(category===""){setModuleData({data:[]});return message/* default */.Ay.error("Required: Please select a category");}setModuleData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},moduleData),{},{loading:true}));isTypeSale?setTableData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},tableData),{},{loading:true})):setTableRentData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},tableRentData),{},{loading:true}));const data={propertyCategory:category,propertyType:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.propertyType)||undefined,areaNames:(selectedFilters===null||selectedFilters===void 0?void 0:(_selectedFilters$area=selectedFilters.areaNames)===null||_selectedFilters$area===void 0?void 0:_selectedFilters$area.length)>0?selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.areaNames:undefined,beds:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.beds)||undefined,completionStatus:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.completionStatus)||undefined};// module.getAllRecords(data).then((res: any) => {
//     setModuleData({
//         data: res.data?.data,
//         loading: false,
//         ...res.data
//     })
// }).catch((error: any) => {
//     message.error(error?.response?.data?.message)
//     setModuleData({
//         ...moduleData,
//         loading: false
//     })
// })
const dldData={propertyCategory:category,propertyType:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.propertyType)||undefined,area:(selectedFilters===null||selectedFilters===void 0?void 0:(_selectedFilters$area2=selectedFilters.areaNames)===null||_selectedFilters$area2===void 0?void 0:_selectedFilters$area2.length)>0?selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.areaNames:undefined,beds:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.beds)||undefined,completionStatus:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.completionStatus)||undefined};// Get DLD Data
// isTypeSale ? onGetDLDTransactionData(dldData) : onGetDLDRentTransactionData(dldData)
},[selectedFilters,module,isTypeSale]);(0,react.useEffect)(()=>{getPropertyCategoriesData();onUpdate();},[]);const onPaginationChange=(0,react.useCallback)((page,pageSize)=>{var _selectedFilters$area3;setTableData((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},tableData),{},{loading:true}));const params={page:page,perPage:pageSize,propertyCategory:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.propertyCategory)||undefined,propertyType:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.propertyType)||undefined,area:(selectedFilters===null||selectedFilters===void 0?void 0:(_selectedFilters$area3=selectedFilters.areaNames)===null||_selectedFilters$area3===void 0?void 0:_selectedFilters$area3.length)>0?selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.areaNames:undefined,beds:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.beds)||undefined,completionStatus:(selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.completionStatus)||undefined};//isTypeSale ? onGetDLDTransactionData(params) : onGetDLDRentTransactionData(params)
},[tableData,selectedFilters,debouncedSearchTerm]);(0,react.useEffect)(()=>{onLocationSearch();},[onLocationSearch]);(0,react.useEffect)(()=>{if(reset){onUpdate();}// after 2 seconds set reset clicked state to false
const timer=setTimeout(()=>{setReset(false);},2000);return()=>clearTimeout(timer);},[reset,selectedFilters,onUpdate]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* PageHeader */.zY,{heading:"Price Finder",breadCrumbData:breadCrumbsData,filters:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Common_styles_module/* default */.A.filterWrapper,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"multiSelect",label:"Location",name:"areaNames",withSearch:true,options:locations===null||locations===void 0?void 0:(_locations$data=locations.data)===null||_locations$data===void 0?void 0:_locations$data.map(item=>{var _item$localization,_item$localization$;return{label:item===null||item===void 0?void 0:(_item$localization=item.localization)===null||_item$localization===void 0?void 0:(_item$localization$=_item$localization[0])===null||_item$localization$===void 0?void 0:_item$localization$.name,value:item.localization[0].name};}),onChange:value=>{setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{areaNames:value}));},onReset:()=>{setReset(true);setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{areaNames:[]}));// Reset search term
setSearchTerm("");},onUpdate:onUpdate// START: For search
,loading:locations.loading,searchTerm:searchTerm,onSearch:onSearch,selectedData:selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.areaNames,removeSelectedData:value=>{var _selectedFilters$area4;setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{areaNames:selectedFilters===null||selectedFilters===void 0?void 0:(_selectedFilters$area4=selectedFilters.areaNames)===null||_selectedFilters$area4===void 0?void 0:_selectedFilters$area4.filter(item=>item!==value)}));}// END: For search
}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Category",name:"propertyCategory",options:[],value:selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.propertyCategory,onChange:onSelected,onReset:()=>{setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{propertyCategory:""}));onUpdate();},onUpdate:onUpdate,defaultValue:propertyCategories!==null&&propertyCategories!==void 0&&propertyCategories.data?"residential-for-rent":"",canReset:false})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Property Type",name:"propertyType",options:propertyType===null||propertyType===void 0?void 0:(_propertyType$data=propertyType.data)===null||_propertyType$data===void 0?void 0:_propertyType$data.map(item=>({label:item.localization[0].title,value:item.slug})),value:selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.propertyType,onChange:onSelected,onReset:()=>{setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{propertyType:""}));onUpdate();},onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Bedrooms",options:Object.entries(propertyEnums/* Bedrooms */.Ww).filter(_ref=>{let[item]=_ref;return item!=="N/A";}).map(_ref2=>{let[key,value]=_ref2;return{label:value,value:value};}),value:selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.beds,name:"beds",onChange:onSelected,onReset:()=>{setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{beds:""}));onUpdate();},onUpdate:onUpdate})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* CustomFilter */.YH,{type:"radio",label:"Completion Status",options:Object.entries(propertyEnums/* CompletionStatus */.lC).map(_ref3=>{let[key,value]=_ref3;return{label:key,value:value};}),value:selectedFilters===null||selectedFilters===void 0?void 0:selectedFilters.completionStatus,name:"completionStatus",onChange:onSelected,onReset:()=>{setSelectedFilters((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},selectedFilters),{},{completionStatus:""}));onUpdate();},onUpdate:onUpdate})})]})}),moduleData!==null&&moduleData!==void 0&&moduleData.loading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeletons/* default */.A,{items:5,fullWidth:true}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(analytics,{data:moduleData===null||moduleData===void 0?void 0:moduleData.data,filters:selectedFilters}),/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:"color-dark-main font-size-md mb-0",children:"Transactions"}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent,{tableData:isTypeSale?tableData===null||tableData===void 0?void 0:tableData.data:tableRentData===null||tableRentData===void 0?void 0:tableRentData.data,tableLoading:isTypeSale?tableData===null||tableData===void 0?void 0:tableData.loading:tableRentData===null||tableRentData===void 0?void 0:tableRentData.loading,emptyText:/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.A,{className:"py-2",description:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"No Transactions Found"})}),isTypeSale:isTypeSale}),/*#__PURE__*/(0,jsx_runtime.jsx)(Atoms/* Pagination */.dK,{total:isTypeSale?tableData===null||tableData===void 0?void 0:(_tableData$meta=tableData.meta)===null||_tableData$meta===void 0?void 0:_tableData$meta.total:tableRentData===null||tableRentData===void 0?void 0:(_tableRentData$meta=tableRentData.meta)===null||_tableRentData$meta===void 0?void 0:_tableRentData$meta.total,current:isTypeSale?tableData===null||tableData===void 0?void 0:(_tableData$meta2=tableData.meta)===null||_tableData$meta2===void 0?void 0:_tableData$meta2.page:tableRentData===null||tableRentData===void 0?void 0:(_tableRentData$meta2=tableRentData.meta)===null||_tableRentData$meta2===void 0?void 0:_tableRentData$meta2.page,defaultPageSize:isTypeSale?tableData===null||tableData===void 0?void 0:(_tableData$meta3=tableData.meta)===null||_tableData$meta3===void 0?void 0:_tableData$meta3.perPage:tableRentData===null||tableRentData===void 0?void 0:(_tableRentData$meta3=tableRentData.meta)===null||_tableRentData$meta3===void 0?void 0:_tableRentData$meta3.perPage,pageSizeOptions:[10,20,50,100],onChange:onPaginationChange})]})]});}/* harmony default export */ const Dashboard_PriceFinder = (PriceFinder);

/***/ }),

/***/ 44137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ LocationModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class LocationModule{constructor(){this.endPoint="location";this.getAllRecords=queryData=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint,{params:queryData});};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id));};this.getAllRecordsByLocation=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/find-location-in-a-country"));};this.getAllRecordsByLocationId=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/searchLocation/").concat(id));};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data);};}}

/***/ }),

/***/ 90831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ PropertyCategoryModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
class PropertyCategoryModule{constructor(){this.endPoint="project-type";this.getAllRecords=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint);};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id);};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id);};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint,data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch(_services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* .BASE_URL */ .C+this.endPoint+"/"+id,data);};}}

/***/ }),

/***/ 51019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ PropertyTypeModule)
/* harmony export */ });
/* harmony import */ var _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83365);
/* harmony import */ var _Common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21073);
class PropertyTypeModule{constructor(){this.endPoint="property-type";this.getAllRecords=()=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(this.endPoint);};this.getRecordById=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get("".concat(this.endPoint,"/").concat(id,"?all=true"));};this.deleteRecord=id=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.delete("".concat(this.endPoint,"/").concat(id));};this.createRecord=data=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(this.endPoint+"/",data);};this.updateRecord=(data,id)=>{return _services_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.patch("".concat(this.endPoint,"/").concat(id),data,{headers:_Common_config__WEBPACK_IMPORTED_MODULE_1__/* .FormDataHeader */ .Y});};}}

/***/ }),

/***/ 57352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $J: () => (/* binding */ PropertyPriceType),
/* harmony export */   Ww: () => (/* binding */ Bedrooms),
/* harmony export */   lC: () => (/* binding */ CompletionStatus),
/* harmony export */   sf: () => (/* binding */ Bathrooms)
/* harmony export */ });
/* unused harmony exports FurnishType, Parking, ChequesCount, PropertyPriceTypeMap */
let FurnishType=/*#__PURE__*/function(FurnishType){FurnishType["furnished"]="furnished";FurnishType["unfurnished"]="unfurnished";FurnishType["partly-furnished"]="partly-furnished";return FurnishType;}({});let Bedrooms=/*#__PURE__*/function(Bedrooms){Bedrooms["Studio"]="studio";Bedrooms["_1"]="1";Bedrooms["_2"]="2";Bedrooms["_3"]="3";Bedrooms["_4"]="4";Bedrooms["_5"]="5";Bedrooms["_6"]="6";Bedrooms["_7"]="7";Bedrooms["_7+"]="7+";Bedrooms["N/A"]="N/A";return Bedrooms;}({});let Bathrooms=/*#__PURE__*/function(Bathrooms){Bathrooms["None"]="none";Bathrooms["_1"]="1";Bathrooms["_2"]="2";Bathrooms["_3"]="3";Bathrooms["_4"]="4";Bathrooms["_5"]="5";Bathrooms["_6"]="6";Bathrooms["_7"]="7";Bathrooms["_7+"]="7+";Bathrooms["N/A"]="N/A";return Bathrooms;}({});let Parking=/*#__PURE__*/function(Parking){Parking["none"]="none";Parking["_1"]="1";Parking["_2"]="2";Parking["_3"]="3";Parking["_4"]="4";Parking["_5"]="5";Parking["_6"]="6";Parking["_7"]="7";Parking["_8"]="8";Parking["_9"]="9";Parking["_10"]="10";Parking["_10+"]="10+";return Parking;}({});let CompletionStatus=/*#__PURE__*/function(CompletionStatus){CompletionStatus["completed"]="completed";CompletionStatus["off-plan"]="off-plan";return CompletionStatus;}({});let ChequesCount=/*#__PURE__*/function(ChequesCount){ChequesCount["1 cheque"]="1";ChequesCount["upto 2 cheques"]="2";ChequesCount["upto 3 cheques"]="3";ChequesCount["upto 4 cheques"]="4";ChequesCount["upto 5 cheques"]="5";ChequesCount["upto 6 cheques"]="6";ChequesCount["upto 12 cheques"]="12";return ChequesCount;}({});let PropertyPriceType=/*#__PURE__*/function(PropertyPriceType){PropertyPriceType["yearly"]="yearly";PropertyPriceType["monthly"]="monthly";PropertyPriceType["weekly"]="weekly";PropertyPriceType["daily"]="daily";return PropertyPriceType;}({});// "fixed" = "fixed",
let PropertyPriceTypeMap=/*#__PURE__*/function(PropertyPriceTypeMap){PropertyPriceTypeMap["yearly"]="yearlyPrice";PropertyPriceTypeMap["monthly"]="monthlyPrice";PropertyPriceTypeMap["weekly"]="weeklyPrice";PropertyPriceTypeMap["daily"]="dailyPrice";PropertyPriceTypeMap["fixed"]="fixedPrice";return PropertyPriceTypeMap;}({});

/***/ })

}]);