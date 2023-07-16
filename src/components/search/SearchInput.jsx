import './search.css'

const SearchInput = () => {
    return (
        <>
            <div className='search'>
                <form method='get'>
                    <input type='search' placeholder='Search' />
                </form>
            </div>
        </>
    )
}

export default SearchInput