<template>
    <section
        class="bg-white dark:bg-gray-800 flex flex-col md:flex-row py-10 md:py-20 px-8 md:px-20 2xl:px-40 space-y-6 md:space-y-0">
        <div class="flex items-center justify-center w-2/2 md:w-1/2 rounded-r-3xl relative">
            <ContactoIlustration class="w-[90%]" />
        </div>
        <div class="w-2/2 md:w-1/2 p-0 md:p-16">
            <h2 class="mb-4 font-extrabold tracking-tight uppercase">Contacto:</h2>
            <p class="mb-8 font-light">¿Tienes preguntas o quieres saber más? Estamos aquí para ayudarte. No
                dudes en ponerte en contacto con nosotros y te responderemos a la brevedad. ¡Estamos emocionados de
                acompañarte en el crecimiento de tu emprendimiento!.</p>

            <form name="contacto" method="POST" data-netlify="true" class="space-y-4" @submit.prevent="handleSubmit">
                <input type="hidden" name="form-name" value="contacto" />

                <div class="grid grid-cols-2 gap-4">
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            id="name" name="name" placeholder=" " required />
                        <label for="name"
                            class="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600">Nombre</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            type="tel" id="celular" name="celular" placeholder=" " />
                        <label for="celular"
                            class="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600">Celular</label>
                    </div>
                </div>

                <div class="relative z-0 w-full mb-10 group">
                    <input
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="email" id="email" name="email" placeholder=" " required />
                    <label for="email"
                        class="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600">Correo
                        electrónico</label>
                </div>

                <div class="relative z-0 w-full mb-10 group">
                    <textarea id="message" name="message" rows="4"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required></textarea>
                    <label for="message"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600">Mensaje</label>
                </div>

                <div>
                    <button type="submit"
                        class="w-full bg-secondarydark text-white font-medium py-3 px-4 rounded-lg shadow hover:bg-secondary transition-all">Enviar</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import ContactoIlustration from '../svgs/ContactoIlustration.vue';


export default {
    name: "Contacto",
    components: { ContactoIlustration },

    methods: {
        async handleSubmit(event) {
            const formData = new FormData(event.target);
            const response = await fetch("/", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Formulario enviado con éxito");
            } else {
                alert("Hubo un error al enviar el formulario");
            }
        },
    },
};
</script>