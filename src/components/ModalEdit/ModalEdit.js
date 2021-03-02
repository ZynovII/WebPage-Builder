import React from 'react';

import './ModalEdit.scss';

export const ModalEdit = ( {element, cbEdittingHandler} ) => {

    return (
        <div className='modal-element_edit'>
            <div className='field-templates__tabs'>Editting</div>
            {
                'text' in element.content &&
                <div className='modal-element__text'>
                    <label htmlFor='edit-text'>Your text</label>
                    <textarea 
                        id='edit-text'
                        className='form-control'
                    ></textarea>
                </div>
            }
            {
                'src' in element.content &&
                <div className='modal-element__src'>
                    <label htmlFor='edit-src'>
                        Link to your image
                    </label>
                    <input 
                        type='text' 
                        id='edit-src' 
                        className='form-control'    
                    />
                </div>
            }
            <div>
                <button 
                    className='btn btn-success'
                    onClick={cbEdittingHandler}
                >
                    Ok
                </button>
            </div>
        </div>
    )
}