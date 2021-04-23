import faker from 'faker';

const getProducts = () =>  ([
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&dpr=2&h=640&w=835",
      alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: faker.hacker.noun(),
      },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/3140020/pexels-photo-3140020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/3683187/pexels-photo-3683187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/3817580/pexels-photo-3817580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/889839/pexels-photo-889839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/587958/pexels-photo-587958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/1070536/pexels-photo-1070536.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/587958/pexels-photo-587958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/374054/pexels-photo-374054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/542555/pexels-photo-542555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },
  {
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    price: faker.commerce.price(10, 200),
    currency: '$',
    image: {
      src:
        "https://images.pexels.com/photos/795693/pexels-photo-795693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        alt: faker.hacker.noun(),
    },
    bestseller: faker.datatype.boolean(),
    featured: false,
    details: null,
  },

  {
    name: "Samurai King Restling",
    category: "landmarks",
    price: 101,
    currency: "USD",
    image: {
      src:
        "https://images.pexels.com/photos/22420/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "van gouh",
    },
    bestseller: false,
    featured: true,
    details: {
      dimmentions: {
        width: 1020,
        height: 1020,
      },
      size: 15000,
      description:
        "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scram",
      recommendations: [
        {
          src: "https://images.pexels.com/photos/1622421/pexels-photo-1622421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          alt: faker.commerce.productName(),
        },
        {
          src: "https://images.pexels.com/photos/1410140/pexels-photo-1410140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          alt: faker.commerce.productName(),
        },
        {
          src: "https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          alt: faker.commerce.productName(),
        },
      ],
    },
  },
]);

const products = getProducts();

export default products;
