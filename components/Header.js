
// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
             Inicio
            </Link>
          </li>
          <li>
            <Link href="/about">
             Acerca de
            </Link>
          </li>
          {/* Agrega más enlaces según tus necesidades */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;