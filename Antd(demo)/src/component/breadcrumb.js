import React, {Component} from 'react';
import {Redirect,Link} from 'react-router-dom';
import {Breadcrumb} from 'antd';
import '../css/bread.css';

class Breadlist extends Component {
   click = () => {
      let arr1 = [];
      let arr = this.props.arr;
      let str = this.props.val;
      arr.forEach((e,i) => {
         if (e === str) {
            arr1 = arr.slice(0,i+1);
         }
      });
      this.props.back(arr1);
   };
   render (){
      return(
         <Breadcrumb.Item>
            <Link
               to = "/SiderDemo"
               onClick = {this.click}
            >{this.props.val}</Link>
         </Breadcrumb.Item>
      );
   };
};
class Bread extends Component {
   back = (arr) => {
      this.props.back(arr);
   };
   render() {
      let arr = this.props.data;
      let list = arr.map((e,i) => {
         if (i !== arr.length-1) {
            let data = {
               key:i,
               val:e,
               arr:arr,
               back:this.back
            };
            return <Breadlist {...data}/>
         }
      });
      return (
         <Breadcrumb style={{
            margin: '12px 0'
         }}>
            {list}
            <Breadcrumb.Item>{this.props.data[this.props.data.length-1]}</Breadcrumb.Item>
         </Breadcrumb>
      );
   };
};

export default Bread;
