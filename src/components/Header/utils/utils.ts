import { IMG_URL } from "../../../constants";
import { isBrowser, isMobile } from "react-device-detect";

export const getBackgroundSrc = (isDarkTheme: boolean) => {
  switch (true) {
    case isDarkTheme && isBrowser: {
      return `${IMG_URL}/bg-desktop-dark.jpg`;
    }
    case isDarkTheme && isMobile: {
      return `${IMG_URL}/bg-mobile-dark.jpg`;
    }
    case !isDarkTheme && isBrowser: {
      return `${IMG_URL}/bg-desktop-light.jpg`;
    }
    case !isDarkTheme && isMobile: {
      return `${IMG_URL}/bg-mobile-light.jpg`;
    }
  }
};
