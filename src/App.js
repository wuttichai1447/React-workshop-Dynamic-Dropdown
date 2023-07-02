import React, { useState } from 'react';
import './App.css';
import DropdownComponent from './components/DropdownComponent';
import FoodComponent from './components/FoodComponent';
import MenuData from './data/MenuData';

function App() {
  const [foods, setFoods] = useState(MenuData);
  const [word, setWord] = useState('');
  const [dataFilter, setDataFilter] = useState(['foodName']);

  const changeFoodData = (e) => {
    const category = e.target.value;
    if (category === 'เมนูทั้งหมด') {
      setFoods(MenuData);
    } else {
      const result = MenuData.filter((element) => {
        return element.menu === category;
      });
      setFoods(result);
    }
  };

  const searchKeyword = (e) => {
    const searchKeyword = e.target.value.toLowerCase();

    if (searchKeyword === '') {
      setFoods(MenuData);
    } else {
      const result = MenuData.filter((element) => {
        return element.menu.toLowerCase().includes(searchKeyword);
      });
      setFoods(result);
    }
  };

  const searchCountries = (countries) => {
    return countries.filter((item) => {
      return dataFilter.some((filter) => {
        return item[filter].indexOf(word) > -1;
      });
    });
  };

  const filteredFoods = searchCountries(foods);

  return (
    <div className="container">
      <DropdownComponent chanfoodData={changeFoodData} />
      <div className="app">
        <input
          placeholder="ค้นหาเมนูอาหาร"
          className="search-bar"
          value={word}
          onChange={(event) => setWord(event.target.value)}
        />
      </div>

      <div className="context">
        <div className="content">
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food, index) => {
              return <FoodComponent key={index} {...food} />;
            }
            )
          ) : (
            <p>ไม่พบเมนูที่ค้นหา</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
