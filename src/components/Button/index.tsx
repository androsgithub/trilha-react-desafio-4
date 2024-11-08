import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled = false }: IButtonProps) => {
  return (
    <ButtonContainer disabled={disabled} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
