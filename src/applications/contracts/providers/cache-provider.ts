export interface CacheProvider<T> {
  set(key: string, value: T): Promise<void>
  get(key: string): Promise<T>
}
