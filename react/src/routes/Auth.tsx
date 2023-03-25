import { Box, Button, Paper, Stack, Grid, TextField, FormControlLabel, Checkbox } from '@mui/material';
import bgImg from '../assets/background2.jpg';
import AuthForm from './forms/AuthForm';

const backgroudImgStyles = { backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', filter: 'blur(8px)', height: '100vh', width: '100vw', position: 'fixed', zIndex: '-1' };

function Auth() {
  return (
    <>
      <Box sx={backgroudImgStyles}></Box>
      <Grid>
        <Grid item xs={12}>
          <Grid item xs={12} container justifyContent='center' alignItems='center' sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}>
            <Grid item xl={8} lg={10} md={10} sm={11} xs={11.5}>
              <AuthForm />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Auth;
