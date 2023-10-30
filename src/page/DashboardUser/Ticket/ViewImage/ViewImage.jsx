
// DE TERCEROS
import { useState } from "react";
import { Card, Dialog, DialogBody, Typography } from "@material-tailwind/react";

// FUNCIONES DEL PROYECTO

// COMPONENTES DEL PROYECTO

export const ViewImage = ({imagenes}) => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  // MANDAR EL URL DE LA IMAGEN AL MODAL
  const [viewImg, setViewImg] = useState();
  const handleViewImg = (img) => {
    setViewImg(img);
  };

  return (
    <Card className="col-span-12 xl:col-span-5 row-span-3 p-5">
      <Typography variant="h5" color='black' className="mb-3">Imagenes</Typography>
      <div className="flex items-center justify-around w-full h-full">
        {imagenes.map((image, i) => (
          <div key={i} className="h-20 w-20">
            <Card
              className="h-20 w-20 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
              onClick={() => {
                handleOpen();
                handleViewImg(image.imge);
              }}
            >
              <img
                alt="nature"
                className="h-full w-full object-cover object-center"
                src={image.imge}
              />
            </Card>
          </div>
        ))}
        <Dialog size="lg" open={open} handler={handleOpen} className="p-3">
          <DialogBody divider={true} className="p-0">
            <img
              alt="nature"
              className="w-full object-cover object-center"
              src={viewImg}
            />
          </DialogBody>
        </Dialog>
      </div>
    </Card>
  );
};
