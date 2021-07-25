import { Link } from 'react-router-dom';
import { GitHub, LinkedIn } from '@material-ui/icons';
import { FooterContainer, FooterItem } from './styles';

const Footer = () => (
    <FooterContainer>
        <FooterItem>BitGain 2021</FooterItem>
        <FooterItem>
            <Link target='_blank' to={{ pathname: 'https://www.linkedin.com/in/temppone/' }}>
                <LinkedIn />
            </Link>
            <Link target='_blank' to={{ pathname: 'https://github.com/temppone' }}>
                <GitHub />
            </Link>
        </FooterItem>
    </FooterContainer>
);

export default Footer;
