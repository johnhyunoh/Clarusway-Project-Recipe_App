import { useEffect,useState } from "react";
import { InputGroup,Input,Button } from "reactstrap";
import FilteredItems from "../filteredItems";
import './style.css';

const Home = ({updateData}) => {

    const [ data, setData ]=useState([])
    const [ text, setText ] = useState("")
    const [ search, setSearch ] = useState("")
    const [ dropDown, setDropDown ] = useState("breakfast")
    const mealType = ["breakfast", "lunch", "dinner", "snack", "teatime"]

const handleSearch=(e)=>{
    setText(e.target.value)
}

const handleSubmitSearch=()=>{
    setSearch(text)
    setText("")
}

const handleDropDown=(e)=>{
    setDropDown(e.target.value)
}

    useEffect(()=> {
        const apiID = "55ea3f16"
        const apiKey = "954c35ca6674534e3648202edd299efe"
        const url = `https://api.edamam.com/search?q=${search}&app_id=${apiID}&app_key=${apiKey}&mealType=${dropDown}`

        if(search) {
            fetch(url)
                .then(res => res.json())
                .then(req=> {
                    setData(req.hits)
                    updateData(req.hits)
                })
        }
    }, [search])

    return (
        <div>
            <div className="search">
                <InputGroup>
                    <Input placeholder="search..." onChange={handleSearch} value={text} />
                </InputGroup>
                <Button color='primary' onClick={handleSubmitSearch}>
                    search
                </Button>
                <select name ="" id="" onChange={handleDropDown}>
                {
                    mealType.map(type=>{
                         return (
                            <option value={type} key={type}>
                                {type.toUpperCase(type)}
                            </option>
                        )
                    })
                }
                </select>
            </div>
            { data && <FilteredItems data={data} /> }
        </div>
    )
}

export default Home;