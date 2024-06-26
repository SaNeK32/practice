import React, { useState } from 'react';
import ModalAdd from './modals/ModalAdd';

function NewProject({onAddSection}){

    // const [newName, setNewName] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => {setModalVisible(true);}
    const closeModal = () => setModalVisible(false);

    return(
        <>
            <button className="newProjectButton" onClick={openModal}>
            + New Project
            </button>
            <ModalAdd 
                isVisible={isModalVisible}
                onClose={closeModal}
                onAddSection={onAddSection}
            /> 
        </>
    );
}

export default NewProject;