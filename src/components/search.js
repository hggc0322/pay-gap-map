import React, { Component } from 'react'
import SearchResult from './SearchResult'
import axios from 'axios'

const { API_KEY } = process.env
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class Search extends Component {

 state = {
   query: '',
   results: {
"id": 1,
"name": "5 HERTFORD STREET LIMITED",
"address": "10,+Norwich+Street,London,EC4A+1BD",
"industry": "Other business support service activities n.e.c.",
"created_at": "2019-03-23T21:11:58.141Z",
"updated_at": "2019-03-23T21:11:58.141Z",
"benefits": null,
"hourly_median_gender_gap_2018": -13,
"bonus_median_gender_gap_2018": -18
}
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 getInfo = () => {
   /* axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          results: data.data
        })
      })*/
  }


 render() {
  let res = (this.state.results) ? <SearchResult resultVal = {this.state.results}/>: <div></div>;
   return (
    <div>
    <p>Search for a company by name here:</p>
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
       {res}
       
     </form>
     </div>
   )
 }
}

export default Search

