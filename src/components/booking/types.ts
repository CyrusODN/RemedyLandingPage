import { z } from "zod";

export const ServiceSchema = z.object( {
  id: z.string(),
  name: z.string(),
  description: z.string(),
  duration: z.string(),
  price: z.union( [
    z.string(),
    z.object( {
      first: z.string(),
      follow: z.string(),
    } ),
  ] ),
  icon: z.any(),
  category: z.string().optional(),
} );

export const PersonalInfoSchema = z.object( {
  firstName: z.string().min( 2, "First name is required" ),
  lastName: z.string().min( 2, "Last name is required" ),
  email: z.string().email( "Invalid email address" ),
  phone: z.string().min( 9, "Invalid phone number" ),
  notes: z.string().optional(),
  consent: z.boolean().refine( ( val ) => val === true, {
    message: "You need to agree to data processing to proceed.",
  } ),
} );

export type Service = z.infer<typeof ServiceSchema>;
export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

export interface BookingData {
  service: Service | null;
  date: Date | null;
  time: string | null;
  personalInfo: PersonalInfo | null;
  clinic: any;
  doctor: Service | null;

}
