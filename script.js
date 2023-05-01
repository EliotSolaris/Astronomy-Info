const star = document.querySelector('.star')
const copyright = document.querySelector('.copyright')
const title = document.querySelector('.picture-title')
const info = document.querySelector('.info')


const ASTRO_PIC = 'https://go-apod.herokuapp.com/image'
const ASTRO_INFO = 'https://apod.as93.net/apod'


const getStar = () => {
     const starUrl = ASTRO_PIC
     const starUrlInfo = ASTRO_INFO
    axios.get(starUrl).then(res => {
        console.log(res.data)  
    
    star.setAttribute('src', starUrl)
    

    })

    axios.get(starUrlInfo).then(res => {
        console.log(res.data)  
     
        const explanation = res.data.explanation
        const copytext = res.data.copyright
        const titleText = res.data.title

        copyright.textContent = copytext
        title.textContent = titleText
        info.textContent = explanation
        star.setAttribute('alt', titleText)
    })

}
getStar()




