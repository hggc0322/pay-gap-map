(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(76),a(7)),l=a.n(i),o=(a(38),a(167),a(77),a(57),a(37),a(222),a(247)),s=a(150),c=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this,t=Object.keys(this.props.resultVal);return r.a.createElement(o.a,{style:{width:"18rem"}},r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,null,this.props.resultVal.name),r.a.createElement(o.a.Text,null,this.props.resultVal&&t.map(function(t){var a=e.props.resultVal[t];if("name"!==t&&"id"!==t&&null!==a&&"updated_at"!==t&&"created_at"!==t)return"address"===t&&(a=a.replace(/[^a-zA-Z0-9]/g," ")),r.a.createElement("li",{style:{listStyleType:"none"},key:""+t+(new Date).getTime()},t.replace(/[\d_]+/g," ").replace(/(\b[a-z](?!\s))/g,function(e){return e.toUpperCase()})+":"+a)})),r.a.createElement(s.a,{to:"/report-benefits",state:{companyName:this.props.resultVal.name}}," Add Benefit Data ")))},t}(n.Component),u=(a(224),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={query:"",results:{id:1,name:"5 HERTFORD STREET LIMITED",address:"10,+Norwich+Street,London,EC4A+1BD",industry:"Other business support service activities n.e.c.",created_at:"2019-03-23T21:11:58.141Z",updated_at:"2019-03-23T21:11:58.141Z",benefits:null,hourly_median_gender_gap_2018:-13,bonus_median_gender_gap_2018:-18}},t.handleInputChange=function(){t.setState({query:t.search.value})},t.getInfo=function(){},t}return l()(t,e),t.prototype.render=function(){var e=this,t=this.state.results?r.a.createElement(c,{resultVal:this.state.results}):r.a.createElement("div",null);return r.a.createElement("div",null,r.a.createElement("p",null,"Search for a company by name here:"),r.a.createElement("form",null,r.a.createElement("input",{placeholder:"Search for...",ref:function(t){return e.search=t},onChange:this.handleInputChange}),r.a.createElement("p",null,this.state.query),t))},t}(n.Component)),p=a(158),d=a(160);t.default=function(){return r.a.createElement(p.a,null,r.a.createElement(u,{id:"search"}),r.a.createElement(d.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}}))}},150:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(33),s=a.n(o);a.d(t,"a",function(){return s.a});a(151);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},151:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Gender Gap Map(London)"}}}}},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},158:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),l=a(4),o=a.n(l),s=a(150),c=(a(163),a(246)),u=a(245),p=function(e){var t=e.siteTitle,a={margin:"20px"};return i.a.createElement("header",null,i.a.createElement(c.a,{fixed:"top",bg:"dark",variant:"dark"},i.a.createElement(c.a.Brand,null,i.a.createElement(s.a,{to:""},t)),i.a.createElement(c.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(c.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(u.a,null,i.a.createElement(s.a,{style:a,to:"/map",activeStyle:{color:"#B01E1D"}}," Map "),i.a.createElement(s.a,{style:a,to:"/search",activeStyle:{color:"#B01E1D"}},"Company Search")))),i.a.createElement("br",null))};p.propTypes={siteTitle:o.a.string},p.defaultProps={siteTitle:""};var d=p,m=(a(165),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"80px auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});m.propTypes={children:o.a.node.isRequired};t.a=m},160:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),l=a(4),o=a.n(l),s=a(166),c=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Gender Gap Map(London)",description:"A regional mapping of gender disparity in pay and other elements for the city and some surrounding area of London",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-search-js-6dc31dbe817dc91989f9.js.map