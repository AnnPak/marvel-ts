import CharItem from "../char-item/char-item";
import styles from "./char-list.module.scss";

const CharList = () => {
  return (
    <div className={styles.charlist}>
      <CharItem />
      <CharItem />
      <CharItem />
      <CharItem />
      <CharItem />
      <CharItem />
      <CharItem />
    </div>
  );
};

export default CharList;
