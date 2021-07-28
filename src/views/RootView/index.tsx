import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
} from '@material-ui/core'
import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    paddingTop: '32px',
    paddingBottom: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    maxWidth: 400,
    width: '100%',
  },
  selectType: {
    margin: '16px 16px 0px 16px',
  },
  selectCount: {
    margin: '16px',
  },
  button: {
    marginTop: '16px',
  },
})

const RootView = () => {
  const classes = useStyles()

  const [selectedType, setSelectedType] = useState('type_1')
  const [selectedCount, setSelectedCount] = useState('10')

  const typeList = [
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

  const typeChangeHandler = (event: ChangeEvent<{ value: unknown }>) =>
    setSelectedType(event.target.value as string)
  const countChangeHandler = (event: ChangeEvent<{ value: unknown }>) =>
    setSelectedCount(event.target.value as string)

  return (
    <Container className={classes.root}>
      <Box className={classes.box}>
        <Paper>
          <Box display="flex" flexDirection="column">
            <FormControl className={classes.selectType} variant="outlined">
              <InputLabel id="type-select-label">Type</InputLabel>
              <Select
                labelId="type-select-label"
                label="Type"
                value={selectedType}
                onChange={typeChangeHandler}
              >
                {typeList.map((option) => (
                  <MenuItem key={option.label} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.selectCount} variant="outlined">
              <InputLabel id="count-select-label">Count</InputLabel>
              <Select
                labelId="count-select-label"
                label="Count"
                value={selectedCount}
                onChange={countChangeHandler}
              >
                {countList.map((option) => (
                  <MenuItem key={option.label} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Paper>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          fullWidth
          component={Link}
          to={`/exercise?type=${selectedType}&count=${selectedCount}`}
        >
          Start
        </Button>
      </Box>
    </Container>
  )
}

export default RootView
