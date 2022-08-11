import { useState } from 'react';
import Select from 'react-select';
import { Container } from './styles';

const options = [
  { value: 'Crescente', label: 'Crescente' },
  { value: 'Decrecente', label: 'Decrecente' },
];

export function Order() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <Container>
      <Select
        options={options}
        defaultValue={selectedOption}
        className="order"
      />

      <div className='range'>
        <span>de</span>
        <input type='number' min='1' placeholder='1' />
        <span>até</span>
        <input type='number' min='1' placeholder='10' />
      </div>
    </Container>
  );
}
