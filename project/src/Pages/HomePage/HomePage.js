
import Header from '../../composants/Header/Header';
import Banner from '../../composants/Banner/Banner';
import Footer from '../../composants/Footer/Footer';
import Gallery from '../../composants/Gallery/Gallery';
import './HomePage.scss';

function HommePage() {
  return (
    <div className="app-container">
    <Header />
    <Banner />
    <Gallery />
    <Footer />
  </div>
  );
}

export default HommePage;