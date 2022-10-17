import * as React from 'react';

class GithubPerfil extends React.Component<{gitName: string}, {user: User}> {

    constructor(props: any) {
        super(props)
        this.state = {user: {nombre:"", avatar:"",empresa:"", seguidores:""}}
    }

    async componentDidMount(){
        //document.title = 'Cambio de contador ' + this.state.count
        let usuario = fetchData(this.props.gitName)
        this.setState({ user: (await usuario)})
    }

    componentDidUpdate(){
        //document.title = 'Cambio de contador ' + this.state.count
    }

    render(){
        return(
            <div className="GithubPerfil" style={{display: "flex",flexDirection: "column"}}>
                <img src = {this.state.user.avatar} alt = "avatar" height={160}/>
                <p>Usuario: {this.state.user.nombre}<br/>
                   Empresa: {this.state.user.empresa}<br/>
                   Seguidores: {this.state.user.seguidores}
                </p>
                
                {/* <button onClick={() => this.setState({count: this.state.count + 1 })}>change title</button>
                <button onClick={() => fetchData('Jorge-Prilux') }>Pillar nombre Github</button> */}
            </div>
        )
    }
}

function fetchData(name: string){
    return fetch(`https://api.github.com/users/${name}`)
    .then((response) => {return response.json()})
    .then((perfilUsuario) => {return{
        nombre: perfilUsuario.name,
        avatar: perfilUsuario.avatar_url,
        empresa: perfilUsuario.company,
        seguidores: perfilUsuario.followers,
    }})
}

type User = Awaited<ReturnType<typeof fetchData>>;

export default GithubPerfil