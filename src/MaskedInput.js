import InputMask from "react-input-mask";

const convertToNumbers = (value) => value.replace(/[^0-9]/g, "");

export function MaskedInput({ value, onChange }) {
  const handleChange = (event) => {
    onChange({
      ...event,
      target: {
        ...event.target,
        value: convertToNumbers(event.target.value)
      }
    });
  };

  return (
    <InputMask mask="999.999.999-99" value={value} onChange={handleChange} />
  );
}
