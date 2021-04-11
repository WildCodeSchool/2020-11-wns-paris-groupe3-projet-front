import React from 'react';
import { Grid } from '@material-ui/core';

import OnboardingFormCard from './components/OnboardingFormCard';

import { LogoHome } from '../../styles/logo';
import { GridOnboarding, ButtonChangePage } from '../../styles/onboarding';
import logo from '../../assets/logoEH.svg';

const Onboarding = (): JSX.Element => {
  return (
    <GridOnboarding>
      <Grid container direction="row" justify="space-between">
        <Grid item>
          <LogoHome src={logo} alt="Logo" />
        </Grid>
        <Grid item>
          <ButtonChangePage>Déjà inscrit?</ButtonChangePage>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: '20px' }}>
        <OnboardingFormCard />
      </Grid>
    </GridOnboarding>
  );
};

export default Onboarding;
