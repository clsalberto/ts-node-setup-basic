export interface IAppError extends Error {
  code: number
  metadata?: object
}
