/* eslint-disable react/jsx-props-no-spreading */
import { InputContainer, InputLabel, InputField, InputWarning } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    inputError: any;
    register: any;
    required: boolean;
}

const Input = ({ label, name, inputError, required, register, ...props }: Props) => (
    <InputContainer>
        <InputLabel>{label}</InputLabel>
        <InputField {...register(`${name}`, { required })} {...props} />
        <InputWarning>{inputError}</InputWarning>
    </InputContainer>
);

export default Input;
