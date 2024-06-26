import React, { useState } from 'react';
import './modals.css'

function ModalDelete({isVisible, onDeleteSelected, closeModalDelete}){


    if (!isVisible) {
        return null;
    }

    return(
        <div className="modalDelete">
            <div className="modalDelete-content">
                <span className="closeDeleteModalX" onClick={closeModalDelete}>&times;</span>
                <span className='deleteText'>Delete</span>
                <span className='textModalDelete'>Are you sure you want to delete the selected projects?</span>
                <button onClick={closeModalDelete} className='closeDeleteModal'>Close</button>
                <button onClick={onDeleteSelected} className='deleteButtonModal'>Delete</button>
            </div>
        </div>
    );
}

export default ModalDelete;