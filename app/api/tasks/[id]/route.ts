import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// PUT: Update a task by ID
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { db } = await connectToDatabase();
    const { title, completed } = await req.json();
    const result = await db.collection('tasks').updateOne(
      { _id: new ObjectId(params.id) },
      { $set: { title, completed } }
    );
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error updating task', error }, { status: 500 });
  }
}

// DELETE: Delete a task by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection('tasks').deleteOne({ _id: new ObjectId(params.id) });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting task', error }, { status: 500 });
  }
}
