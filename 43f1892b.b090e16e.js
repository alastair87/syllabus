(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),a=(n(0),n(223)),c={id:"instructors",title:"Instructor Notes",sidebar_label:"Instructor Notes"},i={unversionedId:"react/week-3/instructors",id:"react/week-3/instructors",isDocsHomePage:!1,title:"Instructor Notes",description:"Resources",source:"@site/docs/react/week-3/mentors.md",permalink:"/react/week-3/instructors",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/react/week-3/mentors.md",sidebar_label:"Instructor Notes",sidebar:"React",previous:{title:"Homework",permalink:"/react/week-3/homework"},next:{title:"React Router",permalink:"/react/react-router/lesson"}},s=[{value:"Resources",id:"resources",children:[]},{value:"Solutions",id:"solutions",children:[]},{value:"Notes for instructors",id:"notes-for-instructors",children:[{value:"Updating data when props change",id:"updating-data-when-props-change",children:[]},{value:"&quot;Lifecycle&quot; of a component",id:"lifecycle-of-a-component",children:[]},{value:"ESLint rule for React Hooks",id:"eslint-rule-for-react-hooks",children:[]},{value:"Interactive Example Index",id:"interactive-example-index",children:[]},{value:"Exercise solutions",id:"exercise-solutions",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/CodeYourFuture/react-quiz"}),"Quiz - React Module - 28/04/2019"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Created by London and Ali Smith")))),Object(a.b)("h2",{id:"solutions"},"Solutions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/CodeYourFuture/pokedex-solution"}),"PokeDex In-Class - Exercise Solution - 05/06/2020"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Created by London and Ali Smith")))),Object(a.b)("h2",{id:"notes-for-instructors"},"Notes for instructors"),Object(a.b)("h3",{id:"updating-data-when-props-change"},"Updating data when props change"),Object(a.b)("h3",{id:"lifecycle-of-a-component"},'"Lifecycle" of a component'),Object(a.b)("p",null,'With Hooks, we don\'t really talk about the "lifecycle" of a component any more, but this section is intended to show exactly what happens at each step in the code.'),Object(a.b)("p",null,'Walking through the code like this is sometimes called "playing computer". A step-by-step description has been provided in the syllabus, but this was intended as revision material. It is recommended to keep the code example on the screen and walk through each line together with the students.'),Object(a.b)("p",null,"To keep students engaged, it can be useful to ask them to predict what the next step does. This also allows you to get feedback on whether a student is following or not."),Object(a.b)("p",null,'At the end of the "playing computer" ask whether the students have spotted the bug in the logic: the effect is not updating when the prop changes. Therefore the key point to emphasize is that ',Object(a.b)("inlineCode",{parentName:"p"},"useEffect")," is ",Object(a.b)("strong",{parentName:"p"},"not")," queued when the component re-renders."),Object(a.b)("h3",{id:"eslint-rule-for-react-hooks"},"ESLint rule for React Hooks"),Object(a.b)("p",null,"Emphasize that the rule likely knows best, so if it suggests adding a dependency it is recommended to add it."),Object(a.b)("h3",{id:"interactive-example-index"},"Interactive Example Index"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://codesandbox.io/s/react-3-state-recap-38x3b?file=/src/Counter.js"}),"State recap")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://codesandbox.io/s/react-3-recap-h2p24?file=/src/MartianPhotoFetcher.js"}),"Data fetching recap")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://codesandbox.io/s/fetch-with-prop-updates-starting-point-x1dox?file=/src/App.js"}),"Effects with prop updates (not working)"),' (used in "playing computer" exercise)'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://codesandbox.io/s/fetch-with-prop-updates-working-64vw3?file=/src/App.js"}),"Effects with prop updates (working)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://codesandbox.io/s/fetch-with-loading-state-part-1-7bi9z?file=/src/FetchWithLoadingState.js"}),"Fetch with loading state (on initial load)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://codesandbox.io/s/fetch-with-loading-state-part-2-dvu6k?file=/src/FetchWithLoadingState.js"}),"Fetch with loading state (between prop changes)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://codesandbox.io/s/controlled-component-4jq1yqy8kx?file=/src/SimpleReminder.js"}),"Controlled component")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://codesandbox.io/s/controlled-component-createaccountform-m7p083zn6p?file=/src/CreateAccountForm.js"}),"Controlled component with multiple fields")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://jsbin.com/suyekiwezu/edit?js,console"}),"Object spread operator")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://jsbin.com/hiwuwobeza/edit?js,console"}),"Object spread operator with overrides")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://jsbin.com/jegerohati/edit?js,console"}),"Computed property names"))),Object(a.b)("h3",{id:"exercise-solutions"},"Exercise solutions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://codesandbox.io/s/bestpokemonselector-component-mdz0o?file=/src/BestPokemonSelector.js"}),Object(a.b)("inlineCode",{parentName:"a"},"BestPokemonSelector")," component")," for copying into dependencies array exercise"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://codesandbox.io/s/bestpokemonselector-exercise-starting-point-yt3cw?file=/src/BestPokemonSelector.js"}),Object(a.b)("inlineCode",{parentName:"a"},"BestPokemonSelector")," exercise (starting point after copy/pasting)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://codesandbox.io/s/bestpokemonselector-exercise-finishing-point-pcfwp?file=/src/BestPokemonSelector.js"}),Object(a.b)("inlineCode",{parentName:"a"},"BestPokemonSelector")," exercise (completed)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://codesandbox.io/s/caughtpokemon-form-exercise-starting-point-t5wul?file=/src/CaughtPokemon.js"}),Object(a.b)("inlineCode",{parentName:"a"},"CaughtPokemon")," exercise (starting point)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://codesandbox.io/s/caughtpokemon-form-component-wx99d?file=/src/CaughtPokemon.js"}),Object(a.b)("inlineCode",{parentName:"a"},"CaughtPokemon")," exercise (completed)"))))}p.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,h=b["".concat(c,".").concat(d)]||b[d]||u[d]||a;return n?r.a.createElement(h,i(i({ref:t},l),{},{components:n})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);