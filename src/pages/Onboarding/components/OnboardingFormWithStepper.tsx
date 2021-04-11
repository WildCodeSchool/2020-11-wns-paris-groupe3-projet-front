import React, { useState } from 'react';
import { Button, Grid, CircularProgress } from '@material-ui/core';
import { Form, Formik, FormikConfig, FormikHelpers, FormikValues } from 'formik';
import { OnboardingStepProps } from './OnboardingStep';
import { OnboardingStepper } from './OnboardingStepper';

const OnboardingFormWithStepper = ({ children, ...props }: FormikConfig<FormikValues>): JSX.Element => {
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
          <OnboardingStepper activeStep={activeStep} childrenArray={childrenArray} completed={completed} />
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

export default OnboardingFormWithStepper;
