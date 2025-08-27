export default function Lesson({ header, children }) {
  return (
    <>
      <h2>{header}</h2>
      {children}
    </>
  );
}
