const NewsList = () => {
    const data = []
    console.log(data)
    return (
        <div>
            {data.map(article =>(
                <div key={article.id}>
                <h2>{article.title}</h2>
                <p>Aurthor{article.author}</p>
                </div>
            ))}
        </div>
    )
}

export default NewsList