(this["webpackJsonprteshnizi-dev"]=this["webpackJsonprteshnizi-dev"]||[]).push([[0],{117:function(e,t,a){e.exports=a.p+"static/media/profile-pic-2.46d06a4c.jpeg"},126:function(e,t,a){e.exports=a.p+"static/media/bibtex.2af0cb98.bib"},129:function(e,t,a){e.exports=a.p+"static/media/teshnizi2021-tethered-pair.87f2a4ac.pdf"},130:function(e,t,a){e.exports=a.p+"static/media/teshnizi2014-tethered.c05b71a7.pdf"},131:function(e,t,a){e.exports=a.p+"static/media/teshnizi2014-tethered-techreport.a42ae89a.pdf"},132:function(e,t,a){e.exports=a.p+"static/media/teshnizi2015-thesis.aec7f99a.pdf"},133:function(e,t,a){e.exports=a.p+"static/media/teshnizi2016-stiff-tether.d8092801.pdf"},134:function(e,t,a){e.exports=a.p+"static/media/teshnizi2016-tethered-pairs-workshop.8b7537a9.pdf"},141:function(e,t,a){e.exports=a(209)},147:function(e,t,a){},161:function(e,t){},163:function(e,t){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),o=a.n(i),l=(a(146),a(147),a(7)),c=a(8),s=a(10),u=a(9),h=a(242),m=a(236),p=a(241),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).BindSubclassMembers(),n}return Object(c.a)(a,[{key:"BindSubclassMembers",value:function(){var e=this;Object.getOwnPropertyNames(Object.getPrototypeOf(this)).forEach((function(t){e[t]=e[t].bind(e)}))}}]),a}(r.a.Component),f=a(229),b=a(232),g=a(233),v=a(117),E=a.n(v),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={emailAnchor:null},n}return Object(c.a)(a,[{key:"render",value:function(){return n.createElement("header",null,n.createElement(f.a,null,n.createElement(b.a,{title:n.createElement("div",{className:"name"},"Reza Teshnizi"),subheader:n.createElement("div",null,n.createElement("div",null,"Dog Dad"),n.createElement("div",null,"PhD Candidate @ Texas A&M University"),n.createElement("div",null,"Robotics and AI Researcher"),n.createElement("div",null,"Senior Software Engineer and Manager")),avatar:n.createElement(f.a,null,n.createElement(g.a,{image:E.a,title:"Me and my dog, Ashk",className:"avatar"}))})))}}]),a}(d),k=a(235),O=a(246),j=a(33),w=a(247),x=a(43),A=a(60),D=a(85),S=a(135),z=function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,null,[{key:"isDay",get:function(){var e=(new Date).getHours();return e<18&&e>6}},{key:"Year",get:function(){return(new Date).getFullYear()}}]),e}(),M={MuiTheme:Object(S.a)({palette:{type:z.isDay?"light":"dark"},overrides:{MuiLink:{root:{color:"unset"}}}}),Colors:{unimportantText:z.isDay?"grey":"lightgrey"}},T=a(234),C=a(245),P={links:{textDecoration:"unset",cursor:"pointer"}},I=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"renderLink",value:function(e,t,a){return r.a.createElement(T.a,{onClick:a,style:P.links},r.a.createElement(C.a,{icon:t,label:e,variant:"outlined",clickable:!0}))}},{key:"renderAnchor",value:function(e,t,a){return r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",style:P.links},r.a.createElement(C.a,{icon:t,label:e,variant:"outlined",clickable:!0}))}},{key:"render",value:function(){if(this.props.url)return this.renderAnchor(this.props.label,this.props.icon,this.props.url);if(this.props.onClick)return this.renderLink(this.props.label,this.props.icon,this.props.onClick);throw new Error("Either url or onClick should be present.")}}]),a}(d),N={links:{textDecoration:"unset",cursor:"pointer"},popoverPaper:{padding:M.MuiTheme.spacing(2)}},G=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={emailAnchor:null},n}return Object(c.a)(a,[{key:"hideEmail",value:function(){this.setState({emailAnchor:null})}},{key:"showEmail",value:function(e){this.setState({emailAnchor:e.currentTarget})}},{key:"getEmail",value:function(){return"moc.liamg@izinhset.azer"}},{key:"render",value:function(){return n.createElement("header",null,n.createElement(f.a,null,n.createElement(k.a,null,n.createElement(m.a,{container:!0,spacing:3},n.createElement(O.a,{open:!!this.state.emailAnchor,onClose:this.hideEmail,anchorEl:this.state.emailAnchor,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},PaperProps:{style:N.popoverPaper}},n.createElement(j.a,{className:"secret-stuff"},this.getEmail())),n.createElement(m.a,{item:!0},n.createElement(I,{icon:n.createElement(x.a,{icon:D.a,size:"lg"}),label:"Email",onClick:this.showEmail})),n.createElement(m.a,{item:!0},n.createElement(I,{icon:n.createElement(x.a,{icon:D.b,size:"lg"}),label:"Google Scholar Profile",url:"https://scholar.google.com/citations?user=s10QCcoAAAAJ"})),n.createElement(m.a,{item:!0},n.createElement(I,{icon:n.createElement(x.a,{icon:A.c,size:"lg"}),label:"ORCiD",url:"https://orcid.org/0000-0001-8879-7146"})),n.createElement(m.a,{item:!0},n.createElement(I,{icon:n.createElement(w.a,{src:"https://logo.clearbit.com/ieee.org?greyscale=true",style:{width:30,height:30}}),label:"IEEE Xplore Profile",url:"https://ieeexplore.ieee.org/author/37085347277"})),n.createElement(m.a,{item:!0},n.createElement(I,{icon:n.createElement(x.a,{icon:A.b,size:"lg"}),label:"Linkedin",url:"https://www.linkedin.com/in/rteshnizi/"})),n.createElement(m.a,{item:!0},n.createElement(I,{icon:n.createElement(x.a,{icon:A.a,size:"lg"}),label:"Github",url:"https://github.com/rteshnizi"}))))))}}]),a}(d),_={div:{padding:"0 2vw"}},B=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e=0,t=[n.createElement("p",{key:e++},"I am a PhD student in ",n.createElement("a",{href:"https://engineering.tamu.edu/cse/index.html"},"Computer Science")," under the supervision of ",n.createElement("a",{href:"http://robotics.cs.tamu.edu/dshell/"},"Dr. Dylan Shell")," at ",n.createElement("a",{href:"https://tamu.edu/"},"Texas A&M University"),".",n.createElement("br",null),"My research interest broadly includes Robotics and Artificial Intelligence, and more specifically, Behavior Modeling, Motion Planning, and Reinforcement Learning."),n.createElement("p",{key:e++},"I received my BSc in 2012 from ",n.createElement("a",{href:"https://aut.ac.ir/"},"Amirkabir University of Technology (Tehran Polytechnic)")," in Computer Engineering and my MS in 2015 from ",n.createElement("a",{href:"https://tamu.edu/"},"Texas A&M University")," in Computer Science. My master's thesis is titled ",n.createElement("a",{href:"https://oaktrust.library.tamu.edu/handle/1969.1/155694"},n.createElement("b",null,'"Motion Planning for a Tethered Mobile Robot"')),"."),n.createElement("p",{key:e++},"I have extensive experience as a Software Engineer and manager. I have worked with many different environments and tech stacks including Linux and Windows C++, .NET, NodeJs, Electron, and many other frontend technologies (they come and go so fast, it's not worth listing)."),n.createElement("p",{key:e++},"My dog's name is Ashk. Literally ",n.createElement("a",{href:"https://translate.google.com/?client=firefox-a&hl=en#view=home&op=translate&sl=auto&tl=en&text=%D8%A7%D8%B4%DA%A9"},"translated")," from persian, it means teardrop. However, the name for me is derived from the ",n.createElement("a",{href:"https://en.wikipedia.org/wiki/Parthian_Empire"},"Parthian Empire"),', which in Persian is called the "Ashkani" Empire.'),n.createElement("p",{key:e++},"Side note: I also use this page as a playground to do some coding experiments.")];return n.createElement("div",{style:_.div},t)}}]),a}(d),F=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={emailAnchor:null},n}return Object(c.a)(a,[{key:"render",value:function(){return n.createElement("header",null,n.createElement(y,null),n.createElement(G,null),n.createElement(B,null))}}]),a}(d),R=a(122),Y=a.n(R),L=function(){function e(t){Object(l.a)(this,e),this.date=void 0,this.url=void 0,this.title=void 0,this.title=t.title||"",this.date=new Date(t.pubDate||Date.now()),this.url=t.link||""}return Object(c.a)(e,[{key:"shortTitle",get:function(){return this.title.length<25?this.title:"".concat(this.title.substr(0,22),"...")}}]),e}(),U=function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,null,[{key:"posts",get:function(){return this._posts}},{key:"updatePosts",value:function(){var e=this;return new Promise((function(t,a){e.parser.parseURL("https://cors-anywhere.herokuapp.com/https://medium.com/feed/@reza.teshnizi").then((function(a){e._posts=[],a.items&&a.items.forEach((function(t){e._posts.push(new L(t))})),t()})).catch((function(e){a(e)}))}))}}]),e}();U.parser=new Y.a,U._posts=[];var J=a(211),K={avatar:{margin:"0 1vw"},div:{padding:"1vh 2vw",display:"flex"}},H=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return n.createElement(m.a,{item:!0,xs:12},n.createElement(J.a,null,n.createElement(T.a,{href:this.props.post.url,target:"_blank",rel:"noopener",style:{color:"unset",textDecoration:"unset"}},n.createElement("div",{style:K.div},n.createElement(w.a,{src:"https://logo.clearbit.com/medium.com",style:K.avatar,title:"Medium.com"}),n.createElement("div",null,n.createElement(j.a,{variant:"subtitle2"},this.props.post.title),n.createElement(j.a,{variant:"caption"},this.props.post.date.toLocaleString()))))))}}]),a}(d),$=a(123),Q=a.n($),W={div:{margin:"1vh 2vw"}},X=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={loading:!!e.loading},n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this;e.loading!==this.props.loading&&window.setTimeout((function(){t.setState({loading:!!t.props.loading})}),500)}},{key:"render",value:function(){return n.createElement(Q.a,{active:this.state.loading,spinner:!0},n.createElement("div",{style:W.div},n.createElement(j.a,{variant:"subtitle1"},this.props.title)),n.createElement(m.a,{container:!0},this.props.children))}}]),a}(d),Z=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={loaded:!1,posts:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;U.updatePosts().then((function(){e.setState({loaded:!0,posts:U.posts})})).catch((function(){e.setState({loaded:!0})}))}},{key:"render",value:function(){return n.createElement(X,{loading:!this.state.loaded,title:"Medium Posts"},this.state.posts.map((function(e){return n.createElement(H,{key:e.url,post:e})})))}}]),a}(d),q=a(244),V=a(237),ee=a(238),te=a(239),ae=a(240),ne=a(124),re=a.n(ne),ie={link:{color:"unset",textDecoration:"underline",cursor:"pointer"},closeButton:{position:"absolute",right:8}},oe=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={googleAnalyticsNode:null,showGADialog:!1},n.checkGoogleAnalytics(),n}return Object(c.a)(a,[{key:"checkGoogleAnalytics",value:function(){var e=this;setTimeout((function(){if(gaLoaded){var t=n.createElement(T.a,{style:ie.link,onClick:function(){e.setShowGaDialog(!0)}},"\xa0I use Google Analytics.");e.setState({googleAnalyticsNode:t})}else console.warn("Google was yeeted!")}),1500)}},{key:"setShowGaDialog",value:function(e){this.setState({showGADialog:e})}},{key:"render",value:function(){var e=this;return n.createElement("footer",null,n.createElement(q.a,{onClose:function(){e.setShowGaDialog(!1)},open:this.state.showGADialog},n.createElement(V.a,null,"\xa0",n.createElement(ee.a,{style:ie.closeButton,"aria-label":"close",onClick:function(){e.setShowGaDialog(!1)}},n.createElement(re.a,null))),n.createElement(te.a,null,n.createElement(ae.a,null,"I use Google Analytics on this page just for my own curiosity. I will not share any data with any entity and I have set my\xa0",n.createElement("a",{href:"https://support.google.com/analytics/answer/1011397?hl=en",target:"_blank",rel:"noopener noreferrer"},"data sharing settings"),"\xa0 to not share data with Google or its third-party entities. If you are not comfortable with this, I recommend using Firefox browser as it provides\xa0",n.createElement("a",{href:"https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?as=u&utm_source=inproduct",target:"_blank",rel:"noopener noreferrer"},"tracking protection"),". You may additionally use an ad blocker for further protection. I recommend\xa0",n.createElement("a",{href:"https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/",target:"_blank",rel:"noopener noreferrer"},"uBlock Origin"),"\xa0 as it is available for Firefox on both Desktop and Android Phones."))),n.createElement("p",null,"Copyright \xa9 ",z.Year," Reza Teshnizi, All rights reserved. Logos provided by ",n.createElement("a",{href:"https://clearbit.com",target:"_blank",rel:"noopener noreferrer"},"Clearbit"),". I encourage using ",n.createElement("a",{href:"https://firefox.com",target:"_blank",rel:"noopener noreferrer"},"Firefox")," as your main browser.",this.state.googleAnalyticsNode))}}]),a}(d),le=a(125),ce=a(86),se={div:{padding:"1vh 2vw",display:"flex"},spacedText:{padding:"0px 5px"},acceptanceRate:{color:M.Colors.unimportantText},closeButton:{position:"absolute",right:M.MuiTheme.spacing(1),top:M.MuiTheme.spacing(1),color:M.MuiTheme.palette.grey[500]},appBar:{position:"relative"},pdf:{height:"100%"}},ue=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={showDetails:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=!0;return r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(J.a,null,r.a.createElement(T.a,{href:this.props.publicationData.file,target:"_blank",style:{color:"unset",textDecoration:"unset"}},r.a.createElement("div",{style:se.div},r.a.createElement("div",null,r.a.createElement(j.a,{variant:"body2",component:"span"},this.props.publicationData.authors.map((function(t,a){var n="and ";return e&&(n="",e=!1),"TESHNIZI"===t.lName.toUpperCase()?r.a.createElement("b",{key:a,style:se.spacedText},n,t.fName," ",t.lName):r.a.createElement("span",{key:a,style:se.spacedText},n,t.fName," ",t.lName)})),r.a.createElement("b",{style:se.spacedText},'"',this.props.publicationData.title,'"'),this.props.publicationData.venue?r.a.createElement("span",{style:se.spacedText},this.props.publicationData.venue):null),r.a.createElement("span",{style:se.spacedText},this.props.publicationData.date.format("MMM YYYY")),this.props.publicationData.acceptance?r.a.createElement(j.a,{variant:"caption",component:"span",style:Object(ce.a)(Object(ce.a)({},se.spacedText),se.acceptanceRate)},"[Acceptance Rate: ",this.props.publicationData.acceptance,"%]"):null)))))}}]),a}(d),he=a(126),me=a.n(he),pe=a(127),de=a(128),fe=a.n(de),be=a(129),ge=a.n(be),ve=a(130),Ee=a.n(ve),ye=a(131),ke=a.n(ye),Oe=a(132),je=a.n(Oe),we=a(133),xe=a.n(we),Ae=a(134),De=a.n(Ae),Se={"teshnizi2014-tethered":Ee.a,"teshnizi2014-tethered-techreport":ke.a,"teshnizi2015-thesis":je.a,"teshnizi2016-stiff-tether":xe.a,"teshnizi2016-tethered-pairs-workshop":De.a,"teshnizi2021-tethered-pair":ge.a},ze=Object(c.a)((function e(t,a){Object(l.a)(this,e),this.texKey=a,this.key=void 0,this.authors=void 0,this.title=void 0,this.abstract=void 0,this.date=void 0,this.venue=void 0,this.acceptance=void 0,this.file=void 0,this.doi=void 0,this.url=void 0;var n=t.getAuthors(),r=[];n&&n.authors$.forEach((function(e){r.push({fName:e.firstNames.join(" "),lName:e.lastNames.join(" ")})})),this.key=a,this.authors=r,this.title="".concat(t.getFieldAsString("title")),this.abstract="".concat(t.getFieldAsString("abstract")),this.date=fe()("".concat(t.getFieldAsString("year"),"-").concat(t.getFieldAsString("month")),"YYYYMM"),this.venue=t.getFieldAsString("booktitle")||t.getFieldAsString("journal")||"",this.acceptance=Number(t.getFieldAsString("acceptance")),this.file=Se[a]})),Me=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={loaded:!1,publicationEls:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(me.a).then((function(e){return e.text()})).then((function(t){var a=Object(le.parseBibFile)(t),r=Object(pe.map)(a.entries$,(function(e,t){return new ze(e,t)}));r.sort((function(e,t){return t.date.year()-e.date.year()})),e.setState({publicationEls:r.map((function(e){return n.createElement(ue,{key:e.texKey,texKey:e.texKey,publicationData:e})})),loaded:!0})}))}},{key:"render",value:function(){return n.createElement(X,{loading:!this.state.loaded,title:"Publications"},this.state.publicationEls)}}]),a}(d),Te=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={MenuIsOpen:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return n.createElement(p.a,{theme:M.MuiTheme},n.createElement(h.a,null),n.createElement("main",null,n.createElement(F,null),n.createElement(m.a,{container:!0,style:{flexGrow:1}},n.createElement(m.a,{item:!0,xs:1},"\xa0"),n.createElement(m.a,{item:!0,xs:10},n.createElement(m.a,{container:!0,spacing:3},n.createElement(m.a,{item:!0,xs:12,sm:6},n.createElement(Me,null)),n.createElement(m.a,{item:!0,xs:12,sm:6},n.createElement(Z,null)))),n.createElement(m.a,{item:!0,xs:1},"\xa0")),n.createElement(oe,null)))}}]),a}(d);o.a.render(r.a.createElement(Te,null),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.d27d7c6b.chunk.js.map