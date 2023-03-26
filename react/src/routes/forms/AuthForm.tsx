import { Box, Button, Paper, Stack, Grid, TextField, FormControlLabel, Checkbox } from '@mui/material';
import React, { useState } from 'react';
import bgImg from '../assets/background.jpg';
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
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const [isSignup, setIsSinup] = useState(false);
  function changeToSignUp() {
    setIsSinup(true);
  }
  function changeToLogIn() {
    setIsSinup(false);
  }

  const onSubmitFn: SubmitHandler<FormData> = (data) => {
    debugger;
    if (isSignup) {
      axios({ url: '/auth/signup', method: 'post', data }).then((res) => {
        console.log(res);
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
            <TextField fullWidth={true} label={errors.email ? 'Email is required' : 'Email'} variant='outlined' {...register('email', { required: true })} error={errors.email ? true : false} />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <TextField
              fullWidth={true}
              label={errors.password ? 'Password is required' : 'Password'}
              variant='outlined'
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
                {...register('passwordconfirm', { required: isSignup })}
                error={errors.passwordconfirm ? true : false}
              />
            ) : null}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Button fullWidth={true} type='submit' variant='contained'>
              Submit
            </Button>
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
            <FormControlLabel control={<Checkbox />} label='Keep me logged in' />
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default AuthForm;
