export interface SkillGroup {
  readonly name: string;
  readonly items: readonly string[];
}

export interface Experience {
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly technologies: readonly string[];
  readonly highlights: readonly string[];
}

export interface Education {
  readonly institution: string;
  readonly qualification: string;
  readonly period: string;
  readonly result: string;
}

export interface Resume {
  readonly name: string;
  readonly roles: readonly string[];
  readonly location: string;
  readonly email: string;
  readonly github: string;
  readonly linkedin: string;
  readonly summary: string;
  readonly strengths: readonly string[];
  readonly skills: readonly SkillGroup[];
  readonly experience: readonly Experience[];
  readonly education: readonly Education[];
  readonly interests: readonly string[];
}
