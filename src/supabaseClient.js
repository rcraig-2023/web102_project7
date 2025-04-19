// filepath: /src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://kjyaybyzuimxklpmffnd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqeWF5Ynl6dWlteGtscG1mZm5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0Nzk3NjQsImV4cCI6MjA2MDA1NTc2NH0.KFDMJb49Iqfo09L0dfmgME6uwf4WE915eE5GmW04KvU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);