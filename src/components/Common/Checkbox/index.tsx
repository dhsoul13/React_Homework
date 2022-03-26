import React from 'react';

type typeCheckbox = {
  title: string;
  id: string;
  onChange?: (() => void) | undefined;
};
const Checkbox = (probs: typeCheckbox) => {
  const { title } = probs;
  const { id } = probs;
  const { onChange } = probs;
  return (
    <label htmlFor={`${id}_cheack`}>
      <input type="checkbox" id={`${id}_cheack`} onChange={onChange} />
      {title}
    </label>
  );
};

export default Checkbox;
