(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[189],{1973:function(e,a,t){"use strict";t.r(a);var n=t(73),r=t.n(n),i=t(119),l=t(13),c=t(14),o=t(16),s=t(15),u=t(0),d=t.n(u),m=t(1269),g=t(1272),p=t(791),f=t(795),h=t(792),v=t(790),S=t(799),w=t(177),E=t(806),z=t(171),b=t(302),P=t(437),y=t(260),C=t(40),k=t.n(C),N=(t(807),t(21)),A=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={rowData:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Concern",field:"concern",width:500,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.concern))}},{headerName:"Remark",field:"remark",cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.remark))},width:505},{headerName:"Actions",field:"sortorder",width:150,pinned:window.innerWidth>992&&"right",cellRendererFramework:function(a){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(b.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return N.a.push("/app/facilityManagement/raiseConcernToAESForm/".concat(a.data._id))}}),d.a.createElement(P.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("http://3.108.185.7/nodejs/api/dealer/allraiseConcern").then((function(a){var t=a.data.data;JSON.stringify(t),e.setState({rowData:t})}))}},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,k.a.get("http://3.108.185.7/nodejs/api/dealer/deletelubricantsales/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return d.a.createElement(d.a.Fragment,null,d.a.createElement(m.a,{className:"overflow-hidden agGrid-card"},d.a.createElement(g.a,{className:"py-0"},null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("h1",null,"Raise Concern To AES List"),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(p.a,{className:"p-1 ag-dropdown"},d.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(y.a,{className:"ml-50",size:15})),d.a.createElement(h.a,{right:!0},d.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(S.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(w.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(z.a.Consumer,null,(function(a){return d.a.createElement(E.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(d.a.Component);a.default=A}}]);
//# sourceMappingURL=189.a84c0601.chunk.js.map