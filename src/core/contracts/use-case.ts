export interface IUseCase<Req, Res> {
  execute(data?: Req): Promise<Res | void>
}
