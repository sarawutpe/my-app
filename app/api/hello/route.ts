import { NextRequest, NextResponse } from "next/server";

// Dummy data store (replace with database in real application)
let tasks = [
  { id: 1, title: "Learn Next.js", completed: false },
  { id: 2, title: "Build a CRUD API", completed: false },
];

// CREATE
export async function POST(request: NextRequest) {
  const body = await request.json();
  const newTask = { id: tasks.length + 1, ...body };
  tasks.push(newTask);
  return NextResponse.json(newTask, { status: 201 });
}

// READ (all)
export async function GET() {
  return NextResponse.json(tasks);
}
