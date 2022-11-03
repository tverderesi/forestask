import tinycolor from 'tinycolor2';

export default function palleteCreator(inputArray: any[], BaseColor: string) {
  let Palette = {};

  let textColors = tinycolor(BaseColor).analogous(
    inputArray.length === 2 ? 3 : inputArray.length,
    inputArray.length === 2 ? 3 : inputArray.length
  );

  textColors.forEach(color => {
    while (tinycolor.isReadable(color, '#b6ecfc') === false) {
      color = color.darken(1).saturate(50);
    }
  });

  inputArray.forEach(
    (itemName: string, i: number) =>
      (Palette[itemName] = textColors[i].toHex8String())
  );

  return Palette;
}
