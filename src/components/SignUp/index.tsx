/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useFirebaseContext } from '../../contexts/FirebaseContext';
import Button from '../Button';
import Input from '../Input';
import PageTitle from '../PageTitle';
import { SignUpContainer, SignUpForm } from './styles';

const SignUp = () => {
    const { createUser } = useFirebaseContext();

    type CreateUserType = {
        email: string;
        password: string;
        passwordConfirm: string;
    };

    const schema: yup.SchemaOf<CreateUserType> = yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
        passwordConfirm: yup
            .string()
            .required()
            .oneOf([yup.ref('password'), null], 'Senhas precisam ser iguais'),
    });

    const { control, handleSubmit, errors } = useForm<CreateUserType>({
        resolver: yupResolver(schema),
    });

    const signUpSubmit: SubmitHandler<CreateUserType> = (data) => {
        createUser(data);
    };

    return (
        <SignUpContainer>
            <PageTitle title='Cadastre-se' salutation='Preencha os campos' />

            <SignUpForm action='' onSubmit={handleSubmit(signUpSubmit)}>
                <Controller
                    name='email'
                    control={control}
                    render={(props) => (
                        <Input label='Email' inputError={errors.email?.message ?? ''} {...props} />
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
                            {...props}
                        />
                    )}
                />

                <Button name='Cadastrar' width='100%' />
            </SignUpForm>
        </SignUpContainer>
    );
};

export default SignUp;
