import styles from "../../app/app.module.scss";
import CharList from "../../char-list/char-list";

const Home = () => {
  return (
    <div className={styles.container}>
      <CharList />
    </div>
  );
};

export default Home;
