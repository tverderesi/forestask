import { useState } from 'react';

export function CustomDropdown({
  dropdownName,
  dropdownItems,
  card,
  target,
}): JSX.Element {
  const [value, setValue] = useState('');
  return (
    <div
      style={{
        width: '45%',
      }}
    >
      <div className='text-center w-100'>{dropdownName}</div>

      <div>
        <div
          className='d-flex justify-content-between'
          key={`Select${dropdownName}`}
        >
          {value ? value : dropdownName}
        </div>
        <div
          style={{
            backdropFilter: 'blur(20px)',
            backgroundColor: 'var(--card-bg-color-solid)',
            borderRadius: '16px',
            border: 'none',
            boxShadow: 'var(--card-shadow)',
            padding: '.5rem',
            color: 'var(--font-color)',
          }}
        >
          {dropdownItems.map((item, index) => {
            return (
              <div
                className='text-center'
                style={{
                  width: '16rem',
                  borderBottom:
                    index === dropdownItems.length - 1
                      ? ''
                      : 'solid 1px #80808020',
                  height: '2.5rem',
                  fontWeight: '600',
                  color: 'var(--font-color)',
                }}
                onClick={(e: React.SyntheticEvent) => {
                  setValue(e.currentTarget.innerHTML);
                  card[target] = e.currentTarget.innerHTML;
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
