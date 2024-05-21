import { useEffect } from "react"
import { ReactTyped } from "react-typed"

export const FormularioClima = () => {


  return (
    <section className="container px-4 mx-auto py-16 md:py-24">
        <p className="text-white text-3xl font-semibold">Ingresa el lugar</p>

        <form className="mt-6">
            <ReactTyped loop>
                <input className="rounded-md outline-none border-none w-full py-4 px-4" type="text" />
            </ReactTyped>
        </form>
    </section>
  )
}


