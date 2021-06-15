import Problem from '../domain/models/Problem'

export interface ProblemElementProps {
  problem: Problem
}

const ProblemElement = ({ problem }: ProblemElementProps) => {
  return (
    <div className="ProblemElement">
      <div className="ProblemElement__Values">
        <div className="ProblemElement__X1">{problem.x1}</div>
        <div className="ProblemElement__X2">{problem.x2}</div>
      </div>
      <div className="ProblemElement__Operator">{problem.operator}</div>
    </div>
  )
}

export default ProblemElement
