export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Contatti</h1>
      <p className="text-neutral-600">
        Disponibilità, tipo di collaborazioni, tempi di risposta...
      </p>
      <ul className="space-y-1 text-sm">
        <li>Email: <a href="mailto:elisa.raeli@email.com" className="underline">elisa.raeli@email.com</a></li>
        <li>GitHub: <a href="https://github.com/Elisa-Ra" className="underline">Elisa-Ra</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/elisa-raeli" className="underline">elisa-raeli</a></li>
      </ul>
    </div>
  );
}