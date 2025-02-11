import { sql } from "@/_libs/constants";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const { title, checked } = await req.json();

  const updateTodo = await sql`
    UPDATE todo
    SET title = ${title}, checked = ${checked}
    WHERE id = ${id}
  `;

  return NextResponse.json(updateTodo);
};

export const DELETE = async (
  _req: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  }
) => {
  const { id } = params;

  const deleteTodo = await sql`
    DELETE FROM todo
    WHERE id = ${id}
  `;

  return NextResponse.json({ success: true, data: deleteTodo });
};
