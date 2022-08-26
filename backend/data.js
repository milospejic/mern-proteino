import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Milos',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Nemanja',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [
        {
            //_id: '1',
            name: 'Battery whey protein 800g',
            category:'Protein',
            slug: 'bat-whey',
            image:'/images/pic1.jpg',
            brand:'Battery',
            price:'3200',
            rating: 4.5,
            numReviews: 10,
            description: ' ',
            countInStock: 58,
        },
        {
            //_id: '2',
            name: 'NUTREND 100% WHEY PROTEIN 2250g',
            category:'Protein',
            slug: 'nut-whey',
            image:'/images/pic2.jpg',
            brand:'Nutrend',
            price:'10500',
            rating: 4.5,
            numReviews: 10,
            description: ' ',
            countInStock: 58,
        },
        {
            //_id: '3',
            name: 'Battery creatine 250g',
            category:'Creatine',
            slug: 'bat-cre',
            image:'/images/pic3.jpg',
            brand:'Battery',
            price:'2000',
            rating: 4.0,
            numReviews: 10,
            description: ' ',
            countInStock: 58,
        },
        {
            //_id: '4',
            name: 'OLIMP BCAA XPLODE POWDER',
            category:'BCAA',
            slug: 'oli-bcaa',
            image:'/images/pic4.jpg',
            brand:'Olimp',
            price:'2500',
            rating: 4.0,
            numReviews: 10,
            description: ' ',
            countInStock: 0,
        },
    ]
};
export default data;