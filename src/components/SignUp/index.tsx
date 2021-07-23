import { yupResolver } from '@hookform/resolvers/yup';
import { ptShort } from 'yup-locale-pt';
import * as yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useFirebaseContext } from '../../contexts/FirebaseContext';
import Input from '../Input';
import { SignUpContainer, SignUpForm } from './styles';
import PageTitle from '../PageTitle';
import Button from '../Button';

const SignUp = () => {
    const { createUser } = useFirebaseContext();

    type CreateUserType = {
        email: string;
        password: string;
        passwordConfirm: string;
    };

    yup.setLocale(ptShort);

    const schema: yup.SchemaOf<CreateUserType> = yup.object().shape({
        email: yup.string().default('').email().required(),
        password: yup.string().default('').min(6).required(),
        passwordConfirm: yup
            .string()
            .default('')
            .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais')
            .required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateUserType>({ resolver: yupResolver(schema) });

    const signUpSubmit: SubmitHandler<CreateUserType> = (data) => {
        createUser(data);
    };

    return (
        <SignUpContainer>
            <PageTitle title='Cadastre-se' salutation='Preencha os campos' />

            <SignUpForm action='' inputError onSubmit={handleSubmit(signUpSubmit)}>
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
                <Input
                    label='Confirmar senha'
                    name='passwordCofirm'
                    type='password'
                    required
                    register={register}
                    inputError={errors?.passwordConfirm?.message}
                />
                <Button name='Cadastrar' width='100%' />
            </SignUpForm>
        </SignUpContainer>
    );
};

export default SignUp;
