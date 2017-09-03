import React, {Component} from 'react';
import LzEditor from 'react-lz-editor';
import {Button, message} from 'antd';
import '../css/editor.css';

class Editor extends Component {
   constructor(props) {
      super(props);
      this.state = {
         responseList: [],
         txt: ''
      }
   }
   receiveMarkdown = (content) => {
      this.setState({txt: content});
   }

   click = () => {
      function two(n){
   		return n>10?''+n:'0'+n;
   	};
      let nowTime = new Date();
      let year = nowTime.getFullYear();
      let month = two(nowTime.getMonth() + 1);
      let today = two(nowTime.getDate());
      let time = year + '.' + month + '.' + today ;
      let text = this.state.txt;
      let data = {
         date: time,
         text: text,
         id: +new Date()
      }
      if (text.length>5) {
         this.props.addNote(data);
         this.success();
      } else {
         this.error();
      }
   };
   //信息提示
   success = () => {
      message.success('提交成功');
   };
   error = () => {
      message.error('请输入不少于5个字');
   };
   render() {
      let policy = "";
      const uploadProps = {
         action: "http://v0.api.upyun.com/devopee",
         onChange: this.onChange,
         listType: 'picture',
         fileList: this.state.responseList,
         data: (file) => {},
         multiple: true,
         beforeUpload: this.beforeUpload,
         showUploadList: true
      }
      return (
         <div className="editorBox">
            <div>
               <LzEditor active={true} importContent={this.state.markdownContent} cbReceiver={this.receiveMarkdown} image={false} video={false} audio={false} convertFormat="markdown"/>
            </div>
            <Button type="primary" onClick={this.click}>提交</Button>
         </div>
      );
   };
};

export default Editor;
