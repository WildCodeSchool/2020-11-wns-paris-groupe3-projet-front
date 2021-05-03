export const ONBOARDING_FORM = {
  userFields: [
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
      name: 'confirmPassword',
      label: 'Confirmez votre mot de passe',
    },
  ],
  schoolFields: [
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
  ],
  initialValues: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    schoolName: '',
    schoolAddress: '',
    schoolPostalCode: null,
    schoolCity: '',
    schoolPhoneNumber: null,
  },
};
