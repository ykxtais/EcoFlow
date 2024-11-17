"use client"
import Image from "next/image";
import Link from "next/link";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";

export default function Home() {
  return (
    <div>
      <Cabecalho />
    <div>
      <div className="homeeco">
        <h1>
          Como a Tecnologia Pode Ajudar o Mundo
        </h1>
        <div className="quadrohome">
          <p>
          EcoFlow é uma solução inteligente que utiliza inteligência artificial! A IA chamada Eve para transformar centros de reciclagem, otimizando 
          a triagem de materiais recicláveis. Essa tecnologia automatizada aumenta a eficiência da separação de resíduos,
          reduz o consumo de energia, evita o acúmulo de resíduos em aterros e diminui as emissões de gases de efeito estufa.
          Incentivando o uso de materiais recicláveis na indústria de energias renováveis, EcoFlow promove uma indústria mais
          sustentável e ecológica. Seu objetivo é apoiar um futuro mais sustentável e contribuir para a preservação do meio
          ambiente, promovendo uma economia circular e limpa.
          </p>
          <Image
            src="/img/tecnoplanta.jpg"
            alt="Tecnologia e Planta"
            width={300}
            height={200}
            className="ml-6 rounded-lg shadow-md"
          />
        </div>
      </div>

      
      <div className="desempenhoeco">
        <h1>Desempenho</h1>
        <div className="desempenhobox">
          <div className="desempenholeft">
            <Image
              src="/img/fotor1.png"
              alt="Foto 1"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
            <p>A reciclagem de materiais, especialmente de metais, papel e vidro, consome muito menos energia do que a produção a
              partir de matérias-primas. Por exemplo, a reciclagem de alumínio economiza até 95% da energia necessária para produzir
              alumínio novo a partir do minério de bauxita. Esse tipo de economia direta contribui para a redução da demanda energética na indústria.</p>
          </div>
          <div className="desempenhoright">
            <Image
              src="/img/fotor2.png"
              alt="Foto 2"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
            <p>A reciclagem evita que grandes volumes de resíduos sejam enviados para aterros, o que libera espaço e reduz a geração de metano,
              um potente gás de efeito estufa. Além disso, materiais críticos como lítio, cobalto e outros metais usados em baterias e eletrônicos podem
              ser recuperados e reinseridos na cadeia produtiva, contribuindo para uma economia circular e reduzindo a necessidade de mineração intensiva.</p>
          </div>
          <div className="desempenholeft">
            <Image
              src="/img/fotor3.png"
              alt="Foto 3"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
            <p>Componentes de energia renovável, como painéis solares e turbinas eólicas, muitas vezes contêm materiais recicláveis. A reciclagem garante
              a disponibilidade de matérias-primas para essas tecnologias, o que apoia a transição para fontes de energia renováveis e mantém o ciclo sustentável ao longo do tempo.</p>
          </div>
          <div className="desempenhoright">
            <Image
              src="/img/fotor4.png"
              alt="Foto 4"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
            <p>Ao reduzir a necessidade de extração e processamento de matérias-primas, a reciclagem diminui as emissões associadas a esses processos.
              Menos emissões significam menos aquecimento global e um impacto menor sobre o clima, o que é essencial para a transição para uma matriz energética
              mais limpa e sustentável.</p>
          </div>
          <div className="desempenholeft">
            <Image
              src="/img/fotor5.png"
              alt="Foto 5"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
            <p>O desenvolvimento de tecnologias para separar, classificar e reaproveitar materiais em centros de reciclagem também impulsiona inovações que
              melhoram a eficiência energética dos processos. Máquinas mais eficientes e métodos de separação automática (como inteligência artificial para
              triagem de materiais) ajudam a otimizar o uso de energia nas operações dos centros.</p>
          </div>
        </div>
      </div>

      <div className="faleve">
        <h1>Inteligência Artificial Eve</h1>
        <p>
        Eve, a assistente IA do EcoFlow, está pronta para otimizar o processo de reciclagem! Com tecnologia avançada,
        ela torna os centros de reciclagem mais eficientes e sustentáveis. Fale com Eve e ajude a construir um futuro mais verde!
        </p>
        <Link href="/chatboteve">
          <button className="btnfaleve">Fale com Eve</button>
        </Link>
      </div>
    </div>
    <Rodape />
    </div>
  );
}
