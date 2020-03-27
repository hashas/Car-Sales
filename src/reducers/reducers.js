import { BUY_ITEM, REMOVE_FEATURE } from "../actions/actions";

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

function reducer(state = initialState, action) {
  switch(action.type) {
    case BUY_ITEM:
      let updatedStore = state.additionalFeatures.filter(item => item.id !== action.payload.id);
      return {
        // removing this spread operator didn't affect functionality
        // presumably because I'm declaring all existing keys again, 
        // and either spreading in state and/or adding new state
        // ...state,
        additionalPrice: (state.additionalPrice += action.payload.price),
        car: {
          // the use of the spread operator below retains the other keys 
          // in 'car' e.g. price, name, image, as well as 'features'
          ...state.car,
          // the use of the spread operator below retains each additional
          // feature, without it state only remembers the last feature added
          features: [ ...state.car.features, action.payload ]
        },
        additionalFeatures: [ ...updatedStore ]
      }
    case REMOVE_FEATURE:
      return {
        // ...state,
        additionalPrice: (state.additionalPrice -= action.payload.price),
        car: {
          ...state.car,
          features: (state.car.features.filter(item => item.id !== action.payload.id))
        },
        additionalFeatures: [ ...state.additionalFeatures, action.payload]
      }
    default:
      return state;
  }
}

export default reducer