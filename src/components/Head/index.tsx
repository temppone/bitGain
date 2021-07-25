import { useEffect } from 'react';

type HeadProps = {
    title: any;
    description: any;
};

const Head = ({ title = '', description = '' }: HeadProps) => {
    useEffect(() => {
        document.title = `${title} | Useeers`;
        document
            ?.querySelector("meta[name='description']")
            ?.setAttribute('content', description || '');
    });
    return <></>;
};

export default Head;
