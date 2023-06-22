import img from '../assets/hero.png'
import '../styles/Hero.css'

function Hero () {
  return (
    <div id='hero'>
      <img src={img} />
      <p>Online experiences</p>
      <p>Join unique interactive activities led by one-of-a-kind hosts ⸺ all without leaving home.</p>
    </div>
  )
}

export default Hero
