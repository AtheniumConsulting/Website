# Content model and publishing flow

This note defines what content the Athenium website holds in Sanity and how a document moves from a draft to a published page. The schemas live in `src/sanity/schemas`. The flow lives in `src/sanity/publishing.ts` and is covered by tests.

## Content types

The model has three document types and one shared object.

- Article. A statement title, a summary of three sentences at most, a body, an author, optional evidence, an optional link to the LinkedIn post and an optional related position paper.
- Offering. A name, a kind of product or service, a one-sentence outcome, a description and at least one evidence entry.
- Position paper. A statement title, a summary, a body, an optional PDF file and optional evidence.
- Evidence. A claim, the harvested source that supports it and the date of that source.

## Publishing steps

Every document carries a review step and moves one step at a time.

1. Draft. The author writes and saves.
2. In review. A reviewer other than the author reads the document.
3. Approved. The reviewer is named on the document.
4. Published. A named publisher takes the final step and the document goes live.

The author cannot review their own work. Only a named publisher may publish. The list of named publishers is held in `NAMED_PUBLISHERS` and currently contains the placeholder `[publisher name]`.

## LinkedIn

Content pushed to LinkedIn publishes alongside an article or position paper on the site. The article is published first. The LinkedIn post then links to it, and the post address is recorded in the article. The site never publishes a LinkedIn post by itself.

## Evidence rule

A claim about an offering must trace to harvested material. An offering cannot be saved without at least one evidence entry.

## What is not done yet

- The team must supply the named publishers and the reviewers.
- The Sanity project, dataset and tokens do not exist. Creating them needs account access, which the team controls. Environment values will use placeholders until then.
- The Studio and the page that renders articles are not built. The review step is a field today. Enforcing it inside the Studio is the next piece of work once the project exists.
- The done condition of issue 5 asks for one article to move from draft to published. The tests prove the steps with placeholder names. A live run in a real Studio waits on the project.
