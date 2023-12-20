import {
  ActivitySquare,
  BarChartHorizontal,
  CalendarRange,
  CandlestickChart,
  CreditCard,
  GalleryThumbnails,
  TextCursorInput,
  UserCircle,
  UserCircle2,
} from 'lucide-react';


// export const tradersArray = [
//   {
//     img: TradeOne,
//     name: 'Derick Duke',
//     username: '@investmaimi',
//     percentage: '10%',
//   },
//   {
//     img: TradeTwo,
//     name: 'Brandson Clark',
//     username: '@funbuying',
//     percentage: '32%',
//   },
//   {
//     img: TradeThree,
//     name: 'Mirabel McDonald',
//     username: '@bearishgirl',
//     percentage: '40%',
//   },
//   {
//     img: TradeFour,
//     name: 'Mirabel McDonald',
//     username: '@bearishgirl',
//     percentage: '40%',
//   },
// ]

export const navOptions = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
  },
  {
    id: 'investments',
    label: 'Our Packages',
    path: '/packages',
  },
  {
    id: 'about',
    label: 'About Us',
    path: '/about',
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
  },
  {
    id: 'track',
    label: 'Track Item',
    path: '/track-parcel',
  },
];

export const adminNavOptions = [
  {
    id: 'admin',
    label: 'All Users',
    path: '/admin/users',
  },
  {
    id: 'admin',
    label: 'All Plans',
    path: '/admin/plans',
  },
  {
    id: 'admin',
    label: 'Withdrawals',
    path: '/admin/withdraws',
  },
  {
    id: 'admin',
    label: 'Deposits',
    path: '/admin/deposit',
  },
  {
    id: 'invest',
    label: 'Create Investments',
    path: '/admin/create-plans',
  },
  {
    id: 'copies',
    label: 'Create Copiers',
    path: '/admin/create-copiers',
  },
];

export const registrationFormControls = [
  {
    id: 'name',
    type: 'text',
    placeholder: 'Enter your fullname',
    label: 'Fullname',
    componentType: 'input',
  },
  {
    id: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    label: 'Email Address',
    componentType: 'input',
  },
  {
    id: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
    componentType: 'input',
  },
  {
    id: 'phone',
    type: 'number',
    placeholder: 'Phone number',
    label: 'Phone',
    componentType: 'input',
  },
  {
    id: 'role',
    type: '',
    placeholder: '',
    label: 'Role',
    componentType: 'select',
    options: [
      {
        id: 'admin',
        label: 'admin',
      },
      {
        id: 'client',
        label: 'client',
      },
    ],
  },
];

export const adminCreateOrdersControls = [
  {
    id: 'orderId',
    type: 'text',
    placeholder: 'Order ID',
    label: 'Order ID',
    componentType: 'input',
  },
  {
    id: 'parcelName',
    type: 'text',
    placeholder: 'Name of Parcel',
    label: 'Name of Parcel',
    componentType: 'input',
  },
  {
    id: 'parcelType',
    type: 'text',
    placeholder: 'Packaged, Boxed,...',
    label: 'Package Type',
    componentType: 'input',
  },
  {
    id: 'parcelMode',
    type: 'text',
    placeholder: 'Air, Road, Sea,...',
    label: 'Mode of Transporting',
    componentType: 'input',
  },
  {
    id: 'origin',
    type: 'text',
    placeholder: 'State/Country',
    label: 'Origin',
    componentType: 'input',
  },
  {
    id: 'destination',
    type: 'text',
    placeholder: 'State/Country',
    label: 'Destination',
    componentType: 'input',
  },
  {
    id: 'senderName',
    type: 'text',
    placeholder: 'John Doe',
    label: 'Sender Name',
    componentType: 'input',
  },
  {
    id: 'receiverName',
    type: 'text',
    placeholder: 'John Doe',
    label: 'Receiver Name',
    componentType: 'input',
  },
  {
    id: 'senderAddress',
    type: 'text',
    placeholder: 'Address',
    label: 'Sender Address',
    componentType: 'input',
  },
  {
    id: 'receiverAddress',
    type: 'text',
    placeholder: 'Address',
    label: 'Receiver Address',
    componentType: 'input',
  },
  {
    id: 'pieces',
    type: 'number',
    placeholder: 'No. of pieces',
    label: 'Pieces',
    componentType: 'input',
  },
  {
    id: 'weight',
    type: 'number',
    placeholder: 'in KG',
    label: 'Weight(KG)',
    componentType: 'input',
  },
  {
    id: 'cubic',
    type: 'number',
    placeholder: 'in CB',
    label: 'Cubic(CB)',
    componentType: 'input',
  },
  {
    id: 'startDate',
    type: 'date',
    placeholder: 'mm/dd/yyyy',
    label: 'Start Delivery Date',
    componentType: 'input',
  },
  {
    id: 'arrivalDate',
    type: 'date',
    placeholder: '',
    label: 'Arrival Delivery Date',
    componentType: 'input',
  },
  {
    id: 'message',
    type: 'text',
    placeholder: 'Enter message',
    label: 'Message',
    componentType: 'input',
  },
  {
    id: 'status',
    type: '',
    placeholder: '',
    label: 'Status',
    componentType: 'select',
    options: [
      {
        id: 'none',
        label: 'Select Status',
      },
      {
        id: 'registered',
        label: 'Parcel Registered',
      },
      {
        id: 'loading',
        label: 'Parcel Loading',
      },
      {
        id: 'in-transit',
        label: 'Parcel In-transit',
      },
      {
        id: 'issue',
        label: 'Parcel On-hold',
      },
      {
        id: 'delivered',
        label: 'Parcel Delivered',
      },
    ],
  },
];

export const createWalletAddressControls = [
  {
    id: 'walletName',
    type: '',
    placeholder: '',
    label: 'Wallet Name',
    componentType: 'select',
    options: [
      {
        id: 'Select',
        label: 'Select an option',
      },
      {
        id: 'bitcoin',
        label: 'Bitcoin',
      },
      {
        id: 'litecoin',
        label: 'Litecoin',
      },
      {
        id: 'conflux',
        label: 'Conflux',
      },
      {
        id: 'usdt',
        label: 'USDT',
      },
    ],
  },
  {
    id: 'walletAddress',
    type: 'text',
    placeholder: 'Wallet Address',
    label: 'Wallet Address',
    componentType: 'input',
  },
]

export const loginFormControls = [
  {
    id: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    label: 'Email Address',
    componentType: 'input',
  },
  {
    id: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
    componentType: 'input',
  },
];

export const dashboardNavLinks = [
  {
    id: 'account',
    label: 'Account Overview',
    path: '/dashboard/',
    icon: <UserCircle2 />,
  },
  {
    id: 'investments',
    label: 'My Investments',
    path: '/dashboard/investments',
    icon: <BarChartHorizontal />,
  },
  {
    id: 'transactions',
    label: 'My Transactions',
    path: '/dashboard/transactions',
    icon: <CalendarRange />,
  },
  {
    id: 'invest',
    label: 'Investment Plans',
    path: '/dashboard/plans',
    icon: <ActivitySquare />,
  },
  {
    id: 'fund',
    label: 'Fund Account',
    path: '/dashboard/deposit',
    icon: <CreditCard />,
  },
  {
    id: 'witdraw',
    label: 'Withdraw Funds',
    path: '/dashboard/withdraw',
    icon: <GalleryThumbnails />,
  },
  {
    id: 'copy',
    label: 'Copy Trader',
    path: '/dashboard/trades',
    icon: <CandlestickChart />,
  },
  {
    id: 'profile',
    label: 'My Profile',
    path: '/dashboard/profile',
    icon: <UserCircle />,
  },
  // {
  //   id: 'logout',
  //   label: 'Logout',
  //   icon: <TextCursorInput />,
  // },
];

export const firebaseConfig = {
  apiKey: 'AIzaSyDkIxD29L9ANNijQcUY19VRCWqIlk0Qouw',
  authDomain: 'nextjs-indexcopier.firebaseapp.com',
  projectId: 'nextjs-indexcopier',
  storageBucket: 'nextjs-indexcopier.appspot.com',
  messagingSenderId: '1096908732110',
  appId: '1:1096908732110:web:83b1596753947ebc43c29f',
};

export const firebaseStorageURL = 'gs://nextjs-indexcopier.appspot.com';

// export const defaultProfilePic = () => {
//   return <
// }
