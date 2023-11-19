export const isEmpty = (value: string | undefined) => value?.trim() === '';
export const isFiveChars = (value: string | undefined) => value?.trim().length !== 5;