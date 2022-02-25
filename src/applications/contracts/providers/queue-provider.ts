interface IJob {
  data: object
}

export interface IQueueProvider {
  add(data: object): Promise<void>
  process(processFunction: (job: IJob) => Promise<void>): void
}
