'use client';

import { Fragment } from 'react';

import useChangeSearchParam from '@/hooks/useChangeSearchParam';

interface AttributeSelectorProps<T> {
  attribute: string;
  heading: string;
  options: T[];
  getOptionValue: (option: T) => string;
  renderOption: (
    option: T,
    selected: boolean,
    handleSelect: () => void
  ) => React.ReactNode;
}

export default function AttributeSelector<T>({
  attribute,
  heading,
  options,
  getOptionValue,
  renderOption,
}: AttributeSelectorProps<T>) {
  const { changeSearchParam: handleSelect, currentValue } =
    useChangeSearchParam(attribute);

  return (
    <div className="flex flex-col gap-4">
      <h3 id={`${attribute}-selector-heading`} className="text-sm text-ink-500">
        {heading}
      </h3>

      <div
        className="flex gap-4 flex-wrap"
        role="radiogroup"
        aria-labelledby={`${attribute}-selector-heading`}
      >
        {options.map((option: T) => {
          const value = getOptionValue(option);
          const selected = value === currentValue;
          return (
            <Fragment key={value}>
              {renderOption(option, selected, () => handleSelect(value))}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
