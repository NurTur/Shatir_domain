'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styles = require('@mantine/styles');
var utils = require('@mantine/utils');
var Badge_styles = require('./Badge.styles.js');
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
  variant: "light",
  size: "md",
  radius: "xl"
};
const _Badge = React.forwardRef((props, ref) => {
  const _a = styles.useComponentDefaultProps("Badge", defaultProps, props), {
    className,
    color,
    variant,
    fullWidth,
    children,
    size,
    leftSection,
    rightSection,
    radius,
    gradient,
    classNames,
    styles: styles$1,
    unstyled
  } = _a, others = __objRest(_a, [
    "className",
    "color",
    "variant",
    "fullWidth",
    "children",
    "size",
    "leftSection",
    "rightSection",
    "radius",
    "gradient",
    "classNames",
    "styles",
    "unstyled"
  ]);
  const { classes, cx } = Badge_styles['default']({ fullWidth, color, radius, gradient }, { classNames, styles: styles$1, name: "Badge", unstyled, variant, size });
  return /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues({
    className: cx(classes.root, className),
    ref
  }, others), leftSection && /* @__PURE__ */ React__default.createElement("span", {
    className: classes.leftSection
  }, leftSection), /* @__PURE__ */ React__default.createElement("span", {
    className: classes.inner
  }, children), rightSection && /* @__PURE__ */ React__default.createElement("span", {
    className: classes.rightSection
  }, rightSection));
});
_Badge.displayName = "@mantine/core/Badge";
const Badge = utils.createPolymorphicComponent(_Badge);

exports.Badge = Badge;
exports._Badge = _Badge;
//# sourceMappingURL=Badge.js.map