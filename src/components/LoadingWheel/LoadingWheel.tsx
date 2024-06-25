export default function LoadingWheel() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="absolute animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-tinyBlue-base"></div>
      <div className="absolute animate-antispin rounded-full h-10 w-10 border-t-2 border-b-2 border-tinyOrange-base"></div>
      <div className="absolute animate-antispin rounded-full h-8 w-8 border-t-2 border-b-2 border-tinyBlue-base"></div>
      <div className="absolute animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-tinyOrange-base"></div>
      <div className="absolute animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-tinyPink-base"></div>
    </div>
  );
}
