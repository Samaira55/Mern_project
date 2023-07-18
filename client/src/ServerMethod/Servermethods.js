export function GitHubSignFunction() {
  window.location.href = 'http://127.0.0.1:3002/auth/github';
}


export async function GetAuthenication(uid) {
  const response = await fetch('http://localhost:3002/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ uid })
  }).catch((response) => { console.log("Catch error : ", response.message) })
  let user = await response.json()
  console.log("Verufy token : ",user, "UID ",uid)
  sessionStorage.setItem('id', uid)
  sessionStorage.setItem('fullname',user.name)
  sessionStorage.setItem('verificationToken', user.accessToken);
}

export async function Fetchdata(){
  console.log("Introduction called uid : ",sessionStorage.getItem('id'))
  const response = await fetch(
    'http://localhost:3002/user/Fetchdata',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization':'Bearer '+sessionStorage.getItem('verificationToken'),
      },
      body:JSON.stringify({id:sessionStorage.getItem('id')})
    }).catch((error) => console.log("Search error :", error.message))

    let searchresult = await response.json()
    console.log("Introduction : ",searchresult)
    //return searchresult.foundresult
}