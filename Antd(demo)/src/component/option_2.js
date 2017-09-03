import React, {Component} from 'react';
import {Table, Button, Input, message, Popconfirm} from 'antd';
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
for (let i = 0; i < 5; i++) {
   data.push({key: i, name: `Edward King ${i}`, age: 32, address: `London, Park Lane no. ${i}`});
}
for (let i = 5; i < 10; i++) {
   data.push({key: i, name: `Edward King ${i}`, age: 18, address: `London, Park Lane no. ${i}`});
}
for (let i = 10; i < 15; i++) {
   data.push({key: i, name: `Edward King ${i}`, age: 23, address: `London, Park Lane no. ${i}`});
}
for (let i = 15; i < 20; i++) {
   data.push({key: i, name: `Edward King ${i}`, age: 26, address: `London, Park Lane no. ${i}`});
}
for (let i = 20; i < 30; i++) {
   data.push({key: i, name: `Edward King ${i}`, age: 35, address: `London, Park Lane no. ${i}`});
}
for (let i = 30; i < 40; i++) {
   data.push({key: i, name: `Edward King ${i}`, age: 42, address: `London, Park Lane no. ${i}`});
}
class Option_2 extends Component {
   state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      val1: '',
      val2: '',
      val3: '',
      data: [],
      current: null
   };
   start = () => {
      this.setState({loading: true, val1: '', val2: '', val3: ''});
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
      this.setState({val1: ev.target.value});
   };
   change2 = (ev) => {
      this.setState({val2: ev.target.value});
   };
   change3 = (ev) => {
      this.setState({val3: ev.target.value});
   };
   //添加项
   add = (name,age,address) => {
      data.unshift({
         key :+ new Date(),
         name: name,
         age: age,
         address: address
      });
      this.start();
      this.setState({current: 1});
      let date = new Date();
      let day = date.getDay();
      let arr = JSON.parse(localStorage.getItem('addUser'));
      arr.forEach((e,i) => {
         if (e.day === day) {
            e.num++;
         }
      });
      localStorage.setItem('addUser', JSON.stringify(arr));
   };
   //删除项
   del = () => {
      for (var i = 0; i < this.state.selectedRowKeys.length; i++) {
         for (var j = 0; j < data.length; j++) {
            if (data[j].key === this.state.selectedRowKeys[i]) {
               data.splice(j, 1);
            }
         }
      }
      this.start();
   };
   //修改项
   changeList = (name,age,address) => {
      data.forEach((e, i) => {
         if (e.key === this.state.selectedRowKeys[0]) {
            name
               ? (e.name = name)
               : e.name = e.name;
            age
               ? (e.age = age)
               : e.age = e.age;
            address
               ? (e.address = address)
               : e.address = e.address;
         }
      });
      this.start();
   };
   //搜索
   searchList = () => {
      let name = this.oName.refs.input.value;
      let age = this.oAge.refs.input.value;
      let address = this.oAddress.refs.input.value;
      let arr = [];
      if (name) {
         data.forEach((e, i) => {
            if (e.name === name) {
               arr.push(e);
            }
         });
         if (age) {
            arr = arr.filter((e) => {
               return e.age == age;
            });
         }
         if (address) {
            arr = arr.filter((e) => {
               return e.address == address;
            });
         }
         if (arr.length) {
            this.setState({data: arr});
         } else {
            this.error3();
         }
      } else if (age) {
         data.forEach((e, i) => {
            if (e.age == age) {
               arr.push(e);
            }
         });
         if (address) {
            arr = arr.filter((e) => {
               return e.address === address;
            });
         }
         if (arr.length) {
            this.setState({data: arr});
         } else {
            this.error3();
         }
      } else if (address) {
         arr = data.filter((e) => {
            return e.address === address;
         });
         if (arr.length) {
            this.setState({data: arr});
         } else {
            this.error3();
         }
      } else {
         this.error3();
      }
   };
   //错误信息一
   error1 = () => {
      message.error('请选择一项进行修改');
   };
   //错误信息二
   error2 = () => {
      message.error('请输入内容');
   };
   //错误信息三
   error3 = () => {
      message.error('没有符合项');
   };
   //错误信息四
   error4 = () => {
      message.error('请选择要删除的项');
   };
   //删除确认弹框
   confirm1 = (e) => {
      if (this.state.selectedRowKeys.length) {
         this.del();
         message.success('成功删除');
      } else {
         this.error4();
      }
   }
   cancel1 = (e) => {
      message.error('取消删除');
   }
   //添加确认弹框
   confirm2 = (e) => {
      let name = this.oName.refs.input.value;
      let age = this.oAge.refs.input.value;
      let address = this.oAddress.refs.input.value;
      if (name && age && address) {
         this.add(name,age,address);
         message.success('成功添加');
      } else {
         this.error2();
      }
   }
   cancel2 = (e) => {
      message.error('取消添加');
   }
   //修改确认弹框
   confirm3 = (e) => {
      let name = this.oName.refs.input.value;
      let age = this.oAge.refs.input.value;
      let address = this.oAddress.refs.input.value;
      if (this.state.selectedRowKeys.length !== 1) {
         this.error1();
      } else {
         this.changeList(name,age,address)
         message.success('成功修改');
      }
   }
   cancel3 = (e) => {
      message.error('取消修改');
   }
   render() {
      const {loading, selectedRowKeys} = this.state;
      const rowSelection = {
         selectedRowKeys,
         onChange: this.onSelectChange
      };
      const hasSelected = selectedRowKeys.length > 0;
      //分页
      const pagination = {
         current: this.state.current,
         onChange: (page, pageSize) => {
            this.setState({current: page});
         }
      }
      return (
         <div>
            <div className="listHead" style={{
               marginBottom: 16
            }}>
               <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                  Reload
               </Button>
               <Popconfirm title="确认删除?" onConfirm={this.confirm1} onCancel={this.cancel1} okText="Yes" cancelText="No">
                  <Button type="danger">Delete</Button>
               </Popconfirm>
               <div className="example-input">
                  <Input placeholder="Name" value={this.state.val1} onChange={this.change1} ref= {(elem) => {this.oName = elem}}/>
                  <Input placeholder="Age" value={this.state.val2} onChange={this.change2} ref= {(elem) => {this.oAge = elem}}/>
                  <Input placeholder="Address" value={this.state.val3} onChange={this.change3} ref= {(elem) => {this.oAddress = elem}}/>
               </div>
               <Popconfirm title="确认添加?" onConfirm={this.confirm2} onCancel={this.cancel2} okText="Yes" cancelText="No">
                  <Button type="primary">Add</Button>
               </Popconfirm>
               <Popconfirm title="确认修改?" onConfirm={this.confirm3} onCancel={this.cancel3} okText="Yes" cancelText="No">
                  <Button type="primary">Change</Button>
               </Popconfirm>
               <Button type="primary" onClick={this.searchList}>Search</Button>
               <span style={{
                  marginLeft: 8
               }}>
                  {hasSelected
                     ? `Selected ${selectedRowKeys.length} items`
                     : ''}
               </span>
            </div>
            <Table className="table1" rowSelection={rowSelection} columns={columns} dataSource={data} pagination={pagination}/>
            <Table className="table2" columns={columns} dataSource={this.state.data}/>
         </div>
      );
   };
};

export default Option_2;
