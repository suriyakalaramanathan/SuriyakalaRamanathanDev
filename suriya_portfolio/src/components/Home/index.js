
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
        return (
            <div className= "home-page">
                <div className="text-zone">
                  <h1>Hi,<br /> I am
                    <img src={LogoTitle} alt="developer" />uriyakala
                    <br />
                    Web Developer
                  </h1>
                  <h2>Software developer/ C++ developer</h2>
                  <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
              </div>
          );
}
export default Home;



