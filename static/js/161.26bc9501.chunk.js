(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[161],{3161:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return k}});var n=a(364),i=a(7781),t=a(1413),r=a(5671),d=a(3144),l=a(9340),o=a(5716),g=a(6871),u=a(2791),c=a(184),m=a(7954),x=a(2902),h=a.n(x),j=a(3504),v={dialog:"DialogItem_dialog__UpJjd",nameText:"DialogItem_nameText__di1AR"},f=function(e){var s="/dialogs/"+e.id;return(0,c.jsx)("div",{className:v.dialog+" "+v.active,children:(0,c.jsxs)(j.OL,{to:s,children:[(0,c.jsx)("div",{children:(0,c.jsx)("img",{src:e.url})}),(0,c.jsx)("div",{className:v.nameText,children:e.name})]})})},p="Dialogs_dialogs__x+LCs",_="Dialogs_dialogsItems__tH-gW",M="Dialogs_messages__qYn-K",T="Message_message__L82xX",b=function(e){return(0,c.jsx)("div",{className:T,children:e.message})},y=a(5290),C=function(e){var s,a=(0,y.cI)({mode:"onBlur"}),n=a.register,i=a.formState,r=i.errors,d=i.isValid,l=a.handleSubmit,o=a.reset;return(0,c.jsxs)("form",{onSubmit:l((function(s){console.log(s),e.addMessage(s.messageText),o()})),children:[(0,c.jsxs)("label",{htmlFor:"MessageText",children:[(0,c.jsx)("span",{children:"Message:"}),(0,c.jsx)("br",{}),(0,c.jsx)("textarea",(0,t.Z)({type:"text",placeholder:"Enter your Message"},n("messageText",{required:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e",minLength:{value:5,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}})))]}),(0,c.jsx)("div",{style:{height:40},children:(null===r||void 0===r?void 0:r.messageText)&&(0,c.jsx)("p",{children:(null===r||void 0===r||null===(s=r.messageText)||void 0===s?void 0:s.message)||"Error!"})}),(0,c.jsx)("input",{type:"submit",disabled:!d})]})},D=function(e){var s=e.messagesPage.dialogsData.map((function(e){return(0,c.jsx)(f,{name:e.name,id:e.id,url:e.url},e.id)})),a=e.messagesPage.messagesData.map((function(e){return(0,c.jsx)(b,{id:e.id,message:e.message},e.id)}));return(0,c.jsxs)("div",{className:p,children:[(0,c.jsx)("div",{className:_,children:s}),(0,c.jsx)("div",{className:M,children:a}),(0,c.jsx)("div",{children:(0,c.jsx)(C,{addMessage:e.addMessage,onMessageChange:e.onMessageChange})})]})};window.store=h();var k=(0,i.qC)((0,n.$j)((function(e){return{messagesPage:e.messagesPage,newMessageText:e.messagesPage.newMessageText}}),(function(e){return{addMessage:function(s){var a=(0,m.k)(s);e(a)}}})),(function(e){var s=function(s){(0,l.Z)(n,s);var a=(0,o.Z)(n);function n(){return(0,r.Z)(this,n),a.apply(this,arguments)}return(0,d.Z)(n,[{key:"render",value:function(){return this.props.isAuth?(0,c.jsx)(e,(0,t.Z)({},this.props)):(0,c.jsx)(g.Fg,{to:"/login"})}}]),n}(u.Component);return(0,n.$j)((function(e){return{isAuth:e.auth.isAuth}}))(s)}))(D)},2902:function(){}}]);
//# sourceMappingURL=161.26bc9501.chunk.js.map