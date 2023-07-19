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



