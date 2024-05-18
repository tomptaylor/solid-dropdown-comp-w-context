import { createSignal, createContext, useContext } from "solid-js";

const DropdownContext = createContext();

export function DropdownProvider(props) {
  const [selectedOption, setSelectedOption] = createSignal(2);

  return (
    <DropdownContext.Provider value={[selectedOption, setSelectedOption]}>
      {props.children}
    </DropdownContext.Provider>
  );
}

export function useDropdown() {
  return useContext(DropdownContext);
}
