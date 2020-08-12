(this["webpackJsonp22-deployment-burger"]=this["webpackJsonp22-deployment-burger"]||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"p",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"m",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"o",(function(){return _}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",m="FETCH_ORDERS_FAIL",h="AUTH_START",f="AUTH_SUCCESS",g="AUTH_FAIL",b="AUTH_LOGOUT",_="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(22),a=function(e,t){return Object(r.a)({},e,{},t)},o=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,,,function(e,t,n){"use strict";var r=n(1),a=n(18),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://react-my-burger-a3add.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},u=n(22),l=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+e,t).then((function(e){console.log(e.data.name),n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(e.data.name,t))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},s=function(){return{type:r.m}},d=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+o).then((function(e){var t,a=[];for(var o in e.data)a.push(Object(u.a)({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))})).catch((function(e){n(function(e){return{type:r.g,error:e}}(e))}))}},p=n(30),m=n.n(p),h=function(e,t){return{type:r.e,idToken:e,userId:t}},f=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},g=function(e){return function(t){setTimeout((function(){t(f())}),1e3*e)}},b=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnJo-bBVOZZa4T_SWTdYyerQPqiOYKIzo";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBnJo-bBVOZZa4T_SWTdYyerQPqiOYKIzo"),m.a.post(i,o).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(h(e.data.idToken,e.data.localId)),a(g(e.data.expiresIn))})).catch((function(e){a(function(e){return{type:r.b,error:e}}(e.response.data.error))}))}},_=function(e){return{type:r.o,path:e}},E=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(f());else{var r=localStorage.getItem("userId");e(h(t,r)),e(g((n.getTime()-(new Date).getTime())/1e3))}}else e(f())}};n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return f})),n.d(t,"j",(function(){return _})),n.d(t,"c",(function(){return E}))},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n",Potato:"BurgerIngredient_Potato__2-r8R"}},function(e,t,n){"use strict";var r=n(30),a=n.n(r).a.create({baseURL:"https://react-my-burger-a3add.firebaseio.com/"});t.a=a},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(61),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},,function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(63),d=n.n(s),p=n(9),m=n(29),h=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(m.a,{show:this.props.show,clicked:this.props.modalClosed}),l.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=h},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(40),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.buttonType]].join(" "),onClick:e.clicked},e.children)}},,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Order:"Button_Order__1qGFH",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(64),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(9),d=n(31);t.a=function(e,t){return function(n){function u(){var e,t;Object(r.a)(this,u);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(u)).call.apply(e,[this].concat(a)))).state={error:null},t.errorConfirmHandler=function(){t.setState({error:null})},t}return Object(c.a)(u,n),Object(a.a)(u,[{key:"componentWillMount",value:function(){var e=this;this.requestInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.responseInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.requestInterceptor),t.interceptors.response.eject(this.responseInterceptor)}},{key:"render",value:function(){return l.a.createElement(s.a,null,l.a.createElement(d.a,{show:this.state.error,modalClosed:this.errorConfirmHandler},l.a.createElement("big",{style:{color:"red"}},this.state.error?this.state.error.message:null)),l.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,,,function(e,t,n){"use strict";var r=n(65),a=n(0),o=n.n(a),i=n(4),c=n(5),u=n(7),l=n(6),s=n(8),d=n(17),p=n.n(d),m=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:p.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:p.a.BreadTop},o.a.createElement("div",{className:p.a.Seeds1}),o.a.createElement("div",{className:p.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:p.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:p.a.Cheese});break;case"bacon":e=o.a.createElement("div",{className:p.a.Bacon});break;case"salad":e=o.a.createElement("div",{className:p.a.Salad});break;default:e=null}return e}}]),t}(a.Component),h=n(62),f=n.n(h);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return o.a.createElement(m,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients")),o.a.createElement("div",{className:f.a.Burger},o.a.createElement(m,{type:"bread-top"}),t,o.a.createElement(m,{type:"bread-bottom"}))}},,,function(e,t,n){e.exports={Content:"Layout_Content__3H3X8"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},,,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load2:"Spinner_load2__2gkgc"}},,function(e,t,n){e.exports=n(99)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(28),i=n.n(o),c=n(21),u=n(15),l=n(20),s=n(53),d=(n(75),n(4)),p=n(5),m=n(7),h=n(6),f=n(8),g=n(19),b=n(9),_=n(54),E=n.n(_),v=n(32),O=n.n(v),y=n(55),j=n.n(y),k=n(56),S=n.n(k),I=function(e){return a.a.createElement("div",{className:S.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:j.a,alt:"MyBurger"}))},C=n(57),B=n.n(C),T=n(37),N=n.n(T),w=function(e){return a.a.createElement("li",{className:N.a.NavigationItem},a.a.createElement(c.b,{to:e.link,exact:e.exact,activeClassName:N.a.active},e.children))},D=function(e){return a.a.createElement("ul",{className:B.a.NavigationItems},a.a.createElement(w,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(w,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(w,{link:"/logout"},"Logout"):a.a.createElement(w,{link:"/auth"},"Authenticate"))},A=n(60),L=n.n(A),R=function(e){return a.a.createElement("div",{className:L.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},x=function(e){return a.a.createElement("header",{className:O.a.Toolbar},a.a.createElement(R,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:O.a.Logo},a.a.createElement(I,null)),a.a.createElement("nav",{className:O.a.DesktopOnly},a.a.createElement(D,{isAuthenticated:e.isAuth})))},P=n(23),H=n.n(P),U=n(29),M=function(e){var t=[H.a.SideDrawer,H.a.Close];return e.open&&(t=[H.a.SideDrawer,H.a.Open]),a.a.createElement(b.a,null,a.a.createElement(U.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:H.a.Logo},a.a.createElement(I,null)),a.a.createElement("nav",null,a.a.createElement(D,{isAuthenticated:e.isAuth}))))},F=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(b.a,null,a.a.createElement(x,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(M,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:E.a.Content},this.props.children))}}]),t}(r.Component),z=Object(u.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(F),Y=n(22),q=n(18),G=n(51),K=n(26),J=n.n(K),W=function(e){return a.a.createElement("div",{className:J.a.BuildControl},a.a.createElement("div",{className:J.a.Label},e.label),a.a.createElement("button",{className:J.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:J.a.More,onClick:e.added},"More"))},X=n(39),Z=n.n(X),V=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Q=function(e){return a.a.createElement("div",{className:Z.a.BuildControls},a.a.createElement("p",null,"Current Price : ",a.a.createElement("big",null,e.price.toFixed(2))),V.map((function(t){return a.a.createElement(W,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:Z.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},$=n(31),ee=n(33),te=function(e){var t=Object.keys(e.ingredients).map((function(t){return a.a.createElement("li",{key:t+1},a.a.createElement("span",{style:{textTransform:"capitalize"}},t)," : ",a.a.createElement("big",null,e.ingredients[t]))}));return a.a.createElement(b.a,null,a.a.createElement("h2",{style:{fontWeight:"500"}},"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients."),a.a.createElement("ul",null,t),a.a.createElement("p",null,"Total Price: ",a.a.createElement("big",null,e.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(ee.a,{buttonType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),a.a.createElement(ee.a,{buttonType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},ne=n(41),re=n(42),ae=n(16),oe=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.updatePurchaseState=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"render",value:function(){var e=this,t=Object(Y.a)({},this.props.ingredients);for(var n in t)t[n]=t[n]<=0;var r=null,o=this.props.error?a.a.createElement("big",{style:{marginLeft:"35%"}},"Ingredients can't be loaded!"):a.a.createElement(ne.a,null);return this.props.ingredients&&(o=a.a.createElement(b.a,null,a.a.createElement(G.a,{ingredients:this.props.ingredients}),a.a.createElement(Q,{ingredientAdded:function(t){return e.props.onIngredientAdded(t)},ingredientRemoved:function(t){return e.props.onIngredientRemoved(t)},disabled:t,price:this.props.totalPrice,purchasable:this.updatePurchaseState(this.props.ingredients),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated})),r=a.a.createElement(te,{ingredients:this.props.ingredients,price:this.props.totalPrice,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(b.a,null,a.a.createElement($.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r),o)}}]),t}(r.Component),ie=Object(u.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(ae.a(t))},onIngredientRemoved:function(t){return e(ae.i(t))},onInitIngredients:function(){return e(ae.e())},onInitPurchase:function(){return e(ae.h())},onSetAuthRedirectPath:function(t){return e(ae.j(t))}}}))(Object(re.a)(oe,q.a)),ce=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(g.a,{to:"/"})}}]),t}(r.Component),ue=Object(u.b)(null,(function(e){return{onLogout:function(){return e(ae.f())}}}))(ce),le=function(e){return function(t){function n(){var e,t;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(f.a)(n,t),Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},se=le((function(){return n.e(3).then(n.bind(null,107))})),de=le((function(){return n.e(5).then(n.bind(null,108))})),pe=le((function(){return n.e(4).then(n.bind(null,106))})),me=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(g.d,null,a.a.createElement(g.b,{path:"/auth",component:pe}),a.a.createElement(g.b,{path:"/",exact:!0,component:ie}),a.a.createElement(g.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(g.d,null,a.a.createElement(g.b,{path:"/checkout",component:se}),a.a.createElement(g.b,{path:"/orders",component:de}),a.a.createElement(g.b,{path:"/logout",component:ue}),a.a.createElement(g.b,{path:"/auth",component:pe}),a.a.createElement(g.b,{path:"/",exact:!0,component:ie}),a.a.createElement(g.a,{to:"/"}))),a.a.createElement(z,null,e)}}]),t}(r.Component),he=Object(g.f)(Object(u.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(ae.c())}}}))(me)),fe=n(25),ge=n(1),be=n(3),_e={ingredients:null,totalPrice:4,error:!1,building:!1},Ee={bacon:.7,cheese:.4,meat:1.3,salad:.5},ve=function(e,t){var n=Object(fe.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(be.b)(e.ingredients,n),totalPrice:e.totalPrice+Ee[t.ingredientName],building:!0};return Object(be.b)(e,r)},Oe=function(e,t){var n=Object(fe.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(be.b)(e.ingredients,n),totalPrice:e.totalPrice+Ee[t.ingredientName],building:!0};return Object(be.b)(e,r)},ye=function(e,t){return Object(be.b)(e,{ingredients:{bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat,salad:t.ingredients.salad},totalPrice:4,error:!1,building:!1})},je=function(e,t){return Object(be.b)(e,{error:!0})},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.a:return ve(e,t);case ge.n:return Oe(e,t);case ge.p:return ye(e,t);case ge.f:return je(e);default:return e}},Se={orders:[],loading:!1,purchased:!1},Ie=function(e,t){return Object(be.b)(e,{purchased:!1})},Ce=function(e,t){return Object(be.b)(e,{loading:!0})},Be=function(e,t){var n=Object(be.b)(t.orderData,{id:t.orderId});return Object(be.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},Te=function(e,t){return Object(be.b)(e,{loading:!1})},Ne=function(e,t){return Object(be.b)(e,{loading:!0})},we=function(e,t){return Object(be.b)(e,{orders:t.orders,loading:!1})},De=function(e,t){return Object(be.b)(e,{loading:!1})},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.m:return Ie(e);case ge.k:return Ce(e);case ge.l:return Be(e,t);case ge.j:return Te(e);case ge.h:return Ne(e);case ge.i:return we(e,t);case ge.g:return De(e);default:return e}},Le={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Re=function(e,t){return Object(be.b)(e,{error:null,loading:!0})},xe=function(e,t){return Object(be.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Pe=function(e,t){return Object(be.b)(e,{error:t.error,loading:!1})},He=function(e,t){return Object(be.b)(e,{token:null,userId:null})},Ue=function(e,t){return Object(be.b)(e,{authRedirectPath:t.path})},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.d:return Re(e);case ge.e:return xe(e,t);case ge.b:return Pe(e,t);case ge.c:return He(e);case ge.o:return Ue(e,t);default:return e}},Fe=Object(l.c)({burgerBuilder:ke,order:Ae,auth:Me}),ze=l.d,Ye=Object(l.e)(Fe,ze(Object(l.a)(s.a))),qe=a.a.createElement(u.a,{store:Ye},a.a.createElement(c.a,null,a.a.createElement(he,null)));i.a.render(qe,document.getElementById("root"))}],[[66,1,2]]]);
//# sourceMappingURL=main.c937541a.chunk.js.map