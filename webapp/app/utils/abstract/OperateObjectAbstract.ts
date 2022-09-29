import { IValue } from 'utils/types'

export abstract class OperateObjectAbstract {

  public getTarget<T> (target: T): T {
    return target
  }

  public getTargetPropsByProperty <T, U extends keyof T> (target: T, property: U): IValue<T, U> {
    return target[property]
  }

  public setTargetPropsByProperty<T, K extends keyof T, U extends IValue<T, K>> (target: T, property: K, value: U): T {
    target[property] = value
    return target
  }

  public setTargetProps<T> (target: T, source: Partial<T>): T {
    try {
      Object.keys(target).forEach((property: keyof T) => {
        this.setTargetPropsByProperty(target, property, source[property])
      })
    } catch (error) {
      throw new Error(error)
    }
    return target
  }

  public static getPropsByPropery<T, U extends keyof T> (target: T, property: U): IValue<T, U> {
    return target[property]
  }

}






