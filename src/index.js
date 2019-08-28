import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import { CheckCircle, Warning, Error } from '@material-ui/icons';
import styles from './styles.js';
import { withStyles } from '@material-ui/styles';

const MaterialAlert = (props) => {
  const { text, type, classes } = props;

  let alertClassName = `material-alert ${classes.alertContainer}`;
  switch (type) {
    case 'success':
      alertClassName += ` ${classes.success}`;
      break;
    case 'warning':
      alertClassName += ` ${classes.warning}`;
      break;
    case 'error':
      alertClassName += ` ${classes.error}`;
      break;
    default:
  }

  return (
    <Paper className={alertClassName} elevation={6}>
      {type === 'success' && <CheckCircle className='success-icon' />}
      {type === 'warning' && <Warning />}
      {type === 'error' && <Error />}

      <span className={classes.text}>{text}</span>
    </Paper>
  );
};

MaterialAlert.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  classes: PropTypes.any
};

MaterialAlert.defaultProps = {
  text: '',
  type: '',
  classes: {}
};

export default withStyles(styles)(MaterialAlert);
