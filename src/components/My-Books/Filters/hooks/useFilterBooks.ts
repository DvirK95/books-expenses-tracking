import { filterByName } from '../../../../store/book-slice';
import { FilterButton } from './interfaces';

const useFilterBooks = () => {
  const filterButtons: FilterButton[] = [
    {
      name: 'Book name',
      action: (filterText: string) => filterByName(filterText),
    },
    {
      name: 'Book author',
      action: 'void',
    },
    {
      name: 'Purchase Date',
      action: 'void',
    },
    {
      name: 'Price',
      action: 'void',
    },
  ];
  return {
    filterButtons,
  };
};
export default useFilterBooks;
