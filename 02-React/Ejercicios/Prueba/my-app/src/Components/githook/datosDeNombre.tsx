import React/*, { useEffect }*/ from 'react';

export const DatosDeNombre = () => {
  const [inputValue, setInputValue] = React.useState('')

  function handleClick() {
    console.log(inputValue);
    ejecutarClick()
  }

  const [perfil, setPerfil] = React.useState<User>()

  /* useEffect(() => {
        let controller = new AbortController();
        (async () => {
            setPerfil(await fetchData(inputValue))
        })()
        return () => controller?.abort()
    }, [inputValue]) */

    function ejecutarClick(){
        let controller = new AbortController();
        (async () => {
            setPerfil(await fetchData(inputValue))
        })()
        return () => controller?.abort()
    }

  return (
    <div>
        <p>
        <img src = {perfil?.avatar} alt = "avatar" height={160}/>
                <p>Usuario: {perfil?.nombre}<br/>
                    Empresa: {perfil?.empresa}<br/>
                    Seguidores: {perfil?.seguidores}
        <br/>        
        <input type="text" onChange={(e) => setInputValue(e.target.value)} ></input>
        <button onClick={handleClick}>Buscar</button>
        </p>
        </p>
    </div>
  )
}

async function fetchData(name: string){
    const response = await fetch(`https://api.github.com/users/${name}`);
    const perfilUsuario = await response.json();
    return {
        nombre: perfilUsuario.name,
        avatar: perfilUsuario.avatar_url,
        empresa: perfilUsuario.company,
        seguidores: perfilUsuario.followers,
    };
}

type User = Awaited<ReturnType<typeof fetchData>>;

export default DatosDeNombre;