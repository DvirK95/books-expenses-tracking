import { bookActions } from '../../../../store/book-slice';
import { FilterButton } from './interfaces';

const useFilterBooks = () => {
  const filterButtons: FilterButton[] = [
    {
      name: 'Book name',
      action: (filterText: string) => bookActions.filterByName(filterText),
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
