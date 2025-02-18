import React from 'react';

function _getHasValue(fieldValue) {
  if (Array.isArray(fieldValue)) {
    return !!fieldValue.length;
  }

  if (typeof fieldValue === 'number') {
    return true;
  }

  if (typeof fieldValue === 'boolean') {
    return true;
  }

  return !!fieldValue;
}

// Until Formik exposes the validationSchema (again) via useFormikContext(), the solution has to be handled at the Form declaration level
// There's a few open PR's on this issue, here's one for reference: https://github.com/formium/formik/pull/2933
export function useInitialRequiredErrors(validationSchema = {}, initialValues) {
  const initialRequiredErrorsRef = React.useRef(
    Object.entries(validationSchema).reduce((acc, [key, value]) => {
      if (value._exclusive?.required && !_getHasValue(initialValues[key])) {
        return {...acc, [key]: 'Required'};
      }
      return acc;
    }, {})
  );

  return initialRequiredErrorsRef.current;
}
