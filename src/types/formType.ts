export interface FormSubmission {
  id: string;
  userId: number;
  formType: "health-assessment" | "incident-report";
  submittedAt: string;
  data: unknown;
}
export interface IncidentReportFormData {
  userId: number;

  residentName: string;
  caregiverName: string;
  date: string;
  time: string;
  location: string;
  roomNo: string;

  incidentType: string[];

  description: string;

  actionsTaken: string[];

  followUpNotes: string;
}
export interface HealthAssessmentFormData {
  userId: number;

  residentName: string;
  caregiverName: string;
  age: number;
  gender: string;
  roomNo: string;
  date: string;

  temperature: string;
  bloodPressure: string;
  heartRate: string;
  oxygenLevel: string;
  respiratoryRate: string;

  symptoms: string[];

  caregiverNotes: string;

  activities: {
    walk: {
      morning: boolean;
      afternoon: boolean;
      evening: boolean;
    };
    exercise: {
      morning: boolean;
      afternoon: boolean;
      evening: boolean;
    };
    therapy: {
      morning: boolean;
      afternoon: boolean;
      evening: boolean;
    };
    socialInteraction: {
      morning: boolean;
      afternoon: boolean;
      evening: boolean;
    };
  };

  meals: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
    snacks: boolean;
  };

  signature: string;
}