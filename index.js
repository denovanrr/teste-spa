import {Router} from "./router.js"

const router = new Router()
router.add('/',"/paginas/home.html")
router.add("/about","/paginas/about.html")
router.add("/contact","/paginas/contact.html")
router.add(404,"/paginas/404.html")

router.handle()

window.onpopstate = ()=> router.handle()
window.route= () => router.route()