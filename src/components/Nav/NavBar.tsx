function Navbar() {
  return (
    <div className="nav-bar flex flex-wrap justify-between pt-2 border-b pb-2 px-2 md:px-14 sticky top-0 bg-white z-10">
      <div className="left flex gap-3 sm:text-lg md:text-xl lg:text-2xl font-bold items-center">
        <img src="/icons/logo.svg" alt="logo" className="h-6 w-6" />
        <p className="hidden md:flex">Logo</p>
      </div>
    </div>
  );
}

export default Navbar;
