import React, { useState } from 'react';


export const FontSetting = () => {

    const fontSizesArr = [4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 32, 40];
    const fontWeightArr = [400, 500, 600, 800, 900];
    const fontStylesArr = ['normal', 'italic'];

    const fontSizesOptions = fontSizesArr.map( (v, i) => <option key={i} value={v} />);
    const fontWeightOptions = fontWeightArr.map( (v, i) => <option key={i} value={v} />);
    const fontStylesOptions = fontStylesArr.map( (v, i) => <option key={i}>{v}</option>);

    return (
        <div className='font-setting'>
            <div className='font-setting__font-size'>
                <label 
                    htmlFor='input-font-size'
                    className='form-label'
                >
                    Font size
                </label>
                <input
                    className='form-control form-control-sm' 
                    list='font-sizes'
                    defaultValue='20'
                    type='select'
                    id='input-font-size'
                />
                <datalist id='font-sizes'>
                    {fontSizesOptions}
                </datalist>
            </div>
            <div className='font-setting__font-weight'>
                <label 
                    htmlFor='input-font-weight'
                    className='form-label'
                >
                    Font weight
                </label>
                <input 
                    className='form-control form-control-sm'
                    list='font-weights' 
                    defaultValue='400'
                    type='select'
                    id='input-font-weight'
                />
                <datalist id='font-weights'>
                    {fontWeightOptions}
                </datalist>
            </div>
            <div className='font-setting__font-style'>
                <label 
                    htmlFor='select-font-style'
                    className='form-label'
                >
                    Font style
                </label>
                <select 
                    id='select-font-style'
                    className='form-control form-control-sm'
                >
                    {fontStylesOptions}
                </select>
            </div>
        </div>
    )
}