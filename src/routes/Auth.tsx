import { Box, Grid } from '@mui/material';
import bgImg from '../assets/calendar.webp';
import AuthForm from './forms/AuthForm';

const backgroudImgStyles = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: 'cover',
  filter: 'blur(8px)',
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  zIndex: '-1',
};

function Auth() {
  return (
    <>
      <Box sx={backgroudImgStyles} />
      <Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            justifyContent='center'
            alignItems='center'
            sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
          >
            <Grid item xl={4} lg={5} md={6} sm={10} xs={11}>
              <AuthForm />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Auth;
