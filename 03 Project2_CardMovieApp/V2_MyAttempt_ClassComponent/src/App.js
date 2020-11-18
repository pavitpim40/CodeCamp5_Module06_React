import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from './components/Card_Class'
class App extends React.Component {

  state = {
    card : [{
      pic : "https://www.mendetails.com/wp-content/uploads/2019/10/02-captain-america-superhero-oct19.jpg",
      title : "card 1",
      content : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laboriosam quo nulla facere, cumque rerum quod fugiat quam quis molestias."
    },
    {
      pic : "https://www.mendetails.com/wp-content/uploads/2019/10/02-captain-america-superhero-oct19.jpg",
      title : "card 2",
      content : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laboriosam quo nulla facere, cumque rerum quod fugiat quam quis molestias."
    },
    {
      pic : "https://www.mendetails.com/wp-content/uploads/2019/10/02-captain-america-superhero-oct19.jpg",
      title : "card 3",
      content : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laboriosam quo nulla facere, cumque rerum quod fugiat quam quis molestias."
    },
    {
      pic : "https://www.mendetails.com/wp-content/uploads/2019/10/02-captain-america-superhero-oct19.jpg",
      title : "card 4",
      content : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laboriosam quo nulla facere, cumque rerum quod fugiat quam quis molestias."
    },
    {
      pic : "https://www.mendetails.com/wp-content/uploads/2019/10/02-captain-america-superhero-oct19.jpg",
      title : "card 5",
      content : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laboriosam quo nulla facere, cumque rerum quod fugiat quam quis molestias."
    }
  ]
  }
  render() {
    // const {pic,title,content} = this.state.card[0]
    return (
      <div className="App">
        <div className="container_card">
          <div className="Navbar"></div>
          <div className="card">
            {this.state.card.map((obj)=>{
            return  <Card pic={obj.pic} title={obj.title} content={obj.content}  />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
