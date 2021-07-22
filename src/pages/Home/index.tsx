import SignUp from '../../components/SignUp';
import { HomeContainer } from './styles';
import { ReactComponent as HomeSvg } from './img/home.svg';

const Home = () => (
    <HomeContainer>
        <HomeSvg width='70%' />
        <SignUp />
    </HomeContainer>
);
export default Home;
