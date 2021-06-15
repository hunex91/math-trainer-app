import Problem from './Problem'

export default class AdditionProblem extends Problem {
  constructor(x1: number, x2: number) {
    super(x1, x2, '+')
  }

  solve(): number {
    return this.x1 + this.x2
  }
}
