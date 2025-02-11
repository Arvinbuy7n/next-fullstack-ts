import { sql } from "@/_libs/constants";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json(await sql`SELECT * from todo`);
};

export const POST = async (req: NextRequest) => {
  const { title, checked } = await req.json();

  const newTodo = { id: nanoid(), title, checked };

  const createTodo = await sql(`
     INSERT INTO todo (id, title, checked) 
     VALUES ('${newTodo.id}', '${newTodo.title}', '${newTodo.checked}')
    `);

  return NextResponse.json(createTodo);
};
