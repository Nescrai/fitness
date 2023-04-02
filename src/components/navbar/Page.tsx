
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";



type props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Page = ({ page, selectedPage, setSelectedPage }: props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
    return (
        <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-white" : ""} transition duration-500 hover:text-sky-500` }
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage) }
        >
            {page}
        </AnchorLink>
    )
}

export default Page;
