import { useState } from "react";
import { NewModalPlan } from "./components/NewModalPlan/NewModalPlan";
import { Summary } from "./components/Summary/Summary";
import { Header } from "./Header/Header";
import { GlobalStyles } from "./styles/globals";


export function App() {

  const [ isModalPlanOpen, setIsModalPlanOpen ] = useState(false);

  function handleOpenPlanModal() {
    setIsModalPlanOpen(true);
  }

  function handleClosePlanModal() {
    setIsModalPlanOpen(false);
  }


  return (
    <>

      <Header />
      <Summary onOpenModal={handleOpenPlanModal} />
      <NewModalPlan isOpen={isModalPlanOpen} onRequestClose={handleClosePlanModal} />

      <GlobalStyles />
    </>
  );
}


