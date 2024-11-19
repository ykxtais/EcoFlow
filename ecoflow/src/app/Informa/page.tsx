"use client";
import Image from "next/image";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";

export default function Informa() {
  return (
    <div>
      <Cabecalho />

      <div className="paginforma">
        <div className="informainicio">
          <h1>Descubra Mais Sobre Sustentabilidade</h1>
          <p>
            A sustentabilidade é essencial para o futuro do planeta. Conheça as
            formas como podemos preservar recursos naturais e proteger o meio ambiente.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/img/eterra.png"
            alt="terra"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className="ecoenergias">
        <h1>Energias Sustentáveis</h1>
        <div className="energiasbox">
          <div className="quadrosenergias">
            <Image
              src="/img/ehidreletrica.png"
              alt="hidreletrica"
              width={200}
              height={200}
              className="mb-4 rounded-lg shadow-md"
            />
            <h2>Energia Hidrelétrica</h2>
            <p className="text-md">
            Energia hidrelétrica é aquela obtida pelo movimento da água. Essa energia é produzida pelo aproveitamento da energia
            potencial água. Também chamada de hidroeletricidade, é obtida por uma série de transformações energéticas onde, a
            energia potencial é convertida em cinética e, então, em eletricidade. A conversão para energia elétrica acontece nas turbinas que giram ao receberem água liberada por comportas. A energia cinética
            da queda da água gira as turbinas conectadas a geradores elétricos, que utilizam a rotação para produzir energia elétrica.
            </p>
          </div>
          <div className="quadrosenergias">
            <Image
              src="/img/eeolica.png"
              alt="eolica"
              width={200}
              height={200}
              className="mb-4 rounded-lg shadow-md"
            />
            <h2>Energia Eólica</h2>
            <p className="text-md">
            A energia eólica é o processo pelo qual o vento é transformado em energia cinética e, posteriormente,
            em eletricidade, utilizando equipamentos chamados turbinas eólicas.
            A conversão da energia do ar em movimento em eletricidade é conhecida como energia eólica. Nesse processo,
            a energia do vento movimenta pás (ou hélices), cujo movimento é convertido em energia elétrica nas turbinas por meio de um gerador.
            </p>
          </div>
          <div className="quadrosenergias">
            <Image
              src="/img/esolar.png"
              alt="solar"
              width={200}
              height={200}
              className="mb-4 rounded-lg shadow-md"
            />
            <h2>Energia Solar</h2>
            <p className="text-md">
            A energia solar é a conversão da radiação do sol em eletricidade ou calor, ou seja, é a energia que recebemos do Sol.
            Este meio de obtenção de energia é renovável, limpo e inesgotável. Estas características vêm colocando a
            energia solar como fonte alternativa em relação aos combustíveis fósseis.
            Utilizada como fonte de energia elétrica ou para o aquecimento (energia térmica), seu uso já é cada vez mais presente em nosso dia a dia,
            enquanto novas tecnologias as tornam mais acessíveis.
            </p>
          </div>
        </div>
      </div>

      <div className="ecoajudar">
        <h1>Como Ajudar?</h1>
        <div className="ajudarbox">
          <div className="quadrosajudarleft">
            <Image
              src="/img/elixeiras.png"
              alt="lixeiras"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
            <p className="text-md">
            Separar os resíduos em categorias como papel, vidro, plástico e metal. Isso facilita
            a reciclagem e contribui para a redução do desperdício. Ao utilizar lixeiras adequadas para cada tipo de material,
            você ajuda a promover a coleta seletiva e garante que os recursos sejam reaproveitados de forma eficiente.
            </p>
          </div>
          <div className="quadroajudaright">
            <Image
              src="/img/ebicicle.png"
              alt="bicicle"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
            <p className="text-md">
            A bicicleta é um meio de transporte que não emite poluentes e ajuda a reduzir
            o tráfego nas cidades. Usá-la no lugar do carro não só melhora sua saúde física, mas também contribui para a diminuição
            das emissões de gases de efeito estufa e melhora a qualidade do ar nas áreas urbanas.
            </p>
          </div>
          <div className="quadrosajudarleft">
            <Image
              src="/img/eagua.png"
              alt="agua"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
            <p className="text-md">
            Práticas simples no cotidiano podem ajudar a economizar água, um dos recursos mais preciosos do planeta.
            Fechar a torneira enquanto escova os dentes, tomar banhos mais rápidos e reutilizar a água da chuva são algumas
            das ações que podem fazer a diferença. Pequenas mudanças podem resultar em grandes impactos na preservação da água.
            </p>
          </div>
        </div>
      </div>

      <Rodape />
    </div>
  );
}
