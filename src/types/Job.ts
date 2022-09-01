export interface Contact {
	name: string
	email: string
	phone: string
	photo: string
}

export interface JobLocation {
  location: {
    text: string
  }
}

export interface Job {
	id: number
	benefits: string[]
	categories: string[]
	company: {
		id: number
		slug: string
		name: string
		name_internal: string
		website: string
		industry: string
		descr: string
		logo: string
		cover: string
	}
	contact: Contact
	departments: string[]
	descr: string
	employment_type: string
	experience: string
	from_date: string
	function: string
	language: 'en' | 'es'
	layers_1: string[]
	layers_2: string[]
	layers_3: string[]
	layers_4: string[]
	layers_5: string[]
	linkedInCompanyId: number
	locations: JobLocation[]
	slug: string
	title: string
	to_date: string | null
	urls: {
		ad: string
		apply: string
	}
	video: {
		content: string | null
		url: string
	}
	internal_reference: string | null
	owner: {
		id: number
		name: string
		email: string
	}
	skills: string
}