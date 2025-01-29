<template>
    <section class="bg-white dark:bg-gray-800 flex flex-col md:flex-row py-10 md:py-20 px-8 md:px-20 2xl:px-40 space-y-6 md:space-y-0">
        <div class="flex items-center justify-center w-2/2 md:w-1/2 rounded-r-3xl relative">
            <img src="@/assets/images/contacto.svg" alt="hero image" class="w-[70%]">
        </div>
        <div class="w-2/2 md:w-1/2 p-0 md:p-16">
            <h2 class="mb-4 font-extrabold tracking-tight uppercase">Contacto:</h2>
            <p class="mb-8 font-light">¿Tienes preguntas o quieres saber más? Estamos aquí para ayudarte. No
                dudes en ponerte en contacto con nosotros y te responderemos a la brevedad. ¡Estamos emocionados de
                acompañarte en el crecimiento de tu emprendimiento!.</p>

            <form class="space-y-4">
                <!-- Nombre y Celular en una fila -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            id="name" name="name" placeholder=" " required />
                        <label for="name"
                            class="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            type="tel" id="celular" name="celular" placeholder=" " />
                        <label for="celular"
                            class="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Celular</label>
                    </div>
                </div>

                <!-- Mail -->
                <div class="relative z-0 w-full mb-10 group">
                    <input
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="email" id="email" name="email" placeholder=" " />
                    <label for="email"
                        class="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                        electronico</label>
                </div>

                <!-- Casilla de mensaje -->
                <div class="relative z-0 w-full mb-10 group">
                    <textarea id="message" name="message" rows="4" type="text"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="message"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mensaje</label>
                </div>

                <!-- Botón de enviar -->
                <div>
                    <button type="submit"
                        class="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-400">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>

export default {
    name: "Contacto",
};
</script>