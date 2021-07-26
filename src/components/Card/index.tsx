/* eslint-disable react/require-default-props */
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

type CardTypes = {
    fieldName?: string;
    cardCoinValue: string | void;
    background: string;
    secundaryField?: {
        secundaryFieldName?: string;
        secundaryFieldCoinValue?: string;
    };
};

const Card = ({ fieldName, cardCoinValue, background, secundaryField }: CardTypes) => (
    <>
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
                <CardPercent>
                    +14%
                    <TrendingUpIcon htmlColor={defaultTheme.palette.success} />
                </CardPercent>
            </CardSecundaryBox>
        </CardContainer>
    </>
);

export default Card;
