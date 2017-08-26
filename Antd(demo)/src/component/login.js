import React, {Component} from 'react';
import {
   Form,
   Icon,
   Input,
   Button,
   Checkbox,
   Modal
} from 'antd';
import {Link} from 'react-router-dom';
import SiderDemo from './App';
import Register from './register.js';
import '../css/login.css';

const FormItem = Form.Item;

class NormalLoginForm extends Component {
   //注册框
   state = {
      ModalText: 'Content of the modal',
      visible: false,
      txt:''
   }
   showModal = () => {
      this.setState({visible: true});
   }
   handleOk = () => {
      this.setState({ModalText: 'The modal will be closed after two seconds', confirmLoading: true});
      setTimeout(() => {
         this.setState({visible: false, confirmLoading: false});
      }, 2000);
   }
   handleCancel = () => {
      console.log('Clicked cancel button');
      this.setState({visible: false});
   }
   //注册框结束
   handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
         if (!err) {
            console.log('Received values of form: ', values);
         }
      });
   }
   componentDidMount() {
      let box = document.getElementById('root');
      window.onload = function() {
         let w = document.documentElement.clientWidth;
         let h = window.innerHeight;
         box.style.width = w + 'px';
         box.style.height = h + 'px';
      }
      window.onresize = function() {
         let w = document.documentElement.clientWidth;
         let h = window.innerHeight;
         box.style.width = w + 'px';
         box.style.height = h + 'px';
      }
   };

   login = () => {
      let userName = this.user.props.value;
      let passWord = this.password.props.value;
      this.props.changeBool(userName, passWord);
   };

   render() {
      const {getFieldDecorator} = this.props.form;
      //注册框
      const {visible, confirmLoading, ModalText} = this.state;

      return (
         <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
               {getFieldDecorator('userName', {
                  rules: [
                     {
                        required: true,
                        message: 'Please input your username!'
                     }
                  ]
               })(
                  <Input prefix={< Icon type = "user" style = {{ fontSize: 13 }}/>} placeholder="Username" ref= {(elem) => {this.user = elem}}/>
               )}
            </FormItem>
            <FormItem>
               {getFieldDecorator('password', {
                  rules: [
                     {
                        required: true,
                        message: 'Please input your Password!'
                     }
                  ]
               })(
                  <Input prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>} type="password" placeholder="Password" ref= {(elem) => {this.password = elem}}/>
               )}
            </FormItem>
            <FormItem>
               <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.login}>
                  <Link to="/SiderDemo">Log in</Link>
               </Button>
               Or
               <a
                  href="javascript:;"
                  onClick = {this.showModal}
                  className = "registerNow"
               >register now!</a>
               {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
               })(
                  <Checkbox className = "rememberMe">Remember me</Checkbox>
               )}
               {/* 注册框 */}
               <Modal
                  title="注册"
                  visible={visible}
                  onOk={this.handleOk}
                  confirmLoading={confirmLoading}
                  onCancel={this.handleCancel}
               >
                  <Register close = {this.handleCancel} text = {this.state.txt}/>
               </Modal>
            </FormItem>
         </Form>
      );
   };
};
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;
