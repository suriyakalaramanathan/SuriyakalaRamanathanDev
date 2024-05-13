import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubTitle from '../../assets/images/logo_sub.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
const SideBar = () =>
(
    <div className = 'nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className="sub-logo" src={LogoSubTitle} alt='slobodan' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassName ='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
            <NavLink exact='true' activeclassName ='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
            <NavLink exact='true' activeclassName ='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul><li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/suriyakala-resume/'>
                <FontAwesomeIcon icon ={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/suriyakalaramanathan/'>
                <FontAwesomeIcon icon ={faGithub} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)

export default SideBar; 