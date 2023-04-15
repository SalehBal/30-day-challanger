import { Button, Paper, Grid, TextField, FormControlLabel, Checkbox, LinearProgress } from '@mui/material';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import SimpleInput from '../../Components/SimpleInput';

interface FormData {
  email: string;
  password: string;
  userName?: string;
  passwordconfirm?: string;
}

function AuthForm() {
  const { handleSubmit, reset, control } = useForm<FormData>({
    defaultValues: { email: '', password: '', userName: '', passwordconfirm: '' },
  });

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
    debugger;
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
            {isSignup ? <SimpleInput control={control} label='Username' req={true} field={'userName'} /> : null}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <SimpleInput control={control} label='Email' type='email' req={true} field={'email'} />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <SimpleInput control={control} label='Password' type='password' req={true} field={'password'} />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {isSignup ? (
              <SimpleInput
                control={control}
                label='Password confirm'
                type='password'
                req={true}
                field={'passwordconfirm'}
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
