import {Component} from 'react'
import CardItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    console.log(searchInput)
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachCard =>
      eachCard.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            className="input"
            placeholder="Search"
            onChange={this.onSearch}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-icon-img"
            alt="search icon"
          />
        </div>
        <ul className="card-container">
          {searchResults.map(eachCard => (
            <CardItem destinations={eachCard} key={eachCard.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
