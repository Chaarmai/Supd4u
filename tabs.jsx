export function Tabs({ children }) {
  return <div>{children}</div>;
}
export function TabsList({ children }) {
  return <div className="flex gap-2">{children}</div>;
}
export function TabsTrigger({ children }) {
  return <button className="px-4 py-2 border">{children}</button>;
}
export function TabsContent({ children }) {
  return <div className="p-4">{children}</div>;
}
