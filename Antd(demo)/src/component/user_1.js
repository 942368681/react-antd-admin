import React, {Component} from 'react';
import {Card, Row, Col, Timeline, Table, Button, Badge, Icon, message } from 'antd';
import $ from 'jquery';
import '../css/user.css';

const columns = [
   {
      title: 'Music',
      dataIndex: 'music',
      render: text => <a href="javascript:;">{text}</a>
   }, {
      title: 'Time',
      dataIndex: 'time'
   }, {
      title: 'Album',
      dataIndex: 'album'
   }
];
const data = [
   {
      key: '11',
      music: ' so fresh ',
      time: '03:13',
      album: '《SO FRESH》'
   }, {
      key: '12',
      music: 'Call Me Later',
      time: '04:00',
      album: '《杂集》'
   }, {
      key: '13',
      music: 'TALKING SHIT FREESTYLE',
      time: '02:23',
      album: '《TALKING SHIT FREESTYLE》'
   }, {
      key: '14',
      music: 'Tru Master Remix',
      time: '02:49',
      album: '《SO FRESH》'
   }
];

class User_1 extends Component {
   constructor(){
     super();
     this.state = {
       selectedRowKeys:[],
       selectedRows:[]
     }
   }
   //添加
   add = () => {
      console.log(this.state.selectedRows);
      if (this.state.selectedRows.length) {
         this.props.addData(this.state.selectedRows);
      } else {
         this.error();
      }
   };
   //信息提示
   error = () => {
      message.error('请选择添加项');
   };
   render() {
      const rowSelection = {
         onChange: (selectedRowKeys, selectedRows) => {
            this.setState({
               selectedRowKeys:selectedRowKeys,
               selectedRows:selectedRows
            });
         }
      };
      return (
         <div className="gutter-example">
            <Row gutter={40}>
               <Col className="gutter-row" span={4}>
                  <div className="gutter-box">
                     <Card bodyStyle={{
                        padding: 0
                     }}>
                        <div className="custom-image">
                           <img alt="example" width="100%" src={require('../img/beibei.png')}/>
                        </div>
                        <div className="custom-card">
                           <h3>贝贝</h3>
                           <p>红花会</p>
                        </div>
                     </Card>
                  </div>
               </Col>
               <Col className="gutter-row" span={10}>
                  <div className="gutter-box gutter-box2">
                     <Card title="歌手介绍" extra={< a href = "javascript:;" > More < /a>}>
                        <p>原名：李京泽</p>
                        <p>生日：1995年</p>
                        <p>籍贯：兰州</p>
                        <p>厂牌：西安红花会</p>
                     </Card>
                  </div>
               </Col>
               <Col className="gutter-row" span={10}>
                  <div className="gutter-box">
                     <Timeline>
                        <Timeline.Item><p>2012</p>参加iron mic 在西安赛区总决赛初露锋芒</Timeline.Item>
                        <Timeline.Item><p>2013</p>纵横西安八英里 ironmic西安赛区，进入红花会，更多的开始出歌</Timeline.Item>
                        <Timeline.Item><p>2017-3</p>这位中国说唱界的骄傲在微博里遗憾宣布闭关五月，原因不得而知</Timeline.Item>
                        <Timeline.Item><p>2017-8</p>8 月 7 日下午，红花会即将全团回归的消息终于被证实，而身披中国最新 "Battle King" 荣耀光环的贝贝也即将复出</Timeline.Item>
                     </Timeline>
                  </div>
               </Col>
            </Row>
            <Row gutter={16}>
               <Col className="gutter-row" span={24}>
                  <div className="gutter-box">
                     <Button
                        onClick = {this.add}
                     >添加到收藏夹</Button>
                     <Icon type="folder" style={{ fontSize: 22 }}>
                        <Badge count={this.props.n}>
                           <a href="javascript:;" className="head-example" />
                        </Badge>
                     </Icon>
                  </div>
               </Col>
            </Row>
            <Row gutter={16}>
               <Col className="gutter-row" span={24}>
                  <div className="gutter-box">
                     <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                  </div>
               </Col>
            </Row>
         </div>
      );
   };
};

export default User_1;
