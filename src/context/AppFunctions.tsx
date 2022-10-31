export const fetchSize = async () => {
  const response = await fetch('http://localhost:5000/cards/?_start=0&_end=0', {
    headers: { 'Content-Type': 'json' },
  });
  const data = Number(response.headers.get('X-total-count'));
  return data;
};

export async function fetchSubjects() {
  const response = await fetch('http://localhost:5000/subjects', {
    headers: { 'Content-Type': 'json' },
  });
  const data = await response.json();
  return data;
}
