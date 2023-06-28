import { useState } from 'react'
import ReactPaginate from 'react-paginate';
import Container from './components/container'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>WP React</h1>
      <div class="post-list">
        <Container />
      </div>
    </>
  )
}

export default App
