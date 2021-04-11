import React from 'react';
import { Box, Typography } from '@material-ui/core';

const OnboardingConfirmationMessage = (): JSX.Element => {
  return (
    <Box paddingBottom={2} style={{ minHeight: '250px', paddingTop: '20' }}>
      <Typography variant="h4" gutterBottom align="center">
        Message vous y êtes presques
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        Une fois cette étape terminée,
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        vous recevrez un email de confirmation
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        pour finaliser la création de votre compte.
      </Typography>
    </Box>
  );
};

export default OnboardingConfirmationMessage;
