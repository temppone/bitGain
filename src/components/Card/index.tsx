/* eslint-disable react/require-default-props */
import { Link } from 'react-router-dom';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { defaultTheme } from '../../styles/theme';
import {
    CardContainer,
    CardBox,
    CardSecundaryBox,
    CardTitle,
    CardValue,
    CardSecundaryValue,
    CardPercent,
} from './styles';
import { useDataContext } from '../../contexts/DataContext';

const Card = () => {
    const { currentUser } = useDataContext();

    return (
        <>
            <CardContainer background={defaultTheme.palette.secundaryContrast}>
                <CardBox>
                    <CardTitle>Total</CardTitle>
                    <CardValue>{`R$ ${currentUser.wallet.real}`}</CardValue>
                </CardBox>
                <CardSecundaryBox>
                    <CardBox>
                        <CardTitle>Este mês</CardTitle>
                        <CardSecundaryValue>R$ 23.432,12</CardSecundaryValue>
                    </CardBox>
                    <CardPercent>
                        +14%
                        <TrendingUpIcon htmlColor={defaultTheme.palette.success} />
                    </CardPercent>
                </CardSecundaryBox>
            </CardContainer>

            <CardContainer background={defaultTheme.palette.secundaryDark}>
                <Link to='/bitcoin'>
                    <CardSecundaryBox>
                        <CardBox>
                            <CardTitle>Bitcoin</CardTitle>
                            <CardValue>BTC 1.679,65</CardValue>
                        </CardBox>
                        <CardPercent>
                            +26%
                            <TrendingUpIcon htmlColor={defaultTheme.palette.success} />
                        </CardPercent>
                    </CardSecundaryBox>
                </Link>
            </CardContainer>

            <CardContainer background={defaultTheme.palette.secundaryDark}>
                <Link to='/brita'>
                    <CardSecundaryBox>
                        <CardBox>
                            <CardTitle>Brita</CardTitle>
                            <CardValue>BRI 34.679,65</CardValue>
                        </CardBox>
                        <CardPercent>
                            +32%
                            <TrendingUpIcon htmlColor={defaultTheme.palette.success} />
                        </CardPercent>
                    </CardSecundaryBox>
                </Link>
            </CardContainer>
        </>
    );
};

export default Card;
