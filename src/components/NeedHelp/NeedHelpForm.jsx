import { toast } from "react-toastify";
import {
  NeedHelpFormWrapper,
  NeedHelpInput,
  NeedHelpText,
  NeedHelpBtn,
  NeedHelpTitle,
  NeedHelpCloseModal,
} from "./NeedHelpForm.styled";

// eslint-disable-next-line react/prop-types
function NeedHelpForm({ handleNeedHelpCloseModal, setNeedHelp }) {
  const handleNeedHelp = (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      message: e.target.comment.value,
    };

    if (data.email.length === 0 || data.message.length === 0) {
      toast.warning("Please fill in all required fields.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success(
        "Thank you for reaching out! Your message has been received, and we will review it soon. We appreciate your request for help.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        }
      );
    }

    setNeedHelp((prevState) => !prevState);
  };

  return (
    <>
      <NeedHelpCloseModal onClick={handleNeedHelpCloseModal} />
      <NeedHelpFormWrapper onSubmit={handleNeedHelp}>
        <NeedHelpTitle>NeedHelp</NeedHelpTitle>
        <NeedHelpInput name="email" type="text" placeholder="Email address" />
        <NeedHelpText
          name="comment"
          cols="30"
          rows="10"
          placeholder="Leave your message"
        ></NeedHelpText>
        <NeedHelpBtn type="submit">Submit</NeedHelpBtn>
      </NeedHelpFormWrapper>
    </>
  );
}

export default NeedHelpForm;
