import Bull, { Queue, QueueOptions, ProcessPromiseFunction } from 'bull'

import { QueueProvider } from '~/applications/contracts'

export class BullQueueProvider implements QueueProvider {
  private queue: Queue

  constructor(key: string, queueConfig: QueueOptions) {
    this.queue = new Bull(key, queueConfig)
  }

  async add(data: object): Promise<void> {
    await this.queue.add(data)
  }

  process(processFunction: ProcessPromiseFunction<object>): void {
    this.queue.process(150, processFunction)
  }
}
