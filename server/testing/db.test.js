import axios from 'axios';
jest.mock('axios');

class Tests {
  static get(call) {
    return axios.get(call);
  }
}

jest.mock('axios');

test('should return first 5 products', async () => {
  const rows = [
    {
        "id": 1,
        "name": "Camo Onesie",
        "slogan": "Blend in to your crowd",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": "140",
        "created_at": "2022-11-07T02:30:13.844Z",
        "updated_at": "2022-11-07T02:31:14.205Z",
        "campus": "hr-rfc"
    },
    {
        "id": 2,
        "name": "Bright Future Sunglasses",
        "slogan": "You've got to wear shades",
        "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
        "category": "Accessories",
        "default_price": "69",
        "created_at": "2022-11-07T02:30:13.844Z",
        "updated_at": "2022-11-07T02:31:14.205Z",
        "campus": "hr-rfc"
    },
    {
        "id": 3,
        "name": "Morning Joggers",
        "slogan": "Make yourself a morning person",
        "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
        "category": "Pants",
        "default_price": "40",
        "created_at": "2022-11-07T02:30:13.844Z",
        "updated_at": "2022-11-07T02:31:14.205Z",
        "campus": "hr-rfc"
    },
    {
        "id": 4,
        "name": "Slacker's Slacks",
        "slogan": "Comfortable for everything, or nothing",
        "description": "I'll tell you how great they are after I nap for a bit.",
        "category": "Pants",
        "default_price": "65",
        "created_at": "2022-11-07T02:30:13.844Z",
        "updated_at": "2022-11-07T02:31:14.205Z",
        "campus": "hr-rfc"
    },
    {
        "id": 5,
        "name": "Heir Force Ones",
        "slogan": "A sneaker dynasty",
        "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
        "category": "Kicks",
        "default_price": "99",
        "created_at": "2022-11-07T02:30:13.844Z",
        "updated_at": "2022-11-07T02:31:14.205Z",
        "campus": "hr-rfc"
    }
  ];
  const resp = {data: rows}; // mock response
  axios.get.mockResolvedValue(resp);

  return Tests.get('/product').then((data) => {
    expect(data.data).toEqual(rows);
  });
})