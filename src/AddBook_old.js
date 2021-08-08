import React from "react"
import axios from "axios"

export default function AddBook_Old() {
  return (
    <div>
      <h1>Add Book</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const title = e.target.title.value
          const author = e.target.author.value
          const rating = e.target.rating.value
          parseInt(rating)
          const book = {
            title,
            author,
            rating,
          }
          axios.post("http://localhost:8000/api/v1/book", book)
          console.log(book)
        }}
      >
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Author" name="author" />
        <input type="number" placeholder="Rating" name="rating" />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  )
}
