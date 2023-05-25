const vnode = {
  tag: "div",
  props: {
    class: "content-box",
  },
  children: [
    {
      tag: "div",
      props: {
        id: "test",
        onClick: () => console.log("click"),
      },
      children: "内容1",
    },
    {
      tag: "div",
      props: {
        class: "yyyy",
      },
      children: "内容2",
    },
  ],
};

var App = function () {
  return {
    tag: "div",
    props: {
      class: "content-box",
    },
    children: [
      {
        tag: "div",
        props: {
          id: "test",
          onClick: () => console.log("click"),
        },
        children: "函数组件  内容1",
      },
      {
        tag: "div",
        props: {
          class: "yyyy",
        },
        children: "函数组件  内容2",
      },
    ],
  };
};
var componentVnode = {
  tag: "div",
  children: [
    {
      tag: App,
    },
    {
      tag: "div",
      children: "xxxxxxxxxxx",
    },
  ],
};
function mountElement(vnode: any, parentDom: HTMLElement) {
  const dom = document.createElement(vnode.tag);
  for (const prop in vnode.props) {
    if (Object.hasOwnProperty.call(vnode.props, prop)) {
      const element = vnode.props[prop];
      // 事件
      if (/^on/.test(prop)) {
        dom.addEventListener(prop.slice(2).toLowerCase(), element);
      } else {
        dom.setAttribute(prop, element);
      }
    }
  }
  if (typeof vnode.children === "string") {
    const text = document.createTextNode(vnode.children);
    dom.appendChild(text);
  }
  if (Array.isArray(vnode.children)) {
    vnode.children.forEach((item: any) => renderer(item, dom));
  }
  parentDom.appendChild(dom);
}

export function renderer(vnode: any, parentDom: HTMLElement) {
  if (typeof vnode.tag === "string") {
    mountElement(vnode, parentDom);
  }
  if (typeof vnode.tag === "function") {
    mountElement(vnode.tag(), parentDom);
  }
}
renderer(componentVnode, document.body);
