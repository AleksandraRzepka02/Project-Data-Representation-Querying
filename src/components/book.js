import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Book extends React.Component {

   constructor() {
    super();
    //Creating the delete function on the page
    this.DeleteBookDetails = this.DeleteBookDetails.bind(this);
  }

  //Creating the delete logs 
  DeleteBookDetails(e) {
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/bookDetails/" + this.props.book._id)   
    .then()
    .catch();
    }

  render() {
    return (
      <div>
        <Card style={{ width: '85rem' }}>
        <Card.Img src={this.props.book.cover}></Card.Img> 
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>
                {this.props.book.year}
            </Card.Text>
            <Card.Text>
                {this.props.book.summary}
            </Card.Text>
            <Card.Text>
                {this.props.book.rating}
            </Card.Text>
            <Button variant="danger" onClick={this.DeleteBookDetails}>Delete</Button>
          <Link to={"/change/" + this.props.book._id} className="btn btn-primary">Change</Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
export default Book;