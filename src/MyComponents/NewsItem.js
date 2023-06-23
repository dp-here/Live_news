// import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imgurl, newsUrl, author, date, source}=this.props;
    return (
      <div>
        <div className="card" >
  <img className="card-img-top" src={imgurl} alt="p" />
  <div className="card-body">
    <h5 className="card-title">{title} <span className="badge badge-pill badge-success" style={{fontSize:"small"}}>{source}</span></h5>
    <p className="card-text">{description}...</p>
    <div className="card-footer text-danger">Written by {author} on {new Date(date).toGMTString()}</div>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem

