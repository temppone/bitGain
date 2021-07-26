import Head from '../../components/Head';
import { OperationsContainer } from './styles';

const Operations = () => {
    const a = 'item';

    return (
        <OperationsContainer>
            <Head title='Operações' description='Operações da BitGain' />
            {a}
        </OperationsContainer>
    );
};

export default Operations;
