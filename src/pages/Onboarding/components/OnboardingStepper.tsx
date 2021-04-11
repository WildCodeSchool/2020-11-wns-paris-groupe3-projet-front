import React from 'react';
import { Step, StepLabel, Stepper } from '@material-ui/core';

import { OnboardingStepProps } from './OnboardingStep';

export interface OnboardingStepperProps {
  activeStep: number;
  childrenArray: React.ReactElement<OnboardingStepProps>[];
  completed: boolean;
}

export const OnboardingStepper = ({ activeStep, childrenArray, completed }: OnboardingStepperProps): JSX.Element => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {childrenArray.map((child, index) => (
        <Step key={child.props.label} completed={activeStep > index || completed}>
          <StepLabel>{child.props.label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
