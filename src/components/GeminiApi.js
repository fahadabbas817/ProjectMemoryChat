

export const fetchGemini =async(message)=>{
    
    try {

        const response= await fetch('http://localhost:3080/gemini',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json' // Specify JSON content type
      },
      body: JSON.stringify({
        message:message
      })
     })

     
     
        const data = await response.text()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}