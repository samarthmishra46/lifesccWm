/*
  # Create Leads Table for LIFESCC

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text) - Full name of the lead
      - `phone` (text) - Contact phone number
      - `city` (text) - City of the lead
      - `source_section` (text) - Which section the CTA was clicked from
      - `created_at` (timestamptz) - Timestamp of submission
      
  2. Security
    - Enable RLS on `leads` table
    - Add policy for inserting leads (public access for form submissions)
    - Add policy for reading leads (authenticated users only)
    
  3. Notes
    - This table stores all lead submissions from the LIFESCC landing page
    - Public insert access allows form submissions without authentication
    - Only authenticated staff can view the leads
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  city text NOT NULL,
  source_section text DEFAULT 'unknown',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);