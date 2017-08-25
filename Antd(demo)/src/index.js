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
            this.setState({
               bool:true,
               user:userName
            });
         } else {
            n++;
         }
         if (n === arr3.length) {
            this.error();
         }
      });
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
                     return <SiderDemo user = {this.state.user}/>
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
