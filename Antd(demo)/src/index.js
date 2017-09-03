import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect
} from 'react-router-dom';
import { Alert,message } from 'antd';
import WrappedNormalLoginForm from './component/login.js';
import SiderDemo from './component/App';

class Index extends Component{
   constructor(){
     super();
     this.state = {
       bool:false,
       arr:[
          {
            userName:'guest' ,
            passWord:'guest'
         },
         {
           userName:'123' ,
           passWord:'123'
         }
      ],
      user:''
     }
   }
   //信息提示
   error = () => {
      message.error('用户名或密码错误');
   };
   //改变bool，验证是否允许登陆
   changeBool = (userName,passWord) => {
      let {arr} = this.state;
      let arr1 = Object.assign(arr);
      let arr2 = [];
      let arr3 = [];
      if (localStorage.getItem('info')) {
         arr2 = JSON.parse(localStorage.getItem('info'));
         arr3 = arr1.concat(arr2);
      } else {
         arr3 = arr1;
      }
      let n = 0;
      arr3.forEach((e,i) => {
         if (e.userName === userName && e.passWord === passWord) {
            //登陆成功，增加访问记录
            if (localStorage.getItem('pageView')) {
               let date = new Date();
               let day = date.getDay();
               let arr0 = JSON.parse(localStorage.getItem('pageView'));
               arr0.forEach((e,i) => {
                  if (e.day === day) {
                     e.num++;
                  }
               });
               localStorage.setItem('pageView', JSON.stringify(arr0));
            }
            this.setState({
               bool:true,
               user:userName
            });
         } else {
            n++;
         }
         if (n === arr3.length) {
            this.error();
            this.setState({bool:false});
         }
      });
   };
   componentDidMount(){
      //重置访问量和用户增加量
      let date = new Date();
      let day = date.getDay();
      if (day === 1) {
         let arr = [
      		{day:0,num:0},
      		{day:1,num:0},
      		{day:2,num:0},
      		{day:3,num:0},
      		{day:4,num:0},
      		{day:5,num:0},
      		{day:6,num:0}
      	];
      	localStorage.setItem('pageView', JSON.stringify(arr));
         localStorage.setItem('addUser', JSON.stringify(arr));
      }
   };
   render(){
      return(
         <Router>
            <Switch>
               <Route exact path="/" render={() => {
                  return <WrappedNormalLoginForm
                     changeBool = {this.changeBool}
                  />
               }}/>
               <Route path="/SiderDemo" render={() => {
                  if (this.state.bool) {
                     return <SiderDemo
                        user = {this.state.user}
                     />
                  } else {
                     return <Redirect to="/" />
                  }
               }}/>
            </Switch>
         </Router>
      );
   };
};

ReactDOM.render(<Index />, document.getElementById('root'));

if (module.hot) {
   module.hot.accept();
}
