import React, { useEffect, useState } from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet
} from '../src/lib/AlurakutCommons';

import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelationsBox({ title, itens, type }) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">{title} ({itens.length})</h2>

      <ul>
        {itens.map((item, index) =>
          index < 6 && (
            <li key={index}>
              { type === 'followers' ? (
                <a href={item.html_url} target={'_blank'}>
                  <img src={item.avatar_url} />
                  <span>{item.login}</span>
                </a>
              ) : (
                <a href={'#'}>
                  <img src={item.image} />
                  <span>{item.title}</span>
                </a>
              )}
            </li>
          )
        )}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}

export default function Home() {
  const usuarioAleatorio = 'luizsp7m';

  const [followers, setFollowers] = useState([]);

  const [comunidades, setComunidades] = React.useState([{
    id: '12802378123789378912789789123896123',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }, {
    id: '12802378123789378912789789128896123',
    title: 'JS de cada dia',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
  }]);

  async function getFollowers() {

    await fetch('https://api.github.com/users/luizsp7m/followers').then(response => {
      return response.json();
    }).then(response => {
      setFollowers(response);
    });
  }

  useEffect(() => {
    getFollowers();
  }, []);

  return (
    <>
      <ToastContainer />
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a), {usuarioAleatorio}
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>

            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);

              if (!dadosDoForm.get('title')) return;
              if (!dadosDoForm.get('image')) return;

              const comunidade = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              }

              const comunidadesAtualizadas = [...comunidades, comunidade];

              setComunidades(comunidadesAtualizadas);

              toast('👏 Comunidade adicionada!');
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>

              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBox
            title={'Comunidades'}
            itens={comunidades}
            type={'community'}
          />

          <ProfileRelationsBox
            title={'Pessoas da comunidade'}
            itens={followers}
            type={'followers'}
          />
        </div>
      </MainGrid>
    </>
  )
}