interface TextAreaProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({ id, name, label, placeholder, required }) => (
  <div className="mb-[18px]">
    <label htmlFor={id} className="mb-2 block font-heading text-[13px] font-medium text-black">
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      rows={4}
      className="min-h-[110px] w-full resize-y rounded-xl border-[1.5px] border-g200 bg-surface px-4 py-[13px] font-sans text-sm text-charcoal outline-none transition-[border-color,background,box-shadow] duration-200 ease-[var(--ease)] placeholder:text-g400 focus:border-purple focus:bg-white focus:shadow-[0_0_0_3px_var(--purple-10)]"
    />
  </div>
);

export default TextArea;
