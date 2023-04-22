import React from 'react';
import { Box, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const daySyles = { width: '100%', height: '100%' };

function Day() {
  return (
    <Box sx={daySyles}>
      {/* <Button>
        <CheckIcon />
      </Button>
      <Button>
        <ClearIcon />
      </Button> */}
    </Box>
  );
}

export default Day;
