import classNames from "classnames";

import AppBanner from "../../app-banner/app-banner";
import CharList from "../../char-list/char-list";

import appStyles from "../../app/app.module.scss";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <>
      <AppBanner />
      <section className={classNames(appStyles.container, styles.charContaner)}>
        <CharList />
      </section>
    </>
  );
};

export default Home;
