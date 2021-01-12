import React, { Component } from 'react';

class Api extends Component {
  constructor(props) {
    super(props);

    this.state = {
       data: [],
       date: "",
       year: "",
       month: "",
       day: "",
    }
  }

  handleSubmit(event) {
   event.preventDefault();

   this.setState({
     date: `${this.state.year}-${this.state.month}-${this.state.day}`
   });

   const apiUrl = `https://epic.gsfc.nasa.gov/api/natural/date/${this.state.year}-${this.state.month}-${this.state.day}`

   fetch(apiUrl)
   .then(res => res.json())
   .then(
     (result) => {
       this.setState({
         isLoaded: true,
         data: result
       })
     }
   ),
   (error) => {
     this.setState({
       isLoaded: true,
       error
     });
   }
 }

 updateYear(event) {
    this.setState({
      year: event.target.value
    })
  }

  updateDay(event) {
   this.setState({
     day: event.target.value
   })
 }

 updateMonth(event) {
    this.setState({
      month: event.target.value
    })
  }

  getImg() {
    const firstInstance = this.state.data.map((item) => {
      return item.image;
    })
    const firstImg = firstInstance[0];
    const theImg = `https://epic.gsfc.nasa.gov/archive/natural/${this.state.year}/${this.state.month}/${this.state.day}/png/${firstImg}.png`

    return (
      <div>
        <img src={theImg} alt="NASA image"></img>
      </div>
    )
  }

  render() {
    console.log(this.state.data);
     return (
       <div className="layout">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
               Day
               <input type="text" value={this.state.day} onChange={this.updateDay.bind(this)} name="day" />
            </label>
             <label>
              Month
              <input type="text" value={this.state.month} onChange={this.updateMonth.bind(this)}
                name="month" />
            </label>
             <label>
               Year
               <input type="text" value={this.state.year} onChange={this.updateYear.bind(this)} name="year"/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
          <div className="card">
            {this.getImg()}
          </div>
       </div>
     )
   }
}

export default Api;
