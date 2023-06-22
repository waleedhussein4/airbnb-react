import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import './styles/App.css'
import cardData from './components/cardsdata'

function App () {
  const cards = cardData.map((card, index) => {
    return <Card key={index} card={card} />
  })

  return (
    <>
      <Nav />
      <Hero />
      <div id='cards'>
        {cards}
      </div>
    </>
  )
}

export default App
