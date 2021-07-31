export const getToday = () => {
    const today = new Date();
    return `'${today.getMonth()}/${today.getDate()}/${today.getFullYear()}'`;
};

export const getYesterday = () => {
    const today = new Date();
    const yesterday = new Date(today);

    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayInDateFormat = new Date(yesterday);

    const padLeft = (num: any, length = 2, char = '0') =>
        // eslint-disable-next-line implicit-arrow-linebreak
        (
            Array.from({ length })
                .map(() => char)
                .join('') + num
        ).slice(-length);

    return `'${padLeft(yesterdayInDateFormat.getMonth())}%2F${padLeft(
        yesterdayInDateFormat.getDate(),
    )}%2F${yesterdayInDateFormat.getFullYear()}'`;
};
