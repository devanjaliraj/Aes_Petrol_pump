(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[127],{1989:function(e,t,a){"use strict";a.r(t);var n=a(837),r=a(51),i=a(13),s=a(14),o=a(16),l=a(15),c=a(0),m=a.n(c),u=a(1118),d=a(1119),p=a(1120),f=a(171),h=a(1121),b=a(794),g=a(1116),E=a(1117),y=a(793),v=a(297),D=a(561),R=a(56),_=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler=function(e){s.setState(Object(r.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.props.match.params,s.state);var t=new FormData;t.append("Equipment",s.state.Equipment),t.append("Due_Date",s.state.Due_Date.toString()),t.append("Remarks",s.state.Remarks),t.append("Fire_Equipment",s.state.Fire_Equipment),t.append("Due_Date2",s.state.Due_Date2.toString()),t.append("Remarks2",s.state.Remarks2),null!==s.state.selectedFile&&(t.append("Uplaod_Document",s.state.selectedFile,s.state.selectedName),t.append("Upload_Fire_Equipment",s.state.selectedFile,s.state.selectedName));var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var i=a.value;console.log(i)}}catch(u){r.e(u)}finally{r.f()}var o,l=Object(n.a)(t.keys());try{for(l.s();!(o=l.n()).done;){var c=o.value;console.log(c)}}catch(u){l.e(u)}finally{l.f()}var m=s.props.match.params.id;D.a.post("/dealer/updateequipment/".concat(m),t).then((function(e){console.log(e),s.props.history.push("/app/facilityManagement/otherEquipmentList")})).catch((function(e){console.log(e)}))},s.download=function(e){console.log(e.target.href),fetch(e.target.href,{method:"GET",headers:{}}).then((function(e){e.arrayBuffer().then((function(e){var t=window.URL.createObjectURL(new Blob([e])),a=document.createElement("a");a.href=t,a.setAttribute("download","image.png"),document.body.appendChild(a),a.click()}))})).catch((function(e){console.log(e)}))},s.state={Equipment:"",Due_Date:"",Uplaod_Document:"",Remarks:"",Fire_Equipment:"",Upload_Fire_Equipment:"",Due_Date2:"",Remarks2:"",selectedFile:null,selectedName:""},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;D.a.get("/dealer/getoneequipment/".concat(t)).then((function(t){e.setState({Equipment:t.data.data.Equipment,Due_Date:t.data.data.Due_Date,Uplaod_Document:t.data.data.Uplaod_Document,Remarks:t.data.data.Remarks,Fire_Equipment:t.data.data.Fire_Equipment,Upload_Fire_Equipment:t.data.data.Upload_Fire_Equipment,Due_Date2:t.data.data.Due_Date2,Remarks2:t.data.data.Remarks2})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(p.a,null,"Other Equipment"),m.a.createElement(R.b,{render:function(e){var t=e.history;return m.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/facilityManagement/otherEquipmentList")}},"Back")}})),m.a.createElement(h.a,null,m.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(g.a,null,m.a.createElement(E.a,{md:"6",sm:"12"},m.a.createElement("h5",{className:"my-1 text-bold-600"},"Equipment"),m.a.createElement(y.a,{type:"text",name:"Equipment",value:this.state.Equipment.nature,onChange:this.changeHandler})),m.a.createElement(E.a,{md:"6",sm:"12"},m.a.createElement("h5",{className:"my-1 text-bold-600"},"Due Date-1"),m.a.createElement(y.a,{type:"date",name:"Due_Date",value:this.state.Due_Date,onChange:this.changeHandler})),m.a.createElement(E.a,{md:"6",sm:"12"},m.a.createElement("h5",{className:"my-2 text-bold-600"},"Uploaded Document"),m.a.createElement("a",{href:this.state.Uplaod_Document,download:!0,target:"blank",onClick:function(t){return e.download(t)},className:"mb-3 p-1 rounded bg-light"},m.a.createElement(v.a,{className:"mr-50",size:"25px",color:"blue"}),"View/Download Document")),m.a.createElement(E.a,{md:"6",sm:"12"},m.a.createElement("h5",{className:"my-1 text-bold-600"},"Remarks-1"),m.a.createElement(y.a,{type:"text",name:"Remarks",value:this.state.Remarks,onChange:this.changeHandler})),m.a.createElement(E.a,{md:"6",sm:"12"},m.a.createElement("h5",{className:"my-1 text-bold-600"},"Fire Equipment"),m.a.createElement(y.a,{type:"text",name:"Fire_Equipment",value:this.state.Fire_Equipment,onChange:this.changeHandler})),m.a.createElement(E.a,{md:"6",sm:"12"},m.a.createElement("h5",{className:"my-1 text-bold-600"},"Due Date-2"),m.a.createElement(y.a,{type:"date",name:"Due_Date2",value:this.state.Due_Date2,onChange:this.changeHandler})),m.a.createElement(E.a,{md:"6",sm:"12"},m.a.createElement("h5",{className:"my-2 text-bold-600"},"Uploaded Fire Equipment"),m.a.createElement("a",{href:this.state.Upload_Fire_Equipment,download:!0,target:"blank",onClick:function(t){return e.download(t)},className:"mb-3 p-1 rounded bg-light"},m.a.createElement(v.a,{className:"mr-50",size:"25px",color:"blue"}),"View/Download Fire Equipment")),m.a.createElement(E.a,{md:"6",sm:"12"},m.a.createElement("h5",{className:"my-1 text-bold-600"},"Remarks-2"),m.a.createElement(y.a,{type:"text",name:"Remarks2",value:this.state.Remarks2,onChange:this.changeHandler})),m.a.createElement(E.a,{lg:"12",md:"12",sm:"12",className:"mt-5"},m.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit"))))))}}]),a}(m.a.Component);t.default=_},793:function(e,t,a){"use strict";var n=a(5),r=a(9),i=a(11),s=a(12),o=a(0),l=a.n(o),c=a(1),m=a.n(c),u=a(4),d=a.n(u),p=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,s=e.bsSize,o=e.valid,c=e.invalid,m=e.tag,u=e.addon,h=e.plaintext,b=e.innerRef,g=Object(r.a)(e,f),E=["radio","checkbox"].indexOf(i)>-1,y=new RegExp("\\D","g"),v=m||("select"===i||"textarea"===i?i:"input"),D="form-control";h?(D+="-plaintext",v=m||"input"):"file"===i?D+="-file":"range"===i?D+="-range":E&&(D=u?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=g.size,delete g.size);var R=Object(p.mapToCssModules)(d()(t,c&&"is-invalid",o&&"is-valid",!!s&&"form-control-"+s,D),a);return("input"===v||m&&"function"===typeof m)&&(g.type=i),g.children&&!h&&"select"!==i&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),l.a.createElement(v,Object(n.a)({},g,{ref:b,className:R,"aria-invalid":c}))},t}(l.a.Component);b.propTypes=h,b.defaultProps={type:"text"},t.a=b},794:function(e,t,a){"use strict";var n=a(5),r=a(9),i=a(11),s=a(12),o=a(0),l=a.n(o),c=a(1),m=a.n(c),u=a(4),d=a.n(u),p=a(3),f=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.submit=a.submit.bind(Object(i.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.inline,s=e.tag,o=e.innerRef,c=Object(r.a)(e,f),m=Object(p.mapToCssModules)(d()(t,!!i&&"form-inline"),a);return l.a.createElement(s,Object(n.a)({},c,{ref:o,className:m}))},t}(o.Component);b.propTypes=h,b.defaultProps={tag:"form"},t.a=b},837:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(92);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,s=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw i}}}}}}]);
//# sourceMappingURL=127.c501ab47.chunk.js.map