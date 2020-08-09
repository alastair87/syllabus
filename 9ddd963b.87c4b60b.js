(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),r=(n(0),n(223)),o={id:"contributing-guide",title:"Contributing Guide",sidebar_label:"Contributing Guide"},c={unversionedId:"fundamentals/contributing-guide",id:"fundamentals/contributing-guide",isDocsHomePage:!1,title:"Contributing Guide",description:'Thanks for your interest in contributing! All of our lessons are a "Work in Progress" and we welcome new people willing to help out.',source:"@site/docs/fundamentals/contributing.md",permalink:"/fundamentals/contributing-guide",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/fundamentals/contributing.md",sidebar_label:"Contributing Guide",sidebar:"Fundamentals",previous:{title:"About This Course",permalink:"/fundamentals/about-this-course"},next:{title:"Instructor Notes",permalink:"/fundamentals/instructor-notes"}},l=[{value:"Consider the scope",id:"consider-the-scope",children:[]},{value:"Discussing your change",id:"discussing-your-change",children:[]},{value:"Making a Pull Request",id:"making-a-pull-request",children:[{value:"Web editor",id:"web-editor",children:[]},{value:"Git",id:"git",children:[]},{value:"Markdown",id:"markdown",children:[]},{value:"Adding a new page",id:"adding-a-new-page",children:[]}]}],u={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'Thanks for your interest in contributing! All of our lessons are a "Work in Progress" and we welcome new people willing to help out.'),Object(r.b)("h2",{id:"consider-the-scope"},"Consider the scope"),Object(r.b)("p",null,"To help us out, please consider the scope of your change(s). If the change is a typo or other minor change, please ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#making-a-pull-request"}),"make a Pull Request"),"."),Object(r.b)("p",null,"If you would like to change significant parts of a lesson, please first ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#discussing-your-change"}),"discuss it with us"),". The section of content you wish to change might be in need of significant work and we would happy accept a contribution. Other sections may be more settled and require more discussion."),Object(r.b)("h2",{id:"discussing-your-change"},"Discussing your change"),Object(r.b)("p",null,"When making a significant change we ask that you discuss it with us first. This is because we do have previous experience teaching our students with the existing content. It is important for us to retain this because we have learnt which strategies tend to work better than others."),Object(r.b)("p",null,"Please create an issue describing your change and the reasoning behind it."),Object(r.b)("h2",{id:"making-a-pull-request"},"Making a Pull Request"),Object(r.b)("p",null,"If you know how to clone a GitHub repo and write Markdown, please follow the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#git"}),"Git instructions"),". If not, don't worry! You can still contribute by following the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#web-editor"}),"Web editor instructions"),"."),Object(r.b)("h3",{id:"web-editor"},"Web editor"),Object(r.b)("p",null,"GitHub supports editing via a web interface."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Find the relevant file that you want to change. If you are struggling to find it, please ask via an issue or Slack!"),Object(r.b)("li",{parentName:"ol"},'Click the pencil "Edit this file" button in the top left header'),Object(r.b)("li",{parentName:"ol"},"Edit the file! Please see the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#markdown"}),"Markdown section"),' below. You can preview the change by clicking the "Preview changes" tab at the top of the editor'),Object(r.b)("li",{parentName:"ol"},"Once you have made your change, please fill out the 2 text boxes below the editor. The first one is a short description of what you changed, and the second is a longer description of why you made the change"),Object(r.b)("li",{parentName:"ol"},'Click the "Propose file change" button')),Object(r.b)("p",null,"This will create a ",Object(r.b)("em",{parentName:"p"},"Pull Request")," that is sent to us to review. If we have any feedback we will comment on the Pull Request and you will be notified via email."),Object(r.b)("h3",{id:"git"},"Git"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Click the Fork button to make a copy on your own account"),Object(r.b)("li",{parentName:"ol"},"Clone the repo to your computer (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"git clone git@github.com:YOUR_GITHUB_USERNAME/fundamentals-course.git"),")"),Object(r.b)("li",{parentName:"ol"},"Edit the relevant Markdown files. All typical Markdown syntax is supported."),Object(r.b)("li",{parentName:"ol"},"Commit and push your changes to your fork"),Object(r.b)("li",{parentName:"ol"},"Visit ",Object(r.b)("inlineCode",{parentName:"li"},"https://github.com/YOUR_GITHUB_USERNAME/fundamentals-course/pull/new/YOUR_BRANCH_NAME")),Object(r.b)("li",{parentName:"ol"},"Fill out the Pull Request title (what changed) and description (why you made the change)")),Object(r.b)("h3",{id:"markdown"},"Markdown"),Object(r.b)("p",null,"Lesson content is written in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Markdown"}),"Markdown"),", and compiled into a web page using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.gitbook.com/"}),"Gitbook"),"."),Object(r.b)("p",null,"You may find ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://guides.github.com/features/mastering-markdown/"}),"this Markdown guide")," helpful if you are unfamiliar with Markdown."),Object(r.b)("h3",{id:"adding-a-new-page"},"Adding a new page"),Object(r.b)("p",null,"Due to the way Gitbook works, if you want to add a new page that you want to appear in the web site, it must be added to ",Object(r.b)("inlineCode",{parentName:"p"},"SUMMARY.md"),". Add a link to the new file using a relative file path, for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-md"}),"- [My amazing page](path/to/my-page.md)\n")))}s.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),p=a,h=b["".concat(o,".").concat(p)]||b[p]||d[p]||r;return n?i.a.createElement(h,c(c({ref:t},u),{},{components:n})):i.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<r;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);