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
      let nowTime = new Date();
      let year = nowTime.getFullYear();
      let month = nowTime.getMonth() + 1;
      let today = nowTime.getDate();
      let hours = nowTime.getHours();
      let minutes = nowTime.getMinutes();
      let seconds = nowTime.getSeconds();
      let time = year + '年' + month + '月' + today + '日' + hours + '时' + minutes + '分' + seconds + '秒';
      let text = this.state.txt;
      let data = {
         date: time,
         text: text
      }
      this.props.addNote(data);
      this.success();
   };
   //信息提示
   success = () => {
      message.success('提交成功');
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
