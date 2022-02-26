import config from "../config";
import { transitionDurations } from "./transitions";

export const navBaseDelay = 100; // ms
export const navDelay =
  navBaseDelay * config.navLinks.length + transitionDurations.fade;

export const zIndexes = {
  modal: 1300,
  modalBackground: 1200,
};

export const hslColors = {
  bg: {
    light: {
      h: 0,
      s: 0, // percentage
      l: 100, // percentage
    },
    dark: {
      h: 208,
      s: 50, // percentage
      l: 10.2, // percentage
    },
  },
};
