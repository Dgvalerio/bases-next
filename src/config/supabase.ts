import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://ionoralpevalsvjcljrj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDI4MTQyNSwiZXhwIjoxOTM1ODU3NDI1fQ.aqb-rRytACg-fpMKWC3P2p_AlAgPcgYSGNieSAVkm4w'
);

// Table room {
//   id integer [pk, increment, not null]
//   name varchar [not null]
//   level integer [not null]
//   capacity integer [not null]
// }

// Table resident {
//   id integer [pk, increment, not null]
//   name varchar [not null]
//   genre genre [not null]
//   stars integer [not null]
//   room integer [ref: > room.id]
// }

// enum genre {
//   male
//   female
// }

// Table resident_skill {
//   resident integer [ref: > resident.id, not null]
//   skill integer [ref: > skill.id, not null]
//   level integer [not null]
// }

// Table skill {
//   id integer [pk, increment, not null]
//   material varchar [not null]
//   max_level integer [not null]
//   title varchar [not null]
// }
