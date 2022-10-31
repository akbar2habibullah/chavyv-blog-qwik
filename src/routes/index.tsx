import { component$, useMount$, useStore } from '@builder.io/qwik'
import { DocumentHead } from '@builder.io/qwik-city'
import { Link } from '@builder.io/qwik-city'
import axios from 'axios'

import Header from '~/components/header/header'

export default component$(() => {
	const store = useStore({
		posts: [],
	})

	useMount$(async () => {
		// This code will run on component creation to fetch the data.
		const { data } = await axios.get(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`)

		store.posts = data.map
			.filter((post: any) => post.published)
			.map((post: any) => {
				return post
			})
	})

	return (
		<div class=''>
			<Header />
			<div class=''>
				<h1>Posts</h1>
				<div class='posts'>
					{store.posts.map((post: any) => (
						<Link href={`/blog/${post.slug}`}>
							<div class='card'>
								<div class='card-body'>
									<div class='card-title'>
										<h2>{post.page}</h2>
									</div>
									<div class='card-subtitle'>
										<div>Posted on {post.date}</div>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'Chavyv Blog',
}
