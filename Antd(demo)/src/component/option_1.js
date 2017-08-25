import React, {Component} from 'react';
import {Row, Col, Card, Icon, Timeline, Avatar } from 'antd';
import '../css/option_1.css';
import Echarts1 from './echarts1.js';
import Echarts2 from './echarts2.js';

class Option_1 extends Component {
   render() {
      return (
         <div className = "box">
            <div className="gutter-example gutter-example1">
               <Row gutter={16}>
                  <Col className="gutter-row1" span={8}>
                     <div className="gutter-box clearfix">
                        <Card>
                           <Icon type="heart"/>
                           <div>
                              <p>收藏</p>
                              <p>301</p>
                           </div>
                        </Card>
                        <Card>
                           <Icon type="camera"/>
                           <div>
                              <p>照片</p>
                              <p>802</p>
                           </div>
                        </Card>
                        <Card>
                           <Icon type="cloud"/>
                           <div>
                              <p>云数据</p>
                              <p>30122</p>
                           </div>
                        </Card>
                        <Card>
                           <Icon type="mail"/>
                           <div>
                              <p>邮件</p>
                              <p>102</p>
                           </div>
                        </Card>
                     </div>
                  </Col>
                  <Col className="gutter-row2" span={16}>
                     <div className="gutter-box clearfix">
                        <Echarts1 />
                     </div>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col className="gutter-row3" span={8}>
                     <div className="gutter-box clearfix">
                        <Card>
                           <p className="renwu">任务</p>
                           <p className="finish">10个已经完成，2个待完成，1个正在进行中</p>
                           <Timeline>
                              <Timeline.Item color="green">初步设计</Timeline.Item>
                              <Timeline.Item color="green">完成初版</Timeline.Item>
                              <Timeline.Item color="red">
                                 <p>测试</p>
                                 <p>功能验收</p>
                              </Timeline.Item>
                              <Timeline.Item>
                                 <p>权限验证</p>
                                 <p>页面排版</p>
                                 <p>产品上线</p>
                              </Timeline.Item>
                           </Timeline>
                        </Card>
                     </div>
                  </Col>
                  <Col className="gutter-row4" span={8}>
                     <div className="gutter-box clearfix">
                        <Card>
                           <p className="info">消息栏</p>
                           <ul className = "list">
                              <li>
                                 <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                 <span className = "txt1">guest</span>
                                 <span className = "txt2">呵呵</span>
                              </li>
                              <li>
                                 <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                 <span className = "txt1">guest</span>
                                 <span className = "txt2">这是什么？</span>
                              </li>
                              <li>
                                 <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                 <span className = "txt1">guest</span>
                                 <span className = "txt2">What's wrong with you?</span>
                              </li>
                              <li>
                                 <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                 <span className = "txt1">guest</span>
                                 <span className = "txt2">I'm fine,thank you!</span>
                              </li>
                           </ul>
                        </Card>
                     </div>
                  </Col>
                  <Col className="gutter-row5" span={8}>
                     <div className="gutter-box clearfix">
                        <Card>
                           <p className="renwu">访问量统计</p>
                           <p className="finish">最近7天用户访问量</p>
                           <Echarts2 />
                        </Card>
                     </div>
                  </Col>
               </Row>
            </div>
         </div>
      );
   };
};

export default Option_1;
