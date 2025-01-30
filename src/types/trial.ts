import { z } from 'zod';

export const TrialStatus = z.enum(['RECRUITING', 'ONGOING', 'COMPLETED', 'ARCHIVED']);
export type TrialStatus = z.infer<typeof TrialStatus>;

export const TrialCategory = z.enum(['DEPRESSION', 'ANXIETY', 'PTSD', 'SCHIZOPHRENIA', 'BIPOLAR', 'OTHER']);
export type TrialCategory = z.infer<typeof TrialCategory>;

export const TrialPhase = z.enum(['PHASE_1', 'PHASE_2', 'PHASE_3', 'PHASE_4']);
export type TrialPhase = z.infer<typeof TrialPhase>;

export const Trial = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  status: TrialStatus,
  category: TrialCategory,
  phase: TrialPhase,
  startDate: z.date(),
  endDate: z.date().optional(),
  location: z.object({
    city: z.string(),
    address: z.string(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
  }),
  eligibilityCriteria: z.array(z.string()),
  protocol: z.string(),
  sponsors: z.array(z.string()),
  researchTeam: z.array(z.object({
    name: z.string(),
    role: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
  })),
  tags: z.array(z.string()),
  clinicalTrialsGovId: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Trial = z.infer<typeof Trial>;

export const TrialApplication = z.object({
  id: z.string(),
  trialId: z.string(),
  patientId: z.string(),
  status: z.enum(['PENDING', 'APPROVED', 'REJECTED']),
  submittedAt: z.date(),
  processedAt: z.date().optional(),
  notes: z.string().optional(),
});

export type TrialApplication = z.infer<typeof TrialApplication>;