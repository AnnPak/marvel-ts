import classNames from "classnames";

import AppBanner from "../../app-banner/app-banner";
import appStyles from "../../app/app.module.scss";
import styles from "./home.module.scss";
import CharList from "../../char-list/char-list";
import Modal from "../../modal/modal";

const Home = () => {
  return (
    <>
      <AppBanner />
      <div className={classNames(appStyles.container, styles.charContaner)}>
        <CharList />
        <Modal />
      </div>
    </>
  );
};

export default Home;
