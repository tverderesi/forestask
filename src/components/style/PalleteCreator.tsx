import tinycolor from 'tinycolor2';

export default function palleteCreator(inputArray: any[], BaseColor: string) {
  let Pallete = {};

  var Colors = tinycolor(BaseColor).analogous(
    inputArray.length,
    inputArray.length
  );
  inputArray.forEach(
    (itemName: string, i: number) =>
      (Pallete[itemName] = Colors[i].toHex8String())
  );
  return Pallete;
}
