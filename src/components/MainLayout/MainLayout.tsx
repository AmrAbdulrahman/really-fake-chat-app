import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    padding: theme.spacing(2),
  },
}));

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};
