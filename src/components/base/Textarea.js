'use client'

export const Textarea = ({
  name,
  value,
  onInput,
  label='message',
  isError
}) => {

  const handleChangeTextarea = (name, e) => {
    onInput(name, e.target.value)
  }

  return (
    <div>
    <p className="uppercase ">{label}{'  '}<span className={`text-green inline ${isError && 'text-red'}`}>*</span></p>
    <textarea
      name={name}
      value={value}
      onChange={(e) => handleChangeTextarea(name, e)}
      className={`w-full text-lg my-2 md:my-4 py-3 px-6 outline-none block border border-green rounded-[34px] bg-[#212323] h-32 resize-none transition-all hover:shadow-green focus:caret-green ${isError && 'border-red'}`}
    />
    </div>
  )
}