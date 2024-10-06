import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabase: SupabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_KEY!,);

export async function getViews(slug: string): Promise<number> {
  const { data, error } = await supabase.from('views').select('count').match({ slug }).single();
  if (error?.details?.includes(`0 rows`)) {
    const data = await supabase.from(`views`).insert({ slug, count: 1 }).single();
    return data['count'] as number;
  }
  if (!data) {
    return 0;
  }
  return data.count;
};

export async function registerViews(slug: string): Promise<void> {
  await supabase.rpc("increment", {
    slug_text: slug,
  });
}

