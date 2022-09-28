import './index.css'

const CardItem = props => {
  const {destinations} = props
  const {name, imgUrl} = destinations

  return (
    <li className="list-container">
      <div>
        <img src={imgUrl} className="destination-img" alt={name} />
        <p>{name}</p>
      </div>
    </li>
  )
}

export default CardItem
