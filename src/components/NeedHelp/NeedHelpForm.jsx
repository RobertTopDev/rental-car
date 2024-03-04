import { toast } from "react-toastify";
import { fetchEmailDB } from "../../services/emailPost";
import emailRegex from "../../regex/emailRegex";
import { commonToastOptions } from "../../helpers/toastOptions";
import {
  NeedHelpFormWrapper,
  NeedHelpInput,
  NeedHelpText,
  NeedHelpBtn,
  NeedHelpTitle,
  NeedHelpCloseModal,
} from "./NeedHelpForm.styled";
import { sendEmail } from "../../services/sendEmail";

// eslint-disable-next-line react/prop-types
function NeedHelpForm({ handleNeedHelpCloseModal, setNeedHelp }) {
  const handleNeedHelp = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      message: e.target.comment.value,
    };

    const validEmail = emailRegex.test(data.email);
    const validMessage = data.message.length > 0;

    if (validEmail && validMessage) {
      sendEmail(data);
      try {
        await fetchEmailDB(data);
        toast.success(
          "Thank you for reaching out! Your message has been received.",
          commonToastOptions
        );
      } catch (error) {
        toast.error(
          "Error submitting request. Please try again later.",
          commonToastOptions
        );
      }
    } else {
      if (!validMessage && data.email.length === 0) {
        toast.warning(
          "Please fill in all required fields!",
          commonToastOptions
        );
        return;
      }

      if (!validEmail) {
        toast.warning(
          "Please enter a valid email address!",
          commonToastOptions
        );
        return;
      }

      if (!validMessage) {
        toast.warning("Please enter a message!", commonToastOptions);
        return;
      }
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
