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
      key: '31',
      music: '青春叛逆手册',
      time: '02:44',
      album: '《你的男孩》'
   }, {
      key: '32',
      music: '变',
      time: '03:05',
      album: '《768Mixtape》'
   }, {
      key: '33',
      music: '020',
      time: '02:53',
      album: '《020》'
   }, {
      key: '34',
      music: '赵德柱',
      time: '03:20',
      album: '《768Mixtape》'
   }
];

class User_3 extends Component {
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
                           <img alt="example" width="100%" src={require('../img/tizzyt.png')}/>
                        </div>
                        <div className="custom-card">
                           <h3>Tizzy t</h3>
                           <p>摩登天空MDSK</p>
                        </div>
                     </Card>
                  </div>
               </Col>
               <Col className="gutter-row" span={10}>
                  <div className="gutter-box gutter-box2">
                     <Card title="歌手介绍" extra={< a href = "javascript:;" > More < /a>}>
                        <p>原名：谢锐韬</p>
                        <p>生日：1993年2月2日</p>
                        <p>籍贯：广东潮州</p>
                        <p>厂牌：摩登天空MDSK</p>
                     </Card>
                  </div>
               </Col>
               <Col className="gutter-row" span={10}>
                  <div className="gutter-box">
                     <Timeline>
                        <Timeline.Item><p>2010</p>获得了华南地区“嘴上瘾”Beat Box大赛的冠军</Timeline.Item>
                        <Timeline.Item><p>2012</p>TT与搭档Person组成说唱组合“双赤”（Two Red），创作了一系列潮汕方言说唱作品，赢得了良好的反响与人气</Timeline.Item>
                        <Timeline.Item><p>2016</p>TT正式加入嘻哈文化厂牌Yo Nation，并在1月底正式发布首张个人专辑《你的男孩》</Timeline.Item>
                        <Timeline.Item><p>2016.3.8</p>摩登天空HipHop厂牌MDSK公布签约HipHop音乐人—Tizzy T，随之曝光Tizzy T的新单曲《020》和MV</Timeline.Item>
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

export default User_3;
