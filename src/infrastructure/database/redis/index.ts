import Redis from 'ioredis'

import { configRedis } from '~/infrastructure/config'

const redis = new Redis(configRedis)

export { redis }
