import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img style={{height:"70px"}} src={loading} alt="spinner" />
      </div>
    )
  }
}

export default Spinner