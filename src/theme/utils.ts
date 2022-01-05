import config from "../config";
import { transitionDurations } from "./transitions";

export const navBaseDelay = 100; // ms
export const navDelay =
  navBaseDelay * config.navLinks.length + transitionDurations.fade;
