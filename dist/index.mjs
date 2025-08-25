var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __glob = (map) => (path) => {
  var fn = map[path];
  if (fn) return fn();
  throw new Error("Module not found in bundle: " + path);
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/styles/stylesMap.json
var require_stylesMap = __commonJS({
  "src/styles/stylesMap.json"(exports, module) {
    module.exports = {
      futuristic: "futuristic.module.css",
      simple: null
    };
  }
});

// src/styles/futuristic.module.css
var require_futuristic = __commonJS({
  "src/styles/futuristic.module.css"(exports, module) {
    module.exports = "./futuristic.module-DOUUSJ7B.module.css";
  }
});

// require("./**/*") in src/styles/DynamicLoad.ts
var globRequire;
var init_ = __esm({
  'require("./**/*") in src/styles/DynamicLoad.ts'() {
    globRequire = __glob({
      "./DynamicLoad.ts": () => (init_DynamicLoad(), __toCommonJS(DynamicLoad_exports)),
      "./futuristic.module.css": () => require_futuristic(),
      "./stylesMap.json": () => require_stylesMap()
    });
  }
});

// src/styles/DynamicLoad.ts
var DynamicLoad_exports = {};
__export(DynamicLoad_exports, {
  styleModules: () => styleModules
});
var import_stylesMap, resolvedModules, styleModules;
var init_DynamicLoad = __esm({
  "src/styles/DynamicLoad.ts"() {
    "use strict";
    import_stylesMap = __toESM(require_stylesMap());
    init_();
    resolvedModules = Object.entries(import_stylesMap.default).reduce(
      (acc, [key, file]) => {
        if (file === null) {
          acc[key] = null;
        } else {
          acc[key] = globRequire(`./${file}`);
        }
        return acc;
      },
      {}
    );
    styleModules = resolvedModules;
  }
});

// src/hooks/useForm.tsx
import {
  useState as useState2
} from "react";

// src/core/schema.tsx
import React, { useState } from "react";

// src/Forms/InputContainer.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var InputContainer = ({ label, children }) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0 mb-4", children: [
  /* @__PURE__ */ jsx("label", { className: "font-medium text-sm", children: label }),
  /* @__PURE__ */ jsx("div", { className: "ml-2", children })
] });

// src/Forms/Input.tsx
init_DynamicLoad();
import { jsx as jsx2 } from "react/jsx-runtime";
var Input = ({
  type,
  styleType = "simple",
  ...props
}) => {
  switch (type) {
    case "text":
      return /* @__PURE__ */ jsx2(
        InputText,
        {
          ...props,
          moduleStyle: styleModules[styleType],
          value: props.value,
          onChange: props.onChange
        }
      );
    case "date":
      return /* @__PURE__ */ jsx2(
        InputDate,
        {
          ...props,
          moduleStyle: styleModules[styleType],
          value: props.value,
          onChange: props.onChange
        }
      );
    case "email":
      return /* @__PURE__ */ jsx2(
        InputEmail,
        {
          ...props,
          moduleStyle: styleModules[styleType],
          value: props.value,
          onChange: props.onChange
        }
      );
    case "file":
      return /* @__PURE__ */ jsx2(
        InputFile,
        {
          ...props,
          moduleStyle: styleModules[styleType],
          onChange: props.onChange
        }
      );
    case "number":
      return /* @__PURE__ */ jsx2(
        InputNumber,
        {
          ...props,
          moduleStyle: styleModules[styleType],
          value: props.value,
          onChange: props.onChange
        }
      );
    case "password":
      return /* @__PURE__ */ jsx2(
        InputPassword,
        {
          ...props,
          moduleStyle: styleModules[styleType],
          value: props.value,
          onChange: props.onChange
        }
      );
    case "phone":
      return /* @__PURE__ */ jsx2(
        InputPhone,
        {
          ...props,
          moduleStyle: styleModules[styleType],
          value: props.value,
          onChange: props.onChange
        }
      );
    default:
      return null;
  }
};
var InputText = ({
  label,
  value,
  moduleStyle,
  onChange,
  placeholder,
  className
}) => /* @__PURE__ */ jsx2(InputContainer, { label, children: /* @__PURE__ */ jsx2(
  "input",
  {
    className: `${moduleStyle?.st ?? ""} !border !border-[#00F3FF] !rounded-lg ${className ?? ""}`,
    type: "text",
    value,
    placeholder,
    onChange: (e) => onChange(e.target.value)
  }
) });
var InputDate = ({
  label,
  value,
  moduleStyle,
  onChange,
  className
}) => /* @__PURE__ */ jsx2(InputContainer, { label, children: /* @__PURE__ */ jsx2(
  "input",
  {
    className: `${moduleStyle?.st ?? ""} !border !border-[#00F3FF] !rounded-lg ${className ?? ""}`,
    type: "date",
    value,
    onChange: (e) => onChange(e.target.value)
  }
) });
var InputEmail = ({
  label,
  value,
  moduleStyle,
  onChange,
  placeholder,
  className
}) => /* @__PURE__ */ jsx2(InputContainer, { label, children: /* @__PURE__ */ jsx2(
  "input",
  {
    className: `${moduleStyle?.st ?? ""} !border !border-[#00F3FF] !rounded-lg ${className ?? ""}`,
    type: "email",
    value,
    placeholder,
    onChange: (e) => onChange(e.target.value)
  }
) });
var InputFile = ({
  label,
  moduleStyle,
  onChange,
  className
}) => /* @__PURE__ */ jsx2(InputContainer, { label, children: /* @__PURE__ */ jsx2(
  "input",
  {
    className: `${moduleStyle?.st ?? ""} !border !border-[#00F3FF] !rounded-lg ${className ?? ""}`,
    type: "file",
    onChange: (e) => onChange(e.target.files ? e.target.files[0] : null)
  }
) });
var InputNumber = ({
  label,
  value,
  moduleStyle,
  onChange,
  placeholder,
  className
}) => /* @__PURE__ */ jsx2(InputContainer, { label, children: /* @__PURE__ */ jsx2(
  "input",
  {
    className: `${moduleStyle?.st ?? ""} !border !border-[#00F3FF] !rounded-lg ${className ?? ""}`,
    type: "number",
    value,
    placeholder,
    onChange: (e) => onChange(Number(e.target.value))
  }
) });
var InputPassword = ({
  label,
  value,
  moduleStyle,
  onChange,
  placeholder,
  className
}) => /* @__PURE__ */ jsx2(InputContainer, { label, children: /* @__PURE__ */ jsx2(
  "input",
  {
    className: `${moduleStyle?.st ?? ""} !border !border-[#00F3FF] !rounded-lg ${className ?? ""}`,
    type: "password",
    value,
    placeholder,
    onChange: (e) => onChange(e.target.value)
  }
) });
var InputPhone = ({
  label,
  value,
  moduleStyle,
  onChange,
  placeholder,
  className
}) => /* @__PURE__ */ jsx2(InputContainer, { label, children: /* @__PURE__ */ jsx2(
  "input",
  {
    className: `${moduleStyle?.st ?? ""} !border !border-[#00F3FF] !rounded-lg ${className ?? ""}`,
    type: "tel",
    value,
    placeholder,
    onChange: (e) => onChange(e.target.value)
  }
) });

// src/Forms/TextArea.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var TextArea = ({
  label,
  value,
  onChange,
  placeholder
}) => /* @__PURE__ */ jsx3(InputContainer, { label, children: /* @__PURE__ */ jsx3(
  "textarea",
  {
    value,
    placeholder,
    onChange: (e) => onChange(e.target.value)
  }
) });

// src/Forms/Select.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Select = ({ label, options, value, onChange }) => /* @__PURE__ */ jsx4(InputContainer, { label, children: /* @__PURE__ */ jsx4("select", { value, onChange: (e) => onChange(e.target.value), children: options.map((opt) => /* @__PURE__ */ jsx4("option", { value: opt.value, children: opt.text }, opt.value)) }) });

// src/Forms/Checkbox.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var Checkbox = ({ label, checked, onChange }) => /* @__PURE__ */ jsx5("div", { children: /* @__PURE__ */ jsxs2("label", { children: [
  /* @__PURE__ */ jsx5(
    "input",
    {
      type: "checkbox",
      checked,
      onChange: (e) => onChange(e.target.checked)
    }
  ),
  label
] }) });

// src/Forms/RadioGroup.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var RadioGroup = ({
  name,
  options,
  value,
  onChange
}) => /* @__PURE__ */ jsx6("div", { children: options.map((opt) => /* @__PURE__ */ jsxs3("label", { children: [
  /* @__PURE__ */ jsx6(
    "input",
    {
      type: "radio",
      name,
      value: opt.value,
      checked: value === opt.value,
      onChange: () => onChange(opt.value)
    }
  ),
  opt.label
] }, opt.value)) });

// src/Forms/Button.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var Button = ({ label, onClick, type = "button" }) => /* @__PURE__ */ jsx7("button", { type, onClick, children: label });

// src/core/schema.tsx
import { Fragment, jsx as jsx8 } from "react/jsx-runtime";
import { createElement } from "react";
var typeofInput = [
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week"
];
function renderElement(value, element, onChange = () => {
}, key) {
  if (!element) {
    return null;
  }
  const [tag, props] = Object.entries(element)[0];
  if (props.children) {
    if (typeof props.children === "string") {
      return React.createElement(tag, { ...props, key }, props.children);
    }
    return React.createElement(
      tag,
      { ...props, children: void 0, key },
      props.children.map(
        (child, idx) => renderElement(value, child, onChange, `${idx}`)
      )
    );
  }
  if (tag === "textarea" || props.type === "textarea") {
    return /* @__PURE__ */ createElement(
      TextArea,
      {
        ...props,
        onChange: (_val) => onChange(props.name, _val),
        value: value[props.name],
        key
      }
    );
  }
  if (tag === "select" || props.type === "select") {
    return /* @__PURE__ */ createElement(
      Select,
      {
        ...props,
        onChange: (_val) => onChange(props.name, _val),
        value: value[props.name],
        key
      }
    );
  }
  if (tag === "input" || typeofInput.includes(tag) || typeofInput.includes(props.type)) {
    if (tag === "checkbox" || props.type === "checkbox") {
      return /* @__PURE__ */ createElement(
        Checkbox,
        {
          ...props,
          onChange: (_val) => onChange(props.name, _val),
          value: value[props.name],
          key
        }
      );
    }
    if (tag === "button" || props.type === "button" || props.type === "submit" || props.type === "reset" || tag === "submit" || tag === "reset") {
      return /* @__PURE__ */ createElement(Button, { ...props, key });
    }
    return /* @__PURE__ */ createElement(
      Input,
      {
        ...props,
        type: props.type ?? tag,
        onChange: (_val) => onChange(props.name, _val),
        value: value[props.name],
        key
      }
    );
  }
  if (tag === "radio-group") {
    return /* @__PURE__ */ createElement(
      RadioGroup,
      {
        ...props,
        onChange: (_val) => onChange(props.name, _val),
        value: value[props.name],
        key
      }
    );
  }
  return React.createElement(tag, {
    ...props,
    key
  });
}
function useSchema(value, schema) {
  const [values, setValues] = useState(value);
  const handleChange = (name, value2) => {
    setValues((prev) => ({ ...prev, [name]: value2 }));
  };
  return [values, /* @__PURE__ */ jsx8(Fragment, { children: renderElement(values, schema, handleChange) })];
}

// src/hooks/useForm.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
function useForm(value, schema) {
  const [errors, setErrors] = useState2({});
  const [values, renderedForm] = useSchema(
    value,
    schema
  );
  const form = /* @__PURE__ */ jsx9("form", { children: renderedForm });
  return [form, values, errors];
}

// src/hooks/useCarousel.tsx
import { useState as useState3 } from "react";

// src/carousel/ActionIndexCarousel.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var ActionButton = ({
  onClick,
  disabled = false,
  children,
  ariaLabel
}) => /* @__PURE__ */ jsx10("button", { onClick, disabled, "aria-label": ariaLabel, children });

// src/carousel/IndexCarousel.tsx
import { jsx as jsx11, jsxs as jsxs4 } from "react/jsx-runtime";
var IndexCarousel = ({
  items,
  index,
  setIndex,
  next,
  prev,
  length,
  className = ""
}) => {
  if (items.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs4("div", { className: `flex justify-center gap-3 items-center ${className}`, children: [
    /* @__PURE__ */ jsx11(ActionButton, { onClick: () => setIndex(0), ariaLabel: "First", children: "<<" }),
    /* @__PURE__ */ jsx11(ActionButton, { onClick: prev, ariaLabel: "Previous", children: "<" }),
    /* @__PURE__ */ jsx11("div", { className: "flex gap-2", children: items.map((_, idx) => idx).filter((idx) => {
      if (length <= 3) {
        return true;
      }
      if (index === 0) {
        return idx < 3;
      }
      if (index === length - 1) {
        return idx >= length - 3;
      }
      return Math.abs(idx - index) <= 1;
    }).map((idx) => /* @__PURE__ */ jsx11(
      ActionButton,
      {
        onClick: () => setIndex(idx),
        ariaLabel: `Go to item ${idx + 1}`,
        children: /* @__PURE__ */ jsx11(
          "span",
          {
            className: `w-3 h-3 rounded-full border-2 inline-block ${idx === index ? "bg-blue-500 border-blue-500" : "bg-gray-300 border-gray-400"}`
          }
        )
      },
      idx
    )) }),
    /* @__PURE__ */ jsx11(ActionButton, { onClick: next, ariaLabel: "Next", children: ">" }),
    /* @__PURE__ */ jsx11(ActionButton, { onClick: () => setIndex(length - 1), ariaLabel: "Last", children: ">>" })
  ] });
};

// src/carousel/ItemCarousel.tsx
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
var ItemCarousel = ({ item }) => {
  if (item.type === "text") {
    return /* @__PURE__ */ jsx12("div", { className: "p-4 text-center", children: item.content });
  }
  if (item.type === "image") {
    return /* @__PURE__ */ jsx12(
      "img",
      {
        src: item.src,
        alt: item.alt || "carousel item",
        className: "w-full h-auto object-contain"
      }
    );
  }
  if (item.type === "mixed") {
    return /* @__PURE__ */ jsxs5("div", { className: "flex flex-col items-center gap-2 p-4", children: [
      /* @__PURE__ */ jsx12(
        "img",
        {
          src: item.src,
          alt: item.alt || "carousel item",
          className: "w-full h-auto object-contain"
        }
      ),
      /* @__PURE__ */ jsx12("div", { className: "text-center", children: item.content })
    ] });
  }
  return null;
};
var ItemCarousel_default = ItemCarousel;

// src/carousel/CarouselContainer.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var CarouselContainer = ({
  children,
  className = ""
}) => /* @__PURE__ */ jsx13(
  "div",
  {
    className: `w-full flex flex-col items-center justify-center ${className}`,
    children
  }
);

// src/carousel/Carousel.tsx
import { jsx as jsx14, jsxs as jsxs6 } from "react/jsx-runtime";
var Carousel = ({
  items,
  className = "",
  next = () => {
  },
  prev = () => {
  },
  index = 0,
  setIndex = () => {
  }
}) => {
  if (items.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs6(CarouselContainer, { className, children: [
    /* @__PURE__ */ jsx14("div", { className: "w-full h-full flex justify-center", children: /* @__PURE__ */ jsx14(ItemCarousel_default, { item: items[index] }) }),
    /* @__PURE__ */ jsx14(
      IndexCarousel,
      {
        items,
        index,
        setIndex,
        next,
        prev,
        length: items.length,
        className: "w-full"
      }
    )
  ] });
};

// src/hooks/useCarousel.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
function useCarousel({
  items,
  className = ""
}) {
  const [index, setIndex] = useState3(0);
  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const html = /* @__PURE__ */ jsx15(
    Carousel,
    {
      items,
      className,
      index,
      next,
      prev,
      setIndex
    }
  );
  return [
    html,
    index,
    {
      next,
      prev,
      setIndex,
      length: items.length
    }
  ];
}
export {
  useCarousel,
  useForm
};
//# sourceMappingURL=index.mjs.map