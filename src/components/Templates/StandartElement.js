import {
  STYLE_COMBO,
  STYLE_DIV,
  STYLE_FOOTER,
  STYLE_HEADER,
  STYLE_PICTURE,
  STYLE_TEXT,
} from "./StandartStyle";

export const standartElements = [
  {
    id: 1,
    name: "header",
    type: "header",
    dom: {
      container: "header",
      children: "h1",
    },
    style: STYLE_HEADER,
  },
  {
    id: 2,
    name: "text",
    type: "text",
    dom: {
      container: "div",
      children: "p"
    },
    style: STYLE_TEXT,
  },
  {
    id: 3,
    name: "picture",
    type: "picture",
    dom: {
      container: 'div',
      children: 'img'
    },
    style: STYLE_PICTURE,
  },
  {
    id: 4,
    name: "footer",
    type: "footer",
    dom: { container: "footer" },
    style: STYLE_FOOTER,
  },
  {
    id: 5,
    name: "block",
    type: "block",
    dom: { container: "div" },
    style: STYLE_DIV,
  },
  {
    id: 6,
    name: "picture + text",
    type: "section",
    dom: {
      container: "div",
      children: ["img", "p"],
    },
    style: STYLE_COMBO,
  },
];
