/* eslint-disable react/jsx-props-no-spreading */
import { InputContainer, InputLabel, InputField, InputWarning } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    inputError: any;
}

const Input = ({ label, name, inputError, ...props }: Props) => (
    <InputContainer>
        <InputLabel>{label}</InputLabel>
        <InputField {...props} inputError={inputError} />
        <InputWarning>{inputError}</InputWarning>
    </InputContainer>
);

export default Input;
