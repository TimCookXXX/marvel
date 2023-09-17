import { Outlet, Link } from 'react-router-dom';
import IconLogo from '../../components/IconLogo';
import './index.scss';

const Navigation = () => {
    return (
        <div className='container'>
            <div className="navigation">
                <div className='logo'>
                    <Link to='/'><IconLogo /></Link>
                </div>
                <div className='navigation-info'>
                    <Link className='navigation-link' to='/'>HOME</Link>
                    <Link className='navigation-link' to='/personagens'>PERSONAGENS</Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Navigation;