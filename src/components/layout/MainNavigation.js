import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <div>My-Amazon</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Shop</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;