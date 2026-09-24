const CHEVRON_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B7280' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")";

interface SelectFieldProps {
  id: string;
  name: string;
  label: string;
  options: string[];
}

const SelectField: React.FC<SelectFieldProps> = ({ id, name, label, options }) => (
  <div className="mb-[18px]">
    <label htmlFor={id} className="mb-2 block font-heading text-[13px] font-medium text-black">
      {label}
    </label>
    <select
      id={id}
      name={name}
      style={{ backgroundImage: CHEVRON_SVG, backgroundPosition: "right 16px center", backgroundRepeat: "no-repeat" }}
      className="w-full cursor-pointer appearance-none rounded-xl border-[1.5px] border-g200 bg-surface py-[13px] pr-9 pl-4 font-sans text-sm text-charcoal outline-none transition-[border-color,background,box-shadow] duration-200 ease-[var(--ease)] focus:border-purple focus:bg-white focus:shadow-[0_0_0_3px_var(--purple-10)]"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;
