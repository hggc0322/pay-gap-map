import React from "react"
import Layout from "../components/layout"


export default class BenefitsPage extends React.Component{
  state = {
    companyName:"",
    matLength: "",
    matPay:'',
    hasFlex:'',
    hasChildCare: ''
  }

   handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }


  render() {
    return(
    	<Layout>
    	<form onSubmit={this.handleSubmit}>
    	<h3>Please fill out the form below to report on the available benefits of your company. All data will be anonamous and will not be linked back to you.</h3>
    	<label>Company Name: <input type="text" name="companyName" value={this.state.companyName}
            onChange={this.handleInputChange}/></label>
    	<label>Length of Maternity Leave in weeks: <input type="text" name="matLength" value={this.state.matLength}
            onChange={this.handleInputChange}/></label>
        <label>Percentage of Pay Provided By Company during Maternity Leave:<input type="text" name="matPay" value={this.state.matPay}
            onChange={this.handleInputChange}/></label>
        <label> Does this company have a Flexible Schedule option?<input type="text" name="hasFlex" value={this.state.hasFlex}
            onChange={this.handleInputChange}/></label>
        <label> Does this company provide child care on site or some other form of child care assistance?<input type="text" name="hasChildCare" value={this.state.firstName}
            onChange={this.hasChildCare}/></label>
        <button type="submit">Submit</button>
        </form>
    	</Layout>) 
  }
}


