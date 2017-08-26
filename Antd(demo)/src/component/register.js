import React, {Component} from 'react';
import {Input, Button, message} from 'antd';
import '../css/register.css';

//邮箱验证
const re1 = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;
//手机验证
const re2 = /^1[358]\d{9}$/;

class Register extends Component {
   sign = () => {
      let userName = this.userName.refs.input.value;
      let passWord1 = this.passWord1.refs.input.value;
      let passWord2 = this.passWord2.refs.input.value;
      let email = this.email.refs.input.value;
      let phone = this.phone.refs.input.value;
      let arr = [];
      let arr1 = [this.userName, this.passWord1, this.passWord2, this.email, this.phone];
      arr1.forEach((e) => {
         e.refs.input.className = 'ant-input';
      });
      if (userName === '' || passWord1 === '' || passWord2 === '' || email === '' || phone === '') {
         arr1.forEach((e) => {
            if (e.refs.input.value === '') {
               e.refs.input.className = 'ant-input Red';
            }
         });
         this.error1();
      } else if (passWord1 !== passWord2) {
         this.error2();
         this.passWord2.refs.input.className = 'ant-input Red';
      } else if (!re1.test(email)) {
         this.error4();
         this.email.refs.input.className = 'ant-input Red';
      } else if (!re2.test(phone)) {
         this.error5();
         this.phone.refs.input.className = 'ant-input Red';
      } else {
         if (!localStorage.getItem('info')) {
            if (userName === '123' || userName === 'guest') {
               this.error3();
               this.userName.refs.input.className = 'ant-input Red';
               return;
            } else {
               arr.push({userName: userName, passWord: passWord1});
            }
            localStorage.setItem('info', JSON.stringify(arr));
         } else {
            arr = JSON.parse(localStorage.getItem('info'));
            let arr2 = [
               {
                  userName: 'guest',
                  passWord: 'guest'
               }, {
                  userName: '123',
                  passWord: '123'
               }
            ]
            let arr3 = arr2.concat(arr);
            if (arr3.some((e) => e.userName === userName)) {
               this.error3();
               this.userName.refs.input.className = 'ant-input Red';
               return;
            } else {
               arr.push({userName: userName, passWord: passWord1});
               localStorage.setItem('info', JSON.stringify(arr));
            }
         }
         this.success();
         setTimeout(() => {
            this.props.close();
            let userName = this.userName.refs.input.value;
            let passWord1 = this.passWord1.refs.input.value;
            let passWord2 = this.passWord2.refs.input.value;
            let email = this.email.refs.input.value;
            let phone = this.phone.refs.input.value;
            let arr1 = [this.userName, this.passWord1, this.passWord2, this.email, this.phone];
            arr1.forEach((e) => {
               e.refs.input.className = 'ant-input';
               e.refs.input.value = '';
            });
         }, 1000);
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
   //信息提示4
   error3 = () => {
      message.error('该用户已经注册');
   };
   //信息提示5
   error4 = () => {
      message.error('邮箱格式错误');
   };
   //信息提示6
   error5 = () => {
      message.error('手机格式错误');
   };
   //关闭
   Close = () => {
      this.props.close();
      let userName = this.userName.refs.input.value;
      let passWord1 = this.passWord1.refs.input.value;
      let passWord2 = this.passWord2.refs.input.value;
      let email = this.email.refs.input.value;
      let phone = this.phone.refs.input.value;
      let arr1 = [this.userName, this.passWord1, this.passWord2, this.email, this.phone];
      arr1.forEach((e) => {
         e.refs.input.className = 'ant-input';
         e.refs.input.value = '';
      });
   };
   render() {
      return (
         <div>
            <dl>
               <dt>用户名：</dt>
               <dd>
                  <Input placeholder="Basic usage" ref= {(elem) => {this.userName = elem}}/>
               </dd>
            </dl>
            <dl>
               <dt>密码：</dt>
               <dd>
                  <Input type="password" placeholder="Basic usage" ref= {(elem) => {this.passWord1 = elem}}/>
               </dd>
            </dl>
            <dl>
               <dt>确认密码：</dt>
               <dd>
                  <Input type="password" placeholder="Basic usage" ref= {(elem) => {this.passWord2 = elem}}/>
               </dd>
            </dl>
            <dl>
               <dt>邮箱：</dt>
               <dd>
                  <Input placeholder="Basic usage" ref= {(elem) => {this.email = elem}}/>
               </dd>
            </dl>
            <dl>
               <dt>手机：</dt>
               <dd>
                  <Input placeholder="Basic usage" ref= {(elem) => {this.phone = elem}}/>
               </dd>
            </dl>
            <div>
               <Button type="primary" onClick={this.sign}>注册</Button>
               <Button type="danger" onClick={this.Close}>取消</Button>
            </div>
         </div>
      );
   };
};

export default Register;
