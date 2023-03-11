import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteDeviceController } from "./controllers/DeleteDeviceController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetDeviceController } from "./controllers/GetDeviceController";
import { GetReadController } from "./controllers/GetReadController";
import { GetUserController } from "./controllers/GetUserController";
import { RefreshTokenUserController } from "./controllers/RefreshTokenUserController";
import { UpdateDeviceController } from "./controllers/UpdateDeviceController";
import { UpdateUserController } from "./controllers/UpdateUserController";


const router = Router();

const refreshTokenUserController = new RefreshTokenUserController();
const authenticateUserController = new AuthenticateUserController();
const getDeviceController = new GetDeviceController();
const updateDeviceController = new UpdateDeviceController();
const deleteDeviceController = new DeleteDeviceController();
const createUserController = new CreateUserController();
const getUserController = new GetUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const getReadController = new GetReadController();

router.post("/refresh_token", refreshTokenUserController.handle)
router.post("/login", authenticateUserController.handle)
router.get("/device", getDeviceController.handle)
router.put("/device", updateDeviceController.handle)
router.delete("/device/:idDevice", deleteDeviceController.handle)
router.post("/usuario", createUserController.handle)
router.get("/usuario", getUserController.handle)
router.put("/usuario", updateUserController.handle)
router.delete("/usuario/:idUsuario", deleteUserController.handle)
router.get("/leitura", getReadController.handle)

router.get("/courses", ensureAuthenticated,(request, response) =>{
    return response.json([
        {id: 1, name: "NodeJS"},
        {id: 2, name: "ReactJS"},
        {id: 3, name: "React Native"},
        {id: 4, name: "Flutter"},
        {id: 5, name: "Elixir"},
    ])
})

export {router}