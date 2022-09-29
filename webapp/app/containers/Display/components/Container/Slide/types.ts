export interface IBaseline {
  top: number
  right: number
  bottom: number
  left: number
  adjust: [number, number]
  adjustType: 'position' | 'size'
}
