import React, {Component} from 'react';
import {Card} from 'antd';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Echarts1 extends Component {
   componentDidMount() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts1'));
      var addUser = [];
      if (localStorage.getItem('addUser')) {
         addUser = JSON.parse(localStorage.getItem('addUser'));
      } else {
         addUser = [
            {day:0,num:8},
            {day:0,num:18},
            {day:0,num:4},
            {day:0,num:12},
            {day:0,num:22},
            {day:0,num:30},
            {day:0,num:14}
         ];
      }
      // 绘制图表
      myChart.setOption({
         title: {
            text: '近一周用户上涨情况',
            left: 'center',
            fontSize: 18
         },
         tooltip: {},
         xAxis: {
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
         yAxis: {},
         series: [
            {
               name: '增加用户数目',
               type: 'bar',
               data: [
                  addUser[1].num,
                  addUser[2].num,
                  addUser[3].num,
                  addUser[4].num,
                  addUser[5].num,
                  addUser[6].num,
                  addUser[0].num
               ],
               itemStyle: {
                  normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                           offset: 0,
                           color: '#37BBF8'
                        }, {
                           offset: 1,
                           color: '#2294E4'
                        }
                     ])
                  }
               }
            }
         ]
      });
   }
   render() {
      return (
         <div id="echarts1" style={{
            width: 865,
            height: 220,
            paddingTop:10
         }}></div>
      );
   };
};

export default Echarts1;
