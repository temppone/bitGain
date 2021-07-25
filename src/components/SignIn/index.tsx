/* eslint-disable react/jsx-props-no-spreading */
import { ptShort } from 'yup-locale-pt';
import * as yup from 'yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { SignInContainer, SignInForm } from './styles';
import { useFirebaseContext } from '../../contexts/FirebaseContext';
import Input from '../Input';
import PageTitle from '../PageTitle';
import Button from '../Button';
import { defaultTheme } from '../../styles/theme';

const SignIn = () => {
    const { login, isLogged } = useFirebaseContext();

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
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInTypes>({ resolver: yupResolver(schema) });

    const SignInSubmit: SubmitHandler<SignInTypes> = (data) => {
        toast.promise(login(data), {
            loading: 'Carregando',
            success: 'Logado',
            error: 'Algo deu errado',
        });
        console.log(isLogged);
    };

    return (
        <SignInContainer>
            <PageTitle title='Olá de novo!' salutation='Digite seu email e senha' />
            <SignInForm action='' onSubmit={handleSubmit(SignInSubmit)}>
                <Controller
                    name='email'
                    control={control}
                    render={(props) => (
                        <Input
                            label='Email'
                            inputError={errors.email?.message ?? ''}
                            placeholder='email@exemplo.com'
                            {...props}
                        />
                    )}
                />
                <Controller
                    name='password'
                    control={control}
                    render={(props) => (
                        <Input
                            label='Senha'
                            type='password'
                            inputError={errors.password?.message ?? ''}
                            placeholder='******'
                            {...props}
                        />
                    )}
                />

                <Button
                    background={defaultTheme.palette.primaryLight}
                    color={defaultTheme.palette.primaryDark}
                    name='Entrar'
                    width='100%'
                />
            </SignInForm>
        </SignInContainer>
    );
};
export default SignIn;
