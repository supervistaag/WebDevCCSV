(this.webpackJsonpcodingchallenge=this.webpackJsonpcodingchallenge||[]).push([[0],{41:function(e){e.exports=JSON.parse('{"code":1,"data":[{"name":"ProductOne","maxSphere":12,"minSphere":-4,"maxCylinder":15,"minCylinder":5,"maxAddition":5,"minAddition":0},{"name":"ProductTwo","maxSphere":10,"minSphere":-1,"maxCylinder":13,"minCylinder":7,"maxAddition":8,"minAddition":0},{"name":"ProductThree","maxSphere":22,"minSphere":-8,"maxCylinder":18,"minCylinder":2,"maxAddition":4.5,"minAddition":0},{"name":"ProductFour","maxSphere":13,"minSphere":-4,"maxCylinder":16,"minCylinder":5,"maxAddition":2,"minAddition":0},{"name":"ProductFive","maxSphere":8,"minSphere":2,"maxCylinder":12,"minCylinder":9,"maxAddition":0,"minAddition":0}]}')},50:function(e,t,n){e.exports=n(59)},55:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),c=(n(55),n(40)),l=n(12),d=n(13),s=n(16),m=n(14),u=n(17),h=n(41),p=n(104),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.inputField,n=e.onChange,a=e.name,o=e.darkMode,i=e.label;return r.a.createElement("div",{className:o?"inputWrap":"inputWrapLight"},r.a.createElement(p.a,{id:a,type:"number",value:t,onChange:function(e){return n(a,e.target.value)},variant:"outlined",label:i,color:o&&"secondary",inputProps:{style:{color:o&&"#02e2f2"}},InputLabelProps:{style:{color:o&&"#02e2f2"}}}))}}]),t}(r.a.Component),y=n(99),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onSearch,n=e.darkMode;return r.a.createElement(y.a,{variant:"contained",onClick:t,color:n?"secondary":"primary"},"Search")}}]),t}(r.a.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.results,n=e.darkMode;return r.a.createElement("ol",null,t.map((function(e,t){return r.a.createElement("li",{key:t,className:n?"liDark":"liLight"},e.name,r.a.createElement("br",null),"Sphere: ",e.maxSphere," to ",e.minSphere,r.a.createElement("br",null),"Cylinder: ",e.maxCylinder," to ",e.minCylinder,r.a.createElement("br",null),"Addition: ",e.maxAddition," to ",e.minAddition)})))}}]),t}(r.a.Component),k=n(103),O=n(43),j=n(102),S=n(100),v=n(101),C=n(105),E=n(61),x=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.darkMode,n=e.toggledarkMode;return r.a.createElement(S.a,null,r.a.createElement(v.a,{control:r.a.createElement(C.a,{checked:t,onChange:n,name:"checked",color:"secondary"}),label:r.a.createElement(E.a,{color:t?"secondary":""},t?"Dark mode":"Light mode")}))}}]),t}(a.Component),A=Object(O.a)({palette:{primary:{main:"#007BA7"},secondary:{main:"#02e2f2"}},typography:{fontFamily:["Nunito","Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(",")}}),M=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={inputSphere:0,results:[],darkMode:!1},n.findResults=function(e){n.setState({results:h.data})},n.onSearch=function(){console.log("to be done")},n.onChange=function(e,t){n.setState(Object(c.a)({},e,t))},n.toggledarkMode=function(){n.setState({darkMode:!n.state.darkMode})},n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.darkMode,n=e.inputSphere,a=e.results;return r.a.createElement(j.a,{theme:A},r.a.createElement("div",{className:t?"AppDark":"AppLight"},r.a.createElement(k.a,{className:"searchField"},r.a.createElement(b,{inputField:n,name:"inputSphere",label:"Sphere",onChange:this.onChange}),r.a.createElement(f,{onSearch:this.onSearch})),r.a.createElement(k.a,{className:t?"serchResult":"serchResultLight"},r.a.createElement(g,{results:a})),r.a.createElement(x,{darkMode:this.state.darkMode,toggledarkMode:this.toggledarkMode})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.771b7512.chunk.js.map