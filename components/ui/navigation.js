import Link from 'next/link';
import styles from '../../styles/components/ui/navigation.module.scss';

const Navigation = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/user-log">User Log</Link>
          </li>
          <li>
            <Link href="/">Logout</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
