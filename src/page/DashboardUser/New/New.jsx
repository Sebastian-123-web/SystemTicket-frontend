
import { Card, Typography } from "@material-tailwind/react"

export const New = ({col,row}) => {
  return (
    <>
        <Card className={`${col} ${row} p-5`}>
            <Typography variant='h5'>Noticias {row} </Typography>
        </Card>
    </>
  )
}
