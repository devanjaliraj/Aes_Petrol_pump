(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[86],{2019:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t(838),r=t(50),l=t(13),s=t(14),o=t(16),i=t(15),c=t(0),d=t.n(c),m=t(1261),u=t(1259),p=t(1260),h=t(175),f=t(1264),g=t(803),b=t(806),y=t(802),v=t(797),E=t(298),_=t(56),N=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(r.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.props.match.params,s.state);var a=new FormData;a.append("maneger_name",s.state.maneger_name),a.append("addres",s.state.addres),a.append("mobile",s.state.mobile),a.append("joining_date",s.state.joining_date.toString()),a.append("adhar_number",s.state.adhar_number),a.append("pan_number",s.state.pan_number),a.append("date_of_brith",s.state.date_of_brith.toString()),a.append("salary_decieded",s.state.salary_decieded),a.append("salary_date",s.state.salary_date.toString()),a.append("status",s.state.status),null!==s.state.selectedFile&&(a.append("adharimg",s.state.selectedFile,s.state.selectedName),a.append("panImg",s.state.selectedFile,s.state.selectedName),a.append("photograh",s.state.selectedFile,s.state.selectedName));var t,r=Object(n.a)(a.values());try{for(r.s();!(t=r.n()).done;){var l=t.value;console.log(l)}}catch(m){r.e(m)}finally{r.f()}var o,i=Object(n.a)(a.keys());try{for(i.s();!(o=i.n()).done;){var c=o.value;console.log(c)}}catch(m){i.e(m)}finally{i.f()}var d=s.props.match.params.id;v.a.post("/dealer/updateonemanager/".concat(d),a).then((function(e){console.log(e),s.props.history.push("/app/staffEnrollment/managerList/".concat(s.state.dealer_id._id))})).catch((function(e){console.log(e)}))},s.download=function(e){console.log(e.target.href),fetch(e.target.href,{method:"GET",headers:{}}).then((function(e){e.arrayBuffer().then((function(e){var a=window.URL.createObjectURL(new Blob([e])),t=document.createElement("a");t.href=a,t.setAttribute("download","image.png"),document.body.appendChild(t),t.click()}))})).catch((function(e){console.log(e)}))},s.state={dealer_id:"",addres:"",adhar_number:"",adharimg:"",date_of_brith:"",joining_date:"",maneger_name:"",mobile:"",panImg:"",pan_number:"",photograh:"",salary_date:"",salary_decieded:"",status:"",selectedFile:null,selectedName:""},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;console.log(a),v.a.get("/dealer/getonemanager/".concat(a)).then((function(a){console.log(a),e.setState({dealer_id:a.data.data.dealer_id,maneger_name:a.data.data.maneger_name,addres:a.data.data.addres,mobile:a.data.data.mobile,joining_date:a.data.data.joining_date.split(","),adhar_number:a.data.data.adhar_number,adharimg:a.data.data.adharimg,pan_number:a.data.data.pan_number,panImg:a.data.data.panImg,photograh:a.data.data.photograh,date_of_brith:a.data.data.date_of_brith.split(","),salary_decieded:a.data.data.salary_decieded,salary_date:a.data.data.salary_date.split(","),status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement(m.a,null,d.a.createElement(u.a,{className:"m-1"},d.a.createElement(p.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Update Retail Selling Price")),d.a.createElement(p.a,null,d.a.createElement(_.b,{render:function(a){var t=a.history;return d.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/staffEnrollment/managerList/".concat(e.state.dealer_id._id))}},"Back")}}))),d.a.createElement(f.a,null,d.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(u.a,null,d.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(b.a,null,"Name"),d.a.createElement(y.a,{required:!0,type:"text",name:"maneger_name",value:this.state.maneger_name,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(b.a,null,"Address"),d.a.createElement(y.a,{required:!0,type:"text",name:"addres",placeholder:"Enter Address",value:this.state.addres,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"0",sm:"6"},d.a.createElement("a",{href:this.state.photograh,download:!0,target:"blank",onClick:function(a){return e.download(a)}},d.a.createElement(E.a,{className:"mr-50",size:"25px",color:"blue"}),"download Photograph")),d.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(b.a,null,"Mobile"),d.a.createElement(y.a,{required:!0,type:"number",name:"mobile",placeholder:"Enter Name",value:this.state.mobile,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(b.a,null,"Aadhar Number"),d.a.createElement(y.a,{required:!0,type:"number",name:"adhar_number",placeholder:"Enter Aadhar No.",value:this.state.adhar_number,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"0",sm:"6"},d.a.createElement("a",{href:this.state.adharimg,download:!0,target:"blank",onClick:function(a){return e.download(a)}},d.a.createElement(E.a,{className:"mr-50",size:"25px",color:"blue"}),"download Adhar Image")),d.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(b.a,null,"Pan Number"),d.a.createElement(y.a,{required:!0,type:"text",name:"pan_number",placeholder:"Enter Pan No.",value:this.state.pan_number,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"0",sm:"6",className:"mb-2"},d.a.createElement(b.a,null,"Pan Image"),d.a.createElement(y.a,{disabled:!0,type:"text",name:"panImg",value:this.state.panImg,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(b.a,null,"Joining Date"),d.a.createElement(y.a,{required:!0,type:"date",name:"joining_date",placeholder:"Enter Joining Date",value:this.state.joining_date,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(b.a,null,"Date of Brith"),d.a.createElement(y.a,{required:!0,type:"date",name:"date_of_brith",placeholder:"Enter DOB",value:this.state.date_of_brith,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(b.a,null,"Salary Decieded"),d.a.createElement(y.a,{required:!0,type:"text",name:"salary_decieded",placeholder:"Enter Name",value:this.state.salary_decieded,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(b.a,null,"Salary Date"),d.a.createElement(y.a,{required:!0,type:"date",name:"salary_date",placeholder:"Enter Name",value:this.state.salary_date,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},d.a.createElement(b.a,{className:"mb-1"},"Status"),d.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},d.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),d.a.createElement("span",{style:{marginRight:"20px"}},"Active"),d.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),d.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),d.a.createElement(u.a,null,d.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update Manager")))))))}}]),t}(c.Component)},797:function(e,a,t){"use strict";var n=t(40),r=t.n(n).a.create({baseURL:"http://3.108.185.7/nodejs/api"});a.a=r},802:function(e,a,t){"use strict";var n=t(5),r=t(7),l=t(11),s=t(12),o=t(0),i=t.n(o),c=t(1),d=t.n(c),m=t(4),u=t.n(m),p=t(3),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],f={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,s=e.bsSize,o=e.valid,c=e.invalid,d=e.tag,m=e.addon,f=e.plaintext,g=e.innerRef,b=Object(r.a)(e,h),y=["radio","checkbox"].indexOf(l)>-1,v=new RegExp("\\D","g"),E=d||("select"===l||"textarea"===l?l:"input"),_="form-control";f?(_+="-plaintext",E=d||"input"):"file"===l?_+="-file":"range"===l?_+="-range":y&&(_=m?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=b.size,delete b.size);var N=Object(p.mapToCssModules)(u()(a,c&&"is-invalid",o&&"is-valid",!!s&&"form-control-"+s,_),t);return("input"===E||d&&"function"===typeof d)&&(b.type=l),b.children&&!f&&"select"!==l&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),i.a.createElement(E,Object(n.a)({},b,{ref:g,className:N,"aria-invalid":c}))},a}(i.a.Component);g.propTypes=f,g.defaultProps={type:"text"},a.a=g},803:function(e,a,t){"use strict";var n=t(5),r=t(7),l=t(11),s=t(12),o=t(0),i=t.n(o),c=t(1),d=t.n(c),m=t(4),u=t.n(m),p=t(3),h=["className","cssModule","inline","tag","innerRef"],f={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,s=e.tag,o=e.innerRef,c=Object(r.a)(e,h),d=Object(p.mapToCssModules)(u()(a,!!l&&"form-inline"),t);return i.a.createElement(s,Object(n.a)({},c,{ref:o,className:d}))},a}(o.Component);g.propTypes=f,g.defaultProps={tag:"form"},a.a=g},806:function(e,a,t){"use strict";var n=t(5),r=t(7),l=t(0),s=t.n(l),o=t(1),i=t.n(o),c=t(4),d=t.n(c),m=t(3),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=i.a.oneOfType([i.a.number,i.a.string]),h=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:p,order:p,offset:p})]),f={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:i.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,l=e.hidden,o=e.widths,i=e.tag,c=e.check,p=e.size,h=e.for,f=Object(r.a)(e,u),g=[];o.forEach((function(a,n){var r=e[a];if(delete f[a],r||""===r){var l,s=!n;if(Object(m.isObject)(r)){var o,i=s?"-":"-"+a+"-";l=b(s,a,r.size),g.push(Object(m.mapToCssModules)(d()(((o={})[l]=r.size||""===r.size,o["order"+i+r.order]=r.order||0===r.order,o["offset"+i+r.offset]=r.offset||0===r.offset,o))),t)}else l=b(s,a,r),g.push(l)}}));var y=Object(m.mapToCssModules)(d()(a,!!l&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),t);return s.a.createElement(i,Object(n.a)({htmlFor:h},f,{className:y}))};y.propTypes=f,y.defaultProps=g,a.a=y},838:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(92);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l,s=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,l=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw l}}}}}}]);
//# sourceMappingURL=86.0271599e.chunk.js.map