/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-named-as-default */
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
    OperationsValues,
    OperationsValuesItems,
} from './styles';
import { toBrita, toBtc, toReal } from '../../core/parsers/NumberParses';

const Operations = () => {
    const { currentUser, britaToday, bitcoinToday } = useDataContext();
    const [britaTotal, setBritaTotal] = useState(0);
    const [bitcoinTotal, setBitcoinTotal] = useState(0);
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

    const transferToReal = ({ valueToSell }: OperationsType) => {
        if (id === 'brita') {
            if (valueToSell > currentUser.wallet.brita) {
                const result = britaToday * valueToSell;
                setBritaTotal(result);
                currentUser.wallet.brita += valueToSell;
                currentUser.wallet.real -= result;
            } else {
                toast.error('Valor incorreto');
            }
        } else if (valueToSell > currentUser.wallet.bitcoin) {
            const result = bitcoinToday * valueToSell;
            setBitcoinTotal(result);
            currentUser.wallet.bitcoin += valueToSell;
            currentUser.wallet.real -= result;
        } else {
            toast.error('Valor incorreto');
        }

        return toast.success('Feito!');
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
                cardCoinValue={currentUser.wallet.brita}
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
                                label='Valor em reais'
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
                </OperationsForm>
            </OperationsButtons>
            <OperationsValues>
                <OperationsValuesItems>Total em Britas {toBrita(britaTotal)}</OperationsValuesItems>
                <OperationsValuesItems>
                    Total em Bitcoin {toBtc(bitcoinTotal)}
                </OperationsValuesItems>
                <OperationsValuesItems>
                    Total em Real {toReal(currentUser.wallet.real)}
                </OperationsValuesItems>
            </OperationsValues>
        </OperationsContainer>
    );
};

export default Operations;
