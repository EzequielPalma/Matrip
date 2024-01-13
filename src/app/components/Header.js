
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
          <li>
            <Link href="/dondecomer">
             ¿Dónde comer?
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;