import Card from '../components/ui/card';
import RegisterLogin from '../components/form/registerLogin';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Card>
          <RegisterLogin />
        </Card>
      </main>
    </div>
  );
};

export default Home;
