function Navbar({ navItems }) {
  return (
    <div className='d-flex justify-content-around fw-bold'>
      {navItems.map((navItem: any) => {
        return <>{navItem}</>;
      })}
    </div>
  );
}

export default Navbar;
