export const PORT: number = (process.env.PORT as number | undefined) || 2000
export const REDIS_PREFIX = 'sess:'
export const USER_SESSION_ID_PREFIX = 'userSids:'
export const FORGOT_PASSWORD_PREFIX = 'forgotPassword:'
export const INVALID_CREDENTIALS = 'Invalid credentials '
