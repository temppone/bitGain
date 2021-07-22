import { ButtonBox } from './styles';

type ButtonTypes = {
    name: string;
    width: string;
};

const Button = ({ name, width, ...props }: ButtonTypes) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonBox style={{ width }} {...props}>
        {name}
    </ButtonBox>
);

export default Button;
