(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});a(167);var n=a(7),r=a.n(n),l=a(0),i=a.n(l),o=a(158),u=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={companyName:"",matLength:"",matPay:"",hasFlex:"",hasChildCare:""},t.handleSubmit=function(e){e.preventDefault(),alert("Welcome "+t.state.firstName+" "+t.state.lastName+"!")},t.handleInputChange=function(e){var a,n=e.target,r=n.value,l=n.name;t.setState(((a={})[l]=r,a))},t}return r()(t,e),t.prototype.render=function(){return i.a.createElement(o.a,null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("h3",null,"Please fill out the form below to report on the available benefits of your company. All data will be anonamous and will not be linked back to you."),i.a.createElement("label",null,"Company Name: ",i.a.createElement("input",{type:"text",name:"companyName",value:this.state.companyName,onChange:this.handleInputChange})),i.a.createElement("label",null,"Length of Maternity Leave in weeks: ",i.a.createElement("input",{type:"text",name:"matLength",value:this.state.matLength,onChange:this.handleInputChange})),i.a.createElement("label",null,"Percentage of Pay Provided By Company during Maternity Leave:",i.a.createElement("input",{type:"text",name:"matPay",value:this.state.matPay,onChange:this.handleInputChange})),i.a.createElement("label",null," Does this company have a Flexible Schedule option?",i.a.createElement("input",{type:"text",name:"hasFlex",value:this.state.hasFlex,onChange:this.handleInputChange})),i.a.createElement("label",null," Does this company provide child care on site or some other form of child care assistance?",i.a.createElement("input",{type:"text",name:"hasChildCare",value:this.state.firstName,onChange:this.hasChildCare})),i.a.createElement("button",{type:"submit"},"Submit")))},t}(i.a.Component)},150:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(33),u=a.n(o);a.d(t,"a",function(){return u.a});a(151);var c=r.a.createContext({}),s=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Gender Gap Map(London)"}}}}},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(55),u=a(2),c=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},158:function(e,t,a){"use strict";var n=a(156),r=a(0),l=a.n(r),i=a(4),o=a.n(i),u=a(150),c=(a(163),a(246)),s=a(245),m=function(e){var t=e.siteTitle,a={margin:"20px"};return l.a.createElement("header",null,l.a.createElement(c.a,{fixed:"top",bg:"dark",variant:"dark"},l.a.createElement(c.a.Brand,null,l.a.createElement(u.a,{to:""},t)),l.a.createElement(c.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(c.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(s.a,null,l.a.createElement(u.a,{style:a,to:"/map",activeStyle:{color:"#B01E1D"}}," Map "),l.a.createElement(u.a,{style:a,to:"/search",activeStyle:{color:"#B01E1D"}},"Company Search")))),l.a.createElement("br",null))};m.propTypes={siteTitle:o.a.string},m.defaultProps={siteTitle:""};var p=m,h=(a(165),function(e){var t=e.children;return l.a.createElement(u.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"80px auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",null,t),l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});h.propTypes={children:o.a.node.isRequired};t.a=h},167:function(e,t,a){var n=a(25).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-report-benefits-js-2939fc2d7d22ccd285f3.js.map