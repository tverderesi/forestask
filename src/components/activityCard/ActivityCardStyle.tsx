export const CheckButton = item => {
  return {
    verticalAlign: 'middle',
    alignSelf: 'center',
    position: 'absolute',
    top: '25%',
    left: '25%',
    opacity: item.checked ? '1' : '0',
  };
};

export const activityCard = {
  backdropFilter: 'blur(20px)',
  backgroundColor: '#f9fafb80',
  borderRadius: '16px',
  border: 'none',
  boxShadow: '5px 5px 20px #3a3a3a38',
};

export const cardTitle = { fontSize: '1rem', fontWeight: '600' };

export const cardHeader = { background: 'none', border: 'none' };

export const navButton: React.CSSProperties = {
  height: '60px',
  width: '60px',
  padding: '0',
  border: 'none',
  borderRadius: '50%',
  position: 'absolute',
  right: '2.5%',
  top: 'calc(50% - 30px)',
  backgroundColor: '#9a9c9e20',
};
