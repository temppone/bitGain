import { ptShort } from 'yup-locale-pt';
import * as yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInContainer, SignInForm } from './styles';
import { useFirebaseContext } from '../../contexts/FirebaseContext';
import Input from '../Input';
import PageTitle from '../PageTitle';
import Button from '../Button';

const SignIn = () => {
    const { login } = useFirebaseContext();

    type SignInTypes = {
        email: string;
        password: string;
    };

    yup.setLocale(ptShort);

    const schema: yup.SchemaOf<SignInTypes> = yup.object().shape({
        email: yup.string().default('').email().required(),
        password: yup.string().default('').min(6).required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInTypes>({ resolver: yupResolver(schema) });

    const SignInSubmit: SubmitHandler<SignInTypes> = (data) => {
        login(data);
    };

    return (
        <SignInContainer>
            <PageTitle title='Olá de novo!' salutation='Digite seu email e senha' />
            <SignInForm action='' onSubmit={handleSubmit(SignInSubmit)}>
                <Input
                    label='Email'
                    name='email'
                    required
                    register={register}
                    inputError={errors?.email?.message}
                />
                <Input
                    label='Senha'
                    name='password'
                    type='password'
                    required
                    register={register}
                    inputError={errors?.password?.message}
                />

                <Button name='Cadastrar' width='100%' />
            </SignInForm>
        </SignInContainer>
    );
};
export default SignIn;
