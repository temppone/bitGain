const padLeft = (num: any, length = 2, char = '0') =>
    // eslint-disable-next-line implicit-arrow-linebreak
    (
        Array.from({ length })
            .map(() => char)
            .join('') + num
    ).slice(-length);

export const getToday = () => {
    const today = new Date();

    return `'${padLeft(today.getMonth())}%2F${padLeft(today.getDate())}%2F${today.getFullYear()}'`;
};

export const getYesterday = () => {
    const today = new Date();
    const yesterday = new Date(today);

    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayInDateFormat = new Date(yesterday);

    return `'${padLeft(yesterdayInDateFormat.getMonth())}%2F${padLeft(
        yesterdayInDateFormat.getDate(),
    )}%2F${yesterdayInDateFormat.getFullYear()}'`;
};
