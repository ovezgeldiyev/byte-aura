import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Company from "./components/Company";
import Info from "./components/Info";
import Solution from "./components/Solution";
import Services from "./components/Services";
import Programs from "./components/Programs";
import World from "./components/World";
import Legacy from "./components/Legacy";
import Grant from "./components/Grant";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Solution2 from "./components/Solution2";
import Popup from "./components/Popup";
import { AnimatePresence } from "framer-motion";
import Modal from "../Base/Modal";

export default function Home() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Hero />
      <About />
      <Company />
      <Info />
      <Solution setModal={setModal} />
      <Services />
      <Programs />
      <World />
      <Legacy />
      <Grant />
      <Projects />
      <Team />
      <Solution2 setModal={setModal} />
      <AnimatePresence>
        {modal && (
          <Modal setModal={setModal}>
            <Popup setModal={setModal} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
