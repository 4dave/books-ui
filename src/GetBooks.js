import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

export default function GetBooks() {
  const [items, setItems] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/book")
      .then((response) => setItems(response.data))
  }, [])
  // console.log(items)

  return (
    <div>
      <h1>Books:</h1>
      {items.map((item) => {
        return (
          <ul key={item.ID}>
            <li key={item.ID}>
              <h2>{item.title}</h2>
              <p>Author: {item.author}</p>
              <p>Rating: {item.rating}</p>
            </li>
          </ul>
        )
      })}
    </div>
  )
}
