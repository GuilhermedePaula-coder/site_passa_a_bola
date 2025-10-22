
export default function Spinner({ size = 8 }) {
  return (
    <div className={`animate-spin rounded-full h-${size} w-${size} border-4 border-t-transparent border-purple-600`}/>
  );
}
