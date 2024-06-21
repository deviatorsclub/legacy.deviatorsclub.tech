import devlogo from "../assets/logo-min.png";

function Nav() {
  const hello = () => {
    console.log("Hello");
  };
  return (
    <div className="bg-black p-4 fixed">
      <div className="flex items-center justify-between">
        <h1 className="inline-flex space-x-96 items-center">
          <img
            src={devlogo}
            alt="Logo"
            className="h-12 w-24 m-9 flex-none p-0 mr-20"
          />
          <div className="flex space-x-8 text-white">
            <div
              className="flex place-items-center text-gray-500 hover:text-white opacity-100 transition-colors duration-300 ease-in-out hover:opacity-100 cursor-pointer"
              onClick={hello}
            >
              About Us
            </div>
            <div className="flex place-items-center text-gray-500 hover:text-white opacity-100 transition-colors duration-300 ease-in-out hover:opacity-100 cursor-pointer">
              Our Team{" "}
            </div>
            <div className="flex place-items-center text-gray-500 hover:text-white opacity-100 transition-colors duration-300 ease-in-out hover:opacity-100 cursor-pointer">
              Contact US
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Nav;
