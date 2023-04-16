function getNewAdvice() : Promise<string> {
    return new Promise((resolve,reject)=>{
        fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
          const advice = data.slip.advice as string;
          resolve(advice);
        })
        .catch(reject);
    })
}

  export default getNewAdvice;