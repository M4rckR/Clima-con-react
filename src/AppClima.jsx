import { FormularioClima } from "./components/FormularioClima"
import { HeaderCLima } from "./components/HeaderCLima"

export const AppClima = () => {
  return (
    <header className="bg-[url('/public/img/naturaleza.jpg')] bg-cover bg-no-repeat">
        <HeaderCLima/>
        <FormularioClima/>
    </header>
  )
}

