import React from 'react';
import { createRoot } from 'react-dom/client';

class Input extends React.PureComponent {
  render() {
    let { forwardedRef, ...otherProps } = this.props;
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />;
});

class FocusableInput extends React.Component {
  ref = React.createRef();

  render() {
    return <TextInput ref={this.ref} />;
  }

  // When the focused prop is changed from false to true,
  // and the input is not focused, it should receive focus.
  // If focused prop is true, the input should receive the focus.
  // Implement your solution below:
  componentDidUpdate(prevProps) {}

  componentDidMount() {
    if (this.props.focused) {
      this.ref?.current.focus();
    }
  }
}

FocusableInput.defaultProps = {
  focused: false
};

const App = (props) => <FocusableInput focused={props.focused} />;

// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';

// const PriceCalculator = () => {
//   const [weight, setWeight] = useState(0);
//   const [price, setPrice] = useState(0);
//   const [discountType, setDiscountType] = useState('standard');
//   const [discountedPrice, setDiscountedPrice] = useState(0);

//   const handleWeight = (e) => {
//     setWeight(parseInt(e.target.value, 10));
//   };

//   const handlePrice = (e) => {
//     setPrice(parseInt(e.target.value, 10));
//   };

//   const handleDiscountType = (e) => {
//     // TODO: This is where the discount will take place
//     setDiscountType(e.target.value);
//   };

//   useEffect(() => {
//     if (discountType === 'weight') {
//       if (weight <= 10) {
//         setDiscountedPrice(price * 0.94);
//       } else {
//         setDiscountedPrice(price * 0.82);
//       }
//       return;
//     }

//     if (discountType === 'seasonal') {
//       setDiscountedPrice(price * 0.88);
//       return;
//     }

//     setDiscountedPrice(price * 0.94);
//   }, [discountType, weight, price]);

//   return (
//     <div>
//       <label htmlFor="type">Select Type:</label>
//       <select
//         id="type"
//         name="type"
//         value="standard"
//         onChange={handleDiscountType}
//       >
//         <option value="standard">Standard</option>
//         <option value="seasonal">Seasonal</option>
//         <option value="weight">Weight</option>
//       </select>

//       <label htmlFor="weight">Weight (kg):</label>
//       <input
//         type="number"
//         id="weight"
//         name="weight"
//         step="0.01"
//         onChange={handleWeight}
//       />

//       <label htmlFor="totalPrice">Total Price ($):</label>
//       <input
//         type="number"
//         id="totalPrice"
//         name="totalPrice"
//         onChange={handlePrice}
//         step="0.01"
//       />

//       <div>
//         Discounted price:<span id="discountedPrice">{discountedPrice}</span>
//       </div>
//     </div>
//   );
// };

//////

export default FocusableInput;
