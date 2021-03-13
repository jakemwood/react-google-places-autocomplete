(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var o=n(2),a=n(6),r=(n(0),n(74)),c={id:"props",title:"Props",sidebar_label:"Props"},l={unversionedId:"props",id:"props",isDocsHomePage:!1,title:"Props",description:"`tsx",source:"@site/docs/props.md",permalink:"/react-google-places-autocomplete/docs/props",editUrl:"https://github.com/tintef/react-google-places-autocomplete/edit/master/docs/docs/props.md",sidebar_label:"Props",sidebar:"docs",previous:{title:"Basics",permalink:"/react-google-places-autocomplete/docs/"},next:{title:"Exposed Methods",permalink:"/react-google-places-autocomplete/docs/exposed-methods"}},p=[{value:"<code>apiKey</code>",id:"apikey",children:[]},{value:"<code>apiOptions</code>",id:"apioptions",children:[]},{value:"<code>autocompletionRequest</code>",id:"autocompletionrequest",children:[]},{value:"<code>debounce</code>",id:"debounce",children:[]},{value:"<code>minLengthAutocomplete</code>",id:"minlengthautocomplete",children:[]},{value:"<code>onLoadFailed</code>",id:"onloadfailed",children:[]},{value:"<code>selectProps</code>",id:"selectprops",children:[]},{value:"<code>withSessionToken</code>",id:"withsessiontoken",children:[]}],i={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"interface GooglePlacesAutocompleteProps {\n  apiKey?: string;                               // default: ''\n  apiOptions?: ApiOptions;                       // default: { }\n  autocompletionRequest?: AutocompletionRequest; // default: { }\n  debounce?: number;                             // default: 300\n  minLengthAutocomplete?: number;                // default: 0\n  onLoadFailed?: (error: Error) => void;         // default: console.error\n  selectProps?: SelectProps;                     // default: { }\n  withSessionToken?: boolean;                    // default: false\n}\n")),Object(r.b)("p",null,"Where ",Object(r.b)("inlineCode",{parentName:"p"},"SelectProps")," are the ones accepted by ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://react-select.com/props"}),"react-select"),"."),Object(r.b)("h2",{id:"apikey"},Object(r.b)("inlineCode",{parentName:"h2"},"apiKey")),Object(r.b)("p",null,"If this parameter is passed, the component will inject the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.google.com/maps/documentation/javascript/"}),"Google Maps JavaScript API")," usign this ",Object(r.b)("inlineCode",{parentName:"p"},"apiKey"),". So there's no need to manually add the ",Object(r.b)("inlineCode",{parentName:"p"},"script")," tag to yout HTML document."),Object(r.b)("h2",{id:"apioptions"},Object(r.b)("inlineCode",{parentName:"h2"},"apiOptions")),Object(r.b)("p",null,"Object to configure the google script to inject. Let's see the shape this prop can take:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"export interface ApiOptions {\n  language?: string;\n  region?: string;\n}\n")),Object(r.b)("p",null,"Here's an example on how to use it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"<GooglePlacesAutocomplete\n  apiKey=\"***************\"\n  apiOptions={{ language: 'fr', region: 'fr' }}\n/>\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," for more information check ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.google.com/maps/documentation/javascript/localization"}),"localization documentation"),"."),Object(r.b)("h2",{id:"autocompletionrequest"},Object(r.b)("inlineCode",{parentName:"h2"},"autocompletionRequest")),Object(r.b)("p",null,"Autocompletion request object to add restrictions to the search. Let's see the shape this prop can take:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"interface LatLng {\n  lat: number;\n  lng: number;\n}\n\ninterface AutocompletionRequest {\n  bounds?: [LatLng, LatLng];\n  componentRestrictions?: { country: string | string[] };\n  location?: LatLng;\n  offset?: number;\n  radius?: number;\n  types?: string[];\n}\n")),Object(r.b)("p",null,"Here's an example on how to use it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"<GooglePlacesAutocomplete\n  autocompletionRequest={{\n    bounds: [\n      { lat: 50, lng: 50 },\n      { lat: 100, lng: 100 }\n    ],\n    componentRestrictions: {\n    country: ['us', 'ca', 'uy'],\n    }\n  }}\n/>\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," for more information check ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest"}),"google documentation"),"."),Object(r.b)("h2",{id:"debounce"},Object(r.b)("inlineCode",{parentName:"h2"},"debounce")),Object(r.b)("p",null,"The number of milliseconds to delay before making a call to Google Maps API."),Object(r.b)("h2",{id:"minlengthautocomplete"},Object(r.b)("inlineCode",{parentName:"h2"},"minLengthAutocomplete")),Object(r.b)("p",null,"Defines a minimum number of characters needed on the input in order to make requests to the Google's API."),Object(r.b)("h2",{id:"onloadfailed"},Object(r.b)("inlineCode",{parentName:"h2"},"onLoadFailed")),Object(r.b)("p",null,"Function to be called when the injection of the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.google.com/maps/documentation/javascript/"}),"Google Maps JavaScript API")," fails due to network error."),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<GooglePlacesAutocomplete\n  onLoadFailed={(error) => (\n    console.error("Could not inject Google script", error)\n  )}\n/>\n')),Object(r.b)("h2",{id:"selectprops"},Object(r.b)("inlineCode",{parentName:"h2"},"selectProps")),Object(r.b)("p",null,"As this component uses ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://react-select.com"}),"react-select")," under the hood, this prop accepts everything that's accepted by it. You can check ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://react-select.com/props"}),"react-select props here"),"."),Object(r.b)("p",null,"For example, a really common use would be to use it as a controlled input:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const [value, setValue] = useState(null);\n\n<GooglePlacesAutocomplete\n  selectProps={{\n    value,\n    onChange: setValue,\n  }}\n/>\n")),Object(r.b)("h2",{id:"withsessiontoken"},Object(r.b)("inlineCode",{parentName:"h2"},"withSessionToken")),Object(r.b)("p",null,"If this prop is set to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", the component will handle changing the ",Object(r.b)("inlineCode",{parentName:"p"},"sessionToken")," on every session. To learn more about how this works refer to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.google.com/places/web-service/session-tokens"}),"Google Places Session Token docs"),"."))}s.isMDXComponent=!0},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||r;return n?a.a.createElement(m,l(l({ref:t},i),{},{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<r;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);