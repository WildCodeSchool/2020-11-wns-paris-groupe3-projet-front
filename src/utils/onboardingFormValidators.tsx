import { object, number, ref, string } from 'yup';

export const userSchema = object({
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

export const schoolSchema = object({
  // schoolPhoneNumber: string().matches(
  //   RegExp('/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$'),
  //   'Phone number is not valid',
  // ),
  postalCode: number().integer().required('Wrong postal Code').min(5).max(5),
});
