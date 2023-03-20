import AuthMenu from '../../AuthArea/AuthMenu/AuthMenu';
import './Header.css';

function Header() {
  return (
    <div className='Header'>
      <AuthMenu />
        <h1>Northwind</h1>
    </div>
  )
}

export default Header;