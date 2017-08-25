import React, {Component} from 'react';
import {Input, Pagination} from 'antd';
import $ from 'jquery';
import '../css/search.css';
import MusicSearch from './musicSearch.js';

const Search = Input.Search;
let txt = '' ;
class Music extends Component {
   constructor(){
     super();
     this.state = {
       num:0,
       data:[],
       pageNum:100
     }
   }
   //初始
   componentDidMount() {
      $.ajax({
         url: 'https://api.douban.com/v2/music/search?callback=?',
         dataType: 'jsonp',
         data: {
            q:'周杰伦',
            start: 0,
            count: 8
         },
         success: (data) => {
            this.setState({
               pageNum:0,
               data:data.musics,
               num:0
            });
         }
      });
   };
   //搜索
   val = (value,num) => {
      $.ajax({
         url: 'https://api.douban.com/v2/music/search?callback=?',
         dataType: 'jsonp',
         data: {
            q: value,
            start: ((num || num===0)?num:this.state.num),
            count: 8
         },
         success: (data) => {
            console.log(data.musics);
            let page = Math.ceil(data.total/8)*10;
            this.setState({
               pageNum:page,
               data:data.musics,
               num:num
            });
         }
      });
      txt = value;
   };
   //点击页码
   click = (ev) => {
      if (txt) {
         let startNum = (ev-1)*8;
         this.val(txt,startNum);
      }
   };
   render() {
      let {data} = this.state;
      let data1 = Object.assign(data);
      let list = data1.map((e,i) => {
         if (e.attrs.singer) {
            let data = {
               img:e.image,
               title:e.title,
               singer:e.attrs.singer[0],
               key:i
            };
            return <MusicSearch {...data}/>
         }
      });
      return (
         <div className="movie">
            {/* 搜索框 */}
            <Search
               placeholder="input search text"
               onSearch={this.val}
            />
            {/* 列表 */}
            <ul className="oList">
               {list}
            </ul>
            {/* 分页 */}
            <Pagination
               defaultCurrent={1}
               total={this.state.pageNum}
               onChange = {this.click}
            />
         </div>
      );
   };
};

export default Music;
