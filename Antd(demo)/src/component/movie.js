import React, {Component} from 'react';
import {Input, Pagination} from 'antd';
import $ from 'jquery';
import '../css/search.css';
import MovieSearch from './movieSearch.js';

const Search = Input.Search;
let txt = '' ;
class Movie extends Component {
   constructor(){
     super();
     this.state = {
       num:0,
       data:[],
       pageNum:100
     }
   }
   //初始加载热门电影
   //https://api.douban.com/v2/movie/in_theaters
   componentDidMount() {
      $.ajax({
         url: 'https://api.douban.com/v2/movie/in_theaters',
         dataType: 'jsonp',
         data: {
            start: 0,
            count: 8
         },
         success: (data) => {
            this.setState({
               pageNum:0,
               data:data.subjects,
               num:0
            });
         }
      });
   };
   //搜索
   val = (value,num) => {
      $.ajax({
         url: 'https://api.douban.com/v2/movie/search?callback=?',
         dataType: 'jsonp',
         data: {
            q: value,
            start: ((num || num===0)?num:this.state.num),
            count: 8
         },
         success: (data) => {
            let page = Math.ceil(data.total/8)*10;
            this.setState({
               pageNum:page,
               data:data.subjects,
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
         let data = {
            img:e.images.large,
            title:e.title,
            year:e.year,
            key:i
         };
         return <MovieSearch {...data}/>
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

export default Movie;
