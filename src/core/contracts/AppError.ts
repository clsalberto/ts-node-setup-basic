export interface AppError extends Error {
  type: string
  statusCode: number
  data?: object
}
