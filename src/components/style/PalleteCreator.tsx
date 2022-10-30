import tinycolor from 'tinycolor2';

export default function palleteCreator(inputArray: any[], BaseColor: string) {
  let textPallete = {};
  let buttonPallete = {};

  let textColors = tinycolor(BaseColor).analogous(
    inputArray.length,
    inputArray.length * 1.25
  );

  inputArray.forEach(
    (itemName: string, i: number) =>
      (textPallete[itemName] = textColors[i].toHex8String())
  );

  inputArray.forEach(
    (itemName: string, i: number) =>
      (buttonPallete[itemName] = textColors[i].lighten(5).toHex8String())
  );

  const Pallete = { buttonPallete, textPallete };

  return Pallete;
}
