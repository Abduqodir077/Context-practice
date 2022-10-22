function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpHDgOOByIyQwdxCpxT0Ave_UbRx1i38G7A&usqp=CAU" alt="logo" />
          </a>
        </div>
        <div className="links">
            <a href="#">About</a>
            <a href="#">Info</a>
            <a href="#">Log in</a>
            <a href="#">Registr</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
