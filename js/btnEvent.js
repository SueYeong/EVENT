(function(){
    const conEl = document.querySelector('.con')
    const addColor = document.querySelector('.add_color')
    const removeColor = document.querySelector('.remove_color')

    const handleAdd = () => {
        conEl.classList.add('on')
    }

    const handleRemove = () => {
        conEl.classList.remove('on')
    }

    addColor.addEventListener('click', handleAdd)
    removeColor.addEventListener('click', handleRemove)
})()