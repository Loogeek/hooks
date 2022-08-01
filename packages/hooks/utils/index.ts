export const isFunction = (value: unknown): value is Function => typeof value === 'function';

export const isDevEnv = process.env.NODE_ENV === 'development';

export const isObject = (value: unknown): value is Object =>
  typeof value === 'object' && value !== null;
