import InputMask from "react-input-mask";

const convertToNumbers = (value) => value.replace(/[^0-9]/g, "");

const CPF_MASK = "999.999.999-99";
const CNPJ_MASK = "99.999.999/9999-99";

const getInputMask = (mask = "cpf") => (mask === "cpf" ? CPF_MASK : CNPJ_MASK);

export function MaskedInput({ value, onChange, mask = "cpf" }) {
  const handleChange = (event) => {
    onChange({
      ...event,
      target: {
        ...event.target,
        value: convertToNumbers(event.target.value),
      },
    });
  };

  return (
    <InputMask
      mask={getInputMask(mask)}
      value={value}
      onChange={handleChange}
    />
  );
}
