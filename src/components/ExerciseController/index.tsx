import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Paper,
  Theme,
} from '@material-ui/core'
import ProblemElement from 'components/ProblemElement'
import Problem from 'domain/models/Problem'
import ProblemGenerator from 'domain/models/ProblemGenerator'
import React, { useEffect, useState } from 'react'

export interface ExerciseControllerProps {
  type: string
  count: number
}

const problemGenerator = new ProblemGenerator()

const generateProblem = (type: string) => {
  switch (type) {
    case 'type_1':
      return problemGenerator.generateAdditionType1()
    case 'type_2':
      return problemGenerator.generateAdditionType2()
    case 'type_3':
      return problemGenerator.generateAdditionType3()
    default:
      throw new Error(`Invalid type: ${type}`)
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    button: {
      marginTop: theme.spacing(2),
    },
  })
)

const ExerciseController = ({ type, count }: ExerciseControllerProps) => {
  const classes = useStyles()
  const [step, setStep] = useState(0)
  const [problem, setProblem] = useState<Problem>(generateProblem(type))

  useEffect(() => {
    setProblem(generateProblem(type))
  }, [type, step])

  const nextClickHandler = () => setStep(step + 1)

  return (
    <Box className={classes.root}>
      <Paper>
        <ProblemElement problem={problem} />
      </Paper>

      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        fullWidth
        onClick={nextClickHandler}
      >
        Next
      </Button>

      {/* <Paper>
        <Keyboard />
      </Paper> */}
    </Box>
  )
}

export default ExerciseController
