(this["webpackJsonphw19-react-app"]=this["webpackJsonphw19-react-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(12),o=a.n(r),c=a(17),s=a(2),m=a(13),i=a(14),u=a(18),h=a(15),p=a(19);var d=function(e){return console.log("SearchForm(props)"),n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"search"},"Search:"),n.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for an Employee",id:"search"}),n.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3"},"Search")))};var f=function(e){return n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},n.a.createElement("img",{alt:e.firstName,src:e.picture})),n.a.createElement("td",null,e.firstName),n.a.createElement("td",null,e.lastName),n.a.createElement("td",null,e.email),n.a.createElement("td",null,e.phone))},E=a(16),g=a.n(E),v=function(){return g.a.get("https://randomuser.me/api/?results=200&nat=us")},b=(a(42),function(e){function t(){var e,a;Object(m.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={result:[],filter:"",filterBy:"lastName",currentSort:"default",sortField:""},a.filterEmployees=function(e){console.log("filterEmployees by searchKey .... Uses State"),console.log(e),console.log(a.state.result);var t=a.state.result.filter((function(t){return t.firstName===e}));a.setState({result:t})},a.handleFormSubmit=function(e){console.log("handleFormSubmit"),e.preventDefault();var t=e.target.value,l=e.target.name;console.log("**********"),console.log(t),console.log(l),a.filterEmployees(t),a.setState(Object(s.a)({},l,t)),a.filterEmployees(t),a.filterEmployees(a.state.search)},a.handleInputChange=function(e){console.log("handleInputChange"),e.preventDefault(),console.log(e);var t=e.target.value,l=e.target.name;console.log("**********"),console.log(t),console.log(l),a.setState(Object(s.a)({},l,t))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),v().then((function(t){console.log(t),e.setState({result:t.data.results.map((function(e,t){return{firstName:e.name.first,lastName:e.name.last,picture:e.picture.large,email:e.email,phone:e.phone,dob:e.age,key:t}}))})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return console.log("render() -- remember to remove uneeded comments"),console.log("use iterator over Employee collection : [...this.state.result].map((item)"),console.log("this is the old Java hasNext iteration in disguise"),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h2",null,"Employee Directory"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(d,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}))),n.a.createElement("div",{className:"row"},n.a.createElement("table",{className:"table"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Photo"),n.a.createElement("th",null,"First Name"),n.a.createElement("th",{scope:"col"},"Last Name "),n.a.createElement("th",{scope:"col"},"Email"),n.a.createElement("th",{scope:"col"},"Phone")),Object(c.a)(this.state.result).map((function(e){return n.a.createElement(f,{picture:e.picture,firstName:e.firstName,lastName:e.lastName,email:e.email,phone:e.phone,key:e.key})})))))}}]),t}(l.Component));var N=function(){return console.log("App Called"),n.a.createElement(b,null)};o.a.render(n.a.createElement(N,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.972e478c.chunk.js.map