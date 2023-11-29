import { TopBar } from "../../../components/TopBar/TopBar"

import { dataSectionAdmin } from "../../../data/dataSectionAdmin"

export const Inventory = () => {
  return (
    <div>
      <TopBar TitleSection={"Inventario"} dataSection={dataSectionAdmin} />
    </div>
  )
}
