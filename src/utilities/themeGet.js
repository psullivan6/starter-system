import { themeGet as styledThemeGet } from '@styled-system/theme-get';
import { rem } from 'polished';

// Function currying FTW
const themeGet = themeGetProps => props =>
  rem(styledThemeGet(themeGetProps)(props));

export default themeGet;
