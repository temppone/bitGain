/* eslint-disable react/jsx-props-no-spreading */
import { InputContainer, InputLabel, InputField, InputWarning } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    inputError: string;
}

const Input = ({ label, inputError, ...props }: Props) => (
    <InputContainer>
        <InputLabel>{label}</InputLabel>
        <InputField {...props} />
        <InputWarning>{inputError}</InputWarning>
    </InputContainer>
);

export default Input;
