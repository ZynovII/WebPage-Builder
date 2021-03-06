import React, { useContext } from "react";
import { ElementContext } from "../../../../context/new-elements/elementContext";


export const PlaceSetting = ( {elem} ) => {

    const { changeElement } = useContext(ElementContext);

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
        </div>
    )
}