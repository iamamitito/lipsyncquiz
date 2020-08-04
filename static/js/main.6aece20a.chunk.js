(this.webpackJsonpqueendom=this.webpackJsonpqueendom||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/spinner.9b4f9f6a.gif"},21:function(e,t,a){e.exports=a(32)},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),s=a(4),o=a(10),i=a.n(o),m=a(20),u=a(17),p=a(5),f=function(e){var t=e.lipsync,a=e.queens,n=e.handleAnswer,r=e.showAnswers,l=e.nextLipsync;return c.a.createElement("div",{className:"lipsync w-11/12 lg:w-1/2 m-auto"},c.a.createElement("div",{className:"bg-white text-pink-600 p-5 flex flex-col rounded-md shadow-md text-center"},c.a.createElement("h2",{className:"text-2xl"},t.name),c.a.createElement("small",null,"by ",t.artist)),c.a.createElement("div",{className:"grid grid-cols-2 gap-6 mt-6"},a.map((function(e){var t=r?e.won?"text-green-500":"text-red-500":"text-pink-600";return c.a.createElement("button",{onClick:function(){return n(e.won)},className:"bg-white ".concat(t," p-4 rounded-md focus:outline-none shadow-md"),key:e.id},e.name)}))),r&&c.a.createElement("button",{className:"float-right bg-pink-500  mt-3 p-3 rounded-md focus:outline-none shadow",onClick:l},"Continue ",c.a.createElement("i",{className:"fas fa-chevron-right"})))},d=function(e){var t=e.score;return c.a.createElement("div",{className:" flex flex-col text-2xl font-semibold w-1/2 md:w-2/12 m-auto"},c.a.createElement("h1",null,"Score: "),c.a.createElement("span",{className:"text-pink-600 text-4xl "},t),c.a.createElement("span",{className:"text-lg w-full font-light"},t>80?"You're a winner, baby!":"Learn your herstory, sis!"),c.a.createElement("a",{href:"/",className:"bg-pink-500 my-3 py-2 px-4 shadow hover:bg-pink-600 rounded"},c.a.createElement("i",{className:"fas fa-redo"})))},h=function(){return c.a.createElement("nav",null,c.a.createElement("ul",{className:"flex mt-5 text-pink-300 text-2xl justify-between"},c.a.createElement("li",null,c.a.createElement(s.b,{to:"/lipsyncquiz"},c.a.createElement("i",{className:"fas fa-crown mx-5 hover:text-pink-200"}))),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/lipsyncquiz/about"},c.a.createElement("i",{className:"fas fa-info mx-5 hover:text-pink-200"})))))},E=function(){return c.a.createElement("div",{className:"container mt-20 m-auto w-screen text-center p-4 leading-loose  text-gray-100"},c.a.createElement("div",{className:"header tracking-wide"},c.a.createElement("i",{className:"fas fa-info fa-3x text-pink-300"}),c.a.createElement("h1",{className:"text-3xl font-bold my-2"},"About this app")),c.a.createElement("div",{className:"info font-light tracking-wider"},c.a.createElement("p",null,"This app uses the ",c.a.createElement("span",{className:"italic"}," No key no shade")," API to fetch lipsync songs from Rupaul's Drag Race."),c.a.createElement("p",null,"There's a total of 10 random lipsyncs per play."),c.a.createElement("p",null,"You have to chose the queen who you think won the lipsync."),c.a.createElement("p",null,"Max score: 100 points."),c.a.createElement("p",null,"Version: 1.0.0")),c.a.createElement("small",{className:"text-pink-600 tracking-wide"},"\xa9iamamitito"))},x=a(19),w=a.n(x),b=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:w.a,alt:"Loading...",style:{width:"100px",margin:"auto",display:"block"}}))},g=a(1),y=function(){var e=Object(n.useState)({}),t=Object(p.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),s=Object(p.a)(l,2),o=s[0],x=s[1],w=Object(n.useState)(function(e,t){for(var a=[],n=e;n<=t;n++){for(;0===n||25===n||38===n||42===n||43===n||44===n||45===n||46===n||47===n||52===n||55===n||56===n||60===n||67===n||72===n||80===n||84===n||86===n||93===n||98===n||101===n||105===n||112===n||119===n||120===n||133===n||135===n||136===n||137===n||138===n||144===n||145===n||146===n||147===n||151===n||155===n||157===n||159===n||163===n;)n+=1;a.push(n)}return a}(1,171)),y=Object(p.a)(w,2),v=y[0],k=y[1],N=Object(n.useState)(0),j=Object(p.a)(N,2),O=j[0],q=j[1],S=Object(n.useState)(!1),A=Object(p.a)(S,2),z=A[0],L=A[1];function M(e,t){var a=t-e+1,n=Math.random()*a;return Math.floor(n)+e}Object(n.useEffect)((function(){C()}),[]);var C=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=M(0,v.length-1),a=v[t],(n=Object(m.a)(v)).splice(t,1),k(n),e.next=7,fetch("http://www.nokeynoshade.party/api/lipsyncs/".concat(a));case 7:return c=e.sent,e.next=10,c.json();case 10:l=e.sent,r(l),x(l.queens),L(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(e){z||e&&q(O+10),L(!0)};return o.length>0?c.a.createElement(n.Fragment,null,c.a.createElement(h,null),c.a.createElement(g.b,{path:"/lipsyncquiz",exact:!0,render:function(e){return c.a.createElement("div",{className:"container mt-20 m-auto w-screen text-center"},c.a.createElement("div",{className:"crown"},c.a.createElement("i",{className:"fas fa-crown fa-5x my-5 text-pink-300"})),v.length>122?c.a.createElement(f,{handleAnswer:B,showAnswers:z,lipsync:a,queens:o,nextLipsync:C}):c.a.createElement(d,{score:O}))}}),c.a.createElement(g.b,{path:"/lipsyncquiz/about",exact:!0,component:E}),c.a.createElement(g.a,{from:"/",to:"/lipsyncquiz"})):c.a.createElement("div",{className:"mt-40"},c.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,null,c.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.6aece20a.chunk.js.map