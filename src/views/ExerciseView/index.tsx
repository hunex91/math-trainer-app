import {
  AppBar,
  Box,
  Container,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ReplayIcon from '@material-ui/icons/Replay'
import ExerciseController from 'components/ExerciseController'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    title: {
      flexGrow: 1,
    },
    backButton: {
      marginRight: theme.spacing(2),
    },
    restartButton: {
      marginLeft: theme.spacing(2),
    },
  })
)

const ExerciseView = () => {
  const classes = useStyles()
  const history = useHistory()

  const [type, setType] = useState('type_1')
  const [count, setCount] = useState(10)

  const backClickHandler = () => {
    history.push('/')
  }

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.backButton}
            color="inherit"
            aria-label="back"
            onClick={backClickHandler}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            Exercise
          </Typography>
          <IconButton
            edge="end"
            className={classes.restartButton}
            color="inherit"
            aria-label="restart"
          >
            <ReplayIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container>
        <ExerciseController />
      </Container>
    </Box>
  )
}

export default ExerciseView
