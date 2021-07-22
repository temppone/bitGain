import { ButtonBox } from './styles';

type ButtonTypes = {
    name: string;
    onClick: () => void;
    width: string;
};

const Button = ({ name, onClick, width, ...props }: ButtonTypes) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonBox onClick={onClick} style={{ width }} {...props}>
        {name}
    </ButtonBox>
);

export default Button;
