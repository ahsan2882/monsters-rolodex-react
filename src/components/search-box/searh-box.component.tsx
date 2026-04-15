// import { Component } from "react";
import './search-box.styles.css';

interface SearchBoxProps {
  customClassName: string;
  placeholder: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBox({ customClassName, placeholder, onChangeHandler }: SearchBoxProps) {
  return <input className={customClassName} type="search" placeholder={placeholder} onChange={onChangeHandler} />;
}

// class SearchBox extends Component<SearchBoxProps> {
//   render() {
//     const { customClassName, placeholder, onChangeHandler } = this.props;
//     return (
//       <>
//         <input
//           className={customClassName}
//           type="search"
//           placeholder={placeholder}
//           onChange={onChangeHandler}
//         />
//       </>
//     );
//   }
// }

// export default SearchBox;
