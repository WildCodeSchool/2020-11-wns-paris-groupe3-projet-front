import React, { useState } from 'react';
import { Card, CardContent, Button, Box, Step, StepLabel, Stepper, Grid, CircularProgress } from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikHelpers, FormikValues } from 'formik';
import { TextField } from 'formik-material-ui';
import { object, number, ref, string } from 'yup';

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

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

const userSchema = object({
  email: string().email().required(),
  password: string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(RegExp('(.*[a-z].*)'), 'Password must contain at least one lowercase')
    .matches(RegExp('(.*[A-Z].*)'), 'Password must contain at least one uppercase')
    .matches(RegExp('(.*\\d.*)'), 'Password must contain at least one number')
    .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), 'Password must contain at least one special character'),
  passwordConfirmation: string()
    .required('Please confirm your password')
    .when('password', {
      is: (password: string) => (password && password.length > 0 ? true : false),
      then: string().oneOf([ref('password'), null], 'Passwords must match'),
    }),
});

const schoolSchema = object({
  // schoolPhoneNumber: string().matches(
  //   RegExp('/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$'),
  //   'Phone number is not valid',
  // ),
  postalCode: number().integer().required('Wrong postal Code').min(5).max(5),
});

export interface OnboardingStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export const OnboardingStep = ({ children }: OnboardingStepProps): JSX.Element => {
  return <>{children}</>;
};

export const OnboardingStepper = ({ children, ...props }: FormikConfig<FormikValues>): JSX.Element => {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<OnboardingStepProps>[];
  const [activeStep, setActiveStep] = useState(0);
  const currentChild = childrenArray[activeStep] as React.ReactElement<OnboardingStepProps>;
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const isLastStep = () => {
    return activeStep === childrenArray.length - 1;
  };

  const handleSubmit = async (values: FormikValues, helpers: FormikHelpers<FormikValues>) => {
    if (isLastStep()) {
      await props.onSubmit(values, helpers);
      setCompleted(true);
    } else {
      handleNext();
    }
  };

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={(values, helpers) => handleSubmit(values, helpers)}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper activeStep={activeStep} alternativeLabel>
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={activeStep > index || completed}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {currentChild}
          <Grid container direction="row" justify="space-between" alignItems="center" style={{ marginTop: 10 }}>
            {activeStep > 0 ? (
              <Grid item>
                <Button disabled={isSubmitting} variant="contained" color="primary" onClick={() => handleBack()}>
                  Précédent
                </Button>
              </Grid>
            ) : (
              <Grid item>
                <Button variant="contained">Annuler</Button>
              </Grid>
            )}
            <Grid item>
              <Button
                disabled={isSubmitting}
                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                variant="contained"
                color="secondary"
                type="submit"
              >
                {isSubmitting ? 'Confirmation en cours' : isLastStep() ? 'Confirmer' : 'Suivant'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

const OnboardingCard = (): JSX.Element => {
  return (
    <Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
      <Card>
        <CardContent>
          <OnboardingStepper
            initialValues={initialValues}
            onSubmit={async (values) => {
              await sleep(3000);
              console.log('values', values);
              // ici muraiton to create
            }}
          >
            <OnboardingStep validationSchema={null} label="Vous">
              <Box paddingBottom={2}>
                <Field fullWidth name="lastname" component={TextField} label="Nom" variant="outlined" size="small" />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="firstname"
                  component={TextField}
                  label="Prénom"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="email"
                  type="email"
                  component={TextField}
                  label="Email"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="password"
                  component={TextField}
                  label="Mot de Passe"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="passwordConfirmation"
                  component={TextField}
                  label="Confirmez votre mot de passe"
                  variant="outlined"
                  size="small"
                />
              </Box>
            </OnboardingStep>
            <OnboardingStep validationSchema={null} label="Votre établissement">
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="schoolName"
                  component={TextField}
                  label="Nom de votre établissement"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="schoolAddress"
                  component={TextField}
                  label="Adresse"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="schoolPostalCode"
                  type="number"
                  component={TextField}
                  label="Code Postal"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="schoolCity"
                  component={TextField}
                  label="Ville"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="schoolPhoneNumber"
                  component={TextField}
                  label="Téléphone"
                  variant="outlined"
                  size="small"
                />
              </Box>
            </OnboardingStep>
            <OnboardingStep label="Confirmation">
              <Box paddingBottom={2}>Message vous y êtes presques</Box>
            </OnboardingStep>
          </OnboardingStepper>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default OnboardingCard;
