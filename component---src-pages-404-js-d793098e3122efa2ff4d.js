(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(161);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(150),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(153),A=n.n(l);n.d(t,"PageRenderer",function(){return A.a});var s=n(32);n.d(t,"parsePath",function(){return s.a});var d=i.a.createContext({}),p=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},154:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(52),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},155:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(152);t.a=function(){return i.a.createElement(o,null,i.a.createElement("div",null,i.a.createElement("span",null,"Copyright © ",(new Date).getFullYear()," Nathan J. Foster")))};var o=r.a.div.withConfig({displayName:"footer__FooterContainer",componentId:"sc-1mmtjpg-0"})(["height:100px;display:flex;color:white;background:black;align-items:center;width:100%;justify-content:center;text-align:center;z-index:5;"])},156:function(e,t){e.exports="data:image/vnd.microsoft.icon;base64,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"},157:function(e,t,n){},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Nathan J Foster"}}}}},159:function(e,t,n){e.exports=n.p+"static/IMG_4004-d642cc6e198e5da49f031ee201f8adb6.jpg"},161:function(e,t,n){"use strict";var a=n(158),i=n(0),r=n.n(i),o=n(4),c=n.n(o),u=n(162),l=n.n(u),A=n(151),s=n(152),d=n(159),p=n.n(d),g=function(e){var t=e.siteTitle;return r.a.createElement(m,null,r.a.createElement("div",null,r.a.createElement("h1",{style:{margin:0}},r.a.createElement(y,{to:"/"},t)),r.a.createElement(h,null,r.a.createElement(f,{to:"about",activeClassName:"curRoute"},"About"),r.a.createElement(f,{to:"photography",activeClassName:"curRoute"},"Photography"),r.a.createElement(f,{to:"projects",activeClassName:"curRoute"},"Projects"),r.a.createElement(f,{to:"journal",activeClassName:"curRoute"},"Journal"))))},m=s.a.div.withConfig({displayName:"header__HeaderContainer",componentId:"sc-9sgvdl-0"})(["background-image:url(",");background-position:center bottom;background-size:cover;background-repeat:no-repeat;height:100px;display:flex;align-items:center;position:fixed;top:0;width:100%;justify-content:center;text-align:center;z-index:5;"],p.a),h=s.a.div.withConfig({displayName:"header__Navigation",componentId:"sc-9sgvdl-1"})(["height:100%;text-align:center;"]),f=Object(s.a)(A.Link).withConfig({displayName:"header__StyledLink",componentId:"sc-9sgvdl-2"})(["color:white;text-decoration:none;margin:10px;&.curRoute{border-bottom:white 1px solid;}"]),y=Object(s.a)(A.Link).withConfig({displayName:"header__SiteTitle",componentId:"sc-9sgvdl-3"})(["color:white;display:inline;text-align:center;text-decoration:none;margin:auto;font-family:'Stalemate',cursive !important;"]),w=n(155),x=n(156),v=n.n(x),C=(n(157),function(e){var t=e.children;return r.a.createElement(A.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,link:[{rel:"shortcut icon",type:"image/png",href:""+v.a}],meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),r.a.createElement(E,null,r.a.createElement(V,null,t)),r.a.createElement(w.a,null))},data:a})});C.propTypes={children:c.a.node.isRequired};t.a=C;var E=s.a.div.withConfig({displayName:"layout__Container",componentId:"s91wtj-0"})(["margin-top:100px;min-height:calc(100vh - 200px);"]),V=s.a.div.withConfig({displayName:"layout__Content",componentId:"s91wtj-1"})(["background:white;max-width:740px;margin:0 auto;padding:20px;font-weight:400;font-style:normal;font-size:20px;line-height:1.58;letter-spacing:-.003em;@media (max-width:767px){font-size:18px;line-height:1.58;letter-spacing:-.004em;}"])}}]);
//# sourceMappingURL=component---src-pages-404-js-d793098e3122efa2ff4d.js.map