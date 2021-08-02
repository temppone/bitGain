/* eslint-disable react/jsx-props-no-spreading */
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { ptShort } from 'yup-locale-pt';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Head from '../../components/Head';
import Input from '../../components/Input';
import { useDataContext } from '../../contexts/DataContext';
import { defaultTheme } from '../../styles/theme';
import {
    OperationsContainer,
    OperationsHeader,
    OperationsTitle,
    OperationsForm,
    OperationsButtons,
} from './styles';

const Operations = () => {
    const { currentUser, britaToday } = useDataContext();
    const [transferedValue, setTransferedValue] = useState(0);
    const { id } = useParams<{ id: string }>();

    type OperationsType = {
        valueToSell: number;
    };

    yup.setLocale(ptShort);

    const schema: yup.SchemaOf<OperationsType> = yup.object().shape({
        valueToSell: yup.number().required(),
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<OperationsType>({ resolver: yupResolver(schema) });

    const transferToReal = (values: any) => {
        if (values < currentUser.wallet.brita) {
            setTransferedValue(Number(+values.valueToSell * britaToday));
            const userWallet = currentUser.wallet.brita - transferedValue;
            currentUser.wallet.brita = userWallet;
            toast.success(`Valor vendido ${transferedValue}`);
        } else {
            toast.error('Valor incorreto');
        }
        return values;
    };

    return (
        <OperationsContainer>
            <Head title='Operações' description='Página de operações da BitGain' />
            <OperationsHeader>
                <OperationsTitle>Operações</OperationsTitle>
            </OperationsHeader>
            <Card
                background={defaultTheme.palette.gradientSecundaryBlue}
                fieldName='BitCoin'
                cardCoinValue={currentUser.wallet.bitcoin}
                id={id}
            />

            <OperationsButtons>
                <Button
                    background='transparent'
                    color={defaultTheme.palette.primaryLight}
                    name={id === 'brita' ? 'Trocar por bitcoin' : 'Trocar por brita'}
                    width='auto'
                />
                <OperationsForm onSubmit={handleSubmit(transferToReal)}>
                    <Controller
                        name='valueToSell'
                        control={control}
                        render={(props) => (
                            <Input
                                label='Valor'
                                type='number'
                                inputError={errors.valueToSell?.message ?? ''}
                                placeholder='0000'
                                {...props}
                            />
                        )}
                    />
                    <Button
                        background='transparent'
                        color={defaultTheme.palette.primaryLight}
                        name='Vender'
                        width='auto'
                    />
                    <Button
                        background='transparent'
                        color={defaultTheme.palette.primaryLight}
                        name='Comprar'
                        width='autho'
                    />
                </OperationsForm>
            </OperationsButtons>
        </OperationsContainer>
    );
};

export default Operations;
