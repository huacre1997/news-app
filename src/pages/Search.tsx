import { useSearchParams } from "react-router-dom";

type Props = {}

const Search = (props: Props) => {
    const [searchParams] = useSearchParams();
    let search = searchParams.get('q')
    return (
        <div>{search}</div>
    )
}

export default Search