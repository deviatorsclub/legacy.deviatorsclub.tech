import Nav from "../component/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-white text-9xl pb-96 mt-36  ">Deviators Club</h1>
      </div>
    </div>
  );
}

export default Home;
