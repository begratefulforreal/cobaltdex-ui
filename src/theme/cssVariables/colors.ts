export const darkColors: Record<keyof typeof colors, string> = {
  // app main bg color
  primary: '#00D2FF',
  secondary: '#3A6CF4',
  secondary10: 'rgba(58, 108, 244, 0.1)',

  // component color - card backgrounds
  backgroundDark: 'rgba(15, 23, 42, 0.95)',
  backgroundDark50: 'rgba(15, 23, 42, 0.5)',
  backgroundMedium: 'rgba(30, 41, 59, 0.8)',
  backgroundLight: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(51, 65, 85, 0.9) 100%)',
  backgroundLight50: 'rgba(30, 41, 59, 0.5)',
  backgroundLight30: 'rgba(51, 65, 85, 0.3)',
  backgroundTransparent12: 'rgba(0, 210, 255, 0.12)',
  backgroundTransparent07: 'rgba(0, 210, 255, 0.07)',
  backgroundTransparent10: 'rgba(58, 108, 244, 0.1)',

  // Input and selection backgrounds
  // inputBg: 'rgba(226, 232, 240, 0.95)',
  // inputActiveBg: 'rgba(226, 232, 240, 1)',
  // inputHoverBg: 'rgba(226, 232, 240, 0.98)',
  // selectBg: 'rgba(226, 232, 240, 0.95)',
  // selectActiveBg: 'rgba(226, 232, 240, 1)',

  // text colors for better visibility
  textPrimary: '#F8FAFC',
  textSecondary: '#E2E8F0',
  textTertiary: '#94A3B8',
  textRevertPrimary: '#0F172A',
  textRed: '#EF4444',
  textBlack: '#000000',

  textLink: '#00D2FF',
  textQuaternary: '#64748B',
  textQuinary: '#1E293B',
  textSenary: 'rgba(148, 163, 184, 0.5)',
  textSeptenary: '#3A6CF4',
  textPurple: '#8B5CF6',
  textPink: '#EC4899',

  // button
  buttonPrimary: '#00D2FF',
  buttonPrimary__01: '#00D2FF',
  buttonPrimary__02: '#3A6CF4',
  buttonSolidText: '#0F172A',
  buttonSecondary: 'rgba(0, 210, 255, 0.4)',

  // switch
  switchOn: '#00D2FF',
  switchOff: '#64748B',

  // select
  selectActive: '#00D2FF',
  selectActiveSecondary: '#3A6CF4',
  selectInactive: 'rgba(100, 116, 139, 0.3)',

  // chart
  chart01: '#00D2FF',
  chart02: '#3A6CF4',
  chart03: '#8B5CF6',
  chart04: '#EC4899',
  chart05: '#F59E0B',
  chart06: '#10B981',
  chart07: '#06B6D4',
  chart08: '#6366F1',
  chart09: 'rgba(0, 210, 255, 0.3)',

  // Icon
  iconBg: 'rgba(15, 23, 42, 0.15)',
  iconEmptyStroke: '#E2E8F0',

  // success/warning/error/info
  semanticSuccess: '#10B981',
  semanticError: '#EF4444',
  semanticWarning: '#F59E0B',
  semanticNeutral: '#64748B',
  semanticFocus: '#00D2FF',
  semanticFocusShadow: '0 0 0 3px rgba(0, 210, 255, 0.3)',

  // Tab
  tabFolderTabListBg: 'var(--background-light-opacity)',

  // Step
  stepActiveBg: 'var(--background-light)',
  stepHoofBg: 'var(--primary)',

  // +1% is priceFloatingUp; -1% is priceFloatingDown
  priceFloatingUp: '#10B981',
  priceFloatingDown: '#EF4444',
  priceFloatingFlat: '#64748B',

  // tooltip (this color is not in figma ui color system,but in figma ui page)
  tooltipBg: 'rgba(15, 23, 42, 0.95)',

  popoverBg: 'rgba(15, 23, 42, 0.95)',

  //customize (by V3 frontend coder)
  scrollbarThumb: 'rgba(0, 210, 255, 0.2)',

  // badge
  badgePurple: 'rgba(139, 92, 246, 0.5)',
  badgeBlue: 'rgba(0, 210, 255, 0.5)',

  // divider
  dividerBg: 'rgba(100, 116, 139, 0.3)',

  // input
  inputMask: 'rgba(15, 23, 42, 0.2)',

  // customize
  backgroundApp: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
  solidButtonBg: 'linear-gradient(135deg, #00D2FF 0%, #3A6CF4 100%)',
  outlineButtonBg: 'rgba(0, 210, 255, 0.15)',
  filledProgressBg: 'linear-gradient(90deg, #00D2FF 0%, #3A6CF4 100%)',
  modalContainerBg: 'rgba(15, 23, 42, 0.8)',
  transparentContainerBg: 'rgba(15, 23, 42, 0.9)',
  infoButtonBg: 'rgba(0, 210, 255, 0.1)',
  warnButtonBg: 'rgba(245, 158, 11, 0.3)',
  warnButtonLightBg: 'rgba(245, 158, 11, 0.1)',
  buttonBg01: 'rgba(0, 210, 255, 0.15)',
  lightPurple: '#8B5CF6',
  background01: 'rgba(15, 23, 42, 0.95)',
  background02: 'rgba(30, 41, 59, 0.9)',
  background03: 'rgba(51, 65, 85, 0.85)',
  cardBorder01: 'rgba(0, 210, 255, 0.2)',
  text01: '#F8FAFC',
  text02: '#E2E8F0',
  text03: '#94A3B8',
  brandGradient: 'linear-gradient(135deg, #00D2FF 0%, #3A6CF4 50%, #8B5CF6 100%)',
  dividerDashGradient: 'repeating-linear-gradient(to right, currentColor 0 5px, transparent 5px 10px)',

  tokenAvatarBg: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.95) 100%)',

  panelCardShadow: '0px 8px 32px rgba(0, 210, 255, 0.1), 0px 4px 16px rgba(0, 0, 0, 0.2)',
  panelCardBorder: '1px solid rgba(0, 210, 255, 0.2)'
}

export const lightColors: Partial<typeof darkColors> = {
  // app main bg color
  primary: '#3A6CF4',
  secondary: '#00D2FF',
  secondary10: 'rgba(0, 210, 255, 0.1)',

  // component color
  backgroundDark: '#F8FAFC',
  backgroundDark50: 'rgba(248, 250, 252, 0.8)',
  backgroundMedium: '#F1F5F9',
  backgroundLight: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)',
  backgroundLight50: 'rgba(241, 245, 249, 0.8)',
  backgroundLight30: 'rgba(226, 232, 240, 0.3)',
  backgroundTransparent12: 'rgba(58, 108, 244, 0.12)',
  backgroundTransparent07: 'rgba(58, 108, 244, 0.07)',
  backgroundTransparent10: 'rgba(0, 210, 255, 0.1)',

  // text
  textPrimary: '#0F172A',
  textSecondary: '#1E293B',
  textTertiary: '#64748B',
  textRevertPrimary: '#FFFFFF',
  textRed: '#DC2626',
  textBlack: '#000000',

  textLink: '#3A6CF4',

  /** 🤔 what's this */
  textQuaternary: '#94A3B8',
  /** 🤔 what's this */
  textQuinary: '#F1F5F9',
  /** 🤔 what's this */
  textSenary: 'rgba(100, 116, 139, 0.5)',
  /** 🤔 what's this */
  textSeptenary: '#00D2FF',
  /** 🤔 what's this */
  textPurple: '#8B5CF6',
  /** 🤔 what's this */
  textPink: '#EC4899',

  // button
  buttonPrimary: '#3A6CF4',
  buttonPrimary__01: '#3A6CF4',
  buttonPrimary__02: '#00D2FF',
  buttonSolidText: '#FFFFFF',
  buttonSecondary: '#00D2FF',

  // switch
  switchOn: '#3A6CF4',
  switchOff: 'rgba(100, 116, 139, 0.5)',

  // select
  selectActive: '#3A6CF4',
  selectActiveSecondary: '#00D2FF',
  selectInactive: 'rgba(148, 163, 184, 0.3)',

  // chart
  chart01: '#3A6CF4',
  chart02: '#00D2FF',
  chart03: '#8B5CF6',
  chart04: '#EC4899',
  chart05: '#F59E0B',
  chart06: '#10B981',
  chart07: '#06B6D4',
  chart08: '#6366F1',
  chart09: 'rgba(58, 108, 244, 0.3)',

  // Icon
  iconBg: '',
  iconEmptyStroke: '#ECF5FF',

  // success/warning/error/info
  semanticSuccess: '#39D0D8',
  semanticError: '#FF4EA3',
  semanticWarning: '#B89900',
  semanticNeutral: '#ABC4FF',
  semanticFocus: '#A259FF',
  semanticFocusShadow: '#A259FF33',

  // Tab
  tabFolderTabListBg: 'var(--background-dark)',

  // Step
  stepActiveBg: 'var(--background-dark-opacity)',
  stepHoofBg: 'var(--secondary)',

  // +1% is priceFloatingUp; -1% is priceFloatingDown
  priceFloatingUp: '#22D1F8',
  priceFloatingDown: '#FF4EA3',
  priceFloatingFlat: '#888888',

  // tooltip (this color is not in figma ui color system,but in figma ui page)
  tooltipBg: '#fff',

  popoverBg: '#fff',

  //customize (by V3 frontend coder)
  scrollbarThumb: 'rgba(196, 214, 255, 0.5)',

  // badge
  badgePurple: 'rgba(140, 110, 239, 0.5)',
  badgeBlue: 'rgba(34, 209, 248, 0.5)',

  // divider
  dividerBg: 'rgba(171, 196, 255, 0.3)',

  // input
  inputMask: '#fff3',

  // customize (by V3 frontend coder)
  backgroundApp: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 50%, #CBD5E1 100%)',

  solidButtonBg: 'linear-gradient(135deg, #3A6CF4 0%, #00D2FF 100%)',
  outlineButtonBg: 'rgba(58, 108, 244, 0.1)',
  filledProgressBg: 'linear-gradient(90deg, #3A6CF4 0%, #00D2FF 100%)',
  transparentContainerBg: '#FFFFFF',
  modalContainerBg: 'rgba(248, 250, 252, 0.9)',
  infoButtonBg: 'rgba(58, 108, 244, 0.1)',
  warnButtonBg: 'rgba(245, 158, 11, 0.2)',
  warnButtonLightBg: 'rgba(245, 158, 11, 0.1)',
  buttonBg01: 'rgba(58, 108, 244, 0.1)',
  lightPurple: '#8B5CF6',
  background01: '#F8FAFC',
  background02: 'rgba(58, 108, 244, 0.1)',
  background03: 'rgba(236, 72, 153, 0.1)',
  cardBorder01: 'rgba(58, 108, 244, 0.2)',
  text01: '#3A6CF4',
  text02: '#0F172A',
  text03: '#64748B',
  /** it's designer's variable name in Figma */
  brandGradient: 'linear-gradient(135deg, #3A6CF4 0%, #00D2FF 50%, #8B5CF6 100%)',
  dividerDashGradient: 'repeating-linear-gradient(to right, currentColor 0 5px, transparent 5px 10px)',

  tokenAvatarBg: 'linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(241, 245, 249, 0.95) 100%)',

  panelCardShadow: '0px 8px 32px rgba(58, 108, 244, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.04)',
  panelCardBorder: '1px solid rgba(58, 108, 244, 0.15)'
}
/**
 * note: it is not colors value, but colors css variable
 * color info may change in run-time by setting page, so use runtime css variable
 */
export const colors = {
  // app main bg color
  primary: 'var(--primary)',
  secondary: 'var(--secondary)',
  secondary10: 'var(--secondary10)',
  textRed: 'var(--text-red)',
  textBlack: 'var(--text-black)',

  // component color
  backgroundDark: 'var(--background-dark)',
  backgroundDark50: 'var(--background-dark50)',
  backgroundMedium: 'var(--background-medium)',
  backgroundLight: 'var(--background-light)',
  backgroundLight50: 'var(--background-light50)',
  backgroundLight30: 'var(--background-light30)',
  backgroundTransparent12: 'var(--background-transparent12)',
  backgroundTransparent07: 'var(--background-transparent07)',
  backgroundTransparent10: 'var(--background-transparent10)',

  // text
  /** white */
  textPrimary: 'var(--text-primary)',
  textSecondary: 'var(--text-secondary)',
  /** #abc4ff80 */
  textTertiary: 'var(--text-tertiary)',
  textRevertPrimary: 'var(--text-revert-primary)',

  textLink: 'var(--text-link)',

  /** 🤔 what's this */
  textQuaternary: 'var(--text-quaternary)',
  /** 🤔 what's this */
  textQuinary: 'var(--text-quinary)',
  /** 🤔 what's this */
  textSenary: 'var(--text-senary)',
  /** 🤔 what's this */
  textSeptenary: 'var(--text-septenary)',
  /** 🤔 what's this */
  textPurple: 'var(--text-purple)',
  /** 🤔 what's this */
  textPink: 'var(--text-pink)',

  // button
  buttonPrimary: 'var(--button-primary)',
  buttonPrimary__01: 'var(--button-primary__01)',
  buttonPrimary__02: 'var(--button-primary__02)',
  buttonSolidText: 'var(--button-solid-text)',
  buttonSecondary: 'var(--button-secondary)',

  // switch
  switchOn: 'var(--switch-on)',
  switchOff: 'var(--switch-off)',
  selectActive: 'var(--select-active)',
  selectActiveSecondary: 'var(--select-active-secondary)',
  selectInactive: 'var(--select-inactive)',

  // chart
  chart01: 'var(--chart01)',
  chart02: 'var(--chart02)',
  chart03: 'var(--chart03)',
  chart04: 'var(--chart04)',
  chart05: 'var(--chart05)',
  chart06: 'var(--chart06)',
  chart07: 'var(--chart07)',
  chart08: 'var(--chart08)',
  chart09: 'var(--chart09)',

  // Icon
  iconBg: 'var(--icon-bg)',
  iconEmptyStroke: 'var(--icon-empty-stroke)',

  // success/warning/error/info
  semanticSuccess: 'var(--semantic-success)',
  semanticError: 'var(--semantic-error)',
  semanticWarning: 'var(--semantic-warning)',
  semanticNeutral: 'var(--semantic-neutral)',
  semanticFocus: 'var(--semantic-focus)',
  semanticFocusShadow: 'var(--semantic-focus-shadow)',

  // Tab
  tabFolderTabListBg: 'var(--tab-folder-tab-list-bg)',

  // Step
  stepActiveBg: 'var(--step-active-bg)',
  stepHoofBg: 'var(--step-hoof-bg)',

  // +1% is priceFloatingUp; -1% is priceFloatingDown
  priceFloatingUp: 'var(--price-floating-up)',
  priceFloatingDown: 'var(--price-floating-down)',
  priceFloatingFlat: 'var(--price-floating-flat)',

  // tooltip (this color is not in figma ui color system,but in figma ui page)
  tooltipBg: 'var(--tooltip-bg)',

  popoverBg: 'var(--popover-bg)',

  //customize component theme (by V3 frontend coder)
  scrollbarThumb: 'var(--scrollbar-thumb)',

  // badge
  badgePurple: 'var(--badge-purple)',
  badgeBlue: 'var(--badge-blue)',

  // divider
  dividerBg: 'var(--divider-bg)',

  // input
  inputMask: 'var(--input-mask)',

  // customize (by V3 frontend coder)
  backgroundApp: 'var(--background-app)',
  solidButtonBg: 'var(--solid-button-bg)',
  outlineButtonBg: 'var(--outline-button-bg)',
  filledProgressBg: 'var(--filled-progress-bg)',
  transparentContainerBg: 'var(--transparent-container-bg)',
  modalContainerBg: 'var(--modal-container-bg)',
  infoButtonBg: 'var(--info-button-bg)',
  warnButtonBg: 'var(--warn-button-bg)',
  warnButtonLightBg: 'var(--warn-button-light-bg)',
  buttonBg01: 'var(--button-bg-01)',
  lightPurple: 'var(--divider-bg-light-purple)',
  background01: 'var(--background-01)',
  background02: 'var(--background-02)',
  background03: 'var(--background-03)',
  cardBorder01: 'var(--card-border-01)',
  text01: 'var(--text-01)',
  text02: 'var(--text-02)',
  text03: 'var(--text-03)',
  /** it's designer's variable name in Figma */
  brandGradient: 'var(--brand-gradient)',
  dividerDashGradient: 'var(--divider-dash-gradient)',

  tokenAvatarBg: 'var(--token-avatar-bg)',

  panelCardShadow: 'var(--panel-card-shadow)',
  panelCardBorder: 'var(--panel-card-border)'
}
