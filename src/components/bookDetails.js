import React from 'react';
import Book from './book';

class BookDetails extends React.Component{

    render(){
        return this.props.myBookDetails.map((book)=>{
            //console.log({bookDetails});
            return <Book key={book._id} book={book}
            ReloadDataMethod={this.props.ReloadDataMethod}></Book>
        });
    }
}
export default BookDetails;
