import {
  NeedHelpFormWrapper,
  NeedHelpInput,
  NeedHelpText,
  NeedHelpBtn,
  NeedHelpTitle,
  NeedHelpCloseModal,
} from "./NeedHelpForm.styled";

// eslint-disable-next-line react/prop-types
function NeedHelpForm({ handleNeedHelpCloseModal }) {
  const handleNeedHelp = (e) => {
    e.preventDefault();

    console.log(e.target.email);
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
