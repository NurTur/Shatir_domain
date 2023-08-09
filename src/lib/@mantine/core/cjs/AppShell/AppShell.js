'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styles = require('@mantine/styles');
var AppShell_context = require('./AppShell.context.js');
var AppShell_styles = require('./AppShell.styles.js');
var Box = require('../Box/Box.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  fixed: true,
  padding: "md"
};
const AppShell = React.forwardRef((props, ref) => {
  const _a = styles.useComponentDefaultProps("AppShell", defaultProps, props), {
    children,
    navbar,
    header,
    footer,
    aside,
    fixed,
    zIndex,
    padding,
    navbarOffsetBreakpoint,
    asideOffsetBreakpoint,
    className,
    styles: styles$1,
    classNames,
    unstyled,
    hidden,
    layout,
    variant
  } = _a, others = __objRest(_a, [
    "children",
    "navbar",
    "header",
    "footer",
    "aside",
    "fixed",
    "zIndex",
    "padding",
    "navbarOffsetBreakpoint",
    "asideOffsetBreakpoint",
    "className",
    "styles",
    "classNames",
    "unstyled",
    "hidden",
    "layout",
    "variant"
  ]);
  const { classes, cx } = AppShell_styles['default']({ padding, fixed, navbarOffsetBreakpoint, asideOffsetBreakpoint }, { styles: styles$1, classNames, unstyled, name: "AppShell", variant });
  if (hidden) {
    return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, children);
  }
  return /* @__PURE__ */ React__default.createElement(AppShell_context.AppShellProvider, {
    value: { fixed, zIndex, layout }
  }, /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues({
    className: cx(classes.root, className),
    ref
  }, others), header, /* @__PURE__ */ React__default.createElement("div", {
    className: classes.body
  }, navbar, /* @__PURE__ */ React__default.createElement("main", {
    className: classes.main
  }, children), aside), footer));
});
AppShell.displayName = "@mantine/core/AppShell";

exports.AppShell = AppShell;
//# sourceMappingURL=AppShell.js.map
