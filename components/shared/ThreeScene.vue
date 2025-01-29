<template>
    <div ref="sceneContainer" style="width: 100%; height: 400px;"></div>
</template>

<script>
import * as THREE from 'three';

export default {
    mounted() {
        this.initThreeJs();
    },
    methods: {
        async initThreeJs() {
            // Crear escena
            const scene = new THREE.Scene();

            // Establecer un fondo blanco
            scene.background = new THREE.Color(0xffffff); // Blanco

            // Crear cámara perspectiva
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(2, 0, 5); // Ajustar la posición de la cámara
            camera.lookAt(0, 0, 0); // Asegurarse de que la cámara esté mirando al centro de la escena

            // Rotar la cámara 30 grados en el eje Y
            camera.rotation.y = Math.PI / 15; // -Math.PI / 6 equivale a -30 grados

            // Crear renderizador
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            this.$refs.sceneContainer.appendChild(renderer.domElement);

            // Crear luz ambiental
            const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Luz ambiental blanca
            scene.add(ambientLight);

            // Crear luz direccional
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(5, 5, 5).normalize();
            scene.add(directionalLight);

            // Importar GLTFLoader dinámicamente
            const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader');

            // Cargar el modelo .glb
            const loader = new GLTFLoader();
            loader.load('/models/phone.glb', (gltf) => {
                const model = gltf.scene;
                scene.add(model);

                // Recorrer todos los objetos del modelo y asignarles materiales diferentes
                model.traverse((child) => {
                    if (child.isMesh) {
                        // Asignar un color pastel basado en #E43660 para play y home
                        const pastelColor = new THREE.Color(0xE43660).lerp(new THREE.Color(0xFFFFFF), 0.5); // Mezclar el color con blanco

                        if (child.name === 'Play' || child.name === 'Home') {
                            child.material = new THREE.MeshStandardMaterial({ color: pastelColor });
                        } else if (child.name === 'Phone') {
                            child.material = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Azul para el teléfono
                        } else {
                            child.material = new THREE.MeshStandardMaterial({ color: 0xcccccc }); // Gris para otros objetos
                        }
                    }
                });

                // Animación
                const animate = () => {
                    requestAnimationFrame(animate);
                    renderer.render(scene, camera);
                };
                animate();
            });

            // Guardar referencia de cámara y escena para otras funciones si es necesario
            this.scene = scene;
            this.camera = camera;
            this.renderer = renderer;
        },
    },
};
</script>

<style scoped>
/* Estilos para el contenedor del objeto 3D */
</style>
