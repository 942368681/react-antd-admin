import React, {Component} from 'react';
import {Breadcrumb} from 'antd';
import '../css/bread.css';

class Breadlist extends Component {
   render (){
      return(
         <Breadcrumb.Item>
            <a>{this.props.val}</a>
         </Breadcrumb.Item>
      );
   };
};
class Bread extends Component {
   render() {
      let arr = this.props.data;
      let list = arr.map((e,i) => {
         let data = {
            key:i,
            val:e
         };
         return <Breadlist {...data}/>
      });
      return (
         <Breadcrumb style={{
            margin: '12px 0'
         }}>
            {list}
         </Breadcrumb>
      );
   };
};

export default Bread;
