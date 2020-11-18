import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    //ลบออกก็ไม่มีผลนะ
    super(props);
  }
  render() {
    const { pic, title, content } = this.props; // ประกาศนอก render ไม่ได้ และใน return ก็ไม่ได้
    return (
      <div style={{ width: 300, backgroundColor: "gray" }}>
        <div style={{ height: 200, backgroundColor: "wheat" }}>
          <img src={pic} style={{ height: "100%", width: 300 }} alt="Cover" />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
        <div>card footer</div>
      </div>
    );
  }
}
