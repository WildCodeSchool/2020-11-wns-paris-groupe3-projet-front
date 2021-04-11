import React from 'react';
import { Card, CardContent, Box, Grid } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { Field } from 'formik';

import { OnboardingStep } from './OnboardingStep';
import OnboardingFormWithStepper from './OnboardingFormWithStepper';
import OnboardingConfirmationMessage from './OnboardingConfirmationMessage';

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

const userOnboardingFormFields = [
  {
    name: 'lastname',
    label: 'Nom',
  },
  {
    name: 'firstname',
    label: 'Prénom',
  },
  {
    name: 'email',
    label: 'Email',
  },
  {
    name: 'password',
    label: 'Mot de passe',
  },
  {
    name: 'passwordConfirmation',
    label: 'Confirmez votre mot de passe',
  },
];

const schoolOnboardingFormFields = [
  {
    name: 'schoolName',
    label: 'Nom de votre établissement',
  },
  {
    name: 'schoolAddress',
    label: 'Adresse',
  },
  {
    name: 'schoolPostalCode',
    label: 'Code Postal',
  },
  {
    name: 'schoolCity',
    label: 'Ville',
  },
  {
    name: 'schoolPhoneNumber',
    label: 'Téléphone',
  },
];

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  schoolName: '',
  schoolAddress: '',
  schoolPostalCode: null,
  schoolCity: '',
  schoolPhoneNumber: null,
};

const OnboardingFormCard = (): JSX.Element => {
  const getFormContent = (fields: Array<{ name: string; label: string }>) => {
    return fields.map((field, index) => (
      <Box paddingBottom={2} key={index}>
        <Field fullWidth name={field.name} component={TextField} label={field.label} variant="outlined" size="small" />
      </Box>
    ));
  };
  return (
    <Grid container direction="column" alignItems="center">
      <Card>
        <CardContent>
          <OnboardingFormWithStepper
            initialValues={initialValues}
            onSubmit={async (values) => {
              await sleep(3000);
              console.log('values', values);
              // ici muraiton to create ajouter les choses de register
            }}
          >
            <OnboardingStep validationSchema={null} label="Vous">
              {getFormContent(userOnboardingFormFields)}
            </OnboardingStep>
            <OnboardingStep validationSchema={null} label="Votre établissement">
              {getFormContent(schoolOnboardingFormFields)}
            </OnboardingStep>
            <OnboardingStep label="Confirmation">
              <OnboardingConfirmationMessage />
            </OnboardingStep>
          </OnboardingFormWithStepper>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default OnboardingFormCard;
