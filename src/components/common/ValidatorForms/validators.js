export const required = value => value ? undefined : 'Это поле обязательно для заполнения';

export const maxLength = (maxLength) => (value) => (value && value.length <= maxLength) ? undefined : `max length is ${maxLength} symbols`;

export const minmaxLength = (min, max) => (value) => {
    return (value && value.length >= min && value.length <= max) ? undefined : `Должно быть от ${min} до ${max} символов`;
};


export const phoneVerification = (value) => {
    let regexp = /^(\+7|8)\s?(9\d{2}|\(9\d{2}\))(\s|-)*(\d{7}|\d{3}-\d{2}-\d{2})$/;
    return (value.match(regexp) ? undefined : `телефон в формате: +7 (900) 000-00-00`);
};


export const emailVerification = (value) => {
    let regexp = /^\w+((-|.)\w+)*@\w+(-\w+)*\.\w{2,}$/;
    return (value.match(regexp) ? undefined : `e-mail в формате: students-yandex@yandex.ru`);
};

