export const Back = () => {
  const goBack = () => {
    window.history.back();

    // Espera un poco antes de desplazar
    setTimeout(() => {
      const element = document.getElementById("naturaId");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 500); // Ajusta el tiempo de espera según sea necesario
  };

  return (
    <button
      className="z-[99999999999] cursor-pointer text-white"
      onClick={goBack}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="p-0 max-w-max"
      >
        <title>Keyboard Arrow Left</title>
        <path d="M14.71 15.88 10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42Z"></path>
        <metadata>arrow, arrows, keyboard, left</metadata>
      </svg>
    </button>
  );
};
