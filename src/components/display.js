import React from 'react'
import BookDetails from './bookDetails';
import axios from 'axios';


class Display extends React.Component{
constructor(){
    super();
    this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
}
    state = {
        bookDetails: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/bookDetails')
        .then((response)=>{
            this.setState({bookDetails: response.data.bookDetails})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    ReloadDataMethod(){
        axios.get('http://localhost:4000/api/bookDetails')
        .then((response)=>{
            this.setState({bookDetails: response.data.bookDetails})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <h1>View</h1>
                <BookDetails myBookDetails={this.state.bookDetails} ReloadDataMethod={this.ReloadDataMethod} ></BookDetails>
            </div>
        );
    }
}
export default Display;