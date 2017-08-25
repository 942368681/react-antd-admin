import React, {Component} from 'react';
import {Table, Button, Input, message} from 'antd';
import '../css/option_2.css';

const columns = [
   {
      title: 'Name',
      dataIndex: 'name'
   }, {
      title: 'Age',
      dataIndex: 'age'
   }, {
      title: 'Address',
      dataIndex: 'address'
   }
];

const data = [];
for (let i = 0; i < 15; i++) {
   data.push({key: i, name: `Edward King ${i}`, age: 32, address: `London, Park Lane no. ${i}`});
}
class Option_2 extends Component {
   state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      val1 : '',
      val2 : '',
      val3 : ''
   };
   start = () => {
      this.setState({
         loading: true,
         val1 : '',
         val2 : '',
         val3 : ''
      });
      // ajax request after empty completing
      setTimeout(() => {
         this.setState({selectedRowKeys: [], loading: false});
      }, 1000);
   }
   onSelectChange = (selectedRowKeys) => {
      //勾选的项目的id放在这个数组中
      console.log(selectedRowKeys);
      this.setState({selectedRowKeys});
   }
   //解除表单受限
   change1 = (ev) => {
      this.setState({
         val1:ev.target.value
      });
   };
   change2 = (ev) => {
      this.setState({
         val2:ev.target.value
      });
   };
   change3 = (ev) => {
      this.setState({
         val3:ev.target.value
      });
   };
   //添加项
   add = () => {
      let name = this.oName.refs.input.value;
      let age = this.oAge.refs.input.value;
      let address = this.oAddress.refs.input.value;
      if (name && age && address) {
         data.unshift({key:+ new Date(),name:name,age:age,address:address});
      } else {
         this.error2();
      }
      this.start();
   };
   //删除项
   del = () => {
      for (var i = 0; i < this.state.selectedRowKeys.length; i++) {
         for (var j = 0; j < data.length; j++) {
            if (data[j].key === this.state.selectedRowKeys[i]) {
               data.splice(j,1);
            }
         }
      }
      this.start();
   };
   //修改项
   changeList = () => {
      let name = this.oName.refs.input.value;
      let age = this.oAge.refs.input.value;
      let address = this.oAddress.refs.input.value;
      if (this.state.selectedRowKeys.length !== 1) {
         this.error1();
      } else {
         data.forEach((e,i) => {
            if (e.key === this.state.selectedRowKeys[0]) {
               name ? (e.name = name) : e.name = e.name;
               age ? (e.age = age) : e.age = e.age;
               address ? (e.address = address) : e.address = e.address;
            }
         });
      }
      this.start();
   };
   //错误信息一
   error1 = () => {
      message.error('请选择一项进行修改');
   };
   //错误信息二
   error2 = () => {
      message.error('请输入内容');
   };
   render() {
      const {loading, selectedRowKeys} = this.state;
      const rowSelection = {
         selectedRowKeys,
         onChange: this.onSelectChange
      };
      const hasSelected = selectedRowKeys.length > 0;
      return (
         <div>
            <div className="listHead" style={{
               marginBottom: 16
            }}>
               <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                  Reload
               </Button>
               <Button
                  type="danger"
                  onClick = {this.del}
               >Delete</Button>
               <div className="example-input">
                  <Input
                     placeholder="Name"
                     value = {this.state.val1}
                     onChange = {this.change1}
                     ref = {(elem) => {this.oName = elem}}
                  />
                  <Input
                     placeholder="Age"
                     value = {this.state.val2}
                     onChange = {this.change2}
                     ref = {(elem) => {this.oAge = elem}}
                  />
                  <Input
                     placeholder="Address"
                     value = {this.state.val3}
                     onChange = {this.change3}
                     ref = {(elem) => {this.oAddress = elem}}
                  />
               </div>
               <Button
                  type="primary"
                  onClick = {this.add}
               >Add</Button>
               <Button
                  type="primary"
                  onClick = {this.changeList}
               >Change</Button>
               <span style={{
                  marginLeft: 8
               }}>
                  {hasSelected
                     ? `Selected ${selectedRowKeys.length} items`
                     : ''}
               </span>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data}/>
         </div>
      );
   };
};

export default Option_2;
