export default abstract class Problem {
  x1: number
  x2: number
  operator: string

  constructor(x1: number, x2: number, operator: string) {
    this.x1 = x1
    this.x2 = x2
    this.operator = operator
  }

  abstract solve(): number
}
