(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c,r,a,i,o,d,s=n(1),l=n.n(s),b=n(5),u=n.n(b),j=n(6),h=n(7),x=n(10),O=n(9),p=n(2),f=n(3),g=n(0),m=f.a.h1(c||(c=Object(p.a)(["\ntext-align: center;\n"]))),v=function(e){var t=e.title,n=e.children;return Object(g.jsxs)("section",{children:[Object(g.jsx)(m,{children:t}),n]})},k=f.a.div(r||(r=Object(p.a)(["\ntext-align:center;\n"]))),y=f.a.button(a||(a=Object(p.a)(["\n    margin-left: 20px;\n    border-radius: 10px;\n    border: 1px solid black;\n    padding: 5px 10px;\n"]))),F=function(e){var t=e.incrementGood,n=e.incrementNeutral,c=e.incrementBad;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(v,{title:"Please leave feedback",children:Object(g.jsxs)(k,{children:[Object(g.jsx)(y,{type:"button",onClick:t,children:"Good"}),Object(g.jsx)(y,{type:"button",onClick:n,children:"Neutral"}),Object(g.jsx)(y,{type:"button",onClick:c,children:"Bad"})]})})})},P=f.a.div(i||(i=Object(p.a)(["\n    display: flex;\n    justify-content: space-evenly;\n    width: 400px;\n    margin: 0 auto;\n"]))),B=f.a.p(o||(o=Object(p.a)(["\nborder: 2px solid red;\ndisplay: inline-block;\npadding: 5px 15px;\n"]))),N=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(v,{title:"Statistics",children:Object(g.jsxs)(k,{children:[Object(g.jsxs)(P,{children:[Object(g.jsxs)("p",{children:["Good: ",t]}),Object(g.jsxs)("p",{children:["Neutral: ",n]}),Object(g.jsxs)("p",{children:["Bad: ",c]})]}),Object(g.jsxs)(B,{children:["Total: ",r]}),Object(g.jsxs)("p",{children:["Positive feedback: ",a," %"]})]})})})},w=f.a.p(d||(d=Object(p.a)(["\ntext-align: center;\n"]))),G=function(e){var t=e.message;return Object(g.jsx)(w,{children:t})},S=function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.incrementGood=function(){e.setState((function(e){return{good:e.good+1}}))},e.incrementNeutral=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.incrementBad=function(){e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(e,t){if(0!==t)return Math.floor(e/t*100)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,r=this.countTotalFeedback();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(F,{incrementGood:this.incrementGood,incrementNeutral:this.incrementNeutral,incrementBad:this.incrementBad}),this.countTotalFeedback()>0?Object(g.jsx)(N,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage(t,r)}):Object(g.jsx)(G,{message:"No feedback given"})]})}}]),n}(l.a.Component);n(20);u.a.render(Object(g.jsx)(l.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.6b7b583c.chunk.js.map