"use strict";(self.webpackChunkbookstore=self.webpackChunkbookstore||[]).push([[332],{7778:function(e,t,n){n.d(t,{O:function(){return s}});var a=n(3329),s=function(){return(0,a.jsx)("div",{children:"Breadcrumbs"})}},1881:function(e,t,n){n.d(t,{m:function(){return i}});var a="SpinnerButton_loader__NJWd7",s=n(3329),i=function(e){var t=e.className;return(0,s.jsx)("span",{className:"".concat(a," ").concat(t)})}},8914:function(e,t,n){n.d(t,{i:function(){return l}});var a=n(5861),s=n(9439),i=n(7757),r=n.n(i),c=n(2791),l=function(e,t,n){var i=(0,c.useState)(n),l=(0,s.Z)(i,2),o=l[0],u=l[1],d=(0,c.useState)(!1),_=(0,s.Z)(d,2),p=_[0],m=_[1],f=(0,c.useState)(),x=(0,s.Z)(f,2),v=x[0],h=x[1];return(0,c.useEffect)((function(){var t=function(){var t=(0,a.Z)(r().mark((function t(){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,e();case 4:n=t.sent,u(n.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),h(t.t0);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),t),{data:o,loading:p,error:v}}},9038:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(7689),s=n(8914),i=n(6028),r=n(7778),c=n(9439),l=n(2791),o="ImageGallery_gallery__1SruY",u="ImageGallery_imgBigContainer__7Ie+4",d="ImageGallery_imgBig__reBI4",_="ImageGallery_imageList__8q2ko",p="ImageGallery_item__bPIux",m="ImageGallery_itemSelected__yaKHM",f="ImageGallery_imgSmall__mLB7R",x=n(3329),v=function(e){var t=e.images,n=(0,l.useState)(t[0].id),a=(0,c.Z)(n,2),s=a[0],i=a[1];return(0,x.jsxs)("div",{className:o,children:[(0,x.jsx)("ul",{className:_,children:t.map((function(e){return(0,x.jsx)("li",{className:"".concat(p," ").concat(s===e.id?m:""," "),children:(0,x.jsx)("img",{src:e.imageUrl,alt:e.alt,onClick:function(){return t=e.id,void i(t);var t},className:f,width:53,height:78})},e.id)}))}),(0,x.jsx)("div",{className:u,children:(0,x.jsx)("img",{src:t.find((function(e){return e.id===s})).imageUrl,alt:t.find((function(e){return e.id===s})).alt,className:d,width:371,height:543})})]})},h=n(5861),j=n(7757),b=n.n(j),B=n(9434),k=n(8906),I=n(6351),N=n(1522),g=n(5188),y=n(5470),T=n(1881),C={container:"BlockInfo_container__-ivP+",title:"BlockInfo_title__yTsKM",wrapper:"BlockInfo_wrapper__nFSiO",author:"BlockInfo_author__z442Q",reviews:"BlockInfo_reviews__CPdTH",tabs:"BlockInfo_tabs__FPxEE",activeTab:"BlockInfo_activeTab__qkACD",disableTab:"BlockInfo_disableTab__cZe+J",detailsWrapper:"BlockInfo_detailsWrapper__eFe+F",buyWrapper:"BlockInfo_buyWrapper__q-sss",price:"BlockInfo_price__oQHzc",buyButton:"BlockInfo_buyButton__bJsJW",favoriteWrapper:"BlockInfo_favoriteWrapper__TUXD4",favoriteText:"BlockInfo_favoriteText__jPusS",detailsItem:"BlockInfo_detailsItem__DaUD8",text:"BlockInfo_text__qvsIq",value:"BlockInfo_value__p18tq",editButtonContainer:"BlockInfo_editButtonContainer__3y0iR",editButton:"BlockInfo_editButton__7SoCt",deleteButton:"BlockInfo_deleteButton__sky39"},w=function(e){var t,n,s=e.data,r=(0,B.v9)(I.Rg),o=(0,B.v9)(I.fq),u=(0,B.I0)(),d=(0,l.useState)(!1),_=(0,c.Z)(d,2),p=_[0],m=_[1],f=(0,l.useState)(!1),v=(0,c.Z)(f,2),j=v[0],w=v[1],D=(0,a.s0)(),S=(0,a.TH)(),W=null===S||void 0===S?void 0:S.state,U=(null===W||void 0===W||null===(t=W.from)||void 0===t?void 0:t.pathname)+(null===W||void 0===W||null===(n=W.from)||void 0===n?void 0:n.search),O=null===W||void 0===W?void 0:W.count,E=function(e){var t=parseInt(e.match(/page=(\d+)/)[1]);return e.replace(/page=\d+/,"page=".concat(1===t?t:t-1))},R=function(){var e=(0,h.Z)(b().mark((function e(t){var n;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,i.MC)(s._id);case 4:n=e.sent,w(!1),200===n.status&&D(U?1===O?E(U):U:g.a.HOME),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),w(!1),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{className:C.container,children:[(0,x.jsx)("p",{className:C.title,children:s.title}),(0,x.jsxs)("div",{className:C.wrapper,children:[(0,x.jsx)("p",{className:C.author,children:s.author}),(0,x.jsx)("p",{className:C.reviews,children:"".concat(s.reviews?s.reviews:0," \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432")})]}),(0,x.jsxs)("div",{className:C.tabs,children:[(0,x.jsx)("button",{type:"button",className:C.activeTab,children:"\u041f\u0430\u043f\u0435\u0440\u043e\u0432\u0430 \u043a\u043d\u0438\u0433\u0430"}),(0,x.jsx)("button",{type:"button",className:C.disableTab,children:"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0433\u0430"})]}),(0,x.jsxs)("div",{className:C.detailsWrapper,children:[(0,x.jsxs)("div",{className:C.buyWrapper,children:[(0,x.jsx)("p",{className:C.price,children:"".concat(s.price,".00 \u0433\u0440\u043d")}),r===N.I.BUYER&&(0,x.jsxs)("button",{type:"button",className:C.buyButton,onClick:function(){u((0,k.LS)(s))},children:[(0,x.jsx)(y.U.CART_FULL,{}),o.find((function(e){return e._id===s._id}))?"\u0412 \u043a\u043e\u0448\u0438\u043a\u0443":"\u041a\u0443\u043f\u0438\u0442\u0438"]})]}),(0,x.jsxs)("div",{className:C.favoriteWrapper,children:[(0,x.jsx)("button",{type:"button",className:C.favoriteBtn,onClick:function(){return m(!p)},children:p?(0,x.jsx)(y.U.FAVORITE_ACTIVE,{}):(0,x.jsx)(y.U.FAVORITE,{width:24,height:24,fill:"var(--red)"})}),(0,x.jsx)("p",{className:C.favoriteText,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432 \u043e\u0431\u0440\u0430\u043d\u0435"})]}),(0,x.jsxs)("ul",{className:C.detailsList,children:[(0,x.jsxs)("li",{className:C.detailsItem,children:[(0,x.jsx)("p",{className:C.text,children:"\u0420\u0456\u043a \u0432\u0438\u0434\u0430\u043d\u043d\u044f:"}),(0,x.jsx)("p",{className:C.value,children:s.book_year})]}),(0,x.jsxs)("li",{className:C.detailsItem,children:[(0,x.jsx)("p",{className:C.text,children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0441\u0442\u043e\u0440\u0456\u043d\u043e\u043a:"}),(0,x.jsx)("p",{className:C.value,children:s.book_page_count})]})]})]}),r===N.I.ADMIN&&(0,x.jsxs)("ul",{className:C.editButtonContainer,children:[(0,x.jsx)("li",{children:(0,x.jsxs)("button",{type:"button",className:C.editButton,onClick:function(){D(g.a.BOOK_EDIT,{state:{from:S}})},children:[(0,x.jsx)(y.U.EDIT,{}),"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"]})}),(0,x.jsx)("li",{children:(0,x.jsx)("button",{type:"button",className:C.deleteButton,onClick:R,children:j?(0,x.jsx)(T.m,{}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(y.U.TRASH,{}),"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"]})})})]})]})},D=n(2489),S=n(7282),W="BlockDescription_container__683jR",U="BlockDescription_tabs__Y1f+P",O="BlockDescription_activeTab__WXCJD",E="BlockDescription_disableTab__OnjO4",R="BlockDescription_descriptionWrapper__njLYj",F="BlockDescription_title__B02e-",Z="BlockDescription_value__nWRlw",G=function(e){var t=e.data;return(0,x.jsxs)("div",{className:W,children:[(0,x.jsxs)("div",{className:U,children:[(0,x.jsx)("button",{type:"button",className:O,children:"\u041e\u043f\u0438\u0441 \u0442\u043e\u0432\u0430\u0440\u0443"}),(0,x.jsx)("button",{type:"button",className:E,children:"\u0417\u043c\u0456\u0441\u0442 \u043a\u043d\u0438\u0433\u0438"}),(0,x.jsx)("button",{type:"button",className:E,children:"\u0424\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u0437 \u043a\u043d\u0438\u0433\u0438"}),(0,x.jsx)("button",{type:"button",className:E,children:"\u0412\u0456\u0434\u0433\u0443\u043a\u0438 \u043f\u043e\u043a\u0443\u043f\u0446\u0456\u0432"})]}),(0,x.jsxs)("div",{className:R,children:[(0,x.jsx)("p",{className:F,children:"\u0410\u043d\u043e\u0442\u0430\u0446\u0456\u044f"}),(0,x.jsx)("p",{className:Z,children:t.description})]})]})},P="BookDetailsPageComponent_container__yQSQG",q="BookDetailsPageComponent_wrapper__oti0I",A=function(){var e=(0,a.UO)().id,t=(0,s.i)((function(){return(0,i.zd)(e)}),[]),n=t.data,c=t.loading,l=[];return n&&(l=n.media_gallery_image.map((function(e,t){return{id:t,imageUrl:e,alt:"img-".concat(t)}}))),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:P,children:(0,x.jsxs)(S.W,{children:[(0,x.jsx)(r.O,{}),(0,x.jsxs)("div",{className:q,children:[c&&(0,x.jsx)(D.$,{}),n&&!!l.length&&(0,x.jsx)(v,{images:l}),n&&(0,x.jsx)(w,{data:n})]})]})}),(0,x.jsx)(S.W,{children:n&&(0,x.jsx)(G,{data:n})})]})},L=function(){return(0,x.jsx)(A,{})}}}]);
//# sourceMappingURL=book-page.0751442b.chunk.js.map