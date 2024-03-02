import { useState } from 'react'

import { Spinner } from '@material-tailwind/react'

export const UploadImage = () => {

    // VISTA PREVIA DE LA IMAGEN
    const [loading, setLoading] = useState(false);
    const [imgPreview, setImgPreview] = useState([])

    const imagenPreview = async (e) => {
        setLoading(true); // Activa el indicador de carga.

        const img = [];

        const loadImages = Array.from(e.target.files).map((file) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = function (e) {
                    img.push(e.target.result);
                    resolve();
                };
                reader.readAsDataURL(file);
            });
        });

        await Promise.all(loadImages);

        setLoading(false); // Desactiva el indicador de carga.
        setImgPreview(img);
    };

    return (
        <>
            
            <div className='flex flex-col justify-center'>
                <div className='w-full inline-flex flex-wrap gap-3 justify-center mb-3'>
                { loading ? (
                        <div className="spinner">
                            <Spinner />
                        </div>
                    ) : (
                        <div className="w-full inline-flex flex-wrap gap-3 justify-center mb-3">
                            {imgPreview.map((i, k) => (
                            <div key={k} className="w-[80px] h-[80px] overflow-hidden">
                                <img src={i} alt="" className="flex w-full h-full rounded-md bg-[#FFF] border border-slate-300" />
                            </div>
                            ))}
                        </div>
                )}
                </div>
                <div>
                    <div className={`absolute flex justify-center items-center w-full h-[60px] rounded-md bg-[#f3f5f9] border border-[#212121] border-dashed border-slate-300`}>
                        <label htmlFor="imagen" className='text-[#9AAFC7]' ><ion-icon name="image-outline"></ion-icon> Añadir imagen</label>
                    </div>
                    <input type="file" id='imagen' multiple className='opacity-0 w-full h-[60px]' onChange={imagenPreview} />
                </div>
            </div>
        </>
    )
}
