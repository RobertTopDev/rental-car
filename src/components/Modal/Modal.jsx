import Modal from "react-modal";
import { CardBtn } from "../CarItems/CarItems.styled";
import { useState } from "react";
import { ModalImg, ModalWrapper } from "./Modal.styled";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// eslint-disable-next-line no-unused-vars
function ModalPopUp({ items }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <CardBtn type="button" onClick={openModal}>
        Learn More
      </CardBtn>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalWrapper>
          <ModalImg src={items.img} alt="" />
          <div>
            <div>
              <div>
                <h2>{items.make}</h2>
                <p>, {items.year}</p>
              </div>
              <div>
                <span>{items.address}</span>
                <span> | Id: {items.id}</span>
                <span> | Year: {items.year}</span>
                <span> | Type: {items.type}</span>
              </div>
              <div>
                <span>Fuel Consumption: {items.fuelConsumption}</span>
                <span> | Engine Size: {items.engineSize}</span>
              </div>
              <div>
                <p>{items.description}</p>
              </div>
              <div>
                <p>Accessories and functionalities:</p>
                <div>
                  {items.accessories.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div>
                <p>Rental Conditions: </p>
                <div>{items.rentalConditions}</div>
              </div>
              <span>Mileage: {items.mileage}</span>
              <span>Price: {items.price}</span>
            </div>
          </div>
          <button>Rent A Car</button>
        </ModalWrapper>
      </Modal>
    </>
  );
}

export default ModalPopUp;
