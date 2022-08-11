import { AdvancedFilter } from '../AdvancedFilter';
import { Order } from '../Order';
import { Search } from '../Search';
import { Container } from './styles';

export function Filter() {
  return (
    <Container>
      <Search />
      <Order />
      <AdvancedFilter />
    </Container>
  );
}
