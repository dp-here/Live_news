import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"
export class News extends Component {
  static defaultProps ={
    country: 'in',
    pageSize: 6,
    category: 'sports'
  }
  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalize=(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props){
    super(props);
    this.state={
    articles:[],
    loading: false,
    page:1,
    totalResults:0
    }
    document.title=`${this.capitalize(this.props.category)}-TOP NEWS`;
  }
  async updateNews(){
    this.props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data=await fetch(url);
    this.props.setProgress(30);
    let parsedData=await data.json();
    this.props.setProgress(70);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }
  async componentDidMount(){
   this.updateNews()
  }
  handlePrevClick =async()=>{
  this.setState({page: this.state.page-1});
  this.updateNews()
  }
  handleNextClick =async ()=>{
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    this.setState({page: this.state.page+1});
    this.updateNews();
    }
  }
  fetchMoreData=async()=>{
  this.setState({
    page:this.state.page+1
  })  
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults
    })
  }
  render() {
    return (
      <div className="container my-3 "> 
       <h2 className='text-center'style={{margin:"35px 0px", marginTop:"60px"}}>Latest News - {this.capitalize(this.props.category)}</h2> 
       {this.state.loading&& <Spinner />}
       <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    hasMore={this.state.articles.length!==this.state.totalResults}
    loader={<Spinner/>}
  >
      <div className="container">
      <div className="row">
       { this.state.articles.map((element)=>{return <div className='col-md-4' key={element.url}>
       <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgurl={element.urlToImage?element.urlToImage:"https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/26_03_2023_15_35_10_584252.jpg?width=920&format=jpeg"} newsUrl={element.url} author={element.author?element.author:"N/A"} date={element.publishedAt} source={element.source.name?element.source.name:"N/A"}/>
       </div>
  })}
        </div> 
      </div>
        </InfiniteScroll>    
        </div>
    )
  }
}

export default News