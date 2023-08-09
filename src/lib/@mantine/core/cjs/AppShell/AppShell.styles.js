'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@mantine/styles');

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
function getPositionStyles(props, theme) {
  const padding = styles.getSize({ size: props.padding, sizes: theme.spacing });
  const navbarOffset = props.navbarOffsetBreakpoint ? styles.getSize({ size: props.navbarOffsetBreakpoint, sizes: theme.breakpoints }) : null;
  const asideOffset = props.asideOffsetBreakpoint ? styles.getSize({ size: props.asideOffsetBreakpoint, sizes: theme.breakpoints }) : null;
  if (!props.fixed) {
    return { padding };
  }
  const navbarBreakpointValue = styles.getBreakpointValue(navbarOffset);
  const asideBreakpointValue = styles.getBreakpointValue(asideOffset);
  return __spreadValues({
    minHeight: "100vh",
    paddingTop: `calc(var(--mantine-header-height, 0px) + ${padding})`,
    paddingBottom: `calc(var(--mantine-footer-height, 0px) + ${padding})`,
    paddingLeft: `calc(var(--mantine-navbar-width, 0px) + ${padding})`,
    paddingRight: `calc(var(--mantine-aside-width, 0px) + ${padding})`
  }, navbarBreakpointValue === asideBreakpointValue ? {
    [`@media (max-width: ${styles.em(navbarBreakpointValue - 1)})`]: {
      paddingLeft: padding,
      paddingRight: padding
    }
  } : {
    [`@media (max-width: ${styles.em(navbarBreakpointValue - 1)})`]: {
      paddingLeft: padding
    },
    [`@media (max-width: ${styles.em(asideBreakpointValue - 1)})`]: {
      paddingRight: padding
    }
  });
}
var useStyles = styles.createStyles((theme, props) => ({
  root: {
    boxSizing: "border-box"
  },
  body: {
    display: "flex",
    boxSizing: "border-box"
  },
  main: __spreadValues({
    flex: 1,
    width: "100vw",
    boxSizing: "border-box"
  }, getPositionStyles(props, theme))
}));

exports.default = useStyles;
//# sourceMappingURL=AppShell.styles.js.map
