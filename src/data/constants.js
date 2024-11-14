import {getCollection} from 'astro:content';
const answers = await getCollection('answers');

export const USER_NAME = 'InnuendoStudios';
export const ANSWER_COUNT = answers.length;

export const SITE_TITLE = 'Innuendo Studios';
export const youtubeUrl =
	'https://www.youtube.com/channel/UC5fdssPqmmGhkhsJi4VcckA';
export const blueskyUrl =
	'https://bsky.app/profile/innuendostudios.bsky.social';
export const twitterUrl = 'https://x.com/InnuendoStudios';
export const tumblrUrl = 'https://innuendostudios.tumblr.com/';
export const patreonUrl = 'https://www.patreon.com/innuendostudios/';
export const curiousCatUrl = 'https://curiouscat.live/InnuendoStudios';
