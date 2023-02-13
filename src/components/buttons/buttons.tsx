import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./buttons.module.scss";
import { TPrimaryButton } from "../../utils/types";
import classNames from "classnames";

export const PrimaryButton: FC<TPrimaryButton> = ({
  text,
  onClickFunc,
  isLoading,
}) => {
  return (
    <button
      className={classNames(styles.primaryBtn, isLoading && styles.loadingBtn)}
      onClick={onClickFunc ? () => onClickFunc() : undefined}
    >
      <svg viewBox="0 0 180 60" className={styles.borderSvg}>
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

export const CloseBtn: FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <button className={styles.closeBtn} onClick={() => closeModal()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0,0,256,256"
        width="32px"
        height="32px"
        fill-rule="nonzero"
      >
        <g
          fill="#a6a6a6"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
        >
          <g transform="scale(8,8)">
            <path d="M16,3c-7.16797,0 -13,5.83203 -13,13c0,7.16797 5.83203,13 13,13c7.16797,0 13,-5.83203 13,-13c0,-7.16797 -5.83203,-13 -13,-13zM16,5c6.08594,0 11,4.91406 11,11c0,6.08594 -4.91406,11 -11,11c-6.08594,0 -11,-4.91406 -11,-11c0,-6.08594 4.91406,-11 11,-11zM12.21875,10.78125l-1.4375,1.4375l3.78125,3.78125l-3.78125,3.78125l1.4375,1.4375l3.78125,-3.78125l3.78125,3.78125l1.4375,-1.4375l-3.78125,-3.78125l3.78125,-3.78125l-1.4375,-1.4375l-3.78125,3.78125z"></path>
          </g>
        </g>
      </svg>
    </button>
  );
};
