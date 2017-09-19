import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    }
  }

  retrieveSearchInput(searchInput) {
    this.setState({
      searchInput: searchInput.target.value
    });
  }


  handleSearchSubmit(event) {
    event.preventDefault();
    // Pass querying function (which all filters) into here from app. 
    this.props.queryDataBaseWithSearchInput(this.state.searchInput);
  }

  render(props) {
    return (
      <div>
        <ButtonToolbar>
          <span>
            <input type='text' placeholder='Enter a search term!' onChange={this.retrieveSearchInput.bind(this)}/> 
            <button onClick={this.handleSearchSubmit.bind(this)}>Search</button>      
          </span>
          <span>
            <Link to='/create'>
              <Button>Create</Button>
            </Link>
            <Link to='/'>
              <Button>Home</Button>
            </Link>
          </span>
        </ButtonToolbar>
        <hr/>
      </div>
    );
  }
}

export default NavBar;


// Can change input and button to elements within a form field which should mean you can submit by hitting enter as well as clicking submit