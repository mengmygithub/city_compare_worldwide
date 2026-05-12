import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const from = (url.searchParams.get('from') || 'AUD').toUpperCase();
    const to = (url.searchParams.get('to') || 'CNY').toUpperCase();

    const upstream = `https://api.frankfurter.app/latest?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
    const res = await fetch(upstream, { next: { revalidate: 3600 } });
    if (!res.ok) {
      return NextResponse.json({ error: `upstream ${res.status}` }, { status: 502 });
    }
    const json = (await res.json()) as { date?: string; rates?: Record<string, number> };
    const rate = json?.rates?.[to];
    if (typeof rate !== 'number') {
      return NextResponse.json({ error: 'invalid rate' }, { status: 502 });
    }

    return NextResponse.json({
      from,
      to,
      rate,
      date: json.date || null,
      provider: 'frankfurter'
    });
  } catch {
    return NextResponse.json({ error: 'unknown' }, { status: 500 });
  }
}

