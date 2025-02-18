import React from 'react';
import * as Yup from 'yup';

import {SQFormCheckboxGroup as SQFormCheckboxGroupComponent} from '../src';
import {SQFormStoryWrapper} from './components/SQFormStoryWrapper';
import {createDocsPage} from './utils/createDocsPage';

export default {
  title: 'Components/SQFormCheckboxGroup',
  component: SQFormCheckboxGroupComponent,
  argTypes: {
    name: {table: {disable: true}},
    children: {table: {disable: true}},
    SQFormProps: {table: {disable: true}},
    onChange: {action: 'changed', table: {disable: true}}
  },
  parameters: {
    docs: {
      page: createDocsPage(),
      source: {
        type: 'code'
      }
    }
  }
};

const SHOPPING_LIST_OPTIONS = [
  {label: 'Voltfruit', value: 'voltfruit'},
  {label: 'Sunshroom', value: 'sunshroom'},
  {label: 'Bokoblin Guts', value: 'bokoblin guts'},
  {label: 'Lynel Hoof', value: 'lynel hoof'},
  {label: 'Stealthfin Trout', value: 'stealthfin trout'}
];

const defaultArgs = {
  groupLabel: 'Shopping List',
  name: 'shoppingList',
  children: SHOPPING_LIST_OPTIONS,
  SQFormProps: {
    initialValues: {shoppingList: []}
  }
};

const Template = args => {
  const {SQFormProps, schema, ...componentProps} = args;
  return (
    <SQFormStoryWrapper
      {...defaultArgs.SQFormProps}
      {...SQFormProps}
      validationSchema={schema}
    >
      <SQFormCheckboxGroupComponent
        {...componentProps}
        size={args.size !== 'auto' ? Number(args.size) : args.size}
      />
    </SQFormStoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = defaultArgs;

export const WithValidation = Template.bind({});
WithValidation.args = {
  ...defaultArgs,
  schema: {
    [defaultArgs.name]: Yup.string().required()
  }
};
WithValidation.parameters = {
  controls: {exclude: 'schema'}
};
