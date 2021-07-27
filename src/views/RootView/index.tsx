import {
  Box,
  Button,
  Container,
  makeStyles,
  MenuItem,
  Paper,
  TextField,
} from '@material-ui/core'
import React, { ChangeEvent, useState } from 'react'

const useStyles = makeStyles({
  root: {
    paddingTop: '32px',
  },
  select1: {
    margin: '16px 16px 0px 16px',
  },
  select2: {
    margin: '16px',
  },
  button: {
    marginTop: '16px',
  },
})

const RootView = () => {
  const classes = useStyles()

  const [selectedProblem, setSelectedProblem] = useState('type_1')
  const [selectedCount, setSelectedCount] = useState('10')

  const problemList = [
    {
      label: 'Addition type 1',
      value: 'type_1',
    },
    {
      label: 'Addition type 2',
      value: 'type_2',
    },
    {
      label: 'Addition type 3',
      value: 'type_3',
    },
  ]

  const countList = [
    {
      label: '5',
      value: 5,
    },
    {
      label: '10',
      value: 10,
    },
    {
      label: '20',
      value: 20,
    },
    {
      label: '40',
      value: 40,
    },
  ]

  const problemChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setSelectedProblem(event.target.value)
  const countChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setSelectedCount(event.target.value)

  return (
    <Container className={classes.root}>
      <Box>
        <Paper>
          <Box display="flex" flexDirection="column">
            <TextField
              className={classes.select1}
              select
              label="Problem"
              value={selectedProblem}
              onChange={problemChangeHandler}
            >
              {problemList.map((option) => (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.select2}
              select
              label="Count"
              value={selectedCount}
              onChange={countChangeHandler}
            >
              {countList.map((option) => (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Paper>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          fullWidth
        >
          Start
        </Button>
      </Box>
    </Container>
  )
}

export default RootView
