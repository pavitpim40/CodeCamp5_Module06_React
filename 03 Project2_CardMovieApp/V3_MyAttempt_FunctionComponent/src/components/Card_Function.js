import React from "react";

export default function Card(props) {
  const { pic, title, content } = props;
  return (
    <div style={{ width: 300, backgroundColor: "gray" }}>
      <div style={{ height: 200, backgroundColor: "wheat " }}>
        <img src={pic} style={{ height: "100%", width: 300 }} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div>card footer</div>
    </div>
  );
}
