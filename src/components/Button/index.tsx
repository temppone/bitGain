import { ButtonBox } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    width: string;
}

const Button = ({ name, width, ...props }: Props) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonBox style={{ width }} {...props}>
        {name}
    </ButtonBox>
);

export default Button;
