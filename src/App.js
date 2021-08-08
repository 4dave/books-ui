import "./App.css"
import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

export default function App() {
  const [items, setItems] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/book")
      .then((response) => setItems(response.data))
  }, [])

  return (
    <div>
      <h1>Books:</h1>
      {items.map((item) => {
        return (
          <>
            <ul>
              <li key={item.id}>
                <h2>{item.title}</h2>
                <p>Author: {item.author}</p>
                <p>Raiting: {item.rating}</p>
              </li>
            </ul>
          </>
        )
      })}
    </div>
  )
}
