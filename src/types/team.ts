export interface TeamMemberType {
  id: string;
  name: string;
  role: string;
  image: string;
  imageLarge?: string;
  bio: string;
  specializations: string[];
  education?: string[];
  certifications?: string[];
}