import React, {useState} from 'react';
import Select, {StylesConfig} from 'react-select';
import colors from 'resources/colors';
import sizes from 'resources/sizes';
import * as S from './Dropdown.styles';

export interface Item {
  value: string;
  label: string;
}

export type Props = S.PropsDropdown & {
  options: Item[];
  defaultValue?: Item;
  handleOnChange: (_item: Item) => void;
};

export const Dropdown = (props: Props) => {
  const {options, defaultValue, handleOnChange} = props;
  const [selected, setSelected] = useState<string | null>();

  const handleOptions: Item[] = options;
  const selectedOpion = handleOptions.find(e => e.value === selected);
  const handleUpdate = (event: any) => {
    setSelected(event.value);
    handleOnChange(event);
  };

  const customStyles: StylesConfig = {
    container: provided => ({
      ...provided,
      border: `1px solid ${colors.black}`,
      borderRadius: `${sizes.px5}`,
      width: 400,
      height: 40,
    }),
  };

  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={defaultValue}
      styles={customStyles}
      placeholder="Escolha o tipo do acesso"
      options={options}
      value={selectedOpion}
      onChange={handleUpdate}
    />
  );
};
