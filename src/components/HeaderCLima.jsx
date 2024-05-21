export const HeaderCLima = () => {
  return (
    <section className="container mx-auto py-4">
        <article className="flex flex-col md:flex-row items-center md:items-center md:justify-between">
            <h1 className="text-2xl font-bold text-white">Clima con Marcos</h1>
            <div className="flex gap-4 mt-6 md:mt-0">
                <a className="bg-green-900 border text-white py-2 px-6 rounded-lg transition-all duration-200 hover:bg-green-950" 
                    href="#">Ingresar
                </a>
                <a className="bg-green-900 border text-white py-2 px-6 rounded-lg transition-all duration-200 hover:bg-green-950" 
                    href="#">Iniciar sesion
                </a>
            </div>
        </article>
    </section>
  )
}
