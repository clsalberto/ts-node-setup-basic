export interface UseCase<Req, Res> {
  execute(data?: Req): Promise<Res | void>
}
