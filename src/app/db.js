import {createClient} from '@supabase/supabase-js'


// Create a single supabase client for interacting with your database
const supabase = createClient('https://mormdczupqgqndyumgof.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vcm1kY3p1cHFncW5keXVtZ29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1ODI0NzYsImV4cCI6MjAzNTE1ODQ3Nn0.N6BiIFAETZKSlfpDh6HssTT6yH8z9R2UShChq8a_1Eo')
export default supabase
