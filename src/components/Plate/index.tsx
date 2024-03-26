import { useState } from "react";

import { PlatesType } from "../../utils/platelist";

import * as S from "./styles";

type Props = {
  plate: PlatesType;
};

export function Plate({ plate }: Props) {
  type ModalType = {
    isVisible: boolean;
  };

  const [modal, setModal] = useState<ModalType>({ isVisible: false });

  const closeModal = () => {
    setModal({
      isVisible: false,
    });
  };

  return (
    <>
      <img
        src={plate.image}
        alt={plate.title}
        onClick={() => setModal({ isVisible: true })}
      />
      {/* Modal */}
      <S.Modal className={modal.isVisible ? "visible" : ""}>
        {/* Modal content */}
        <S.ModalContent className="container">
          <img src={plate.image} alt={plate.title} />
          <div>
            <button onClick={() => closeModal()}>X</button>
            <h3>{plate.title}</h3>
            <p>{plate.description}</p>
          </div>
        </S.ModalContent>
        {/* Overlay */}
        <div
          onClick={() => {
            closeModal();
          }}
          className="overlay"
        ></div>
      </S.Modal>
    </>
  );
}
