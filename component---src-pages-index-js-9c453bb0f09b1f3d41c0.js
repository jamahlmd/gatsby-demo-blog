(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return o});n(49);var a=n(0),r=n.n(a),i=n(145),u=n(151),o="3542838300";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(u.a,null,t.map(function(e){var t=e.node,n=t.frontmatter;return r.a.createElement("div",{key:t.id},r.a.createElement("h2",null,r.a.createElement(i.Link,{to:n.path},n.title)),r.a.createElement("p",null,n.date),r.a.createElement("p",null,n.excerpt),r.a.createElement("ul",null,t.frontmatter.tags.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(i.Link,{to:"/tags/"+e},e))})))}))}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(144),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(146),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var s=n(33);n.d(t,"parsePath",function(){return s.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},146:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},147:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(48),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},149:function(e,t,n){},151:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),u=n(4),o=n.n(u),c=n(152),l=n.n(c),d=n(145),s=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(d.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},m=(n(149),function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});m.propTypes={children:o.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-9c453bb0f09b1f3d41c0.js.map