interface Job {
  data: object
}

export interface QueueProvider {
  add(data: object): Promise<void>
  process(processFunction: (job: Job) => Promise<void>): void
}
