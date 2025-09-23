import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
// const supabasePublicKey = import.meta.env.VITE_SUPABASE_PUBLIC_KEY as string
const supabaseServiceKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY as string

export const supabase = createClient(supabaseUrl, supabaseServiceKey)