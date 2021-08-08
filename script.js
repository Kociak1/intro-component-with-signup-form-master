const inputs = document.querySelectorAll("input:not(input[type='submit'])")
const form = document.querySelector("form")

form.addEventListener('submit', e => {
    inputs.forEach(input => {
         if((input.name =='pass') && (input.value.length < 8)) {
            console.log('pass')
            e.preventDefault()
            const parent = input.parentElement
            parent.classList.add('err')
            
        }
        if(input.value == '' || input.value == undefined) {
            e.preventDefault()
            const parent = input.parentElement
            parent.classList.add('err')
        }
        if((input.name =='name') || (input.name =='last')) {
            console.log(input.name)
            if((input.value.length < 3) || (input.value.length > 20)) {
                e.preventDefault()
            const parent = input.parentElement
            parent.classList.add('err')
            }
        }
       
         if(input.name =='email') {
             const reg = /\S{3,20}@\S{2,20}\.\w{2,7}/
             if(reg.test(input.name)) {
            e.preventDefault()
            const parent = input.parentElement
            parent.classList.add('err')
        }
         }
        
    })
})