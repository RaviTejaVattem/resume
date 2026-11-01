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

export interface ProjectLink {
  readonly label: string;
  readonly url: string;
}

export interface Project {
  readonly name: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly links: readonly ProjectLink[];
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
  readonly careerStart: string;
  readonly summary: string;
  readonly strengths: readonly string[];
  readonly skills: readonly SkillGroup[];
  readonly experience: readonly Experience[];
  readonly projects: readonly Project[];
  readonly education: readonly Education[];
  readonly interests: readonly string[];
}
