import React, { useState } from 'react';

function ModalAdd({isVisible, onAddSection, onClose}){
    const [name, setName] = useState('');

    const handleAdd = () => {
        if (name.trim() !== '') {
            onAddSection(name);
            setName('');
            onClose();
        }
    };

    
    if (!isVisible) {
        return null;
    }

        return(
            <div className="modalAdd">
            <div className="modalAdd-content">
                <span className="closeAddModalX" onClick={onClose}>&times;</span>
                <span className='textNewProject'>New project</span>
                <span className='labelInp'>Name</span>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    id='nameinp'
                    className='inputName'
                    />
                <button onClick={onClose} className='closeAddModal'>Close</button>
                <button onClick={handleAdd} className='AddModalButton'>Add</button>
            </div>
        </div>
    );
}

export default ModalAdd;