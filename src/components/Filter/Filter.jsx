// import css from './Filter.module.css';
// import logo from '../../images/logo_desktop.png';
// import { useState } from 'react';
// import { useLocation, useSearchParams } from 'react-router-dom';

// const Filter = () => {
//   const searchQuery = useSearchParams.get('search') ?? '';

//   const [search, setSearch] = useState(searchQuery);

//   const handleSearch = event => {
//     setSearch(event.target.value);
//     // searchPosts(event.target.value);

//     console.log(event.target.value);
//   };

//   return (
//     <>
//       <img src={logo} alt=""></img>
//       <input
//         type="text"
//         // className="form-control mb-4"
//         placeholder="Type to search..."
//         value={search}
//         onChange={handleSearch}
//       />

//       {/* <label>
//         <input
//           className={css.input}
//           type="text"
//           name="filter"
//           placeholder="Filter by name..."
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           // value={filter}
//           onChange="{}"
//         />
//       </label> */}
//     </>
//   );
// };

// export default Filter;
