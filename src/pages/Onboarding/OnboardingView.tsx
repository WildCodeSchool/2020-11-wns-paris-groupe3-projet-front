import React from 'react';
import { Grid } from '@material-ui/core';

import OnboardingCard from './components/OnboardingCard';

import { LogoHome } from '../../styles/logo';
import { GridOnboarding, ButtonChangePage } from '../../styles/onboarding';
import logo from '../../assets/logoEH.svg';

const Onboarding = (): JSX.Element => {
  return (
    <GridOnboarding container direction="column" justify="center">
      <Grid item>
        <LogoHome src={logo} alt="Logo" />
      </Grid>
      <Grid item>
        <OnboardingCard />
      </Grid>
      <Grid item>
        <ButtonChangePage>Déjà inscrit?</ButtonChangePage>
      </Grid>
    </GridOnboarding>
  );
};

export default Onboarding;
