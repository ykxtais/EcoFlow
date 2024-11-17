import { NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function GET() {
  try {
    const file = await fs.readFile(process.cwd() + "/src/data/data.json", "utf-8");
    const suporteData = JSON.parse(file);
    return NextResponse.json(suporteData);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao ler os dados." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const file = await fs.readFile(process.cwd() + "/src/data/data.json", "utf-8");
    const suporteData = JSON.parse(file);

    const { nome, email, telefone, assunto }: { nome: string; email: string; telefone: string; assunto: string } = await request.json();

    const novoRegistro = {
      id: suporteData.length + 1,
      nome,
      email,
      telefone,
      assunto,
    };

    suporteData.push(novoRegistro);

    await fs.writeFile(process.cwd() + "/src/data/data.json", JSON.stringify(suporteData, null, 2));

    return NextResponse.json({ message: "Dados salvos com sucesso." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao salvar os dados." }, { status: 500 });
  }
}
