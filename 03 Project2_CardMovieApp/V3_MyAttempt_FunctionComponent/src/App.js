import React , {useState} from 'react'
import Card from './components/Card_Function'
import CSS from './App.css'
export default function App() {
    

    const [obj, setObj] = useState({ card : [{
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
  ]})
    
    return (
        <div className="App">
        <div className="container_card">
          <div className="Navbar"></div>
          <div className="card" >
          {obj.card.map((obj,index)=> <Card key={index} pic={obj.pic} title={obj.title} content={obj.content}/>)}
          </div>
        </div>
      </div>
    )
}
  