import { NotFoundContainer, NotFoundMessage, NotFoundTitle } from './styles';

const NotFound = () => (
    <NotFoundContainer>
        <NotFoundTitle>Erro 404</NotFoundTitle>
        <NotFoundMessage>Página não encontrada :(</NotFoundMessage>
    </NotFoundContainer>
);

export default NotFound;
