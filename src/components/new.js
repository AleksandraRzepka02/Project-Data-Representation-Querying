import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';

class New extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Title: '',
      Year: '',
      Cover: '',
      Summary: '',
      Rating: ''
    };

    //Setting up the variables that are to be added
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBookTitleChange = this.handleBookTitleChange.bind(this);
    this.handleBookYearChange = this.handleBookYearChange.bind(this);
    this.handleBookCoverChange = this.handleBookCoverChange.bind(this);
    this.handleBookSummaryChange = this.handleBookSummaryChange.bind(this);
    this.handleBookRatingChange = this.handleBookRatingChange.bind(this);
  }

  handleBookTitleChange(e) {
    this.setState({ Title: e.target.value });
  }

  handleBookYearChange(e) {
    this.setState({ Year: e.target.value });
  }

  handleBookCoverChange(e) {
    this.setState({ Cover: e.target.value });
  }

  handleBookSummaryChange(e) {
    this.setState({ Summary: e.target.value });
  }

  handleBookRatingChange(e) {
    this.setState({ Rating: e.target.value });
  }

  //Adding all the variables in an alert form 
  handleSubmit(e) {
    alert(this.state.Title + "      " + this.state.Year
      + "       " + this.state.Cover + "    " + this.state.Summary
      + "      " + this.state.Rating);
    e.preventDefault();


    //Creating a new book 
    const newBook = {
      title: this.state.Title,
      year: this.state.Year,
      cover: this.state.Cover,
      summary: this.state.Summary,
      rating: this.state.Rating
    };

    //Logging the new variables into bookDetails aka dusplay page
    axios.post('http://localhost:4000/api/bookDetails', newBook)
      .then()
      .catch();


    this.setState({
      Title: '',
      Year: '',
      Cover: '',
      Summary: '',
      Rating: ''
    });
  }

  render() {
    return (
      <div>
        <h1>Add A New Book</h1>
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

              className='form-control'
              value={this.state.Cover}
              onChange={this.handleBookCoverChange}
            ></textarea>
          </div>
          <div className='form-group'>
            <label>Book Summary</label>
            <textarea

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
              value="Add Book">
            </input>
          </div>
        </form>
      </div>
    );
  }
}

export default New;