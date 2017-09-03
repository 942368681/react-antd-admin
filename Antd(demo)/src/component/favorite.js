import React, {Component} from 'react';
import {Table, Button, message, Popconfirm} from 'antd';
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
   constructor(props) {
      super(props);
      this.state = {
         data: this.props.data,
         selectedRowKeys: [],
         selectedRows: []
      }
   }
   //删除收藏夹内容
   del = () => {
      this.props.favDel(this.state.selectedRowKeys);
   };
   ////信息提示
   error1 = () => {
      message.error('没有要删除的选项');
   };
   //确认弹框
   confirm = (e) => {
      if (this.state.selectedRowKeys.length) {
         this.del();
         message.success('成功删除');
      } else {
         this.error1();
      }
   }
   cancel = (e) => {
      message.error('取消删除');
   }
   render() {
      const rowSelection = {
         onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            this.setState({selectedRowKeys: selectedRowKeys, selectedRows: selectedRows});
         }
      };
      return (
         <div>
            <Popconfirm title="确认删除？" onConfirm={this.confirm} onCancel={this.cancel} okText="Yes" cancelText="No">
               <Button type="danger">Delete</Button>
            </Popconfirm>
            <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data}/>
         </div>
      );
   };
};

export default Favorite;
