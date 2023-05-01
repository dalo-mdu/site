import client from '@/graphql/client';
import { LIST_BOARD, LIST_SONG } from '@/graphql/queries';
import { ISongAttributes } from '@/types/types';
import { NextResponse } from 'next/server';

export async function GET() {
    const { data } = await client.query({ query: LIST_SONG })
  
  const Songs: ISongAttributes[] = data.songs.data;
  return NextResponse.json({Songs })
}