import tinycolor from 'tinycolor2';

export default function palleteCreator(inputArray: any[], BaseColor: string) {
  var item = {};
  let Pallete = { item };

  var Colors = tinycolor(BaseColor).analogous(Subjects.length, Subjects.length);
  Subjects.forEach(
    (itemName: string, i: number) => (item[itemName] = Colors[i].toHex8String())
  );
  return Pallete;
}
