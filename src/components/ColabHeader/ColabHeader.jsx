export function ColabHeader() {
  return (
    <header
      className="
          fixed top-0 z-50
          flex justify-center items-center
          py-4
          bg-[#201f22]/80
          border-b-2 border-[#151416]/30
          w-full
          backdrop-blur-md
        "
    >
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#FEFEFE] max-w-fit">
        {sessionStorage.getItem("discNome")}
      </h1>
    </header>
  );
}
