import { STYLE_COMBO, STYLE_DIV, STYLE_FOOTER, STYLE_HEADER, STYLE_PICTURE, STYLE_TEXT } from './StandartStyle';

export const standartElements = [
    { id: 1, name: 'header', type: 'header', dom: 'header', style: STYLE_HEADER},
    { id: 2, name: 'text', type: 'text', dom: 'p', style: STYLE_TEXT},
    { id: 3, name: 'picture', type: 'img', dom: 'img', style: STYLE_PICTURE},
    { id: 4, name: 'footer', type: 'footer', dom: 'footer', style: STYLE_FOOTER},
    { id: 5, name: 'block', type: 'block', dom: 'div', style: STYLE_DIV},
    { id: 6, name: 'picture + text', type: 'section', dom: 'section', style: STYLE_COMBO},
    { id: 7, name: 'link', type: 'link', dom: 'a', style: {}}
]