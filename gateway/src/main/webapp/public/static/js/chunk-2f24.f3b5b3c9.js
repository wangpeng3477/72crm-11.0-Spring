(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2f24"],{"+Dqn":function(t,i,a){"use strict";a.r(i);var e=a("QbLZ"),n=a.n(e),s=a("31UX"),o=a("9kPm"),r=a("9PTB"),l=a("MT78"),c=a.n(l),u=a("JgLm"),d={name:"CustomerPoolStatistics",mixins:[s.a,o.a,r.a],data:function(){return{loading:!1,axisOption:null,list:[],postParams:{},dataIndex:null,axisList:[],fieldList:[{field:"realname",name:"姓名"},{field:"deptName",name:"部门"},{field:"receiveNum",name:"公海池领取客户数"},{field:"putInNum",name:"进入公海客户数"}]}},computed:{listPostParams:function(){var t=n()({},this.postParams);if(void 0!==this.dataIndex&&null!==this.dataIndex){var i=this.axisList[this.dataIndex];delete t.type,t.startTime=i.type,t.endTime=i.type}return t}},mounted:function(){this.initAxis()},methods:{searchClick:function(t){this.postParams=t,this.getDataList(),this.getRecordList()},getDataList:function(){var t=this;this.loading=!0,Object(u.e)(this.postParams).then(function(i){t.loading=!1,t.axisList=i.data||[];for(var a=[],e=[],n=[],s=0;s<i.data.length;s++){var o=i.data[s];a.push(o.putInNum),e.push(o.receiveNum),n.push(o.type)}t.axisOption.xAxis[0].data=n,t.axisOption.series[0].data=a,t.axisOption.series[1].data=e,t.chartObj.setOption(t.axisOption,!0)}).catch(function(){t.loading=!1})},getRecordList:function(t){var i=this;this.dataIndex=t,this.list=[],this.loading=!0,Object(u.f)(this.listPostParams).then(function(t){i.loading=!1;var a=t.data||{};i.list=a.list||[],i.getSummariesData(a.total)}).catch(function(){i.loading=!1})},initAxis:function(){var t=this,i=c.a.init(document.getElementById("axismain")),a={color:["#6ca2ff","#ff7474"],toolbox:this.toolbox,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["进入公海客户数","公海池领取客户数"],bottom:"0px",itemWidth:14},grid:{top:"40px",left:"30px",right:"50px",bottom:"40px",containLabel:!0,borderColor:"#fff"},xAxis:[{type:"category",data:[],axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#333"},axisLine:{lineStyle:{color:"#333"}},splitLine:{show:!1}}],yAxis:[{type:"value",name:"进入公海客户数",axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#333",formatter:"{value}个"},axisLine:{lineStyle:{color:"#333"}},splitLine:{show:!1}},{type:"value",name:"公海池领取客户数",axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#333",formatter:"{value}次"},axisLine:{lineStyle:{color:"#333"}},splitLine:{show:!1}}],series:[{name:"进入公海客户数",type:"bar",yAxisIndex:0,barMaxWidth:15,data:[]},{name:"公海池领取客户数",type:"bar",yAxisIndex:1,barMaxWidth:15,data:[]}]};i.setOption(a,!0),i.on("click",function(i){t.getRecordList(i.dataIndex)}),this.axisOption=a,this.chartObj=i},exportClick:function(){this.requestExportInfo(u.g,this.listPostParams)}}},m=(a("KcRt"),a("KHd+")),h=Object(m.a)(d,function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-container"},[a("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{title:"公海客户分析","module-type":"customer"},on:{load:function(i){t.loading=!0},change:t.searchClick}}),t._v(" "),a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("div",{staticClass:"table-content"},[a("div",{staticClass:"handle-bar"},[a("el-button",{staticClass:"export-btn",on:{click:t.exportClick}},[t._v("导出")])],1),t._v(" "),t.showTable?a("el-table",{attrs:{data:t.list,"summary-method":t.getSummaries,height:"400","show-summary":"",stripe:"",border:"","highlight-current-row":""},on:{"sort-change":function(i){var a=i.prop,e=i.order;return t.mixinSortFn(t.list,a,e)}}},t._l(t.fieldList,function(t,i){return a("el-table-column",{key:i,attrs:{prop:t.field,label:t.name,sortable:"custom",align:"center","header-align":"center","show-overflow-tooltip":""}})})):t._e()],1)])],1)},[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"axis-content"},[i("div",{attrs:{id:"axismain"}})])}],!1,null,"bf28a4f2",null);h.options.__file="CustomerPoolStatistics.vue";i.default=h.exports},"9PTB":function(t,i,a){"use strict";i.a={data:function(){return{summaryData:null}},methods:{getSummariesData:function(t){this.summaryData=t||{}},getSummaries:function(t){var i=this,a=[];return t.columns.forEach(function(t,e){a[e]=i.summaryData?i.summaryData[t.property]:""}),a}}}},"9kPm":function(t,i,a){"use strict";i.a={data:function(){return{showTable:!0}},methods:{mixinSortFn:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ascending";if("[object Array]"!==Object.prototype.toString.call(t))return[];if(!i)return t;t.sort(function(t,e){if(t[i]===e[i])return 0;var n=isNaN(Number(t[i]))||isNaN(Number(e[i]))?t[i]<e[i]:Number(t[i])<Number(e[i]);return"descending"===a?n?1:-1:n?-1:1})}}}},KcRt:function(t,i,a){"use strict";var e=a("Zn/W");a.n(e).a},"Zn/W":function(t,i,a){}}]);