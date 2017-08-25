import React, {Component} from 'react';
import {Card, Row, Col, Timeline, Table, Button, Badge, Icon, message } from 'antd';
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
      key: '21',
      music: '中二病',
      time: '03:57',
      album: '《中二病》'
   }, {
      key: '22',
      music: 'so what',
      time: '03:05',
      album: '《so what》'
   }, {
      key: '23',
      music: 'Junky Mouth',
      time: '03:04',
      album: '《Junky Mouth》'
   }, {
      key: '24',
      music: '举世无双',
      time: '02:52',
      album: '《举世无双》'
   }
];


class User_2 extends Component {
   constructor(){
     super();
     this.state = {
       selectedRowKeys:[],
       selectedRows:[]
     }
   }
   //添加
   add = () => {
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
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
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
                           <img alt="example" width="100%" src={require('../img/pgone.png')}/>
                        </div>
                        <div className="custom-card">
                           <h3>PG_One</h3>
                           <p>红花会</p>
                        </div>
                     </Card>
                  </div>
               </Col>
               <Col className="gutter-row" span={10}>
                  <div className="gutter-box gutter-box2">
                     <Card title="歌手介绍" extra={< a href = "javascript:;" > More < /a>}>
                        <p>原名：王昊</p>
                        <p>生日：1994年4月5日</p>
                        <p>籍贯：黑龙江哈尔滨</p>
                        <p>厂牌：西安红花会</p>
                     </Card>
                  </div>
               </Col>
               <Col className="gutter-row" span={10}>
                  <div className="gutter-box">
                     <Timeline>
                        <Timeline.Item><p>2011</p>开始正式玩说唱，在YY直播间里接触Freestyle，认识了贝贝和小青龙</Timeline.Item>
                        <Timeline.Item><p>2012</p>Iron Mic东北分赛区冠军，全国赛首轮被淘汰</Timeline.Item>
                        <Timeline.Item><p>2013</p>Iron Mic全国第三名（战胜Bridge）问鼎关东冠军</Timeline.Item>
                        <Timeline.Item><p>2015</p>地下八英里亚军（输给小青龙），红花会主办的干一票全国冠军，由贝贝推荐加入红花会</Timeline.Item>
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

export default User_2;
