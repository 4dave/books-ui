import React, { useState } from "react"
import axios from "axios"

export default function AddBook() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [rating, setRating] = useState("")
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState(null)

  const handleSubmit = () => {
    setLoading(true)
    setIsError(false)
    const ratingNum = parseInt(rating, 10)
    const data = {
      title: title,
      author: author,
      rating: ratingNum,
    }

    axios
      .post("http://localhost:8000/api/v1/book", data)
      .then((res) => {
        setData(res.data)
        setTitle("")
        setAuthor("")
        setRating()
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        setIsError(true)
      })
  }

  return (
    <div className="container p-3">
      <h1 className="d-inline-block mb-3">Add a Book</h1>
      <div style={{ maxWidth: 350 }}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author" className="mt-2">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="enter author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            className="form-control"
            id="rating"
            placeholder="enter rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        {isError && (
          <small className="mt-3 d-inline-block text-danger">
            Something went wrong. Please try again later.
          </small>
        )}
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
        {data && (
          <div className="mt-3">
            <strong>Output:</strong>
            <br />
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  )
}
