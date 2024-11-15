import { useState } from "react";
import Navbar from "./Components/Navbar";
import MultiActionAreaCard from "./Components/HotelData";
import MyForm from "./Components/MyForm";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import ReservationCalendar from "./Components/Calendar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <ReservationCalendar></ReservationCalendar>
      <MultiActionAreaCard></MultiActionAreaCard>
      <Testimonials></Testimonials>
      <MyForm></MyForm>
      <Footer></Footer>
    </>
  );
}

export default App;
