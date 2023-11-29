import { TopBar } from "../../../components/TopBar/TopBar"

import { dataSectionAdmin } from "../../../data/dataSectionAdmin"

export const Tickets = () => {
  return (
    <div>
      <TopBar TitleSection={"Tickets"} dataSection={dataSectionAdmin} />

    </div>
  )
}
