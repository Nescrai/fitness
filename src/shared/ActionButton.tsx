import { type } from "os"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void
}


const ActionButton = ({ children, setSelectedPage }: props) => {
    return (
        <AnchorLink className="rounded-md bg-sky-500 px-10 py-2 hover:bg-red-600 hover:text-white" onClick={() =>setSelectedPage(SelectedPage.Contact)} href={`#${SelectedPage.Contact}`}>
            {children}
        </AnchorLink>
    )
}

export default ActionButton;