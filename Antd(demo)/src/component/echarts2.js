import React, {Component} from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入折线图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Echarts2 extends Component {
   componentDidMount() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts2'));
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
                  120,
                  132,
                  101,
                  134,
                  90,
                  230,
                  210
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
