import {
  STYLE_COMBO,
  STYLE_DIV,
  STYLE_FOOTER,
  STYLE_HEADER,
  STYLE_PICTURE,
  STYLE_TEXT,
  STYLE_CONTANER,
} from "./StandartStyle";

export const standartContainer = {
  id: 0,
  name: "Body",
  type: "container",
  dom: {
    container: "div"
  },
  style: {
    container: STYLE_CONTANER
  },
};

export const standartElements = [
  {
    id: 1,
    name: "header",
    type: "header",
    dom: {
      container: "header",
      children: "h1",
    },
    style: {
      container: STYLE_HEADER,
      children: {},
    },
  },
  {
    id: 2,
    name: "text",
    type: "text",
    dom: {
      container: "div",
      children: "p",
    },
    content: {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales, ex posuere posuere egestas, erat neque pellentesque enim, et eleifend nisi libero id felis. Integer iaculis bibendum ornare. Nulla vel arcu consequat, sagittis leo et, eleifend odio. Nam sit amet dictum lectus. Donec tempor ac enim congue tincidunt. Maecenas interdum nisi in ante suscipit, ac viverra erat rhoncus. Pellentesque dignissim faucibus dictum. Donec felis nisl, tempus id ipsum quis, aliquam lacinia sapien. Morbi vel augue vel neque faucibus consectetur. Nullam vitae lectus tempus libero dapibus aliquam. Praesent interdum nulla et mollis ullamcorper. Nunc blandit nulla ac imperdiet faucibus. Proin tempor fermentum iaculis.",
    },
    style: {
      container: STYLE_TEXT,
      children: {},
    },
  },
  {
    id: 3,
    name: "picture",
    type: "picture",
    dom: {
      container: "div",
      children: "img",
    },
    content: {
      src:
        "https://www.freemockupworld.com/wp-content/uploads/2019/08/Save-Date-Invitation-Card-Free-Mockup.jpg",
    },
    style: {
      container: STYLE_PICTURE,
    },
  },
  {
    id: 4,
    name: "footer",
    type: "footer",
    dom: { container: "footer" },
    style: {
      container: STYLE_FOOTER,
      children: {},
    },
  },
  {
    id: 5,
    name: "block",
    type: "block",
    dom: { container: "div" },
    style: {
      container: STYLE_DIV,
      children: {},
    },
  },
  {
    id: 6,
    name: "picture + text",
    type: "section",
    dom: {
      container: "div",
      children: ["img", "p"],
    },
    content: {
      src: "https://inscribemag.com/wp-content/uploads-2/cup-mockup-1.jpg",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales, ex posuere posuere egestas, erat neque pellentesque enim, et eleifend nisi libero id felis. Integer iaculis bibendum ornare. Nulla vel arcu consequat, sagittis leo et, eleifend odio. Nam sit amet dictum lectus. Donec tempor ac enim congue tincidunt. Maecenas interdum nisi in ante suscipit, ac viverra erat rhoncus. Pellentesque dignissim faucibus dictum. Donec felis nisl, tempus id ipsum quis, aliquam lacinia sapien. Morbi vel augue vel neque faucibus consectetur. Nullam vitae lectus tempus libero dapibus aliquam. Praesent interdum nulla et mollis ullamcorper. Nunc blandit nulla ac imperdiet faucibus. Proin tempor fermentum iaculis.",
    },
    style: {
      container: STYLE_COMBO,
      children: {},
    },
  },
];
