import React, {Component} from 'react';
import { Input, Button, message } from 'antd';
import '../css/register.css';

class Register extends Component{
   sign = () => {
      let userName = this.userName.refs.input.value;
      let passWord1 = this.passWord1.refs.input.value;
      let passWord2 = this.passWord2.refs.input.value;
      let email = this.email.refs.input.value;
      let phone = this.phone.refs.input.value;
      let arr = [];
      if (userName === '' || passWord1 === '' || passWord2 === '' || email === '' || phone === '') {
         this.error1();
      } else if (passWord1 !== passWord2) {
         this.error2();
      } else {
         if (!localStorage.getItem('info')) {
            arr.push({
               userName:userName,
               passWord:passWord1
            });
            localStorage.setItem('info',JSON.stringify(arr));
         } else {
            arr = JSON.parse(localStorage.getItem('info'));
            arr.push({
               userName:userName,
               passWord:passWord1
            });
            localStorage.setItem('info',JSON.stringify(arr));
         }
         this.success();
         setTimeout(() => {
            this.props.close();
         },1000);
      }
   };
   //信息提示1
   error1 = () => {
      message.error('请完善注册信息');
   };
   //信息提示2
   error2 = () => {
      message.error('密码输入不一致');
   };
   //信息提示3
   success = () => {
      message.success('注册成功');
   };
   //关闭
   Close = () => {
      this.props.close();
   };
   render(){
      return(
         <div>
            <dl>
               <dt>用户名：</dt>
               <dd>
                  <Input placeholder="Basic usage" ref= {(elem) => {this.userName = elem}} />
               </dd>
            </dl>
            <dl>
               <dt>密码：</dt>
               <dd>
                  <Input placeholder="Basic usage" ref= {(elem) => {this.passWord1 = elem}} />
               </dd>
            </dl>
            <dl>
               <dt>确认密码：</dt>
               <dd>
                  <Input placeholder="Basic usage" ref= {(elem) => {this.passWord2 = elem}} />
               </dd>
            </dl>
            <dl>
               <dt>邮箱：</dt>
               <dd>
                  <Input placeholder="Basic usage" ref= {(elem) => {this.email = elem}} />
               </dd>
            </dl>
            <dl>
               <dt>手机：</dt>
               <dd>
                  <Input placeholder="Basic usage" ref= {(elem) => {this.phone = elem}} />
               </dd>
            </dl>
            <div>
               <Button
                  type="primary"
                  onClick = {this.sign}
               >注册</Button>
               <Button
                  type="danger"
                  onClick = {this.Close}
               >取消</Button>
            </div>
         </div>
      );
   };
};

export default Register;
