import "./App.css";
import Button from "./components/common/Buttons";
import Cards from "./components/common/Cards";

function App() {
  const listPages = [
    {
      id: "1",
      label: "Page 1",
    },
    {
      id: "2",
      label: "Page 2",
    },
    {
      id: "3",
      label: "Page 3",
    },
    {
      id: "4",
      label: "Page 4",
    },
  ];
  return (
    <>
      <div
        className="mt-4 mx-auto h-auto w-[370px] border-1 border-gray-100 
    shadow-[0_0_20px_2px_rgba(0,0,0,0.1)]
      drop-shadow-2xl

      py-2.5 px-3 rounded-md flex  justify-between flex-col font-montserrat text-sm"
      >
        <div>
          <Cards label="All Pages" />
        </div>
        <hr className="text-gray-300 my-2.5" />
        <div>
          {listPages.map(({ id, label }) => (
            <Cards key={id} label={label} />
          ))}
        </div>
        <hr className="text-gray-300 my-2.5" />
        <Button />
      </div>
    </>
  );
}

export default App;
