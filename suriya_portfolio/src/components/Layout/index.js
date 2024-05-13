import SideBar from '../Sidebar';
import {Outlet} from 'react-router-dom';
import './index.scss';

const Layout = () =>
{
    return (
    <div className='App'>
        <SideBar />
        <div className='page'>
            <span className='tags top-tags'> &lt;body&gt;</span>

             <Outlet/>

            <span className='tags bottom-tags'>&lt;body&gt;
            <br/>
            <span className='tags bottom-html'></span></span>
        </div>
        </div>
    );
}

export default Layout;