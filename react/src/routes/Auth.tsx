import { Box, Button, Paper, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import bgImg from '../assets/background.jpg';
import { useForm, SubmitHandler } from 'react-hook-form';
interface FormData {
  email: string;
  password: string;
  username?: string;
  passwordconfirm?: string;
}
function Auth() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const [isSignup, setIsSinup] = useState(false);
  const pageStyles = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' };

  function changeToSignUp() {
    setIsSinup(true);
  }
  function changeToLogIn() {
    setIsSinup(false);
  }

  const onSubmitFn: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <Box sx={pageStyles}>
      <Box sx={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', filter: 'blur(8px)', height: '100vh', width: '100vw', position: 'fixed', zIndex: '-1' }}></Box>
      <Paper sx={{ width: '50%', boxShadow: '5px 5px 14px 0px rgba(0,0,0,0.59)', padding: '24px', borderRadius: '10px' }}>
        <form onSubmit={handleSubmit(onSubmitFn)}>
          <Stack spacing={2}>
            {isSignup ? (
              <TextField label={errors.username ? 'Username is required' : 'Username'} variant='outlined' {...register('username', { required: isSignup })} error={errors.username ? true : false} />
            ) : null}
            <TextField label={errors.email ? 'Email is required' : 'Email'} variant='outlined' {...register('email', { required: true })} error={errors.email ? true : false} />
            <TextField label={errors.password ? 'Password is required' : 'Password'} variant='outlined' {...register('password', { required: true })} error={errors.password ? true : false} />
            {isSignup ? (
              <TextField
                label={errors.passwordconfirm ? 'Password confirm is required' : 'Password confirm'}
                variant='outlined'
                {...register('passwordconfirm', { required: isSignup })}
                error={errors.passwordconfirm ? true : false}
              />
            ) : null}
            <Button type='submit' variant='contained'>
              Submit
            </Button>
            {!isSignup ? (
              <Button onClick={changeToSignUp} variant='text'>
                Don't have an account? Signup here
              </Button>
            ) : null}
            {isSignup ? (
              <Button onClick={changeToLogIn} variant='text'>
                Have an account? Login here
              </Button>
            ) : null}
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}

export default Auth;
