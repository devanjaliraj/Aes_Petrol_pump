(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[80],{1999:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return _}));var n=t(51),s=t(13),l=t(14),o=t(66),i=t(16),c=t(15),r=t(0),m=t.n(r),d=t(1267),u=t(1268),p=t(1265),f=t(1266),h=t(1269),b=t(177),g=t(1272),v=t(801),y=t(804),E=t(799),O=t(813),j=t(785),N=t(800),C=t(21),_=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).getState=function(){fetch("/admin/allstate",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).then((function(e){l.setState({instate:e.data}),console.log("state",e)}))},l.handleChange=function(e){l.setState({state:e.target.value}),fetch("/admin/allcity",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({state:e.target.value})}).then((function(e){return e.json()})).then((function(e){l.setState({city:e.data[0].districts})}))},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var a=l.props.match.params.id;N.a.post("/dealer/addeditbasicdealershipform/".concat(a),l.state).then((function(e){console.log(e),l.props.history.push("/app/ro-configuration/RoConfigurationList")})).catch((function(e){console.log(e.response)}))},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.state={dealer_name:"",mobile:"",email:"",master_oil_company:"",location:"",omc_customer_code:"",district:"",districts:[],state:"",userverified:""},l.state={mocN:[],instate:[],city:[]},l.submitHandler=l.submitHandler.bind(Object(o.a)(l)),l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getState(),N.a.get("/dealer/allMasterOilCompany").then((function(a){console.log(a.data.data),e.setState({mocN:a.data.data})})).catch((function(e){console.log(e)}));var a=this.props.match.params.id;N.a.get("/dealer/viewonedealershipform/".concat(a)).then((function(a){console.log(a),e.setState({dealer_name:a.data.data.dealer_name,mobile:a.data.data.mobile,email:a.data.data.email,master_oil_company:a.data.data.master_oil_company,location:a.data.data.location,omc_customer_code:a.data.data.omc_customer_code,state:a.data.data.state,district:a.data.data.district,districts:a.data.data.districts})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a=this.state,t=a.instate,n=a.city;return m.a.createElement("div",null,m.a.createElement(d.a,null,m.a.createElement(u.a,{sm:"12"},m.a.createElement("div",null,m.a.createElement(p.a,{listTag:"div"},m.a.createElement(f.a,{href:"/analyticsDashboard",tag:"a"},"Home"),m.a.createElement(f.a,{active:!0},"Edit Basic Details"))))),m.a.createElement(h.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(u.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Basic Details")),m.a.createElement(u.a,null,m.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return C.a.push("/app/ro-configuration/RoConfigurationList")}},"Back"))),m.a.createElement(g.a,null,m.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(d.a,null,m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(y.a,null,"Name Of Dealer"),m.a.createElement(E.a,{type:"text",name:"dealer_name",value:this.state.dealer_name,onChange:this.changeHandler})),m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(y.a,null,"Mobile No."),m.a.createElement(E.a,{type:"number",name:"mobile",value:this.state.mobile,onChange:this.changeHandler})),m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(y.a,null,"Email ID"),m.a.createElement(E.a,{type:"email",name:"email",value:this.state.email,onChange:this.changeHandler})),m.a.createElement(u.a,{md:"6",sm:"12"},m.a.createElement(O.a,null,m.a.createElement(y.a,null,"Master Oil Company"),m.a.createElement(j.a,{type:"select",name:"master_oil_company",value:this.state.master_oil_company,onChange:this.changeHandler},null===(e=this.state.mocN)||void 0===e?void 0:e.map((function(e){return m.a.createElement("option",{value:e._id,key:e._id},e.name)}))))),m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(y.a,null,"Location"),m.a.createElement(E.a,{type:"text",name:"location",value:this.state.location,onChange:this.changeHandler})),m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(y.a,null,"OMC Customer Code"),m.a.createElement(E.a,{type:"text",name:"omc_customer_code",value:this.state.omc_customer_code,onChange:this.changeHandler})),m.a.createElement(u.a,{md:"6",sm:"12"},m.a.createElement(y.a,null,"State"),m.a.createElement(j.a,{type:"select",name:"state",value:this.state.state,onChange:this.handleChange},t.map((function(e){return m.a.createElement("option",{value:e.state},e.state)})))),m.a.createElement(u.a,{md:"6",sm:"12"},m.a.createElement(y.a,null,"District "),m.a.createElement(j.a,{type:"select",name:"district",value:this.state.district,onChange:this.changeHandler},n.map((function(e){return m.a.createElement("option",{value:e},e)}))))),m.a.createElement(d.a,null,m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(r.Component)},799:function(e,a,t){"use strict";var n=t(5),s=t(7),l=t(11),o=t(12),i=t(0),c=t.n(i),r=t(1),m=t.n(r),d=t(4),u=t.n(d),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,o=e.bsSize,i=e.valid,r=e.invalid,m=e.tag,d=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(l)>-1,y=new RegExp("\\D","g"),E=m||("select"===l||"textarea"===l?l:"input"),O="form-control";h?(O+="-plaintext",E=m||"input"):"file"===l?O+="-file":"range"===l?O+="-range":v&&(O=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var j=Object(p.mapToCssModules)(u()(a,r&&"is-invalid",i&&"is-valid",!!o&&"form-control-"+o,O),t);return("input"===E||m&&"function"===typeof m)&&(g.type=l),g.children&&!h&&"select"!==l&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(E,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":r}))},a}(c.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},800:function(e,a,t){"use strict";var n=t(40),s=t.n(n).a.create({baseURL:"http://3.108.185.7/nodejs/api"});a.a=s},801:function(e,a,t){"use strict";var n=t(5),s=t(7),l=t(11),o=t(12),i=t(0),c=t.n(i),r=t(1),m=t.n(r),d=t(4),u=t.n(d),p=t(3),f=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,o=e.tag,i=e.innerRef,r=Object(s.a)(e,f),m=Object(p.mapToCssModules)(u()(a,!!l&&"form-inline"),t);return c.a.createElement(o,Object(n.a)({},r,{ref:i,className:m}))},a}(i.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b},804:function(e,a,t){"use strict";var n=t(5),s=t(7),l=t(0),o=t.n(l),i=t(1),c=t.n(i),r=t(4),m=t.n(r),d=t(3),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,l=e.hidden,i=e.widths,c=e.tag,r=e.check,p=e.size,f=e.for,h=Object(s.a)(e,u),b=[];i.forEach((function(a,n){var s=e[a];if(delete h[a],s||""===s){var l,o=!n;if(Object(d.isObject)(s)){var i,c=o?"-":"-"+a+"-";l=g(o,a,s.size),b.push(Object(d.mapToCssModules)(m()(((i={})[l]=s.size||""===s.size,i["order"+c+s.order]=s.order||0===s.order,i["offset"+c+s.offset]=s.offset||0===s.offset,i))),t)}else l=g(o,a,s),b.push(l)}}));var v=Object(d.mapToCssModules)(m()(a,!!l&&"sr-only",!!r&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return o.a.createElement(c,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=b,a.a=v},813:function(e,a,t){"use strict";var n=t(5),s=t(7),l=t(0),o=t.n(l),i=t(1),c=t.n(i),r=t(4),m=t.n(r),d=t(3),u=["className","cssModule","row","disabled","check","inline","tag"],p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,l=e.row,i=e.disabled,c=e.check,r=e.inline,p=e.tag,f=Object(s.a)(e,u),h=Object(d.mapToCssModules)(m()(a,!!l&&"row",c?"form-check":"form-group",!(!c||!r)&&"form-check-inline",!(!c||!i)&&"disabled"),t);return"fieldset"===p&&(f.disabled=i),o.a.createElement(p,Object(n.a)({},f,{className:h}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f}}]);
//# sourceMappingURL=80.e9bf98f1.chunk.js.map