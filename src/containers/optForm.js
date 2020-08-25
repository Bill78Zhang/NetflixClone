import React from 'react';
import { OptForm } from '../components';

export function OptFormContainer() {
  return (
    <OptForm>
      <OptForm.Input></OptForm.Input>
      <OptForm.Button>Try It Now</OptForm.Button>
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership
      </OptForm.Text>
    </OptForm>
  );
}
