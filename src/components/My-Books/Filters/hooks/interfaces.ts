import { type } from "os";

export interface FilterButton {
  name: string;
  action: any;
}

export interface FilterBooksButtonProps {
  filterButton: FilterButton;
}

export interface Filters{
  bookName: string;
  author: string;
  purchaseDate: string;
  price: string;
}

export interface FilterBooksProps {
  filters: {
    bookName: string;
    author: string;
    purchaseDate: string;
    price: string;
}

  onBookNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAuthorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPurchaseDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear?: () => void;
}



