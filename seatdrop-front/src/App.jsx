import Header from './components/layout/Header'
import LiveBanner from './components/home/LiveBanner'
import MatchHero from './components/home/MatchHero'
import FanDrawBlock from './components/home/FanDrawBlock'
import ListingList from './components/home/ListingList'

function App() {
  return (
    <div className="max-w-sm mx-auto min-h-screen pb-20">
      <Header />
      <LiveBanner />
      <MatchHero />
      <FanDrawBlock />
      <ListingList />
    </div>
  )
}

export default App