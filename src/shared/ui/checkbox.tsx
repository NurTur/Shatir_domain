import React from 'react';
import { Checkbox } from '../../../node_modules/@mantine/core'

export function UiCheckBox() {
  return (
    <Checkbox
      labelPosition="left"
      label="I agree to sell my privacy"
      color="indigo"
    />
  );
}