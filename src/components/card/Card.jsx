import { CardContainer } from "./cardStyles";

export const Card = (props) => {
  return (
    <CardContainer>
      <h2>{props.title}</h2>
      <img src={props.img} />
      <p>{props.text}</p>
    </CardContainer>
  );
};

export default Card;
