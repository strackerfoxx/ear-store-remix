import { Outlet, useOutletContext } from "@remix-run/react" 

export default function ears() {
  return (
    <>
        <Outlet context={useOutletContext()} />
    </>
  )
}
