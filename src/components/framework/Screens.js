const screens = {
  mobileS: `(min-width: 320px) and (max-width: 480px)`,
  mobileSLandscape: `(min-width: 320px) and (max-width: 480px) and (orientation: landscape)`,

  mobileM: `(min-width: 481px) and (max-width: 767px)`,
  mobileMLandscape: `(min-width: 481px) and (max-width: 767px) and (orientation: landscape)`,

  tablet: `(min-width: 768px)`,
  tabletland: `(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)`,
  tabletPortrait: `(min-width: 768px) and (orientation: portrait)`,

  ipadProPortrait: `(min-width: 1024px) 
     and (max-height: 1366px) 
     and (orientation: portrait) 
     and (-webkit-min-device-pixel-ratio: 1.5)`,

  laptop: `(min-width: 1024px)`,

  desktop: `(min-width: 1281px)`,
}

export default screens
