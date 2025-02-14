export interface Card {
  card_number: string;
  is_accepted: boolean;
  expiry: string;
  cvv: string;
  network: 'Visa' | 'Mastercard';
  response: string;
  original_card_number: string;
}

export const cards: Card[] = [
  {
    card_number: "4514 2301 8493 1237",
    is_accepted: true,
    expiry: "12/28",
    cvv: "385",
    network: "Visa",
    response: "Successful",
    original_card_number: "4242 4242 4242 4242"
  },
  {
    card_number: "5123 8012 1432 1758",
    is_accepted: true,
    expiry: "10/26",
    cvv: "710",
    network: "Mastercard",
    response: "Successful",
    original_card_number: "5555 5555 5555 4444"
  },
  {
    card_number: "2134 5678 9012 3456",
    is_accepted: true,
    expiry: "02/28",
    cvv: "581",
    network: "Mastercard",
    response: "Successful",
    original_card_number: "2134 5678 9012 3456"
  },
  {
    card_number: "4023 1874 6529 1854",
    is_accepted: false,
    expiry: "01/27",
    cvv: "809",
    network: "Visa",
    response: "Lost card decline",
    original_card_number: "4000 0000 0000 9987"
  },
  {
    card_number: "4912 6976 1873 1232",
    is_accepted: false,
    expiry: "08/25",
    cvv: "638",
    network: "Visa",
    response: "Generic decline",
    original_card_number: "4000 0000 0000 0002"
  }
];

export const CARD_ERROR_MESSAGE = "Card not supported"; 