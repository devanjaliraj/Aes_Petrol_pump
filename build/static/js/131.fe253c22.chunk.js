(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[131],{1969:function(e,a,t){"use strict";t.r(a),t.d(a,"AddPlans",(function(){return y}));var n=t(51),s=t(13),i=t(14),r=t(16),l=t(15),o=t(0),c=t.n(o),u=t(1268),d=t(1266),f=t(1267),p=t(177),m=t(1271),b=t(801),h=t(803),g=t(799),v=t(21),O=t(40),j=t.n(O),y=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(e){var i;return Object(s.a)(this,t),(i=a.call(this,e)).changeHandler1=function(e){i.setState({status:e.target.value})},i.changeHandler=function(e){i.setState(Object(n.a)({},e.target.name,e.target.value))},i.submitHandler=function(e){e.preventDefault(),j.a.post("http://3.108.185.7/nodejs/api/admin/addplan",i.state).then((function(e){console.log(e),i.props.history.push("/app/subPlan/SubPlanVideos")})).catch((function(e){console.log(e)}))},i.state={_id:"",video_link:"",associated_plan:""},i}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(f.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Subscription Plan")),c.a.createElement(f.a,null,c.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return v.a.push("/app/subplan/SubPlanVideos")}},"Back"))),c.a.createElement(m.a,null,c.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(d.a,{className:"mb-2"},c.a.createElement(f.a,{lg:"6",md:"6",className:"mb-2"},c.a.createElement(h.a,null,"Video Link "),c.a.createElement(g.a,{type:"text",name:"video_link",value:this.state.video_link,onChange:this.changeHandler})),c.a.createElement(f.a,{lg:"6",md:"6",className:"mb-2"},c.a.createElement(h.a,null,"Associated Plan "),c.a.createElement(g.a,{type:"text",name:"associated_plan",value:this.state.associated_plan,onChange:this.changeHandler}))),c.a.createElement(d.a,null,c.a.createElement(p.a.Ripple,{className:"mr-1 mb-1",type:"submit",color:"primary"},"Add Plans"))))))}}]),t}(o.Component);a.default=y},799:function(e,a,t){"use strict";var n=t(5),s=t(7),i=t(11),r=t(12),l=t(0),o=t.n(l),c=t(1),u=t.n(c),d=t(4),f=t.n(d),p=t(3),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.focus=t.focus.bind(Object(i.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.type,r=e.bsSize,l=e.valid,c=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,m),v=["radio","checkbox"].indexOf(i)>-1,O=new RegExp("\\D","g"),j=u||("select"===i||"textarea"===i?i:"input"),y="form-control";b?(y+="-plaintext",j=u||"input"):"file"===i?y+="-file":"range"===i?y+="-range":v&&(y=d?null:"form-check-input"),g.size&&O.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var E=Object(p.mapToCssModules)(f()(a,c&&"is-invalid",l&&"is-valid",!!r&&"form-control-"+r,y),t);return("input"===j||u&&"function"===typeof u)&&(g.type=i),g.children&&!b&&"select"!==i&&"string"===typeof j&&"select"!==j&&(Object(p.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(j,Object(n.a)({},g,{ref:h,className:E,"aria-invalid":c}))},a}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},801:function(e,a,t){"use strict";var n=t(5),s=t(7),i=t(11),r=t(12),l=t(0),o=t.n(l),c=t(1),u=t.n(c),d=t(4),f=t.n(d),p=t(3),m=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.submit=t.submit.bind(Object(i.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.inline,r=e.tag,l=e.innerRef,c=Object(s.a)(e,m),u=Object(p.mapToCssModules)(f()(a,!!i&&"form-inline"),t);return o.a.createElement(r,Object(n.a)({},c,{ref:l,className:u}))},a}(l.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h},803:function(e,a,t){"use strict";var n=t(5),s=t(7),i=t(0),r=t.n(i),l=t(1),o=t.n(l),c=t(4),u=t.n(c),d=t(3),f=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),m=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,i=e.hidden,l=e.widths,o=e.tag,c=e.check,p=e.size,m=e.for,b=Object(s.a)(e,f),h=[];l.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var i,r=!n;if(Object(d.isObject)(s)){var l,o=r?"-":"-"+a+"-";i=g(r,a,s.size),h.push(Object(d.mapToCssModules)(u()(((l={})[i]=s.size||""===s.size,l["order"+o+s.order]=s.order||0===s.order,l["offset"+o+s.offset]=s.offset||0===s.offset,l))),t)}else i=g(r,a,s),h.push(i)}}));var v=Object(d.mapToCssModules)(u()(a,!!i&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return r.a.createElement(o,Object(n.a)({htmlFor:m},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v}}]);
//# sourceMappingURL=131.fe253c22.chunk.js.map