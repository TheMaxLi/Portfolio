export interface ProjectData {
	title: string;
	role: string;
	timeline: string;
	source: string;
	technologies: readonly string[];
	nextProject: string | null;
	previousProject: string | null;
}
