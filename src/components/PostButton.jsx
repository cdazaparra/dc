export default function PostButton({ children, ...props }) {
  return (
    <div className="d-grid m-2">
      <button {...props}>{children}</button>
    </div>
  );
}
