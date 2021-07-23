import { ButtonBox } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    width: string;
    background: string;
    color: string;
}

const Button = ({ name, width, background, color, ...props }: Props) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonBox style={{ width, background, color }} {...props}>
        {name}
    </ButtonBox>
);

export default Button;
