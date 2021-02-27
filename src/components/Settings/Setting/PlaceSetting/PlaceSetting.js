import React from "react";


export const PlaceSetting = () => {

    return (
        <div className='place-setting'>
            <div className='place-setting__font-size'>
                <label 
                    htmlFor='input-place-size'
                    className='form-label'
                >
                    Place size
                </label>
                <input
                    className='form-control form-control-sm' 
                    list='place-sizes'
                    defaultValue='20'
                    type='select'
                    id='input-place-size'
                />
                <datalist id='place-sizes'>
                    {fontSizesOptions}
                </datalist>
            </div>
        </div>
    )
}