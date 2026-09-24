const FIELD_CLASS =
  "w-full rounded-xl border-[1.5px] border-g200 bg-surface px-4 py-[13px] font-sans text-sm text-charcoal outline-none transition-[border-color,background,box-shadow] duration-200 ease-[var(--ease)] placeholder:text-g400 focus:border-purple focus:bg-white focus:shadow-[0_0_0_3px_var(--purple-10)]";

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email";
  placeholder?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ id, name, label, type = "text", placeholder, required }) => (
  <div className="mb-[18px]">
    <label htmlFor={id} className="mb-2 block font-heading text-[13px] font-medium text-black">
      {label}
    </label>
    <input id={id} name={name} type={type} placeholder={placeholder} required={required} className={FIELD_CLASS} />
  </div>
);

export default InputField;
