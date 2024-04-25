import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SignupForm.css';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Trop court!')
    .max(50, 'Trop long!')
    .required('Requis'),
  email: Yup.string()
    .email('Email invalide')
    .required('Requis'),
  password: Yup.string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .required('Requis'),
});

function SignupForm() {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="username" placeholder="Nom d'utilisateur" />
          <ErrorMessage name="username" component="div" />
          
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />

          <Field type="password" name="password" placeholder="Mot de passe" />
          <ErrorMessage name="password" component="div" />
          
          <button type="submit" disabled={isSubmitting}>
            S'inscrire
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default SignupForm;
