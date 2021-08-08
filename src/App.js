import "./App.css"
import GetBooks from "./GetBooks"
import AddBook from "./AddBook"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function App() {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/getbooks">Get Books</Link>
            </li>
            <li>
              <Link to="/addbook">Add Book</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route path="/getbooks">
              <GetBooks />
            </Route>
            <Route path="/addbook">
              <AddBook />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}
