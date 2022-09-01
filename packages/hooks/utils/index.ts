export const isFunction = (value: unknown): value is Function => typeof value === 'function';

export const isObject = (value: unknown): value is Object =>
  typeof value === 'object' && value !== null;

export const isUndef = (value: unknown): value is undefined => typeof value === 'undefined';

export const isNumber = (value: unknown): value is number => typeof value === 'number';
