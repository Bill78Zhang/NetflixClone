import React from 'react';
import { Feature } from '../components';
import { OptFormContainer } from './optForm';
export function FeatureContainer() {
  return (
    <Feature>
      <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
      <Feature.SubTitle>Watch anywahre. Cancel at any time.</Feature.SubTitle>
      <OptFormContainer />
    </Feature>
  );
}
