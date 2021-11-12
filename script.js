    const typing=document.querySelector('[class="typing"]')
    const messages = ['igor','igorrzinho','igor Silva']
    
    let messagesIndex = 0
    let characterIndex = 0
    let currentMessages = ''
    let currentCharacter= ''
    
    function type(){
      if(messagesIndex === messages.length){
        messagesIndex=0
      } 
      
      currentMessages = messages[messagesIndex]
      currentCharacter = currentMessages.slice(0, characterIndex++) 
      typing.textContent = currentCharacter 
      
      if(currentCharacter.length === currentMessages.length){
        messagesIndex++
        characterIndex = 0
      }
    }
    
    setInterval(type,200)
