import tinycolor from 'tinycolor2';

function PalleteCreatorFunction(Subjects, BaseColor) {
  var Subject = {};
  let Pallete = { Subject };

  var Colors = tinycolor(BaseColor).analogous(Subjects.length, Subjects.length);
  Subjects.forEach((Sbj, i) => (Subject[Sbj] = Colors[i].toHex8String()));
  return Pallete;
}

export { PalleteCreatorFunction };
