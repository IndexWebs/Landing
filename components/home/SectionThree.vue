<template>
    <section class="bg-white dark:bg-gray-800 px-8 md:px-20 2xl:px-40">
        <!-- Row -->
        <div div class="w-full py-8 space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <div class="text-gray-500 sm:text-lg dark:text-gray-400 flex flex-col justify-center items-center">
                <h2 class="mb-4 font-extrabold tracking-tight uppercase max-w-3xl text-center">Todo lo que te espera en
                    nuestra comunidad</h2>
                <p class="mb-8 font-light text-center max-w-5xl">Al unirte, descubrirás un espacio pensado para impulsar
                    tu emprendimiento,
                    conectar con otros soñadores como tú y aprovechar herramientas que hacen la diferencia en tu camino
                    al éxito.</p>
                <!-- List -->
                <div class="grid grid-cols-3 grid-rows-none md:grid-rows-2 gap-6">
                    <!-- Div 1 ocupa 1 columna y 2 filas -->
                    <div
                        class="bg-secondary60 col-span-3 md:col-span-1 row-span-2 md:row-span-2 rounded-3xl p-8 relative">
                        <span
                            class="bg-secondarydark rounded-full px-8 py-2 text-xs text-white font-semibold uppercase items-center w-auto">Catalogo
                            personalizable</span>
                        <p class="text-gray-500 mt-6 text-sm md:text-base leading-6">Adapta tu catálogo a las
                            necesidades de tu
                            emprendimiento y refleja la esencia única de tu marca. Personaliza colores, estilos y
                            detalles visuales para lograr una presentación profesional que no solo atraiga a tus
                            clientes, sino que también les genere confianza. Ya sea que quieras resaltar tus productos
                            más populares, organizar tus categorías de forma intuitiva o incorporar elementos que
                            representen tu identidad, este catálogo se ajusta a tus ideas. Es tu herramienta clave para
                            destacar en el mercado y dejar una impresión duradera.</p>

                        <PersonalizableIlustration
                            class="relative md:absolute w-[80%] -bottom-5 left-10 shape-custom-personalizable" />
                    </div>

                    <!-- Div 2 ocupa 1 columna y 1 fila -->
                    <div class="bg-secondary60 col-span-3 md:col-span-1 row-span-1 rounded-3xl p-8 relative">
                        <span
                            class="bg-secondarydark rounded-full px-8 py-2 text-xs text-white font-semibold uppercase items-center w-auto">PEDIDOS
                            A TU WHATSAPP</span>
                        <PedidosIlustration
                            class="float-right mb-2 w-[40%] md:w-[45%] rounded-lg shape-custom-pedidos mt-20 md:mt-36 -mr-10" />
                        <p class="text-gray-500 mt-6 text-sm md:text-base leading-6">Recibe pedidos directamente en tu
                            WhatsApp con
                            un solo clic, haciendo que la experiencia de compra sea rápida, sencilla y personalizada.
                            Mantén una comunicación directa y cercana con tus clientes en tiempo real.</p>
                    </div>

                    <!-- Div 3 ocupa 1 columna y 1 fila -->
                    <div class="bg-secondary60 col-span-3 md:col-span-1 row-span-1 rounded-3xl p-8 relative">
                        <span
                            class="bg-secondarydark rounded-full px-8 py-2 text-xs text-white font-semibold uppercase items-center w-auto">PANEL
                            DE ADMINISTRACIÓN</span>
                        <AdministracionIlustration
                            class="float-end w-[50%] md:w-[60%] -mr-12 md:-mr-16 mt-12 md:mt-2 shape-custom-administracion" />
                        <p class="text-gray-500 mt-6 text-sm md:text-base leading-6">Gestiona tu catálogo, productos y
                            pedidos de
                            manera fácil y eficiente desde un solo lugar. Con nuestro panel, tendrás control total sobre
                            tu negocio, permitiéndote actualizar, organizar y hacer seguimiento de todo sin
                            complicaciones.</p>
                    </div>

                    <!-- Div 4 ocupa 2 columnas y 1 fila -->
                    <div
                        class="bg-secondary60 col-span-3 md:col-span-2 row-span-1 rounded-3xl p-8 relative overflow-visible">
                        <span
                            class="bg-secondarydark rounded-full px-8 py-2 text-xs text-white font-semibold uppercase items-center w-auto">
                            COMUNIDAD EMPRENDEDORA
                        </span>
                        <ComunidadIlustration
                            class="float-end mb-2 w-[70%] md:w-[45%] mt-[0%] md:mt-0 rounded-lg ml-2 -mr-12 md:-mr-20 shape-custom-comunidad" />
                        <p class="text-gray-500 mt-6 text-sm md:text-base leading-6 max-w-lg">
                            Formar parte de nuestra comunidad significa unirte a una red vibrante de emprendedores que
                            comparten tus mismas pasiones y desafíos.
                            Aquí encontrarás un espacio donde podrás conectar, aprender y colaborar con otros
                            empresarios que buscan crecer y mejorar.
                            Juntos, podemos superar obstáculos y aprovechar oportunidades para impulsar nuestros
                            emprendimientos al siguiente nivel.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import AdministracionIlustration from '../svgs/AdministracionIlustration.vue';
import ComunidadIlustration from '../svgs/ComunidadIlustration.vue';
import PedidosIlustration from '../svgs/PedidosIlustration.vue';
import PersonalizableIlustration from '../svgs/PersonalizableIlustration.vue';


export default {
    name: "SectionThree",
    components: {
        PersonalizableIlustration,
        PedidosIlustration,
        AdministracionIlustration,
        ComunidadIlustration
    }
};
</script>

<style>
.shape-custom-personalizable {
    shape-outside: url('@/assets/images/personalizable.svg');
}

.shape-custom-pedidos {
    shape-outside: url('@/assets/images/pedidos.svg');
}

.shape-custom-administracion {
    shape-outside: url('@/assets/images/administracion.svg');
}

.shape-custom-comunidad {
    shape-outside: url('@/assets/images/comunidad.svg');
}
</style>