(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){e.exports={messagePart:"style_messagePart__3kK83",text:"style_text__iNAub",textBtn:"style_textBtn__1mdTK",inConteiner:"style_inConteiner__niq2W",button:"style_button__1kdyF",glowOnHover:"style_glowOnHover__7wzQn",glowing:"style_glowing__3xkRZ"}},22:function(e,t,n){e.exports={conteiner:"style_conteiner__2AfHc",isa:"style_isa__C7cm6",moneyConteiner:"style_moneyConteiner__jU5Sq",btnConteiner1:"style_btnConteiner1__2Elz0",btnConteiner2:"style_btnConteiner2__9lbN3"}},26:function(e,t,n){e.exports={cardHeader:"style_cardHeader__gzqKq",button:"style_button__12noG",arrow:"style_arrow__21G4Q",cardBackandHeader:"style_cardBackandHeader__2CuEG"}},28:function(e,t,n){e.exports={owerviewOpen:"style_owerviewOpen__3NWaV",closePart:"style_closePart__3klAG",money:"style_money__3bKfs"}},29:function(e,t,n){e.exports={progectionsOpen:"style_progectionsOpen__3bjMf",description:"style_description__2z_a6",closePart:"style_closePart__E01Mw",form:"style_form__jeFvm",input:"style_input__2AAY8"}},30:function(e,t,n){e.exports={message:"style_message__3jg89",i:"style_i__jw5jm"}},50:function(e,t,n){e.exports={question:"style_question__U8wF8"}},55:function(e,t,n){},57:function(e,t,n){e.exports={questions:"style_questions__2VaNs"}},58:function(e,t,n){e.exports={infoLine:"style_infoLine__3v6JC"}},62:function(e,t,n){e.exports={conteiner:"style_conteiner__1n7ok"}},63:function(e,t,n){e.exports={navigation:"style_navigation__1Fc4k",btn:"style_btn__31KPh"}},64:function(e,t,n){e.exports={conteiner:"style_conteiner__3A8Qg"}},65:function(e,t,n){e.exports={conteiner:"style_conteiner__3XFSB"}},87:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(13),i=n.n(a),r=n(18),o=n(7),l=n(55),j=n.n(l),d=n(10),b=n(9),u=n.n(b),O=n(4),m=n.n(O),x=n(1);var h=function(){var e=Object(s.useState)("navbar"),t=Object(d.a)(e,2),n=(t[0],t[1],Object(s.useState)("menu")),c=Object(d.a)(n,2),a=c[0],i=c[1],o=Object(s.useState)(""),l=Object(d.a)(o,2),j=l[0],b=l[1],O=Object(s.useState)(""),h=Object(d.a)(O,2),v=h[0],_=h[1],p=function(e){return window.scrollY>20?_("sticky"):_("")};Object(s.useEffect)((function(){return window.addEventListener("scroll",p),function(){return window.removeEventListener("scroll",p)}}),[]);var f=function(e){"menu"===a?(b("active"),i("menu active")):"menu active"===a&&(b(""),i("menu"))};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("nav",{className:m()(u.a.navbar,""!==v&&u.a.sticky),children:Object(x.jsxs)("div",{className:u.a.maxWidth,children:[Object(x.jsx)("div",{className:u.a.logo,children:Object(x.jsx)("div",{className:u.a.logoImg,children:Object(x.jsx)("div",{className:u.a.logoMargin,children:Object(x.jsx)(r.b,{to:"/",children:"Invest"})})})}),Object(x.jsxs)("ul",{className:m()(u.a.menu,"active"===j&&u.a.active),children:[Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/dashboard",className:u.a.menuBtn,onClick:f,children:"Dashboard"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/questions",className:u.a.menuBtn,onClick:f,children:"Reports"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/support",className:u.a.menuBtn,onClick:f,children:"Support"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/settings",className:u.a.menuBtn,onClick:f,children:"Settings"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/contacts",className:u.a.menuBtn,onClick:f,children:"Contacts"})})]}),Object(x.jsx)("ul",{}),Object(x.jsx)("div",{className:u.a.menuBtn,onClick:f,children:j?Object(x.jsx)("i",{class:"fas fa-times"}):Object(x.jsx)("i",{className:"fas fa-bars"})})]})})})},v=n(24),_=n(50),p=n.n(_);function f(e){var t=e.info;return Object(x.jsx)("div",{className:p.a.question,children:Object(x.jsx)("div",{className:p.a.text,children:t})})}var y=n(57),g=n.n(y);function N(){var e=Object(v.b)((function(e){return e.questions.questions}));return console.log(e),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:g.a.questions,children:e&&e.map((function(e,t){return Object(x.jsx)(f,{info:e},t+25)}))})})}n(77);var w=n(58),k=n.n(w);function C(){return Object(x.jsx)("div",{className:k.a.infoLine,children:"Our fee is only 0.25% a year"})}var S=n(26),q=n.n(S);function F(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{}),Object(x.jsxs)("div",{className:q.a.cardHeader,children:[Object(x.jsxs)("div",{className:q.a.button,children:[Object(x.jsx)("div",{className:q.a.arrow,children:Object(x.jsx)("i",{class:"fas fa-arrow-alt-circle-left"})}),Object(x.jsx)("div",{children:"Select your investion frame"})]}),Object(x.jsx)("div",{className:q.a.cardBackandHeader,children:Object(x.jsx)("h2",{children:"What would you do if the market takes a downturn?"})})]})]})}var B=n(36),I=n(27),P=n(92),H=n(93),L=n(89),G=n(61),A=n(90);n(85);function E(e){var t=Object(s.useState)(!0),n=Object(d.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)({name:"",email:"",phone:"",description:""}),r=Object(d.a)(i,2),o=r[0],l=r[1],j=o.name,b=o.email,u=o.phone,O=o.description,m=function(e){var t=e.target,n=t.name,s=t.value;l(Object(I.a)(Object(I.a)({},o),{},Object(B.a)({},n,s))),n&&b&&u&&O&&a(!1)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(P.a,Object(I.a)(Object(I.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(x.jsx)(P.a.Header,{children:Object(x.jsx)(P.a.Title,{id:"contained-modal-title-vcenter",children:"Sending message us"})}),Object(x.jsxs)(P.a.Body,{children:[Object(x.jsx)("h4",{children:"Fill all the lines"}),Object(x.jsxs)(H.a,{children:[Object(x.jsx)(L.a,{children:Object(x.jsx)(G.a,{children:Object(x.jsx)(H.a.Control,{placeholder:"First name",onChange:m,name:"name",value:j})})}),Object(x.jsxs)(H.a.Group,{controlId:"formGroupEmail",children:[Object(x.jsx)(H.a.Label,{}),Object(x.jsx)(H.a.Control,{type:"email",name:"email",placeholder:"Enter email",onChange:m,value:b})]}),Object(x.jsxs)(H.a.Group,{controlId:"formGroupPassword",children:[Object(x.jsx)(H.a.Label,{}),Object(x.jsx)(H.a.Control,{type:"text",placeholder:"Phone",name:"phone",onChange:m,value:u})]}),Object(x.jsxs)(H.a.Group,{controlId:"formGroupPassword",children:[Object(x.jsx)(H.a.Label,{}),Object(x.jsx)(H.a.Control,{type:"text",placeholder:"Description",name:"description",onChange:m,value:O})]})]})]}),Object(x.jsxs)(P.a.Footer,{children:[c?Object(x.jsx)(A.a,{variant:"success",disabled:!0,children:"Send"}):Object(x.jsx)(A.a,{variant:"success",onClick:function(){e.addNewUser(j,b,u,O),l({name:"",email:"",phone:"",description:""}),e.onHide(),a(!0)},children:"Send"})," ",Object(x.jsx)(A.a,{onClick:e.onHide,children:"Cancel"})]})]}))})}var K=n(19),z=n.n(K);function M(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:z.a.messagePart,children:[Object(x.jsx)("div",{className:z.a.inConteiner,children:Object(x.jsx)("div",{children:Object(x.jsx)("i",{className:"fas fa-envelope-square fa-2x",children:Object(x.jsx)("small",{children:"mail@invest.com"})})})}),Object(x.jsx)("div",{className:z.a.inConteiner,children:Object(x.jsx)("div",{children:Object(x.jsx)("i",{className:"fas fa-phone-square-alt fa-2x",children:Object(x.jsx)("small",{children:"0808 80805236 or +7 956 9585858"})})})}),Object(x.jsx)("div",{className:z.a.inConteiner,id:z.a.text,children:"Our support team is available Monday\u2011Friday 9:00 am to 5:00 pm"}),Object(x.jsx)("div",{className:z.a.button,children:Object(x.jsxs)("button",{className:z.a.glowOnHover,type:"button",onClick:function(){return c(!0)},children:[Object(x.jsx)("i",{class:"far fa-envelope"})," ",Object(x.jsx)("h6",{className:z.a.textBtn,children:"Send us a message"})]})})]}),Object(x.jsx)(E,{show:n,onHide:function(){return c(!1)}})]})}var W=n(62),U=n.n(W);function D(){return Object(x.jsx)("div",{className:U.a.conteiner,children:Object(x.jsx)("p",{children:"Your cash and investments are held separately from InvestEngine in pooled client accounts at NatWest and the Crest securities depository, providing further protection. Learn more InvestEngine does not provide investment advice, or give recommendations. If you are unsure of the risk or suitability of an investment, you should seek advice from an independent financial adviser."})})}var R=n(22),V=n.n(R);function X(){return Object(x.jsxs)("div",{className:V.a.conteiner,children:[Object(x.jsx)("h6",{children:"Personal account"}),Object(x.jsxs)("div",{className:V.a.moneyConteiner,children:[Object(x.jsx)("p",{children:"Name User"}),Object(x.jsx)("p",{className:V.a.money,children:"100 000 $"})]}),Object(x.jsx)("h6",{className:V.a.isa,children:"ISA"}),Object(x.jsxs)("div",{className:V.a.btnConteiner1,children:[Object(x.jsx)("p",{children:"Grown portfolio"}),Object(x.jsx)("p",{children:"Find out more"})]}),Object(x.jsxs)("div",{className:V.a.btnConteiner2,children:[Object(x.jsx)("p",{children:"Income portfolio"}),Object(x.jsx)("p",{children:"Find out more"})]})]})}var Y=n(20),J=n(63),Q=n.n(J);function T(e){var t=e.handleNav,n=function(e){e.preventDefault();var n=e.target.id;t(n)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:Q.a.navigation,children:Object(x.jsx)("div",{children:Object(x.jsxs)(Y.a,{fill:!0,variant:"tabs",defaultActiveKey:"/home",children:[Object(x.jsx)(Y.a.Item,{children:Object(x.jsx)(Y.a.Link,{eventKey:"link-1",onClick:n,id:"overview",children:"Overview"})}),Object(x.jsx)(Y.a.Item,{children:Object(x.jsx)(Y.a.Link,{eventKey:"link-2",id:"projections",onClick:n,children:"Projections"})}),Object(x.jsx)(Y.a.Item,{children:Object(x.jsx)(Y.a.Link,{eventKey:"link-3",id:"allocation",onClick:n,children:"Allocation"})}),Object(x.jsx)(Y.a.Item,{})]})})})})}var Z=n(28),$=n.n(Z);function ee(e){var t=e.isOpen;return Object(x.jsxs)("div",{className:t?$.a.owerviewOpen:$.a.closePart,children:[Object(x.jsx)("h4",{className:$.a.money,children:" $ 1000000"}),Object(x.jsx)("p",{children:"Find your account"}),Object(x.jsx)("small",{children:"Please use the button to find your account"}),Object(x.jsxs)("div",{className:$.a.btn,children:[" ",Object(x.jsx)(A.a,{variant:"primary",children:"+ Add funds"})," "]})]})}var te=n(29),ne=n.n(te),se=n(91),ce=n(60);function ae(e){var t=e.isOpen;return Object(x.jsxs)("div",{className:t?ne.a.progectionsOpen:ne.a.closePart,children:[Object(x.jsx)("div",{className:ne.a.description,children:"Below is the income return your portfolio could achieve. You can change your projected returns by editing the initial investment or using the slider to adjust the level of risk. Once received in your portfolio, income is paid out to your nominated bank account at the beginning of the following month, unless you instruct us otherwise."}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{children:" Initial investment"}),Object(x.jsx)(se.a,{size:"sm",className:"mb-3 ".concat(ne.a.input),children:Object(x.jsx)(ce.a,{"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm"})})]})]})}var ie=n(64),re=n.n(ie),oe=n(30),le=n.n(oe);function je(){var e=Object(v.b)((function(e){return e}));return console.log(e),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:le.a.message,children:Object(x.jsx)("p",{children:Object(x.jsxs)("i",{className:"fas fa-exclamation-circle",id:le.a.i,children:[" ","Remember to complete registration and fund withim 30 days to quality for our welcome bonus"]})})}),Object(x.jsx)("div",{className:le.a.message,children:Object(x.jsx)("p",{children:Object(x.jsxs)("i",{className:"fas fa-exclamation-circle",id:le.a.i,children:[" ","Verify email adress Please make sure verify your email addres so we can contact you regarding your investments."]})})})]})}function de(){var e=Object(s.useState)(!0),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),i=Object(d.a)(a,2),r=i[0],o=i[1],l=Object(s.useState)(!1),j=Object(d.a)(l,2),b=(j[0],j[1]);return Object(x.jsxs)("div",{className:re.a.conteiner,children:[Object(x.jsx)(je,{}),Object(x.jsx)(T,{handleNav:function(e){"overview"==e?(c(!0),o(!1),b(!1)):"projections"==e?(o(!0),c(!1),b(!1)):"allocation"==e&&(b(!0),c(!1),o(!1))}}),Object(x.jsx)(ee,{isOpen:n}),Object(x.jsx)(ae,{isOpen:r})]})}var be=n(65),ue=n.n(be);function Oe(){return Object(x.jsxs)("div",{className:ue.a.conteiner,children:[Object(x.jsx)(X,{}),Object(x.jsx)(de,{})]})}var me=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(r.a,{children:Object(x.jsxs)("div",{className:j.a.conteiner,children:[Object(x.jsx)(h,{}),Object(x.jsxs)(o.d,{children:[Object(x.jsxs)(o.b,{exact:!0,path:"/questions",children:[Object(x.jsx)(F,{}),Object(x.jsx)(N,{})]}),Object(x.jsx)(o.b,{exact:!0,path:"/dashboard",children:Object(x.jsx)(Oe,{})}),Object(x.jsx)(o.b,{path:"/",children:Object(x.jsx)(o.a,{to:"/"})})]}),Object(x.jsx)(M,{}),Object(x.jsx)(D,{})]})})})},xe=n(21),he=n(66),ve={questions:{questions:["Sell all your portfolio","Sell some of your portfolio","Wait","Buy more"]}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type,e},pe=Object(xe.combineReducers)({questions:_e}),fe=Object(xe.createStore)(pe,ve,Object(he.composeWithDevTools)());i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(v.a,{store:fe,children:Object(x.jsx)(me,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={maxWidth:"style_maxWidth__23m78",navbar:"style_navbar__7A6be",sticky:"style_sticky__3aZaL",logoImg:"style_logoImg__6InKd",logoMargin:"style_logoMargin__3bDzV",logo:"style_logo__2zr9U",menu:"style_menu__10XUw",menuBtn:"style_menuBtn__1foO7","scroll-up-btn":"style_scroll-up-btn__PLMXX",show:"style_show__2wKPM",active:"style_active__2yN6R"}}},[[87,1,2]]]);
//# sourceMappingURL=main.abcf7d94.chunk.js.map