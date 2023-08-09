import React from 'react';
import { Checkbox } from '../../lib/@mantine/core';

export function UiCheckBox() {
  return (
    <Checkbox
      labelPosition="left"
      label="I agree to sell my privacy"
      color="indigo"
    />
  );
}