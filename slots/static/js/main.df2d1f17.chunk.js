(this["webpackJsonpslot-machine"]=this["webpackJsonpslot-machine"]||[]).push([[0],[,,function(e,t,n){e.exports={wrapper:"reel_wrapper__FEjFV",window:"reel_window__aBAB-",checkline:"reel_checkline__250f9",activeline:"reel_activeline__1gd4a","line-blink":"reel_line-blink__1BIoE",topline:"reel_topline__3yvWe",midline:"reel_midline__THzvI",bottomline:"reel_bottomline__oS7gd",rotating:"reel_rotating__2G7J9","slide-top":"reel_slide-top__1UfoB",bar:"reel_bar__HRgDd",top:"reel_top__1mHtD",tripleBar:"reel_tripleBar__3xl9p",center:"reel_center__30V0r",singleBar:"reel_singleBar__3v4rX",doubleBar:"reel_doubleBar__b1bFM",seven:"reel_seven__27x99",cherry:"reel_cherry__3XqoA"}},function(e,t,n){e.exports={wrapper:"debug_wrapper__YoC6o",table:"debug_table__3eLxL",elementSelect:"debug_elementSelect__aoD81",selected:"debug_selected__2tZnH",positionSelect:"debug_positionSelect__aOaGH"}},,,,,,,function(e,t,n){e.exports={wrapper:"scoreTable_wrapper__3tK17",combination:"scoreTable_combination__3k3mq",score:"scoreTable_score__33tum",activeRow:"scoreTable_activeRow__2f3Am","shadow-drop-center":"scoreTable_shadow-drop-center__16Nfi"}},function(e,t,n){e.exports={wrapper:"App_wrapper__2Rh_f",slots:"App_slots__1cSjF",table:"App_table__2Wm0g",debug:"App_debug__38J3A",balance:"App_balance__3sBiG",spinButton:"App_spinButton__2QVaE"}},,function(e,t,n){e.exports={wrapper:"input_wrapper__3TJVy",input:"input_input__jhdgh",description:"input_description__Ufb5s",highlighted:"input_highlighted__20s0c"}},,function(e,t,n){e.exports={icon:"reelIcon_icon__ja47l",small:"reelIcon_small__1n0oP",cherry:"reelIcon_cherry__As6OR",seven:"reelIcon_seven__2HSSh",tripleBar:"reelIcon_tripleBar__3tyLP",doubleBar:"reelIcon_doubleBar__28cjV",singleBar:"reelIcon_singleBar__UtAL_"}},function(e,t,n){e.exports={button:"button_button__2pFT2",default:"button_default__3KiSZ",action:"button_action__2-3YE"}},,,,function(e,t,n){e.exports=n(27)},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),l=n.n(i),o=(n(25),n(17)),c=n(12),s=n.n(c),u=n(14),m=n(4),d=n(5),p=n(7),b=n(6),_=n(9),h=n(8),g=n(15),v=n.n(g),f=n(1),y=n.n(f),k=function(e){var t=e.element,n=e.small;return r.a.createElement("div",{className:y()(v.a.icon,v.a[t],n&&v.a.small)})},E=["tripleBar","singleBar","doubleBar","seven","cherry"],B=n(2),w=n.n(B),C=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.rotating,n=e.value,a=e.activeLines,i="center"in n?n.center:n.top,l="center"in n?"center":"top";return r.a.createElement("div",{className:w.a.wrapper},r.a.createElement("div",{className:w.a.window},r.a.createElement("div",{className:y()(w.a.checkline,w.a.topline,a.includes("top")&&w.a.activeline)}),r.a.createElement("div",{className:y()(w.a.checkline,w.a.midline,a.includes("center")&&w.a.activeline)}),r.a.createElement("div",{className:y()(w.a.checkline,w.a.bottomline,a.includes("bottom")&&w.a.activeline)}),r.a.createElement("div",{className:y()(w.a.bar,w.a[i],w.a[l],t&&w.a.rotating)},r.a.createElement(k,{element:"cherry"}),E.map((function(e,t){return r.a.createElement(k,{element:e,key:t})})),r.a.createElement(k,{element:"tripleBar"}))),r.a.createElement("div",{className:w.a.checkLine}))}}]),t}(r.a.Component),j=n(3),O=n.n(j),S=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(b.a)(t).call(this,e))).onClick=n.onClick.bind(Object(_.a)(n)),n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"onClick",value:function(e){var t=Number(e.currentTarget.getAttribute("data-reelindex"));e.currentTarget.classList.contains(O.a.elementSelect)?this.props.onChange({reel:t,element:e.currentTarget.getAttribute("data-value")}):this.props.onChange({reel:t,line:e.currentTarget.getAttribute("data-value")})}},{key:"render",value:function(){var e=this,t=this.props.positions;return r.a.createElement("div",{className:O.a.wrapper},r.a.createElement("table",{className:O.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:5},"Reels Value"),r.a.createElement("td",{colSpan:3},"Stop line"))),r.a.createElement("tbody",null,t.map((function(t,n){return r.a.createElement("tr",{key:n},E.map((function(a,i){return r.a.createElement("td",{className:y()(O.a.elementSelect,t.element===a&&O.a.selected),"data-reelindex":n,"data-value":a,key:a,onClick:e.onClick},r.a.createElement(k,{small:!0,element:a}))})),r.a.createElement("td",{className:y()(O.a.positionSelect,"top"===t.line&&O.a.selected),"data-value":"top","data-reelindex":n,onClick:e.onClick},"Top"),r.a.createElement("td",{className:y()(O.a.positionSelect,"center"===t.line&&O.a.selected),"data-value":"center","data-reelindex":n,onClick:e.onClick},"Center"),r.a.createElement("td",{className:y()(O.a.positionSelect,"bottom"===t.line&&O.a.selected),"data-value":"bottom","data-reelindex":n,onClick:e.onClick},"Bottom"))})))))}}]),t}(r.a.Component),N=n(16),x=n.n(N),I=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"onClick",value:function(){this.props.onClick(this.props.name)}},{key:"render",value:function(){var e=this.props,t=e.name,n=e.disabled,a=e.type,i=e.text;return r.a.createElement("button",{disabled:n,type:"button",name:t,className:y()(x.a.button,x.a[a]),onClick:this.onClick.bind(this)},i)}}]),t}(r.a.Component);I.defaultProps={text:"",name:"",disabled:!1,type:"default",onClick:function(){}};var R=n(13),P=n.n(R),V=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(b.a)(t).call(this,e))).onChange=n.onChange.bind(Object(_.a)(n)),n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"onChange",value:function(e){var t=this,n=e.target.value;!this.props.readonly&&this.props.onChange&&this.setState({value:n},(function(){return t.props.onChange(t.props.name,n)}))}},{key:"render",value:function(){var e=this.props,t=e.description,n=e.name,a=e.highlighted,i=e.readonly;return r.a.createElement("div",{className:P.a.wrapper},t&&r.a.createElement("span",{className:P.a.description},t),r.a.createElement("input",{className:y()(P.a.input,a&&P.a.highlighted),type:"number",name:n,readOnly:i,value:this.props.value,onChange:this.onChange}))}}]),t}(r.a.Component);V.defaultProps={value:"",name:"",readonly:!1,highlighted:!1,onChange:function(){}};var L=[{id:1,line:"top",score:2e3,combinations:[["cherry","cherry","cherry"]]},{id:2,line:"center",score:1e3,combinations:[["cherry","cherry","cherry"]]},{id:3,line:"bottom",score:4e3,combinations:[["cherry","cherry","cherry"]]},{id:4,line:"any",score:150,combinations:[["seven","seven","seven"]]},{id:5,line:"any",score:75,combinations:[["seven","cherry"]]},{id:6,line:"any",score:50,combinations:[["tripleBar","tripleBar","tripleBar"]]},{id:7,line:"any",score:20,combinations:[["doubleBar","doubleBar","doubleBar"]]},{id:8,line:"any",score:10,combinations:[["singleBar","singleBar","singleBar"]]},{id:9,line:"any",score:5,combinations:[["singleBar","singleBar"],["singleBar","doubleBar"],["doubleBar","doubleBar"],["singleBar","tripleBar"],["doubleBar","tripleBar"],["tripleBar","tripleBar"]]}],A=n(10),D=n.n(A),T=function(e){var t=e.activeIds;return r.a.createElement("div",{className:D.a.wrapper},r.a.createElement("table",null,r.a.createElement("tbody",null,L.map((function(e){return r.a.createElement("tr",{className:y()(D.a.row,t.includes(e.id)&&D.a.activeRow),key:e.id},r.a.createElement("td",{className:D.a.elements},e.combinations.map((function(e,t){return r.a.createElement("div",{className:D.a.combination,key:t},e.map((function(e,t){return r.a.createElement(k,{small:!0,element:e,key:t})})))}))),r.a.createElement("td",{className:D.a.line},e.line),r.a.createElement("td",{className:D.a.score},e.score))})))))};function G(e,t){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(s.a.mark((function e(t,n){var a=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout((function(){a.setState(t,e)}),n)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){var t=E.findIndex((function(t){return t===e}))+1;return t<E.length?E[t]:E[0]}function J(e){var t=E.findIndex((function(t){return t===e}))-1;return t<0?E[E.length-1]:E[t]}var M=n(11),W=n.n(M),U=100,q=document.location.hash.includes("debug"),K=function(e){function t(e){var n;Object(m.a)(this,t);var a=[{element:"seven",line:"center"},{element:"seven",line:"center"},{element:"seven",line:"center"}];return(n=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={reelsRotating:[!1,!1,!1],generatorValues:n._getRandomReelValues(),winningScoreIds:[],activeLines:[],debugGeneratorValues:n.calculateGeneratorValuesFromDebug(a),debugPositions:a,gameInProgress:!1,gameOver:U<=0,debug:q,balance:U},n.delaySetState=G.bind(Object(_.a)(n)),n.onDebugBalanceChange=n.onDebugBalanceChange.bind(Object(_.a)(n)),n.onDebugPositionsChange=n.onDebugPositionsChange.bind(Object(_.a)(n)),n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"_getRandomReelValues",value:function(){for(var e=[],t=0;t<3;t++){var n=Math.floor(Math.random()*E.length);Math.random()<.5?e.push({center:E[n]}):e.push({top:E[n],bottom:H(E[n])})}return e}},{key:"runGameRound",value:function(){var e=this,t=this.state,n=t.balance,a=t.debug,r=t.debugGeneratorValues;if(!(n<1)){var i=a?r:this._getRandomReelValues(),l=this.getRoundResults(i);this.setState({gameInProgress:!0,balance:n-1,reelsRotating:[!0,!0,!0],generatorValues:i},Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.delaySetState({reelsRotating:[!1,!0,!0]},2e3);case 2:return t.next=4,e.delaySetState({reelsRotating:[!1,!1,!0]},500);case 4:return t.next=6,e.delaySetState({reelsRotating:[!1,!1,!1]},500);case 6:if(!(l.score>0)){t.next=12;break}return e.setState((function(e){return{balance:e.balance+l.score,winningScoreIds:l.ids,activeLines:l.winLines}})),t.next=10,e.delaySetState({gameInProgress:!1,winningScoreIds:[],activeLines:[]},2e3);case 10:t.next=13;break;case 12:e.setState({gameInProgress:!1});case 13:case"end":return t.stop()}}),t)}))))}}},{key:"getRoundResults",value:function(e){var t={ids:[],score:0,winLines:[]},n={top:e.map((function(e){return"top"in e?e.top:null})),center:e.map((function(e){return"center"in e?e.center:null})),bottom:e.map((function(e){return"bottom"in e?e.bottom:null}))};function a(e,t){var n=Object(o.a)(e);return t.every((function(e){var t=n.findIndex((function(t){return t===e}));return t>=0&&(n.splice(t,1),!0)}))}function r(e,n){t.ids.push(e.id),t.score+=e.score,t.winLines.includes(n)||t.winLines.push(n)}return L.forEach((function(e){"any"===e.line?Object.keys(n).forEach((function(t){e.combinations.some((function(e){return a(n[t],e)}))&&r(e,t)})):e.combinations.some((function(t){return a(n[e.line],t)}))&&r(e,e.line)})),t}},{key:"calculateGeneratorValuesFromDebug",value:function(e){return e.map((function(e){switch(e.line){case"center":return{center:e.element};case"top":return{top:e.element,bottom:H(e.element)};case"bottom":return{top:J(e.element),bottom:e.element}}}))}},{key:"onDebugPositionsChange",value:function(e){var t=e.reel,n=e.element,a=e.line,r=Object(o.a)(this.state.debugPositions),i=r[t];n?i.element=n:a&&(i.line=a),r.splice(t,1,i),this.setState({debugGeneratorValues:this.calculateGeneratorValuesFromDebug(r),debugPositions:r})}},{key:"onDebugBalanceChange",value:function(e,t){var n=Number(t);Number.isInteger(n)&&(n<0&&(n=0),n>5e3&&(n=5e3),this.setState({balance:n}))}},{key:"render",value:function(){var e=this.state,t=e.balance,n=e.gameInProgress,a=e.debug,i=e.debugPositions,l=e.winningScoreIds,o=e.activeLines,c=e.reelsRotating,s=e.generatorValues;return r.a.createElement("div",{className:W.a.wrapper},r.a.createElement("div",{className:W.a.slots},c.map((function(e,t){return r.a.createElement(C,{key:t,rotating:e,activeLines:o,value:s[t]})}))),r.a.createElement("div",{className:W.a.balance},r.a.createElement(V,{name:"balance",value:""+t,readonly:!a||n,onChange:this.onDebugBalanceChange})),r.a.createElement("div",{className:W.a.spinButton},r.a.createElement(I,{disabled:n,text:"SPIN",type:"action",onClick:this.runGameRound.bind(this)})),r.a.createElement("div",{className:W.a.table},r.a.createElement(T,{activeIds:l})),this.state.debug&&r.a.createElement("div",{className:W.a.debug},r.a.createElement(S,{positions:i,onChange:this.onDebugPositionsChange})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[20,1,2]]]);
//# sourceMappingURL=main.df2d1f17.chunk.js.map