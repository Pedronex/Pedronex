import { Technology } from "@/components/technology";
import Image from "next/image";
import { FaJava, FaNode, FaReact, FaJs, FaDocker } from "react-icons/fa6";
import { SiMicrosoftsqlserver, SiNextdotjs, SiPowerbi } from "react-icons/si";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-slate-50 dark:bg-black">
      <div className="flex flex-row justify-between w-full dark:bg-[#121212] bg-[#ddd] p-2 items-center">
        <h1 className="text-2xl font-bold max-md:hidden">Portfólio</h1>
        <h1 className="text-2xl font-bold">Pedro Soares Silva (Pedronex)</h1>
        <Image
          alt="Foto de Perfil de Pedronex"
          src={"https://avatars.githubusercontent.com/u/39323962"}
          width={50}
          height={50}
          className="rounded-full border-4 border-violet-500 p-1"
        />
      </div>
      <div className="flex flex-col w-[95vw] p-6 pb-10 gap-10 mx-auto">
        <header className="flex flex-col gap-3">
          <h1 className="text-xl lg:text-2xl lg:mb-2 mb-1">Sobre</h1>
          <p className="text-justify">
            Atuo como analista e desenvolvedor de sistemas desde 2020 (
            {new Date().getFullYear() - 2020} anos), com experiencia em criação
            de APIs, aplicativos, sites e containers. Sou formado em analise e
            desenvolvimento de sistemas pela PUC-GO (Pontifícia Universidade
            Católica de Goiás) Sou um profissional curioso e apaixonado por
            novas tecnologias. Valorizo ambientes de trabalho multidisciplinares
            e colaborativos. Estou sempre em busca de novos desafios e
            oportunidades para crescer profissionalmente.
          </p>
        </header>
        <header>
          <h1 className="text-xl lg:text-2xl lg:mb-2 mb-1">Tecnologias</h1>
          <p>
            Lista de Tecnologias que tenho experiencia no mercado de trabalho e
            estou aperfeiçoando.
          </p>
        </header>
        <div className="grid grid-cols-9 gap-2 max-sm:grid-cols-2">
          <Technology
            icon={<FaJs size={50} color="#f7e018" />}
            name="Javascript"
            yearOfExperience={2020}
          />
          <Technology
            icon={<FaJava size={50} color="#187494" />}
            name="Java"
            yearOfExperience={2022}
            detail={`Para criar APIs e backend usando Spring`}
          />
          <Technology
            icon={<FaNode size={50} color="#75b758" />}
            name="NodeJS"
            yearOfExperience={2020}
            detail={`Para criar APIs e backend`}
          />
          <Technology
            icon={<FaReact size={50} color="#01daff" />}
            name="ReactJS"
            yearOfExperience={2020}
          />
          <Technology
            icon={<SiNextdotjs size={50} />}
            name="NextJS"
            yearOfExperience={2020}
          />
          <Technology
            icon={<FaReact size={50} color="#667dff" />}
            name="React Native"
            yearOfExperience={2021}
            detail={`Principalmente utilizando o Expo CLI, utilizando 
              o react native nativo também`}
          />
          <Technology
            icon={<FaDocker size={50} color="#1d97ee" />}
            name="Docker"
            yearOfExperience={2022}
          />
          <Technology
            icon={<SiMicrosoftsqlserver size={50} color="#87888a" />}
            name="SQL Server"
            yearOfExperience={2020}
            detail="Criação de backups automatizados, tarefas automatizadas, relatórios, monitoramento, Business Intelligence"
          />
          <Technology
            icon={<SiPowerbi size={50} color="#efc22a" />}
            name="Power BI"
            yearOfExperience={2022}
          />
        </div>
        <header>
          <h1 className="text-xl lg:text-2xl lg:mb-2 mb-1">Projetos</h1>
        </header>
        <div className="w-full h-fit flex flex-row flex-wrap justify-between">
          <Image
            alt="Imagem do Goiás Social"
            src={require("@/assets/GS.png")}
            width={1200}
            height={630}
            className="w-1/2 max-md:w-full"
          />
          <div className="w-2/5 max-md:w-full text-justify">
            <h2 className="text-xl font-bold border-b text-center">
              Goiás Social
            </h2>
            <p>
              Esta aplicação foi desenvolvida para atender à demanda de coletar
              e monitorar, através de formulários, os beneficiários que foram
              consultados pelos analistas de campo. Esses analistas estão
              participando do projeto do governo Goiás Social, com o intuito de
              evitar o desperdício de papel e melhorar a rastreabilidade das
              informações.
            </p>
            <p>
              O aplicativo foi desenvolvido utilizando o ExpoCLI, fazendo
              conexão com uma API desenvolvida pela empresa
            </p>
            <p>O aplicativo faz as seguintes funções:</p>
            <li>Registrar as visitas;</li>
            <li>Armazenar Fotos do local;</li>
            <li>Cadastrar os familiares;</li>
            <li>
              consulta e atualiza a localização exata da familia em situação de
              vulnerabilidade;
            </li>
            <li>Contém um formato de questionário dinâmico;</li>
            <p>
              O aplicativo armazena todos os retornos da API localmente
              (inclusive os campos do questionário) para que o analista possa
              transitar em locais sem internet permitindo com que eles consigam
              sincronizar seus dados gerados posteriormente
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
