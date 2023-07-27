import{d as G,a as d,e as H,b as T,u as U,s as M,h as z,j as O,_ as Q,B as W,k as X,T as Y,m as Z,n as x}from"./index.9ce0a29e.js";import{_ as nn}from"./ComplianceInfo.vue_vue_type_script_setup_true_lang.4b353f02.js";import{k as A,q as c,v as r,C as n,J as t,a1 as s,K as e,G as l,L as tn,_ as on,u as a,I as y,A as E,B as J,r as R,j as _,H as sn,F as B}from"./@vuelidate.e7200945.js";import{R as en}from"./RoundStatusBanner.fc96053b.js";import"./google-spreadsheet.016741c3.js";import"./maci.f28b6353.js";import"./@kleros/gtcr-encoder.75dc8b9f.js";const an=[{emoji:"\u{1F932}",translationKey:"free_open_source"},{emoji:"\u{1F46F}\u200D\u2640\uFE0F",translationKey:"no_clones"},{emoji:"\u{1F64B}\u200D\u2640\uFE0F",translationKey:"project_ownership"},{emoji:"\u{1F47A}",translationKey:"no_scams"}],cn=[...an],D=u=>(E("data-v-bce98780"),u=u(),J(),u),ln={id:"criteria-modal",class:"wrapper"},dn={class:"container"},rn={class:"flex-row"},un={class:"no-margin"},_n=D(()=>n("img",{src:H},null,-1)),pn={class:"content"},mn={class:"emoji","aria-hidden":"true"},hn={class:"no-margin"},vn={class:"no-margin"},gn={key:0,class:"criterion-point"},$n=D(()=>n("div",{class:"emoji","aria-hidden":"true"},"\u{1F6E1}\uFE0F",-1)),fn={class:"no-margin"},jn=A({__name:"CriteriaModal",setup(u){function v(i){return`dynamic.criteria.${i}.tagline`}function $(i){return`dynamic.criteria.${i}.description`}return(i,p)=>{const m=d,L=nn;return c(),r("div",ln,[n("div",{class:"modal-background",onClick:p[0]||(p[0]=g=>i.$emit("close"))}),n("div",dn,[n("div",null,[n("div",rn,[n("h2",null,t(i.$t("criterialModal.h2")),1),n("div",{class:"close-btn",onClick:p[1]||(p[1]=g=>i.$emit("close"))},[n("p",un,t(i.$t("criterialModal.p1")),1),_n])]),n("p",null,t(i.$t("criterialModal.p2")),1),n("p",null,[s(t(i.$t("criterialModal.p3"))+" ",1),e(m,{to:"/about/how-it-works/recipients"},{default:l(()=>[s(t(i.$t("criterialModal.link1")),1)]),_:1}),s(". ")]),n("div",pn,[(c(!0),r(tn,null,on(a(cn),({emoji:g,translationKey:f},j)=>(c(),r("div",{key:j,class:"criterion-point"},[n("div",mn,t(g),1),n("div",null,[n("h3",hn,t(i.$t(v(f))),1),n("p",vn,t(i.$t($(f))),1)])]))),128)),a(G)?(c(),r("div",gn,[$n,n("div",null,[n("h3",fn,t(i.$t("dynamic.criteria.compliance.tagline")),1),e(L,{keypath:"dynamic.criteria.compliance.description"})])])):y("",!0)])]),e(m,{to:"/join/project",class:"btn-primary fit-content"},{default:l(()=>[s(t(i.$t("criterialModal.link2")),1)]),_:1})])])}}});const bn=T(jn,[["__scopeId","data-v-bce98780"]]),K=u=>(E("data-v-7b43c90c"),u=u(),J(),u),yn={id:"join-landing"},Ln={class:"gradient"},kn={class:"hero"},wn={class:"breadcrumbs"},Rn={key:0,class:"content"},Cn={key:1,class:"content"},Fn=K(()=>n("div",{class:"big-emoji"},"\u2639",-1)),In={id:"subtitle",class:"subtitle"},Sn={class:"subtitle mt2",id:"subtitle"},Mn={class:"btn-container"},Bn={key:2,class:"content"},Tn=K(()=>n("div",{class:"big-emoji"},"\u2639",-1)),An={id:"subtitle",class:"subtitle"},En={class:"subtitle mt2",id:"subtitle"},Jn={class:"btn-container"},Dn={key:3,class:"content"},Kn={class:"subtitle"},Nn={class:"subtitle mt2"},Vn={class:"info-boxes"},qn={class:"apply-callout"},Pn={class:"countdown-label caps"},Gn={class:"countdown caps"},Hn={class:"apply-callout"},Un={class:"countdown-label caps"},zn={class:"countdown-label caps"},On={key:0,class:"apply-callout-warning"},Qn={class:"filling-up-container"},Wn={class:"countdown caps"},Xn={class:"dropdown"},Yn={id:"myTooltip",class:"hidden button-menu"},Zn={class:"warning-text"},xn={class:"btn-container"},nt={key:4,class:"content"},tt={class:"subtitle"},ot={class:"subtitle mt2"},st={class:"info-boxes"},it={class:"apply-callout"},et={class:"countdown-label caps"},at={class:"countdown caps"},ct={class:"btn-container"},lt=A({__name:"JoinLanding",setup(u){const v=U(),{maxRecipients:$,isMessageLimitReached:i,isRoundJoinPhase:p,recipientJoinDeadline:m,isAppReady:L}=M(v),g=z(),{recipientRegistryInfo:f}=M(g),j=R(null),C=R(!0),k=R(!1);_(()=>[{link:"join",url:"/join"}]);const b=_(()=>f.value),F=_(()=>b.value?.deposit),I=_(()=>b.value?.depositToken||null),h=_(()=>!v.currentRound||!b.value?null:v.currentRound.maxRecipients-b.value.recipientCount),N=_(()=>h.value===null?!1:h.value===0||i.value),V=_(()=>h.value===null?!1:h.value<20),q=_(()=>h.value===1?"1 space":`${h.value} spaces`);sn(async()=>{j.value=await O(),C.value=!1});function P(){document.getElementById("myTooltip")?.classList.toggle("hidden")}function w(){k.value=!k.value}function S(o){return o?x(o,18):""}return(o,dt)=>(c(),r("div",yn,[n("div",Ln,[n("div",kn,[e(Q,{title:"core"})])]),e(en),n("div",wn,[e(W)]),C.value||!a(L)?(c(),r("div",Rn,[n("h1",null,t(o.$t("joinLanding.loading")),1),e(X)])):a(m)&&!a(p)?(c(),r("div",Cn,[Fn,n("h1",null,t(o.$t("joinLanding.closed.h1")),1),n("div",In,t(o.$t("joinLanding.closed.subtitle1")),1),n("div",Sn,[s(t(o.$t("joinLanding.check_out_these"))+" ",1),e(d,{to:"https://ethereum.org/en/community/grants/"},{default:l(()=>[s(t(o.$t("joinLanding.other_ways_to_source_funding")),1)]),_:1}),s(t(o.$t("joinLanding.or_follow_us_on_twitter"))+" ",1),e(d,{to:"https://twitter.com/clrfund"},{default:l(()=>[s("@clrfund")]),_:1})]),n("div",Mn,[e(d,{to:"/",class:"btn-primary"},{default:l(()=>[s(t(o.$t("home")),1)]),_:1})])])):a(N)?(c(),r("div",Bn,[Tn,n("h1",null,t(o.$t("joinLanding.full.h1")),1),n("div",An,t(o.$t("joinLanding.full.subtitle1")),1),n("div",En,[s(t(o.$t("joinLanding.check_out_these"))+" ",1),e(d,{to:"https://ethereum.org/en/community/grants/"},{default:l(()=>[s(t(o.$t("joinLanding.other_ways_to_source_funding")),1)]),_:1}),s(t(o.$t("joinLanding.or_follow_us_on_twitter"))+" ",1),e(d,{to:"https://twitter.com/clrfund"},{default:l(()=>[s("@clrfund")]),_:1})]),n("div",Jn,[e(d,{to:"/",class:"btn-primary"},{default:l(()=>[s(t(o.$t("home")),1)]),_:1}),e(d,{to:"/about",class:"btn-secondary"},{default:l(()=>[s(t(o.$t("more_on_maci")),1)]),_:1})])])):j.value?(c(),r("div",Dn,[n("h1",null,t(o.$t("joinLanding.open.h1")),1),n("div",Kn,[s(t(o.$t("joinLanding.need_info_about_your_project"))+" ",1),n("strong",null,t(S(a(F)))+" "+t(a(I)),1),s(t(o.$t("joinLanding.security_deposit")),1)]),n("div",Nn,t(o.$t("joinLanding.cap_on_projects",{maxRecipients:a($)})),1),n("div",Vn,[n("div",qn,[n("div",Pn,t(o.$t("joinLanding.open.div1")),1),n("div",Gn,[a(m)?(c(),B(Y,{key:0,valueClass:"none",unitClass:"none",date:a(m)},null,8,["date"])):y("",!0)])]),n("div",Hn,[n("div",Un,t(o.$t("joinLanding.time_to_complete")),1),n("div",zn,t(o.$t("joinLanding.15_minutes_ish")),1)]),a(V)?(c(),r("div",On,[n("div",Qn,[n("div",Wn,t(o.$t("joinLanding.open.div4",{spacesRemainingString:a(q)})),1),n("div",Xn,[n("img",{class:"icon",onClick:P,src:Z}),n("div",Yn,[s(t(o.$t("joinLanding.open.div5"))+" ",1),e(d,{to:"/about/maci"},{default:l(()=>[s(t(o.$t("more_on_maci")),1)]),_:1})])])]),n("p",Zn,t(o.$t("joinLanding.open.p1")),1)])):y("",!0)]),n("div",xn,[n("button",{class:"btn-secondary",onClick:w},t(o.$t("joinLanding.see_round_criteria")),1),e(d,{to:"/join/project",class:"btn-primary"},{default:l(()=>[s(t(o.$t("add_project")),1)]),_:1})])])):(c(),r("div",nt,[n("h1",null,t(o.$t("joinLanding.join.h1")),1),n("div",tt,[s(t(o.$t("joinLanding.need_info_about_your_project"))+" ",1),n("strong",null,t(S(a(F)))+" "+t(a(I)),1),s(t(o.$t("joinLanding.security_deposit")),1)]),n("div",ot,t(o.$t("joinLanding.cap_on_projects",{maxRecipients:a($)})),1),n("div",st,[n("div",it,[n("div",et,t(o.$t("joinLanding.time_to_complete")),1),n("div",at,t(o.$t("joinLanding.15_minutes_ish")),1)])]),n("div",ct,[n("button",{class:"btn-secondary",onClick:w},t(o.$t("joinLanding.see_round_criteria")),1),e(d,{to:"/join/project",class:"btn-primary"},{default:l(()=>[s(t(o.$t("add_project")),1)]),_:1})])])),k.value?(c(),B(bn,{key:5,onClose:w})):y("",!0)]))}});const gt=T(lt,[["__scopeId","data-v-7b43c90c"]]);export{gt as default};
