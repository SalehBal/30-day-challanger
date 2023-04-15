import { Button, Paper, Grid, TextField, FormControlLabel, Checkbox, LinearProgress } from '@mui/material';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface FormData {
  email: string;
  password: string;
  userName?: string;
  passwordconfirm?: string;
}

function AuthForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [isSignup, setIsSinup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  function changeToSignUp() {
    reset();
    setIsSinup(true);
  }
  function changeToLogIn() {
    reset();
    setIsSinup(false);
  }

  const onSubmitFn: SubmitHandler<FormData> = (data) => {
    const payload = { ...data, keepUserLoggedIn: isChecked };
    setIsLoading(true);
    if (isSignup) {
      if (data.password === data.passwordconfirm) {
        axios
          .post('http://localhost:2002/auth/signup', payload)
          .then((res) => {
            setIsLoading(false);
          })
          .catch(() => {
            setIsLoading(false);
          });
      } else {
        setIsLoading(false);
        alert('Password is not correct! Please try again!');
      }
    } else {
      axios
        .post('http://localhost:2002/auth/login', payload)
        .then((res) => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <Paper sx={{ boxShadow: '5px 5px 14px 0px rgba(0,0,0,0.59)', padding: '24px', borderRadius: '10px' }}>
      <form onSubmit={handleSubmit(onSubmitFn)}>
        <Grid container spacing={2}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {isSignup ? (
              <TextField
                fullWidth={true}
                label={errors.userName ? 'Username is required' : 'Username'}
                variant='outlined'
                {...register('userName', { required: isSignup })}
                error={errors.userName ? true : false}
              />
            ) : null}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <TextField
              fullWidth={true}
              label={errors.email ? 'Email is required' : 'Email'}
              type='email'
              variant='outlined'
              {...register('email', { required: true })}
              error={errors.email ? true : false}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <TextField
              fullWidth={true}
              label={errors.password ? 'Password is required' : 'Password'}
              variant='outlined'
              type='password'
              {...register('password', { required: true })}
              error={errors.password ? true : false}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {isSignup ? (
              <TextField
                fullWidth={true}
                label={errors.passwordconfirm ? 'Password confirm is required' : 'Password confirm'}
                variant='outlined'
                type='password'
                {...register('passwordconfirm', { required: isSignup })}
                error={errors.passwordconfirm ? true : false}
              />
            ) : null}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {!isLoading ? (
              <Button fullWidth={true} type='submit' variant='contained'>
                Submit
              </Button>
            ) : null}
            {isLoading ? <LinearProgress /> : null}
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            {!isSignup ? (
              <Button fullWidth={true} onClick={changeToSignUp} variant='text'>
                Don't have an account? Signup here
              </Button>
            ) : null}
            {isSignup ? (
              <Button fullWidth={true} onClick={changeToLogIn} variant='text'>
                Have an account? Login here
              </Button>
            ) : null}
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <FormControlLabel
              control={<Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} />}
              label='Keep me logged in'
            />
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default AuthForm;
