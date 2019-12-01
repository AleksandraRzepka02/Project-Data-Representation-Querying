import React from 'react';
import axios from 'axios';

class Change extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {Title:'',
                      Year:'',
                      Cover:'',
                      _id:'',
                      Summary: '',
                      Rating:''};

                      //Setting up the variables so they can be changed later
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBookTitleChange = this.handleBookTitleChange.bind(this);
        this.handleBookYearChange = this.handleBookYearChange.bind(this);
        this.handleBookCoverChange = this.handleBookCoverChange.bind(this);
        this.handleBookSummaryChange = this.handleBookSummaryChange.bind(this);
        this.handleBookRatingChange = this.handleBookRatingChange.bind(this);
      }

//Change feature set up
componentDidMount(){
    alert(this.props.match.params.id);

    axios.get('http://localhost:4000/api/bookDetails/'+this.props.match.params.id)
    .then((response)=>{
        this.setState({
            _id:response.data._id,
            Title:response.data.title,
            Year:response.data.year,
            Cover:response.data.cover,
            Summary:response.data.summary,
            Rating:response.data.rating
        })
    })
    .catch();


}

//Setting the variables so they could be changeable
  handleBookTitleChange(e){
    this.setState({Title: e.target.value});
  }
  handleBookYearChange(e){
    this.setState({Year: e.target.value});
  }

  handleBookCoverChange(e){
    this.setState({Cover: e.target.value});
  }

  handleBookSummaryChange(e){
    this.setState({Summary: e.target.value});
  }

  handleBookRatingChange(e){
    this.setState({Rating: e.target.value});
  }


  //Submit the changed/edited book details
  handleSubmit(e){
    e.preventDefault();
    
    const newBook = {
      title: this.state.Title,
      year: this.state.Year,
      cover: this.state.Cover,
      summary: this.state.Summary,
      rating: this.state.Rating
    };
axios.put('http://localhost:4000/api/bookDetails/'+ this.state._id,newBook) 
.then()
.catch();

this.setState({
  
  Title:'',
Year:'',
Cover:'',
Summary:'',
Rating:''});    
}


    render(){
        return(
            <div>
                <h1>Change the Details</h1>
                <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>Book Title</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Title}
          onChange={this.handleBookTitleChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Book Year</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Year}
          onChange={this.handleBookYearChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Book Cover Url</label>
          <textarea
          row='3'
          className='form-control'
          value={this.state.Cover}
          onChange={this.handleBookCoverChange}
          ></textarea>
        </div>
        <div className='form-group'>
          <label>Book Summary</label>
          <textarea
          row='3'
          className='form-control'
          value={this.state.Summary}
          onChange={this.handleBookSummaryChange}
          ></textarea>
        </div>
        <div className='form-group'>
          <label>Book Rating</label>
          <textarea
          row='3'
          className='form-control'
          value={this.state.Rating}
          onChange={this.handleBookRatingChange}
          ></textarea>
        </div>
        <div>
          <input
          type="submit"
          value="Edit Book">
          </input>
        </div>
        </form>
       </div>
        )
    }
}

export default Change;