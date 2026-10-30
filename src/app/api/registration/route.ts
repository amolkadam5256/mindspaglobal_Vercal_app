import { NextRequest, NextResponse } from 'next/server';

const professions = new Set([
  'Business Owner', 'Working Professional', 'Trainer or Coach', 'Student',
  'Entrepreneur', 'Freelancer', 'Other',
]);
const seriousnessOptions = new Set(['yes', 'no', 'later']);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function validText(value: unknown, max: number): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= max;
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  let originHost = '';
  try {
    originHost = origin ? new URL(origin).host : '';
  } catch {
    originHost = '';
  }
  if (!originHost || !host || originHost !== host) {
    return NextResponse.json({ error: 'Request origin could not be verified.' }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Please submit a valid form.' }, { status: 400 });
  }
  if (!isRecord(body)) return NextResponse.json({ error: 'Please submit a valid form.' }, { status: 400 });

  const phone = body.phone;
  const location = body.location;
  const valid = validText(body.full_name, 120)
    && body.full_name.trim().length >= 2
    && typeof phone === 'string' && /^\+?[\d\s().-]{7,20}$/.test(phone.trim())
    && typeof body.profession === 'string' && professions.has(body.profession)
    && (location === '' || (typeof location === 'string' && location.length <= 120))
    && typeof body.seriousness === 'string' && seriousnessOptions.has(body.seriousness);

  if (!valid) return NextResponse.json({ error: 'Check the required fields and try again.' }, { status: 400 });
  return NextResponse.json({ valid: true });
}
