"use strict";(self.webpackChunkmainstreamtoken_com=self.webpackChunkmainstreamtoken_com||[]).push([[5276],{1359:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"whitepaper/technical_appendix","title":"Technical Appendix: MainstreamToken ($MAIN) System Specifications","description":"This appendix provides technical details about the MainstreamToken (MT) system, including the data structure for on-chain storage, the hashing process, a client-side implementation focus, licensing standards, verification processes, and other technical specifications.","source":"@site/docs/whitepaper/technical_appendix.md","sourceDirName":"whitepaper","slug":"/whitepaper/technical_appendix","permalink":"/docs/whitepaper/technical_appendix","draft":false,"unlisted":false,"editUrl":"https://github.com/mainstreamorganization/mainstreamtoken.com/tree/main/docs/whitepaper/technical_appendix.md","tags":[],"version":"current","frontMatter":{}}');var r=i(4848),l=i(8453);const t={},c="Technical Appendix: MainstreamToken ($MAIN) System Specifications",a={},o=[{value:"A. Core Protocol",id:"a-core-protocol",level:2},{value:"License String Format (MTL v1.0):",id:"license-string-format-mtl-v10",level:3},{value:"B. Implementation",id:"b-implementation",level:2},{value:"Verification Procedure:",id:"verification-procedure",level:3},{value:"C. Technical Details",id:"c-technical-details",level:2},{value:"Data Structure (JSON Format):",id:"data-structure-json-format",level:3},{value:"Data Processing Steps:",id:"data-processing-steps",level:3},{value:"Verification Process:",id:"verification-process",level:3},{value:"Technology Stack:",id:"technology-stack",level:3},{value:"Key Data Considerations:",id:"key-data-considerations",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"technical-appendix-mainstreamtoken-main-system-specifications",children:"Technical Appendix: MainstreamToken ($MAIN) System Specifications"})}),"\n",(0,r.jsx)(n.p,{children:"This appendix provides technical details about the MainstreamToken (MT) system, including the data structure for on-chain storage, the hashing process, a client-side implementation focus, licensing standards, verification processes, and other technical specifications."}),"\n",(0,r.jsx)(n.h2,{id:"a-core-protocol",children:"A. Core Protocol"}),"\n",(0,r.jsx)(n.h3,{id:"license-string-format-mtl-v10",children:"License String Format (MTL v1.0):"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Base Format:"})," ",(0,r.jsx)(n.code,{children:"mtl:1-[TYPES]/[TOKENS]-[FEE]/[SPLITS];[CONDITIONS]~[ADDENDUM]~PAY:[PAYMENT_DETAILS]"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Payment Information:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"PAY:[payment_details]"}),": Required field specifying payment information in the format TYPE",":DETAILS"]}),"\n",(0,r.jsxs)(n.li,{children:["Supported payment types include:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"WALLET: Blockchain wallet address (e.g., WALLET:0x123...abc)"}),"\n",(0,r.jsxs)(n.li,{children:["BANK: Bank account details (e.g., BANK:SWIFT",":XXXXXX","|ACCT",":YYYY",")"]}),"\n",(0,r.jsxs)(n.li,{children:["PAYPAL: PayPal email address (e.g., PAYPAL",":user","@example.com)"]}),"\n",(0,r.jsxs)(n.li,{children:["STRIPE: Stripe account ID (e.g., STRIPE",":acct_xxxxx",")"]}),"\n",(0,r.jsx)(n.li,{children:"OTHER: Other payment methods with description"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Revenue split information will be displayed alongside the license string"}),"\n",(0,r.jsxs)(n.li,{children:["Examples:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"~PAY:WALLET:sol:HWrf12...xyz"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"~PAY:PAYPAL:creator@domain.com"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"~PAY:BANK:SWIFT:CHASUS33|ACCT:000123456789"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Payment Information:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PAY:[payment_details]"}),": Required field specifying payment information in the format TYPE",":DETAILS"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Supported payment types include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"WALLET: Blockchain wallet address (e.g., WALLET:0x123...abc)"}),"\n",(0,r.jsxs)(n.li,{children:["BANK: Bank account details (e.g., BANK:SWIFT",":XXXXXX","|ACCT",":YYYY",")"]}),"\n",(0,r.jsxs)(n.li,{children:["PAYPAL: PayPal email address (e.g., PAYPAL",":user","@example.com)"]}),"\n",(0,r.jsxs)(n.li,{children:["STRIPE: Stripe account ID (e.g., STRIPE",":acct_xxxxx",")"]}),"\n",(0,r.jsx)(n.li,{children:"OTHER: Other payment methods with description"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Revenue split information will be displayed alongside the license string"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"~PAY:WALLET:sol:HWrf12...xyz"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"~PAY:PAYPAL:creator@domain.com"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"~PAY:BANK:SWIFT:CHASUS33|ACCT:000123456789"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[TYPES]"}),": Indicates the type of license"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[TOKENS]"}),": The minimum token requirements"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[FEE]"}),": The percentage that is required for the revenue share, if applicable"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[SPLITS]"}),": The split for revenue"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[CONDITIONS]"}),": The conditions for the license"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[ADDENDUM]"}),": Optional addendums to the license"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Types:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"P"})," = Personal use"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"C"})," = Commercial use"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"N"})," = Non-profit use"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"D"})," = Derivative work"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Examples:"}),"\nNote: For license strings with revenue splits, the lines following the license string indicate the payment wallet addresses. The first wallet address is the primary fee collection wallet, followed by any additional split wallet addresses."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mtl:1",children:"MTLv1-P/100;+32M\nsol:901234981203182301\nsol:901234981203182\nsol:9012349812031111\n"})}),"\n",(0,r.jsx)(n.p,{children:"(Personal use, 100 tokens, 32 months duration, with primary wallet and two split wallets)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"mtl:1-C/1000-5:30:40:30;+1Y<1M[US]{W,M}~LICENSE:CC-BY~PAYMENT_WALLET:HWrf12xyz"}),"\nsol:0x1abc...def\n(Commercial use, 1000 tokens, 5% fee, 30% to protocol, 40% to wallet, 30% to contract, 1 year duration, under 1M revenue cap, US only, web and mobile usage, CC-BY license, payment wallet)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"mtl:1-N/50;+0~LICENSE:GPL~PAYMENT_WALLET:HWrf12xyz"}),"\nsol:0x1abc...def\n(Non-profit use, 50 tokens, perpetual duration, GPL license, payment wallet)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"mtl:1-D/10000-10:20:40:40;+2Q>100K[!CN]{!G}~LICENSE:CUSTOM~PAYMENT_WALLET:HWrf12xyz"}),"\nsol:0x1abc...def\n(Derivative work, 10000 tokens, 10% fee, 20% to protocol, 40% to wallet, 40% to contract, 2 quarters duration, over 100K revenue minimum, exclude China, no games, custom license, payment wallet)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Token Requirements:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Format: ",(0,r.jsx)(n.code,{children:"[amount]"})]}),"\n",(0,r.jsxs)(n.li,{children:["Examples:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"0"})," (Donation)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"50"})," (Non-Profit)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"100"})," (Personal)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10K"})," (Commercial)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Fee & Splits:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Format: ",(0,r.jsx)(n.code,{children:"[fee]:[split1]:[split2]:[split3]"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[fee]"})," = percentage fee"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[split1]"})," = percentage for protocol"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[split2]"})," = percentage to wallet"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[split3]"})," = percentage to contract"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Example: ",(0,r.jsx)(n.code,{children:"5:30:40:30"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"5% fee, 30% to protocol, 40% to wallet, 30% to contract"}),"\n",(0,r.jsx)(n.li,{children:"A fee value of 0 denotes donation acceptance, meaning any amount is acceptable. The fee is a required field."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Conditions:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Time"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"+[duration]"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"+12M"})," (12 months)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"+1Y"})," (1 year)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"+0"})," (infinite)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"+2Q"})," (2 quarters)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Revenue"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<[cap]"})," or ",(0,r.jsx)(n.code,{children:">[min]"})," or ",(0,r.jsx)(n.code,{children:"=[amount]"})," or ",(0,r.jsx)(n.code,{children:"!>[max]"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<1M"})," (under 1M cap)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:">100K"})," (minimum 100K)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"=500K"})," (exact 500K)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"!>2M"})," (must not exceed 2M)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Geographic"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"[region codes]"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[US]"})," (US only)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[!CN]"})," (exclude China)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[US,EU]"})," (US and EU)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Usage"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"{type}"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"{W}"})," (web only)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"{M}"})," (mobile only)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"{W,M}"})," (web & mobile)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"{!G}"})," (no games)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Asset Specification:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Format: ",(0,r.jsx)(n.code,{children:"#[asset_id]"})]}),"\n",(0,r.jsxs)(n.li,{children:["Examples:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"#A1"})," (Single asset reference)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"#NFT1"})," (NFT reference)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"#COL1"})," (Collection reference)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"#[A1,A2]"})," (Multiple specific assets)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"#[COL1:1-100]"})," (Range in collection)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Asset Grouping:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Format: ",(0,r.jsx)(n.code,{children:"#[collection:range]"})]}),"\n",(0,r.jsxs)(n.li,{children:["Examples:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"#[NFT:1-10]"})," (NFTs 1-10)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"#[ART:ALL]"})," (Entire art collection)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"#[MUSIC:2024]"})," (2024 music releases)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Asset ID Structure:"}),"\nBase Format: [CATEGORY]-[TYPE]-[CREATOR]-[UNIQUE]-[VERSION]"]}),"\n",(0,r.jsx)(n.p,{children:"Categories:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DIG = Digital Assets"}),"\n",(0,r.jsx)(n.li,{children:"PHY = Physical Assets"}),"\n",(0,r.jsx)(n.li,{children:"EST = Estate/Property"}),"\n",(0,r.jsx)(n.li,{children:"LEG = Legal Documents"}),"\n",(0,r.jsx)(n.li,{children:"CRY = Crypto Assets"}),"\n",(0,r.jsx)(n.li,{children:"INT = Intellectual Property"}),"\n",(0,r.jsx)(n.li,{children:"MISC = Miscellaneous/Uncategorized"}),"\n",(0,r.jsx)(n.li,{children:"UNK = Unknown Type"}),"\n",(0,r.jsx)(n.li,{children:"EXP = Experimental"}),"\n",(0,r.jsx)(n.li,{children:"TMP = Temporary"}),"\n",(0,r.jsx)(n.li,{children:"HYB = Hybrid"}),"\n",(0,r.jsx)(n.li,{children:"OTH = Other"}),"\n",(0,r.jsx)(n.li,{children:"FUT = Future Rights"}),"\n",(0,r.jsx)(n.li,{children:"OPT = Options"}),"\n",(0,r.jsx)(n.li,{children:"FWD = Forward Contracts"}),"\n",(0,r.jsx)(n.li,{children:"RGT = Future Rights"}),"\n",(0,r.jsx)(n.li,{children:"RSV = Reservations"}),"\n",(0,r.jsx)(n.li,{children:"MIX = Mixed Assets"}),"\n",(0,r.jsx)(n.li,{children:"BUN = Bundle"}),"\n",(0,r.jsx)(n.li,{children:"PKG = Package"}),"\n",(0,r.jsx)(n.li,{children:"SET = Set"}),"\n",(0,r.jsx)(n.li,{children:"GRP = Group"}),"\n",(0,r.jsx)(n.li,{children:"TMP = Temporary/Time-based"}),"\n",(0,r.jsx)(n.li,{children:"EVT = Event"}),"\n",(0,r.jsx)(n.li,{children:"SES = Session"}),"\n",(0,r.jsx)(n.li,{children:"ACC = Access"}),"\n",(0,r.jsx)(n.li,{children:"PAS = Pass"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DIG-IMG-HWrf12-001-v1 (Digital Image, Owner HWrf12, Asset 001, Version 1)"}),"\n",(0,r.jsx)(n.li,{children:"EST-RES-HWrf12-LA101-v1 (Physical Estate, Residential Property LA101, Owner HWrf12, Version 1)"}),"\n",(0,r.jsx)(n.li,{children:"LEG-WIL-HWrf12-2024-v1 (Legal Will, Year 2024, Owner HWrf12, Version 1)"}),"\n",(0,r.jsx)(n.li,{children:"MISC-UNK-HWrf12-001-v1 (Misc Unknown, Owner HWrf12, Asset 001, Version 1)"}),"\n",(0,r.jsx)(n.li,{children:"MIX-BUN-HWrf12-2024Q1-v1 (Mixed Bundle, Owner HWrf12, Q1 2024, Version 1)"}),"\n",(0,r.jsx)(n.li,{children:"TMP-EVT-HWrf12-META24-v1 (Temp Event, Owner HWrf12, Event META24, Version 1)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"b-implementation",children:"B. Implementation"}),"\n",(0,r.jsx)(n.h3,{id:"verification-procedure",children:"Verification Procedure:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Platform Verification:"})}),"\n",(0,r.jsx)(n.p,{children:"Currently Manually\nPlatform Post Comment:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"LICENSE: [LICENSE STRING]\nPAY TO: [Wallet Address / Pay Info]\nUSAGE: [URL/Location]\nTX: [Transaction ID]\nREVENUE: [If Commercial/Derivative]\nASSET: [Asset ID]\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Compliance Tracking:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Token Holdings:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Daily balance checks"}),"\n",(0,r.jsx)(n.li,{children:"Minimum requirement alerts"}),"\n",(0,r.jsx)(n.li,{children:"Grace period: 48 hours"}),"\n",(0,r.jsx)(n.li,{children:"Violation notice if below minimum"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Revenue Reporting:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Annual submission required"}),"\n",(0,r.jsx)(n.li,{children:"Payment within 30 days"}),"\n",(0,r.jsx)(n.li,{children:"Transaction verification"}),"\n",(0,r.jsx)(n.li,{children:"Split distribution tracking"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Error Handling Procedures:"})}),"\n",(0,r.jsx)(n.p,{children:"Verification Errors (100-199):"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CODE 101: Invalid License String Format"}),"\n",(0,r.jsx)(n.li,{children:"CODE 102: Missing Required Information"}),"\n",(0,r.jsx)(n.li,{children:"CODE 103: Incorrect Blockchain Specified"}),"\n",(0,r.jsx)(n.li,{children:"CODE 104: Invalid Blockchain Address"}),"\n",(0,r.jsx)(n.li,{children:"CODE 105: Invalid User Hash"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Verification Pass (000-099):"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CODE 001: License Verified Successfully"}),"\n",(0,r.jsx)(n.li,{children:"CODE 002: License Verified with User Data"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Compliance Errors (200-299):"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CODE 201: Insufficient Tokens for License"}),"\n",(0,r.jsx)(n.li,{children:"CODE 202: Missing Annual Compliance Report"}),"\n",(0,r.jsx)(n.li,{children:"CODE 203: Late Payment Detected"}),"\n",(0,r.jsx)(n.li,{children:"CODE 204: Invalid Compliance Proof"}),"\n",(0,r.jsx)(n.li,{children:"CODE 205: Payment Amount Does Not Match"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"c-technical-details",children:"C. Technical Details"}),"\n",(0,r.jsx)(n.h3,{id:"data-structure-json-format",children:"Data Structure (JSON Format):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "mtl_version": "1.0",\n  "tx_hash": "blockchain_transaction_hash_here",\n  "tx_timestamp": "timestamp_of_transaction_in_utc",\n  "license_data": {\n    "license_id_hash": "blake3_hash_of_license_id",\n    "asset_id_hash": "blake3_hash_of_asset_id",\n    "owner_address": "blockchain_address_of_owner",\n    "creation_time": "timestamp_of_license_creation_in_utc",\n    "expiration_time": "timestamp_of_license_expiration_in_utc",\n    "license_parameters": {\n      "use_type": "commercial",\n      "scope": "global",\n      "duration": "12 months",\n      "owner_program": "blockchain_address_of_program_if_applicable",\n      "promotion_urls": [\n        "https://instagram.com/username",\n        "https://tiktok.com/@username",\n        "https://youtube.com/@username"\n      ],\n      "payment_details": {\n        "payment_type": "WALLET|BANK|PAYPAL|STRIPE|OTHER",  // Payment method type\n        "payment_info": "payment method specific details",   // Required for all licenses\n        "payment_split": "5:30:40:30"                       // Optional revenue split\n      }\n    },\n    "payment_info": {\n      "type": "payment method type",\n      "details": "payment method specific information"\n    },\n  },\n  "user_data_hash": "blake3_hash_of_user_identifiable_data_offchain",\n  "user_data_hash_verification_api": "/api/verify_user_data",\n  "copyright_data_hash": "blake3_hash_of_copyright_information",\n  "copyright_data_verification_api": "/api/verify_copyright",\n  "asset_data": {\n    "asset_hash": "blake3_hash_of_asset_content",\n    "description": "text_description_of_asset",\n    "asset_data_link": "url_of_offchain_asset_data_if_applicable",\n    "asset_verification_api": "/api/verify_asset_data"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"data-processing-steps",children:"Data Processing Steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Collect Data:"})," Gather all necessary information as defined in the JSON format, using web forms and other user inputs."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Encode:"})," Convert all data to a standardized JSON string using the standard browser libraries."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hash User Data (Off-Chain):"})," Hash the user's identifiable information separately with BLAKE3, using a Javascript implementation of the algorithm, and store the original data securely off-chain to protect privacy."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hash Copyright Data (Off-Chain):"})," Hash the copyright related information separately using BLAKE3, using a Javascript implementation of the algorithm, and store the original data securely off-chain to protect privacy."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hash All Data (JSON):"})," Combine all information into a JSON structure and hash the entire JSON string, using BLAKE3 in the browser."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"On-Chain Storage:"})," Create a transaction and store the resulting BLAKE3 hash of the entire JSON object in the memo field of the transaction using a javascript library (such as Solana Web3 library)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"verification-process",children:"Verification Process:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Retrieve Hash:"})," Use a javascript library to fetch the BLAKE3 hash from the transaction's memo field."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Retrieve Data:"})," Use a javascript library to obtain the structured JSON data."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hash Data:"})," Re-hash the retrieved data, using a javascript implementation of BLAKE3."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Compare Hashes:"})," Compare the newly computed hash against the on-chain hash to verify the data integrity."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Verify User:"})," The user must provide the private user hash, for verification of the user."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"technology-stack",children:"Technology Stack:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Programming Languages:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Primary: JavaScript (specifically for browser environments). Frameworks like React, Vue, or Angular will be used to structure the application."}),"\n",(0,r.jsx)(n.li,{children:"Programs: Rust or C for writing and deploying programs to Solana."}),"\n",(0,r.jsx)(n.li,{children:"Hashing algorithm: BLAKE3, implemented in a JavaScript library for client-side use."}),"\n",(0,r.jsx)(n.li,{children:"Blockchain Interactions: Solana web3.js library (or a similar library)."}),"\n",(0,r.jsx)(n.li,{children:"Off-chain Storage: IPFS or similar decentralized storage systems (accessed via JavaScript). This will be used to store larger files and content. It will be combined with pinning incentives for long-term storage."}),"\n",(0,r.jsx)(n.li,{children:"JSON processing: Native JavaScript JSON parsing and stringification."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Smart Contracts:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Smart contracts for automated license verification will be written in Rust or C and deployed to the Solana blockchain."}),"\n",(0,r.jsx)(n.li,{children:"The smart contracts will be open-source and available for review on the project's GitHub repository."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"APIs and Code Repositories:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Specific APIs and code repositories for the hash verifications will be made available in the project's documentation."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Performance Metrics:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The system is designed to handle a large number of transactions with low transaction costs."}),"\n",(0,r.jsx)(n.li,{children:"Specific performance metrics, transaction costs, and scalability strategies will be documented in the project's documentation."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"key-data-considerations",children:"Key Data Considerations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Timestamps:"})," All timestamps will be in the Unix timestamp format in UTC time."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Privacy:"})," All personally identifiable information (PII) will be hashed and stored off-chain to ensure user privacy."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Data Integrity:"})," The BLAKE3 hash of the entire JSON structure will be stored on-chain, ensuring the integrity of the data and that no part of it has been tampered with."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"User Control:"})," Users will have control over what data is stored off-chain."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Long-Term Storage:"})," Although the blockchain is immutable, the long term storage of data is not guaranteed. For larger files, the system will use IPFS or a similar decentralized system, with pinning incentives for long-term storage."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var s=i(6540);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);