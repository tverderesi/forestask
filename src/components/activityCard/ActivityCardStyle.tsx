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

export const activityCard: React.CSSProperties = {
  backdropFilter: 'blur(20px)',
  backgroundColor: 'var(--card-bg-color)',
  borderRadius: '16px',
  border: 'none',
  boxShadow: 'var(--card-shadow)',

  backgroundBlendMode: 'overlay',
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
  backgroundColor: 'var(--soft-accent-bg-color)',
};
