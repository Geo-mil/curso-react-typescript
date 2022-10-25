import React /*, { useEffect }*/ from 'react'

export const DatosDeNombre = () => {
  const [inputValue, setInputValue] = React.useState('')

  function handleClick() {
    console.log(inputValue);
    ejecutarClick()
  }

  const [isLoading, setIsLoading] = React.useState(false);
  const [warning, setWarning] = React.useState(false);
  const [perfil, setPerfil] = React.useState<User>()

  /* 
    useEffect(() => {
        let controller = new AbortController();
        (async () => {
            setPerfil(await fetchData(inputValue))
        })()
        return () => controller?.abort()
    }, [inputValue]) 
  */

  function ejecutarClick(){
      let controller = new AbortController();
      setIsLoading(true)
      fetchData(inputValue)
        .then((perfil) => {
          if(perfil.avatar !== undefined){
            setIsLoading(false);
            setWarning(false)
            setPerfil(perfil);
            console.log(perfil)
          }
          else{
            setIsLoading(false);
            setWarning(true)
            console.log(perfil)
          }
        })
        .catch((error) => {
          setIsLoading(false);
          setWarning(true)
          console.log(error)
        })

      return () => controller?.abort()
  }

  let imagen = null
  if(isLoading){
    imagen = <div className='App-loading'> <LoadingData show={isLoading}/> </div>
  }else{
    if(warning){
      imagen = <div className='App-warning'> <WarningData show={warning}/> </div>
    }else{
      imagen = <img src = {perfil?.avatar} alt = "avatar" height={160}/>
    }
  }

  let geolocation = undefined
  if (!navigator.geolocation) {
    geolocation = false
  }else{
    geolocation =true
  }

  return (
    <div>
        <p>
          {imagen}
          <p> Usuario: {perfil?.nombre}<br/>
              Empresa: {perfil?.empresa}<br/>
              Seguidores: {perfil?.seguidores}
              <br/>
              Browser {geolocation ? ('support') : ('doesn`t support') } geolocation
              <br/>        
              <input type="text" onChange={(e) => setInputValue(e.target.value)} ></input>
              <button onClick={handleClick}>Buscar</button>
          </p>
        </p>
    </div>
  )
}

/* async function fetchData(name: string){
    const response = await fetch(`https://api.github.com/users/${name}`)
      
    const perfilUsuario = await response.json()
    return {
      nombre: perfilUsuario.name,
      avatar: perfilUsuario.avatar_url,
      empresa: perfilUsuario.company,
      seguidores: perfilUsuario.followers,
    }
} */

function fetchData(name: string){
  return fetch(`https://api.github.com/users/${name}`)
    .then((response) => {
      return response.json()
    })
    .then((perfilUsuario) => {
      return {
        nombre: perfilUsuario.name,
        avatar: perfilUsuario.avatar_url,
        empresa: perfilUsuario.company,
        seguidores: perfilUsuario.followers,
      }
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}

type User = Awaited<ReturnType<typeof fetchData>>;

type LoadingDataProps = {
  show: boolean
}
function LoadingData({show}: LoadingDataProps){
  if(!show) return null
  return <h1>Loading...</h1>
}

type WarningDataProps = {
  show: boolean
}
function WarningData({show}: WarningDataProps){
  if(!show) return null
  return <h1>Warning!</h1>
}

export default DatosDeNombre;