import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

import "./modal.scss";
interface ModalProps {
  children: React.ReactNode;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Modal: React.FC<ModalProps> = ({
  active,
  setActive,
  children,
}) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={() => setActive(false)} className="modal__close">
          <IoMdCloseCircleOutline size={35} />
        </div>
        {children}
      </div>
    </div>
  );
};
