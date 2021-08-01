import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import Head from '../../components/Head';
import { useDataContext } from '../../contexts/DataContext';
import { defaultTheme } from '../../styles/theme';
import { OperationsContainer } from './styles';

const Operations = () => {
    const { currentUser } = useDataContext();
    const { id } = useParams<{ id: string }>();
    console.log(id);

    return (
        <OperationsContainer>
            <Head title='Operações' description='Página de operações da BitGain' />
            <Card
                background={defaultTheme.palette.gradientSecundaryBlue}
                fieldName='BitCoin'
                cardCoinValue={currentUser.wallet.bitcoin}
            />
        </OperationsContainer>
    );
};

export default Operations;
