import classNames from "classnames";

import AppBanner from "../../app-banner/app-banner";
import appStyles from "../../app/app.module.scss";
import styles from "./home.module.scss";
import CharList from "../../char-list/char-list";

const Home = () => {
  return (
    <>
      <AppBanner />
      <section className={classNames(appStyles.container, styles.charContaner)}>
        <CharList />
        {/* <Modal /> */}
      </section>
    </>
  );
};

export default Home;
