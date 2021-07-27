export const getToday = () => {
    const today = new Date();
    return `'${today.getMonth()}/${today.getDate()}/${today.getFullYear()}'`;
};

export const getYesterday = () => {
    const today = new Date();
    const yesterday = new Date(today);

    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayInDateFormat = new Date(yesterday);
    return `${yesterdayInDateFormat.getMonth()}/${yesterdayInDateFormat.getDate()}/${yesterdayInDateFormat.getFullYear()}`;
};
