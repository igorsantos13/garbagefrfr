export default function Header(){
    return(
        <header className="w-screen mb-11">
            <nav>
                <ul>
                    <li className="flex flex-row justify-around ">
                        <AnchorLink >About</AnchorLink>
                        <AnchorLink >Contact</AnchorLink>
                        <AnchorLink >Press</AnchorLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

function AnchorLink(props: any){
    return(
        <a className="cursor-pointer hover:text-sky-700" href="#">{props.children}</a>
    )
}