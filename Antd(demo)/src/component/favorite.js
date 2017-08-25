import React, {Component} from 'react';
import {Table,Button} from 'antd';
import '../css/favorite.css';

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

class Favorite extends Component {
   constructor(props){
     super(props);
     this.state = {
       data:this.props.data,
       selectedRowKeys:[],
       selectedRows:[]
     }
   }
   //删除收藏夹内容
   del = () => {
      this.props.favDel(this.state.selectedRowKeys);
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
         <div>
            <Button
               type="danger"
               onClick = {this.del}
            >Delete</Button>
            <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
         </div>
      );
   };
};

export default Favorite;
