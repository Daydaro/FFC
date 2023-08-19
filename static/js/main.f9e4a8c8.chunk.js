(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,n){},64:function(e,t,n){e.exports=n(86)},72:function(e,t,n){},83:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(48),i=n.n(r),o=(n(72),n(4)),m=n(49),u=n(12),c=n(131),s=function(e){var t=e.initialValues,n=e.onInputChange,a=function(e,t){var a=parseFloat(t),l=isNaN(a)?"":a;n(e,l)};return l.a.createElement("div",null,l.a.createElement(c.a,{label:"Initial Amount",type:"number",variant:"outlined",value:t.initialAmount,onChange:function(e){return a("initialAmount",e.target.value)},fullWidth:!0,margin:"normal"}),l.a.createElement(c.a,{label:"Monthly Deposit",type:"number",variant:"outlined",value:t.monthlyDeposit,onChange:function(e){return a("monthlyDeposit",e.target.value)},fullWidth:!0,margin:"normal",helperText:"Enter the monthly deposit"}),l.a.createElement(c.a,{label:"Interest Rate (%)",type:"number",variant:"outlined",value:t.interestRate,onChange:function(e){return a("interestRate",e.target.value)},fullWidth:!0,margin:"normal"}),l.a.createElement(c.a,{label:"Target Monthly Interest",type:"number",variant:"outlined",value:t.targetMonthlyInterestEarned,onChange:function(e){return a("targetMonthlyInterestEarned",e.target.value)},fullWidth:!0,margin:"normal"}))},g=(n(47),function(e){var t=e.results,n="light"===e.themeMode?"light-mode":"dark-mode";return l.a.createElement("table",null,l.a.createElement("thead",{className:n},l.a.createElement("tr",null,l.a.createElement("th",null,"Year"),l.a.createElement("th",null,"Starting Amount"),l.a.createElement("th",null,"Yearly Deposit"),l.a.createElement("th",null,"Interest Rate (%)"),l.a.createElement("th",null,"Interest Earned"),l.a.createElement("th",null,"Monthly Interest Earned"),l.a.createElement("th",null,"Total Amount"))),l.a.createElement("tbody",null,t.map(function(e,t){return l.a.createElement("tr",{key:t,className:e.highlight?"highlighted-row":""},l.a.createElement("td",null,e.year),l.a.createElement("td",null,e.startingAmount.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),l.a.createElement("td",null,e.monthlyDeposit.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),l.a.createElement("td",null,e.interestRate.toFixed(2)),l.a.createElement("td",null,e.interestEarned.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),l.a.createElement("td",null,e.monthlyInterestEarned.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),l.a.createElement("td",null,e.totalAmount.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})))})))}),h=n(136),d=function(){return l.a.createElement("footer",null,l.a.createElement(h.a,{variant:"body2",color:"textSecondary",align:"center"},"Created by Your Name | Financial Freedom Calculator | ",(new Date).getFullYear()))},E=n(85),p=n(133),v=n(127),f=n(137),y=n(138),b=n(128),F=n(129),D=(n(83),Object(E.a)({typography:{fontFamily:"Roboto, sans-serif"}}),Object(E.a)()),I=Object(E.a)({palette:{mode:"dark"}}),C=function(){var e=Object(a.useState)({initialAmount:1e3,monthlyDeposit:100,interestRate:7}),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)("light"),c=Object(u.a)(i,2),E=c[0],C=c[1],A=Object(a.useState)([]),S=Object(u.a)(A,2),j=S[0],O=S[1];return l.a.createElement(p.a,{theme:"light"===E?D:I},l.a.createElement(v.a,null),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"app-container"},l.a.createElement(h.a,{variant:"h2",gutterBottom:!0,className:"title"},"Financial Freedom Calculator"),l.a.createElement(y.a,{color:"inherit",onClick:function(){C("light"===E?"dark":"light")},className:"theme-toggle-button"},"light"===E?l.a.createElement(b.a,null):l.a.createElement(F.a,null)),l.a.createElement(s,{initialValues:n,onInputChange:function(e,t){r(function(n){return Object(m.a)({},n,Object(o.a)({},e,parseFloat(t)))})}}),l.a.createElement(f.a,{variant:"contained",onClick:function(){var e=function(e,t,n,a,l){for(var r=[],i=e,o=1;o<=l;o++){var m=i*n/100,u=m/12,c=u>=a;i+=12*t+m,r.push({year:o,startingAmount:i-(12*t+m),monthlyDeposit:12*t,interestRate:n,interestEarned:m,monthlyInterestEarned:u,totalAmount:i,isTargetAchieved:c})}return r}(n.initialAmount,n.monthlyDeposit,n.interestRate,n.targetMonthlyInterestEarned,50),t=e.findIndex(function(e){return e.isTargetAchieved});-1!==t&&(e[t].highlight=!0),O(e)},color:"primary"},"Calculate"),j.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement(g,{results:j,themeMode:E}))),l.a.createElement(d,null)))},A=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,130)).then(function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),l(e),r(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null))),A()}},[[64,3,2]]]);
//# sourceMappingURL=main.f9e4a8c8.chunk.js.map