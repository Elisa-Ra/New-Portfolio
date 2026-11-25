export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm">
        <p>© {new Date().getFullYear()} Elisa Raeli</p>
        <div className="flex gap-4">
          <a href="elyssaotto@gmail.com" className="hover:underline">Email</a>
          <a href="https://github.com/Elisa-Ra" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/elisa-raeli/" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}