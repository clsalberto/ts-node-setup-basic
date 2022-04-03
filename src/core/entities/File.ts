import { Entity } from './Entity'

export interface FileProps {
  name: string
  path: string
  size: number
}

export class File extends Entity<FileProps> {
  private constructor(props: FileProps, id?: string) {
    super(props, id)
  }

  static create(props: FileProps, id?: string) {
    return new File(props, id)
  }
}
