(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{12:function(e,t,c){e.exports={Searchbar:"Searchbar_Searchbar__3aBQ8",SearchForm:"Searchbar_SearchForm__t5Z3s",SearchForm_button:"Searchbar_SearchForm_button__1j47W",SearchForm_button_label:"Searchbar_SearchForm_button_label__3o230",SearchForm_input:"Searchbar_SearchForm_input__3qVNL"}},13:function(e,t,c){e.exports={link:"Navigation_link__aeEpH",activeLink:"Navigation_activeLink__2-4Wx Navigation_link__aeEpH"}},19:function(e,t,c){e.exports={container:"MovieDetailsPage_container__10BCA",inner_block:"MovieDetailsPage_inner_block__2jIA6"}},20:function(e,t,c){e.exports={img_block:"Cast_img_block__2HKIH",img:"Cast_img__FTYA-"}},24:function(e,t,c){e.exports={header:"Appbar_header__2Ii1U"}},25:function(e,t,c){e.exports={container:"Container_container__FULKK"}},26:function(e,t,c){e.exports={title:"PageHeading_title__2E7r2"}},28:function(e,t,c){e.exports={MoviesPage:"MoviesPage_MoviesPage__3_xj_"}},40:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(10),i=c.n(a),s=c(4),o=c(2),j=c(13),l=c.n(j),u=c(1),b=function(){return Object(u.jsxs)("nav",{children:[Object(u.jsx)(s.c,{exact:!0,to:"/",className:l.a.link,activeClassName:l.a.activeLink,children:"Home"}),Object(u.jsx)(s.c,{exact:!0,to:"/movies",className:l.a.link,activeClassName:l.a.activeLink,children:"Movies"})]})},h=c(24),d=c.n(h);function O(){return Object(u.jsx)("header",{className:d.a.header,children:Object(u.jsx)(b,{})})}var x=c(25),m=c.n(x);function v(e){var t=e.children;return Object(u.jsx)("div",{className:m.a.container,children:t})}var f=c(7),_=c(26),p=c.n(_);function g(e){var t=e.text;return Object(u.jsx)("h1",{className:p.a.title,children:t})}var S=c(27),k=c(18),N=c.n(k),F="9f0e1a5db1805e19173b01041df22dc3",w="https://api.themoviedb.org/3/";function y(){return C.apply(this,arguments)}function C(){return C=Object(S.a)(N.a.mark((function e(){var t,c,n,r=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",c=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,c);case 4:if(!(n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function E(){var e=Object(n.useState)(null),t=Object(f.a)(e,2),c=t[0],r=t[1],a=Object(o.g)().url;return Object(n.useEffect)((function(){y("".concat(w,"/trending/movie/day?api_key=").concat(F)).then((function(e){r(e.results)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{text:"Trending today"}),c&&Object(u.jsx)("ul",{children:c.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"".concat(a,"movies/").concat(e.id),children:e.title})},e.id)}))})]})}var I=c(19),P=c.n(I),M=c(20),L=c.n(M);function H(e){var t=e.movieId,c=Object(n.useState)(null),r=Object(f.a)(c,2),a=r[0],i=r[1];return Object(n.useEffect)((function(){(function(e){return y("".concat(w,"movie/").concat(e,"/credits?api_key=").concat(F))})(t).then((function(e){return i(e.cast)}))}),[t]),Object(u.jsxs)(u.Fragment,{children:[console.log("castArray",a),a&&Object(u.jsx)("ul",{children:a.map((function(e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:L.a.img_block,children:Object(u.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300").concat(e.profile_path),alt:e.name,className:L.a.img})}),Object(u.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})]})}c(40);function A(e){var t=e.movieId,c=Object(n.useState)(null),r=Object(f.a)(c,2),a=r[0],i=r[1];return Object(n.useEffect)((function(){(function(e){return y("".concat(w,"movie/").concat(e,"/reviews?api_key=").concat(F))})(t).then((function(e){return i(e.results)}))}),[t]),Object(u.jsxs)(u.Fragment,{children:[console.log("reviews",a),a&&a.length>0&&Object(u.jsx)("ul",{children:a.map((function(e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("h3",{children:e.author}),Object(u.jsx)("p",{children:e.content})]},e.created_at)}))}),a&&0===a.length&&Object(u.jsx)("p",{children:"We don't have any reviews for this movie"})]})}function q(){var e=Object(o.f)().movieId,t=Object(n.useState)(null),c=Object(f.a)(t,2),r=c[0],a=c[1],i=Object(o.g)(),j=i.url,l=i.path;return Object(n.useEffect)((function(){(function(e){return y("".concat(w,"/movie/").concat(e,"?api_key=").concat(F))})(e).then(a)}),[e]),Object(u.jsxs)(u.Fragment,{children:[console.log(r),r&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:P.a.container,children:[Object(u.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300").concat(r.poster_path),alt:r.title}),Object(u.jsxs)("div",{className:P.a.inner_block,children:[Object(u.jsx)("h2",{children:r.title}),Object(u.jsxs)("p",{children:["User Score: ",10*r.vote_average,"%"]}),Object(u.jsx)("h2",{children:"Overview"}),Object(u.jsx)("div",{children:r.overview}),Object(u.jsx)("h2",{children:"Genres"}),Object(u.jsx)("div",{children:r.genres.map((function(e){return"".concat(e.name," ")}))})]})]}),Object(u.jsx)("hr",{}),Object(u.jsx)(s.c,{to:"".concat(j,"/cast"),children:"Cast"}),Object(u.jsx)("br",{}),Object(u.jsx)(s.c,{to:"".concat(j,"/reviews"),children:"Reviews"}),Object(u.jsx)("hr",{})]}),Object(u.jsx)(o.a,{path:"".concat(l,"/cast"),children:Object(u.jsx)(H,{movieId:e})}),Object(u.jsx)(o.a,{path:"".concat(l,"/reviews"),children:Object(u.jsx)(A,{movieId:e})})]})}var W=c(28),B=c.n(W),D=c(14),K=c(12),T=c.n(K);function U(e){var t=e.onSubmit,c=Object(n.useState)(""),r=Object(f.a)(c,2),a=r[0],i=r[1];return Object(u.jsx)("header",{className:T.a.Searchbar,children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==a.trim()?t(a):D.b.error("Input query.")},className:T.a.SearchForm,children:[Object(u.jsx)("button",{type:"submit",className:T.a.SearchForm_button,children:Object(u.jsx)("span",{className:T.a.SearchForm_button_label,children:"Search"})}),Object(u.jsx)("input",{className:T.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:a,onChange:function(e){i(e.currentTarget.value.toLowerCase())}})]})})}var J=U;function G(e){var t=e.list,c=Object(o.g)().url;return Object(u.jsx)("ul",{children:t.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"".concat(c,"/").concat(e.id),children:e.title})},e.id)}))})}U.defaultProps={onSubmit:function(){return null}};var Q=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(null),i=Object(f.a)(a,2),s=i[0],o=i[1];return Object(n.useEffect)((function(){console.log("query",c),""!==c.trim()&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return y("".concat(w,"search/movie?query=").concat(e,"&page=").concat(t,"&api_key=").concat(F))}(c).then((function(e){return o(e.results)}))}),[c]),Object(n.useEffect)((function(){console.log("list",s)}),[s]),Object(u.jsxs)("div",{className:B.a.MoviesPage,style:{maxWidth:1170,margin:"0 auto"},children:[Object(u.jsx)(J,{onSubmit:function(e){r(e)}}),s&&Object(u.jsx)(G,{list:s}),Object(u.jsx)(D.a,{autoClose:3e3})]})};function R(){return Object(u.jsx)("h1",{children:"404 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 :("})}function V(){return Object(u.jsxs)(v,{children:[Object(u.jsx)(O,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,children:Object(u.jsx)(E,{})}),Object(u.jsx)(o.a,{path:"/movies/:movieId",children:Object(u.jsx)(q,{})}),Object(u.jsx)(o.a,{path:"/movies",exact:!0,children:Object(u.jsx)(Q,{})}),Object(u.jsx)(o.a,{children:Object(u.jsx)(R,{})})]})]})}c(41),c(42),c(43);i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(s.a,{children:Object(u.jsx)(V,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.31cd85b8.chunk.js.map