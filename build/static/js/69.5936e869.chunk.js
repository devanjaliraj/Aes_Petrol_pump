(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[69],{1936:function(e,a,t){e.exports=t.p+"static/media/reset-password.01a139f9.png"},2043:function(e,a,t){"use strict";t.r(a);var n=t(13),s=t(14),r=t(16),l=t(15),o=t(0),c=t.n(o),i=t(1266),d=t(1267),u=t(1268),m=t(1269),p=t(1270),f=t(1271),b=t(804),h=t(814),g=t(799),y=t(802),v=t(177),j=t(21),O=t(1936),E=t.n(O),N=(t(899),function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(i.a,{className:"m-0 justify-content-center"},c.a.createElement(d.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},c.a.createElement(u.a,{className:"bg-authentication rounded-0 mb-0 w-100"},c.a.createElement(i.a,{className:"m-0"},c.a.createElement(d.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-5"},c.a.createElement("img",{className:"px-5 mx-2",src:E.a,alt:"resetImg"})),c.a.createElement(d.a,{lg:"6",md:"12",className:"p-0"},c.a.createElement(u.a,{className:"rounded-0 mb-0 px-2 py-50"},c.a.createElement(m.a,{className:"pb-1 pt-1"},c.a.createElement(p.a,null,c.a.createElement("h4",{className:"mb-0"},"Reset Password"))),c.a.createElement("p",{className:"px-2 auth-title"},"Please enter your email address and new password to continue."),c.a.createElement(f.a,{className:"pt-1"},c.a.createElement(b.a,null,c.a.createElement(h.a,{className:"form-label-group"},c.a.createElement(g.a,{type:"email",placeholder:"Email",required:!0}),c.a.createElement(y.a,null,"Email")),c.a.createElement(h.a,{className:"form-label-group"},c.a.createElement(g.a,{type:"password",placeholder:"Password",required:!0}),c.a.createElement(y.a,null,"Password")),c.a.createElement(h.a,{className:"form-label-group"},c.a.createElement(g.a,{type:"password",placeholder:"Confirm Password",required:!0}),c.a.createElement(y.a,null,"Confirm Password")),c.a.createElement("div",{className:"d-flex justify-content-between flex-wrap flex-sm-row flex-column"},c.a.createElement(v.a.Ripple,{block:!0,className:"btn-block",color:"primary",outline:!0,onClick:function(e){e.preventDefault(),j.a.push("/pages/login")}},"Go Back to Login"),c.a.createElement(v.a.Ripple,{block:!0,color:"primary",type:"submit",className:"btn-block mt-1 mt-sm-0",onClick:function(e){return e.preventDefault()}},"Reset"))))))))))}}]),t}(c.a.Component));a.default=N},799:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(11),l=t(12),o=t(0),c=t.n(o),i=t(1),d=t.n(i),u=t(4),m=t.n(u),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,i=e.invalid,d=e.tag,u=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,f),y=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),j=d||("select"===r||"textarea"===r?r:"input"),O="form-control";b?(O+="-plaintext",j=d||"input"):"file"===r?O+="-file":"range"===r?O+="-range":y&&(O=u?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var E=Object(p.mapToCssModules)(m()(a,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,O),t);return("input"===j||d&&"function"===typeof d)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof j&&"select"!==j&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(j,Object(n.a)({},g,{ref:h,className:E,"aria-invalid":i}))},a}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},802:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(0),l=t.n(r),o=t(1),c=t.n(o),i=t(4),d=t.n(i),u=t(3),m=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,c=e.tag,i=e.check,p=e.size,f=e.for,b=Object(s.a)(e,m),h=[];o.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var r,l=!n;if(Object(u.isObject)(s)){var o,c=l?"-":"-"+a+"-";r=g(l,a,s.size),h.push(Object(u.mapToCssModules)(d()(((o={})[r]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),t)}else r=g(l,a,s),h.push(r)}}));var y=Object(u.mapToCssModules)(d()(a,!!r&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return l.a.createElement(c,Object(n.a)({htmlFor:f},b,{className:y}))};y.propTypes=b,y.defaultProps=h,a.a=y},804:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(11),l=t(12),o=t(0),c=t.n(o),i=t(1),d=t.n(i),u=t(4),m=t.n(u),p=t(3),f=["className","cssModule","inline","tag","innerRef"],b={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,o=e.innerRef,i=Object(s.a)(e,f),d=Object(p.mapToCssModules)(m()(a,!!r&&"form-inline"),t);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:d}))},a}(o.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h},814:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(0),l=t.n(r),o=t(1),c=t.n(o),i=t(4),d=t.n(i),u=t(3),m=["className","cssModule","row","disabled","check","inline","tag"],p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.row,o=e.disabled,c=e.check,i=e.inline,p=e.tag,f=Object(s.a)(e,m),b=Object(u.mapToCssModules)(d()(a,!!r&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!o)&&"disabled"),t);return"fieldset"===p&&(f.disabled=o),l.a.createElement(p,Object(n.a)({},f,{className:b}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},899:function(e,a,t){}}]);
//# sourceMappingURL=69.5936e869.chunk.js.map