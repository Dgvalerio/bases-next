/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import React, { ChangeEventHandler, useState } from 'react';

interface InputProps {
  type:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | 'select';
  name: string;
  value: any;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  label: string;
  options?: { value: string | number; text: string }[];
}

export const Input = ({
  type,
  name,
  value,
  onChange,
  label,
  options,
}: InputProps): JSX.Element => {
  const [input, setInput] = useState(value);

  return (
    <label htmlFor={name}>
      {label}
      {type === 'select' ? (
        <select
          name={name}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            onChange(e);
          }}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.text}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            onChange(e);
          }}
        />
      )}
    </label>
  );
};
