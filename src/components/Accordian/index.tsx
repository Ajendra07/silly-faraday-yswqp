import React from "react";
import DownArrow from "../../icons/DownArrow";
import UpArrow from "../../icons/UpArrow";
import Styles from "./index.module.scss";

interface Props {
  handleToggle: (event: React.MouseEvent<HTMLDivElement>) => void;
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  hasViewMore?: boolean;
  viewMoreText?: string;
}

const Accordian: React.FC<Props> = ({
  handleToggle,
  isOpen,
  title,
  children,
  icon,
  hasViewMore,
  viewMoreText,
}) => {
  return (
    <div className={Styles.container}>
      <div onClick={handleToggle} className={Styles.container__header}>
        <div className={Styles.container__header__iconTitle}>
          {icon && <>{icon}</>}
          <span>{title}</span>
        </div>
        {isOpen ? <UpArrow /> : <DownArrow />}
      </div>
      {isOpen && <div className={Styles.container__content}>{children}</div>}
      {hasViewMore && (
        <div className={Styles.container__viewMore}>{viewMoreText}</div>
      )}
    </div>
  );
};

export default Accordian;
