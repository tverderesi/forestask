import { v4 as uuidv4 } from 'uuid';
const subjects = ['Math', 'Music', 'Science', 'Portuguese', 'English'];
const activities = ['Homework', 'Text'];
const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';
const checked = [true, false];

export default function FakeDataGenerator(numOfCards: number) {
  const items: any[] = [];
  for (let i: number = 0; i < numOfCards; i++) {
    let randomSubjectIdx = Math.floor(Math.random() * subjects.length);
    let randomActivityIdx = Math.floor(Math.random() * activities.length);
    let randomXP = Math.floor(Math.random() * 100);
    let randomCheckedIdx = Math.floor(Math.random() * checked.length);
    let randomDate = new Date(
      Date.now() + Math.floor(Math.random() * 50 * 864e5)
    ).toISOString();
    let card = {
      id: uuidv4(),
      title: `${subjects[randomSubjectIdx]} ${activities[randomActivityIdx]}`,
      content: `${lorem} `,
      subject: `${subjects[randomSubjectIdx]}`,
      type: `${activities[randomActivityIdx]}`,
      checked: `${checked[randomCheckedIdx]}`,
      xp: `${randomXP}`,
      deadline: `${randomDate}`,
    };
    items.push(card);
  }
  return items;
}
