import Card from '../../components/Card';
import Head from '../../components/Head';
import { defaultTheme } from '../../styles/theme';
import { OperationsContainer } from './styles';

const Operations = () => {
    const bitcoinPrice = '0.000037373 BTC';

    return (
        <OperationsContainer>
            <Head title='Operações' description='Página de operações da BitGain' />
            <Card
                background={defaultTheme.palette.gradientSecundaryBlue}
                fieldName='BitCoin'
                cardCoinValue={bitcoinPrice}
            />
        </OperationsContainer>
    );
};

export default Operations;
