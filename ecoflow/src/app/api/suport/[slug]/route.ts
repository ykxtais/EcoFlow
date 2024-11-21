import { NextResponse } from "next/server";
import { promises as fs } from "fs";

const filePath = process.cwd() + "/src/data/data.json";

async function readData() {
  const file = await fs.readFile(filePath, "utf-8");
  return JSON.parse(file);
}

async function writeData(data: any) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await readData();
    const item = data.find((entry: any) => entry.id === parseInt(params.id));

    if (!item) {
      return NextResponse.json({ error: "Registro não encontrado." }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao processar a requisição." }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await readData();
    const index = data.findIndex((entry: any) => entry.id === parseInt(params.id));

    if (index === -1) {
      return NextResponse.json({ error: "Registro não encontrado." }, { status: 404 });
    }

    const updatedEntry = await request.json();
    data[index] = { ...data[index], ...updatedEntry }; 

    await writeData(data);
    return NextResponse.json({ message: "Registro atualizado com sucesso." });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao atualizar o registro." }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await readData();
    const index = data.findIndex((entry: any) => entry.id === parseInt(params.id));

    if (index === -1) {
      return NextResponse.json({ error: "Registro não encontrado." }, { status: 404 });
    }

    data.splice(index, 1); 
    await writeData(data);

    return NextResponse.json({ message: "Registro excluído com sucesso." });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao excluir o registro." }, { status: 500 });
  }
}
