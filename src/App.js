import React from 'react';
import './style.css'
import CardView from "./component/CardView"
import Data from "./component/datas"
import Header from "./component/Header"

export default function App() {
    const cardElement = Data.map(items=>{
        return(
            <CardView
               key={items.id}
               {...items}
            />
        )
    })
   return(
       <div className="App">
       <Header/>
       <div className="card-container">
           {cardElement}
       </div>
       </div>
   )
}

