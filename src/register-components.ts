import { App } from 'vue'

export default {
    install(app: App<Element>) {
        const components = import.meta.globEager("./components/**/**.vue");
        Object.entries(components).forEach(([path, definition]) => {
            // Получаем имя компонента из названия файла
            // "./components/Fruits.vue" будет "Fruits"
            const componentName = path?.split('/')?.pop()?.replace(/\.\w+$/, '')

            // Регистрация компонентов в текущий контекст
            app.component(componentName ?? "", (definition as any).default)
        })
    },
};