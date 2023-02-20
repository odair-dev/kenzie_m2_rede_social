import { users, posts, suggestUsers } from "./database.js";

import { renderNewPost } from "./renderNewPost.js";

import { renderPosts } from "./renderPosts.js";

import { rendersuggestUsers } from "./renderSuggestUsers.js";

renderNewPost(users[0]);

renderPosts(posts);

rendersuggestUsers(suggestUsers);