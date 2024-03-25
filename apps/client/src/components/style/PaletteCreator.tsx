/** @format */

import tinycolor from 'tinycolor2';

export default function paletteCreator(
  inputArray: any[],
  baseColor: string,
  darkBaseColor: string
) {
  let Palette = { light: {}, dark: {} };

  let textColors = tinycolor(baseColor).analogous(
    inputArray.length === 2 ? 3 : inputArray.length,
    inputArray.length === 2 ? 3 : inputArray.length
  );
  let darkTextColors = tinycolor(darkBaseColor).analogous(
    inputArray.length === 2 ? 3 : inputArray.length,
    inputArray.length === 2 ? 3 : inputArray.length
  );

  textColors.forEach(color => {
    color = color.saturate(100);
    while (tinycolor.isReadable(color, '#b6ecfc') === false) {
      color = color.darken(1).saturate(50);
    }
  });

  darkTextColors.forEach(color => {
    color = color.saturate(50);
    while (tinycolor.isReadable(color, '#151515') === false) {
      color = color.lighten(1).saturate(50);
    }
  });

  inputArray.forEach((itemName: string, i: number) => {
    Palette['light'][itemName] = textColors[i].toHex8String();
    Palette['dark'][itemName] = darkTextColors[i].toHex8String();
  });

  return Palette;
}
