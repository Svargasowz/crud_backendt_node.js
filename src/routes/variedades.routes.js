import { Router } from 'express'
import { desactivarVariedades, actualizarVariedades, registrarVariedades, listarVariedades, buscarVariedades, activarVariedades, variedadesActivas} from '../controllers/variedades.controller.js'
import { validarVariedades } from '../../validate/variedades.validate.js'
import { validarToken } from '../controllers/seguridad.controller.js'

const routeVariedades = Router()

// localhost:3333/variedades/#
routeVariedades.post("/registrar", validarToken, validarVariedades, registrarVariedades)
routeVariedades.put("/actualizar/:codigo",validarToken, validarVariedades, actualizarVariedades)
routeVariedades.put("/desactivar/:codigo",validarToken, desactivarVariedades)
routeVariedades.put("/activar/:codigo",validarToken, activarVariedades)
routeVariedades.get('/listar',validarToken, listarVariedades)
routeVariedades.get('/activas',validarToken, variedadesActivas)
routeVariedades.get('/buscar/:codigo',validarToken, buscarVariedades)

export default routeVariedades