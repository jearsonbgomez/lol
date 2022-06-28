import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [employees, setEmployees] = useState([]);

  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setEmployees(users));
  }, []);

  useEffect(() => {
    const results = employees.filter(employee => employee.name.toLowerCase().includes(searchField))
    setFilteredEmployees(results);
  }, [searchField, employees]);

  const onSearchChange = (event) => {
    const search = event.target.value.toLowerCase();
    setSearchField(search);
  }

  return (
    <div className="App">
      <h1 className='app-title'>List of Employees</h1>
      <SearchBox 
        onSearchChange={onSearchChange} 
        placeholder="search employees" 
        className="search-box-employees"
      />
      <CardList employees={filteredEmployees}/>
    </div>
  );
}

export default App;
