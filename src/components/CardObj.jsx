class CardObj {
  constructor (title, price, rating, ratingCount, thumbnail, status = false, country) {
    this.title = title
    this.price = price
    this.rating = rating
    this.ratingCount = ratingCount
    this.thumbnail = thumbnail
    this.status = status
    this.country = country
  }
}

export default CardObj
