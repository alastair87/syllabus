(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{223:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?r.a.createElement(d,o(o({ref:t},b),{},{components:n})):r.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(223)),c={id:"learning-objectives",title:"Learning Objectives",sidebar_label:"Learning Objectives"},o={unversionedId:"react/week-3/learning-objectives",id:"react/week-3/learning-objectives",isDocsHomePage:!1,title:"Learning Objectives",description:"React Week 3",source:"@site/docs/react/week-3/learning-objectives.md",permalink:"/react/week-3/learning-objectives",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/react/week-3/learning-objectives.md",sidebar_label:"Learning Objectives",sidebar:"React",previous:{title:"Instructor Notes",permalink:"/react/week-2/instructors"},next:{title:"React - Week 3",permalink:"/react/week-3/lesson"}},l=[{value:"React Week 3",id:"react-week-3",children:[{value:"Data fetching",id:"data-fetching",children:[]},{value:"Forms",id:"forms",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"react-week-3"},"React Week 3"),Object(i.b)("h3",{id:"data-fetching"},"Data fetching"),Object(i.b)("p",null,"Show some data from an API in a component."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Can explain why a loading state is necessary when fetching data as the result is not available on the initial render"),Object(i.b)("li",{parentName:"ul"},"Be able to trigger ",Object(i.b)("inlineCode",{parentName:"li"},"fetch()")," using the ",Object(i.b)("inlineCode",{parentName:"li"},"useEffect()")," callback, with an empty array (",Object(i.b)("inlineCode",{parentName:"li"},"[]"),") as the 2nd dependencies argument"),Object(i.b)("li",{parentName:"ul"},"Be able to store data from a successful API call in state"),Object(i.b)("li",{parentName:"ul"},"Allow effects to update in response to prop changes",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Explain why a component with an effect dependent on props is broken with empty ",Object(i.b)("inlineCode",{parentName:"li"},"useEffect()")," dependencies (",Object(i.b)("inlineCode",{parentName:"li"},"[]"),")"),Object(i.b)("li",{parentName:"ul"},"Be able to fix a component with an effect dependent on props using the ",Object(i.b)("inlineCode",{parentName:"li"},"useEffect()")," dependencies"),Object(i.b)("li",{parentName:"ul"},'Can describe the "lifecycle" of a component with ',Object(i.b)("inlineCode",{parentName:"li"},"useEffect()")," when props change")))),Object(i.b)("h3",{id:"forms"},"Forms"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a simple form in React using the controlled component pattern",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Can initialise state with ",Object(i.b)("inlineCode",{parentName:"li"},"useState()")),Object(i.b)("li",{parentName:"ul"},"Be able to set the input ",Object(i.b)("inlineCode",{parentName:"li"},"value")," to the state variable"),Object(i.b)("li",{parentName:"ul"},"Can explain why the input does not change when typing if ",Object(i.b)("inlineCode",{parentName:"li"},"onChange")," is not set"),Object(i.b)("li",{parentName:"ul"},"Be able to update the state using an ",Object(i.b)("inlineCode",{parentName:"li"},"onChange")," handler"))),Object(i.b)("li",{parentName:"ul"},"Use data from a submitted form to update the application",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Be able to handle an ",Object(i.b)("inlineCode",{parentName:"li"},"onSubmit")," event to the form"),Object(i.b)("li",{parentName:"ul"},"Be able to collect the form state variables and use them (setting state, POST request)")))))}p.isMDXComponent=!0}}]);