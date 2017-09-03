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
            this.error1();
         } else {
            this.setState({visible: false});
         }
      } else {
         let id = this.props.id;
         this.props.changeVal(this.state.prev, id);
         this.setState({visible: false});
      }
   }
   //信息提示
   error1 = () => {
      message.error('输入内容不得为空');
   };
   //删除项
   del = (ev) => {
      this.props.del(this.props.id);
   };
   //改
   changeVal = (ev) => {
      this.props.changeVal(ev.target.value, this.props.id);
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
               <Modal title={this.props.date} visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
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
   componentDidMount(){
      let propsData = this.props.data;
      propsData.sort((a,b) => {
         var a = a.date.split('.').join('');
         var b = b.date.split('.').join('');
         return b-a;
      });
      this.props.sortList(propsData);
   };
   delete = (date) => {
      this.props.deleteLi(date);
   }
   changeVal = (val, date) => {
      this.props.changeVal(val, date);
   }
   onSelect = (data) => {
      function two(n){
   		return n>10?''+n:'0'+n;
   	};
      let date = data._d;
      let oDate = date.getFullYear()+'.'+two((date.getMonth()+1))+'.'+two(date.getDate());
      let propsData = this.props.data;
      let arr = [];
      arr = propsData.filter((e) => {
         return e.date === oDate;
      });
      if (arr.length) {
         this.success1();
      } else {
         this.error2();
      }
      propsData = propsData.filter((e) => {
         return e.date !== oDate;
      });
      propsData = arr.concat(propsData);
      this.props.sortList(propsData);
   };
   resetList = () => {
      let propsData = this.props.data;
      propsData.sort((a,b) => {
         var a = a.date.split('.').join('');
         var b = b.date.split('.').join('');
         return b-a;
      });
      this.props.sortList(propsData);
      this.success2();
   };
   //信息提示
   error2 = () => {
      message.error('无当日事项');
   };
   success1 = () => {
      message.success('搜索成功');
   }
   success2 = () => {
      message.success('列表已重置');
   }
   render() {
      let initArr = this.props.data;
      let list = initArr.map((e, i) => {
         let data = {
            id:e.id,
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
            <Button className = "reset" type="primary" onClick = {this.resetList}>重置</Button>
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
                        <Card>
                           <div className = "calendar">
                              <Calendar
                                 fullscreen={false}
                                 onPanelChange={onPanelChange}
                                 onSelect={this.onSelect}
                              />
                           </div>
                        </Card>
                     </div>
                  </Col>
               </Row>
            </div>
         </div>
      );
   };
};

export default Note;
