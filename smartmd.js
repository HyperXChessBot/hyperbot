function Section(docs){
	return `## ${docs.title}\n${docs.paragraphs.map(paragraph=>`${paragraph}`).join("\n")}`	
}

function EnvVars(docs){
	return `${Object.entries(docs).map(entry=>`**${entry[0]}** ${entry[1]}`).join('\n')}`
}

module.exports = {
	Section: Section,
	EnvVars: EnvVars
}