import React from 'react';
import { FormikConfig, FormikValues } from 'formik';

export interface OnboardingStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export const OnboardingStep = ({ children }: OnboardingStepProps): JSX.Element => {
  return <>{children}</>;
};
