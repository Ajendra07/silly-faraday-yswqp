import "./styles.css";
import CardsPage from "./Pages/CardsPage";
import SideNav from "./components/SideNav";

export default function App() {
  return (
    <div className="App">
      <SideNav />
      <CardsPage name="Show card number" />
    </div>
  );
}
