(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[175],{1977:function(e,a,t){"use strict";t.r(a);var n=t(73),r=t.n(n),i=t(119),l=t(13),c=t(14),o=t(16),s=t(15),d=t(0),u=t.n(d),m=t(1268),p=t(1271),g=t(791),f=t(795),h=t(792),v=t(790),w=t(799),E=t(177),S=t(40),b=t.n(S),y=t(21),z=t(807),k=t(171),N=t(302),P=t(437),x=t(260),D=(t(808),t(797)),A=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Dealer Name",field:"dealer_name1.dealer_name",width:150,pinned:window.innerWidth>992&&"left",cellRendererFramework:function(e){var a;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===(a=e.data.dealer_name1)||void 0===a?void 0:a.dealer_name))}},{headerName:"Email",field:"dealer_name1.email",width:150,pinned:window.innerWidth>992&&"left",cellRendererFramework:function(e){var a;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===(a=e.data.dealer_name1)||void 0===a?void 0:a.email))}},{headerName:"Select Bank",field:"select_bank.name_of_bank",width:140,cellRendererFramework:function(e){var a;return u.a.createElement("div",{className:"d-flex justify-content-center"},u.a.createElement("span",null,null===(a=e.data.select_bank)||void 0===a?void 0:a.name_of_bank))}},{headerName:"Select Mode",field:"select_mode.mode",width:140,cellRendererFramework:function(e){var a;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===(a=e.data.select_mode)||void 0===a?void 0:a.mode))}},{headerName:"Settlement Day",field:"settlement_day",width:140,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.settlement_day))}},{headerName:"Actions",field:"sortorder",width:140,cellRendererFramework:function(a){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(N.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return y.a.push("/app/ro-configuration/paymentModeAvalable/".concat(a.data._id))}}),u.a.createElement(P.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://3.108.185.7/nodejs/api/dealer/allpayment").then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,b.a.get("http://3.108.185.7/nodejs/api/dealer/deletepayment/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return u.a.createElement(u.a.Fragment,null,u.a.createElement(D.a,{breadCrumbTitle:"Payment Mode List"}),u.a.createElement(m.a,{className:"overflow-hidden agGrid-card"},u.a.createElement(p.a,{className:"py-0"},null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(g.a,{className:"p-1 ag-dropdown"},u.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(x.a,{className:"ml-50",size:15})),u.a.createElement(h.a,{right:!0},u.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(w.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(E.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(k.a.Consumer,null,(function(a){return u.a.createElement(z.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(u.a.Component);a.default=A}}]);
//# sourceMappingURL=175.03592b38.chunk.js.map