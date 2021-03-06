/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { useFirebaseContext } from '../../contexts/FirebaseContext';
import { defaultTheme } from '../../styles/theme';
import Button from '../Button';
import Input from '../Input';
import PageTitle from '../PageTitle';
import { SignUpContainer, SignUpForm } from './styles';

const SignUp = () => {
    type CreateUserType = {
        email: string;
        password: string;
        passwordConfirm: string;
    };

    type TransltedErrorsType = {
        [key: string]: string;
    };

    const { createUser, isLogged } = useFirebaseContext();
    const [disabledButton, setDisabledButton] = useState(false);

    const translatedErrors: TransltedErrorsType = {
        'auth/email-already-in-use': 'E-mail já cadastrado',
    };

    const schema: yup.SchemaOf<CreateUserType> = yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
        passwordConfirm: yup
            .string()
            .required()
            .oneOf([yup.ref('password'), null], 'Senhas precisam ser iguais'),
    });

    const { control, handleSubmit, setError, errors } = useForm<CreateUserType>({
        resolver: yupResolver(schema),
    });

    const signUpSubmit: SubmitHandler<CreateUserType> = (data) => {
        setDisabledButton(true);
        toast.promise(createUser(data), {
            loading: 'Carregando',
            success: 'Logado',
            error: (err) => {
                setDisabledButton(false);
                setError('email', {
                    type: 'manual',
                    message: translatedErrors[err.code] || 'Erro ao logar',
                });

                return 'Erro ao logar';
            },
        });
    };

    return (
        <SignUpContainer>
            <PageTitle title='Cadastre-se' salutation='Preencha os campos' />
            {isLogged && <Redirect to='/dashboard' />}
            <SignUpForm action='' onSubmit={handleSubmit(signUpSubmit)}>
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
                <Controller
                    name='passwordConfirm'
                    control={control}
                    render={(props) => (
                        <Input
                            label='Confirmar senha'
                            type='password'
                            inputError={errors.passwordConfirm?.message ?? ''}
                            placeholder='******'
                            {...props}
                        />
                    )}
                />

                <Button
                    background={defaultTheme.palette.primaryLight}
                    color={defaultTheme.palette.primaryDark}
                    name='Cadastrar'
                    width='100%'
                    disabled={disabledButton}
                />
            </SignUpForm>
        </SignUpContainer>
    );
};

export default SignUp;
