import { StyledParagraph } from "./styles";

const Paragraph = (props) => {
  return (
    <>
      <StyledParagraph>{props.text}</StyledParagraph>
    </>
  );
};

export default Paragraph;
