import { useState } from 'react';
import Select from 'react-select';

import clearImg from '../../assets/images/clear.svg';
import { Container } from './styles';

const options = [{ value: 'Fraqueza', label: 'Fraqueza' }];

export function AdvancedFilter() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <Container>
      <Select
        options={options}
        defaultValue={selectedOption}
        className='select'
      />
      <Select
        options={options}
        defaultValue={selectedOption}
        className='select'
      />
      <Select
        options={options}
        defaultValue={selectedOption}
        className='select'
      />
      <Select
        options={options}
        defaultValue={selectedOption}
        className='select'
      />
      <Select
        options={options}
        defaultValue={selectedOption}
        className='select'
      />
      <button type='button'>
        <img src={clearImg} alt='Limpar Filtro' />
      </button>
    </Container>
  );
}
