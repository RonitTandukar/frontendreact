import {useEffect, useState} from "react"

const Home = () => {

    const [article, setArticle] = useState([])

    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2&q=us")
        .then(res => {
          return res.json()
        })
        .then(data => {
          setArticle(data)
        })
      },[])

      const keysAndValues = Object.entries(article)
      
      return(
        <div>
          {
            keysAndValues.map(item => {
              return(
                <div key={item.id}>
                  {item.title}
                </div>
              )
            })
          }
        </div>
      )
    
}

export default Home