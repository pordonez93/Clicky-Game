(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/arrowhead-stadium.b916e3f2.jpg"},function(e,t,a){e.exports=a.p+"static/media/kauffman-stadium.21d70203.jpg"},function(e,t,a){e.exports=a.p+"static/media/kc-library.685eddd0.jpg"},function(e,t,a){e.exports=a.p+"static/media/beer-hall.2d143abb.jpg"},function(e,t,a){e.exports=a.p+"static/media/sprint-center.9f5a2407.jpg"},function(e,t,a){e.exports=a.p+"static/media/starlight-theater.21b0b4bb.jpg"},function(e,t,a){e.exports=a.p+"static/media/the-blue-room.c5e2618b.jpg"},function(e,t,a){e.exports=a.p+"static/media/the-midland.593993a5.jpg"},function(e,t,a){e.exports=a.p+"static/media/the-nelson.9ebe3fc2.jpg"},function(e,t,a){e.exports=a.p+"static/media/the-scout.72d64d13.jpg"},function(e,t,a){e.exports=a.p+"static/media/union-station.f27e4570.jpg"},function(e,t,a){e.exports=a.p+"static/media/WWI-museum.0f1375c7.jpg"},,,function(e,t,a){e.exports=a(27)},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(3),r=a.n(i),l=a(1),o=a(4),s=a(5),d=a(19),m=a(6),u=a(20);a.e(5).then(a.t.bind(null,29,7));var p=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header-container"},c.a.createElement("h1",null,"Clicky Game!"),c.a.createElement("p",null,"Click on an image to earn points."),c.a.createElement("p",null,"But don't click on it more than once!")))},f=function(){return c.a.createElement("footer",{className:"footer mt-auto py-3"},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"text-muted"},"Clicky Game!")))};a.e(6).then(a.t.bind(null,30,7));var h=function(e){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},c.a.createElement("ul",null,c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-item",href:"/"},"Clicky Game")),c.a.createElement("li",{className:"nav-item"},"Click an image to begin!"),c.a.createElement("li",{className:"nav-item"},"Score: ",e.score," | Top Score: ",e.topScore)))};a.e(3).then(a.t.bind(null,31,7));var g=function(e){return console.log(e),c.a.createElement("div",{role:"img","aria-label":"Click Image",onClick:function(){return e.handleClick(e.id)},style:{width:200,height:150,backgroundImage:'url("'.concat(e.image,'")')},className:"clickImage"})},k=a(7),b=a.n(k),v=a(8),E=a.n(v),j=a(9),x=a.n(j),C=a(10),N=a.n(C),y=a(11),S=a.n(y),w=a(12),I=a.n(w),D=a(13),G=a.n(D),O=a(14),M=a.n(O),B=a(15),J=a.n(B),W=a(16),A=a.n(W),T=a(17),q=a.n(T),z=a(18),F=a.n(z),H=[{id:1,image:b.a,clicked:!1},{id:2,image:E.a,clicked:!1},{id:3,image:x.a,clicked:!1},{id:4,image:N.a,clicked:!1},{id:5,image:S.a,clicked:!1},{id:6,image:I.a,clicked:!1},{id:7,image:G.a,clicked:!1},{id:8,image:M.a,clicked:!1},{id:9,image:J.a,clicked:!1},{id:10,image:A.a,clicked:!1},{id:11,image:q.a,clicked:!1},{id:12,image:F.a,clicked:!1}];a.e(4).then(a.t.bind(null,28,7));var K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={data:H,score:0,topScore:0},a.handleCorrectGuess=function(e){var t=a.state,n=t.topScore,c=t.score+1,i=c>n?c:n;a.setState({data:a.shuffleData(e),score:c,topScore:i})},a.handleIncorrectGuess=function(e){a.setState({data:a.resetData(e),score:0})},a.handleItemClick=function(e){var t=!1,n=a.state.data.map(function(a){var n=Object(l.a)({},a);return n.id===e&&(n.clicked||(n.clicked=!0,t=!0)),n});t?a.handleCorrectGuess(n):a.handleIncorrectGuess(n)},a.resetData=function(e){var t=e.map(function(e){return Object(l.a)({},e,{clicked:!1})});return a.shuffleData(t)},a.shuffleData=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({data:this.shuffleData(this.state.data)})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(h,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement(p,null),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"img-container"},this.state.data.map(function(t){return c.a.createElement(g,{key:t.id,id:t.id,score:!e.state.score&&e.state.topScore,handleClick:e.handleItemClick,image:t.image})}))),c.a.createElement(f,null))}}]),t}(n.Component),L=function(){return c.a.createElement(K,null)};r.a.render(c.a.createElement(L,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.61a9d426.chunk.js.map