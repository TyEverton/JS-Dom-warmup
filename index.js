console.log('Hello')

const changeTheme = (newTheme, target) => {
  console.log('Button clicked')
    const elements = document.getElementsByClassName('target')
    for(let i = 0; i < elements.length; i++){
      const classArray = new Array(elements[i].classlist)
      for(let j = 0; j < classArray.length; j++){
        if(classArray[j] ! == newTheme || classArray[j] !== target){
          elements[i].classList.remove(classArray[j])
        }
        elements[i].classList.toggle(newTheme)
      }
    }
}

