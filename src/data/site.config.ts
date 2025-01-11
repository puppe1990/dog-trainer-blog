interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://blog.felixpet.com.br/', // Write here your website url
	author: 'Felix Pet', // Site author
	title: 'Felix Pet Blog', // Site title.
	description: 'Felix Pet Blog', // Description to display in the meta tags
	lang: 'pt-BR',
	ogLocale: 'pt_BR',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
