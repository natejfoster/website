(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(151),o=a(152),s=function(e){return n.a.createElement(l,{key:e.text,className:"imageBlock"},n.a.createElement(d,{to:e.url},n.a.createElement("h3",{className:"imageCard"},e.text)))},l=o.a.div.withConfig({displayName:"imageCard__Block",componentId:"a3y6dh-0"})(["height:100%;width:100%;&:hover{opacity:.50;background-color:black;}"]),d=Object(o.a)(r.Link).withConfig({displayName:"imageCard__StyledLink",componentId:"a3y6dh-1"})(["color:white;position:relative;text-align:center;display:flex;align-items:center;justify-content:center;height:100%;width:100%;text-decoration:none;"]),c=a(180),u=a(4),f=a.n(u),p=a(162),h=a.n(p),g=a(156),m=a.n(g),A=(a(157),function(e){var t=e.children;return n.a.createElement(r.StaticQuery,{query:"1266923843",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{title:e.site.siteMetadata.title,link:[{rel:"shortcut icon",type:"image/png",href:""+m.a}],meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},n.a.createElement("html",{lang:"en"})),n.a.createElement("div",null,t))},data:c})});A.propTypes={children:f.a.node.isRequired};var y=A,b=a(155),v=a(160),w=a.n(v);a.d(t,"pageQuery",function(){return E});t.default=function(e){return n.a.createElement(y,null,n.a.createElement("div",{className:"container"},n.a.createElement(S,{className:"splash"},n.a.createElement("div",null,n.a.createElement("h1",{className:"splashName"},"Nathan J Foster"),n.a.createElement("h2",{className:"splashText"},"Developer. Photographer. Adventurer.")),n.a.createElement(w.a,{fluid:e.data.imageSplash.childImageSharp.fluid,style:N})),n.a.createElement(L,{className:"about"},n.a.createElement(s,{text:"About",url:"/about"}),n.a.createElement(w.a,{fluid:e.data.imageAbout.childImageSharp.fluid,style:x})),n.a.createElement(L,{className:"photography"},n.a.createElement(s,{text:"Photography",url:"/photography"}),n.a.createElement(w.a,{fluid:e.data.imagePhotography.childImageSharp.fluid,style:x})),n.a.createElement(L,{className:"projects"},n.a.createElement(s,{text:"Projects",url:"/projects"}),n.a.createElement(w.a,{fluid:e.data.imageProjects.childImageSharp.fluid,style:x})),n.a.createElement(L,{className:"journal"},n.a.createElement(s,{text:"Journal",url:"/journal"}),n.a.createElement(w.a,{fluid:e.data.imageJournal.childImageSharp.fluid,style:x}))),n.a.createElement(b.a,null))};var E="1619166276",S=o.a.div.withConfig({displayName:"pages__Splash",componentId:"sc-14960a1-0"})(["display:flex;align-items:center;justify-content:center;text-align:center;font-family:'Stalemate',cursive !important;font-size:150%;position:relative;"]),L=o.a.div.withConfig({displayName:"pages__ImageWrapper",componentId:"sc-14960a1-1"})(["position:relative;"]),x={position:"absolute",left:0,top:0,width:"100%",height:"100%",zIndex:-1},N={position:"absolute",left:0,top:0,width:"100%",height:"100vh",zIndex:-1}},151:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var i=a(0),n=a.n(i),r=a(4),o=a.n(r),s=a(150),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(153),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var f=n.a.createContext({}),p=function(e){return n.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,a){var i;e.exports=(i=a(154))&&i.default||i},154:function(e,t,a){"use strict";a.r(t);a(33);var i=a(0),n=a.n(i),r=a(4),o=a.n(r),s=a(52),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},155:function(e,t,a){"use strict";var i=a(0),n=a.n(i),r=a(152);t.a=function(){return n.a.createElement(o,null,n.a.createElement("div",null,n.a.createElement("span",null,"Copyright © ",(new Date).getFullYear()," Nathan J. Foster")))};var o=r.a.div.withConfig({displayName:"footer__FooterContainer",componentId:"sc-1mmtjpg-0"})(["height:100px;display:flex;color:white;background:black;align-items:center;width:100%;justify-content:center;text-align:center;z-index:5;"])},156:function(e,t){e.exports="data:image/vnd.microsoft.icon;base64,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"},157:function(e,t,a){},160:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var n,r=i(a(7)),o=i(a(51)),s=i(a(163)),l=i(a(164)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var g=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),h.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+n+"<img "+s+l+t+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},A=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,n=e.onError,r=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},r,{onLoad:i,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});A.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!1,r=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:n,fadeIn:r,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.Tag,v="boolean"==typeof y?"lightgray":y,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),S={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(h){var L=h;return d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),L.base64&&d.default.createElement(A,(0,l.default)({src:L.base64},S)),L.tracedSVG&&d.default.createElement(A,(0,l.default)({src:L.tracedSVG},S)),v&&d.default.createElement(b,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,L.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),d.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),d.default.createElement(A,{alt:a,title:t,src:L.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},L))}}))}if(g){var x=g,N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},r);return"inherit"===r.display&&delete N.display,d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&d.default.createElement(A,(0,l.default)({src:x.base64},S)),x.tracedSVG&&d.default.createElement(A,(0,l.default)({src:x.tracedSVG},S)),v&&d.default.createElement(b,{title:t,style:{backgroundColor:v,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),d.default.createElement(A,{alt:a,title:t,width:x.width,height:x.height,src:x.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:b,sizes:v,fixed:b,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var w=y;t.default=w},180:function(e){e.exports={data:{site:{siteMetadata:{title:"Nathan J Foster"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-8a5f6e4229230be410f7.js.map