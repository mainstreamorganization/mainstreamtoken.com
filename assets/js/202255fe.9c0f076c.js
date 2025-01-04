"use strict";(self.webpackChunkmainstreamtoken_com=self.webpackChunkmainstreamtoken_com||[]).push([[9376],{5580:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var a=s(6540),l=s(5391),n=s(233),i=s(4848);const r=function(){const[e,t]=(0,a.useState)(""),[s,r]=(0,a.useState)(""),[c,o]=(0,a.useState)({P:!1,C:!1,N:!1,D:!1}),[d,h]=(0,a.useState)(""),[u,p]=(0,a.useState)(""),[x,v]=(0,a.useState)([{percentage:"",wallet:""}]),[j,m]=(0,a.useState)(""),[g,b]=(0,a.useState)("M"),[f,A]=(0,a.useState)(""),[N,k]=(0,a.useState)(""),[y,C]=(0,a.useState)(""),[S,w]=(0,a.useState)(""),[G,$]=(0,a.useState)(""),[M,I]=(0,a.useState)(""),[E,T]=(0,a.useState)(""),[R,O]=(0,a.useState)(""),[_,L]=(0,a.useState)("");return(0,i.jsx)(l.A,{title:"MTL Generator",description:"Generate MTL License Strings",children:(0,i.jsxs)("div",{className:n.A.appContainer,children:[(0,i.jsx)("h1",{children:"MTL Generator"}),(0,i.jsxs)("div",{className:n.A.formGroup,children:[(0,i.jsx)("label",{children:"License Type: (Required)"}),(0,i.jsxs)("div",{className:n.A.checkboxGroup,children:[(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"checkbox",checked:c.P,onChange:e=>o({...c,P:e.target.checked})}),"Personal Use"]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"checkbox",checked:c.C,onChange:e=>o({...c,C:e.target.checked})}),"Commercial Use"]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"checkbox",checked:c.N,onChange:e=>o({...c,N:e.target.checked})}),"Non-Profit Use"]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"checkbox",checked:c.D,onChange:e=>o({...c,D:e.target.checked})}),"Derivative Work"]})]})]}),(0,i.jsxs)("div",{className:n.A.formGroup,children:[(0,i.jsx)("label",{children:"Token Amount: (Required)"}),(0,i.jsx)("div",{className:n.A.tooltip,children:"Enter the number of tokens required for this license (e.g., 100, 1000)"}),(0,i.jsx)("input",{type:"text",value:d,onChange:e=>{const t=e.target.value;(""===t||/^\d*$/.test(t))&&h(t)},className:d?"":n.A.inputError}),!d&&(0,i.jsx)("div",{className:n.A.error,children:"Token amount is required"})]}),(0,i.jsxs)("div",{className:n.A.formGroup,children:[(0,i.jsx)("label",{children:"Fee: (Optional)"}),(0,i.jsx)("div",{className:n.A.tooltip,children:"Enter the percentage fee for revenue sharing (0-100)"}),(0,i.jsx)("input",{type:"text",value:u,onChange:e=>{const t=e.target.value;(""===t||/^\d*$/.test(t)&&(!t||parseInt(t)<=100))&&p(t)}}),u&&parseInt(u)>100&&(0,i.jsx)("div",{className:n.A.error,children:"Fee must be between 0 and 100"})]}),(0,i.jsxs)("div",{className:n.A.formGroup,children:[(0,i.jsx)("label",{children:"Fee Collection Wallet: (Required if Fee is set)"}),(0,i.jsx)("div",{className:n.A.tooltip,children:"Enter the Solana wallet address that will receive the fees"}),(0,i.jsx)("input",{type:"text",value:_,onChange:e=>L(e.target.value),className:u&&!_?n.A.inputError:""}),u&&!_&&(0,i.jsx)("div",{className:n.A.error,children:"Wallet address is required when fee is set"})]}),(0,i.jsxs)("div",{className:n.A.formGroup,children:[(0,i.jsx)("label",{children:"Revenue Splits: (Optional)"}),(0,i.jsx)("div",{className:n.A.tooltip,children:"Define how the revenue will be split between different wallets. If the total is less than 100%, the remaining percentage will be allocated to the fee collection wallet"}),x.map(((e,t)=>(0,i.jsxs)("div",{style:{display:"flex",marginBottom:"5px"},children:[(0,i.jsx)("input",{type:"text",placeholder:"Percentage (0-100)",value:e.percentage,onChange:e=>{const s=e.target.value;if(""===s||/^\d*$/.test(s)&&(!s||parseInt(s)<=100)){const e=[...x];e[t].percentage=s,v(e)}},className:u&&(!e.percentage||parseInt(e.percentage)>100)?n.A.inputError:"",style:{marginRight:"5px",width:"120px"}}),(0,i.jsx)("input",{type:"text",placeholder:"Wallet Address",value:e.wallet,onChange:e=>{const s=[...x];s[t].wallet=e.target.value,v(s)},style:{marginRight:"5px"}}),t>0&&(0,i.jsx)("button",{type:"button",onClick:()=>{const e=[...x];e.splice(t,1),v(e)},children:"Remove"})]},t))),x.length<10&&(0,i.jsx)("button",{type:"button",onClick:()=>v([...x,{percentage:"",wallet:""}]),children:"Add Split"})]}),(0,i.jsxs)("div",{className:n.A.formGroup,children:[(0,i.jsx)("label",{children:"Duration: (Optional)"}),(0,i.jsx)("div",{className:n.A.tooltip,children:"Specify how long the license will be valid for"}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,i.jsx)("input",{type:"number",value:j,onChange:e=>m(e.target.value),style:{marginRight:"5px"}}),(0,i.jsxs)("select",{value:g,onChange:e=>b(e.target.value),children:[(0,i.jsx)("option",{value:"s",children:"Seconds"}),(0,i.jsx)("option",{value:"m",children:"Minutes"}),(0,i.jsx)("option",{value:"h",children:"Hours"}),(0,i.jsx)("option",{value:"d",children:"Days"}),(0,i.jsx)("option",{value:"w",children:"Weeks"}),(0,i.jsx)("option",{value:"M",children:"Months"}),(0,i.jsx)("option",{value:"Y",children:"Years"})]})]})]}),(0,i.jsxs)("div",{className:n.A.formGroup,children:[(0,i.jsx)("label",{children:"Revenue Cap: (Optional)"}),(0,i.jsx)("div",{className:n.A.tooltip,children:"Maximum revenue allowed under this license (e.g., 1000000 for $1M cap)"}),(0,i.jsx)("input",{type:"text",value:f,onChange:e=>{const t=e.target.value;(""===t||/^\d*$/.test(t))&&A(t)}})]}),(0,i.jsxs)("div",{className:n.A.formGroup,children:[(0,i.jsx)("label",{children:"Revenue Min: (Optional)"}),(0,i.jsx)("div",{className:n.A.tooltip,children:"Minimum revenue required to maintain this license"}),(0,i.jsx)("input",{type:"text",value:N,onChange:e=>{const t=e.target.value;(""===t||/^\d*$/.test(t))&&k(t)}})]}),(0,i.jsxs)("div",{className:n.A.formGroup,children:[(0,i.jsx)("label",{children:"Revenue Exact: (Optional)"}),(0,i.jsx)("div",{className:n.A.tooltip,children:"Exact revenue amount required for this license"}),(0,i.jsx)("input",{type:"text",value:y,onChange:e=>{const t=e.target.value;(""===t||/^\d*$/.test(t))&&C(t)}})]}),(0,i.jsxs)("div",{className:n.A.formGroup,children:[(0,i.jsx)("label",{children:"Revenue Max: (Optional)"}),(0,i.jsx)("div",{className:n.A.tooltip,children:"Maximum revenue threshold that must not be exceeded"}),(0,i.jsx)("input",{type:"text",value:S,onChange:e=>{const t=e.target.value;(""===t||/^\d*$/.test(t))&&w(t)}})]}),(0,i.jsxs)("div",{className:n.A.formGroup,children:[(0,i.jsx)("label",{children:"Region: (Optional)"}),(0,i.jsx)("div",{className:n.A.tooltip,children:"Geographic regions where the license is valid (e.g., US, EU, or !CN to exclude China)"}),(0,i.jsx)("input",{type:"text",value:G,onChange:e=>$(e.target.value)})]}),(0,i.jsxs)("div",{className:n.A.formGroup,children:[(0,i.jsx)("label",{children:"State: (Optional)"}),(0,i.jsx)("div",{className:n.A.tooltip,children:"Geographic states where the license is valid (e.g., CA, NY, or !TX to exclude Texas)"}),(0,i.jsx)("input",{type:"text",value:M,onChange:e=>I(e.target.value)})]}),(0,i.jsxs)("div",{className:n.A.formGroup,children:[(0,i.jsx)("label",{children:"Usage: (Optional)"}),(0,i.jsx)("div",{className:n.A.tooltip,children:"Specific usage types allowed (e.g., W for web, M for mobile, !G to exclude games)"}),(0,i.jsx)("input",{type:"text",value:E,onChange:e=>T(e.target.value)})]}),(0,i.jsxs)("div",{className:n.A.formGroup,children:[(0,i.jsx)("label",{children:"Addendum: (Optional)"}),(0,i.jsx)("div",{className:n.A.tooltip,children:"Additional license terms or references (e.g., LICENSE:MIT for MIT license)"}),(0,i.jsx)("input",{type:"text",value:R,onChange:e=>O(e.target.value)})]}),(0,i.jsx)("button",{className:"button button--primary",onClick:()=>{const e=Object.keys(c).filter((e=>c[e]));if(0===e.length)return void r("At least one license type must be selected");if(!d)return void r("Token amount is required");let s=`MTLv0.1-${e.join("")}/${d}`;if(u){if(!_)return void r("Fee wallet is required when fee is set");s+=`-${u}`;x.filter((e=>e.percentage&&e.wallet)).forEach(((e,t)=>{s+=`:${e.percentage}`}))}if(s+=";",j&&g){let e;switch(g){case"s":e=parseInt(j);break;case"m":e=60*parseInt(j);break;case"h":e=60*parseInt(j)*60;break;case"d":e=60*parseInt(j)*60*24;break;case"w":e=60*parseInt(j)*60*24*7;break;case"M":e=60*parseInt(j)*60*24*30;break;case"Y":e=60*parseInt(j)*60*24*365;break;default:e=0}s+=`+${e}`}f&&(s+=`<${f}`),N&&(s+=`>${N}`),y&&(s+=`=${y}`),S&&(s+=`!>${S}`),G&&(s+=`[${G}]`),M&&(s+=`(${M})`),E&&(s+=`{${E}}`),R&&(s+=`~${R}`),(e=>/^MTLv0\.1-[P|C|N|D]*\/\d+(?:-\d+(?::\d+)*)?;(?:\+\d+)?(?:<\d+)?(?:>\d+)?(?:=\d+)?(?:!>\d+)?(?:\[[^\]]*\])?(?:\{[^\}]*\})?(?:~[^~]*)?$/.test(e))(s)?(t(s),r("")):(t(""),r("Invalid License String"))},children:"Generate License String"}),s&&(0,i.jsxs)("div",{className:n.A.licenseString,children:[(0,i.jsx)("h2",{style:{color:"red"},children:"Error:"}),(0,i.jsx)("p",{style:{color:"red"},children:s})]}),e&&!s&&(0,i.jsxs)("div",{className:n.A.licenseString,children:[(0,i.jsx)("h2",{children:"Generated License String:"}),(0,i.jsx)("p",{children:"```mtl"}),(0,i.jsx)("p",{children:e}),(0,i.jsx)("p",{children:_}),(0,i.jsx)("p",{children:"```"})]})]})})}},233:(e,t,s)=>{s.d(t,{A:()=>a});const a={appContainer:"appContainer_hXmV",formGroup:"formGroup_V9jP",checkboxGroup:"checkboxGroup_AX2b",tooltip:"tooltip_VafR",inputError:"inputError_kPTJ",error:"error_ytU3",licenseString:"licenseString_Nl7S",section:"section_bjTr",subsection:"subsection_osPe",detail:"detail_SPyg"}}}]);