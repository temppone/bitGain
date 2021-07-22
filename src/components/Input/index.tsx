/* eslint-disable react/jsx-props-no-spreading */
import { InputContainer, InputLabel, InputField, InputWarning } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    inputError: string;
    register: any;
    required: boolean;
}

const Input = ({ label, name, inputError, required, register, ...props }: Props) => (
    <InputContainer>
        <InputLabel>{label}</InputLabel>
        <InputField name={name} {...register(`${name}`, { required: { required } })} {...props} />
        <InputWarning>{inputError}</InputWarning>
    </InputContainer>
);

export default Input;
