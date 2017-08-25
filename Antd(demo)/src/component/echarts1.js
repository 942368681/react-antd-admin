import React, {Component} from 'react';
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
      // 绘制图表
      myChart.setOption({
         title: {
            text: '最近10天项目完成情况',
            left: 'center',
            fontSize: 18
         },
         tooltip: {},
         xAxis: {
            data: [
               "1",
               "2",
               "3",
               "4",
               "5",
               "6",
               "7",
               "8",
               "9",
               "10"
            ]
         },
         yAxis: {},
         series: [
            {
               name: '完成项目数',
               type: 'bar',
               data: [
                  5,
                  20,
                  36,
                  10,
                  10,
                  50,
                  18,
                  24,
                  30,
                  14
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
            height: 195
         }}></div>
      );
   };
};

export default Echarts1;
