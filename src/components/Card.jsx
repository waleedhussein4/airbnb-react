import star from '../assets/star.png'
import '../styles/Cards.css'

function Card ({ card }) {
  return (
    <div className='card'>
      <div className='card-thumbnail-container'>
        <img className='card-thumbnail' src={card.thumbnail} />
      </div>
      {card.status && <div className='card-status'>SOLD OUT</div>}
      <div className='card-rating'>
        <img src={star} />
        <span>{card.rating}</span>
        <span>({card.ratingCount})</span>
        <span>•</span>
        <span>{card.country}</span>
      </div>
      <p className='card-title'>{card.title}</p>
      <p className='card-pricing'><span>From ${card.price}</span> / person</p>
    </div>
  )
}

export default Card
