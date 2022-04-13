import Container from "../components/Container";
import ContainerLista from "../components/ContainerLista";
import ListUsuarios from "../components/ListUsuarios";
import Main from "../components/Main";
import Titulo from "../components/Titulo";
import useUsuarios from "../hooks/useUsuarios";
import NavLink from "../components/NavLink";

export default function Home() {
  const {
    usuarios,
    deletar,
    pegarTodos
  } = useUsuarios()

  return (
    <Main>
      <Container>
        <Titulo titulo="Lista de usuários" />
        <ContainerLista>
          {
            usuarios.map(usuario => <ListUsuarios usuario={usuario} key={usuario.id} deletar={() => {
              deletar(usuario.id).then(function () {
                pegarTodos()
              })
            }} />)
          }
        </ContainerLista>
        <ContainerLista>
          <NavLink titulo="Cadastrar" link="/create/usuario" subClass=" mt-5" color="green" />
        </ContainerLista>
      </Container>
    </Main>
  )
}