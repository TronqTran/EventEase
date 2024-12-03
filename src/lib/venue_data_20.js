export const accountList = [
  {
    id: 1,
    userName: "john_doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    passWordAccount: "$2a$10$examplehashedpassword1",
    image: "https://example.com/image1.jpg",
    isVerified: 1,
    enable: 1,
    roles: [
      {
        id: 1,
        name: "ROLE_USER",
      },
      {
        id: 2,
        name: "ROLE_ADMIN",
      },
    ],
    resetPassWordToken: null,
    resetPassWordTokenExpiry: null,
  },
  {
    id: 2,
    userName: "jane_smith",
    email: "jane.smith@example.com",
    phoneNumber: "098-765-4321",
    passWordAccount: "$2a$10$examplehashedpassword2",
    image: "https://example.com/image2.jpg",
    isVerified: 1,
    enable: 1,
    roles: [
      {
        id: 3,
        name: "ROLE_USER",
      },
    ],
    resetPassWordToken: null,
    resetPassWordTokenExpiry: null,
  },
];

export const customer = {
  id: 1,
  name: "Alice Johnson",
  email: "alice.johnson@example.com",
  phoneNumber: "555-123-4567",
  address: "123 Main St, Springfield, USA",
  account: {
    id: 1,
    userName: "john_doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    passWordAccount: "$2a$10$examplehashedpassword1",
    image: "https://example.com/image1.jpg",
    isVerified: 1,
    enable: 1,
    roles: [
      {
        id: 1,
        name: "ROLE_USER",
      },
      {
        id: 2,
        name: "ROLE_ADMIN",
      },
    ],
    resetPassWordToken: null,
    resetPassWordTokenExpiry: null,
  },
  reviews: [],
  orders: [],
};

export const employee = {
  id: 2,
  name: "Bob Smith",
  phoneNumber: "555-987-6543",
  address: "456 Elm St, Springfield, USA",
  email: "bob.smith@example.com",
  account: {
    id: 2,
    userName: "jane_smith",
    email: "jane.smith@example.com",
    phoneNumber: "098-765-4321",
    passWordAccount: "$2a$10$examplehashedpassword2",
    image: "https://example.com/image2.jpg",
    isVerified: 1,
    enable: 1,
    roles: [
      {
        id: 3,
        name: "ROLE_USER",
      },
    ],
    resetPassWordToken: null,
    resetPassWordTokenExpiry: null,
  },
};

export const locationList = [
  {
    id: 1,
    title: "Beach Resort",
    address: "123 Ocean Drive, Miami, FL, USA",
    latitude: 25.7617,
    longitude: -80.1918,
    capacity: 100,
    price: 150.0,
    rating: 4.5,
    size: 2000,
    description: "A beautiful beach resort with stunning ocean views.",
    features: ["Swimming Pool", "Free Wi-Fi", "Beach Access", "Spa Services"],
    eventTypes: ["Wedding", "Corporate Event", "Party"],
    placeType: "Resort",
    services: [],
    author: {
      id: 1,
      userName: "alice_j",
      email: "alice.johnson@example.com",
      phoneNumber: "555-123-4567",
      passWordAccount: "$2a$10$examplehashedpassword1",
      image: "https://example.com/image1.jpg",
      isVerified: 1,
      enable: 1,
      roles: [
        {
          id: 1,
          name: "ROLE_USER",
        },
      ],
      resetPassWordToken: null,
      resetPassWordTokenExpiry: null,
    },
    imageLocations: [
      {
        id: 1,
        imageLink:
          "https://images.pexels.com/photos/13716218/pexels-photo-13716218.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        id: 2,
        imageLink:
          "https://images.pexels.com/photos/27592524/pexels-photo-27592524/free-photo-of-assisi.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        id: 3,
        imageLink:
          "https://images.pexels.com/photos/29419217/pexels-photo-29419217/free-photo-of-elegant-historical-building-in-sao-paulo.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        id: 4,
        imageLink:
          "https://images.pexels.com/photos/29419220/pexels-photo-29419220/free-photo-of-historic-architectural-detail-in-sao-paulo.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        id: 5,
        imageLink:
          "https://images.pexels.com/photos/11473266/pexels-photo-11473266.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
    ],
    events: [],
  },
  {
    id: 2,
    title: "Mountain Cabin",
    images: [],
    img: "https://example.com/mountain_cabin.jpg",
    address: "456 Pine Road, Denver, CO, USA",
    latitude: 39.7392,
    longitude: -104.9903,
    capacity: 50,
    price: 120.0,
    rating: 4.8,
    size: 1500,
    description: "A cozy cabin in the mountains, perfect for a getaway.",
    features: ["Fireplace", "Hiking Trails", "Pet Friendly"],
    eventTypes: ["Retreat", "Family Gathering"],
    placeType: "Cabin",
    services: [],
    author: {
      id: 2,
      userName: "bob_smith",
      email: "bob.smith@example.com",
      phoneNumber: "555-987-6543",
      passWordAccount: "$2a$10$examplehashedpassword2",
      image: "https://example.com/image2.jpg",
      isVerified: 1,
      enable: 1,
      roles: [
        {
          id: 2,
          name: "ROLE_EMPLOYEE",
        },
      ],
      resetPassWordToken: null,
      resetPassWordTokenExpiry: null,
    },
    imageLocations: [
      {
        id: 1,
        imageLink:
        "https://images.pexels.com/photos/27592524/pexels-photo-27592524/free-photo-of-assisi.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        id: 2,
        imageLink:
          "https://images.pexels.com/photos/13716218/pexels-photo-13716218.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        id: 3,
        imageLink:
          "https://images.pexels.com/photos/29419217/pexels-photo-29419217/free-photo-of-elegant-historical-building-in-sao-paulo.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        id: 4,
        imageLink:
          "https://images.pexels.com/photos/29419220/pexels-photo-29419220/free-photo-of-historic-architectural-detail-in-sao-paulo.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        id: 5,
        imageLink:
          "https://images.pexels.com/photos/11473266/pexels-photo-11473266.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
    ],
    events: [],
  },
];

export const servicecategorys = [
  {
    id: 1,
    name: "Catering",
  },
  {
    id: 2,
    name: "Photography",
  },
  {
    id: 3,
    name: "Event Planning",
  },
  {
    id: 4,
    name: "Music Entertainment",
  },
  {
    id: 5,
    name: "Decoration",
  },
];

export const eventcategorys = [
  {
    id: 1,
    events: [],
    categoryName: "Weddings",
  },
  {
    id: 2,
    events: [],
    categoryName: "Corporate Events",
  },
  {
    id: 3,
    events: [],
    categoryName: "Birthday Parties",
  },
  {
    id: 4,
    events: [],
    categoryName: "Concerts",
  },
  {
    id: 5,
    events: [],
    categoryName: "Conferences",
  },
];

export const eventList = [
  {
    id: 1,
    category: {
      id: 1,
      categoryName: "Weddings",
    },
    eventName: "Beach Wedding",
    description: "A beautiful beach wedding with ocean views.",
    eventDate: "2023-12-01T10:00:00Z",
    isProvided: true,
    note: "Bring your own decorations.",
    startTime: "2023-12-01T10:00:00Z",
    endTime: "2023-12-01T16:00:00Z",
    maxParticipants: 100,
    status: "Scheduled",
    depositRequired: 500.0,
    depositDueDate: "2023-11-01T00:00:00Z",
    reviews: [],
    employee: null,
    orders: [],
    imageEvent: [
      {id: 1,
        imageLink: 'https://images.pexels.com/photos/13741335/pexels-photo-13741335.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ],
  },
  {
    id: 2,
    category: {
      id: 1,
      categoryName: "Corporate Events",
    },
    eventName: "Corporate Retreat",
    description: "An annual corporate retreat at the beach.",
    eventDate: "2024-01-15T09:00:00Z",
    isProvided: true,
    note: "Team-building activities included.",
    startTime: "2024-01-15T09:00:00Z",
    endTime: "2024-01-15T17:00:00Z",
    maxParticipants: 80,
    status: "Scheduled",
    depositRequired: 300.0,
    depositDueDate: "2023-12-15T00:00:00Z",
    reviews: [],
    employee: null,
    orders: [],
    imageEvent: [
      {id: 1,
        imageLink: 'https://images.pexels.com/photos/13741335/pexels-photo-13741335.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ],
  },
  {
    id: 3,
    category: {
      id: 2,
      categoryName: "Retreat",
    },
    eventName: "Family Retreat",
    description: "A cozy family retreat in the mountains.",
    eventDate: "2024-02-10T14:00:00Z",
    isProvided: true,
    note: "Bring your own games.",
    startTime: "2024-02-10T14:00:00Z",
    endTime: "2024-02-12T11:00:00Z",
    maxParticipants: 50,
    status: "Scheduled",
    depositRequired: 200.0,
    depositDueDate: "2024-01-10T00:00:00Z",
    reviews: [],
    employee: null,
    orders: [],
    imageEvent: [
      {id: 1,
        imageLink: 'https://images.pexels.com/photos/13741335/pexels-photo-13741335.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ],
  },
  {
    id: 4,
    category: {
      id: 2,
      categoryName: "Family Gathering",
    },
    eventName: "Birthday Celebration",
    description: "Celebrate a special birthday in the mountains.",
    eventDate: "2024-03-20T12:00:00Z",
    isProvided: true,
    note: "Cake and decorations will be provided.",
    startTime: "2024-03-20T12:00:00Z",
    endTime: "2024-03-20T18:00:00Z",
    maxParticipants: 30,
    status: "Scheduled",
    depositRequired: 150.0,
    depositDueDate: "2024-02-20T00:00:00Z",
    reviews: [],
    employee: null,
    orders: [],
    imageEvent: [
      {id: 1,
        imageLink: 'https://images.pexels.com/photos/13741335/pexels-photo-13741335.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ],
  },
];
export const singlePostData = {};

export const userData = [
  {
    id: 1,
    name: "John Doe",
    img: "https://images.pexels.com/photos/13969614/pexels-photo-13969614.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "john@gmail.com",
    password: "123456",
  },
  {
    id: 2,
    name: "Jane Smith",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "jane.smith@gmail.com",
    password: "abcdef",
  },
  {
    id: 3,
    name: "Bob Johnson",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "bob.johnson@gmail.com",
    password: "qwerty",
  },
  {
    id: 4,
    name: "Alice Brown",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "alice.brown@gmail.com",
    password: "password",
  },
  {
    id: 5,
    name: "Michael Scott",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "michael.scott@gmail.com",
    password: "dundermifflin",
  },
  {
    id: 6,
    name: "Pam Beesly",
    img: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    email: "pam.beesly@gmail.com",
    password: "jimhalpert",
  },
  {
    id: 7,
    name: "Jim Halpert",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "jim.halpert@gmail.com",
    password: "pamforever",
  },
  {
    id: 8,
    name: "Dwight Schrute",
    img: "https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "dwight.schrute@gmail.com",
    password: "beets123",
  },
  {
    id: 9,
    name: "Angela Martin",
    img: "https://images.pexels.com/photos/458649/pexels-photo-458649.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "angela.martin@gmail.com",
    password: "catslover",
  },
  {
    id: 10,
    name: "Stanley Hudson",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "stanley.hudson@gmail.com",
    password: "pretzelday",
  },
  {
    id: 11,
    name: "Kevin Malone",
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "kevin.malone@gmail.com",
    password: "chilis123",
  },
  {
    id: 12,
    name: "Ryan Howard",
    img: "https://images.pexels.com/photos/936734/pexels-photo-936734.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "ryan.howard@gmail.com",
    password: "temp123",
  },
  {
    id: 13,
    name: "Kelly Kapoor",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "kelly.kapoor@gmail.com",
    password: "fashionista",
  },
  {
    id: 14,
    name: "Oscar Martinez",
    img: "https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "oscar.martinez@gmail.com",
    password: "accountant",
  },
  {
    id: 15,
    name: "Meredith Palmer",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "meredith.palmer@gmail.com",
    password: "party123",
  },
];

export const chatData = [
  {
    id: 1,
    name: "Bob Johnson",
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
    chat: [
      { id: 1, text: "Hi, how are you?", time: "12:00", own: true },
      { id: 2, text: "Hello, I am fine", time: "12:01", own: false },
      { id: 3, text: "What can I do for you?", time: "12:02", own: true },
      { id: 4, text: "I need some information.", time: "12:03", own: false },
    ],
  },
  {
    id: 2,
    name: "Mary Smith",
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
    chat: [
      { id: 1, text: "Hi, how are you?", time: "12:00", own: true },
      { id: 2, text: "Hello, I am fine", time: "12:01", own: false },
      { id: 3, text: "What can I do for you?", time: "12:02", own: true },
      { id: 4, text: "I need some information.", time: "12:03", own: false },
    ],
  },
  {
    id: 3,
    name: "Alice Brown",
    img: "https://images.pexels.com/photos/13969614/pexels-photo-13969614.jpeg?auto=compress&cs=tinysrgb&w=400",
    chat: [
      { id: 1, text: "Hi, I need some thing", time: "12:00", own: false },
      { id: 2, text: "Sure, what do you need?", time: "12:01", own: true },
    ],
  },
  {
    id: 4,
    name: "Attila",
    img: "https://images.pexels.com/photos/13969614/pexels-photo-13969614.jpeg?auto=compress&cs=tinysrgb&w=400",
    chat: [
      { id: 1, text: "Hi, I need some thing", time: "12:00", own: false },
      { id: 2, text: "Sure, what do you need?", time: "12:01", own: true },
      { id: 3, text: "I need some information.", time: "12:03", own: false },
      { id: 4, text: "I need some information.", time: "12:03", own: false },
    ],
  },
];

export const orderData = [
  {
    id: 1,
    venue: "The Grand Event Center",
    img: "https://images.pexels.com/photos/15247590/pexels-photo-15247590/free-photo-of-a-large-building-with-a-dome-and-a-ship-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "65 Main St, District 11, Ho Chi Minh City, Vietnam",
    eventDate: "2024-12-15",
    guestCount: 150,
    totalCost: 5000000,
    status: ["Booking", "Confirmation", "Payment"],
    bookingDate: "2024-10-01",
    paymentMethod: "Credit Card",
    notes: "Need extra decoration.",
    services: [
      { id: 1, name: "Catering" },
      { id: 2, name: "Photography" },
    ],
  },
  {
    id: 2,
    venue: "The Loft",
    img: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400",
    address:
      "23 Phan Xich Long St, Phu Nhuan District, Ho Chi Minh City, Vietnam",
    eventDate: "2024-11-20",
    guestCount: 300,
    totalCost: 10000000,
    status: [
      "Booking",
      "Confirmation",
      "Payment",
      "Preparation",
      "Event",
      "Post-Event",
      "Follow-up",
    ],
    services: [
      { id: 1, name: "Catering" },
      { id: 2, name: "Photography" },
      { id: 3, name: "DJ/MC" },
      { id: 4, name: "Decoration" },
      { id: 5, name: "Security" },
    ],
    bookingDate: "2024-09-25",
    paymentMethod: "Bank Transfer",
    notes: "Require AV equipment.",
  },
];

export const orderDataAdmin = [
  {
    id: 1,
    customerName: "John Doe",
    eventDate: "2024-12-15",
    venue: "Grand Ballroom",
    guestCount: 150,
    totalCost: 5000000,
    status: ["Booking", "Confirmation", "Payment"],
    bookingDate: "2024-10-01",
    paymentMethod: "Credit Card",
    notes: "Need extra decoration.",
    services: ["Catering", "Photography"],
    img: "https://images.pexels.com/photos/26898886/pexels-photo-26898886/free-photo-of-people-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    review: "Corporate Annual Meeting",
    eventDate: "2024-11-20",
    venue: "Conference Hall",
    guestCount: 300,
    totalCost: 10000000,
    status: [
      "Booking",
      "Confirmation",
      "Payment",
      "Preparation",
      "Event",
      "Post-Event",
      "Follow-up",
    ],
    services: ["Catering", "Photography", "DJ/MC", "Decoration", "Security"],
    bookingDate: "2024-09-25",
    paymentMethod: "Bank Transfer",
    notes: "Require AV equipment.",
    img: "https://images.pexels.com/photos/26898886/pexels-photo-26898886/free-photo-of-people-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    customerName: "Emily Johnson",
    review: "Birthday Party",
    eventDate: "2024-12-05",
    venue: "Garden Area",
    guestCount: 50,
    totalCost: 2000000,
    status: ["Booking", "Confirmation"],
    services: ["Catering", "Photography", "DJ/MC", "Decoration"],
    bookingDate: "2024-10-05",
    paymentMethod: "Cash",
    notes: "Theme: Tropical.",
    img: "https://images.pexels.com/photos/26898886/pexels-photo-26898886/free-photo-of-people-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    customerName: "Michael Brown",
    review: "Product Launch",
    eventDate: "2024-11-10",
    venue: "Convention Center",
    guestCount: 200,
    totalCost: 8000000,
    status: ["Booking", "Confirmation", "Payment", "Preparation"],
    bookingDate: "2024-09-15",
    paymentMethod: "Credit Card",
    notes: "Requires promotional materials.",
    img: "https://images.pexels.com/photos/26898886/pexels-photo-26898886/free-photo-of-people-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    customerName: "Sarah Wilson",
    review: "Charity Gala",
    eventDate: "2024-12-20",
    venue: "Grand Ballroom",
    guestCount: 400,
    totalCost: 15000000,
    status: ["Booking", "Confirmation", "Payment", "Preparation", "Event"],
    bookingDate: "2024-09-30",
    paymentMethod: "Bank Transfer",
    notes: "Special guest appearance.",
    img: "https://images.pexels.com/photos/26898886/pexels-photo-26898886/free-photo-of-people-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    customerName: "David Taylor",
    review: "Networking Event",
    eventDate: "2024-11-15",
    venue: "Lounge Area",
    guestCount: 100,
    totalCost: 4000000,
    status: ["Booking", "Confirmation", "Payment"],
    bookingDate: "2024-10-02",
    paymentMethod: "Credit Card",
    notes: "Refreshments required.",
    img: "https://images.pexels.com/photos/26898886/pexels-photo-26898886/free-photo-of-people-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    customerName: "Laura Miller",
    review: "Graduation Ceremony",
    eventDate: "2024-11-25",
    venue: "Auditorium",
    guestCount: 250,
    totalCost: 6000000,
    status: ["Booking", "Confirmation", "Payment", "Preparation", "Event"],
    bookingDate: "2024-09-10",
    paymentMethod: "Cash",
    notes: "Need a projector.",
    img: "https://images.pexels.com/photos/26898886/pexels-photo-26898886/free-photo-of-people-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    customerName: "James Anderson",
    review: "Team Building Retreat",
    eventDate: "2024-10-30",
    venue: "Outdoor Park",
    guestCount: 75,
    totalCost: 3500000,
    status: ["Booking", "Confirmation", "Payment"],
    bookingDate: "2024-10-01",
    paymentMethod: "Credit Card",
    notes: "Include team activities.",
    img: "https://images.pexels.com/photos/26898886/pexels-photo-26898886/free-photo-of-people-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    customerName: "Jessica Harris",
    review: "Anniversary Celebration",
    eventDate: "2024-12-01",
    venue: "Private Villa",
    guestCount: 60,
    totalCost: 3000000,
    status: ["Booking", "Confirmation", "Payment", "Preparation"],
    bookingDate: "2024-10-03",
    paymentMethod: "Bank Transfer",
    notes: "Catering needed.",
    img: "https://images.pexels.com/photos/26898886/pexels-photo-26898886/free-photo-of-people-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 10,
    customerName: "Robert Young",
    review: "Workshop on Innovation",
    eventDate: "2024-11-05",
    venue: "Training Room",
    guestCount: 40,
    totalCost: 2500000,
    status: ["Booking", "Confirmation", "Payment"],
    bookingDate: "2024-09-20",
    paymentMethod: "Cash",
    notes: "Materials to be provided.",
    img: "https://images.pexels.com/photos/26898886/pexels-photo-26898886/free-photo-of-people-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const services = [
  {
    id: 1,
    name: "Catering",
    description: "Food and beverage service",
    price: 1000000,
  },
  {
    id: 2,
    name: "Photography",
    description: "Professional photography for the event",
    price: 500000,
  },
  {
    id: 3,
    name: "DJ/MC",
    description: "Music and event hosting",
    price: 800000,
  },
  {
    id: 4,
    name: "Decoration",
    description: "Event venue decoration",
    price: 1200000,
  },
  {
    id: 5,
    name: "Security",
    description: "Security service for the event",
    price: 400000,
  },
];
