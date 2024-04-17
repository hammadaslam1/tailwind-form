import logo from "./logo.svg";
import "./App.css";
import BackButton from "./components/buttons/BackButton";
import CustomerBar from "./components/bars/CustomerBar";
import FilterBar from "./components/bars/FilterBar";
import HeadingBar from "./components/bars/HeadingBar";
import Footer from "./components/bars/Footer";
import TableOne from "./components/table/TableOne";

function App() {
  return (
    <div className="App bg-slate-100 flex flex-col justify-between min-h-dvh">
      <div>
        <BackButton />
        <CustomerBar />
        <FilterBar />
        <HeadingBar />
        <div>
          <TableOne />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;