/* eslint-disable react/require-default-props */
// import TrendingUpIcon from '@material-ui/icons/TrendingUp';
// import { defaultTheme } from '../../styles/theme';
import {
    LinkCard,
    CardContainer,
    CardBox,
    CardSecundaryBox,
    CardTitle,
    CardValue,
    CardSecundaryValue,
    // CardPercent,
} from './styles';

type CardTypes = {
    fieldName?: string;
    cardCoinValue: string;
    background: string;
    secundaryField?: {
        secundaryFieldName?: string;
        secundaryFieldCoinValue?: string;
    };
    id?: string;
    // britaTodayValue?: number;
    // britaYesterdayValue?: number;
};

const Card = ({
    fieldName,
    cardCoinValue,
    background,
    secundaryField,
    id = '/',
}: // britaTodayValue,
// britaYesterdayValue,
CardTypes) => (
    <LinkCard to={id}>
        <CardContainer background={background}>
            <CardBox>
                <CardTitle>{fieldName}</CardTitle>
                <CardValue>{`${cardCoinValue}`}</CardValue>
            </CardBox>
            <CardSecundaryBox>
                <CardBox>
                    <CardTitle>{secundaryField?.secundaryFieldName}</CardTitle>
                    <CardSecundaryValue>
                        {secundaryField?.secundaryFieldCoinValue}
                    </CardSecundaryValue>
                </CardBox>
                {/* <CardPercent>
                    +14%
                    <TrendingUpIcon
                        htmlColor={
                            britaTodayValue > britaYesterdayValue
                                ? defaultTheme.palette.success
                                : defaultTheme.palette.warning
                        }
                    />
                </CardPercent> */}
            </CardSecundaryBox>
        </CardContainer>
    </LinkCard>
);

export default Card;
