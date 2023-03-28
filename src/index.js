const init = () => {
  
    const inputForm = document.querySelector('form')
    inputForm.addEventListener('submit',(event) =>{
        event.preventDefault()
        //ways of accessing the input 
        //(Access Input Value from an Event Object)
        //console.log(event.target.children[1].value)
        //(Access Input Value Directly)
        const input = document.querySelector('input#searchByID')

        console.log(input.value)

        //fectch data according to user input (interpolation used)
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(res => res.json())
        .then(data => {
            //access elements 
            const title = document.querySelector('section#movieDetails h4')
            const summary = document.querySelector('section#movieDetails p')

            //change content of title and summary based on retrived data
            title.innerText = data.title
            summary.innerText = data.summary
        })

    })
}

document.addEventListener('DOMContentLoaded', init);