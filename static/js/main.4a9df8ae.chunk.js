(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,n){e.exports=n.p+"static/media/profile-pic-2.46d06a4c.jpeg"},120:function(e,t,n){e.exports=n(216)},126:function(e,t,n){},152:function(e,t){},154:function(e,t){},216:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(24),c=n.n(i),l=(n(125),n(126),n(8)),o=n(9),s=n(14),u=n(13),h=n(15),m=n(237),d=n(236),p=n(227),b=n(229),f=n(43),v=n(230),E=n(231),O=n(232),j=n(69),g=n(110),y=n(111),k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).BindSubclassMembers(),n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"BindSubclassMembers",value:function(){var e=this;Object.getOwnPropertyNames(Object.getPrototypeOf(this)).forEach(function(t){e[t]=e[t].bind(e)})}}]),t}(r.a.Component),w=n(112),M=n.n(w),x={avatar:{height:200,width:200},links:{textDecoration:"unset"}},z=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.createElement("header",null,a.createElement(p.a,null,a.createElement(b.a,{title:a.createElement(f.a,{variant:"h4"},"Reza Teshnizi"),subheader:a.createElement("div",null,a.createElement("div",null,"Dog Dad"),a.createElement("div",null,"PhD Candidate @ Texas A&M University"),a.createElement("div",null,"Robotics and AI Researcher"),a.createElement("div",null,"Senior Software Engineer and Manager")),avatar:a.createElement(p.a,null,a.createElement(v.a,{image:M.a,title:"Me and my dog, Ashk",style:x.avatar}))}),a.createElement(E.a,null,a.createElement(O.a,{container:!0,spacing:3},a.createElement(O.a,{item:!0},a.createElement("a",{href:"https://www.linkedin.com/in/rteshnizi/",target:"_blank",rel:"noopener noreferrer",style:x.links},a.createElement(j.a,{title:"Linkedin Profile",icon:g.a,size:"lg"}))),a.createElement(O.a,{item:!0},a.createElement("a",{href:"https://scholar.google.com/citations?user=s10QCcoAAAAJ&hl=en",target:"_blank",rel:"noopener noreferrer"},a.createElement(j.a,{title:"Google Scholar Profile",icon:y.a,size:"lg"})))))))}}]),t}(k),D=n(117),P=Object(D.a)({palette:{type:"dark"}}),A=n(114),S=n.n(A),_=n(115),C=n.n(_),R=function(){function e(t){Object(l.a)(this,e),this.date=void 0,this.url=void 0,this.title=void 0,this.title=t.title||"",this.date=new Date(t.pubDate||Date.now()),this.url=t.link||""}return Object(o.a)(e,[{key:"shortTitle",get:function(){return this.title.length<25?this.title:"".concat(this.title.substr(0,22),"...")}}]),e}(),L=function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,null,[{key:"updatePosts",value:function(){var e=this;return new Promise(function(t,n){e.parser.parseURL("https://cors-anywhere.herokuapp.com/https://medium.com/feed/@reza.teshnizi").then(function(n){e._posts=[],n.items&&n.items.forEach(function(t){e._posts.push(new R(t))}),t()}).catch(function(e){n(e)})})}},{key:"posts",get:function(){return this._posts}}]),e}();L.parser=new C.a,L._posts=[];var T=n(217),B=n(235),I=n(233),J={avatar:{margin:"0 1vw"},div:{padding:"1vh 2vw",display:"flex"}},G=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.createElement(O.a,{item:!0,xs:12},a.createElement(T.a,null,a.createElement(B.a,{href:this.props.post.url,target:"_blank",rel:"noopener",style:{color:"unset",textDecoration:"unset"}},a.createElement("div",{style:J.div},a.createElement(I.a,{src:"https://logo.clearbit.com/medium.com",style:J.avatar,title:"Medium.com"}),a.createElement("div",null,a.createElement(f.a,{variant:"subtitle2"},this.props.post.title),a.createElement(f.a,{variant:"caption"},this.props.post.date.toLocaleString()))))))}}]),t}(k),U={div:{margin:"1vh 2vw"}},F=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={loaded:!1,posts:[]},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;L.updatePosts().then(function(){e.setState({loaded:!0,posts:L.posts})}).catch(function(){e.setState({loaded:!0})})}},{key:"render",value:function(){return a.createElement(S.a,{active:!this.state.loaded,spinner:!0},a.createElement("div",{style:U.div},a.createElement(f.a,{variant:"subtitle1"},"Medium Posts")),a.createElement(O.a,{container:!0},this.state.posts.map(function(e){return a.createElement(G,{key:e.url,post:e})})))}}]),t}(k),N=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.createElement("footer",null,a.createElement("p",null,"Copyright \xa9 Reza Teshnizi, All rights reserved. Logos provided by ",a.createElement("a",{href:"https://clearbit.com",target:"_blank",rel:"noopener noreferrer"},"Clearbit")))}}]),t}(k),Q=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.createElement("p",null,"More Content to be added. For now, please follow me on Medium.")}}]),t}(k),q=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={MenuIsOpen:!1},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.createElement(d.a,{theme:P},a.createElement(m.a,null),a.createElement("div",{style:{display:"flex"}},a.createElement("main",{style:{flexGrow:1}},a.createElement(z,null),a.createElement(Q,null),a.createElement(F,null))),a.createElement(N,null))}}]),t}(k);c.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.4a9df8ae.chunk.js.map