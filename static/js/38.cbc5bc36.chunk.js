(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[38],{9038:function(s,t,e){"use strict";e.r(t),e.d(t,{default:function(){return I}});var a=e(1413),n=e(2791),i=e(364),r=e(522),u=e(2902),o=e.n(u),d={item:"Post_item__sxtmb",ava:"Post_ava__T+JWQ",like:"Post_like__a4vW3"},l=e(184),c=function(s){return(0,l.jsx)("div",{className:d.posts,children:(0,l.jsxs)("div",{className:d.item,children:[(0,l.jsx)("div",{className:d.ava,children:(0,l.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/147/147144.png"})}),s.message,(0,l.jsx)("div",{className:d.like,children:(0,l.jsxs)("span",{children:["like ",s.likesCount]})})]})})},p="MyPosts_posts__cVBHT",x=e(5290),f=function(s){var t,e=(0,x.cI)({mode:"onBlur"}),n=e.register,i=e.formState,r=i.errors,u=i.isValid,o=e.handleSubmit,d=e.reset;return(0,l.jsxs)("form",{onSubmit:o((function(t){console.log(t.addPostText),s.addPost(t.addPostText),d()})),children:[(0,l.jsxs)("label",{children:[(0,l.jsx)("span",{children:"Add Post:"}),(0,l.jsx)("br",{}),(0,l.jsx)("textarea",(0,a.Z)({type:"text"},n("addPostText",{required:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e",minLength:{value:5,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}})))]}),(0,l.jsx)("div",{style:{height:40},children:(null===r||void 0===r?void 0:r.addPostText)&&(0,l.jsx)("p",{children:(null===r||void 0===r||null===(t=r.addPostText)||void 0===t?void 0:t.message)||"Error!"})}),(0,l.jsx)("input",{type:"submit",disabled:!u})]})},h=function(s){var t=s.postsData.map((function(s,t){return(0,l.jsx)(c,{message:s.message,likesCount:s.likesCount,id:s.id},t)}));return(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("h3",{children:"My posts"}),(0,l.jsx)("div",{children:(0,l.jsx)(f,{addPost:s.addPost,updateNewPostText:s.updateNewPostText})}),t]})},j=(0,i.$j)((function(s){return{newPostText:s.profilePage.newPostText,postsData:s.profilePage.postsData}}),(function(s){return{addPost:function(t){var e=(0,r.Wl)(t);s(e)}}}))(h);window.store=o();var v=j,m="ProfileInfo_profileInfoBlock__RiWQ8",g=e(1148),P=e(5671),_=e(3144),k=e(9340),b=e(5716),S=(n.Component,e(885)),T=function(s){var t=(0,n.useState)(!1),e=(0,S.Z)(t,2),a=e[0],i=e[1],r=(0,n.useState)(s.status),u=(0,S.Z)(r,2),o=u[0],d=u[1];(0,n.useEffect)((function(){d(s.status)}),[s.status]);return(0,l.jsxs)("div",{children:[!a&&(0,l.jsx)("div",{children:(0,l.jsxs)("span",{onDoubleClick:function(){i(!0)},children:[s.status||"----"," "]})}),a&&(0,l.jsx)("div",{children:(0,l.jsx)("input",{onChange:function(s){d(s.currentTarget.value)},autoFocus:!0,value:o,onBlur:function(){i(!1),s.updateStatus(o)}})})]})},N=function(s){var t=s.profile,e=s.status,a=s.updateStatus;return t?(null===t.photos.large&&(t.photos.large="https://gavrila-alandala.ro/wp-content/uploads/2019/10/joker-4.jpg"),(0,l.jsx)("div",{className:m,children:(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:t.photos.large}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:t.aboutMe}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:t.fullName}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:t.userId}),(0,l.jsx)("br",{}),(0,l.jsx)(T,{status:e,updateStatus:a})]})})):(0,l.jsx)(g.Z,{})},w=function(s){return(0,l.jsxs)("div",{children:[(0,l.jsx)(N,{profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,l.jsx)(v,{})]})},C=e(6871),I=(0,e(7781).qC)((0,i.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorisedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{setUserProfileThunk:r.TE,getStatus:r.lR,updateStatus:r.Nf}))((function(s){var t=(0,C.UO)().userId,e=(0,C.s0)();return(0,n.useEffect)((function(){t||(t=s.authorisedUserId)||e("/login"),s.setUserProfileThunk(t),s.getStatus(t)}),[]),(0,l.jsx)(w,(0,a.Z)((0,a.Z)({},s),{},{profile:s.profile,status:s.status,updateStatus:s.updateStatus}))}))},2902:function(){}}]);
//# sourceMappingURL=38.cbc5bc36.chunk.js.map