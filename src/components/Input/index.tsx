type Props = {
    onChange: (str: string) => void;
    placeholder: string;
    name: string;
    value?: string;
};

const Input = ({ onChange, name, placeholder, value = '' }: Props) => {
    <input
        onChange={(event) => onChange(event.target.value)}
        name={name}
        placeholder={placeholder}
        value={value}
    />;
};

export default Input;
