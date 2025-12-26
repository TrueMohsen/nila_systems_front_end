// @next
export let Themes;

(function (Themes) {
  Themes['THEME_DEFAULT'] = 'default';
  Themes['THEME_CRM'] = 'crm';
  Themes['THEME_AI'] = 'ai';
  Themes['THEME_CRYPTO'] = 'crypto';
  Themes['THEME_HOSTING'] = 'hosting';
  Themes['THEME_PMS'] = 'pms';
  Themes['THEME_HRM'] = 'hrm';
  Themes['THEME_PLUGIN'] = 'plugin';
  Themes['THEME_LMS'] = 'lms';
})(Themes || (Themes = {}));

/***************************  CONFIG  ***************************/

const config = {
  currentTheme: Themes.THEME_DEFAULT
};

export default config;

/***************************  THEME - FONT FAMILY  ***************************/

export const FONT_ROBOTO = '"IRANSansFaNum", sans-serif';
export const FONT_ARCHIVO = '"IRANSansFaNum", sans-serif';
export const FONT_FIGTREE = '"IRANSansFaNum", sans-serif';
