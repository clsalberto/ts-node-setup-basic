export interface IAppError extends Error {
  type: string
  status: number
  metadata?: object
}
