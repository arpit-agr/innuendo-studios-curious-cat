// Function for transforming line breaks into paragraphs and <br> tags
export const transformLineBreaks = text => {
	// Normalize multiple newlines (\n\n\n or more) to just two newlines (\n\n)
	const normalizedText = text.replace(/\n{3,}/g, '\n\n');

	// Split the text into paragraphs by `\n\n` and wrap each section in <p> tags
	const paragraphs = normalizedText.split('\n\n').map(paragraph => {
		// Replace single newlines with <br> tags within each paragraph
		const withLineBreaks = paragraph.replace(/\n/g, '<br>');
		return `<p><span>${withLineBreaks}</span></p>`;
	});

	return paragraphs.join('');
};

// Function for transforming URLs into anchor tags
export const transformLinks = text => {
	const urlRegex = /(https?:\/\/[^\s]+)/g;

	// Replace URLs with anchor tags
	return text.replace(urlRegex, url => {
		return `<a href="${url}">${url}</a>`;
	});
};
