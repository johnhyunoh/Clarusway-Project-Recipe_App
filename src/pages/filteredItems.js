import Cards from './card';

const FilteredItems=(props)=>{
    const filteredData=props.data
    return (
        <div className='container'>
            <div className='row'>
                {
                    filteredData.map(item=> {
                        return (
                            <div className='col-12 col-sm-3' key={item.recipe.label}>
                                <Cards cardData={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FilteredItems;