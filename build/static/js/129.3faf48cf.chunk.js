(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[129],{1967:function(e,a,t){"use strict";t.r(a),t.d(a,"AddPlans",(function(){return j}));var n=t(51),s=t(13),l=t(14),i=t(16),r=t(15),o=t(0),c=t.n(o),u=t(1268),d=t(1266),f=t(1267),p=t(177),m=t(1271),b=t(804),h=t(802),g=t(799),v=t(21),O=t(40),y=t.n(O),j=function(e){Object(i.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),y.a.post("http://3.108.185.7/nodejs/api/admin/addplan",l.state).then((function(e){console.log(e),l.props.history.push("/app/subPlan/SubPlanVideos")})).catch((function(e){console.log(e)}))},l.state={_id:"",video_link:"",associated_plan:""},l}return Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(f.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Subscription Plan")),c.a.createElement(f.a,null,c.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return v.a.push("/app/subplan/SubPlanVideos")}},"Back"))),c.a.createElement(m.a,null,c.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(d.a,{className:"mb-2"},c.a.createElement(f.a,{lg:"6",md:"6",className:"mb-2"},c.a.createElement(h.a,null,"ID "),c.a.createElement(g.a,{type:"text",name:"_id",value:this.state._id,onChange:this.changeHandler})),c.a.createElement(f.a,{lg:"6",md:"6",className:"mb-2"},c.a.createElement(h.a,null,"Video Link "),c.a.createElement(g.a,{type:"text",name:"video_link",value:this.state.video_link,onChange:this.changeHandler})),c.a.createElement(f.a,{lg:"6",md:"6",className:"mb-2"},c.a.createElement(h.a,null,"Associated Plan "),c.a.createElement(g.a,{type:"text",name:"associated_plan",value:this.state.associated_plan,onChange:this.changeHandler}))),c.a.createElement(d.a,null,c.a.createElement(p.a.Ripple,{className:"mr-1 mb-1",type:"submit",color:"primary"},"Add Plans"))))))}}]),t}(o.Component);a.default=j},799:function(e,a,t){"use strict";var n=t(5),s=t(7),l=t(11),i=t(12),r=t(0),o=t.n(r),c=t(1),u=t.n(c),d=t(4),f=t.n(d),p=t(3),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,i=e.bsSize,r=e.valid,c=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,m),v=["radio","checkbox"].indexOf(l)>-1,O=new RegExp("\\D","g"),y=u||("select"===l||"textarea"===l?l:"input"),j="form-control";b?(j+="-plaintext",y=u||"input"):"file"===l?j+="-file":"range"===l?j+="-range":v&&(j=d?null:"form-check-input"),g.size&&O.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var E=Object(p.mapToCssModules)(f()(a,c&&"is-invalid",r&&"is-valid",!!i&&"form-control-"+i,j),t);return("input"===y||u&&"function"===typeof u)&&(g.type=l),g.children&&!b&&"select"!==l&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(y,Object(n.a)({},g,{ref:h,className:E,"aria-invalid":c}))},a}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},802:function(e,a,t){"use strict";var n=t(5),s=t(7),l=t(0),i=t.n(l),r=t(1),o=t.n(r),c=t(4),u=t.n(c),d=t(3),f=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),m=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,l=e.hidden,r=e.widths,o=e.tag,c=e.check,p=e.size,m=e.for,b=Object(s.a)(e,f),h=[];r.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var l,i=!n;if(Object(d.isObject)(s)){var r,o=i?"-":"-"+a+"-";l=g(i,a,s.size),h.push(Object(d.mapToCssModules)(u()(((r={})[l]=s.size||""===s.size,r["order"+o+s.order]=s.order||0===s.order,r["offset"+o+s.offset]=s.offset||0===s.offset,r))),t)}else l=g(i,a,s),h.push(l)}}));var v=Object(d.mapToCssModules)(u()(a,!!l&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return i.a.createElement(o,Object(n.a)({htmlFor:m},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v},804:function(e,a,t){"use strict";var n=t(5),s=t(7),l=t(11),i=t(12),r=t(0),o=t.n(r),c=t(1),u=t.n(c),d=t(4),f=t.n(d),p=t(3),m=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,i=e.tag,r=e.innerRef,c=Object(s.a)(e,m),u=Object(p.mapToCssModules)(f()(a,!!l&&"form-inline"),t);return o.a.createElement(i,Object(n.a)({},c,{ref:r,className:u}))},a}(r.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h}}]);
//# sourceMappingURL=129.3faf48cf.chunk.js.map