import { Entity } from './entity'

export interface ImageProps {
  name: string
  path: string
  size: number
}

export class Image extends Entity<ImageProps> {
  private constructor(props: ImageProps, id?: string) {
    super(props, id)
  }

  static create(props: ImageProps, id?: string) {
    const image = new Image(props, id)

    return image
  }
}
