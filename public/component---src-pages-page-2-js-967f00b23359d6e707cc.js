(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(150),o=a(158),l=a(160);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},150:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(151);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Gender Gap Map(London)"}}}}},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(150),s=(a(163),a(246)),d=a(245),u=function(e){var t=e.siteTitle,a={margin:"20px"};return i.a.createElement("header",null,i.a.createElement(s.a,{fixed:"top",bg:"dark",variant:"dark"},i.a.createElement(s.a.Brand,null,i.a.createElement(c.a,{to:""},t)),i.a.createElement(s.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(s.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(d.a,null,i.a.createElement(c.a,{style:a,to:"/map",activeStyle:{color:"#B01E1D"}}," Map "),i.a.createElement(c.a,{style:a,to:"/search",activeStyle:{color:"#B01E1D"}},"Company Search")))),i.a.createElement("br",null))};u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var p=u,m=(a(165),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"80px auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});m.propTypes={children:l.a.node.isRequired};t.a=m},160:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(166),s=a.n(c);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=n.data.site,d=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Gender Gap Map(London)",description:"A regional mapping of gender disparity in pay and other elements for the city and some surrounding area of London",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-967f00b23359d6e707cc.js.map