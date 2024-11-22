import { NextResponse } from "next/server";
import { promises as fs } from "fs";

type SuporteData = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
};

const filePath = process.cwd() + "/src/data/data.json";

async function readData(): Promise<SuporteData[]> {
  const file = await fs.readFile(filePath, "utf-8");
  return JSON.parse(file);
}

async function writeData(data: SuporteData[]): Promise<void> {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

export async function GET() {
  try {
    const suporteData = await readData();
    return NextResponse.json(suporteData);
  } catch (err) {
    console.error("Erro no GET:", err);
    return NextResponse.json({ error: "Erro ao ler os dados." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const suporteData = await readData();

    const { nome, email, telefone, assunto }: SuporteData = await request.json();

    const novoRegistro: SuporteData = {
      id: suporteData.length + 1,
      nome,
      email,
      telefone,
      assunto,
    };

    suporteData.push(novoRegistro);

    await writeData(suporteData);

    return NextResponse.json({ message: "Dados salvos com sucesso." }, { status: 201 });
  } catch (err) {
    console.error("Erro no POST:", err);
    return NextResponse.json({ error: "Erro ao salvar os dados." }, { status: 500 });
  }
}
