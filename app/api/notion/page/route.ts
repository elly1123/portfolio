import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

// 특정 페이지의 내용을 가져오는 API
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageId = searchParams.get('pageId');

  if (!pageId) {
    return NextResponse.json({ error: 'Page ID is required' }, { status: 400 });
  }

  try {
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
    });

    return NextResponse.json({ blocks: blocks.results });
  } catch (error) {
    console.error('Notion API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch page', details: error },
      { status: 500 }
    );
  }
}
