import { PageTitleContainer, PageTitleName, PageTitleSalutation } from './styles';

type PageTitleType = {
    title: string;
    salutation: string;
};

const PageTitle = ({ title, salutation }: PageTitleType) => (
    <PageTitleContainer>
        <PageTitleName>{title}</PageTitleName>
        <PageTitleSalutation>{salutation}</PageTitleSalutation>
    </PageTitleContainer>
);

export default PageTitle;
