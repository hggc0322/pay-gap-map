import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import { Link } from "gatsby"

class SearchResult extends Component {

 render() {
  let keys = Object.keys(this.props.resultVal);
   return (
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{this.props.resultVal.name}</Card.Title>
    <Card.Text>
      
      {this.props.resultVal && keys.map((i) => {
        let value = this.props.resultVal[i];
        if(i !=='name' && i!=='id'&& value !== null && i!=='updated_at' && i!=='created_at'){
          if(i === 'address'){
            value = value.replace(/[^a-zA-Z0-9]/g, " ");

          }
          return (
            <li style={{ listStyleType: "none" }} key={`${i}${new Date().getTime()}`}>{`${(i.replace(/[\d_]+/g, ' ')).replace(/(\b[a-z](?!\s))/g,function(x){return x.toUpperCase();})}:${value}`}</li>
          );
        }
        return;

      })}

    </Card.Text>
    <Link to='/report-benefits' state={{ companyName: this.props.resultVal.name }}> Add Benefit Data </Link>
  </Card.Body>
</Card>
    
   )
 }
}

export default SearchResult;

