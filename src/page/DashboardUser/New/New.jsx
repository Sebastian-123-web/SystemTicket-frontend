
import { Card, Typography } from "@material-tailwind/react"

export const New = ({col,row}) => {
  return (
    <>
        <Card className={`${col} ${row} p-5 hidden xl:flex`}>
            <Typography variant='h5' color='black'>Noticias</Typography>
        </Card>
    </>
  )
}
