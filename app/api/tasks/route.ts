// app/api/tasks/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

// GET: Fetch all tasks
export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const tasks = await db.collection('tasks').find({}).toArray();
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching tasks', error }, { status: 500 });
  }
}

// POST: Add a new task
export async function POST(req: NextRequest) {
  try {
    const { db } = await connectToDatabase();
    const { title, completed } = await req.json();
    const newTask = { title, completed: completed || false };
    const result = await db.collection('tasks').insertOne(newTask);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error adding task', error }, { status: 500 });
  }
}
