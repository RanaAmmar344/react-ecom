import React from 'react'
import { Link } from 'react-router-dom'


const AddCart = () => {
  return (
    <div>
      <h1 class='mainheading'> your cart</h1>

      <Link to='/checkout'> <button type="button" class="btn btn-warning">CheckOut </button> </Link>
    </div>
  )
}

export default AddCart
