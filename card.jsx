export function Card({ children, ...props }) {
  return <div className="bg-white shadow rounded-lg" {...props}>{children}</div>;
}
export function CardContent({ children, ...props }) {
  return <div className="p-4" {...props}>{children}</div>;
}
