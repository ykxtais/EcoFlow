"use client";
import Image from "next/image";
import Link from "next/link";
import Rodape from "@/components/Rodape/Rodape";


export default function Equipe() {
  return (
    <div>
    <div className="equipe">
      <div className="equipebase">
        <div className="ourequipe">
          <h2>Nossa Equipe</h2>
          <p>
            Conheça nossa equipe, que está sempre pronta para oferecer o melhor
            serviço e suporte! A equipe do EcoFlow é dedicada a transformar a
            experiência dos nossos usuários por meio da tecnologia. Abaixo, veja
            o repositório do projeto EcoFlow!
          </p>
          
          <div className="btnsequipe">
            <a href="https://github.com/ykxtais/EcoFlow" target="_blank" rel="noopener noreferrer" className="btnreposi">Repositório</a>
            <Link href="/">
                <button className="btnvoltareq">Voltar</button>
            </Link>
          </div>
        </div>



        <div className="members">
        <div className="membersec">
            <Image src="/img/intais.jpg" alt="Taís" width={120} height={120} className="membersimg" />
            <h3>Taís</h3>
            <p>Turma: 1TDSPM</p>
            <p>Rm: 557553</p>
            <div className="social">
              <a href="https://github.com/ykxtais" target="_blank" rel="noopener noreferrer">
                <Image src="/img/github.png" alt="github" width={24} height={24} />
              </a>
              <a href="https://www.linkedin.com/in/ta%C3%ADsx" target="_blank" rel="noopener noreferrer">
                <Image src="/img/linkedin.png" alt="linkedin" width={24} height={24} />
              </a>
            </div>
          </div>


          <div className="membersec">
            <Image src="/img/iniris.jpg" alt="Iris" width={120} height={120} className="membersimg" />
            <h3>Iris</h3>
            <p>Turma: 1TDSPM</p>
            <p>Rm: 557728</p>
            <div className="social">
              <a href="https://github.com/Irissuu" target="_blank" rel="noopener noreferrer">
                <Image src="/img/github.png" alt="github" width={24} height={24} />
              </a>
              <a href="https://www.linkedin.com/in/iristavares/" target="_blank" rel="noopener noreferrer">
                <Image src="/img/linkedin.png" alt="linkedin" width={24} height={24} />
              </a>
            </div>
          </div>

          
        </div>
      </div>
      
      
    </div>
    <Rodape />
    </div>
  );
}
