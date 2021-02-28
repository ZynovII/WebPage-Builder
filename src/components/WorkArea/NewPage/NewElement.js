import React, { useContext } from 'react';
import { ElementContext } from '../../../context/new-elements/elementContext';
import { Footer } from './elements/Footer';
import { Header } from './elements/Header';
import { PicAndText } from './elements/PicAndText';
import { Text } from './elements/Text';


export const NewElement = ( {el, index} ) => {

    const {elements, changeOrder, selectedElementID, selectElement} = useContext(ElementContext);

    let domElement;
    switch (el.type) {
        case 'header':
            domElement = <Header style={el.style}/>;
            break;
        case 'section':
            domElement = <PicAndText style={el.style} />;
            break;
        case 'footer':
            domElement = <Footer style={el.style}/>;
            break;
        case 'text':
            domElement = <Text style={el.style} />;
            break;
        default:
            break;
    };

    const swap = (curr, next) => {
        let newOrderedArr = elements.slice();
        newOrderedArr[curr] = newOrderedArr.splice(next, 1, newOrderedArr[curr])[0];
        return newOrderedArr;
    }

    const upHandler = () => {
        if(index === 0) return;
        changeOrder( swap(index, index-1) );
    }

    const downHandler = () => {
        if(index === elements.length-1) return;
        changeOrder( swap(index, index+1) );
    }

    const clickHandler = ( eo, id ) => {
        eo.stopPropagation();
        selectElement(id);
    }

    return (
        <div 
            key={el.id}
            className={selectedElementID !== el.id ? 'new-element' : 'new-element_selected'}
            onClick={ (eo) => clickHandler(eo, el.id) }
        >
            <span>
                {
                    selectedElementID === el.id &&
                    <>
                        <button onClick={upHandler}>Move Up</button>
                        <button onClick={downHandler}>Move Down</button>
                    </>
                }
                {el.name}
            </span>
            {domElement}
        </div>
    )
}