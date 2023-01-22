export function ButtonContainer({ children }): JSX.Element {
  return (
    <section className='mt-4 d-flex justify-content-between w-50 mb-4 mx-auto'>
      {children}
    </section>
  );
}
