import * as yup from 'yup';

const phoneRegExp = /^\(\d{3}\) \d{3}-\d{4}$/;

export const signupSchema = yup.object().shape({
 
  email: yup
    .string()
    .email('Please enter a valid email') 
    .required('Email is required'),      

 
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number must be in the format (123) 456-7890') 
    .required('Phone number is required'),

 
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters') 
    .matches(
      /[a-z]/,
      'Password must contain at least one lowercase letter'
    )
    .matches(
      /[A-Z]/,
      'Password must contain at least one uppercase letter'
    )
    .matches(
      /\d/, 
      'Password must contain at least one number'
    )
    .required('Password is required'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match') 
    .required('Confirming your password is required'),
});