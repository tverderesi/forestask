import tinycolor from 'tinycolor2';

const Subjects = ['Math', 'Music', 'Science', 'Portuguese', 'English'];
var SubjectColor = {};

var Colors = tinycolor('#b08ac9').analogous(Subjects.length);

Subjects.forEach((Subject, i) => (SubjectColor[Subject] = Colors[i].toHex8String()));

export { SubjectColor };
