'use client'

import React from 'react';
import { useFormik } from 'formik';
import { signupSchema } from './ValidationSchema';
import { TextField, Button, Box, Typography } from '@mui/material';

const SignUpForm = () => {
  
  const formik = useFormik({
    
    initialValues: {
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    
    validationSchema: signupSchema,
    
    onSubmit: (values, { setSubmitting }) => {
      
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
     
      <form onSubmit={formik.handleSubmit} style={{ width: '300px' }}>
        <Box display="flex" flexDirection="column" gap={2}>
          
         
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

         
          <TextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number (123) 456-7890"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />

         
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <TextField
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />

        
          <Button color="primary" variant="contained" fullWidth type="submit" disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SignUpForm;