import React, {Component} from 'react';
import {
   Row,
   Col,
   Card,
   Icon,
   Modal,
   Button,
   Calendar,
   message
} from 'antd';
import '../css/note.css';

class Li extends Component {
   state = {
      visible: false,
      prev: ''
   };
   showModal = () => {
      let prevVal = this.props.text
      this.setState({visible: true, prev: prevVal});
   }
   handleOk = (e) => {
      console.log(e);
      this.setState({visible: false});
   }
   handleCancel = (e, bool) => {
      if (bool) {
         if (this.areaTxt.value === '') {
            this.error();
         } else {
            this.setState({visible: false});
         }
      } else {
         let date = this.props.date;
         this.props.changeVal(this.state.prev, date);
         this.setState({visible: false});
      }
   }
   //信息提示
   error = () => {
      message.error('输入内容不得为空');
   };
   //删除项
   del = (ev) => {
      this.props.del(this.props.date);
   };
   //改
   changeVal = (ev) => {
      let date = this.props.date;
      this.props.changeVal(ev.target.value, date);
   };
   //确定
   sure = () => {
      let bool = true;
      this.handleCancel(null, bool);
   };
   //取消
   cancel = () => {
      let bool = false;
      this.handleCancel(null, bool);
   };
   render() {
      return (
         <li>
            <p className="time">{this.props.date}</p>
            <p className="con">{this.props.text}</p>
            <Icon type="close" className="del" onClick={this.del}/>
            <div>
               <Icon type="edit" className="change" onClick={this.showModal}/>
               <Modal title="Basic Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                  <textarea value={this.props.text} onChange={this.changeVal} ref= {(elem) => {this.areaTxt = elem}}></textarea>
                  <div className="editBtn">
                     <Button type="primary" onClick={this.sure}>确定</Button>
                     <Button type="danger" onClick={this.cancel}>取消</Button>
                  </div>
               </Modal>
            </div>
         </li>
      );
   };
};
//日历
function onPanelChange(value, mode) {
   console.log(value, mode);
}

class Note extends Component {
   delete = (date) => {
      this.props.deleteLi(date);
   }
   changeVal = (val, date) => {
      this.props.changeVal(val, date);
   }
   render() {
      let initArr = this.props.data;
      let list = initArr.map((e, i) => {
         let data = {
            key: i,
            date: e.date,
            text: e.text,
            del: this.delete,
            changeVal: this.changeVal
         };
         return <Li {...data}/>
      });
      return (
         <div className="note">
            <div className="gutter-example">
               <Row gutter={100}>
                  <Col className="gutter-row" span={12}>
                     <div className="gutter-box">
                        <Card title="便笺" bordered={false}>
                           <ul className="noteList">
                              {list}
                           </ul>
                        </Card>
                     </div>
                  </Col>
                  <Col className="gutter-row" span={12}>
                     <div className="gutter-box">
                        <div className = "calendar" style={{
                           borderRadius: 4
                        }}>
                           <Calendar fullscreen={false} onPanelChange={onPanelChange}/>
                        </div>
                     </div>
                  </Col>
               </Row>
            </div>
         </div>
      );
   };
};

export default Note;
