(this.webpackJsonpsearch=this.webpackJsonpsearch||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(12),s=n.n(r),i=(n(22),n(23),n(13)),o=n(14),h=n(17),l=n(16),u=(n(24),n(15)),j=n.n(u),d=(n(43),n(0)),b=function(e){var t=e.searchElement,n=e.inputHandler;return Object(d.jsx)("div",{className:"search-bar-background",children:Object(d.jsx)("form",{children:Object(d.jsx)("input",{type:"search",placeholder:"Search charachter",value:t,onChange:function(e){n(e)}})})})},m=(n(45),function(e){var t=e.location,n=e.name,c=e.pic,a=e.status;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"img-placeholder",children:Object(d.jsx)("img",{src:c})}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:a}),Object(d.jsx)("p",{children:"Last seen"}),Object(d.jsx)("p",{children:t})]})]})}),p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={charachters:[],searchElement:""},e.onChangeHandler=function(t){e.setState({searchElement:t.target.value}),console.log(e.state.searchElement)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;j.a.get("https://rickandmortyapi.com/api/character").then((function(t){e.setState({charachters:t.data.results}),console.log(e.state.charachters)}))}},{key:"render",value:function(){var e=this,t=this.state.charachters.filter((function(t){return t.name.toLowerCase().includes(e.state.searchElement.toLowerCase())}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(b,{searchElement:this.state.searchElement,inputHandler:function(t){return e.onChangeHandler(t)}})}),Object(d.jsx)("div",{className:"card-wrapper",children:t.map((function(e,t){return Object(d.jsx)(m,{location:e.location.name,name:e.name,pic:e.image,status:e.status},t)}))})]})}}]),n}(c.Component);var f=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(p,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),O()}},[[46,1,2]]]);
//# sourceMappingURL=main.0cd9f727.chunk.js.map