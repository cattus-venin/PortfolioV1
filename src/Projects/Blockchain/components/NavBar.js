const NavBar = () => {
  return (
      <>
       <div className="flex flex-col justify-center items-center">
        <nav class="bg-white border-gray-200 px-2 rounded dark:bg-gray-900">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
              <header class="not-format">
                  <h1 class="pt-5 mb-4 text-3xl font-poppins font-bold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Ether Bank</h1>
              </header>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </div>
        </nav>
       </div>
      </>
  );
}

export default NavBar;