import React, { useContext, useState } from "react";
import { ElementContext } from "../../../../context/new-elements/elementContext";


export const PlaceSetting = ( {elem} ) => {

    const { changeElement } = useContext(ElementContext);
    const [paddingsIsOpen, setPaddingsIsOpen] = useState(false);

    const textAlignArr = ['left', 'center', 'right', 'justify'];
    const textAlignOptions = textAlignArr.map( (v, i) => (
        <option key={i}>{v}</option>
    ));

    const onChangeTextAlignHandler = (eo) => {
        let newStyledElem = {
          ...elem,
          style: {
            ...elem.style,
            container: {
              ...elem.style.container,
              textAlign: eo.target.value,
            },
          },
        };
        changeElement(newStyledElem);
      };

      const openHandler = () => setPaddingsIsOpen(!paddingsIsOpen);

    return (
        <div className='place-setting'>
            <div className='place-setting__text-align'>
                <label 
                    htmlFor='select-text-align'
                    className='form-label'
                >
                    Text align
                </label>
                <select
                    className='form-control form-control-sm'
                    id='select-text-align'
                    value={elem.style.container.textAlign || 'left'} 
                    onChange={onChangeTextAlignHandler} 
                >
                    {textAlignOptions}
                </select>
            </div>
            <label
                className='form-label'
                onClick={openHandler}
            >
                Paddings ...{paddingsIsOpen ? 'X' : 'V' }
            </label>
            {
                paddingsIsOpen &&
                <div className='place-setting__paddings'>
                    <input
                        className='form-control form-control-sm'
                        type='text'
                        id='input-padding-top'
                    />
                    <input
                        className='form-control form-control-sm'
                        type='text'
                        id='input-padding-left'
                    />
                    <input
                        className='form-control form-control-sm'
                        type='text'
                        id='input-padding-right'
                    />
                    <input
                        className='form-control form-control-sm'
                        type='text'
                        id='input-padding-bottom'
                    />
                </div>
            }
        </div>
    )
}