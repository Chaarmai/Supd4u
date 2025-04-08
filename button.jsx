export function Button({ children, ...props }) {
  return <button className="px-4 py-2 rounded bg-[#01cec6] text-black hover:bg-[#01b8b2]" {...props}>{children}</button>;
}
