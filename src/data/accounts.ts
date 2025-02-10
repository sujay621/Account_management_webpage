export interface Account {
  reference_number: string;
  consumer_id: string;
  first_name: string;
  last_name: string;
  address: string;
  ssn: string;
  email: string;
  number_to_call: string;
  account_id: string;
  account_type: 'utility' | 'credit_card' | 'personal_loan';
  debt_due: number;
  original_amount_due: number;
  original_lender: string;
  due_since: string;
}

export const accounts: Account[] = [
  {
    reference_number: "241263",
    consumer_id: "295692",
    first_name: "Allison",
    last_name: "Jones",
    address: "2317 Maple Grove Road, Alexandria, VA 22308",
    ssn: "4132",
    email: "alliheartjones1987@gmail.com",
    number_to_call: "+16203496828",
    account_id: "518432",
    account_type: "utility",
    debt_due: 211.43,
    original_amount_due: 253.20,
    original_lender: "Regional Utilities",
    due_since: "2024-01-11"
  },
  {
    reference_number: "815242",
    consumer_id: "216191",
    first_name: "Christian",
    last_name: "Brennan",
    address: "1029 Belfield Ave, Drexel Hill, PA 19026",
    ssn: "7683",
    email: "christibstan@gmail.com",
    number_to_call: "+18456971789",
    account_id: "984857",
    account_type: "credit_card",
    debt_due: 650.32,
    original_amount_due: 740.60,
    original_lender: "Capital One",
    due_since: "2024-07-19"
  },
  {
    reference_number: "338193",
    consumer_id: "694563",
    first_name: "Mark",
    last_name: "Washington",
    address: "607 Clark Street, Suite 425, Raleigh, NC 27601",
    ssn: "5726",
    email: "mark.k.wash@outlook.com",
    number_to_call: "+12184894284",
    account_id: "647241",
    account_type: "personal_loan",
    debt_due: 684.75,
    original_amount_due: 820.00,
    original_lender: "Bank of America",
    due_since: "2024-03-01"
  },
  {
    reference_number: "448901",
    consumer_id: "197202",
    first_name: "James",
    last_name: "Robinson",
    address: "185 Woodland Drive, Columbus, OH 43215",
    ssn: "4817",
    email: "jamieaccshopping@hotmail.com",
    number_to_call: "+12185262444",
    account_id: "843189",
    account_type: "credit_card",
    debt_due: 582.34,
    original_amount_due: 659.60,
    original_lender: "Discover",
    due_since: "2024-04-05"
  },
  {
    reference_number: "988927",
    consumer_id: "821678",
    first_name: "Jennifer",
    last_name: "Solis",
    address: "815 E Calaveras Street Suite 201, Altadena, CA 91001",
    ssn: "8208",
    email: "jennyso2025@outlook.com",
    number_to_call: "+12192001883",
    account_id: "493535",
    account_type: "personal_loan",
    debt_due: 746.32,
    original_amount_due: 895.00,
    original_lender: "TD Bank",
    due_since: "2024-02-15"
  },
  {
    reference_number: "885896",
    consumer_id: "369013",
    first_name: "Lindsey",
    last_name: "Phillips",
    address: "2814 Matthew Lane, Port Arthur, TX 77642",
    ssn: "5983",
    email: "itsliloandstitch@hotmail.com",
    number_to_call: "+19034033489",
    account_id: "738294",
    account_type: "utility",
    debt_due: 376.12,
    original_amount_due: 439.60,
    original_lender: "Midwest Energy",
    due_since: "2024-06-22"
  },
  {
    reference_number: "269721",
    consumer_id: "957068",
    first_name: "Allen",
    last_name: "Gomez",
    address: "9504 River Point Drive, Suite 899, Englewood, CO 80112",
    ssn: "7563",
    email: "allgom19821@gmail.com",
    number_to_call: "+18159120656",
    account_id: "629186",
    account_type: "personal_loan",
    debt_due: 526.17,
    original_amount_due: 633.20,
    original_lender: "Wells Fargo",
    due_since: "2024-05-08"
  },
  {
    reference_number: "152229",
    consumer_id: "319373",
    first_name: "Nicholas",
    last_name: "Taylor",
    address: "2081 Grove Park Drive, Suite 682, Boca Raton, FL 33432",
    ssn: "1314",
    email: "nicklovespizza4@gmail.com",
    number_to_call: "+18312170059",
    account_id: "847563",
    account_type: "utility",
    debt_due: 328.34,
    original_amount_due: 393.60,
    original_lender: "City Power & Light",
    due_since: "2024-05-17"
  }
];