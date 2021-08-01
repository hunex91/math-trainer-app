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
import useQuery from 'helpers/hooks/useQuery'
import React from 'react'
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
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  })
)

const ExerciseView = () => {
  const classes = useStyles()
  const history = useHistory()
  const query = useQuery()

  const type = query.get('type')
  const count = query.get('count')

  // TODO: better error handling

  if (!type) {
    return <div>Invalid type</div>
  }

  if (!count) {
    return <div>Invalid count</div>
  }

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

      <Container className={classes.container}>
        <ExerciseController type={type} count={Number(count)} />
      </Container>
    </Box>
  )
}

export default ExerciseView
