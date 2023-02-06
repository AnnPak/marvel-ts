import { FC } from "react";
import styles from "./buttons.module.scss";
import { Link } from "react-router-dom";

export const PrimaryButton: FC<{ text: string }> = ({ text }) => {
  return (
    <button className={styles.primaryBtn}>
      <svg viewBox="0 0 180 60" className="border">
        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
      </svg>
      {text}
    </button>
  );
};

export const PrimaryButtonLink: FC<{ text: string; link: string }> = ({
  text,
  link,
}) => {
  return (
    <Link to={link} className={styles.primaryBtn}>
      <svg viewBox="0 0 180 60" className="border">
        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
      </svg>
      {text}
    </Link>
  );
};
