// exercise.model.ts
export interface Exercise {
  id: number;
  bodyPart: string;
  des: string;
  Excercise: GymExercise[];
}

export interface GymExercise {
  excerciseName: string;
  sets: number;
  reps: number[];
  weight: number[];
}
