const padLeft = (num: any, length = 2, char = '0') =>
    // eslint-disable-next-line implicit-arrow-linebreak
    (
        Array.from({ length })
            .map(() => char)
            .join('') + num
    ).slice(-length);

export const getToday = () => {
    const today = new Date();

    return `'${padLeft(today.getMonth())}-${padLeft(today.getDate())}-${today.getFullYear()}'`;
};

export const getYesterday = () => {
    const today = new Date();
    const yesterday = new Date(today);

    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayInDateFormat = new Date(yesterday);

    const formatedMonth = padLeft(yesterdayInDateFormat.getMonth());
    const formatedDate = padLeft(yesterdayInDateFormat.getDate());
    const formatedFullYear = yesterdayInDateFormat.getFullYear();

    return `'${formatedMonth}-${formatedDate}-${formatedFullYear}'`;
};
