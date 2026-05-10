import { createClient } from '@supabase/supabase-js'

// هذا رابط سيرفرك ومفتاح الدخول اللي جبناهم من الصورة
const supabaseUrl = 'https://nuqvlzfbenzjhjdrlzrn.supabase.co'
const supabaseAnonKey = 'EyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51cXZsemZiZW5zamhqZHJsenJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyNTg4NjcsImV4cCI6MjA5MzgzNDg2N30.T01IwSR4HsTGrrgHvfvlcGJO-epeUCGEZG_nBBqFk9I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)