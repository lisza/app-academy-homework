import React from 'react';
import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);

  this.state = { searchTerm: "" }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchTerm: event.currentTarget.value })
  }

  handleSubmit(event){
    event.preventDefault();
    // the below handles multi word searches
    let searchTerm = this.state.searchTerm.split(' ').join('+');
    this.props.fetchSearchGiphys(searchTerm)
  }

  render() {
    let { giphys } = this.props;

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.searchTerm}
            placeholder='Search for giphys'
          />
        <button>Search Gifs</button>
        </form>
        <GiphysIndex giphys={giphys}/>
      </div>
    )
  }
}

export default GiphysSearch;
