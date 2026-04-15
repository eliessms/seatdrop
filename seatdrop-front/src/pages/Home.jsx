import Header from '../components/layout/Header'
import LiveBanner from '../components/home/LiveBanner'
import MatchHero from '../components/home/MatchHero'
import FanDrawBlock from '../components/home/FanDrawBlock'
import ListingList from '../components/home/ListingList'

function Home() {
  return (
    <>
      <Header />
      <LiveBanner />
      <MatchHero />
      <FanDrawBlock />
      <ListingList />
    </>
  )
}

export default Home