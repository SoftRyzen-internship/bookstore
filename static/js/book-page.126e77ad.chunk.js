"use strict";(self.webpackChunkbookstore=self.webpackChunkbookstore||[]).push([[332],{7778:function(e,t,a){a.d(t,{O:function(){return s}});var n=a(3329),s=function(){return(0,n.jsx)("div",{children:"Breadcrumbs"})}},1881:function(e,t,a){a.d(t,{m:function(){return r}});var n="SpinnerButton_loader__NJWd7",s=a(3329),r=function(e){var t=e.className;return(0,s.jsx)("span",{className:"".concat(n," ").concat(t)})}},8914:function(e,t,a){a.d(t,{i:function(){return l}});var n=a(5861),s=a(9439),r=a(7757),i=a.n(r),c=a(2791),l=function(e,t,a){var r=(0,c.useState)(a),l=(0,s.Z)(r,2),o=l[0],u=l[1],d=(0,c.useState)(!1),_=(0,s.Z)(d,2),p=_[0],m=_[1],f=(0,c.useState)(),x=(0,s.Z)(f,2),h=x[0],v=x[1];return(0,c.useEffect)((function(){var t=function(){var t=(0,n.Z)(i().mark((function t(){var a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,e();case 4:a=t.sent,u(a.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),v(t.t0);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),t),{data:o,loading:p,error:h}}},9038:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var n=a(7689),s=a(8914),r=a(6028),i=a(7778),c=a(9439),l=a(2791),o="ImageGallery_gallery__1SruY",u="ImageGallery_imgBigContainer__7Ie+4",d="ImageGallery_imgBig__reBI4",_="ImageGallery_imageList__8q2ko",p="ImageGallery_item__bPIux",m="ImageGallery_itemSelected__yaKHM",f="ImageGallery_imgSmall__mLB7R",x=a(3329),h=function(e){var t=e.images,a=(0,l.useState)(t[0].id),n=(0,c.Z)(a,2),s=n[0],r=n[1];return(0,x.jsxs)("div",{className:o,children:[(0,x.jsx)("ul",{className:_,children:t.map((function(e){return(0,x.jsx)("li",{className:"".concat(p," ").concat(s===e.id?m:""," "),children:(0,x.jsx)("img",{src:e.imageUrl,alt:e.alt,onClick:function(){return t=e.id,void r(t);var t},className:f,width:53,height:78})},e.id)}))}),(0,x.jsx)("div",{className:u,children:(0,x.jsx)("img",{src:t.find((function(e){return e.id===s})).imageUrl,alt:t.find((function(e){return e.id===s})).alt,className:d,width:371,height:543})})]})},v=a(5861),j=a(7757),b=a.n(j),B=a(1683),k={container:"BlockInfo_container__-ivP+",title:"BlockInfo_title__yTsKM",wrapper:"BlockInfo_wrapper__nFSiO",author:"BlockInfo_author__z442Q",reviews:"BlockInfo_reviews__CPdTH",tabs:"BlockInfo_tabs__FPxEE",activeTab:"BlockInfo_activeTab__qkACD",disableTab:"BlockInfo_disableTab__cZe+J",detailsWrapper:"BlockInfo_detailsWrapper__eFe+F",buyWrapper:"BlockInfo_buyWrapper__q-sss",price:"BlockInfo_price__oQHzc",buyButton:"BlockInfo_buyButton__bJsJW",favoriteWrapper:"BlockInfo_favoriteWrapper__TUXD4",favoriteText:"BlockInfo_favoriteText__jPusS",detailsItem:"BlockInfo_detailsItem__DaUD8",text:"BlockInfo_text__qvsIq",value:"BlockInfo_value__p18tq",editButtonContainer:"BlockInfo_editButtonContainer__3y0iR",editButton:"BlockInfo_editButton__7SoCt",deleteButton:"BlockInfo_deleteButton__sky39"},N=a(5188),I=a(1881),g=function(e){var t,a,s=e.data,i=(0,l.useState)(!1),o=(0,c.Z)(i,2),u=o[0],d=o[1],_=(0,l.useState)(!1),p=(0,c.Z)(_,2),m=p[0],f=p[1],h=(0,n.s0)(),j=(0,n.TH)(),g=null===j||void 0===j?void 0:j.state,y=(null===g||void 0===g||null===(t=g.from)||void 0===t?void 0:t.pathname)+(null===g||void 0===g||null===(a=g.from)||void 0===a?void 0:a.search),T=null===g||void 0===g?void 0:g.count,w=function(e){var t=parseInt(e.match(/page=(\d+)/)[1]);return e.replace(/page=\d+/,"page=".concat(1===t?t:t-1))};return(0,x.jsxs)("div",{className:k.container,children:[(0,x.jsx)("p",{className:k.title,children:s.title}),(0,x.jsxs)("div",{className:k.wrapper,children:[(0,x.jsx)("p",{className:k.author,children:s.author}),(0,x.jsx)("p",{className:k.reviews,children:"".concat(s.reviews?s.reviews:0," \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432")})]}),(0,x.jsxs)("div",{className:k.tabs,children:[(0,x.jsx)("button",{type:"button",className:k.activeTab,children:"\u041f\u0430\u043f\u0435\u0440\u043e\u0432\u0430 \u043a\u043d\u0438\u0433\u0430"}),(0,x.jsx)("button",{type:"button",className:k.disableTab,children:"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0433\u0430"})]}),(0,x.jsxs)("div",{className:k.detailsWrapper,children:[(0,x.jsxs)("div",{className:k.buyWrapper,children:[(0,x.jsx)("p",{className:k.price,children:"".concat(s.price,".00 \u0433\u0440\u043d")}),(0,x.jsxs)("button",{type:"button",className:k.buyButton,children:[(0,x.jsx)(B.U.CART_FULL,{}),"\u041a\u0443\u043f\u0438\u0442\u0438"]})]}),(0,x.jsxs)("div",{className:k.favoriteWrapper,children:[(0,x.jsx)("button",{type:"button",className:k.favoriteBtn,onClick:function(){return d(!u)},children:u?(0,x.jsx)(B.U.FAVORITE_ACTIVE,{}):(0,x.jsx)(B.U.FAVORITE,{width:24,height:24,fill:"var(--red)"})}),(0,x.jsx)("p",{className:k.favoriteText,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432 \u043e\u0431\u0440\u0430\u043d\u0435"})]}),(0,x.jsxs)("ul",{className:k.detailsList,children:[(0,x.jsxs)("li",{className:k.detailsItem,children:[(0,x.jsx)("p",{className:k.text,children:"\u0420\u0456\u043a \u0432\u0438\u0434\u0430\u043d\u043d\u044f:"}),(0,x.jsx)("p",{className:k.value,children:s.book_year})]}),(0,x.jsxs)("li",{className:k.detailsItem,children:[(0,x.jsx)("p",{className:k.text,children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0441\u0442\u043e\u0440\u0456\u043d\u043e\u043a:"}),(0,x.jsx)("p",{className:k.value,children:s.book_page_count})]})]})]}),(0,x.jsxs)("ul",{className:k.editButtonContainer,children:[(0,x.jsx)("li",{children:(0,x.jsxs)("button",{type:"button",className:k.editButton,onClick:function(e){e.preventDefault(),h(N.a.BOOK_EDIT,{state:{from:j}})},children:[(0,x.jsx)(B.U.EDIT,{}),"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"]})}),(0,x.jsx)("li",{children:(0,x.jsx)("button",{type:"button",className:k.deleteButton,onClick:function(){var e=(0,v.Z)(b().mark((function e(t){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,f(!0),e.next=5,(0,r.MC)(s._id);case 5:f(!1),h(y?1===T?w(y):y:N.a.HOME),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),f(!1),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),children:m?(0,x.jsx)(I.m,{}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(B.U.TRASH,{}),"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"]})})})]})]})},y=a(2489),T=a(7282),w="BlockDescription_container__683jR",C="BlockDescription_tabs__Y1f+P",D="BlockDescription_activeTab__WXCJD",W="BlockDescription_disableTab__OnjO4",S="BlockDescription_descriptionWrapper__njLYj",U="BlockDescription_title__B02e-",O="BlockDescription_value__nWRlw",E=function(e){var t=e.data;return(0,x.jsxs)("div",{className:w,children:[(0,x.jsxs)("div",{className:C,children:[(0,x.jsx)("button",{type:"button",className:D,children:"\u041e\u043f\u0438\u0441 \u0442\u043e\u0432\u0430\u0440\u0443"}),(0,x.jsx)("button",{type:"button",className:W,children:"\u0417\u043c\u0456\u0441\u0442 \u043a\u043d\u0438\u0433\u0438"}),(0,x.jsx)("button",{type:"button",className:W,children:"\u0424\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u0437 \u043a\u043d\u0438\u0433\u0438"}),(0,x.jsx)("button",{type:"button",className:W,children:"\u0412\u0456\u0434\u0433\u0443\u043a\u0438 \u043f\u043e\u043a\u0443\u043f\u0446\u0456\u0432"})]}),(0,x.jsxs)("div",{className:S,children:[(0,x.jsx)("p",{className:U,children:"\u0410\u043d\u043e\u0442\u0430\u0446\u0456\u044f"}),(0,x.jsx)("p",{className:O,children:t.description})]})]})},F="BookDetailsPageComponent_container__yQSQG",Z="BookDetailsPageComponent_wrapper__oti0I",G=function(){var e=(0,n.UO)().id,t=(0,s.i)((function(){return(0,r.zd)(e)}),[]),a=t.data,c=t.loading,l=[];return a&&(l=a.media_gallery_image.map((function(e,t){return{id:t,imageUrl:e,alt:"img-".concat(t)}}))),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:F,children:(0,x.jsxs)(T.W,{children:[(0,x.jsx)(i.O,{}),(0,x.jsxs)("div",{className:Z,children:[c&&(0,x.jsx)(y.$,{}),a&&!!l.length&&(0,x.jsx)(h,{images:l}),a&&(0,x.jsx)(g,{data:a})]})]})}),(0,x.jsx)(T.W,{children:a&&(0,x.jsx)(E,{data:a})})]})},P=function(){return(0,x.jsx)(G,{})}}}]);
//# sourceMappingURL=book-page.126e77ad.chunk.js.map