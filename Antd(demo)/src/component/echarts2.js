import React, {Component} from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入折线图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Echarts2 extends Component {
   componentDidMount(){
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts2'));
      var pageView = [];
      if (localStorage.getItem('pageView')) {
         pageView = JSON.parse(localStorage.getItem('pageView'));
      } else {
         pageView = [
            {day:0,num:20},
            {day:0,num:25},
            {day:0,num:15},
            {day:0,num:12},
            {day:0,num:22},
            {day:0,num:10},
            {day:0,num:6}
         ];
      }
      // 绘制图表
      myChart.setOption({
         tooltip: {
            trigger: 'axis'
         },
         xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [
               '周一',
               '周二',
               '周三',
               '周四',
               '周五',
               '周六',
               '周日'
            ]
         },
         yAxis: {
            type: 'value'
         },
         series: [
            {
               name: '访问量',
               type: 'line',
               smooth: true,
               stack: '总量',
               data: [
                  pageView[1].num,
                  pageView[2].num,
                  pageView[3].num,
                  pageView[4].num,
                  pageView[5].num,
                  pageView[6].num,
                  pageView[0].num
               ]
            }
         ]
      });
   }
   render() {
      return (
         <div id="echarts2" style={{
            width: 400,
            height: 350
         }}></div>
      );
   };
};

export default Echarts2;
