import AdditionProblem from './AdditionProblem'
import Problem from './Problem'

export default class ProblemGenerator {
  generateAdditionType1(): Problem {
    const x1 = this.randomNumber(10, 99)
    const x2 = this.randomNumber(10, 99)
    return new AdditionProblem(x1, x2)
  }

  generateAdditionType2(): Problem {
    const x1 = this.randomNumber(10, 499)
    const x2 = this.randomNumber(10, 99)
    return new AdditionProblem(x1, x2)
  }

  generateAdditionType3(): Problem {
    const x1 = this.randomNumber(100, 999)
    const x2 = this.randomNumber(100, 999)
    return new AdditionProblem(x1, x2)
  }

  private randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
  }
}
