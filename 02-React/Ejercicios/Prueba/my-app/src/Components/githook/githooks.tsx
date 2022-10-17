import React from "react";
import { useEffect } from "react";

export function GithooksRepo(props:{name:string}) {
    
    const [perfil, setPerfil] = React.useState<User>()

    useEffect(() => {
        let controller = new AbortController();
        (async () => {
            setPerfil(await fetchData(props.name))
        })()
        return () => controller?.abort()
    }, [props.name])

    return(
        <div style={{display: "flex",flexDirection: "column"}}>
            <img src = {perfil?.avatar} alt = "avatar" height={160}/>
                <p>Usuario: {perfil?.nombre}<br/>
                   Empresa: {perfil?.empresa}<br/>
                   Seguidores: {perfil?.seguidores}
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

export default GithooksRepo