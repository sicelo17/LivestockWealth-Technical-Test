import './category.css'

const Categories = () => {
    return (
        <>
            <div className='categories'>
                <Category value='Earring' />
                <Category value='Necklace' />
                <Category value='Ring' />
            </div>
        </>
    )
}

const Category = (props) => {
    return (
        <>
            <button className='category-btn'>{props.value}</button>
        </>
    )
}

export default Categories