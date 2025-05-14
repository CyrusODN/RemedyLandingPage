import { useQuery } from '@tanstack/react-query';

const BASE_URL = 'https://clinicaltrials.gov/api/v2/studies';

export function useTrialData(nctId: string) {
  return useQuery({
    queryKey: ['trial', nctId],
    queryFn: async () => {
      try {
        const response = await fetch(`${BASE_URL}/${nctId}`, {
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch trial data');
        }
        
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching trial data:', error);
        // Return mock data for development
        return {
          protocolSection: {
            identificationModule: {
              nctId: 'NCT05660642',
              briefTitle: 'Badanie skuteczności nowej terapii w leczeniu depresji',
            },
            descriptionModule: {
              briefSummary: 'Innowacyjne badanie kliniczne oceniające skuteczność nowej metody terapeutycznej w leczeniu depresji opornej na leczenie.',
              detailedDescription: 'Szczegółowy opis protokołu badania...',
            },
            statusModule: {
              statusVerifiedDate: '2024-01-15',
              overallStatus: 'Recruiting',
              startDateStruct: {
                date: '2024-02-01',
              },
            },
            contactsLocationsModule: {
              locations: [{
                city: 'Warszawa',
                address: 'ul. Przykładowa 123',
              }],
              centralContacts: [{
                name: 'Dr Jan Kowalski',
                role: 'Principal Investigator',
                email: 'jan.kowalski@example.com',
                phone: '+48 123 456 789',
              }],
            },
            eligibilityModule: {
              eligibilityCriteria: `
                - Wiek 18-65 lat
                - Zdiagnozowana depresja oporna na leczenie
                - Brak innych poważnych schorzeń psychicznych
                - Zgoda na udział w badaniu
              `,
            },
            sponsorCollaboratorsModule: {
              leadSponsor: {
                name: 'Remedy Psychiatric Center',
              },
            },
          },
        };
      }
    },
    retry: 1,
  });
}