import React, {Component} from 'react';
import {Card} from 'antd';
import '../css/li.css';

class MovieSearch extends Component {

   render() {
      return (
         <li>
            <Card>
               <div className="custom-image">
                  <img
                     alt="example"
                     width="100%"
                     src={this.props.img}
                  />
               </div>
               <div className="custom-card">
                  <h3>{this.props.title}</h3>
                  <p>年份：{this.props.year}</p>
               </div>
            </Card>
         </li>
      );
   };
};

export default MovieSearch;
