import { TopBar } from "../../../components/TopBar/TopBar"

import { dataSectionAdmin } from "../../../data/dataSectionAdmin"

export const Graphics = () => {
  return (
    <div>
      <TopBar TitleSection={"Graficos"} dataSection={dataSectionAdmin} />
    </div>
  )
}
