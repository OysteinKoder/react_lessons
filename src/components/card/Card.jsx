// Importing the CardContainer component from the cardStyles module
import { CardContainer } from "./cardStyles";

// Defining a functional component called Card that takes in props as an argument
export const Card = (props) => {
  // Returning the CardContainer component with the props passed in
  // The props include a title, image source, and text
  return (
    <CardContainer>
      <h2>{props.title}</h2>
      <img src={props.img} />
      <p>{props.text}</p>
    </CardContainer>
  );
};
// Exporting the Card component as the default export of this module
export default Card;
