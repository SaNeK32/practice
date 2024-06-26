import DivUnderSearchBar from './DivUnderSearchBar';
import Nav from './Nav';
import NewProject from './NewProject';
import SearchBar from './SearchBar';
import Section from './Sections/Section';
import './homePage.css';
import './nav.css';
import React, { useState } from 'react';
// import './Sections/section.css';
import '../homePage/Sections/sections.css'

const initialData = [{ name: '1' }, { name: '2' }, { name: '3' }];

function HomePage(){

    const [selectAll, setSelectAll] = useState(false);
    const [data, setData] = useState(initialData);
    const [checkboxStates, setCheckboxStates] = useState(
        data.reduce((acc, item) => {
            acc[item.name] = false;
            return acc;
        }, {})
    );

    const [searchTerm, setSearchTerm] = useState('');

    const handleSelectAllChange = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);

        const newCheckboxStates = {};
        for (const key in checkboxStates) {
            newCheckboxStates[key] = newSelectAll;
        }
        setCheckboxStates(newCheckboxStates);
    };

    const handleCheckboxChange = (name) => {
        const newCheckboxStates = {
            ...checkboxStates,
            [name]: !checkboxStates[name],
        };
        setCheckboxStates(newCheckboxStates);

        if (Object.values(newCheckboxStates).every((value) => value)) {
            setSelectAll(true);
        } else {
            setSelectAll(false);
        }
    };

    const handleDeleteSelected = () => {
        const newData = data.filter(item => !checkboxStates[item.name]);
        setData(newData);

        const newCheckboxStates = { ...checkboxStates };
        for (const key in checkboxStates) {
            if (checkboxStates[key]) {
                delete newCheckboxStates[key];
            }
        }
        setCheckboxStates(newCheckboxStates);

        setSelectAll(false);
    };

    const handleAddSection = (name) => {
        if (data.some(item => item.name === name)) {
            alert('Name is already taken');
            return;
        }

        const newData = [...data, { name }];
        setData(newData);

        const newCheckboxStates = {
            ...checkboxStates,
            [name]: false
        };
        setCheckboxStates(newCheckboxStates);
    };

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    const filteredData = searchTerm === '' ? data : data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));


    return(
        <>
         <Nav />
         <NewProject 
            onAddSection={handleAddSection}
         />
         <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange}/>
         <DivUnderSearchBar 
            selectAll={selectAll} 
            onChange={handleSelectAllChange} 
            onDeleteSelected={handleDeleteSelected}
            countItems={data.length}
        />
         <div className='sectionsBlock'>
            {filteredData.map((item) => (
                <Section 
                    key={item.name}
                    name={item.name}
                    checked={checkboxStates[item.name]}
                    onCheckboxChange={() => handleCheckboxChange(item.name)}
                />
            ))}
         </div>
        </>
    );
}

export default HomePage;