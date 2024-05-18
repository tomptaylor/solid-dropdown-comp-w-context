import { useDropdown } from "../context/dropdown";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useDropdown();

  const handleSelectOption = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      this should be a value {selectedOption}
      <select value={selectedOption()} onChange={handleSelectOption}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </>
  );
};

export default Dropdown;
