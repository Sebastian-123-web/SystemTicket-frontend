import { Button, Input, Typography } from "@material-tailwind/react";

export const Login = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[400px] bg-white p-5 grid gap-5">
                <Typography variant="h5" color="blue-gray">Sign Up</Typography>
                <Input label="Correo" type="email" />
                <Input label="Contraseña" type="password" />
                <Button>Iniciar Sesion</Button>
            </div>
        </div>
    )
}
