import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import OnboardingContainer from '../pages/Onboarding/';

describe('Onboarding view', () => {
  describe('when on the onboarding page', () => {
    it('should render the logo, the form and the submit button', async () => {
      render(<OnboardingContainer />);
      const img = await waitFor(() => screen.getByRole('img'));
      expect(img).toBeInTheDocument();
    });
  });
});
