import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import {
   Layout,
   Menu,
   Icon,
   Avatar,
   Input,
   Dropdown
} from 'antd';
import $ from 'jquery';
import '../css/layout.css';
import Bread from './breadcrumb';
import Option_1 from './option_1';
import Option_2 from './option_2';
import User_1 from './user_1.js';
import User_2 from './user_2.js';
import User_3 from './user_3.js';
import Favorite from './favorite.js';
import Movie from './movie.js';
import Music from './music.js';
import Editor from './editor.js';
import Note from './note.js';

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
//头部搜索
const Search = Input.Search;
//头部下拉菜单
const menu = (
   <Menu>
      <Menu.Item>
         <Link to="/">切换用户</Link>
      </Menu.Item>
      <Menu.Item>
         <Link to="/">退出登录</Link>
      </Menu.Item>
      <Menu.Item>
         <a href="javascript:;">个人信息</a>
      </Menu.Item>
   </Menu>
);
class SiderDemo extends Component {
   state = {
      collapsed: false,
      //收藏夹数据
      favData: [],
      //收藏夹数量
      num: 0,
      //面包屑数据
      breadArr: ['Home'],
      //便签数据
      arr: [
         {
            id:1,
            date: '2017.08.26',
            text: '额呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵！'
         }, {
            id:2,
            date: '2017.08.26',
            text: '数据数据数据数据'
         }, {
            id:3,
            date: '2017.08.26',
            text: '呵呵呵呵呵呵！'
         }, {
            id:4,
            date: '2017.08.25',
            text: '今天天气不错，出去走走！'
         }, {
            id:5,
            date: '2017.08.25',
            text: '哈哈哈哈啊哈哈哈哈啊哈'
         }, {
            id:6,
            date: '2017.08.25',
            text: '无待办事项'
         }, {
            id:7,
            date: '2017.08.24',
            text: '今日任务全部完成，等待验收！'
         }, {
            id:8,
            date: '2017.08.24',
            text: '今日完成任务数：2，等待验收！'
         }, {
            id:9,
            date: '2017.08.24',
            text: '今日完成任务数：3，等待验收！'
         }
      ]
   };
   componentDidMount(){
      let h1 = $('#root').height();
      $('.ant-layout-sider').css('height',h1);
      $('.ant-layout').css('height',h1);
      $(window).resize(function() {
         let h1 = $('#root').height();
         $('.ant-layout-sider').css('height',h1);
         $('.ant-layout').css('height',h1);
      });
   };
   onCollapse = (collapsed) => {
      this.setState({collapsed});
   }
   //添加便笺内容
   addNote = (data) => {
      let {arr} = this.state;
      let arr1 = Object.assign(arr);
      arr1.unshift(data);
      this.setState({arr: arr1});
   };
   //删除便笺内容
   deleteLi = (id) => {
      let {arr} = this.state;
      let arr1 = Object.assign(arr);
      let arr2 = arr1.filter((e, i) => {
         return e.id !== id;
      });
      this.setState({arr: arr2});
   };
   //更改便笺内容
   changeVal = (val, id) => {
      let {arr} = this.state;
      let arr1 = Object.assign(arr);
      arr1.forEach((e, i) => {
         if (e.id === id) {
            e.text = val;
         }
      });
      this.setState({arr: arr1});
   };
   //便笺排序
   sortList = (data) => {
      this.setState({arr: data});
   };
   //添加收藏夹数据
   addData = (data) => {
      let {favData} = this.state;
      let arr = Object.assign(favData);
      for (var i = 0; i < arr.length; i++) {
         for (var j = 0; j < data.length; j++) {
            if (arr[i].key === data[j].key) {
               data.splice(j, 1);
            }
         }
      }
      let arr2 = arr.concat(data)
      let n = arr2.length;
      this.setState({favData: arr2, num: n});
   };
   //删除收藏夹内容
   favDel = (arr) => {
      let {favData} = this.state;
      let arr1 = Object.assign(favData);
      for (var i = 0; i < arr.length; i++) {
         for (var j = 0; j < arr1.length; j++) {
            if (arr[i] === arr1[j].key) {
               arr1.splice(j, 1);
            }
         }
      }
      let n = arr1.length;
      this.setState({favData: arr1, num: n});
   };
   //生成面包屑
   getHash = (ev) => {
      let url = decodeURI(ev.target.href);
      let arr = url.split('/');
      arr.splice(0, 3);
      arr.splice(0, 1, 'Home');
      this.setState({breadArr: arr});
   };
   //面包屑回退
   back = (arr) => {
      this.setState({breadArr: arr});
   };
   render() {
      return (
         <Layout>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
               <div className="logo"/> {/* 侧边栏 */}
               <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item key="1">
                     <Link to="/SiderDemo/Show" onClick={this.getHash}>
                        <Icon type="pie-chart"/>
                        <span>
                           Show
                        </span>
                     </Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                     <Link to="/SiderDemo/User" onClick={this.getHash}>
                        <Icon type="desktop"/>
                        <span>
                           User
                        </span>
                     </Link>
                  </Menu.Item>
                  <SubMenu key="sub1" title={< span > <Icon type="team"/> < span > Singer < /span></span >}>
                     <Menu.Item key="3">
                        <Link to="/SiderDemo/贝贝" onClick={this.getHash}>贝贝</Link>
                     </Menu.Item>
                     <Menu.Item key="4">
                        <Link to="/SiderDemo/PG_One" onClick={this.getHash}>PG_One</Link>
                     </Menu.Item>
                     <Menu.Item key="5">
                        <Link to="/SiderDemo/Tizzy t" onClick={this.getHash}>Tizzy t</Link>
                     </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={< span > <Icon type="user"/> < span > Information < /span></span >}>
                     <Menu.Item key="6">
                        <Link to="/SiderDemo/Favorite" onClick={this.getHash}>Favorite</Link>
                     </Menu.Item>
                     <Menu.Item key="8">
                        <Link to="/SiderDemo/Editor" onClick={this.getHash}>Editor</Link>
                     </Menu.Item>
                     <Menu.Item key="9">
                        <Link to="/SiderDemo/Note" onClick={this.getHash}>Note</Link>
                     </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title={< span > <Icon type="file"/> < span > Search < /span></span >}>
                     <Menu.Item key="10">
                        <Link to="/SiderDemo/Movie" onClick={this.getHash}>Movie</Link>
                     </Menu.Item>
                     <Menu.Item key="11">
                        <Link to="/SiderDemo/Music" onClick={this.getHash}>Music</Link>
                     </Menu.Item>
                  </SubMenu>
               </Menu>
            </Sider>
            <Layout>
               {/* 头部 */}
               <Header style={{
                  background: '#fff',
                  padding: 0
               }}>
                  <p>Welcome! &nbsp;&nbsp;&nbsp;<span>{this.props.user}</span>
                  </p>
                  <Dropdown overlay={menu}>
                     <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                  </Dropdown>
                  <Search placeholder="input search text" style={{
                     width: 200
                  }} onSearch={value => console.log(value)}/>
               </Header>
               {/* 内容 */}
               <Content style={{
                  margin: '0 16px'
               }}>
                  {/* 面包屑导航 */}
                  <Bread data={this.state.breadArr} back={this.back}/> {/* 中间内容区域设置路由加载组件 */}
                  <div style={{
                     padding: 24,
                     background: '#fff',
                     minHeight: 360
                  }}>
                     <Switch>
                        <Route exact path="/SiderDemo" component={Option_1}/>
                        <Route path="/SiderDemo/Show" component={Option_1}/>
                        <Route path="/SiderDemo/User" component={Option_2}/>
                        <Route path="/SiderDemo/贝贝" render= {() => { return <User_1 addData={this.addData} n={this.state.num} /> }}/>
                        <Route path="/SiderDemo/PG_One" render= {() => { return <User_2 addData={this.addData} n={this.state.num} /> }}/>
                        <Route path="/SiderDemo/Tizzy t" render= {() => { return <User_3 addData={this.addData} n={this.state.num} /> }}/>
                        <Route path="/SiderDemo/Favorite" render= {() => { return <Favorite data={this.state.favData} favDel = {this.favDel} /> }}/>
                        <Route path="/SiderDemo/Editor" render={() => {
                           return <Editor addNote={this.addNote}/>
                        }}/>
                        <Route path="/SiderDemo/Note" render={() => {
                           return <Note data={this.state.arr} deleteLi={this.deleteLi} changeVal={this.changeVal} sortList={this.sortList}/>
                        }}/>
                        <Route path="/SiderDemo/Movie" component={Movie}/>
                        <Route path="/SiderDemo/Music" component={Music}/>
                     </Switch>
                  </div>
               </Content>
               {/* 页脚 */}
               <Footer style={{
                  textAlign: 'center'
               }}>
                  Ant Design ©2016 Created by Ant UED
               </Footer>
            </Layout>
         </Layout>
      );
   }
}

export default SiderDemo;
