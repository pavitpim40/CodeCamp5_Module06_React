//import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import {Card} from './card Movie/Card'

class App extends React.Component {
  state = {
    value : 0 , 
    card : [
    {
      pic : "https://i.pinimg.com/564x/70/34/0e/70340e5c1dd5e1817ba75d36a9e26d9b.jpg",
      title : "card 1",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio blanditiis maxime non dolores perferendis exercitationem nesciunt deserunt inventore dolore?"
    },
    {
      pic : "https://i.pinimg.com/564x/70/34/0e/70340e5c1dd5e1817ba75d36a9e26d9b.jpg",
      title : "card 2",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio blanditiis maxime non dolores perferendis exercitationem nesciunt deserunt inventore dolore?"
    },
    {
      pic : "https://i.pinimg.com/564x/70/34/0e/70340e5c1dd5e1817ba75d36a9e26d9b.jpg",
      title : "card 3",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio blanditiis maxime non dolores perferendis exercitationem nesciunt deserunt inventore dolore?"
    },
    {
      pic : "https://i.pinimg.com/564x/70/34/0e/70340e5c1dd5e1817ba75d36a9e26d9b.jpg",
      title : "card 4",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio blanditiis maxime non dolores perferendis exercitationem nesciunt deserunt inventore dolore?"
    },
    {
      pic : "https://i.pinimg.com/564x/70/34/0e/70340e5c1dd5e1817ba75d36a9e26d9b.jpg",
      title : "card 5",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio blanditiis maxime non dolores perferendis exercitationem nesciunt deserunt inventore dolore?"
    },
  ]
  }

  render(){
    const card = this.state.card
    return (
      <div className="App">
        <div className="container_card">
          <div className="Navbar">
            <div className="card">
              {card.map(obj=> <Card pic={obj.pic} title = {obj.title} content={obj.content}/> )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
